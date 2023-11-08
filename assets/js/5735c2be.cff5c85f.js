"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(m,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i="Overview",s={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments",title:"Overview",description:"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments.md",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amendments.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Cancel",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel"},next:{title:"Amend Dates",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-dates"}},m={},l=[],c={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:"),(0,r.kt)("div",{className:"shortcuts-overview"},(0,r.kt)("div",{className:"shortcuts-overview__content"},(0,r.kt)("a",{className:"item",href:"amend-dates"},(0,r.kt)("icon",{icon:"fa-brands fa-github",size:"lg"}),(0,r.kt)("p",{className:"item__title"},"Amend Dates"),(0,r.kt)("p",{className:"item__subtitle"},"Amend the checkin and/or the checkout of a booking.")),(0,r.kt)("a",{className:"item",href:"amend-board"},(0,r.kt)("icon",{icon:"fa-brands fa-github",size:"lg"}),(0,r.kt)("p",{className:"item__title"},"Amend Board"),(0,r.kt)("p",{className:"item__subtitle"},"Amend the board of a booking.")),(0,r.kt)("a",{className:"item",href:"amend-rooms"},(0,r.kt)("icon",{icon:"fa-brands fa-github",size:"lg"}),(0,r.kt)("p",{className:"item__title"},"Amend Rooms"),(0,r.kt)("p",{className:"item__subtitle"},"Amend the room of a booking.")),(0,r.kt)("a",{className:"item",href:"amend-paxes"},(0,r.kt)("icon",{icon:"fa-brands fa-github",size:"lg"}),(0,r.kt)("p",{className:"item__title"},"Amend Paxes"),(0,r.kt)("p",{className:"item__subtitle"},"Amend the paxes of a booking.")),(0,r.kt)("a",{className:"item",href:"amend-remarks"},(0,r.kt)("icon",{icon:"fa-brands fa-github",size:"lg"}),(0,r.kt)("p",{className:"item__title"},"Amend Remarks"),(0,r.kt)("p",{className:"item__subtitle"},"Add a special request/remark on a booking.")))),(0,r.kt)("p",null,"Each amendment type must be performed in two steps, ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," (quotes the amendment) and ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation")," (commits the amendment). In both steps the returned fields include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The booking detail with the amendment applied"),(0,r.kt)("li",{parentName:"ul"},"Amendment fees if applicable"),(0,r.kt)("li",{parentName:"ul"},"AmendmentID (Only returned in the query response)")))}u.isMDXComponent=!0}}]);