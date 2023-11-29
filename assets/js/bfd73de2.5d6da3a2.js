"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Endpoint",sidebar_position:1},l="Legacy Sellers Endpoint",s={unversionedId:"apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint",id:"apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint",title:"Endpoint",description:"In the case of Legacy Pull Sellers API, it is the responsibility of the Seller to provide Travelgate with the endpoint that will receive the requests.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint.mdx",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/making-requests",slug:"/apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Endpoint",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/overview"},next:{title:"Request Headers",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/request-headers"}},a={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"legacy-sellers-endpoint"},"Legacy Sellers Endpoint"),(0,o.kt)("p",null,"In the case of Legacy Pull Sellers API, it is the responsibility of the Seller to provide Travelgate with the endpoint that will receive the requests. "),(0,o.kt)("p",null,"The different methods from our API can be sent to one unique endpoint or to different enpoints. These endpoints will be set in the configuration Travelgate receives from the Buyer in each request. "),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"Reservation"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ReservationRead"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ReservationList")," requests, the endpoints must be https. For other requests, the endpoint can be either http or https, although we strongly recommend using https."))}d.isMDXComponent=!0}}]);