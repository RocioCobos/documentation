"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61697],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),k=r,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||a;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=k;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},53220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(87462),r=(t(67294),t(3905));const a={sidebar_position:2},o="Booking list",l={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-list",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-list",title:"Booking list",description:"The Booking List operation allows to retrieve a booking (or bookings) with all its details from the booking reference locator. The returned fields for each booking in the list include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-list.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-list",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-list",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-list.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/overview"},next:{title:"Amendments",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments"}},s={},u=[{value:"Criteria",id:"criteria",level:3},{value:"Settings",id:"settings",level:3},{value:"Filter",id:"filter",level:3},{value:"Frequently asked questions",id:"frequently-asked-questions",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"booking-list"},"Booking list"),(0,r.kt)("p",null,"The Booking List operation allows to retrieve a booking (or bookings) with all its details from the booking reference locator. The returned fields for each booking in the list include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"holder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hotel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"price")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remarks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Remember that you can choose the information you want displayed:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reference"),": To display client or supplier booking reference"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status"),": To display the booking status"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The queryable fields available by a Seller may vary between Sellers.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n    hotelX {\n        booking(\n            criteria: {\n                accessCode: "2"\n                language: "es"\n                typeSearch: DATES\n                dates: { dateType: BOOKING, start: "2023-06-06", end: "2023-06-07" }\n            }\n            settings: {\n                client: "client_demo"\n                auditTransactions: true\n                context: "HOTELTEST"\n                testMode: true\n                timeout: 18000\n            }\n        ) {\n            bookings {\n                billingSupplierCode\n                reference {\n                    client\n                    supplier\n                    hotel\n                    bookingID\n                }\n                holder {\n                    name\n                    surname\n                }\n                status\n                hotel {\n                    hotelCode\n                    hotelName\n                    boardCode\n                    occupancies {\n                        id\n                        paxes {\n                            age\n                        }\n                    }\n                    rooms {\n                        occupancyRefId\n                        code\n                        description\n                        price {\n                            currency\n                            net\n                            exchange {\n                                currency\n                                rate\n                            }\n                        }\n                    }\n                }\n                cancelPolicy {\n                    refundable\n                    cancelPenalties {\n                        hoursBefore\n                        penaltyType\n                        currency\n                        value\n                    }\n                }\n                remarks\n                payable\n            }\n            errors {\n                code\n                type\n                description\n            }\n            warnings {\n                code\n                type\n                description\n            }\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"criteria"},"Criteria"),(0,r.kt)("p",null,"This query offers versatility in booking search, with all fields marked as optional (accessCode, typeSearch, language etc.). This flexibility empowers you to create a personalized Booking List Query, tailoring the requested fields to your specific needs. "),(0,r.kt)("p",null,"Optional criteria"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accessCode")," (necessary if you search by references or by dates)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typeSearch")," (necessary if you search by references or by dates)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"language")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dates")," (to receive a list of all the reservations made in a specific type frame)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bookingID")," (to receive the details of a specific reservation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"references")," (to receive the details of a specific reservation)")),(0,r.kt)("h3",{id:"settings"},"Settings"),(0,r.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,r.kt)("p",null,"Mandatory Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"context")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout")," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"businessRules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"language")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"currency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nationality")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"markets"))),(0,r.kt)("p",null,"Optional Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"group")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auditTransactions")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"suppliers")," (Each one contains its own code, settings and accesses)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plugins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testMode")," (This flag allows only the accesses checked as test)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientTokens")," (Used to identify the origin of the request, this is only used in plugins)")),(0,r.kt)("h3",{id:"filter"},"Filter"),(0,r.kt)("p",null,"Filters allow you to precisely tailor the response according to your preferences. The available filter is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plugin"),": You can filter and specify which plugins need to be included or excluded.")),(0,r.kt)("h3",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,r.kt)("details",null,(0,r.kt)("summary",null,'How can I perform a booking query while filtering by "bookingID"?'),(0,r.kt)("p",null,'Remember the bookingID is Hotel-X booking reference returned in Book response. Below, you\'ll find an example of a Booking Query that makes use of the "bookingID" filter.',(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"**Book response:**\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'"data" {\n    "hotelX" {\n        "book": {\n        "booking": {\n          "reference": {\n            "client": "clientReferenceTest",\n            "supplier": "supplierReferenceTest",\n            "bookingID": "bookindIDTest"\n          },\n          "price": {\n            "currency": "EUR",\n            "net": 800,\n            "gross": 800,\n            "binding": false\n          },\n          "status": "OK",\n        },\n        "errors": null,\n        "warnings": null\n            }\n        }\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Booking query request:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    "criteriaBookingRead": {\n      "bookingID": "bookindIDTest"\n    },\n    "settings": {\n      "context": "contextCode",\n      "client": "clientCode",\n        "timeout": 58700,\n      "auditTransactions": false,\n        "testMode": false\n    }\n}\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,'How can I perform a Booking query while filtering by "references"?'),(0,r.kt)("p",null,'In order to perform a Booking query by "REFERENCES" (supplier and/or client references) you should add the references information in the CriteriaBookingReferencesInput:',(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n        "criteriaBookingRead" : {\n            "accessCode" : "",\n            "language" : "en",\n            "typeSearch" : "REFERENCES",\n            "bookingID" : "",\n            "references" : {\n                "hotelCode" : "",\n                "currency" : "",\n                "references" : [\n                    {\n                        "supplier" : "supplierReference",\n                        "client" : "clientReference"\n                    }\n                ]\n            }\n        },\n        "settings" : {\n            "client" : "",\n            "auditTransactions" : true,\n            "context" : "",\n            "testMode" : false\n        }\n}\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How can I retrieve a list of all bookings made within a specific time frame?"),(0,r.kt)("div",null,(0,r.kt)("div",null,'In order to obtain a list of all the reservations made within a specific type frame you should perform the Booking query by "typeSearch" "DATES", specify if your "dateType" is either "BOOKING" (booking date) or "ARRIVAL" (check-in date) and the "start" and "end" dates of the query (yyyy-MM-dd).'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,'How can I perform a booking query while filtering by "DATES"?'),(0,r.kt)("p",null,'Below, you\'ll find an example of a Booking Query that makes use of the "DATES" filter:',(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n        "criteriaBookingRead" : {\n            "accessCode" : "",\n            "language" : "en",\n            "dates" : {\n                "dateType" : "BOOKING",\n                "start" : "2020-10-17",\n                "end" : "2020-10-18"\n            },\n            "typeSearch" : "DATES"\n        },\n        "settings" : {\n            "client" : "",\n            "context" : "",\n            "auditTransactions" : true\n        }\n}\n')))))}d.isMDXComponent=!0}}]);