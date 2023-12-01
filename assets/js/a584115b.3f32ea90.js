"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),d=l(n),c=a,h=d["".concat(s,".").concat(c)]||d[c]||p[c]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[d]="string"==typeof e?e:a,i[1]=m;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},51134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>m,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1},i="Hotel-X Development - Amendments",m={unversionedId:"our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query",id:"our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query",title:"Hotel-X Development - Amendments",description:"What are Amendments and how can I use them?",source:"@site/kb/our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/booking-management/amendments",slug:"/our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kbSidebar",previous:{title:"Booking Query: Booking List",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/booking-list"},next:{title:"Hotels",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-hotels-query"}},s={},l=[{value:"What are Amendments and how can I use them?",id:"what-are-amendments-and-how-can-i-use-them",level:3},{value:"How can I know if a Seller supports Amendments?",id:"how-can-i-know-if-a-seller-supports-amendments",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hotel-x-development---amendments"},"Hotel-X Development - Amendments"),(0,a.kt)("h3",{id:"what-are-amendments-and-how-can-i-use-them"},"What are Amendments and how can I use them?"),(0,a.kt)("p",null,"The Amendment operations allow you to modify different aspects of a booking. There are currently five amendment operations available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"amendDates: Allows to amend the checkin and/or the checkout of a booking"),(0,a.kt)("li",{parentName:"ul"},"amendBoard: Allows to amend the board of a booking"),(0,a.kt)("li",{parentName:"ul"},"amendRemarks: Allows to add a special request (remark) on a booking"),(0,a.kt)("li",{parentName:"ul"},"amendPaxes: Allows to amend the paxes of a booking")),(0,a.kt)("p",null,"Each amendment type must be performend in two steps: a Query and a Mutation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Query"),": it simulates the amendment - it's used to make a request to the Supplier in order to retrieve the new price of the booking and the cost of confirming the modification, if such cost exists. As an analogy, it would be the same as the Quote method in a Booking Flow. In addition, the Query will provide an amendmentID token to be sent in the second method, which should not be interpreted in any case by the Partner.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"How can I run an Amendments Query?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Sending all the booking information (references, dates, hotel code)"),(0,a.kt)("li",{parentName:"ul"},"Sending the bookingID received in the Book response (reservation response)")))))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Mutation"),": it commits the amendment - it is used to confirm the booking modification in the Supplier\u2019s system. In the Mutation, the amendmentID received in the Query response will be sent in order to provide all the required information.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"How can I run an Amendments Mutation?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can perform the mutation (commmit) of the amendment by sending the amendmentID received in the previous response.")))))),(0,a.kt)("h3",{id:"how-can-i-know-if-a-seller-supports-amendments"},"How can I know if a Seller supports Amendments?"),(0,a.kt)("p",null,"To learn more about Amendments, including which modifications a Seller allows and what can or cannot be changed through mutations, please review the Seller's ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query"},"Metadata"))," response."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/kbase/metadata-amends-1.jpg",alt:"metadata-amends-1"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You will find further information and examples about booking modifications in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/"},"Hotel-X Pull Buyers API Documentation"),".")))}p.isMDXComponent=!0}}]);