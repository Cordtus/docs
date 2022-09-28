"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[9435],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=s,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const a={title:"Relayer Guide",sidebar_position:2},o="Relayer Guide",l={unversionedId:"relaying/relayer-guide",id:"relaying/relayer-guide",title:"Relayer Guide",description:"The following information is based off of this guide created by Clemens from CryptoCrew.",source:"@site/docs/osmosis-core/relaying/relayer-guide.md",sourceDirName:"relaying",slug:"/relaying/relayer-guide",permalink:"/osmosis-core/relaying/relayer-guide",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-core/relaying/relayer-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Relayer Guide",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduccion",permalink:"/osmosis-core/relaying/"},next:{title:"IBC Channels",permalink:"/osmosis-core/relaying/channels"}},i={},c=[{value:"Minimum Requirements",id:"minimum-requirements",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Osmosis Daemon Settings",id:"osmosis-daemon-settings",level:2},{value:"Cosmos Hub Daemon Settings",id:"cosmos-hub-daemon-settings",level:2},{value:"Install Rust Dependencies",id:"install-rust-dependencies",level:2},{value:"Build &amp; setup Hermes",id:"build--setup-hermes",level:2},{value:"Final Checks",id:"final-checks",level:2},{value:"Helpful Commands",id:"helpful-commands",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"relayer-guide"},"Relayer Guide"),(0,s.kt)("p",null,"The following information is based off of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/clemensgg/RELAYER-dev-crew/blob/main/HERMES/omniflix/relayer-doc.md"},"this guide")," created by Clemens from CryptoCrew."),(0,s.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"8-core (4 physical core), x86_64 architecture processor"),(0,s.kt)("li",{parentName:"ul"},"32 GB RAM (or equivalent swap file set up)"),(0,s.kt)("li",{parentName:"ul"},"1TB+ nVME drives")),(0,s.kt)("p",null,"If running many nodes on a single VM, ",(0,s.kt)("a",{parentName:"p",href:"https://tecadmin.net/increase-open-files-limit-ubuntu/"},"ensure your open files limit is increased")),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"Before beginning, ensure you have an osmosis node running in the background of the same machine you intend to relay on. Follow ",(0,s.kt)("a",{parentName:"p",href:"../../networks/join-mainnet"},"this guide")," or ",(0,s.kt)("a",{parentName:"p",href:"https://get.osmosis.zone"},"use the Osmosis installer")," to set up an Osmosis node if you have not already."),(0,s.kt)("p",null,"In this guide, we will be relaying between Osmosis (channel-0) and Cosmos Hub (channel-141). When setting up your Cosmos and Osmosis full nodes, be sure to offset the ports being used in both the app.toml and config.toml files of the respective chains (I will show how to do this below)."),(0,s.kt)("p",null,"In this example, I will be using the default ports for Osmosis and will manually change the ports of the Cosmos node."),(0,s.kt)("h2",{id:"osmosis-daemon-settings"},"Osmosis Daemon Settings"),(0,s.kt)("p",null,"Here I will leave ",(0,s.kt)("inlineCode",{parentName:"p"},"grpc server")," on port 9090 in the ",(0,s.kt)("inlineCode",{parentName:"p"},"app.toml")," directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/.osmosisd/config/app.toml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[grpc]\n\n# Enable defines if the gRPC server should be enabled.\nenable = true\n\n# Address defines the gRPC server address to bind to.\naddress = "0.0.0.0:9090"\n')),(0,s.kt)("p",null,"Here I will leave the ",(0,s.kt)("inlineCode",{parentName:"p"},"pprof_laddr")," set to port 6060, ",(0,s.kt)("inlineCode",{parentName:"p"},"rpc laddr")," to port 26657, and ",(0,s.kt)("inlineCode",{parentName:"p"},"p2p laddr")," to 26656 in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.toml")," directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/.osmosisd/config/config.toml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'# pprof listen address (https://golang.org/pkg/net/http/pprof)\npprof_laddr = "localhost:6060"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[rpc]\n\n# TCP or UNIX socket address for the RPC server to listen on\nladdr = "tcp://127.0.0.1:26657"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[p2p]\n\n# Address to listen for incoming connections\nladdr = "tcp://0.0.0.0:26656"\n')),(0,s.kt)("h2",{id:"cosmos-hub-daemon-settings"},"Cosmos Hub Daemon Settings"),(0,s.kt)("p",null,"Here I will set ",(0,s.kt)("inlineCode",{parentName:"p"},"grpc server")," to port 9092 in the ",(0,s.kt)("inlineCode",{parentName:"p"},"app.toml")," directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/.gaiad/config/app.toml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[grpc]\n\n# Enable defines if the gRPC server should be enabled.\nenable = true\n\n# Address defines the gRPC server address to bind to.\naddress = "0.0.0.0:9092"\n')),(0,s.kt)("p",null,"Here I will set the ",(0,s.kt)("inlineCode",{parentName:"p"},"pprof_laddr")," to port 6062, ",(0,s.kt)("inlineCode",{parentName:"p"},"rpc laddr")," to port 26757, and ",(0,s.kt)("inlineCode",{parentName:"p"},"p2p laddr")," to 26756 in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config.toml")," directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"nano $HOME/.gaiad/config/config.toml\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'# pprof listen address (https://golang.org/pkg/net/http/pprof)\npprof_laddr = "localhost:6062"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[rpc]\n\n# TCP or UNIX socket address for the RPC server to listen on\nladdr = "tcp://127.0.0.1:26757"\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'[p2p]\n\n# Address to listen for incoming connections\nladdr = "tcp://0.0.0.0:26756"\n')),(0,s.kt)("h2",{id:"install-rust-dependencies"},"Install Rust Dependencies"),(0,s.kt)("p",null,"Install the following rust dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"source $HOME/.cargo/env\nsudo apt-get install pkg-config libssl-dev\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install librust-openssl-dev build-essential git\n")),(0,s.kt)("h2",{id:"build--setup-hermes"},"Build & setup Hermes"),(0,s.kt)("p",null,"Make the directory where you'll place the binary, clone the hermes source repository and build it using the latest release."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $HOME/hermes\ngit clone https://github.com/informalsystems/ibc-rs.git hermes\ncd hermes\ngit checkout v0.12.0\ncargo install ibc-relayer-cli --bin hermes --locked\n")),(0,s.kt)("p",null,"Make hermes config & keys directory, copy config-template to config directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $HOME/.hermes\nmkdir -p $HOME/.hermes/keys\ncp config.toml $HOME/.hermes\n")),(0,s.kt)("p",null,"Check hermes version & config dir setup"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"hermes version\nINFO ThreadId(01) using default configuration from '/home/relay/.hermes/config.toml'\nhermes 0.12.0\n")),(0,s.kt)("p",null,"Edit hermes config (use ports according to the port configuration we set above, add only chains you want to relay)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"nano $HOME/.hermes/config/config.toml\n")),(0,s.kt)("p",null,"In this example, we will set ",(0,s.kt)("inlineCode",{parentName:"p"},"channel-141")," on the cosmoshub-4 chain settings and ",(0,s.kt)("inlineCode",{parentName:"p"},"channel-0")," on the osmosis-1 chain settings:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},"[[chains]]\nid = 'cosmoshub-4'\nrpc_addr = 'http://127.0.0.1:26757'\ngrpc_addr = 'http://127.0.0.1:9092'\nwebsocket_addr = 'ws://127.0.0.1:26757/websocket'\nrpc_timeout = '10s'\naccount_prefix = 'cosmos'\nkey_name = 'cosmos'\naddress_type = { derivation = 'cosmos' }\nstore_prefix = 'ibc'\ndefault_gas = 2000000\nmax_gas = 10000000\ngas_price = { price = 0.005, denom = 'uatom' }\ngas_adjustment = 0.1\nmax_msg_num = 25\nmax_tx_size = 180000\nclock_drift = '10s'\nmax_block_time = '10s'\ntrusting_period = '14days'\nmemo_prefix = ''\ntrust_threshold = { numerator = '1', denominator = '3' }\n[chains.packet_filter]\npolicy = 'allow'\nlist = [\n   ['transfer', 'channel-141'], # osmosis-1\n]\n\n[[chains]]\nid = 'osmosis-1'\nrpc_addr = 'http://127.0.0.1:26657'\ngrpc_addr = 'http://127.0.0.1:9090'\nwebsocket_addr = 'ws://127.0.0.1:26657/websocket'\nrpc_timeout = '10s'\naccount_prefix = 'osmo'\nkey_name = 'osmosis'\naddress_type = { derivation = 'cosmos' }\nstore_prefix = 'ibc'\ndefault_gas = 5000000\nmax_gas = 15000000\ngas_price = { price = 0.0026, denom = 'uosmo' }\ngas_adjustment = 0.1\nmax_msg_num = 20\nmax_tx_size = 209715\nclock_drift = '20s'\nmax_block_time = '10s'\ntrusting_period = '10days'\nmemo_prefix = 'Relayed by Czar'\ntrust_threshold = { numerator = '1', denominator = '3' }\n[chains.packet_filter]\npolicy = 'allow'\nlist = [\n  ['transfer', 'channel-0'], # cosmoshub-4\n]\n\n")),(0,s.kt)("p",null,"Add your relayer wallet to Hermes' keyring (located in $HOME/.hermes/keys)"),(0,s.kt)("p",null,"Best practice is to use the same mnemonic over all networks. Do not use your relaying-addresses for anything else because it will lead to account sequence errors."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'hermes keys restore cosmoshub-4 -m "24-word mnemonic seed"\nhermes keys restore osmosis-1 -m "24-word mnemonic seed"\n')),(0,s.kt)("p",null,"Ensure this wallet has funds in both OSMO and ATOM in order to pay the fees required to relay."),(0,s.kt)("h2",{id:"final-checks"},"Final Checks"),(0,s.kt)("p",null,"You can validate your hermes configuration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"hermes config validate\nINFO ThreadId(01) using default configuration from '/home/relay/.hermes/config.toml'\nSuccess: \"validation passed successfully\"\n")),(0,s.kt)("p",null,"Perform health check to see if all connected nodes are up and synced:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"hermes health-check\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"INFO ThreadId(01) using default configuration from '/home/relay/.hermes/config.toml'\nINFO ThreadId(01) telemetry service running, exposing metrics at http://0.0.0.0:3001/metrics\nINFO ThreadId(01) starting REST API server listening at http://127.0.0.1:3000\nINFO ThreadId(01) [cosmoshub-4] chain is healthy\nINFO ThreadId(01) [osmosis-1] chain is healthy\n")),(0,s.kt)("p",null,"When your nodes are fully synced you can start the hermes daemon:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"hermes start\n")),(0,s.kt)("p",null,"Watch hermes' output for successfully relayed packets or any errors.\nIt will try & clear any unreceived packets after startup has completed."),(0,s.kt)("h2",{id:"helpful-commands"},"Helpful Commands"),(0,s.kt)("p",null,'Query Hermes for unreceived packets & acknowledgements (check if channels are "clear")'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"hermes query packet unreceived-packets cosmoshub-4 transfer channel-141\nhermes query packet unreceived-acks cosmoshub-4 transfer channel-141\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"hermes query packet unreceived-packets osmosis-1 transfer channel-0\nhermes query packet unreceived-acks osmosis-1 transfer channel-0\n")),(0,s.kt)("p",null,"Query Hermes for packet commitments:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"hermes query packet commitmentss cosmoshub-4 transfer channel-141\nhermes query packet commitments osmosis-1 transfer channel-0\n")),(0,s.kt)("p",null,"Clear channel (only works on hermes ",(0,s.kt)("inlineCode",{parentName:"p"},"v0.12.0")," and higher)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"hermes clear packets cosmoshub-4 transfer channel-141\nhermes clear packets osmosis-1 transfer channel-0\n")),(0,s.kt)("p",null,"Clear unreceived packets manually. ",(0,s.kt)("em",{parentName:"p"},"Experimental: you'll need to stop your hermes daemon for it not to get confused with account sequences.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"hermes tx raw packet-recv osmosis-1 cosmoshub-4 transfer channel-141\nhermes tx raw packet-ack osmosis-1 cosmoshub-4 transfer channel-141\nhermes tx raw packet-recv cosmoshub-4 osmosis-1 transfer channel-0\nhermes tx raw packet-ack cosmoshub-4 osmosis-1 transfer channel-0\n")))}m.isMDXComponent=!0}}]);