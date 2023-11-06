"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,v=m["".concat(l,".").concat(u)]||m[u]||f[u]||i;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1},a="Overview",s={unversionedId:"apis/for-sellers/hotel-push-sellers-api/booking-management/overview",id:"apis/for-sellers/hotel-push-sellers-api/booking-management/overview",title:"Overview",description:"You can receive instant API notifications from TravelgateX with the HotelResNotif message for bookings and the CancelNotif message for cancellations.",source:"@site/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/overview.mdx",sourceDirName:"apis/for-sellers/hotel-push-sellers-api/booking-management",slug:"/apis/for-sellers/hotel-push-sellers-api/booking-management/overview",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/overview",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Rate Retrieval",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/availability-rates-and-inventory/rates/rates-retrieve"},next:{title:"Booking Notification",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/booking-management/booking-notification"}},l={},p=[],c={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"You can receive instant API notifications from TravelgateX with the ",(0,o.kt)("inlineCode",{parentName:"p"},"HotelResNotif")," message for bookings and the ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelNotif")," message for cancellations. "),(0,o.kt)("p",null,"Also, it is possible to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"HotelResRetrieve")," messages to obtain a list of bookings from the Inventory Tool System."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Notice that card payments are only allowed if you implement ",(0,o.kt)("inlineCode",{parentName:"p"},"HotelResNotif")," message")))}f.isMDXComponent=!0}}]);