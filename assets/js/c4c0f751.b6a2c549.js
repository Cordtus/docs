"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[3151],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var a=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var r=a.createContext({}),d=function(e){var t=a.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(o),u=i,h=c["".concat(r,".").concat(u)]||c[u]||m[u]||n;return o?a.createElement(h,s(s({ref:t},p),{},{components:o})):a.createElement(h,s({ref:t},p))}));function u(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,s=new Array(n);s[0]=c;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var d=2;d<n;d++)s[d]=o[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},35403:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=o(87462),i=(o(67294),o(3905));const n={},s="Pool Setup Guide",l={unversionedId:"integrate/pool-setup",id:"integrate/pool-setup",title:"Pool Setup Guide",description:"Overview",source:"@site/docs/overview/integrate/pool-setup.md",sourceDirName:"integrate",slug:"/integrate/pool-setup",permalink:"/overview/integrate/pool-setup",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/integrate/pool-setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Liquidity",permalink:"/overview/integrate/liquidity"},next:{title:"Registration",permalink:"/overview/integrate/registration"}},r={},d=[{value:"Overview",id:"overview",level:2},{value:"Weighted Pool",id:"weighted-pool",level:2},{value:"Create Pool",id:"create-pool",level:3},{value:"Osmosis Zone",id:"osmosis-zone",level:4},{value:"CLI Command",id:"cli-command",level:4},{value:"Stableswap Pool",id:"stableswap-pool",level:2},{value:"Create Pool",id:"create-pool-1",level:3},{value:"Osmosis Zone",id:"osmosis-zone-1",level:4},{value:"CLI Command",id:"cli-command-1",level:4},{value:"Liquidity Bootstrapping Pool",id:"liquidity-bootstrapping-pool",level:2},{value:"Supercharged Liquidity (a.k.a. Concentrated Liquidity) Pool",id:"supercharged-liquidity-aka-concentrated-liquidity-pool",level:2},{value:"Create Pool",id:"create-pool-2",level:3},{value:"Osmosis Zone",id:"osmosis-zone-2",level:4},{value:"CLI Command",id:"cli-command-2",level:4},{value:"Join Pool",id:"join-pool",level:3},{value:"CLI Command",id:"cli-command-3",level:4},{value:"CosmWasm Pools",id:"cosmwasm-pools",level:2},{value:"Contract Code",id:"contract-code",level:3},{value:"Transmuter/Alloyed Asset Pools",id:"transmuteralloyed-asset-pools",level:3},{value:"Create Pool",id:"create-pool-3",level:3},{value:"CLI Command",id:"cli-command-4",level:4},{value:"Join Pool",id:"join-pool-1",level:3},{value:"CLI Command",id:"cli-command-5",level:4}],p={toc:d};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pool-setup-guide"},"Pool Setup Guide"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"A key step to integrating a project with Osmosis is ensuring there is at least one liquidity pool offering the token to the market. This page is intended to guide integrating teams on setting up pools for their tokens."),(0,i.kt)("p",null,"There are several different types of liquidity pools on Osmosis, each with unique benefits; the main ones are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Weighted Pool"),(0,i.kt)("li",{parentName:"ul"},"Stableswap Pool,"),(0,i.kt)("li",{parentName:"ul"},"Liquidity Bootstrapping Pool (LBP),"),(0,i.kt)("li",{parentName:"ul"},"Supercharged Liquidity (Concentrated Liquidity) Pools, and"),(0,i.kt)("li",{parentName:"ul"},"CosmWasm Pools (e.g., Transmuter and Alloyed Assets).")),(0,i.kt)("p",null,"Note: As of Osmosis v19, the Pool Creation Fee is 1000 OSMO"),(0,i.kt)("p",null,"Note: Sometimes there is no way to find the Pool ID of a pool via a block explorer using the transaction hash. osmosisd CLI will show the Pool ID of the new pool in response when creating the pool via CLI; otherwise, the only way to get a Pool ID is to search among the most recently created pools, or else look on a list (that shows Pool ID) of all pools for matching specifications."),(0,i.kt)("p",null,"Note: When specifying token denominations that are represented as ",(0,i.kt)("inlineCode",{parentName:"p"},"ibc/<hash>")," via CLI, be sure to always use uppercase letters within the hash portion of the denomination, or else the pool will not function correctly. E.g., use ",(0,i.kt)("inlineCode",{parentName:"p"},"ibc/A1B2C3\u2026"),", but do NOT use ",(0,i.kt)("inlineCode",{parentName:"p"},"ibc/a1b2c3\u2026"),"."),(0,i.kt)("h2",{id:"weighted-pool"},"Weighted Pool"),(0,i.kt)("p",null,"Weighted Pools on Osmosis are essentially a copy of ",(0,i.kt)("a",{parentName:"p",href:"https://balancer.fi/whitepaper.pdf"},"Balancer\u2019s v1 implementation")," of a Liquidity Pool, which uses the weighted constant product formula: k = x^wx * y^wy."),(0,i.kt)("h3",{id:"create-pool"},"Create Pool"),(0,i.kt)("h4",{id:"osmosis-zone"},"Osmosis Zone"),(0,i.kt)("p",null,"To create a Classic Pool on Osmosis via the Osmosis Zone app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to app.osmosis.zone"),(0,i.kt)("li",{parentName:"ul"},"Connect a Wallet"),(0,i.kt)("li",{parentName:"ul"},"Go to Pools page"),(0,i.kt)("li",{parentName:"ul"},"Create New Pool button"),(0,i.kt)("li",{parentName:"ul"},"Choose Weighted pool"),(0,i.kt)("li",{parentName:"ul"},"Next"),(0,i.kt)("li",{parentName:"ul"},"Add new token (only shows tokens available in the connected wallet)"),(0,i.kt)("li",{parentName:"ul"},"Assign token weight and repeat until all tokens have been added; ensure weights add to 100%"),(0,i.kt)("li",{parentName:"ul"},"Next"),(0,i.kt)("li",{parentName:"ul"},"Enter a >0 amount of each token to add to the pool upon creation"),(0,i.kt)("li",{parentName:"ul"},"Next"),(0,i.kt)("li",{parentName:"ul"},"Set Swap Fee"),(0,i.kt)("li",{parentName:"ul"},"Tick \u2018I understand that creating a new pool will cost 1000 OSMO"),(0,i.kt)("li",{parentName:"ul"},"Create Pool"),(0,i.kt)("li",{parentName:"ul"},"Continue to approve the transaction with the connected wallet.")),(0,i.kt)("h4",{id:"cli-command"},"CLI Command"),(0,i.kt)("p",null,"The command to create a pool with osmosisd CLI is: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx gamm create-pool [flags]")),(0,i.kt)("p",null,"Note that it is recommended to always first show the associated help/information before executing any command by using the --help, -h flag. Note that what is shown will correspond to the version of osmosisd that you have installed, and doesn\u2019t necessarily reflect the parameter requirements of the current version of the Osmosis chain."),(0,i.kt)("p",null,"Start with: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx gamm create-pool -h")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Sample pool JSON file contents for balancer:\n{\n"weights": "4uatom,4osmo,2uakt",\n"initial-deposit": "100uatom,5osmo,20uakt",\n"swap-fee": "0.001",\n"exit-fee": "0.001",\n"future-governor": "168h"\n}')),(0,i.kt)("p",null,"There are recommendations for creating balancer pools:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Number of tokens: For most cases, add only two constituent tokens for best user familiarity, even though the pool is capable of more"),(0,i.kt)("li",{parentName:"ul"},"Weights: Use an equal amount of each token, thereby making it a balanced 50/50 pool (or 33/33/33, if three tokens, etc.). The absolute numbers are not of great importance, but rather the relative values; both 5uosmo,5uion and 1000000uosmo,1000000uion would create a 50/50 pool."),(0,i.kt)("li",{parentName:"ul"},"Initial deposit: Use a high amount of liquidity.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Although a very low initial deposit allows a team to create a small pool and confirm the pool parameters with lower risk of drainage, it also risks that some other accounts and bots can quickly throw off the intended balance of supply in the pool before the initiating team has had a chance to add the remainder (and often the vast majority) of the liquidity intended for the pool. Manually rebalancing the pool to an exact ratio can be challenging, especially when trying to do so via a multisig account."),(0,i.kt)("li",{parentName:"ul"},"In contrast, a very high initial deposit means that fewer transactions are needed and allows the team to add all the intended liquidity into it right away(, without needing to rebalance). Note, this carries a (very uncommon) risk of unintentionally making the new token available for absurdly cheap (by accidentally using an unfavorable weighting), potentially compromising the security and value of the new token."))),(0,i.kt)("li",{parentName:"ul"},"Swap fee: 0.2% or 0.3% swap fee for most pairs. Sometimes a lower fee makes sense for stablecoin:stablecoin pairs.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note that the swap fee argument is not provided as a percentage, but as a multiplier (where a value of 1 is equivalent to 100%). So, a 0.2% swap fee, for example, must be specified in the argument as 0.002."))),(0,i.kt)("li",{parentName:"ul"},"Exit fee: Always choose 0%--this parameter is now obsolete and should be set to 0."),(0,i.kt)("li",{parentName:"ul"},"Future governor: This parameter has no current usage. It is recommended to leave it blank (\u201c\u201d), which will default to \u201c168h\u201d when queried thereafter.")),(0,i.kt)("h2",{id:"stableswap-pool"},"Stableswap Pool"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://osmosis.zone/blog/osmosis-dex-stableswap"},"Stableswap Pools on Osmosis")," are inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://berkeley-defi.github.io/assets/material/StableSwap.pdf"},"Curve\u2019s StableSwap implementation"),", allowing for a targeted flat section of the price curve where the relative values of the tokens are meant to be consistent (e.g., with a pair of USD stablecoins because both are meant to be worth $1.00 USD), although technically uses a slightly different(, and more computationally efficient,) formula: k = xy(x^2 + y^2)"),(0,i.kt)("h3",{id:"create-pool-1"},"Create Pool"),(0,i.kt)("h4",{id:"osmosis-zone-1"},"Osmosis Zone"),(0,i.kt)("p",null,"To create a Stableswap Pool on Osmosis via the Osmosis Zone app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to app.osmosis.zone"),(0,i.kt)("li",{parentName:"ul"},"Connect a Wallet"),(0,i.kt)("li",{parentName:"ul"},"Go to Pools page"),(0,i.kt)("li",{parentName:"ul"},"Create New Pool"),(0,i.kt)("li",{parentName:"ul"},"Choose Stable pool"),(0,i.kt)("li",{parentName:"ul"},"Next"),(0,i.kt)("li",{parentName:"ul"},"Add new token (only shows tokens available in the connected wallet)."),(0,i.kt)("li",{parentName:"ul"},"Assign token scaling factor",(0,i.kt)("sup",null,"1"),"; "),(0,i.kt)("li",{parentName:"ul"},"Repeat until all tokens have been added; ensure weights add to 100%"),(0,i.kt)("li",{parentName:"ul"},"Next"),(0,i.kt)("li",{parentName:"ul"},"Enter a >0 amount of each token to add to the pool upon creation"),(0,i.kt)("li",{parentName:"ul"},"Next"),(0,i.kt)("li",{parentName:"ul"},"Set Swap Fee"),(0,i.kt)("li",{parentName:"ul"},"Set scaling factor controller (optional)",(0,i.kt)("sup",null,"2")),(0,i.kt)("li",{parentName:"ul"},"Tick \u2018I understand that creating a new pool will cost 1000 OSMO"),(0,i.kt)("li",{parentName:"ul"},"Create Pool"),(0,i.kt)("li",{parentName:"ul"},"Continue to approve the transaction with the connected wallet.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Scaling factor is used to adjust for differences in token precision or relative value. (e.g., if 4 $QUARTER is meant to be equal in value to 1 $USDC, then we\u2019d use a scaling factor of 4:1). The most common usage of scaling factor is to equate like-value tokens (e.g., USDC and DAI) whose minimum denominations have differing precision; e.g., USDC\u2019s minimum denomination is micro-usdc (1,000,000 uusdc == 1 USDC) and DAI\u2019s minimum denomination is atto-DAI (where 1,000,000,000,000,000,000 attodai == 1 DAI), so a scaling factor such as 10^6:10^18 (or 1:10^12) is used."),(0,i.kt)("li",{parentName:"ol"},"Scaling factor controller allows a contract be the administrator over the scaling factor, and is often used to handle a constantly changing scaling factor, such as where a liquid staking token/derivative projects a constantly increasing relative value to its underlying staked token (e.g., Stride\u2019s stOSTMO will slowly increase in value measured in OSMO, so a scaling factor controller slowly adjusts the scaling factor accordingly to reap the benefits of a Stableswap pool).")),(0,i.kt)("h4",{id:"cli-command-1"},"CLI Command"),(0,i.kt)("p",null,"The command to create a pool with osmosisd CLI is: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx gamm create-pool [flags]")),(0,i.kt)("p",null,"Note that it is recommended to always first show the associated help/information before executing any command by using the --help, -h flag. Note that what is shown will correspond to the version of osmosisd that you have installed, and doesn\u2019t necessarily reflect the parameter requirements of the current version of the Osmosis chain."),(0,i.kt)("p",null,"Start with: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx gamm create-pool -h")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'For stableswap (demonstrating need for a 1:1000 scaling factor, see doc)\n{\n"initial-deposit": "1000000uusdc,1000miliusdc",\n"swap-fee": "0.001",\n"exit-fee": "0.00",\n"future-governor": "168h",\n"scaling-factors": "1000,1"\n}')),(0,i.kt)("p",null,"See the recommended parameter values for Weighted pools above, as many of those recommendations apply to Stableswap pools as well."),(0,i.kt)("h2",{id:"liquidity-bootstrapping-pool"},"Liquidity Bootstrapping Pool"),(0,i.kt)("p",null,"A Liquidity Bootstrapping Pool (LBP) is a weighted pool that begins with linearly adjusting weights until they reach a desired final weighting, and then behaves as a normal weighted pool from then onward. This allows for natural price discovery, as well as aids with liquidity bootstrapping. Nowadays, LBPs have become much less popular than they used to be; the current recommendation for liquidity bootstrapping and price discovery for a new token is a StreamSwap stream on Osmosis, with the frontend interface hosted by Omniflix."),(0,i.kt)("h2",{id:"supercharged-liquidity-aka-concentrated-liquidity-pool"},"Supercharged Liquidity (a.k.a. Concentrated Liquidity) Pool"),(0,i.kt)("p",null,"A Supercharged Pool is Osmosis\u2019 Implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.uniswap.org/concepts/protocol/concentrated-liquidity"},"Uniswap\u2019s Concentrated Liquidity"),". In addition to full-range positions, liquidity providers can also \u2018concentrate\u2019 their liquidity to only apply within a defined price range. When the market price is within the defined price range, the liquidity earns comparatively more swap fees and incentives at the cost of increased impermanent loss; but when the market price is outside of the defined price range, the position doesn\u2019t earn any swap fees (or incentives)."),(0,i.kt)("p",null,"On Osmosis, for technical and UX reasons, some parameters are restricted to a limited set of governance-approved values. For example, the allowable quote assets are limited to a small set of tokens, meaning that all CL pools must contain at least one of these authorized tokens (which are listed below). The same applies to spread factor\u2013basically the same thing as swap fee\u2013and tick spacing\u2013used for refining the granularity of possible positions."),(0,i.kt)("h3",{id:"create-pool-2"},"Create Pool"),(0,i.kt)("h4",{id:"osmosis-zone-2"},"Osmosis Zone"),(0,i.kt)("p",null,"As of writing, Supercharged Liquidity Pools cannot be created via the Osmosis Zone app."),(0,i.kt)("h4",{id:"cli-command-2"},"CLI Command"),(0,i.kt)("p",null,"The command to create a pool with osmosisd CLI is: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx concentratedliquidity create-pool [flags]")),(0,i.kt)("p",null,"Note that it is recommended to always first show the associated help/information before executing any command by using the --help, -h flag. Note that what is shown will correspond to the version of osmosisd that you have installed, and doesn\u2019t necessarily reflect the parameter requirements of the current version of the Osmosis chain."),(0,i.kt)("p",null,"Start with: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx concentratedliquidity create-pool -h")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"denom-1 (the quote denom), tick spacing, and spread factors must all be authorized by the concentrated liquidity module"),(0,i.kt)("p",{parentName:"blockquote"},"Usage:\nosmosisd tx concentratedliquidity create-pool ","[denom-0][denom-1]"," ","[tick-spacing][spread-factor]"," ","[flags]"),(0,i.kt)("p",{parentName:"blockquote"},"Examples:\nosmosisd tx concentratedliquidity create-pool uion uosmo 100 0.01 --from val --chain-id osmosis-1 -b block --keyring-backend test --fees 1000uosmo")),(0,i.kt)("p",null,"There are recommendations for creating CL pools:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As mentioned in the help text, denom-1 (the quote denom), tick spacing, and spread factors must all be authorized by the concentrated liquidity module, and these can be confirmed by querying the chain: ",(0,i.kt)("inlineCode",{parentName:"li"},"osmosisd q concentratedliquidity params")),(0,i.kt)("li",{parentName:"ul"},"denom-1: Must be from a set of authorized \u2018quote\u2019 assets, which, as of writing, are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"uosmo (OSMO)"),(0,i.kt)("li",{parentName:"ul"},"ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2 (ATOM)"),(0,i.kt)("li",{parentName:"ul"},"ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7 (DAI.axl)"),(0,i.kt)("li",{parentName:"ul"},"ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4 (noble.USDC)"),(0,i.kt)("li",{parentName:"ul"},"ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB (kava.USDT)"),(0,i.kt)("li",{parentName:"ul"},"ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5 (wETH.axl)"),(0,i.kt)("li",{parentName:"ul"},"ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F (WBTC.axl)"))),(0,i.kt)("li",{parentName:"ul"},"...and on Testnet (osmo-test-5) are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"uosmo (OSMO)"),(0,i.kt)("li",{parentName:"ul"},"ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477 (ATOM)"),(0,i.kt)("li",{parentName:"ul"},"ibc/8E2FEFCBD754FA3C97411F0126B9EC76191BAA1B3959CB73CECF396A4037BBF0 (unregistered denom)"),(0,i.kt)("li",{parentName:"ul"},"ibc/6F34E1BD664C36CE49ACC28E60D62559A5F96C4F9A6CCE4FC5A67B2852E24CFE (aUSDC.axl)"))),(0,i.kt)("li",{parentName:"ul"},"tick-spacing: Must be from a set of authorized values: 1, 10, 100, and 1000",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is recommended to use a tick spacing of 100, which nearly all current Supercharged pools use; this effectively sets positions as being definable at any ",(0,i.kt)("inlineCode",{parentName:"li"},"0.01%")," interval."),(0,i.kt)("li",{parentName:"ul"},"Since passing each initialized tick carries a computational cost(, and therefore requires more gas), a smaller tick spacing will require higher transaction fees, while a larger tick spacing will have lower transaction fees (but less precise positions)."))),(0,i.kt)("li",{parentName:"ul"},"spread-factor: Mimicks the bid-ask spread, and is comparable to Swap Fee. Must be from a set of authorized values:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"0"),(0,i.kt)("li",{parentName:"ul"},"0.0001 (0.01%)"),(0,i.kt)("li",{parentName:"ul"},"0.0005 (0.05%)"),(0,i.kt)("li",{parentName:"ul"},"0.001 (0.1%)"),(0,i.kt)("li",{parentName:"ul"},"0.002 (0.2%)"),(0,i.kt)("li",{parentName:"ul"},"0.003 (0.3%)"),(0,i.kt)("li",{parentName:"ul"},"0.005 (0.5%)"),(0,i.kt)("li",{parentName:"ul"},"Generally, the lower fees are used for like-value stablecoin pairs, since those theoretically have a lower risk of impermanent loss.")))),(0,i.kt)("h3",{id:"join-pool"},"Join Pool"),(0,i.kt)("p",null,"When Supercharged Liquidity pools are created, they initially have no liquidity. It is recommended that the team creating the pool should also create the first liquidity position."),(0,i.kt)("h4",{id:"cli-command-3"},"CLI Command"),(0,i.kt)("p",null,"The command to join a CL pool with osmosisd CLI is: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx concentratedliquidity create-position [pool-id] [lower-tick] [upper-tick] [tokensProvided] [token-0-min-amount] [token-1-min-amount] [flags]")),(0,i.kt)("p",null,"Note that it is recommended to always first show the associated help/information before executing any command by using the --help, -h flag. Note that what is shown will correspond to the version of osmosisd that you have installed, and doesn\u2019t necessarily reflect the parameter requirements of the current version of the Osmosis chain."),(0,i.kt)("p",null,"Start with: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx concentratedliquidity create-position -h")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"create or add to existing concentrated liquidity position"),(0,i.kt)("p",{parentName:"blockquote"},"Usage:\nosmosisd tx concentratedliquidity create-position ","[pool-id][lower-tick]"," ","[upper-tick][tokensProvided]"," ","[token-0-min-amount][token-1-min-amount]"," ","[flags]"),(0,i.kt)("p",{parentName:"blockquote"},'Examples:\nosmosisd tx concentratedliquidity create-position 1 "',"[-69082]",'" 69082 10000uosmo,10000uion 0 0 --from val --chain-id osmosis-1 -b block --keyring-backend test --fees 1000uosmo')),(0,i.kt)("p",null,"For parameter values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first argument is the pool-id; all pools have a unique identifier"),(0,i.kt)("li",{parentName:"ul"},"For lower and upper tick, start with the lower tick first, then the upper tick.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If a tick has a negative value, then surround it with brackets ([]) and double quotes (\u201c\u201d) so the hypen/dash can be interpreted as a negative sign"),(0,i.kt)("li",{parentName:"ul"},"Tick 0 is a 1:1 ratio of assets"),(0,i.kt)("li",{parentName:"ul"},"A full-range position in a Supercharged pool is currently defined as a lower tick of ",(0,i.kt)("inlineCode",{parentName:"li"},"-108000000")," and an upper tick of  ",(0,i.kt)("inlineCode",{parentName:"li"},"342000000"),", which sufficiently approximates infinity in both directions for all practical purposes. Creating this position can be the easiest way to establish initial liquidity in a pool and enable visibility on the Osmosis Zone frontend app."))),(0,i.kt)("li",{parentName:"ul"},"Based on the current price/balance of tokens in the pool, (and the defined tick boundary,) the amount of each token that can be added must be at a precise ratio; the exact ratio would be difficult to calculate, and can also change frequently, which is why the command asks for maximum and minimum amounts of tokens to add rather than exact amounts."),(0,i.kt)("li",{parentName:"ul"},"tokensProvided requires a list of (maximum) token amounts approved for addition. Both constituent tokens must be specified with an amount, even if the amount is 0, and must be separated by a comma. Generally these should be supplied in alphabetical order."),(0,i.kt)("li",{parentName:"ul"},"token-0-min-amount and token-1-min-amount refer to the minimum amount of token-0 and token-1, respectively, that must be added to the position. These values must also be less than the corresponding amounts of tokensProvided because the transaction cannot add more tokens than were approved for addition.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To find out which is token-0, and which is token-1, query: osmosisd q concentratedliquidity pools, and search for the pool among the returned list of pools.")))),(0,i.kt)("h2",{id:"cosmwasm-pools"},"CosmWasm Pools"),(0,i.kt)("p",null,"CosmWasm Pools are pools written with CosmWasm code and implement custom functionality. For example, a CosmWasm pool could be used to establish a floor price for an NFT. A couple examples of types of CosmWasm pools that are important currently are: the Transmuter and Alloyed Asset Pool types."),(0,i.kt)("h3",{id:"contract-code"},"Contract Code"),(0,i.kt)("p",null,"All CosmWasm pools must refer to a Contract via a Code ID. The CosmWasm contract defines the logic of how the pool works, and must be approved for upload and whitelisting by Osmosis governance via a UploadCosmWasmPoolCodeAndWhiteListProposal before any pool instantiating that logic can be created. Instructions on how to write and upload Contract Code is out of scope for the guide. Once the contract is uploaded, it is assigned a Code ID, which must be referenced when creating the CosmWasm pool. It is possible to check for whitelisted code IDs with this command:\n",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd q cosmwasmpool params")),(0,i.kt)("h3",{id:"transmuteralloyed-asset-pools"},"Transmuter/Alloyed Asset Pools"),(0,i.kt)("p",null,"A Transmuter Pool is a type of multi-asset constant sum zero-fee pool, meant to allow for the feeless conversion of like-origin token variants, such as USDC.axl and noble.USDC. It may contain more than two assets, but must be at a 1:1 (or 1:1:1, or 1:1:1:1, etc.) ratio, so it cannot properly handle tokens with differing decimal precision. It also accepts an administrator address, which can freeze all swapping, joining, and exiting of the pool, and can also pass the role of administrator onto another address. If no administrator address is provided, it will default to using the executing account as the administrator."),(0,i.kt)("p",null,"The creation of transmuter pools requires osmosisd version v19.2.0 or later. The Transmuter pools on Osmosis that were created before the release of v19.2.0 were co-created using a custom branch of osmosisd by Osmosis Labs and the author of the Transmuter CosmWasm code."),(0,i.kt)("p",null,"The code-id for Transmuter pools on Osmosis chains are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"osmosis-1 (mainnet): 148"),(0,i.kt)("li",{parentName:"ul"},"osmo-test-5 (testnet): 3084")),(0,i.kt)("p",null,"Alloyed Asset Pools have not yet been finalized."),(0,i.kt)("h3",{id:"create-pool-3"},"Create Pool"),(0,i.kt)("p",null,"For now, since CosmWasm pools are custom and can be created many different ways, complete instructions on how to create each type is considered out of scope for this guide."),(0,i.kt)("p",null,"Note: for creating CosmWasm pools, it is recommended to use osmosisd v19.2.0 or later, as earlier versions do not correctly encode the JSON instantiate message, and interpret it as a list of token denominations."),(0,i.kt)("h4",{id:"cli-command-4"},"CLI Command"),(0,i.kt)("p",null,"The command to create a pool with osmosisd CLI is: osmosisd tx cosmwasmpool create-pool ","[code-id][instantiate-msg]"," ","[flags]"),(0,i.kt)("p",null,"Note that it is recommended to always first show the associated help/information before executing any command by using the --help, -h flag. Note that what is shown will correspond to the version of osmosisd that you have installed, and doesn\u2019t necessarily reflect the parameter requirements of the current version of the Osmosis chain."),(0,i.kt)("p",null,"Start with: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx cosmwasmpool create-pool -h")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"create a cosmwasm pool"),(0,i.kt)("p",{parentName:"blockquote"},"Usage:\nosmosisd tx cosmwasmpool create-pool ","[code-id][instantiate-msg]"," ","[flags]"),(0,i.kt)("p",{parentName:"blockquote"},'Examples:\nosmosisd tx cosmwasmpool create-pool 1 \'{"pool_assets_denom":','["uion","uosmo"]',"}' --from lo-test1 --keyring-backend test --chain-id localosmosis --fees 875uosmo -b=block")),(0,i.kt)("p",null,"For parameter values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"code-id: See the Contract Code section above for more about Code ID."),(0,i.kt)("li",{parentName:"ul"},"instantiate-msg: the required JSON encoded instantiate message depends on which type of pool is being created. For example, the transmuter pool type requires a denom list and an administrator, but other pool types might require a different instantiate message.")),(0,i.kt)("p",null,"Once created, the transaction hash can be used to query the pool\u2019s contract address."),(0,i.kt)("h3",{id:"join-pool-1"},"Join Pool"),(0,i.kt)("p",null,"When CosmWasm pools are created, they may initially have no liquidity. It is recommended that the team creating the pool should also create the first liquidity position."),(0,i.kt)("h4",{id:"cli-command-5"},"CLI Command"),(0,i.kt)("p",null,"The command to join a CosmWasm pool with osmosisd CLI is: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx wasm execute [contract_addr_bech32] [json_encoded_send_args] --amount [coins,optional] [flags]")),(0,i.kt)("p",null,"Note that it is recommended to always first show the associated help/information before executing any command by using the --help, -h flag. Note that what is shown will correspond to the version of osmosisd that you have installed, and doesn\u2019t necessarily reflect the parameter requirements of the current version of the Osmosis chain."),(0,i.kt)("p",null,"Start with: ",(0,i.kt)("inlineCode",{parentName:"p"},"osmosisd tx wasm execute -h")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Execute a command on a wasm contract"),(0,i.kt)("p",{parentName:"blockquote"},"Usage:\nosmosisd tx wasm execute ","[contract_addr_bech32][json_encoded_send_args]"," --amount ","[coins,optional][flags]")),(0,i.kt)("p",null,"For parameter values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contract_addr_bech32: the address of the contract specific to the pool",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"I.e., the contract of the instance of the pool, NOT the contract of the type of pool"))),(0,i.kt)("li",{parentName:"ul"},"json_encoded_send_args: should be ",(0,i.kt)("inlineCode",{parentName:"li"},"'{\"join_pool\":{}}'"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note that the single quote must not be vertical ('') , and not angled (\u2018\u2019)"))),(0,i.kt)("li",{parentName:"ul"},"--amount ","[coins,optional]",": the amount of each token being added to the pool.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E.g., --amount 10000ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4,10000ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB")))))}m.isMDXComponent=!0}}]);