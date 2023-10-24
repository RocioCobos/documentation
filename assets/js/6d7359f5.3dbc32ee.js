"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43192],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=o.createContext({}),p=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),k=i,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return n?o.createElement(m,r(r({ref:e},c),{},{components:n})):o.createElement(m,r({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},39373:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>N,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var o=n(87462),i=(n(67294),n(3905));const a="query (\n\t$criteriaBookingRead: HotelCriteriaBookingInput!\n\t$settings: HotelSettingsInput!\n) {\n\thotelX {\n\t\tbooking(criteria: $criteriaBookingRead, settings: $settings) {\n\t\t\terrors {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\twarnings {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tbookings {\n\t\t\t\tstatus\n\t\t\t\treference {\n\t\t\t\t\tbookingID\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\thotel\n\t\t\t\t}\n\t\t\t\tholder {\n\t\t\t\t\tname\n\t\t\t\t\tsurname\n\t\t\t\t}\n\t\t\t\thotel {\n\t\t\t\t\tbookingDate\n\t\t\t\t\tstart\n\t\t\t\t\tend\n\t\t\t\t\thotelCode\n\t\t\t\t\thotelName\n\t\t\t\t\tboardCode\n\t\t\t\t\toccupancies {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpaxes {\n\t\t\t\t\t\t\tage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\trooms {\n\t\t\t\t\t\toccupancyRefId\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\trate\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\thoursBefore\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tremarks\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"criteriaBookingRead": {\n\t\t"bookingID": "1@1[241028[241029[231010[1[en[EUR[2[test_01234567890[2636944"\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 60000\n\t}\n}',l='{\n\t"criteriaBookingRead": {\n\t\t"accessCode": "2",\n\t\t"typeSearch": "REFERENCES",\n\t\t"references": {\n\t\t\t"hotelCode": "1",\n\t\t\t"currency": "EUR",\n\t\t\t"references": [\n\t\t\t\t{\n\t\t\t\t\t"client": "test_01234567890"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 18000\n\t}\n}',s='{\n\t"criteriaBookingRead": {\n\t\t"accessCode": "2",\n\t\t"typeSearch": "DATES",\n\t\t"dates": {\n\t\t\t"dateType": "ARRIVAL",\n\t\t\t"start": "2024-10-25",\n\t\t\t"end": "2024-10-30"\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 180000\n\t}\n}',p='{\n\t"criteriaBookingRead": {\n\t\t"accessCode": "2",\n\t\t"typeSearch": "DATES",\n\t\t"dates": {\n\t\t\t"dateType": "BOOKING",\n\t\t\t"start": "2023-10-01",\n\t\t\t"end": "2023-10-10"\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 180000\n\t}\n}',c={sidebar_position:2},d="Booking Read and List",u={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",title:"Booking Read and List",description:"The Booking query allows you to retrieve a specific booking with all its details using the booking ID or reference locator. You can also obtain a list of bookings that were made within a specific arrival date range or a specific booking date range. The returned fields for each booking in the list include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/overview"},next:{title:"Cancel",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel"}},k={},m=[{value:"Inputs",id:"inputs",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Booking read with the <code>bookingID</code> from the book response",id:"booking-read-with-the-bookingid-from-the-book-response",level:4},{value:"Booking read using the <code>accessCode</code>, <code>hotelCode</code>, <code>currency</code> and <code>reference</code> from the book response",id:"booking-read-using-the-accesscode-hotelcode-currency-and-reference-from-the-book-response",level:4},{value:"Booking list by arrival date range",id:"booking-list-by-arrival-date-range",level:4},{value:"Booking list by booking date range",id:"booking-list-by-booking-date-range",level:4},{value:"Response",id:"response",level:2}],g=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)},h=g("CautionSettingsHotelX"),y=g("GraphqlSample"),b={toc:m},f="wrapper";function N(t){let{components:e,...n}=t;return(0,i.kt)(f,(0,o.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"booking-read-and-list"},"Booking Read and List"),(0,i.kt)("p",null,"The Booking query allows you to retrieve a specific booking with all its details using the booking ID or reference locator. You can also obtain a list of bookings that were made within a specific arrival date range or a specific booking date range. The returned fields for each booking in the list include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"holder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hotel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"price")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remarks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"When creating your booking query, you have two different inputs to fill based on your specific needs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Criteria"),(0,i.kt)("li",{parentName:"ol"},"Settings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n    hotelX {\n    booking\n      criteria: {}\n      settings: {}\n    }\n}\n")),(0,i.kt)(h,{mdxType:"CautionSettingsHotelX"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Remember that you can choose the information you want displayed:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reference"),": To display client or supplier booking reference"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"),": To display the booking status"))),(0,i.kt)("h3",{id:"1-criteria"},"1. Criteria"),(0,i.kt)("p",null,"This query offers versatility in booking search, with all fields marked as optional (",(0,i.kt)("inlineCode",{parentName:"p"},"accessCode"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"typeSearch"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"language")," etc.). This flexibility empowers you to create a personalized Booking List Query, tailoring the requested fields to your specific needs. "),(0,i.kt)("p",null,"To specify your booking criteria you need to use the input ",(0,i.kt)("inlineCode",{parentName:"p"},"HotelCriteriaBookingInput")," in your query variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "criteria" : {\n        "bookingID" : "1@1[241028[241029[230918[1[es[EUR[2[test_0123456789[2596391"\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "criteria" : {\n        "accessCode" : "2",\n        "typeSearch" : "REFERENCES",\n        "references" : {\n            "hotelCode" : "1",\n            "currency" : "EUR",\n            "references" : [\n                {\n                    "client" : "test_0123456789"\n                }\n            ]\n        }\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "criteria" : {\n        "accessCode" : "2",\n        "typeSearch" : "DATES",\n        "dates" : {\n            "dateType" : "ARRIVAL",\n            "start" : "2024-10-28",\n            "end" : "2024-10-28"\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional criteria")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accessCode")," (Necessary if you search by references or by dates)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"typeSearch")," (Necessary if you search by references or by dates)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dates")," (To receive a list of all the reservations made in a specific type frame)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bookingID")," (To receive the details of a specific reservation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"references")," (To receive the details of a specific reservation)")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Even if not all criteria are marked as mandatory, you must either use the ",(0,i.kt)("inlineCode",{parentName:"p"},"bookingID")," from the book response or provide the set of all other criteria, including the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessCode"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hotel"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"reference"),", to read the reservation.")),(0,i.kt)("h3",{id:"2-settings"},"2. Settings"),(0,i.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,i.kt)("p",null,"To specify your booking settings you need to use the input ",(0,i.kt)("inlineCode",{parentName:"p"},"HotelSettingsInput")," in your query variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings": {\n        "client": "client_demo",\n        "context": "HOTELTEST",\n        "testMode": true,\n        "auditTransactions": false,\n        "timeout": 60000\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mandatory Settings:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"businessRules"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional Settings:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auditTransactions")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"suppliers")," (Each one contains its own code, settings and accesses)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testMode")," (This flag allows only the accesses checked as test)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clientTokens")," (Used to identify the origin of the request, this is only used in plugins)")),(0,i.kt)("h3",{id:"requests-examples"},"Requests Examples"),(0,i.kt)("h4",{id:"booking-read-with-the-bookingid-from-the-book-response"},"Booking read with the ",(0,i.kt)("inlineCode",{parentName:"h4"},"bookingID")," from the book response"),(0,i.kt)(y,{query:a,variables:r,mdxType:"GraphqlSample"}),(0,i.kt)("h4",{id:"booking-read-using-the-accesscode-hotelcode-currency-and-reference-from-the-book-response"},"Booking read using the ",(0,i.kt)("inlineCode",{parentName:"h4"},"accessCode"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"hotelCode"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"currency")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"reference")," from the book response"),(0,i.kt)(y,{query:a,variables:l,mdxType:"GraphqlSample"}),(0,i.kt)("h4",{id:"booking-list-by-arrival-date-range"},"Booking list by arrival date range"),(0,i.kt)(y,{query:a,variables:s,mdxType:"GraphqlSample"}),(0,i.kt)("h4",{id:"booking-list-by-booking-date-range"},"Booking list by booking date range"),(0,i.kt)(y,{query:a,variables:p,mdxType:"GraphqlSample"}),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,"Keep in mind that the content of the Booking response can differ depending on the Sellers. For instance, some Sellers might provide details about the hotel or cancel policies, while others may only offer information about the status and locators/references."))}N.isMDXComponent=!0}}]);