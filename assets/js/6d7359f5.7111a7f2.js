"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43192],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},k=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return n?i.createElement(m,r(r({ref:e},p),{},{components:n})):i.createElement(m,r({ref:e},p))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88988:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var i=n(87462),o=(n(67294),n(3905));const a="query (\n\t$criteriaBookingRead: HotelCriteriaBookingInput!\n\t$settings: HotelSettingsInput!\n) {\n\thotelX {\n\t\tbooking(criteria: $criteriaBookingRead, settings: $settings) {\n\t\t\terrors {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\twarnings {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tbookings {\n\t\t\t\tstatus\n\t\t\t\treference {\n\t\t\t\t\tbookingID\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\thotel\n\t\t\t\t}\n\t\t\t\tholder {\n\t\t\t\t\tname\n\t\t\t\t\tsurname\n\t\t\t\t}\n\t\t\t\thotel {\n\t\t\t\t\tbookingDate\n\t\t\t\t\tstart\n\t\t\t\t\tend\n\t\t\t\t\thotelCode\n\t\t\t\t\thotelName\n\t\t\t\t\tboardCode\n\t\t\t\t\toccupancies {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpaxes {\n\t\t\t\t\t\t\tage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\trooms {\n\t\t\t\t\t\toccupancyRefId\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\trate\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\thoursBefore\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tremarks\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"criteriaBookingRead": {\n\t\t"bookingID": "1@1[241028[241029[230918[1[es[EUR[2[test_0123456789[2596391"\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 60000\n\t}\n}',l='{\n\t"criteriaBookingRead": {\n\t\t"accessCode": "2",\n\t\t"typeSearch": "REFERENCES",\n\t\t"references": {\n\t\t\t"hotelCode": "1",\n\t\t\t"currency": "EUR",\n\t\t\t"references": [\n\t\t\t\t{\n\t\t\t\t\t"client": "test_0123456789"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 18000\n\t}\n}',s='{\n\t"criteriaBookingRead": {\n\t\t"accessCode": "2",\n\t\t"typeSearch": "DATES",\n\t\t"dates": {\n\t\t\t"dateType": "ARRIVAL",\n\t\t\t"start": "2024-10-25",\n\t\t\t"end": "2024-10-30"\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 180000\n\t}\n}',c='{\n\t"criteriaBookingRead": {\n\t\t"accessCode": "2",\n\t\t"typeSearch": "DATES",\n\t\t"dates": {\n\t\t\t"dateType": "BOOKING",\n\t\t\t"start": "2023-08-25",\n\t\t\t"end": "2023-08-30"\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 180000\n\t}\n}',p={sidebar_position:2},d="Booking read and list",u={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",title:"Booking read and list",description:"The Booking query allows you to retrieve a specific booking with all its details using the booking ID or reference locator. You can also obtain a list of bookings that were made within a specific arrival date range or a specific booking date range. The returned fields for each booking in the list include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/overview"},next:{title:"Cancel",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel"}},k={},m=[{value:"Inputs",id:"inputs",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests examples",id:"requests-examples",level:3},{value:"Booking read with <code>bookingID</code> from the book response",id:"booking-read-with-bookingid-from-the-book-response",level:4},{value:"Booking read using the <code>accessCode</code>, <code>hotelCode</code>, <code>currency</code> and <code>reference</code> from the book response",id:"booking-read-using-the-accesscode-hotelcode-currency-and-reference-from-the-book-response",level:4},{value:"Booking list by arrival date range",id:"booking-list-by-arrival-date-range",level:4},{value:"Booking list by booking date range",id:"booking-list-by-booking-date-range",level:4},{value:"Response",id:"response",level:2},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2}],g=(y="GraphqlSample",function(t){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)});var y;const b={toc:m},h="wrapper";function f(t){let{components:e,...n}=t;return(0,o.kt)(h,(0,i.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"booking-read-and-list"},"Booking read and list"),(0,o.kt)("p",null,"The Booking query allows you to retrieve a specific booking with all its details using the booking ID or reference locator. You can also obtain a list of bookings that were made within a specific arrival date range or a specific booking date range. The returned fields for each booking in the list include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"holder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hotel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"price")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remarks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status"))),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,"When creating your cancel query, you have two different inputs to fill based on your specific needs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Criteria"),(0,o.kt)("li",{parentName:"ol"},"Settings")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n    hotelX {\n    booking\n      criteria: {}\n      settings: {}\n    }\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Remember that you can choose the information you want displayed:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reference"),": To display client or supplier booking reference"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status"),": To display the booking status"))),(0,o.kt)("h3",{id:"1-criteria"},"1. Criteria"),(0,o.kt)("p",null,"This query offers versatility in booking search, with all fields marked as optional (accessCode, typeSearch, language etc.). This flexibility empowers you to create a personalized Booking List Query, tailoring the requested fields to your specific needs. "),(0,o.kt)("p",null,"To specify your quote criteria you need to use the input ",(0,o.kt)("inlineCode",{parentName:"p"},"HotelCriteriaBookingInput")," in your query variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "criteria" : {\n        "bookingID" : "1@1[241028[241029[230918[1[es[EUR[2[test_0123456789[2596391"\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "criteria" : {\n        "accessCode" : "2",\n        "typeSearch" : "REFERENCES",\n        "references" : {\n            "hotelCode" : "1",\n            "currency" : "EUR",\n            "references" : [\n                {\n                    "client" : "test_0123456789"\n                }\n            ]\n        }\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "criteria" : {\n        "accessCode" : "2",\n        "typeSearch" : "DATES",\n        "dates" : {\n            "dateType" : "ARRIVAL",\n            "start" : "2024-10-28",\n            "end" : "2024-10-28"\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional criteria")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"accessCode")," (necessary if you search by references or by dates)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"typeSearch")," (necessary if you search by references or by dates)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"language")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dates")," (to receive a list of all the reservations made in a specific type frame)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookingID")," (to receive the details of a specific reservation)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"references")," (to receive the details of a specific reservation)")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Even if not all criteria are marked as mandatory, you must either use the bookingID from the book response or provide the set of all other criteria, including the access code, hotel, and reference, to read the reservation.")),(0,o.kt)("h3",{id:"2-settings"},"2. Settings"),(0,o.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,o.kt)("p",null,"To specify your booking settings you need to use the input ",(0,o.kt)("inlineCode",{parentName:"p"},"HotelSettingsInput")," in your query variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings": {\n        "client": "client_demo",\n        "context": "HOTELTEST",\n        "testMode": true,\n        "auditTransactions": false,\n        "timeout": 60000\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mandatory Settings:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"businessRules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"language")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nationality")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"markets"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional Settings:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auditTransactions")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"suppliers")," (Each one contains its own code, settings and accesses)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"plugins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testMode")," (This flag allows only the accesses checked as test)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clientTokens")," (Used to identify the origin of the request, this is only used in plugins)")),(0,o.kt)("h3",{id:"requests-examples"},"Requests examples"),(0,o.kt)("h4",{id:"booking-read-with-bookingid-from-the-book-response"},"Booking read with ",(0,o.kt)("inlineCode",{parentName:"h4"},"bookingID")," from the book response"),(0,o.kt)(g,{query:a,variables:r,mdxType:"GraphqlSample"}),(0,o.kt)("h4",{id:"booking-read-using-the-accesscode-hotelcode-currency-and-reference-from-the-book-response"},"Booking read using the ",(0,o.kt)("inlineCode",{parentName:"h4"},"accessCode"),", ",(0,o.kt)("inlineCode",{parentName:"h4"},"hotelCode"),", ",(0,o.kt)("inlineCode",{parentName:"h4"},"currency")," and ",(0,o.kt)("inlineCode",{parentName:"h4"},"reference")," from the book response"),(0,o.kt)(g,{query:a,variables:l,mdxType:"GraphqlSample"}),(0,o.kt)("h4",{id:"booking-list-by-arrival-date-range"},"Booking list by arrival date range"),(0,o.kt)(g,{query:a,variables:s,mdxType:"GraphqlSample"}),(0,o.kt)("h4",{id:"booking-list-by-booking-date-range"},"Booking list by booking date range"),(0,o.kt)(g,{query:a,variables:c,mdxType:"GraphqlSample"}),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The results obtained in the response fields may vary between Sellers.")),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently asked questions"))}f.isMDXComponent=!0}}]);