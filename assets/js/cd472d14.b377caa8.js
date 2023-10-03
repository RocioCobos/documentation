"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={sidebar_position:3},o="Amendments",r={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments",title:"Amendments",description:"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments.md",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Booking list",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-list"},next:{title:"Cancel",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel"}},m={},p=[{value:"Criteria",id:"criteria",level:3},{value:"Settings",id:"settings",level:3}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"amendments"},"Amendments"),(0,i.kt)("p",null,"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amendDates")," (allows to amend the checkin and/or the checkout of a booking)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amendBoard")," (allows to amend the board of a booking)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amendRoom")," (allows to amend the room of a booking)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amendRemarks")," (allows to add a special request/remark on a booking)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amendPaxes")," (allows to amend the paxes of a booking)")),(0,i.kt)("p",null,"Each amendment type must be performed in two steps, ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," (simulates the amendment) and ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," (commits the amendment). In both steps the returned fields include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The booking detail with the amendment applied"),(0,i.kt)("li",{parentName:"ul"},"Amendment fees if applicable"),(0,i.kt)("li",{parentName:"ul"},"AmendmentID (only returned in the query response)")),(0,i.kt)("p",null,"[A\xf1adir ejemplo]"),(0,i.kt)("h3",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"You can perform the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," (simulation) of the amendment sending all the booking information (references, dates, hotel code) or sending the bookingID got in the booking flow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Booking information:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accessCode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hotelCode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dates")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"BookingID got in the booking flow:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bookingID"))))),(0,i.kt)("p",null,"You can perform the ",(0,i.kt)("inlineCode",{parentName:"p"},"mutation")," (commit) of the amendment sending the amendmentID received in the previous response:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amendmentID"))),(0,i.kt)("h3",{id:"settings"},"Settings"),(0,i.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,i.kt)("p",null,"Mandatory Settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," (timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"businessRules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nationality")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"markets"))),(0,i.kt)("p",null,"Optional Settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auditTransactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"suppliers")," (each one contains its own code, settings and accesses)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testMode")," (this flag allows only the accesses checked as test)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clientTokens")," (used to identify the origin of the request, this is only used in plugins)")))}d.isMDXComponent=!0}}]);