"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[8685],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64147:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Public endpoints",l={unversionedId:"README",id:"README",title:"Public endpoints",description:"These following API's are recommended for development purposes. For maximun control and reliability it's recommended to run your own node. This can be easility accomplsihed by using the get.osmosis.zone installer.",source:"@site/docs/networks/README.md",sourceDirName:".",slug:"/",permalink:"/networks/",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/networks/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Explorers",permalink:"/networks/explorers"}},s={},p=[{value:"Official public endpoints",id:"official-public-endpoints",level:2},{value:"API Docs",id:"api-docs",level:3},{value:"Chain Registry",id:"chain-registry",level:2},{value:"Other providers",id:"other-providers",level:2}],m={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"public-endpoints"},"Public endpoints"),(0,r.kt)("p",null,"These following API's are recommended for development purposes. For maximun control and reliability it's recommended to run your own node. This can be easility accomplsihed by using the get.osmosis.zone installer. "),(0,r.kt)("h2",{id:"official-public-endpoints"},"Official public endpoints"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("th",{parentName:"tr",align:null},"Testnet"),(0,r.kt)("th",{parentName:"tr",align:null},"Docs"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Chain ID")),(0,r.kt)("td",{parentName:"tr",align:null},"osmosis-1"),(0,r.kt)("td",{parentName:"tr",align:null},"osmo-test-4"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"gRPC endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"grpc.osmosis.zone:9090"),(0,r.kt)("td",{parentName:"tr",align:null},"grpc-test.osmosis.zone:443"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"gRPC-gateway")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rpc.osmosis.zone:443"},"https://rpc.osmosis.zone:443")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rpc.testnet.osmosis.zone:443"},"https://rpc.testnet.osmosis.zone:443")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"RPC API Reference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api"},"API Reference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api"},"API Reference")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"LCD API Reference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/?v=LCD"},"API Reference")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/?v=LCD"},"API Reference")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"LCD endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lcd.osmosis.zone"},"https://lcd.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lcd-test.osmosis.zone"},"https://lcd-test.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"LCD Swagger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lcd.osmosis.zone/swagger/"},"Swagger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://lcd-test.osmosis.zone/swagger/"},"Swagger")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"RPC Swagger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rpc-docs.osmosis.zone/"},"Swagger")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rpc-docs.osmosis.zone/"},"Swagger")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Faucet")),(0,r.kt)("td",{parentName:"tr",align:null},"I wish \ud83e\udd11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.osmosis.zone/"},"faucet.osmosis.zone")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"api-docs"},"API Docs"),(0,r.kt)("p",null,"Please visit the ",(0,r.kt)("a",{parentName:"p",href:"/api"},"API reference")," to interact with these endpoints. "),(0,r.kt)("h2",{id:"chain-registry"},"Chain Registry"),(0,r.kt)("p",null,"This repo contains a chain.json and assetlist.json for a number of cosmos-sdk based chains. A chain.json contains data that makes it easy to start running or interacting with a node. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/chain-registry"},"Chain Registry")," : ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/cosmos/chain-registry"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Did you know there is also an NPM package that fetch chain-registry data? ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Learn more")," : ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chain-registry"},"https://www.npmjs.com/package/chain-registry")," ")),(0,r.kt)("h2",{id:"other-providers"},"Other providers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.allthatnode.com/osmosis.dsrv"},"All That Node")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"https://www.allthatnode.com/osmosis.dsrv")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Features",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unlimited access to archive data"),(0,r.kt)("li",{parentName:"ul"},"Faucet available"),(0,r.kt)("li",{parentName:"ul"},"Automated updates"),(0,r.kt)("li",{parentName:"ul"},"Technical support"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://datahub.figment.io"},"DataHub")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"https://datahub.figment.io"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://onfinality.io/"},"OnFinality")," is a blockchain infrastructure platform that saves Web3 builders time and makes their lives easier. OnFinality delivers scalable API endpoints for the biggest blockchain networks and empowers developers to automatically test, deploy, scale and monitor their own blockchain nodes in minutes. OnFinality offers free and premium (Pay-as-you-go or subsription-based) API ",(0,r.kt)("a",{parentName:"p",href:"https://onfinality.io/networks/osmosis"},"services for Osmosis"),". Public RPC Endpoint for Osmosis: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://osmosis.api.onfinality.io/public")))))}d.isMDXComponent=!0}}]);