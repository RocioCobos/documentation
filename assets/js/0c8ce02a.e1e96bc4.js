"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),o=n(53438),i=n(39960),l=n(13919),c=n(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:i},i))}function u(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},2982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(52991),i=n(53438);const l={sidebar_position:1},c="Overview",s={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments",title:"Overview",description:"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Cancel",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel"},next:{title:"Amend Dates",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-dates"}},m={},p=[],u={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:"),(0,a.kt)(o.Z,{items:(0,i.jA)().items.filter(((e,t)=>t>0)),mdxType:"DocCardList"}),(0,a.kt)("p",null,"Each amendment type must be performed in two steps, ",(0,a.kt)("inlineCode",{parentName:"p"},"Query")," (quotes the amendment) and ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutation")," (commits the amendment). In both steps the returned fields include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The booking detail with the amendment applied"),(0,a.kt)("li",{parentName:"ul"},"Amendment fees if applicable"),(0,a.kt)("li",{parentName:"ul"},"AmendmentID (Only returned in the query response)")))}f.isMDXComponent=!0}}]);