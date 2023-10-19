"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96653],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},h=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),h=n,y=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return t?o.createElement(y,i(i({ref:r},p),{},{components:t})):o.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},58442:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=t(87462),n=(t(67294),t(3905));const a={sidebar_position:6},i="105 error - Payload too high",s={unversionedId:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-payload",id:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-payload",title:"105 error - Payload too high",description:'What does a 105 - "Payload to high" error mean?\ud83d\udca1',source:"@site/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/105-error-payload.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings",slug:"/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-payload",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-payload",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"kbSidebar",previous:{title:"105 error - Communication Error",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/communication-error"},next:{title:"201 error - Error retrieving data",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-retrieving-data"}},l={},u=[{value:"What does a 105 - &quot;Payload to high&quot; error mean?\ud83d\udca1",id:"what-does-a-105---payload-to-high-error-mean",level:3},{value:"What can I do if I receive a 105 - &quot;Payload to high&quot; error in my response?\u2714\ufe0f",id:"what-can-i-do-if-i-receive-a-105---payload-to-high-error-in-my-response\ufe0f",level:3}],p={toc:u},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(c,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"105-error---payload-too-high"},"105 error - Payload too high"),(0,n.kt)("h3",{id:"what-does-a-105---payload-to-high-error-mean"},'What does a 105 - "Payload to high" error mean?\ud83d\udca1'),(0,n.kt)("p",null,"This error is returned whenever the size of the response by the Seller surpasses the size limitation established on our side for optimal performance (20000 options or 15MB)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Legacy Pull Buyers API example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<applicationErrors>\n    <type>105</type>\n    <description>Payload too high, received 21097.201171875 KB</description>\n    <httpStatusCode>0</httpStatusCode>\n</applicationErrors>\n\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hotel-X Pull Buyers API example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    "errors": [\n                    {\n                        "code": "ALL_PROCESSES_FAILED",\n                        "type": "PROCESS_ERROR",\n                        "description": "See warnings for more information"\n                    }\n                ],\n                "warnings": [\n                    {\n                        "code": "",\n                        "type": "105",\n                        "description": "Access `xxx` returned:  Payload too high, received 122000.3818359375 KB"\n                    }\n                ]\n\n')),(0,n.kt)("h3",{id:"what-can-i-do-if-i-receive-a-105---payload-to-high-error-in-my-response\ufe0f"},'What can I do if I receive a 105 - "Payload to high" error in my response?\u2714\ufe0f'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If you detect an increase of these errors, you should ",(0,n.kt)("strong",{parentName:"li"},"contact the Seller")," directly in order to check this information on their side and reduce the number of options/size of their responses."),(0,n.kt)("li",{parentName:"ol"},"Should you need further support after checking this information with the Seller, do not hesitate to contact us again through a ",(0,n.kt)("a",{parentName:"li",href:"https://knowledge.travelgate.com/guidelines-for-submitting-a-ticket-to-our-support-team"},"ticket")," in our Portal and our team will be happy to help.")))}d.isMDXComponent=!0}}]);