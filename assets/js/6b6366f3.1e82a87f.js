"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={sidebar_position:2},o="Request Headers",i={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/making-requests/request-headers",id:"apis/for-buyers/hotel-x-pull-buyers-api/making-requests/request-headers",title:"Request Headers",description:"The following HTTP request headers are essential for all request methods and must be included in every API request.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/request-headers.md",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/making-requests",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/request-headers",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/request-headers",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/request-headers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Endpoint",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/endpoint"},next:{title:"GraphQL API",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/graphql-api"}},l={},u=[{value:"Mandatory Request Headers",id:"mandatory-request-headers",level:3},{value:"Optional Request Headers",id:"optional-request-headers",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"request-headers"},"Request Headers"),(0,a.kt)("p",null,"The following HTTP request headers are essential for all request methods and must be included in every API request."),(0,a.kt)("h3",{id:"mandatory-request-headers"},"Mandatory Request Headers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gzip Compression"),": In order to increase performance and save bandwidth, all the live traffic must enable GZIP compression in the HTTP header. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"Accept-Encoding: gzip\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API Key"),": Authentication is required for every request to the TravelgateX GraphQL API. An API Key must be included in the HTTP Authorization request header to authenticate the user agent with the server. You can find your API Key on the Travelgate website in Connections > ",(0,a.kt)("a",{parentName:"p",href:"https://app.travelgatex.com/connections/settings"},"Connections Settings"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"Authorization: ApiKey xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n")),(0,a.kt)("h3",{id:"optional-request-headers"},"Optional Request Headers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Keep Alive"),": In order to increase performance and improve response times (in Search), you can add the keep-alive header to all our transactions. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"Connection: keep-alive \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GraphQL To Rest"),": In case you expect to be returned +5k options per search response, we suggest using our GraphQL to Rest feature to keep performance at the highest level."),(0,a.kt)("p",null,"To implement this feature, please follow below steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Check that your JSON parser is updated to the last schema as the Array Fields previously defined as single Scalars can produce unexpected JSON marshalling"),(0,a.kt)("li",{parentName:"ol"},"Add the HTTP header to your request(s): ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"TGX-Content-Type: graphqlx/json\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Test a sample call for every request using the header.")))}d.isMDXComponent=!0}}]);