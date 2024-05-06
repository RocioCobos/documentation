/*! For license information please see 3f67349f.be491acb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96121],{2856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(74848),o=n(28453),s=n(3514),i=n(84142);const a={sidebar_position:1},l="Overview",c={id:"apis/for-sellers/hotel-push-sellers-api/booking-management/overview",title:"Overview",description:"You can receive instant API notifications from Travelgate with the HotelResNotif message for bookings and the CancelNotif message for cancellations.",source:"@site/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/overview.mdx",sourceDirName:"apis/for-sellers/hotel-push-sellers-api/booking-management",slug:"/apis/for-sellers/hotel-push-sellers-api/booking-management/overview",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Rate Retrieval",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/availability-rates-and-inventory/rates/rates-retrieve"},next:{title:"Booking Notification",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/booking-notification"}},m={},u=[];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["You can receive instant API notifications from Travelgate with the ",(0,r.jsx)(t.code,{children:"HotelResNotif"})," message for bookings and the ",(0,r.jsx)(t.code,{children:"CancelNotif"})," message for cancellations."]}),"\n",(0,r.jsxs)(t.p,{children:["Also, it is possible to implement ",(0,r.jsx)(t.code,{children:"HotelResRetrieve"})," messages to obtain a list of bookings from the Inventory Tool System."]}),"\n","\n",(0,r.jsx)(s.A,{items:(0,i.$S)().items.filter(((e,t)=>t>0))}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Note that card payments are only allowed if you implement ",(0,r.jsx)(t.code,{children:"HotelResNotif"})," message"]})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(96540),o=n(18215),s=n(84142),i=n(28774),a=n(53465),l=n(16654),c=n(21312),m=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(i.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer)},n)}function p(e){let{href:t,icon:n,title:s,description:i}=e;return r.createElement(d,{href:t},r.createElement(m.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:s},n," ",s),i&&r.createElement("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:i},i))}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),o=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.cC)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,s.$S)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const i=(0,s.d1)(t);return r.createElement("section",{className:(0,o.A)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(96540),o=n(44586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},21020:(e,t,n)=>{var r=n(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,m=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:m,props:s,_owner:a.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);