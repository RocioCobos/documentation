"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88240],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:6},i="Categories",l={unversionedId:"apis/hotel-x-pull-buyers-api/methods/content/categories",id:"apis/hotel-x-pull-buyers-api/methods/content/categories",title:"Categories",description:"The Category Query returns a comprehensive categories list from a supplier's access that may include translations to other languages, granting you access to all the categories configured by the Seller for a given set of credentials. The returned fields include:",source:"@site/docs/apis/hotel-x-pull-buyers-api/methods/content/categories.md",sourceDirName:"apis/hotel-x-pull-buyers-api/methods/content",slug:"/apis/hotel-x-pull-buyers-api/methods/content/categories",permalink:"/docs/apis/hotel-x-pull-buyers-api/methods/content/categories",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/hotel-x-pull-buyers-api/methods/content/categories.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Boards",permalink:"/docs/apis/hotel-x-pull-buyers-api/methods/content/boards"},next:{title:"Metadata",permalink:"/docs/apis/hotel-x-pull-buyers-api/methods/content/metadata"}},s={},c=[{value:"Criteria",id:"criteria",level:3},{value:"Mapping",id:"mapping",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"categories"},"Categories"),(0,o.kt)("p",null,"The Category Query returns a comprehensive categories list from a supplier's access that may include translations to other languages, granting you access to all the categories configured by the Seller for a given set of credentials. The returned fields include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Code"),(0,o.kt)("li",{parentName:"ul"},"Category Code"),(0,o.kt)("li",{parentName:"ul"},"Text")),(0,o.kt)("h3",{id:"criteria"},"Criteria"),(0,o.kt)("p",null,"This query offers versatility in search options, with certain fields marked as mandatory (access) and others as optional (categoryCodes and group). This flexibility empowers you to create a personalized Categories Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements."),(0,o.kt)("p",null,"Mandatory criteria"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"access")),(0,o.kt)("p",null,"Optional criteria"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"categoryCodes"),(0,o.kt)("li",{parentName:"ul"},"group")),(0,o.kt)("p",null,"[ a\xf1adir ejemplo ]"),(0,o.kt)("h3",{id:"mapping"},"Mapping"),(0,o.kt)("p",null,"When utilizing the Categories List Query, you will receive the Seller's native categories codes. Connecting with a new Seller doesn't always mean that you are interested in the whole categories portfolio, maybe you are just interested in some specific categories. Since mapping depends entirely on your side, you can map only those categories you are interested in."),(0,o.kt)("p",null,"Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own categories codes in the booking flow."),(0,o.kt)("p",null,"[ A\xf1adir ejemplo ]"))}d.isMDXComponent=!0}}]);