"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4256],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return t?r.createElement(y,a(a({ref:n},l),{},{components:t})):r.createElement(y,a({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},99405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const i={sidebar_position:3},a="Booking Query: Booking List",c={unversionedId:"our-products/are-you-a-buyer/our-methods/booking-management/booking/booking-list",id:"our-products/are-you-a-buyer/our-methods/booking-management/booking/booking-list",title:"Booking Query: Booking List",description:"How can I retrieve a list of all bookings made within a specific time frame?\ud83d\udca1",source:"@site/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/booking-list.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/booking-management/booking",slug:"/our-products/are-you-a-buyer/our-methods/booking-management/booking/booking-list",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/booking-list",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"kbSidebar",previous:{title:"Booking Query: Booking Details",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/booking-details"},next:{title:"Hotel-X Development - Hotels Query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-hotels-query"}},s={},u=[{value:"How can I retrieve a list of all bookings made within a specific time frame?\ud83d\udca1",id:"how-can-i-retrieve-a-list-of-all-bookings-made-within-a-specific-time-frame",level:3},{value:"How can I perform a booking query while filtering by &quot;DATES&quot;?\ud83d\udee0\ufe0f",id:"how-can-i-perform-a-booking-query-while-filtering-by-dates\ufe0f",level:3}],l={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"booking-query-booking-list"},"Booking Query: Booking List"),(0,o.kt)("h3",{id:"how-can-i-retrieve-a-list-of-all-bookings-made-within-a-specific-time-frame"},"How can I retrieve a list of all bookings made within a specific time frame?\ud83d\udca1"),(0,o.kt)("p",null,'In order to obtain a list of all the reservations made within a specific type frame you should perform the Booking query by "',(0,o.kt)("strong",{parentName:"p"},'typeSearch" "DATES"'),', specify if your "dateType"*',(0,o.kt)("em",{parentName:"p"},' is either "BOOKING'),' (booking date) or "ARRIVAL" (check-in date) and the "start" and "end" dates of the query (yyyy-MM-dd).'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"image\n")),(0,o.kt)("h3",{id:"how-can-i-perform-a-booking-query-while-filtering-by-dates\ufe0f"},'How can I perform a booking query while filtering by "DATES"?\ud83d\udee0\ufe0f'),(0,o.kt)("p",null,'Below, you\'ll find an example of a Booking Query that makes use of the "DATES" filter:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "query" : "query ($criteriaBookingRead: HotelCriteriaBookingInput!, $settings: HotelSettingsInput!) {\\n hotelX {\\n booking(criteria: $criteriaBookingRead, settings: $settings) {\\n auditData {\\n transactions {\\n request\\n response\\n }\\n }\\n bookings {\\n reference {\\n client\\n supplier\\n }\\n holder {\\n name\\n surname\\n }\\n hotel {\\n creationDate\\n checkIn\\n checkOut\\n hotelCode\\n hotelName\\n boardCode\\n occupancies {\\n id\\n paxes {\\n age\\n }\\n }\\n rooms {\\n occupancyRefId\\n code\\n description\\n price {\\n currency\\n binding\\n net\\n gross\\n exchange {\\n currency\\n rate\\n }\\n markups {\\n channel\\n currency\\n binding\\n net\\n gross\\n exchange {\\n currency\\n rate\\n }\\n }\\n }\\n }\\n }\\n price {\\n currency\\n binding\\n net\\n gross\\n exchange {\\n currency\\n rate\\n }\\n markups {\\n channel\\n currency\\n binding\\n net\\n gross\\n exchange {\\n currency\\n rate\\n }\\n }\\n }\\n cancelPolicy {\\n refundable\\n cancelPenalties {\\n hoursBefore\\n penaltyType\\n currency\\n value\\n }\\n }\\n remarks\\n status\\n payable\\n }\\n errors {\\n code\\n type\\n description\\n }\\n warnings {\\n code\\n type\\n description\\n }\\n }\\n }\\n}",\n    "variables" : {\n        "criteriaBookingRead" : {\n            "accessCode" : "",\n            "language" : "en",\n            "dates" : {\n                "dateType" : "BOOKING",\n                "start" : "2020-10-17",\n                "end" : "2020-10-18"\n            },\n            "typeSearch" : "DATES"\n        },\n        "settings" : {\n            "client" : "",\n            "context" : "",\n            "auditTransactions" : true\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);