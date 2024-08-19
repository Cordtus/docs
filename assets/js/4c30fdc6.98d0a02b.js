"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[3713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:3},o="EIP-1559",s={unversionedId:"features/eip-1559",id:"features/eip-1559",title:"EIP-1559",description:"Introduction",source:"@site/docs/overview/features/eip-1559.md",sourceDirName:"features",slug:"/features/eip-1559",permalink:"/overview/features/eip-1559",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/features/eip-1559.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Concentrated Liquidity",permalink:"/overview/features/concentrated-liquidity"},next:{title:"Fee Abstraction",permalink:"/overview/features/fee-abstraction"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Base Fee Adjustment",id:"base-fee-adjustment",level:2},{value:"Integration",id:"integration",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eip-1559"},"EIP-1559"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The following documentation explains the logic behind the Osmosis EIP-1559 fee market implementation. This implementation is designed to prevent spam attacks on the network by dynamically adjusting transaction fees based on network congestion. "),(0,r.kt)("h2",{id:"base-fee-adjustment"},"Base Fee Adjustment"),(0,r.kt)("p",null,"The heart of the EIP-1559 fee market is the adjustment of the base fee. The base fee represents the minimum fee required to include a transaction in a block."),(0,r.kt)("p",null,'The base fee adjustment is based on the concept of "block space competition." If the network is congested and more users want to send transactions, the base fee increases to allocate block space to the highest bidders. Conversely, if the network is underutilized, the base fee decreases to reduce transaction costs.'),(0,r.kt)("p",null,"The adjustment is calculated using the formula:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"baseFeeMultiplier = 1 + (gasUsed - targetGas) / targetGas * maxChangeRate\nnewBaseFee = baseFee * baseFeeMultiplier\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gasUsed: The total gas used in a block."),(0,r.kt)("li",{parentName:"ul"},"targetGas: The target gas wanted per block, defined as 75,000,000."),(0,r.kt)("li",{parentName:"ul"},"maxChangeRate: The maximum allowable change rate for the base fee, defined as 1/10.\nThe calculated baseFeeMultiplier is then used to update the CurBaseFee.")),(0,r.kt)("p",null,"The base fee is constrained by minimum and maximum values defined as MinBaseFee (0.0025) and MaxBaseFee (5), respectively."),(0,r.kt)("h2",{id:"integration"},"Integration"),(0,r.kt)("p",null,"The current chain base fee can be retrieved from the following end point:\n",(0,r.kt)("inlineCode",{parentName:"p"},"${LCD_ENDPOINT}/osmosis/txfees/v1beta1/cur_eip_base_fee")),(0,r.kt)("p",null,"User txs will get priced at ",(0,r.kt)("inlineCode",{parentName:"p"},"multiplier")," * B_t, where B_t is base fee at time of submission, and multiplier is an arbitrary constant that can be set in wallets / dapps."),(0,r.kt)("p",null,"An example fee calculation can be as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"low = base_fee * 1.05\naverage = base_fee * 2\nhigh = base_fee * 3\n")),(0,r.kt)("p",null,"Note that setting a conservative, high multiplier can ensure getting user transactions even throughout high transaction volumes, whilst it can lead to users paying higher transaction fees than needed."))}p.isMDXComponent=!0}}]);