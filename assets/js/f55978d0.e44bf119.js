"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89419],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(u,".").concat(d)]||c[d]||y[d]||i;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29787:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={title:"XML API",sidebar_position:3},s="Channel-X XML API",o={unversionedId:"apis/for-buyers/channel-x-push-buyers-api/making-requests/xml-api",id:"apis/for-buyers/channel-x-push-buyers-api/making-requests/xml-api",title:"XML API",description:"Channel-X Push Buyers API is a travel API based on XML. All requests are expected to be standard HTTP POST requests in which the POST body is the request XML in a SOAP envelope.",source:"@site/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/xml-api.mdx",sourceDirName:"apis/for-buyers/channel-x-push-buyers-api/making-requests",slug:"/apis/for-buyers/channel-x-push-buyers-api/making-requests/xml-api",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/xml-api",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/xml-api.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"XML API",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Request Headers",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/request-headers"},next:{title:"Overview",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/availability-rates-and-inventory/overview"}},u={},p=[],l={toc:p},c="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"channel-x-xml-api"},"Channel-X XML API"),(0,a.kt)("p",null,"Channel-X Push Buyers API is a travel API based on XML. All requests are expected to be standard HTTP POST requests in which the POST body is the request XML in a SOAP envelope."),(0,a.kt)("p",null,"In the Channel-X Push Buyers API framework, we push information regarding Availability, Rates, and Inventory (ARI) to your system. We will initiate this process by sending you a request containing the relevant data. If the operation goes well, we expect a sucess response from your end; otherwise, we anticipate receiving an error notification."))}y.isMDXComponent=!0}}]);