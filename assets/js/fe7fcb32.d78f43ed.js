"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36443],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=m(n),k=r,g=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},14116:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:3},i="Search",o={unversionedId:"apps/distribution/api/distribution-reservation-api/search",id:"apps/distribution/api/distribution-reservation-api/search",title:"Search",description:"This method allows searching for reservations primarily based on date filters, returning basic information for each matching reservation.",source:"@site/docs/apps/distribution/api/distribution-reservation-api/search.md",sourceDirName:"apps/distribution/api/distribution-reservation-api",slug:"/apps/distribution/api/distribution-reservation-api/search",permalink:"/docs/apps/distribution/api/distribution-reservation-api/search",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/api/distribution-reservation-api/search.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"XML API",permalink:"/docs/apps/distribution/api/distribution-reservation-api/making-requests/xml-api"},next:{title:"Read",permalink:"/docs/apps/distribution/api/distribution-reservation-api/read"}},d={},m=[{value:"Request",id:"request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"Response",id:"response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}],p={toc:m},s="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"search"},"Search"),(0,r.kt)("p",null,"This method allows searching for reservations primarily based on date filters, returning basic information for each matching reservation. "),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mandatory criteria:")),(0,r.kt)("p",null,"To make a search, it is essential to set either a bookingDate filter or a checkinDate filter, but not both at the same time (as this will result in an error). In both cases, the date range for the bookingDate filter and the checkinDate filter cannot exceed one week."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Optional criteria:")),(0,r.kt)("p",null,"Optionally, you can filter your search by specifying specific hotels, providers, and clients. You can also choose to includeCancellations, onlyCancellations, onlyErrors, onlyLocators, orderBy and/or isTest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'{\n    "access" : {\n        "accessToken" : "xxxx",\n        "user" : "xxxx",\n        "password" : "xxxx"\n    },\n    "bookingDate" : {\n        "from" : "2018-07-18",\n        "to" : "2018-07-20"\n    },\n    "hotels" : [\n        "1234",\n        "4534"\n    ],\n    "includeCancellations" : true\n}\n')),(0,r.kt)("h3",{id:"request-data-breakdown"},"Request Data Breakdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Rel"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null},"Acces information: ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"It will be validated to grant acces to the API and to the operation."),(0,r.kt)("li",null,"If there is any problem then an error will be returned.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access/accessToken"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Key to acces to the API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access/user"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"User.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access/password"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Password related to the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkinDate"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null},"Check-in filter. This node is set if we want to filter by check-in date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkinDate/from"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Check-in date range filter: from (inclusive).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkinDate/to"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Check-in date range filter: to (inclusive).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bookingDate"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null},"Booking filter. This node is set if we want to filter by booking date. (inclusive).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bookingDate/from"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"dateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Booking date range filter: from (inclusive).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bookingDate/to"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"dateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Booking date range filter: to (inclusive).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotels"),(0,r.kt)("td",{parentName:"tr",align:null},"0..N"),(0,r.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"Hotels filter:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If we just want the reservations of concret hotels then we can set this list with the codes of those hotels."),(0,r.kt)("li",null,"If not given or if it is empty then it will not be applied the filter by hotel code.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"providers"),(0,r.kt)("td",{parentName:"tr",align:null},"0..N"),(0,r.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"Providers filter:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If we just want the reservations of a specific set of providers then we can set this list with the codes of those providers."),(0,r.kt)("li",null,"If not given or if it is empty then the filter by provider code will not be applied.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clients"),(0,r.kt)("td",{parentName:"tr",align:null},"0..N"),(0,r.kt)("td",{parentName:"tr",align:null},"list(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"Clients filter:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If we just want the reservations of a specific set of clients then we can set this list with the codes of those clients."),(0,r.kt)("li",null,"If not given or if it is empty then the filter by client code will not be applied.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"includeCancellations"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Cancelations inclusion filter:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If set to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"true"))," then cancelled reservations that match the filters will be included in the response."),(0,r.kt)("li",null,"If not set to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"true"))," or not given then only not cancelled bookings will be returned.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onlyCancellations"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Cancellations filter:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If set to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"true"))," then only the bookings that have been cancelled in the specific time interval indicated will be returned."),(0,r.kt)("li",null,"If not set to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"true")),", then (depending on the value of the ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"includeCancellations"))," tag) only the reservations booked between the time interval indicated will be returned.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onlyErrors"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Only Errors filter:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If set to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"true"))," then only the bookings that have a status indicating some type of error will be returned (bookings with status ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"OK"))," or ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"CN"))," will not be returned). Also, if this filter is applied, both ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"includeCancellations"))," and ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"onlyCancellations"))," will be ingnored."),(0,r.kt)("li",null,"If not set to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"true")),", then (depending on the value of the ",(0,r.kt)("em",{parentName:"td"},"includeCancellations")," tag) only the reservations booked between the time interval indicated will be returned.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isTest"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Test mode:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If set to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"true"))," the operation will be executed in ",(0,r.kt)("em",{parentName:"td"},"test mode"),". This means that the response will include dummy information (no real reservations information.)"),(0,r.kt)("li",null,"If not set to ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"true"))," or not given then the operation will execute as normally."))," ",(0,r.kt)("em",{parentName:"td"},"In order to test the API, we still need to gie a real access information. Note that even in test mode all operations will execute its own request validations, so the requests must be well formed."))))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'{\n    "reservationSearchRS" : [\n        {\n            "locators" : {\n                "tgx" : "1",\n                "client" : "111-222",\n                "provider" : "12312313"\n            },\n            "bookingDate" : "2018-07-11 8:50:48",\n            "checkinDate" : "2018-08-14",\n            "checkoutDate" : "2018-08-21",\n            "status" : "OK",\n            "mainGuestName" : "Smith, Martin",\n            "hotelCode" : "h1",\n            "clientCode" : "c1",\n            "providerCode" : "p1",\n            "sellingPrice" : {\n                "currency" : "EUR",\n                "amount" : 234.5,\n                "binding" : false,\n                "commission" : 0\n            },\n            "providerPrice" : {\n                "currency" : "EUR",\n                "amount" : 204.99,\n                "binding" : false,\n                "commission" : 0\n            },\n            "quoteSellingPrice" : {\n                "currency" : "EUR",\n                "amount" : 234.5,\n                "binding" : false,\n                "commission" : 0\n            },\n            "quoteProviderPrice" : {\n                "currency" : "EUR",\n                "amount" : 204.99,\n                "binding" : false,\n                "commission" : 0\n            }\n        },\n        {\n            "locators" : {\n                "tgx" : "2",\n                "client" : "222-333",\n                "provider" : "456456456"\n            },\n            "bookingDate" : "2018-08-21 10:11:17",\n            "checkinDate" : "2018-12-01",\n            "checkoutDate" : "2018-12-07",\n            "cancellationDate" : "2018-08-26 11:01:47",\n            "status" : "CN",\n            "mainGuestName" : "Redford, Charles",\n            "hotelCode" : "h2",\n            "clientCode" : "c2",\n            "providerCode" : "p2",\n            "sellingPrice" : {\n                "currency" : "EUR",\n                "amount" : 234.5,\n                "binding" : false,\n                "commission" : 0\n            },\n            "providerPrice" : {\n                "currency" : "EUR",\n                "amount" : 204.99,\n                "binding" : false,\n                "commission" : 0\n            },\n            "quoteSellingPrice" : {\n                "currency" : "EUR",\n                "amount" : 234.5,\n                "binding" : false,\n                "commission" : 0\n            },\n            "quoteProviderPrice" : {\n                "currency" : "EUR",\n                "amount" : 204.99,\n                "binding" : false,\n                "commission" : 0\n            }\n        },\n        {\n            "locators" : {\n                "tgx" : "3",\n                "client" : "444-555",\n                "provider" : "789-987-789"\n            },\n            "bookingDate" : "2018-08-09 18:00:00",\n            "checkinDate" : "2019-01-26",\n            "checkoutDate" : "2019-01-27",\n            "status" : "OK",\n            "mainGuestName" : "Clancy, Tom",\n            "hotelCode" : "h3",\n            "clientCode" : "c3",\n            "providerCode" : "p3",\n            "sellingPrice" : {\n                "currency" : "EUR",\n                "amount" : 234.5,\n                "binding" : false,\n                "commission" : 0\n            },\n            "providerPrice" : {\n                "currency" : "EUR",\n                "amount" : 204.99,\n                "binding" : false,\n                "commission" : 0\n            },\n            "quoteSellingPrice" : {\n                "currency" : "EUR",\n                "amount" : 234.5,\n                "binding" : false,\n                "commission" : 0\n            },\n            "quoteProviderPrice" : {\n                "currency" : "EUR",\n                "amount" : 204.99,\n                "binding" : false,\n                "commission" : 0\n            }\n        },\n        {\n            "locators" : {\n                "tgx" : "45",\n                "client" : "232-555",\n                "provider" : "283-212-334"\n            },\n            "status" : "ERROR"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"response-data-breakdown"},"Response Data Breakdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Rel"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reservationSearchRS"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"Root node with the list of reservations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locators"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null},"This node contains the different locators of the reservation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locators/tgx"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Travelgate locator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locators/client"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Client locator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locators/provider"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Provider locator. If the reservation has no provider locator then this node will be null.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bookingDate"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"dateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Booking date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkinDate"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Check-in date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkoutDate"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"Check-out date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancellationDate"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"dateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"If the reservation has been canceled this will be the cancelation date. If the reservation is not canceled this node will be null.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Reservation status. Check reseravation status codes ",(0,r.kt)("a",{parentName:"td",href:"#"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"summaryStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Reservation summary status. Check reseravation status codes ",(0,r.kt)("a",{parentName:"td",href:"#"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mainGuestName"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Reservation's main guest name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotelCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Code of the hotel of the reservation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Code of the agency/client.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"providerCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Code of the provider of the reservation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sellingPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Selling price information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sellingPrice/amount"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Price amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sellingPrice/currency"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Price currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sellingPrice/binding"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the price is binding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sellingPrice/commision"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Commission related to the price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteSellingPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Selling price at the quote/pre-booking step.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteSellingPrice/amount"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Price amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteSellingPrice/currency"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Price currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteSellingPrice/binding"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the price is binding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteSellingPrice/commision"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Commission related to the price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"providerPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Provider price information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"providerPrice/amount"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Price amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"providerPrice/currency"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Price currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"providerPrice/binding"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the price is binding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"providerPrice/commision"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Commission related to the price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteProviderPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Provider price at the quote/pre-booking step.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteProviderPrice/amount"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Price amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteProviderPrice/currency"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Price currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteProviderPrice/binding"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the price is binding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"quoteProviderPrice/commision"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Commission related to the price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"officeCode"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"If returned then this will be the code of the office.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accessCodeHX"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Code of the access used in Hotel-X layer to access the provider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotelProvCodeHX"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Code of the hotel on the provider system (used by Hotel-X).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"correlationID"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Correlation ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reservationError"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"If the reservation is not on a well finished status (reservation or cancellation) then we can have some textual information about the error that caused that not well finished status.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reservationWarnings"),(0,r.kt)("td",{parentName:"tr",align:null},"0,1"),(0,r.kt)("td",{parentName:"tr",align:null},"list string"),(0,r.kt)("td",{parentName:"tr",align:null},"If returned then it contains a list of tgx locators of reservations that have had problems registering on the main system and that have been stored on an auxiliary system. This information is indepent from the searching dates (will be given for any dates range).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancellationWarnings"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"If returned then it contains a list of tgx locators of cancellations that have had problems registering on the main system and that have been stored on an auxiliary system. This information is indepent from the searching dates (will be given for any dates range).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancellationWarnings/amount"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Price amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancellationWarnings/currency"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Price currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancellationWarnings/binding"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the price is binding.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancellationWarnings/commision"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Commission related to the price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"node"),(0,r.kt)("td",{parentName:"tr",align:null},"If there has been any error executing the operation we can receive this node with information about that error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error/code"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Error code. Check error codes ",(0,r.kt)("a",{parentName:"td",href:"#"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error/description"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Error description. Check error descriptions ",(0,r.kt)("a",{parentName:"td",href:"#"},"here"),".")))))}u.isMDXComponent=!0}}]);