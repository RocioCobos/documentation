"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46119],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?o.createElement(k,r(r({ref:e},p),{},{components:n})):o.createElement(k,r({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56810:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i="mutation (\n\t$input: HotelOneStepBookInput!\n\t$settings: HotelSettingsInput!\n\t$filter: HotelFilterInput!\n) {\n\thotelX {\n\t\toneStepBook(input: $input, settings: $settings, filter: $filter) {\n\t\t\tbooking {\n\t\t\t\tstatus\n\t\t\t\treference {\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\tbookingID\n\t\t\t\t}\n\t\t\t\tholder {\n\t\t\t\t\tname\n\t\t\t\t\tsurname\n\t\t\t\t}\n\t\t\t\thotel {\n\t\t\t\t\tbookingDate\n\t\t\t\t\tstart\n\t\t\t\t\tend\n\t\t\t\t\thotelCode\n\t\t\t\t\thotelName\n\t\t\t\t\tboardCode\n\t\t\t\t\toccupancies {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpaxes {\n\t\t\t\t\t\t\tage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\trooms {\n\t\t\t\t\t\toccupancyRefId\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\tbinding\n\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\tgross\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\tdeadline\n\t\t\t\t\t\tisCalculatedDeadline\n\t\t\t\t\t\thoursBefore\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tremarks\n\t\t\t}\n\n\t\t\tadviseMessage {\n\t\t\t\tcode\n\t\t\t\tdescription\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"input": {\n\t\t"clientReference": "test_0123456789",\n\t\t"language": "es",\n\t\t"market": "ES",\n\t\t"nationality": "ES",\n\t\t"checkIn": "2024-10-28",\n\t\t"checkOut": "2024-10-29",\n\t\t"hotel": "1",\n\t\t"board": "1",\n\t\t"price": {\n\t\t\t"currency": "EUR",\n\t\t\t"binding": false,\n\t\t\t"net": 146,\n\t\t\t"gross": 146\n\t\t},\n\t\t"ratePlan": "BAR",\n\t\t"rateRulesExtended": [\n\t\t\t{\n\t\t\t\t"type": "PACKAGE"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "NON_REFUNDABLE"\n\t\t\t}\n\t\t],\n\t\t"payment": {\n\t\t\t"type": "MERCHANT"\n\t\t},\n\t\t"holder": {\n\t\t\t"title": "MISS",\n\t\t\t"name": "Jane",\n\t\t\t"surname": "Doe"\n\t\t},\n\t\t"rooms": {\n\t\t\t"occupancyRefId": 1,\n\t\t\t"code": "2269",\n\t\t\t"paxes": [\n\t\t\t\t{\n\t\t\t\t\t"title": "MISS",\n\t\t\t\t\t"name": "Jane",\n\t\t\t\t\t"surname": "Doe",\n\t\t\t\t\t"age": 30\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"title": "MISS",\n\t\t\t\t\t"name": "Jane",\n\t\t\t\t\t"surname": "Doe",\n\t\t\t\t\t"age": 30\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t"cancelPolicy": {\n\t\t\t"refundable": false\n\t\t}\n\t},\n\t"settings": {\n\t\t"testMode": true,\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"timeout": 180000\n\t},\n\t"filter": {\n\t\t"access": "2",\n\t\t"excludeComparisonFields": "SURCHARGES"\n\t}\n}',l={sidebar_position:4},s="One Step Book",u={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook",id:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook",title:"One Step Book",description:"The One Step Book operation requests a booking confirmation for the specified option criteria. Our system will internally perform the search and quote steps. Confirmation will only be applied if the price of the option is the same or lower than the one specified in the input request.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"One Step Quote",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepquote"},next:{title:"Quickstart",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/quickstart"}},p={},d=[{value:"Book Inputs",id:"book-inputs",level:2},{value:"1. Input",id:"1-input",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Book Response",id:"book-response",level:2},{value:"Book Status",id:"book-status",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},c=m("CautionSettingsHotelX"),k=m("GraphqlSample"),h={toc:d},y="wrapper";function f(t){let{components:e,...n}=t;return(0,a.kt)(y,(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"one-step-book"},"One Step Book"),(0,a.kt)("p",null,"The One Step Book operation requests a booking confirmation for the specified option criteria. Our system will internally perform the search and quote steps. Confirmation will only be applied if the price of the option is the same or lower than the one specified in the input request."),(0,a.kt)("p",null,"It provides a concise summary of the option, along with the reservation status. Please note that the returned information may vary depending on the Seller. The returned fields include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"holder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hotel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"price")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cancelPolicy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bookingID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status")," (Make sure you add this field to your query in order to receive the reservation status in the one step book response.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientReference")," (The booking locator in your system - alphanumerical value.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"supplierReference")," (Make sure you add this field to your query in order to receive the supplier locator in the one step book response.)")),(0,a.kt)("h2",{id:"book-inputs"},"Book Inputs"),(0,a.kt)("p",null,"This mutation offers versatility in book options, with certain fields marked as mandatory (",(0,a.kt)("inlineCode",{parentName:"p"},"clientReference"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"holder")," etc.) and others as optional (",(0,a.kt)("inlineCode",{parentName:"p"},"language"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deltaPrice"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"paymentCard")," etc.). "),(0,a.kt)("p",null,"When creating your book mutation, you have three different inputs to fill based on your specific needs:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Input"),(0,a.kt)("li",{parentName:"ol"},"Settings"),(0,a.kt)("li",{parentName:"ol"},"Filter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    hotelX {\n    book\n      input: {}\n      settings: {}\n      filter: {}\n    }\n}\n")),(0,a.kt)(c,{mdxType:"CautionSettingsHotelX"}),(0,a.kt)("h3",{id:"1-input"},"1. Input"),(0,a.kt)("p",null,"To specify your one step book input you need to use the input ",(0,a.kt)("inlineCode",{parentName:"p"},"HotelOneStepBookInput")," in your mutation variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "input": {\n        "clientReference": "test_0123456789",\n        "language": "es",\n        "market": "ES",\n        "nationality": "ES",\n        "checkIn": "2024-10-28",\n        "checkOut": "2024-10-29",\n        "hotel": "1",\n        "board": "1",\n        "price": {\n            "currency": "EUR",\n            "binding": false,\n            "net": 146,\n            "gross": 146\n        },\n        "ratePlan": "BAR",\n        "rateRulesExtended": [\n            {\n                "type": "PACKAGE"\n            },\n            {\n                "type": "NON_REFUNDABLE"\n            }\n        ],\n        "payment": {\n            "type": "MERCHANT"\n        },\n        "holder": {\n            "title": "MISS",\n            "name": "Jane",\n            "surname": "Doe"\n        },\n        "rooms": {\n            "occupancyRefId": 1,\n            "code": "2269",\n            "paxes": [\n                {\n                    "title": "MISS",\n                    "name": "Jane",\n                    "surname": "Doe",\n                    "age": 30\n                },\n                {\n                    "title": "MISS",\n                    "name": "Jane",\n                    "surname": "Doe",\n                    "age": 30\n                }\n            ]\n        },\n        "cancelPolicy": {\n            "refundable": false\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mandatory input:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clientReference")," (Booking ID in client's system.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"holder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rooms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"checkIn")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"checkOut")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hotel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"board")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"price")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cancelPolicy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"payment")," (If the payment is done by credit card, it's mandatory to specify the payment type and the credit card information.)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional input:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"language")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deltaPrice")," (Indicates price variation permitted by the Buyer.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remarks")," (Any customer comments for the supplier to consider.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nationality")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"market")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ratePlan")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rateRulesExtended")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"surcharges")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"supplements"))),(0,a.kt)("admonition",{title:"Key Recommendations",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Customize the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," according to your needs, taking into consideration ",(0,a.kt)("strong",{parentName:"p"},"the maximum values in Book is 180,000ms."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Consider that the ",(0,a.kt)("inlineCode",{parentName:"p"},"deltaPrice")," sets the price tolerance between Quote and Book. For instance, if the Quote stage displays a price of 100\u20ac and the ",(0,a.kt)("inlineCode",{parentName:"p"},"deltaPrice")," is 5, a change up to 105\u20ac will still secure a confirmed booking.")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If the option or rate you want to book has a payment type such as DIRECT, CARD_BOOKING, or CARD_CHECK_IN, it is mandatory to provide payment card information when making the booking. This should be done using the ",(0,a.kt)("inlineCode",{parentName:"p"},"PaymentCardInput")," in the book mutation.")),(0,a.kt)("h3",{id:"2-settings"},"2. Settings"),(0,a.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,a.kt)("p",null,"To specify your quote settings you need to use the input ",(0,a.kt)("inlineCode",{parentName:"p"},"HotelSettingsInput")," in your query variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings": {\n        "client": "client_demo",\n        "context": "HOTELTEST",\n        "testMode": true,\n        "timeout": 180000\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mandatory Settings:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context")," (You have the flexibility to choose between using the supplier's context or your own, depending on which codes you want to see in the response. If you prefer to receive responses with your custom codes, please ensure that your context code is linked to the mapping files that you've previously uploaded to your FTP account.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded.)")),(0,a.kt)("admonition",{title:"Key Recommendations",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Customize the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," according to your needs, taking into consideration ",(0,a.kt)("strong",{parentName:"p"},"the maximum values in Book is 180,000ms"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"auditTransaction"),' to "true" in Book when investigating errors.')))),(0,a.kt)("h3",{id:"requests-examples"},"Requests Examples"),(0,a.kt)(k,{query:i,variables:r,mdxType:"GraphqlSample"}),(0,a.kt)("h2",{id:"book-response"},"Book Response"),(0,a.kt)("h3",{id:"book-status"},"Book Status"),(0,a.kt)("p",null,"Once a Book (Reservation) method is run, our API response will provide its book status. This status represents the current status of the reservation and can be categorized into four possible values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"The reservation was successfully completed without any issues.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ON_REQUEST"),(0,a.kt)("td",{parentName:"tr",align:null},"Please note that a Book status may change over time: you may receive an ON_REQUEST status in Book response, and after running a ",(0,a.kt)("a",{parentName:"td",href:"../booking-management/booking-read"},"Booking Query")," some seconds later the status may have already changed to OK.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,a.kt)("td",{parentName:"tr",align:null},"The reservation process through Travelgate was completed but due to a supplier error or a timeout, the reservation status is unknown (our system was unable to confirm if the booking has been confirmed or not the on Seller's system). It is the Buyer\u2019s responsibility to check if the booking is OK.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PENDING_COMMIT"),(0,a.kt)("td",{parentName:"tr",align:null},"The payment has been confirmed on the provider\u2019s side, but is necessary to make a commit in order to confirm the reservation.")))),(0,a.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What should I do if I receive both an OK status and an error in the same Book response?"),(0,a.kt)("div",null,(0,a.kt)("div",null,"If you receive an error and a booking status OK in the Book response, the reservation status prevails over the error. Although you may also run a ",(0,a.kt)("a",{href:"../booking-management/booking-read"},"Booking Query")," in order to check the status of a reservation, please note that you should always contact the Seller in order to check the actual status of a booking in those cases you receive a booking status different than OK or no response at all."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What is the DeltaPrice? Why should I use it?"),(0,a.kt)("div",null,(0,a.kt)("div",null,"The Delta Price indicates the price variation permitted by the Buyer (amount or percentage), so that an error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price returned in Quote). This field is implemented if it\u2019s native to the Seller or if another Search/Quote request needs to be done in Book. Please note DeltaPrice should be implemented by a Seller in order to be available to a Buyer."),(0,a.kt)("br",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,'What does DeltaPrice "applyBoth" mean?'),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"If the value is 'false' it indicates that one of the conditions (amount or percentage) has to meet the DeltaPrice criteria before reservation."),(0,a.kt)("li",null,"If the value is 'true' it indicates that the new price cannot exceed the amount and percentage indicated by the Buyer.")))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'Why do I receive a status "ON_REQUEST" and a holder name "test" in my reservations the test environment?'),(0,a.kt)("div",null,(0,a.kt)("div",null,'In the test environment, it is common for some Sellers to consistently return an ON_REQUEST status. Furthermore, as a standard practice in the test environment, we automatically replace the holder and passenger names with "test".'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Will the currency in Book be the same as the currency in Quote?"),(0,a.kt)("div",null,(0,a.kt)("div",null,"The currency used for the transaction will remain the same throughout the entire Booking Flow, including cancellation policies."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Do I have to provide real names and ages for all the passengers?"),(0,a.kt)("div",null,(0,a.kt)("div",null,"No, you are not required to provide real ages and names for all passengers. You can use default values for each age group and name. The only information that should be real is the holder's information."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How do I define the total number of rooms in my Book request?"),(0,a.kt)("div",null,(0,a.kt)("div",null,"To define the number of rooms in your reservation, you need to utilize the occupancyRefId previously returned in Search response.For instance, for a room of two adults:",(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"rooms": [\n    {\n        "occupancyRefId": 1,\n        "paxes": [\n            {\n                "name": "TestName",\n                "surname": "Surname",\n                "age": 30\n            },\n            {\n                "name": "TestName",\n                "surname": "Surname",\n                "age": 30\n            }\n        ]\n    }\n]\n')))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What payment details should I add to my Book request?"),(0,a.kt)("div",null,(0,a.kt)("div",null,"The payment type and details to be added in your Book request depend on the payment type returned for the option to be booked, note that payment types depend on the commercial agreement established by a Buyer with their Sellers."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Where can I get the Hotel Confirmation Number (HCN)?"),(0,a.kt)("div",null,(0,a.kt)("div",null,"Once a booking has been successfully confirmed in Travelgate you may retrieve 2 different locators from its logs:",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",null,"The Buyer's locator (client reference)."),(0,a.kt)("li",null,"The Seller's locator (provider reference).")),"The Seller may also provide a third type of locator, issued by the hotel when it confirms the booking. This is known as the Hotel Confirmation Number (HCN) or Hotel Reference Booking (HRB). Please note we are only able to provide this code if the Seller returns it in their response."))))}f.isMDXComponent=!0}}]);