"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),u=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(a.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(a,".").concat(k)]||d[k]||c[k]||l;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},97398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const l={sidebar_position:2},i="Booking Notification",s={unversionedId:"apis/for-sellers/hotel-push-sellers-api/booking-management/booking-notification",id:"apis/for-sellers/hotel-push-sellers-api/booking-management/booking-notification",title:"Booking Notification",description:"During the booking process, we'll send you a HotelResNotif request message to share reservation details. You just need to check and let us know the reservation status. After that, Travelgate will handle the response from your system, moving forward with the reservation and updating you on the status.",source:"@site/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/booking-notification.mdx",sourceDirName:"apis/for-sellers/hotel-push-sellers-api/booking-management",slug:"/apis/for-sellers/hotel-push-sellers-api/booking-management/booking-notification",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/booking-notification",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/booking-notification.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/overview"},next:{title:"Cancel Notification",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/cancel-notification"}},a={},u=[{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"booking-notification"},"Booking Notification"),(0,r.kt)("p",null,"During the booking process, we'll send you a ",(0,r.kt)("inlineCode",{parentName:"p"},"HotelResNotif")," request message to share reservation details. You just need to check and let us know the reservation status. After that, Travelgate will handle the response from your system, moving forward with the reservation and updating you on the status."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you have the booking locator, include it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"HotelResNotif")," response, this way we'll include it in our response.")),(0,r.kt)("p",null,"Keep in mind that if there's an issue with the reservation in your system, we'll consider it as not successful (NOK) and let you know with an error message."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"HotelResNotif")," request message provides notifications for bookings."),(0,r.kt)("p",null,"[A\xf1adir ejemplo]"),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"After each request, Travelgate processes the data and provides a response to the Seller. Upon receiving a ",(0,r.kt)("inlineCode",{parentName:"p"},"HotelResNotif")," request, Travelgate sends a corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"HotelResNotif")," response. The response options include either ",(0,r.kt)("strong",{parentName:"p"},"success")," or an ",(0,r.kt)("strong",{parentName:"p"},"error"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Success:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<OTA_HotelResNotifRS xmlns = "http://www.opentravel.org/OTA/2003/05" Timestamp = "2018-09-12T23:09:08+03:00">\n    <HotelReservations>\n        <HotelReservation ResStatus = "Confirmed">\n            <ResGlobalInfo>\n                <HotelReservationIDs>\n                    <HotelReservationID ResID_Value = "**providerLocator**" ResID_SourceContext = "Provider"/>\n                </HotelReservationIDs>\n            </ResGlobalInfo>\n        </HotelReservation>\n    </HotelReservations>\n    <Success/>\n/OTA_HotelResNotifRS>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Error:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<OTA_HotelResNotifRS xmlns = "http://www.opentravel.org/OTA/2003/05" Timestamp = "2018-09-12T23:09:08+03:00">\n    <Errors>\n        <Error ShortText = "Confirmation error" Code = "50">Hotel doesn\'t exist</Error>\n    </Errors>\n</OTA_HotelResNotifRS>\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Error codes you could receive in the response during the booking flow"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("strong",null,"Error Code")),(0,r.kt)("th",null,(0,r.kt)("strong",null,"Error Description")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"-1"),(0,r.kt)("td",null,"Unexpected error")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"Validation error")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"HotelCode not found")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"Invalid dates")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"14"),(0,r.kt)("td",null,"Invalid Derived Rate")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"22"),(0,r.kt)("td",null,"Rooms not found")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"23"),(0,r.kt)("td",null,"Rates not found")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"30"),(0,r.kt)("td",null,"Occupation error")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"31"),(0,r.kt)("td",null,"RatePlan_Rate Error")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"38"),(0,r.kt)("td",null,"POS credentials not found")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"50"),(0,r.kt)("td",null,"Confirmation error")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"50"),(0,r.kt)("td",null,"Cancellation error"))))))))}c.isMDXComponent=!0}}]);