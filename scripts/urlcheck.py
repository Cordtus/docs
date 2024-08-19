import os
import re
import json
import sys
import requests
from urllib.parse import urlparse
from concurrent.futures import ThreadPoolExecutor, as_completed

INTERNAL_404_URL = "https://docs.osmosis.zone/404.html"
MAX_WORKERS = 5

IGNORED_STATUS_CODES = {200, 403, 405, 415, 501}

def check_url_status(url):
    """Performs a progressive set of checks on the URL."""
    try:
        # Stage 1: Quick HEAD request
        response = requests.head(url, allow_redirects=True, timeout=5)
        if response.status_code in IGNORED_STATUS_CODES:
            return response.status_code, response.reason, response.url
        if response.status_code == 404:
            # Proceed to more thorough checks if 404 is encountered
            return perform_detailed_check(url)
    except requests.RequestException:
        pass
    
    # Stage 2: Fallback to GET request
    return perform_detailed_check(url)

def perform_detailed_check(url):
    """Performs a more thorough check with GET if HEAD fails."""
    try:
        response = requests.get(url, allow_redirects=True, timeout=10)
        if response.status_code in IGNORED_STATUS_CODES:
            return response.status_code, response.reason, response.url
        return response.status_code, response.reason, response.url
    except requests.RequestException as e:
        return None, str(e), None

def find_urls(text):
    """Finds valid URLs, avoiding Markdown embedded URLs."""
    url_pattern = re.compile(r'https?://[^\s"\'<>\)]*')
    urls = url_pattern.findall(text)
    # Filter out Markdown embedded URLs
    filtered_urls = [url for url in urls if not url.startswith('[')]
    return filtered_urls

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
                        if status_code and status_code not in IGNORED_STATUS_CODES and final_url != INTERNAL_404_URL:
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
    """Recursively checks all .md and .mdx files in the specified location."""
    all_reports = []
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_file = {}
        if os.path.isfile(location):
            future = executor.submit(process_file, location)
            future_to_file[future] = location
        else:
            for root, _, files in os.walk(location):
                for file in files:
                    if file.endswith(('.md', '.mdx')):
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
    check_path = os.environ.get('CHECK_PATH', './docs/')
    print(f"Checking URLs in location: {check_path}", file=sys.stderr)
    report = check_location(check_path)
    output = generate_report(report)
    print(output)
