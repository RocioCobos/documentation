/*! For license information please see 987f97af.f3e44dd1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1664],{15168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>m});var r=n(17624),s=n(4552),i=n(96788),o=n(35492);const l={sidebar_position:1},c="Overview",a={id:"apis/for-sellers/hotel-pull-sellers-api/content/overview",title:"Overview",description:"The Content methods provide access to Buyers to essential static information from Sellers, including details like hotel and destination lists. To effectively manage these methods, familiarize yourself with calls such as HotelList, CategoryList, GeographicalDestinationTree, RoomList, MealPlanList, and MetaData.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/content/overview.mdx",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/content",slug:"/apis/for-sellers/hotel-pull-sellers-api/content/overview",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/content/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Common Elements",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/common-elements"},next:{title:"Hotel List",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/hotel-list"}},d={},m=[];function u(e){const t={code:"code",h1:"h1",p:"p",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["The Content methods provide access to Buyers to essential static information from Sellers, including details like hotel and destination lists. To effectively manage these methods, familiarize yourself with calls such as ",(0,r.jsx)(t.code,{children:"HotelList"}),", ",(0,r.jsx)(t.code,{children:"CategoryList"}),", ",(0,r.jsx)(t.code,{children:"GeographicalDestinationTree"}),", ",(0,r.jsx)(t.code,{children:"RoomList"}),", ",(0,r.jsx)(t.code,{children:"MealPlanList"}),", and ",(0,r.jsx)(t.code,{children:"MetaData"}),"."]}),"\n","\n","\n",(0,r.jsx)(i.c,{items:(0,o.wt)().items.filter(((e,t)=>t>0))})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},96788:(e,t,n)=>{n.d(t,{c:()=>y});var r=n(11504),s=n(34064),i=n(35492),o=n(10867),l=n(18136),c=n(84357),a=n(56448);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(o.c,{href:t,className:(0,s.c)("card padding--lg",d.cardContainer)},n)}function u(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(m,{href:t},r.createElement(a.c,{as:"h2",className:(0,s.c)("text--truncate",d.cardTitle),title:i},n," ",i),o&&r.createElement("p",{className:(0,s.c)("text--truncate",d.cardDescription),title:o},o))}function p(e){let{item:t}=e;const n=(0,i.Gw)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,l.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i._4)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.wt)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const o=(0,i.ML)(t);return r.createElement("section",{className:(0,s.c)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},44808:(e,t,n)=>{var r=n(11504),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,d=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>o});var r=n(11504);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);