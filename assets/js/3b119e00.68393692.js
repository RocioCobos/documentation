"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2},s="What status can be returned in Hotel-X Cancel response?",i={unversionedId:"our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status",id:"our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status",title:"What status can be returned in Hotel-X Cancel response?",description:"What does the status in a cancellation response indicate?\ud83d\udca1",source:"@site/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/booking-management/cancel",slug:"/our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"kbSidebar",previous:{title:"Hotel-X Development - Cancel Mutation",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/what-is-cancel-mutation"},next:{title:"Hotel-X Development - Booking Query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/what-is-hotel-x-booking-query"}},c={},l=[{value:"What does the status in a cancellation response indicate?\ud83d\udca1",id:"what-does-the-status-in-a-cancellation-response-indicate",level:3},{value:"What are the different values that can be assigned to the Cancel status?\ud83d\udd0e",id:"what-are-the-different-values-that-can-be-assigned-to-the-cancel-status",level:3},{value:"What should I do if I receive an error in Cancel response?\u26a0\ufe0f",id:"what-should-i-do-if-i-receive-an-error-in-cancel-response\ufe0f",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-status-can-be-returned-in-hotel-x-cancel-response"},"What status can be returned in Hotel-X Cancel response?"),(0,r.kt)("h3",{id:"what-does-the-status-in-a-cancellation-response-indicate"},"What does the status in a cancellation response indicate?\ud83d\udca1"),(0,r.kt)("p",null,"Once a Cancel (Cancellation) method is run, our API response will provide its ",(0,r.kt)("strong",{parentName:"p"},"Cancel status"),". This status represents the current status of the cancellation and can be categorized into four possible values: CANCELLED, OK, ON_REQUEST and UNKNOWN."),(0,r.kt)("h3",{id:"what-are-the-different-values-that-can-be-assigned-to-the-cancel-status"},"What are the different values that can be assigned to the Cancel status?\ud83d\udd0e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CANCELLED"),": The status of the booking is cancelled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OK"),": The reservation status is OK."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ON_REQUEST"),": The reservation was completed but the product is still not available by the Seller, so the reservation goes into a waiting list. It is the Buyer\u2019s responsibility to check if the booking is OK."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UNKNOWN"),": The cancellation process through TravelgateX was completed but due to a supplier error or a timeout, the reservation status is unknown. It is the Buyer\u2019s responsibility to check if the booking is cancelled.")),(0,r.kt)("h3",{id:"what-should-i-do-if-i-receive-an-error-in-cancel-response\ufe0f"},"What should I do if I receive an error in Cancel response?\u26a0\ufe0f"),(0,r.kt)("p",null,"If you receive ",(0,r.kt)("strong",{parentName:"p"},"any of the ",(0,r.kt)("a",{parentName:"strong",href:"https://knowledge.travelgate.com/faqs#errors-and-warnings"},"common errors"),' or a status other than "CANCELLED"'),", it will be your responsibility as a Buyer to check the final status of the cancellation in the Seller's system."))}d.isMDXComponent=!0}}]);