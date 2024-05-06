/*! For license information please see 1767e179.1d8029f6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81860],{54182:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(74848),o=t(28453),s=t(3514),i=t(84142);const a={sidebar_position:1},c="List of errors and warnings",l={id:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/overview",title:"List of errors and warnings",description:"Welcome to this section where we'll provide you with a comprehensive list of errors and warnings that users may come across while using our Hotel Buyers API. These errors and warnings can be received in responses during the booking flow, management, and content methods.",source:"@site/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/overview.mdx",sourceDirName:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings",slug:"/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/overview",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kbSidebar",previous:{title:"Admin",permalink:"/kb/our-products/are-you-a-buyer/our-methods/admin-query"},next:{title:"101 error - System Exception",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-integration"}},u={},d=[];function m(e){const r={h1:"h1",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"list-of-errors-and-warnings",children:"List of errors and warnings"}),"\n",(0,n.jsx)(r.p,{children:"Welcome to this section where we'll provide you with a comprehensive list of errors and warnings that users may come across while using our Hotel Buyers API. These errors and warnings can be received in responses during the booking flow, management, and content methods."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Let's dive right in!"})}),"\n","\n",(0,n.jsx)(s.A,{items:(0,i.$S)().items.filter(((e,r)=>r>0))})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},3514:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),o=t(18215),s=t(84142),i=t(28774),a=t(53465),c=t(16654),l=t(21312),u=t(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:r,children:t}=e;return n.createElement(i.A,{href:r,className:(0,o.A)("card padding--lg",d.cardContainer)},t)}function f(e){let{href:r,icon:t,title:s,description:i}=e;return n.createElement(m,{href:r},n.createElement(u.A,{as:"h2",className:(0,o.A)("text--truncate",d.cardTitle),title:s},t," ",s),i&&n.createElement("p",{className:(0,o.A)("text--truncate",d.cardDescription),title:i},i))}function p(e){let{item:r}=e;const t=(0,s.Nr)(r),o=function(){const{selectMessage:e}=(0,a.W)();return r=>e(r,(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return t?n.createElement(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:r.description??o(r.items.length)}):null}function h(e){let{item:r}=e;const t=(0,c.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.cC)(r.docId??void 0);return n.createElement(f,{href:r.href,icon:t,title:r.label,description:r.description??o?.description})}function g(e){let{item:r}=e;switch(r.type){case"link":return n.createElement(h,{item:r});case"category":return n.createElement(p,{item:r});default:throw new Error(`unknown item type ${JSON.stringify(r)}`)}}function y(e){let{className:r}=e;const t=(0,s.$S)();return n.createElement(w,{items:t.items,className:r})}function w(e){const{items:r,className:t}=e;if(!r)return n.createElement(y,e);const i=(0,s.d1)(r);return n.createElement("section",{className:(0,o.A)("row",t)},i.map(((e,r)=>n.createElement("article",{key:r,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},53465:(e,r,t)=>{t.d(r,{W:()=>l});var n=t(96540),o=t(44586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((r=>e.includes(r)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const r=new Intl.PluralRules(e);return{locale:e,pluralForms:i(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${r.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(r,t)=>function(e,r,t){const n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=t.select(r),s=t.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(t,r,e)}}},21020:(e,r,t)=>{var n=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,s={},l=null,u=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:a.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);