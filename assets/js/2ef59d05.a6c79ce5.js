"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16817],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),b=n,d=c["".concat(s,".").concat(b)]||c[b]||f[b]||i;return r?o.createElement(d,a(a({ref:t},p),{},{components:r})):o.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},93124:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1},a="Overview",l={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview",title:"Overview",description:"In order to book a hotel room, booking flow methods must be executed sequentially: Search, Quote and Book.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview.md",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Metadata",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata"},next:{title:"Search",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search"}},s={},u=[],p={toc:u},c="wrapper";function f(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In order to book a hotel room, booking flow methods must be executed sequentially: Search, Quote and Book."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Hotel-X Shopping Flow",src:r(52115).Z,width:"960",height:"270"})),(0,n.kt)("p",null,"Search is the first step in our booking flow, the goal is to check availability in the date range and pax specified for the requested hotels or for the hotels in the destination requested. The call can search one or more sellers\u2019 accesses. Quote is an operation used to assess and valuate the rate before the actual booking. It returns the same information as the Search response for a hotel rate with up-to-date price, along with additional information regarding the rate: rate breakdown and cancellation policies. Finally, Book operation requests a reservation confirmation for the specified optionId returned in Quote."))}f.isMDXComponent=!0},52115:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/hotel-x_shopping_flow-dbf20025f70fb6097fb69b2ce23b4767.svg"}}]);