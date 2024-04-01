"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[2981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=c(n),u=a,h=k["".concat(i,".").concat(u)]||k[u]||m[u]||r;return n?o.createElement(h,s(s({ref:t},d),{},{components:n})):o.createElement(h,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},83555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:8},s="Token Factory",l={unversionedId:"features/tokenfactory",id:"features/tokenfactory",title:"Token Factory",description:"The tokenfactory module allows any account to create a new token with",source:"@site/docs/overview/features/tokenfactory.md",sourceDirName:"features",slug:"/features/tokenfactory",permalink:"/overview/features/tokenfactory",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/features/tokenfactory.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Superfluid Staking",permalink:"/overview/features/superfluid"},next:{title:"Protorev",permalink:"/overview/features/protorev"}},i={},c=[{value:"Bank hooks (<code>TrackBeforeSend</code>, <code>BlockBeforeSend</code>)",id:"bank-hooks-trackbeforesend-blockbeforesend",level:2},{value:"Token factory integration with Bank Hooks",id:"token-factory-integration-with-bank-hooks",level:3},{value:"Expectations from the chain",id:"expectations-from-the-chain",level:2},{value:"Creating a token",id:"creating-a-token",level:2},{value:"Mint a new token",id:"mint-a-new-token",level:2},{value:"Checking Token metadata",id:"checking-token-metadata",level:2},{value:"Check the tokens created by an account",id:"check-the-tokens-created-by-an-account",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"token-factory"},"Token Factory"),(0,a.kt)("p",null,"The tokenfactory module allows any account to create a new token with\nthe name ",(0,a.kt)("inlineCode",{parentName:"p"},"factory/{creator address}/{subdenom}"),'. Because tokens are\nnamespaced by creator address, this allows token minting to be\npermissionless, due to not needing to resolve name collisions. A single\naccount can create multiple denoms, by providing a unique subdenom for each\ncreated denom. Once a denom is created, the original creator is given\n"admin" privileges over the asset. This allows them to:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mint their denom to any account"),(0,a.kt)("li",{parentName:"ul"},"Burn their denom from any account"),(0,a.kt)("li",{parentName:"ul"},"Create a transfer of their denom between any two accounts"),(0,a.kt)("li",{parentName:"ul"},"Change the admin. In the future, more admin capabilities may be added. Admins\ncan choose to share admin privileges with other accounts using the authz\nmodule. The ",(0,a.kt)("inlineCode",{parentName:"li"},"ChangeAdmin")," functionality, allows changing the master admin\naccount, or even setting it to ",(0,a.kt)("inlineCode",{parentName:"li"},'""'),", meaning no account has admin privileges\nof the asset.")),(0,a.kt)("h2",{id:"bank-hooks-trackbeforesend-blockbeforesend"},"Bank hooks (",(0,a.kt)("inlineCode",{parentName:"h2"},"TrackBeforeSend"),", ",(0,a.kt)("inlineCode",{parentName:"h2"},"BlockBeforeSend"),")"),(0,a.kt)("p",null,"In our fork of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/cosmos-sdk"},"cosmos-sdk"),", we have added two hooks: TrackBeforeSend and BlockBeforeSend."),(0,a.kt)("p",null,"The APIs for TrackBeforeSend and BlockBeforeSend are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"TrackBeforeSend(ctx sdk.Context, from, to sdk.AccAddress, amount sdk.Coins) \nBlockBeforeSend(ctx sdk.Context, from, to sdk.AccAddress, amount sdk.Coins) error \n")),(0,a.kt)("p",null,"Note that both hooks take the same arguments, but BlockBeforeSend returns and triggers an error, while TrackBeforeSend does not. That is, any error triggered by the BlockBeforeSend hook implementation would cancel the state transition and, consequently, the send itself, while any error omitted from TrackBeforeSend would be gracefully silenced."),(0,a.kt)("p",null,"TrackBeforeSend and BlockBeforeSend are both triggered before any send action occurs, specifically before we call sendCoins, the internal API for transferring coins."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (k BaseSendKeeper) SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error {\n    // BlockBeforeSend hook should always be called before the TrackBeforeSend hook.\n    err := k.BlockBeforeSend(ctx, fromAddr, toAddr, amt)\n    if err != nil {\n        return err\n    }\n\n    return k.sendCoins(ctx, fromAddr, toAddr, amt)\n}\n\n")),(0,a.kt)("p",null,"Note that for Module to Module send, the BlockBeforeSend hooks are not triggered, as we do not want to block module-to-module sends in any case."),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/cosmos-sdk/pull/421"},"PR421")," for more implementation details."),(0,a.kt)("h3",{id:"token-factory-integration-with-bank-hooks"},"Token factory integration with Bank Hooks"),(0,a.kt)("p",null,"Due to the difference two hooks mentioned above, ",(0,a.kt)("inlineCode",{parentName:"p"},"TrackBeforeSend")," is useful for cases when a contract needs to track specific send actions of the token factory denom, whilst ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockBeforeSend")," would be more useful for situations when we want to block specific sends using contracts."),(0,a.kt)("p",null,"Each Token Factory denom allows the registration of one contract address. This contract is sudo-called every time the aforementioned bank hooks are activated. "),(0,a.kt)("p",null,"Contracts are able to integrate with these hooks by implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockBeforeSend")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TrackBeforeSend")," message as the following example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[entry_point]\npub fn sudo(deps: DepsMut, env: Env, msg: SudoMsg) ->  StdResult<Response> {\n    match &msg{\n        SudoMsg::BlockBeforeSend { from, to, amount} => {\n            Ok(Response::new().add_attributes(vec![\n                ("hook", "block"),\n                ("from", from),\n                ("to", to),\n                ("amount", &amount.to_string())\n            ]))\n        },\n        SudoMsg::TrackBeforeSend { from, to, amount} => {\n            Ok(Response::new().add_attributes(vec![\n                ("hook", "track"),\n                ("from", from),\n                ("to", to),\n                ("amount", &amount.to_string())\n            ]))\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Note that since ",(0,a.kt)("inlineCode",{parentName:"p"},"TrackBeforeSend")," hook can also be triggered upon module to module send (which is not gas metered), we internally gas meter ",(0,a.kt)("inlineCode",{parentName:"p"},"TrackBeforeSend")," with a gas limit of 100_000. "),(0,a.kt)("h2",{id:"expectations-from-the-chain"},"Expectations from the chain"),(0,a.kt)("p",null,"The chain's bech32 prefix for addresses can be at most 16 characters long."),(0,a.kt)("p",null,"This comes from denoms having a 128 byte maximum length, enforced from the SDK,\nand us setting longest_subdenom to be 44 bytes."),(0,a.kt)("p",null,"A token factory token's denom is: ",(0,a.kt)("inlineCode",{parentName:"p"},"factory/{creator address}/{subdenom}")),(0,a.kt)("p",null,"Splitting up into sub-components, this has:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"len(factory) = 7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'2 * len("/") = 2')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"len(longest_subdenom)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"len(creator_address) = len(bech32(longest_addr_length, chain_addr_prefix))"),".")),(0,a.kt)("p",null,"Longest addr length at the moment is ",(0,a.kt)("inlineCode",{parentName:"p"},"32 bytes"),". Due to SDK error correction\nsettings, this means ",(0,a.kt)("inlineCode",{parentName:"p"},"len(bech32(32, chain_addr_prefix)) = len(chain_addr_prefix) + 1 + 58"),".\nAdding this all, we have a total length constraint of ",(0,a.kt)("inlineCode",{parentName:"p"},"128 = 7 + 2 + len(longest_subdenom) + len(longest_chain_addr_prefix) + 1 + 58"),".\nTherefore ",(0,a.kt)("inlineCode",{parentName:"p"},"len(longest_subdenom) + len(longest_chain_addr_prefix) = 128 - (7 + 2 + 1 + 58) = 60"),"."),(0,a.kt)("p",null,"The choice between how we standardized the split these 60 bytes between maxes\nfrom longest_subdenom and longest_chain_addr_prefix is somewhat arbitrary.\nConsiderations going into this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Per ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#bech32"},"BIP-0173"),"\nthe technically longest HRP for a 32 byte address ('data field') is 31 bytes.\n(Comes from encode(data) = 59 bytes, and max length = 90 bytes)"),(0,a.kt)("li",{parentName:"ul"},"subdenom should be at least 32 bytes so hashes can go into it"),(0,a.kt)("li",{parentName:"ul"},"longer subdenoms are very helpful for creating human readable denoms"),(0,a.kt)("li",{parentName:"ul"},"chain addresses should prefer being smaller. The longest HRP in cosmos to date is 11 bytes. (",(0,a.kt)("inlineCode",{parentName:"li"},"persistence"),")")),(0,a.kt)("p",null,"For explicitness, its currently set to ",(0,a.kt)("inlineCode",{parentName:"p"},"len(longest_subdenom) = 44")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"len(longest_chain_addr_prefix) = 16"),"."),(0,a.kt)("p",null,"Please note, if the SDK increases the maximum length of a denom from 128 bytes,\nthese caps should increase."),(0,a.kt)("p",null,"So please don't make code rely on these max lengths for parsing."),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To create a new token, use the create-denom command from the tokenfactory module. The following example uses the address osmo1c584m4lq25h83yp6ag8hh4htjr92d954vklzja from mylocalwallet as the default admin for the new token."),(0,a.kt)("h2",{id:"creating-a-token"},"Creating a token"),(0,a.kt)("p",null,"To create a new token we can use the create-denom command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"osmosisd tx tokenfactory create-denom ufoo --keyring-backend=test --from mylocalwallet\n")),(0,a.kt)("h2",{id:"mint-a-new-token"},"Mint a new token"),(0,a.kt)("p",null,"Once a new token is created, it can be minted using the mint command in the tokenfactory module. Note that the complete tokenfactory address, in the format of factory/{creator address}/{subdenom}, must be used to mint the token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"osmosisd tx tokenfactory mint 100000000000factory/osmo1c584m4lq25h83yp6ag8hh4htjr92d954vklzja/ufoo --keyring-backend=test --from mylocalwallet\n")),(0,a.kt)("h2",{id:"checking-token-metadata"},"Checking Token metadata"),(0,a.kt)("p",null,"To view a token's metadata, use the denom-metadata command in the bank module. The following example queries the metadata for the token factory/osmo1c584m4lq25h83yp6ag8hh4htjr92d954vklzja/ufoo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"osmosisd query bank denom-metadata --denom factory/osmo1c584m4lq25h83yp6ag8hh4htjr92d954vklzja/ufoo\n")),(0,a.kt)("h2",{id:"check-the-tokens-created-by-an-account"},"Check the tokens created by an account"),(0,a.kt)("p",null,"To see a list of tokens created by a specific account, use the denoms-from-creator command in the tokenfactory module. The following example shows tokens created by the account osmo1c584m4lq25h83yp6ag8hh4htjr92d954vklzja:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"osmosisd query tokenfactory denoms-from-creator osmo1c584m4lq25h83yp6ag8hh4htjr92d954vklzja\n")))}m.isMDXComponent=!0}}]);