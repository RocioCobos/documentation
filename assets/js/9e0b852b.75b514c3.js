"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),i=r(52991),a=r(53438);const c={sidebar_position:1},s="Inventory errors",l={unversionedId:"our-products/are-you-a-buyer/inventory/troubleshooting/overview",id:"our-products/are-you-a-buyer/inventory/troubleshooting/overview",title:"Inventory errors",description:"Welcome to this section where we'll provide you with a list of some errors you may come across while using our Hotel Push Sellers API / Inventory.",source:"@site/kb/our-products/are-you-a-buyer/inventory/troubleshooting/overview.mdx",sourceDirName:"our-products/are-you-a-buyer/inventory/troubleshooting",slug:"/our-products/are-you-a-buyer/inventory/troubleshooting/overview",permalink:"/kb/our-products/are-you-a-buyer/inventory/troubleshooting/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kbSidebar",previous:{title:"Standard Occupancy and Price Calculation in Inventory",permalink:"/kb/our-products/are-you-a-buyer/inventory/faqs/understanding-standard-occupancy-and-price-calculation"},next:{title:"204 error - No results found (for Push Sellers)",permalink:"/kb/our-products/are-you-a-buyer/inventory/troubleshooting/no-results-found-for-push-sellers"}},u={},p=[],d={toc:p},m="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inventory-errors"},"Inventory errors"),(0,o.kt)("p",null,"Welcome to this section where we'll provide you with a list of some errors you may come across while using our Hotel Push Sellers API / Inventory."),(0,o.kt)(i.Z,{items:(0,a.jA)().items.filter(((e,t)=>t>0)),mdxType:"DocCardList"}))}y.isMDXComponent=!0},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),o=r(86010),i=r(53438),a=r(39960),c=r(13919),s=r(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:a},a))}function d(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(f,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}}}]);