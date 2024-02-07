/*! For license information please see fca19729.a27c8f01.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54680],{3728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(17624),s=r(4552),i=r(96788),a=r(35492);const o={sidebar_position:1},c="Overview",l={id:"apis/for-buyers/channel-x-push-buyers-api/availability-rates-and-inventory/overview",title:"Overview",description:"In the case of the Channel-X API, Travelgate will send requests to the Buyer's system, to your system. This API has three main methods; your task will be to configure your system to handle the requests of each of the methods:",source:"@site/docs/apis/for-buyers/channel-x-push-buyers-api/availability-rates-and-inventory/overview.mdx",sourceDirName:"apis/for-buyers/channel-x-push-buyers-api/availability-rates-and-inventory",slug:"/apis/for-buyers/channel-x-push-buyers-api/availability-rates-and-inventory/overview",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/availability-rates-and-inventory/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/channel-x-push-buyers-api/availability-rates-and-inventory/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"XML API",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/xml-api"},next:{title:"Inventory",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/availability-rates-and-inventory/inventory"}},u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"In the case of the Channel-X API, Travelgate will send requests to the Buyer's system, to your system. This API has three main methods; your task will be to configure your system to handle the requests of each of the methods:"}),"\n","\n","\n",(0,n.jsx)(i.c,{items:(0,a.wt)().items.filter(((e,t)=>t>0))}),"\n",(0,n.jsxs)(t.p,{children:["After each request, a response should be provided from your side. For instance, if a ",(0,n.jsx)(t.code,{children:"HotelAvailNotif"})," request is received, a corresponding ",(0,n.jsx)(t.code,{children:"HotelAvailNotif"})," response should be sent, and so forth. There are two response options, success or error."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Keep in mind that after configuring your system to handle the requests, you will need to access the ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/channel-x-push-buyers-api/fullcopy-and-deltas",children:"Full Copy tab"})," to obtain all product details. Subsequently, Channel-X will send ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/channel-x-push-buyers-api/fullcopy-and-deltas",children:"Delta"})," requests for updates made by the Channel Manager."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},96788:(e,t,r)=>{r.d(t,{c:()=>v});var n=r(11504),s=r(34064),i=r(35492),a=r(10867),o=r(18136),c=r(84357),l=r(56448);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(a.c,{href:t,className:(0,s.c)("card padding--lg",u.cardContainer)},r)}function h(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(d,{href:t},n.createElement(l.c,{as:"h2",className:(0,s.c)("text--truncate",u.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,s.c)("text--truncate",u.cardDescription),title:a},a))}function p(e){let{item:t}=e;const r=(0,i.Gw)(t);return r?n.createElement(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,o.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i._4)(t.docId??void 0);return n.createElement(h,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.wt)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,i.ML)(t);return n.createElement("section",{className:(0,s.c)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},44808:(e,t,r)=>{var n=r(11504),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:u,props:i,_owner:o.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},17624:(e,t,r)=>{e.exports=r(44808)},4552:(e,t,r)=>{r.d(t,{I:()=>o,M:()=>a});var n=r(11504);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);