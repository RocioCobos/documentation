"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),o=r(86010),i=r(53438),a=r(39960),l=r(13919),s=r(95999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",c.cardContainer)},r)}function m(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",c.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",c.cardDescription),title:a},a))}function d(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},11968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(87462),o=(r(67294),r(3905)),i=r(52991),a=r(53438);const l={sidebar_position:1},s="Overview",c={unversionedId:"apis/for-sellers/hotel-pull-sellers-api/booking-management/overview",id:"apis/for-sellers/hotel-pull-sellers-api/booking-management/overview",title:"Overview",description:"The Booking Management operations provide a streamlined approach to handle bookings. These operations include Reservation List, Reservation Read, and Cancel. The Booking Read and List facilitates the Buyer the retrieval of detailed booking information. Cancellation offers a straightforward way to cancel bookings when needed. Utilizing these operations streamlines the booking process and empowers to manage bookings effectively.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/booking-management/overview.mdx",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/booking-management",slug:"/apis/for-sellers/hotel-pull-sellers-api/booking-management/overview",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/booking-management/overview",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/booking-management/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Reservation",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/booking-flow/reservation"},next:{title:"Reservation List",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/booking-management/reservation-list"}},p={},m=[],d={toc:m},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Booking Management operations provide a streamlined approach to handle bookings. These operations include ",(0,o.kt)("inlineCode",{parentName:"p"},"Reservation List"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Reservation Read"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel"),". The Booking Read and List facilitates the Buyer the retrieval of detailed booking information. Cancellation offers a straightforward way to cancel bookings when needed. Utilizing these operations streamlines the booking process and empowers to manage bookings effectively."),(0,o.kt)(i.Z,{items:(0,a.jA)().items.filter(((e,t)=>t>0)),mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);