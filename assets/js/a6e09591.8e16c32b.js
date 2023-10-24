"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=i,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={sidebar_position:1},a="Endpoint",l={unversionedId:"apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint",id:"apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint",title:"Endpoint",description:"The different methods from our API can be sent to 1 unique endpoint or to different enpoints. These endpoints will be set in the configuration TravelgateX receives from the buyer in each request. Endpoints have to be https for Reservation, Cancel, ReservationRead and ReservationList, for other request they can be http or https.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint.md",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/making-requests",slug:"/apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/endpoint.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Quickstart",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/quickstart"},next:{title:"Request Headers",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/making-requests/request-headers"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,"The different methods from our API can be sent to 1 unique endpoint or to different enpoints. These endpoints will be set in the configuration TravelgateX receives from the buyer in each request. Endpoints have to be https for Reservation, Cancel, ReservationRead and ReservationList, for other request they can be http or https."),(0,i.kt)("p",null,"A Configuration element with the credentials, endpoints and extra needed parameters by the supplier will be received in the request from the buyer and will be sent to the supplier. In this configuration TravelgateX will receive the endpoints needed to send the request to the supplier (you can see the correlation between methods and enpoints used in the connectivity page)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<Configuration>\n    <UrlGeneric></UrlGeneric>\n    <Parameters>\n        <Parameter key = "" value = ""/>\n    </Parameters>\n</Configuration>\n')),(0,i.kt)("p",null,"Mandatory Elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UrlGeneric")," (Supplier URL)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Parameter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"))))))}d.isMDXComponent=!0}}]);