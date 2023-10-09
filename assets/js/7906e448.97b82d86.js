"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61194],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,l(l({ref:e},p),{},{components:n})):a.createElement(k,l({ref:e},p))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[u]="string"==typeof t?t:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3543:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o="mutation ($cancelInput: HotelCancelInput!, $settings: HotelSettingsInput) {\n\thotelX {\n\t\tcancel(input: $cancelInput, settings: $settings) {\n\t\t\terrors {\n\t\t\t\ttype\n\t\t\t\tcode\n\t\t\t\tdescription\n\t\t\t}\n\t\t\twarnings {\n\t\t\t\tcode\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tcancellation {\n\t\t\t\tstatus\n\t\t\t\treference {\n\t\t\t\t\tbookingID\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\thotel\n\t\t\t\t}\n\t\t\t\tcancelReference\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t\texchange {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\trate\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tbooking {\n\t\t\t\t\treference {\n\t\t\t\t\t\tbookingID\n\t\t\t\t\t\tclient\n\t\t\t\t\t\tsupplier\n\t\t\t\t\t\thotel\n\t\t\t\t\t}\n\t\t\t\t\tholder {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tsurname\n\t\t\t\t\t}\n\t\t\t\t\tprice {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tbinding\n\t\t\t\t\t\tnet\n\t\t\t\t\t\tgross\n\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\trate\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\thotel {\n\t\t\t\t\t\tbookingDate\n\t\t\t\t\t\tstart\n\t\t\t\t\t\tend\n\t\t\t\t\t\thotelCode\n\t\t\t\t\t\thotelName\n\t\t\t\t\t\tboardCode\n\t\t\t\t\t\toccupancies {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tpaxes {\n\t\t\t\t\t\t\t\tage\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\trooms {\n\t\t\t\t\t\t\tcode\n\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\toccupancyRefId\n\t\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\tbinding\n\t\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\t\tgross\n\t\t\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\t\trate\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",l='{\n\t"cancelInput": {\n\t\t"bookingID": "1@1[241028[241029[230918[1[es[EUR[2[test_0123456789[2596391"\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 18000\n\t}\n}',r='{\n\t"cancelInput": {\n\t\t"accessCode": "2",\n\t\t"hotelCode": "1",\n\t\t"reference": {\n\t\t\t"supplier": "2596391"\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 60000\n\t}\n}',s={sidebar_position:2},c="Cancel",p={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel",title:"Cancel",description:"The cancel operation allows you to cancel a booking made via TravelgateX. The returned fields include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Booking read and list",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read"},next:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/"}},u={},d=[{value:"Inputs",id:"inputs",level:2},{value:"1. Input",id:"1-input",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Cancel with the <code>bookingID</code> from the book response",id:"cancel-with-the-bookingid-from-the-book-response",level:4},{value:"Cancel using the <code>accessCode</code>, <code>hotelCode</code> and <code>reference</code> from the book response",id:"cancel-using-the-accesscode-hotelcode-and-reference-from-the-book-response",level:4},{value:"Response",id:"response",level:2},{value:"Cancel Status",id:"cancel-status",level:3},{value:"Cancel penalty",id:"cancel-penalty",level:3},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2}],m=(k="GraphqlSample",function(t){return console.warn("Component "+k+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)});var k;const h={toc:d},g="wrapper";function y(t){let{components:e,...n}=t;return(0,i.kt)(g,(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cancel"},"Cancel"),(0,i.kt)("p",null,"The cancel operation allows you to cancel a booking made via TravelgateX. The returned fields include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"price")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"holder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hotel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rooms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rates"))),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"When creating your cancel query, you have two different inputs to fill based on your specific needs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Criteria"),(0,i.kt)("li",{parentName:"ol"},"Settings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    hotelX {\n    cancel\n      criteria: {}\n      settings: {}\n    }\n}\n")),(0,i.kt)("h3",{id:"1-input"},"1. Input"),(0,i.kt)("p",null,"This mutation offers versatility in cancellation, with all fields marked as optional (",(0,i.kt)("inlineCode",{parentName:"p"},"accessCode"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"language"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hotelCode")," etc.). You can decide between the two options for cancellation, either by ",(0,i.kt)("inlineCode",{parentName:"p"},"reference")," or by ",(0,i.kt)("inlineCode",{parentName:"p"},"bookingID"),", empowering you with the choice that suits you best."),(0,i.kt)("p",null,"To specify your cancel input you need to use the input ",(0,i.kt)("inlineCode",{parentName:"p"},"HotelCancelInput")," in your mutation variables."),(0,i.kt)("p",null,"If you cancel using only the ",(0,i.kt)("inlineCode",{parentName:"p"},"bookingID")," from the book response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "input" : {\n        "bookingID" : "1@1[241028[241029[230918[1[es[EUR[2[test_0123456789[2596391"\n    }\n}\n')),(0,i.kt)("p",null,"If you cancel using the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessCode"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hotelCode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reference")," from the book response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "input" : {\n        "accessCode" : "2",\n        "hotelCode" : "1",\n        "reference" : {\n            "supplier" : "2596391"\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional criteria")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bookingID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accessCode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hotelCode"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Even if not all criteria are marked as mandatory, you must either use the ",(0,i.kt)("inlineCode",{parentName:"p"},"bookingID")," from the book response or provide the set of all other criteria, including the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessCode"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hotel"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"reference"),", to cancel the reservation.")),(0,i.kt)("h3",{id:"2-settings"},"2. Settings"),(0,i.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,i.kt)("p",null,"To specify your cancel settings you need to use the input ",(0,i.kt)("inlineCode",{parentName:"p"},"HotelSettingsInput")," in your mutation variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings": {\n        "client": "client_demo",\n        "context": "HOTELTEST",\n        "testMode": true,\n        "auditTransactions": false,\n        "timeout": 60000\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mandatory Settings:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," (timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"businessRules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nationality")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"markets"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Optional Settings:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"group")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auditTransactions")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"suppliers")," (each one contains its own code, settings and accesses)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plugins")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"testMode")," (this flag allows only the accesses checked as test)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clientTokens")," (used to identify the origin of the request, this is only used in plugins)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"commitRequired")," (indicates if the book will be confirmed in 1 or 2 steps. It only should be used in Book)")),(0,i.kt)("h3",{id:"requests-examples"},"Requests Examples"),(0,i.kt)("h4",{id:"cancel-with-the-bookingid-from-the-book-response"},"Cancel with the ",(0,i.kt)("inlineCode",{parentName:"h4"},"bookingID")," from the book response"),(0,i.kt)(m,{query:o,variables:l,mdxType:"GraphqlSample"}),(0,i.kt)("h4",{id:"cancel-using-the-accesscode-hotelcode-and-reference-from-the-book-response"},"Cancel using the ",(0,i.kt)("inlineCode",{parentName:"h4"},"accessCode"),", ",(0,i.kt)("inlineCode",{parentName:"h4"},"hotelCode")," and ",(0,i.kt)("inlineCode",{parentName:"h4"},"reference")," from the book response"),(0,i.kt)(m,{query:o,variables:r,mdxType:"GraphqlSample"}),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The information returned in Cancel response may vary between Sellers.")),(0,i.kt)("h3",{id:"cancel-status"},"Cancel Status"),(0,i.kt)("p",null,"Once a Cancel method is run, our API response will provide its cancel status. This status represents the current status of the cancellation and can be categorized into four possible values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CANCELLED"),(0,i.kt)("td",{parentName:"tr",align:null},"The reservation is cancelled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"OK"),(0,i.kt)("td",{parentName:"tr",align:null},"The reservation status is OK, is not cancelled.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ON_REQUEST"),(0,i.kt)("td",{parentName:"tr",align:null},"The reservation was completed but the product is still not available by the Seller, so the reservation goes into a waiting list. It is the Buyer\u2019s responsibility to check if the booking is OK.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,i.kt)("td",{parentName:"tr",align:null},"The cancellation process through TravelgateX was completed but due to a supplier error or a timeout, the reservation status is unknown. It is the Buyer\u2019s responsibility to check if the booking is cancelled.")))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},'If you receive any of the "common errors" or a status other than "CANCELLED", it will be your responsibility as a Buyer to check the final status of the cancellation in the Seller\'s system.')),(0,i.kt)("h3",{id:"cancel-penalty"},"Cancel penalty"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Cancellation always takes into account the day and time of the destination in order to calculate what cancellation policy should be applied. UTC time.")),(0,i.kt)("h2",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How are cancellation costs calculated and displayed?"),(0,i.kt)("div",null,(0,i.kt)("div",null,"Depending on the specifications provided by a Seller, cancellation costs can be calculated using three different penalty types. It is important to keep in mind that a booking may have more than one penalty type associated with it.",(0,i.kt)("ul",null,(0,i.kt)("li",null,"NIGHTS: It indicates the number of nights to be penalized."),(0,i.kt)("li",null,"PERCENT: It indicates the percentage to pay based on the option price (possible values between 0 and 100)."),(0,i.kt)("li",null,"IMPORT: It Indicates the exact amount payable."))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Is it possible to retrieve the cancellation costs without canceling the option?"),(0,i.kt)("div",null,(0,i.kt)("div",null,"If the seller provides cancel policies information, you can access it either through the Hotel-X Quote Query or, if the reservation has already been made, with the Hotel-X Booking Query."))))}y.isMDXComponent=!0}}]);