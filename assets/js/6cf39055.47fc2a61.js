/*! For license information please see 6cf39055.47fc2a61.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51410],{14263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(74848),s=r(28453),o=r(3514),i=r(84142);const l={sidebar_position:1},a="Overview",c={id:"apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/overview",title:"Overview",description:"The Hotel Push Sellers API allows to both push and retrieve information related to Availability, Rates, and Inventory (ARI).",source:"@site/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/overview.mdx",sourceDirName:"apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory",slug:"/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/overview",permalink:"/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"XML API",permalink:"/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/making-requests/xml-api"},next:{title:"Inventory Push",permalink:"/docs/apis/for-sellers/inventory-sellers/hotel-push-sellers-api/availability-rates-and-inventory/inventory/inventory-push"}},u={},d=[];function p(e){const t={h1:"h1",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"The Hotel Push Sellers API allows to both push and retrieve information related to Availability, Rates, and Inventory (ARI)."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"When pushing data"}),", you need to submit requests with the specific product information you intend to push. ",(0,n.jsx)(t.strong,{children:"For data retrieval"}),", you must send requests to obtain information stored in Travelgate's system, and in response, you will receive the requested data."]}),"\n",(0,n.jsx)(t.p,{children:"As a result, here are the specific methods you need to implement:"}),"\n","\n",(0,n.jsx)(o.A,{items:(0,i.$S)().items.filter(((e,t)=>t>0))})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),s=r(18215),o=r(84142),i=r(28774),l=r(53465),a=r(16654),c=r(21312),u=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(i.A,{href:t,className:(0,s.A)("card padding--lg",d.cardContainer)},r)}function m(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(p,{href:t},n.createElement(u.A,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:i},i))}function h(e){let{item:t}=e;const r=(0,o.Nr)(t),s=function(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.cC)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.$S)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,o.d1)(t);return n.createElement("section",{className:(0,s.A)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},53465:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(96540),s=r(44586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);