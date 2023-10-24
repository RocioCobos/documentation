"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={sidebar_position:2},l="Request Headers",o={unversionedId:"apis/for-sellers/hotel-pull-sellers-api/making-requests/request-headers",id:"apis/for-sellers/hotel-pull-sellers-api/making-requests/request-headers",title:"Request Headers",description:"The following HTTP request headers are essential for all request methods and must be included in every POST request.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/request-headers.md",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/making-requests",slug:"/apis/for-sellers/hotel-pull-sellers-api/making-requests/request-headers",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/request-headers",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/request-headers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Endpoint",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint"},next:{title:"XML API",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/xml-api"}},i={},p=[{value:"Mandatory Request Headers",id:"mandatory-request-headers",level:3},{value:"Optional Request Headers",id:"optional-request-headers",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"request-headers"},"Request Headers"),(0,a.kt)("p",null,"The following HTTP request headers are essential for all request methods and must be included in every POST request."),(0,a.kt)("h3",{id:"mandatory-request-headers"},"Mandatory Request Headers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content Type"),": Content-Type header provides with the actual content type of the returned content. In this case, the header is set to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"Connection: text/xml; charset=utf-8\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gzip Compression"),": In order to increase performance and save bandwidth, all the live traffic must enable GZIP compression in the HTTP header. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"Accept-Encoding: gzip\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A"),": A."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"Accept: application/xml\n")),(0,a.kt)("h3",{id:"optional-request-headers"},"Optional Request Headers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Keep Alive"),": In order to increase performance and improve response times (in Search), you can add the keep-alive header to all our transactions. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"Connection: keep-alive \n")))}d.isMDXComponent=!0}}]);