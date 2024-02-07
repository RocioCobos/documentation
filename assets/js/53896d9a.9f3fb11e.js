/*! For license information please see 53896d9a.9f3fb11e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19881],{85024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(17624),r=t(4552);const a={sidebar_position:1},s="Hotel-X Development - Book Mutation",i={id:"our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation",title:"Hotel-X Development - Book Mutation",description:"All about Hotel-X Book Mutation",source:"@site/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/booking-flow/book",slug:"/our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kbSidebar",previous:{title:"On Request status in Quote",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/quote/status-on-request-rq-status-in-quote-rs"},next:{title:"Status in Book response",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/what-status-can-be-returned-in-hotel-x-book-response"}},l={},d=[{value:"All about Hotel-X Book Mutation",id:"all-about-hotel-x-book-mutation",level:2},{value:"What information can I expect in Book response?\u2714\ufe0f",id:"what-information-can-i-expect-in-book-response\ufe0f",level:3},{value:"What is the DeltaPrice? Why should I use it?\ud83d\udca1",id:"what-is-the-deltaprice-why-should-i-use-it",level:3},{value:"What does DeltaPrice &quot;applyBoth&quot; mean?",id:"what-does-deltaprice-applyboth-mean",level:4},{value:"Why do I receive a status &quot;ON_REQUEST&quot; and holder name &quot;test&quot; in my test reservations?\ud83d\udca1",id:"why-do-i-receive-a-status-on_request-and-holder-name-test-in-my-test-reservations",level:3},{value:"Will the currency in Book be the same as the currency in Quote?",id:"will-the-currency-in-book-be-the-same-as-the-currency-in-quote",level:3},{value:"Do I have to provide real names and ages for all the passengers?",id:"do-i-have-to-provide-real-names-and-ages-for-all-the-passengers",level:3},{value:"How can I add remarks to a Book request?",id:"how-can-i-add-remarks-to-a-book-request",level:3},{value:"How do I define the total number of rooms in my Book request?",id:"how-do-i-define-the-total-number-of-rooms-in-my-book-request",level:3},{value:"What payment details should I add to my Book request?",id:"what-payment-details-should-i-add-to-my-book-request",level:3},{value:"How can I add the payment details to my Book request?",id:"how-can-i-add-the-payment-details-to-my-book-request",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"hotel-x-development---book-mutation",children:"Hotel-X Development - Book Mutation"}),"\n",(0,o.jsx)(n.h2,{id:"all-about-hotel-x-book-mutation",children:"All about Hotel-X Book Mutation"}),"\n",(0,o.jsx)(n.p,{children:"Book operation requests a booking confirmation for the specified optionRefId returned in Quote. It returns a brief summary of the option plus the status of the reservation."}),"\n",(0,o.jsx)(n.h3,{id:"what-information-can-i-expect-in-book-response\ufe0f",children:"What information can I expect in Book response?\u2714\ufe0f"}),"\n",(0,o.jsxs)(n.p,{children:["The information returned in Book response may vary between Sellers, so please check our ",(0,o.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"Hotel-X Documentation"})," in order to add to your Book the fields expected on your side. Additionally, you may check the ",(0,o.jsx)(n.a,{href:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query",children:"Metadata"})," of your Sellers for further details on the specifications established on their side for this Method."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Some of the fields to be declared/added to Book mutation request are:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Status - make sure you add this field in order to receive the reservation status in the response."}),"\n",(0,o.jsx)(n.li,{children:"Price"}),"\n",(0,o.jsx)(n.li,{children:"Client reference: the booking locator in your system (alphanumerical value)."}),"\n",(0,o.jsx)(n.li,{children:"Supplier reference: the booking locator in the Seller's system."}),"\n",(0,o.jsx)(n.li,{children:"BookingID"}),"\n",(0,o.jsx)(n.li,{children:"Holder"}),"\n",(0,o.jsx)(n.li,{children:"Hotel"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"important",type:"warning",children:(0,o.jsxs)(n.p,{children:["To ensure seamless billing, ",(0,o.jsx)(n.strong,{children:"it's important that you handle all cancellations via our API"}),".",(0,o.jsx)(n.br,{}),"\n","Should you face any issues, please don't hesitate to get in touch with our ",(0,o.jsx)(n.a,{href:"https://app.travelgatex.com/tickets",children:"Customer Care team"})," for assistance. Additionally, please make sure to cancel any test bookings with Sellers and to check that such bookings are refundable."]})}),"\n",(0,o.jsx)(n.h3,{id:"what-is-the-deltaprice-why-should-i-use-it",children:"What is the DeltaPrice? Why should I use it?\ud83d\udca1"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book",children:"Delta Price"})," indicates the price variation permitted by the Buyer (amount or percentage), so that an error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price returned in Quote)."]}),"\n",(0,o.jsx)(n.p,{children:"This field is implemented if it\u2019s native to the Seller or if another Search/Quote request needs to be done in Book - please note DeltaPrice should be implemented by a Seller in order to be available to a Buyer."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Interested in adding DeltaPrice in your requests?"})," Feel free to access our ",(0,o.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book",children:"Documentation"})," for more information!\ud83d\ude80"]})}),"\n",(0,o.jsx)(n.h4,{id:"what-does-deltaprice-applyboth-mean",children:'What does DeltaPrice "applyBoth" mean?'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"applyBoth: false: It indicates that one of the conditions (amount or percentage) has to meet the DeltaPrice criteria before reservation."}),"\n",(0,o.jsx)(n.li,{children:"applyBoth: true: It indicates that the new price cannot exceed the amount and percentage indicated by the Buyer."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Example:"})}),"\n",(0,o.jsx)(n.h3,{id:"why-do-i-receive-a-status-on_request-and-holder-name-test-in-my-test-reservations",children:'Why do I receive a status "ON_REQUEST" and holder name "test" in my test reservations?\ud83d\udca1'}),"\n",(0,o.jsx)(n.p,{children:'In the test environment, it is common for some Sellers to consistently return an ON_REQUEST status. Furthermore, as a standard practice in the test environment, we automatically replace the holder and passenger names with "test".'}),"\n",(0,o.jsx)(n.h3,{id:"will-the-currency-in-book-be-the-same-as-the-currency-in-quote",children:"Will the currency in Book be the same as the currency in Quote?"}),"\n",(0,o.jsx)(n.p,{children:"The currency used for the transaction will remain the same throughout the entire Booking Flow, including cancellation policies."}),"\n",(0,o.jsx)(n.h3,{id:"do-i-have-to-provide-real-names-and-ages-for-all-the-passengers",children:"Do I have to provide real names and ages for all the passengers?"}),"\n",(0,o.jsx)(n.p,{children:"No, you are not required to provide real ages and names for all passengers. You can use default values for each age group and name. The only information that should be real is the holder's information."}),"\n",(0,o.jsx)(n.h3,{id:"how-can-i-add-remarks-to-a-book-request",children:"How can I add remarks to a Book request?"}),"\n",(0,o.jsxs)(n.p,{children:["Remarks are comments from the customer for the Seller to take into account. They can be included in the Book request (details can be found in our ",(0,o.jsx)(n.a,{href:"https://api.travelgatex.com/playground",children:"Hotel-X Schema"}),") provided that the Supplier allows for remarks in their reservations - you can check their ",(0,o.jsx)(n.a,{href:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query",children:"Metadata"})," for further information."]}),"\n",(0,o.jsx)(n.h3,{id:"how-do-i-define-the-total-number-of-rooms-in-my-book-request",children:"How do I define the total number of rooms in my Book request?"}),"\n",(0,o.jsx)(n.p,{children:"To define the number of rooms in your reservation, you need to utilize the occupancyRefId previously returned in Search response.\nFor instance, for a room of two adults:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'"rooms": [\n            {\n                "occupancyRefId": 1,\n                "paxes": [\n                    {\n                        "name": "TestName",\n                        "surname": "Surname",\n                        "age": 30\n                    },\n                    {\n                        "name": "TestName",\n                        "surname": "Surname",\n                        "age": 30\n                    }\n                ]\n            }\n        ]\n    }\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"what-payment-details-should-i-add-to-my-book-request",children:"What payment details should I add to my Book request?"}),"\n",(0,o.jsx)(n.p,{children:"The payment type and details to be added in your Book request depend on the payment type returned for the option to be booked - note that payment types depend on the commercial agreement established by a Buyer with their Sellers."}),"\n",(0,o.jsx)(n.h3,{id:"how-can-i-add-the-payment-details-to-my-book-request",children:"How can I add the payment details to my Book request?"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"No Credit Card Details"}),":",(0,o.jsx)(n.br,{}),"\n",'When the option to be booked was flagged as "paymentType": MERCHANT, no credit card details are required. E.g.:']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'{"query":"mutation ($bookInput: HotelBookInput!, $settings: HotelSettingsInput) {  n hotelX {  n book(input: $bookInput, settings: $settings) {  n booking {  n  t  t  t  thotel {  n  t  t  t  t  thotelCode  n  t  t  t  t}  n price {  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n markups {  n channel  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n }  n }  n status  n remarks  n reference {  n client  n supplier  n }  n holder {  n name  n surname  n }  n hotel {  n creationDate  n checkIn  n checkOut  n hotelCode  n hotelName  n boardCode  n occupancies {  n id  n paxes {  n age  n }  n }  n rooms {  n code  n description  n occupancyRefId  n price {  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n markups {  n channel  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n }  n }  n }  n }  n }  n errors {  n code  n type  n description  n }  n warnings {  n code  n type  n description  n }  n }  n }  n}  n","variables":{"bookInput":{"optionRefId":"","clientReference":"","deltaPrice":{"amount":0,"percent":0,"applyBoth":true},"holder":{"name":"Test TGX","surname":"Test TGX"},"rooms":[{"occupancyRefId":1,"paxes":[{"name":"Test1","surname":"Test1","age":36},{"name":"Test2","surname":"Test2","age":36}]}]},"settings":{"client":"","testMode":true,"context":"","auditTransactions":true}}}\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Credit Card Details"}),":",(0,o.jsx)(n.br,{}),"\n","When the option to be booked was flagged with any of the following payment types (DIRECT, CARD_BOOKING, CARD_CHECK_IN)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:' {"query":"mutation ($bookInput: HotelBookInput!, $settings: HotelSettingsInput) {  n hotelX {  n book(input: $bookInput, settings: $settings) {  n  t  t  tauditData {  n  t  t  t  ttransactions {  n  t  t  t  t  trequest  n  t  t  t  t  tresponse  n  t  t  t  t}  n  t  t  t  ttimeStamp  n  t  t  t}  n booking {  n price {  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n markups {  n channel  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n }  n }  n status  n remarks  n reference {  n client  n supplier  n }  n holder {  n name  n surname  n }  n hotel {  n creationDate  n checkIn  n checkOut  n hotelCode  n hotelName  n boardCode  n occupancies {  n id  n paxes {  n age  n }  n }  n rooms {  n code  n description  n occupancyRefId  n price {  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n markups {  n channel  n currency  n binding  n net  n gross  n exchange {  n currency  n rate  n }  n }  n }  n }  n }  n }  n errors {  n code  n type  n description  n }  n warnings {  n code  n type  n description  n }  n }  n }  n}  n","variables":{"bookInput":{"optionRefId":"","clientReference":"","remarks":"","paymentCard":{"type":"","holder":{"name":"Test1","surname":"Test1"},"number":"","CVC":"","expire":{"month":3,"year":25}},"deltaPrice":{"amount":10,"percent":10,"applyBoth":true},"holder":{"name":"Test KL","surname":"Test KL"},"rooms":[{"occupancyRefId":1,"paxes":[{"name":"Test1","surname":"Test1","age":30},{"name":"Test1","surname":"Test1","age":30}]}]},"settings":{"client":"","testMode":true,"context":"","auditTransactions":true}}}\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Don't forget to check our ",(0,o.jsx)(n.a,{href:"/kb/faqs/faqs-price/payment-types-at-tgx",children:"article"})," on Payment Types at TravelgateX!\ud83d\ude80"]})})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},44808:(e,n,t)=>{var o=t(11504),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,a={},d=null,c=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,o)&&!l.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:r,type:e,key:d,ref:c,props:a,_owner:i.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>s});var o=t(11504);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);