import os
import re
import json
import sys
import requests
from urllib.parse import urlparse, urljoin
from concurrent.futures import ThreadPoolExecutor, as_completed

# Load configuration from environment variables
MAX_WORKERS = int(os.environ.get('MAX_WORKERS', 5))
IGNORED_STATUS_CODES = set(map(int, os.environ.get('IGNORED_STATUS_CODES', '200,403,405,415,501').split(',')))
FILE_EXTENSIONS = os.environ.get('FILE_EXTENSIONS', '.md,.mdx').split(',')
INTERNAL_404_URL = os.environ.get('INTERNAL_404_URL')

def check_url_status(url):
    """Performs a progressive set of checks on the URL."""
    print(f"Checking URL: {url}")  # Logging the URL being checked
    try:
        # Quick check: HEAD request
        response = requests.head(url, allow_redirects=False, timeout=5)
        print(f"HEAD request: {response.status_code} {response.reason}, URL: {response.url}")  # Log response

        # Handle redirects (3xx status codes)
        if 300 <= response.status_code < 400:
            redirect_url = response.headers.get('Location')
            if redirect_url:
                # Handle relative redirects
                if not urlparse(redirect_url).netloc:
                    redirect_url = urljoin(url, redirect_url)
                print(f"Redirected to: {redirect_url}")
                # Follow the redirect
                return check_url_status(redirect_url)

        # If HEAD request returns problematic code, follow up with GET
        if response.status_code in {404, 405} or response.status_code >= 400:
            return perform_detailed_check(url)
        elif response.status_code in IGNORED_STATUS_CODES or response.url == INTERNAL_404_URL:
            return response.status_code, response.reason, response.url
        else:
            return response.status_code, response.reason, response.url
    
    except requests.RequestException as e:
        print(f"RequestException: {str(e)}")  # Log exceptions
    
    # Fallback: Perform full GET request if HEAD fails
    return perform_detailed_check(url)

def perform_detailed_check(url):
    """Performs a more thorough check with GET if HEAD fails."""
    print(f"Performing GET request for URL: {url}")  # Logging the GET request
    try:
        response = requests.get(url, allow_redirects=True, timeout=10)
        print(f"GET request: {response.status_code} {response.reason}, URL: {response.url}")  # Log response
        if response.status_code in IGNORED_STATUS_CODES or response.url == INTERNAL_404_URL:
            return response.status_code, response.reason, response.url
        return response.status_code, response.reason, response.url
    except requests.RequestException as e:
        print(f"RequestException in GET: {str(e)}")  # Log exceptions
        return None, str(e), None

def find_urls(text):
    """Finds valid URLs, ensuring proper markdown syntax."""
    # Improved regex pattern to avoid catching markdown syntax errors
    url_pattern = re.compile(r'\((https?://[^\s"\'<>\)]+)\)')
    return url_pattern.findall(text)

def is_valid_url(url):
    """Checks if a URL is valid."""
    try:
        result = urlparse(url)
        return all([result.scheme, result.netloc])
    except ValueError:
        return False

def process_file(file_path):
    """Processes each file to check URLs."""
    file_report = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            for line_number, line in enumerate(f, 1):
                urls = find_urls(line)
                for url in urls:
                    if is_valid_url(url):
                        status_code, reason, final_url = check_url_status(url)
                        if status_code and status_code not in IGNORED_STATUS_CODES:
                            file_report.append({
                                'file': file_path,
                                'line': line_number,
                                'url': url,
                                'status_code': status_code,
                                'reason': reason,
                                'final_url': final_url
                            })
    except IOError as e:
        print(f"Error reading file {file_path}: {str(e)}")
    return file_report

def check_location(location):
    """Recursively checks all files with specified extensions in the given location."""
    all_reports = []
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_file = {}
        if os.path.isfile(location):
            future = executor.submit(process_file, location)
            future_to_file[future] = location
        else:
            for root, _, files in os.walk(location):
                for file in files:
                    if any(file.endswith(ext) for ext in FILE_EXTENSIONS):
                        file_path = os.path.join(root, file)
                        future = executor.submit(process_file, file_path)
                        future_to_file[future] = file_path

        for future in as_completed(future_to_file):
            file_path = future_to_file[future]
            try:
                report = future.result()
                all_reports.extend(report)
            except Exception as exc:
                print(f'{file_path} generated an exception: {exc}')

    return all_reports

def generate_report(report):
    """Generates a JSON report from the collected data."""
    output = {
        "total_issues": len(report),
        "issues": report
    }
    return json.dumps(output)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python urlcheck.py <directory_to_check>", file=sys.stderr)
        sys.exit(1)

    check_path = sys.argv[1]
    print(f"Checking URLs in location: {check_path}", file=sys.stderr)
    report = check_location(check_path)
    output = generate_report(report)
    print(output)
