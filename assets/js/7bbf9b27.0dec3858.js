/*! For license information please see 7bbf9b27.0dec3858.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86156],{63492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(17624),i=n(4552),o=n(96788),s=n(35492);const c={sidebar_position:1},a="Overview",l={id:"apis/for-buyers/hotel-x-pull-buyers-api/content/overview",title:"Overview",description:"The Content methods provide access to essential static information from Sellers, including details like hotel and destination lists. To effectively manage these methods, familiarize yourself with calls such as hotels, categories, destinations, rooms, boards, and metadata.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/content",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/content/overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Get Accesses",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/admin/get-accesses"},next:{title:"Hotels",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/hotels"}},d={},u=[];function m(e){const t={code:"code",h1:"h1",p:"p",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["The Content methods provide access to essential static information from Sellers, including details like hotel and destination lists. To effectively manage these methods, familiarize yourself with calls such as ",(0,r.jsx)(t.code,{children:"hotels"}),", ",(0,r.jsx)(t.code,{children:"categories"}),", ",(0,r.jsx)(t.code,{children:"destinations"}),", ",(0,r.jsx)(t.code,{children:"rooms"}),", ",(0,r.jsx)(t.code,{children:"boards"}),", and ",(0,r.jsx)(t.code,{children:"metadata"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"We strongly recommend that our Buyers incorporate these content calls into their systems. This is crucial because Supplier codes might differ from those obtained through our API. This step is essential for ensuring smooth integration and accurate data retrieval. The metadata call is especially significant when establishing a connection with a Seller. It provides comprehensive information about restrictions and settings specific to that Seller, ensuring a well-informed and efficient partnership."}),"\n","\n","\n",(0,r.jsx)(o.c,{items:(0,s.wt)().items.filter(((e,t)=>t>0))})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},96788:(e,t,n)=>{n.d(t,{c:()=>v});var r=n(11504),i=n(34064),o=n(35492),s=n(10867),c=n(18136),a=n(84357),l=n(56448);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(s.c,{href:t,className:(0,i.c)("card padding--lg",d.cardContainer)},n)}function m(e){let{href:t,icon:n,title:o,description:s}=e;return r.createElement(u,{href:t},r.createElement(l.c,{as:"h2",className:(0,i.c)("text--truncate",d.cardTitle),title:o},n," ",o),s&&r.createElement("p",{className:(0,i.c)("text--truncate",d.cardDescription),title:s},s))}function p(e){let{item:t}=e;const n=(0,o.Gw)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,c.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o._4)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,o.wt)();return r.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const s=(0,o.ML)(t);return r.createElement("section",{className:(0,i.c)("row",n)},s.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},44808:(e,t,n)=>{var r=n(11504),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:o,_owner:c.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>s});var r=n(11504);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);