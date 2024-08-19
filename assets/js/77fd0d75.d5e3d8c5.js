"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(r),p=o,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905)),i=r(52991);const a={title:"Overview",sidebar_position:3.5},c="Validating the Osmosis Blockchain",l={unversionedId:"validate/index",id:"validate/index",title:"Overview",description:"Welcome to the validator documentation for Osmosis. Validators are nodes that participate in the security of a network and are responsible for committing new blocks in the blockchain. To learn more, select one of the options below.",source:"@site/docs/overview/validate/index.mdx",sourceDirName:"validate",slug:"/validate/",permalink:"/overview/validate/",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/validate/index.mdx",tags:[],version:"current",sidebarPosition:3.5,frontMatter:{title:"Overview",sidebar_position:3.5},sidebar:"tutorialSidebar",previous:{title:"Validate & Run your Node"},next:{title:"Running a Node on Mainnet",permalink:"/overview/validate/joining-mainnet"}},s={},m=[],d={toc:m};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validating-the-osmosis-blockchain"},"Validating the Osmosis Blockchain"),(0,o.kt)("p",null,"Welcome to the validator documentation for Osmosis. Validators are nodes that participate in the security of a network and are responsible for committing new blocks in the blockchain. To learn more, select one of the options below."),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),o=r(86010),i=r(53438),a=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:a},a))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:o?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}}}]);