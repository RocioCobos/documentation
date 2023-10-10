"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71314],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?o.createElement(y,a(a({ref:t},c),{},{components:r})):o.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:4},a="104 error - Connection Timeout With Provider",s={unversionedId:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/connection-timeout-provider",id:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/connection-timeout-provider",title:"104 error - Connection Timeout With Provider",description:"This error occurs when the Seller's response time has exceeded the timeout set in the Buyer's request.",source:"@site/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/104-connection-timeout-provider.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings",slug:"/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/connection-timeout-provider",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/connection-timeout-provider",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"kbSidebar",previous:{title:"103 error - Too many requests to the supplier",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/too-many-requests"},next:{title:"105 error - Communication Error",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/communication-error"}},u={},l=[{value:"Hotel-X Buyers API",id:"hotel-x-buyers-api",level:3},{value:"Legacy Buyers API",id:"legacy-buyers-api",level:3},{value:"How can I solve timeout errors?\ud83d\udca1",id:"how-can-i-solve-timeout-errors",level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"104-error---connection-timeout-with-provider"},"104 error - Connection Timeout With Provider"),(0,n.kt)("p",null,"This error occurs when the Seller's response time has exceeded the timeout set in the Buyer's request."),(0,n.kt)("h3",{id:"hotel-x-buyers-api"},"Hotel-X Buyers API"),(0,n.kt)("p",null,"You may find the timeout value at a request level (in your Settings) or at a Default Settings level (in our website>Conections>",(0,n.kt)("a",{parentName:"p",href:"https://knowledge.travelgate.com/connections-settings"},"Connections Settings"),")."),(0,n.kt)("h3",{id:"legacy-buyers-api"},"Legacy Buyers API"),(0,n.kt)("p",null,"This timeout is included as a ","[Common Element]",'8v) ("timeoutMilliseconds") in every request:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"image\n")),(0,n.kt)("p",null,"In the aforementioned example, the Buyer sets a timeout of 24700 milliseconds (24.7 seconds) so that will be the time that TravelgateX will wait for a response by the Seller. Error 104 will be returned if we are not able to obtain a response from the Seller's system before the established timeout:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<applicationErrors>\n    <code/>\n    <type>104</type>\n    <description>Connection Timeout With Provider</description>\n    <httpStatusCode>0</httpStatusCode>\n</applicationErrors>\n\n")),(0,n.kt)("h3",{id:"how-can-i-solve-timeout-errors"},"How can I solve timeout errors?\ud83d\udca1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Increase the Seller's timeout allowed"),(0,n.kt)("li",{parentName:"ol"},"Contact the Seller directly in order to let them know about your response time expectations"),(0,n.kt)("li",{parentName:"ol"},"Reduce the number of hotels/destinations requested."),(0,n.kt)("li",{parentName:"ol"},"Retry the operation")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you have followed the tips mentioned above and the Seller's performance is still not optimal, you can try activating Speed, our caching solution. By enabling Speed, you may be able to improve the response time and overall performance of the Seller's system (learn more here).")))}d.isMDXComponent=!0}}]);