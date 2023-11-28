"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8509],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={title:"Request Headers",sidebar_position:2},o="Channel-X Request Headers",i={unversionedId:"apis/for-buyers/channel-x-push-buyers-api/making-requests/request-headers",id:"apis/for-buyers/channel-x-push-buyers-api/making-requests/request-headers",title:"Request Headers",description:"The following request headers will be sent in all request methods. It is essential that you configure your system to accept these headers, as they will be included in the requests we will make to your system.",source:"@site/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/request-headers.mdx",sourceDirName:"apis/for-buyers/channel-x-push-buyers-api/making-requests",slug:"/apis/for-buyers/channel-x-push-buyers-api/making-requests/request-headers",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/request-headers",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/request-headers.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Request Headers",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Endpoint",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/endpoint"},next:{title:"XML API",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/making-requests/xml-api"}},l={},u=[{value:"Mandatory Request Headers",id:"mandatory-request-headers",level:3},{value:"Optional Request Headers",id:"optional-request-headers",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"channel-x-request-headers"},"Channel-X Request Headers"),(0,a.kt)("p",null,"The following request headers will be sent in all request methods. It is essential that you configure your system to accept these headers, as they will be included in the requests we will make to your system."),(0,a.kt)("h3",{id:"mandatory-request-headers"},"Mandatory Request Headers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content Type"),": Content-Type header provides information about the actual content type of the returned content. In this case, the header is set to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"Content-Type: text/xml;charset=UTF-8\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SOAPAction"),": All requests come with a SOAPAction header corresponding to the transmitted message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HotelRatePlanInventoryNotif"',title:'"HotelRatePlanInventoryNotif"'},"SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelRatePlanInventoryNotif\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HotelAvailNotif"',title:'"HotelAvailNotif"'},"SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelAvailNotif\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HotelRatePlanNotif"',title:'"HotelRatePlanNotif"'},"SOAPAction: http://schemas.xmltravelgate.com/hubpush/provider/2012/10/IProviderGen/HotelRatePlanNotif\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Authentication"),": Requests are authenticated using Base64 encoding. This means that the ",(0,a.kt)("a",{parentName:"p",href:"endpoint"},"username and password you have provided us")," will be encoded and sent in a Base64 format, as demonstrated in the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"Authorization: Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),(0,a.kt)("h3",{id:"optional-request-headers"},"Optional Request Headers"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Compression"),": By default, requests are not compressed. However, you can choose to compress requests using the following compression methods: ",(0,a.kt)("inlineCode",{parentName:"p"},"gzip"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deflate"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"br"),". If you are interested in receiving compressed requests, please let us know by opening a ",(0,a.kt)("a",{parentName:"p",href:"https://app.travelgatex.com/tickets"},"ticket")," to our customer team."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="gzip"',title:'"gzip"'},"Content-Encoding: gzip\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="dflate"',title:'"dflate"'},"Content-Encoding: dflate\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="br"',title:'"br"'},"Content-Encoding: br\n")))}d.isMDXComponent=!0}}]);