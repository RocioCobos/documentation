/*! For license information please see e66068b2.1949b3ac.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5040],{82248:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var o=n(17624),i=n(4552);const s="mutation (\n\t$input: HotelOneStepBookInput!\n\t$settings: HotelSettingsInput!\n\t$filter: HotelFilterInput!\n) {\n\thotelX {\n\t\toneStepBook(input: $input, settings: $settings, filter: $filter) {\n\t\t\tbooking {\n\t\t\t\tstatus\n\t\t\t\treference {\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\tbookingID\n\t\t\t\t}\n\t\t\t\tholder {\n\t\t\t\t\tname\n\t\t\t\t\tsurname\n\t\t\t\t}\n\t\t\t\thotel {\n\t\t\t\t\tbookingDate\n\t\t\t\t\tstart\n\t\t\t\t\tend\n\t\t\t\t\thotelCode\n\t\t\t\t\thotelName\n\t\t\t\t\tboardCode\n\t\t\t\t\toccupancies {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpaxes {\n\t\t\t\t\t\t\tage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\trooms {\n\t\t\t\t\t\toccupancyRefId\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\tbinding\n\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\tgross\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\tdeadline\n\t\t\t\t\t\tisCalculatedDeadline\n\t\t\t\t\t\thoursBefore\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tremarks\n\t\t\t}\n\n\t\t\tadviseMessage {\n\t\t\t\tcode\n\t\t\t\tdescription\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"input": {\n\t\t"clientReference": "test_0123456789",\n\t\t"language": "es",\n\t\t"market": "ES",\n\t\t"nationality": "ES",\n\t\t"checkIn": "2024-10-28",\n\t\t"checkOut": "2024-10-29",\n\t\t"hotel": "1",\n\t\t"board": "1",\n\t\t"price": {\n\t\t\t"currency": "EUR",\n\t\t\t"binding": false,\n\t\t\t"net": 146,\n\t\t\t"gross": 146\n\t\t},\n\t\t"ratePlan": "BAR",\n\t\t"rateRulesExtended": [\n\t\t\t{\n\t\t\t\t"type": "PACKAGE"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "NON_REFUNDABLE"\n\t\t\t}\n\t\t],\n\t\t"payment": {\n\t\t\t"type": "MERCHANT"\n\t\t},\n\t\t"holder": {\n\t\t\t"title": "MISS",\n\t\t\t"name": "Jane",\n\t\t\t"surname": "Doe"\n\t\t},\n\t\t"rooms": {\n\t\t\t"occupancyRefId": 1,\n\t\t\t"code": "2269",\n\t\t\t"paxes": [\n\t\t\t\t{\n\t\t\t\t\t"title": "MISS",\n\t\t\t\t\t"name": "Jane",\n\t\t\t\t\t"surname": "Doe",\n\t\t\t\t\t"age": 30\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"title": "MISS",\n\t\t\t\t\t"name": "Jane",\n\t\t\t\t\t"surname": "Doe",\n\t\t\t\t\t"age": 30\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t"cancelPolicy": {\n\t\t\t"refundable": false\n\t\t}\n\t},\n\t"settings": {\n\t\t"testMode": true,\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"timeout": 180000\n\t},\n\t"filter": {\n\t\t"access": "2",\n\t\t"excludeComparisonFields": "SURCHARGES"\n\t}\n}',l={sidebar_position:4},a="One Step Book",c={id:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook",title:"One Step Book",description:"The One Step Book operation requests a booking confirmation for the specified option criteria. Our system will internally perform the search and quote steps. Confirmation will only be applied if the price of the option is the same or lower than the one specified in the input request.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"One Step Quote",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepquote"},next:{title:"Quickstart",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/quickstart"}},d={},h=[{value:"Book Inputs",id:"book-inputs",level:2},{value:"1. Input",id:"1-input",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Book Response",id:"book-response",level:2},{value:"Book Status",id:"book-status",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}];function u(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...t.components},{CautionSettingsHotelX:n,Details:l,GraphqlSample:a}=e;return n||m("CautionSettingsHotelX",!0),l||m("Details",!0),a||m("GraphqlSample",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"one-step-book",children:"One Step Book"}),"\n",(0,o.jsx)(e.p,{children:"The One Step Book operation requests a booking confirmation for the specified option criteria. Our system will internally perform the search and quote steps. Confirmation will only be applied if the price of the option is the same or lower than the one specified in the input request."}),"\n",(0,o.jsx)(e.p,{children:"It provides a concise summary of the option, along with the reservation status. Please note that the returned information may vary depending on the Seller. The returned fields include:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"holder"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"hotel"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"price"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"cancelPolicy"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"bookingID"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"status"})," (Make sure you add this field to your query in order to receive the reservation status in the one step book response.)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"clientReference"})," (The booking locator in your system - alphanumerical value.)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"supplierReference"})," (Make sure you add this field to your query in order to receive the supplier locator in the one step book response.)"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"book-inputs",children:"Book Inputs"}),"\n",(0,o.jsxs)(e.p,{children:["This mutation offers versatility in book options, with certain fields marked as mandatory (",(0,o.jsx)(e.code,{children:"clientReference"}),", ",(0,o.jsx)(e.code,{children:"holder"})," etc.) and others as optional (",(0,o.jsx)(e.code,{children:"language"}),", ",(0,o.jsx)(e.code,{children:"deltaPrice"}),", ",(0,o.jsx)(e.code,{children:"paymentCard"})," etc.)."]}),"\n",(0,o.jsx)(e.p,{children:"When creating your book mutation, you have three different inputs to fill based on your specific needs:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Input"}),"\n",(0,o.jsx)(e.li,{children:"Settings"}),"\n",(0,o.jsx)(e.li,{children:"Filter"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-graphql",children:"mutation {\n    hotelX {\n    book\n      input: {}\n      settings: {}\n\t  filter: {}\n\t}\n}\n"})}),"\n",(0,o.jsx)(n,{}),"\n",(0,o.jsx)(e.h3,{id:"1-input",children:"1. Input"}),"\n",(0,o.jsxs)(e.p,{children:["To specify your one step book input you need to use the input ",(0,o.jsx)(e.code,{children:"HotelOneStepBookInput"})," in your mutation variables:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'{\n\t"input": {\n\t\t"clientReference": "test_0123456789",\n\t\t"language": "es",\n\t\t"market": "ES",\n\t\t"nationality": "ES",\n\t\t"checkIn": "2024-10-28",\n\t\t"checkOut": "2024-10-29",\n\t\t"hotel": "1",\n\t\t"board": "1",\n\t\t"price": {\n\t\t\t"currency": "EUR",\n\t\t\t"binding": false,\n\t\t\t"net": 146,\n\t\t\t"gross": 146\n\t\t},\n\t\t"ratePlan": "BAR",\n\t\t"rateRulesExtended": [\n\t\t\t{\n\t\t\t\t"type": "PACKAGE"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "NON_REFUNDABLE"\n\t\t\t}\n\t\t],\n\t\t"payment": {\n\t\t\t"type": "MERCHANT"\n\t\t},\n\t\t"holder": {\n\t\t\t"title": "MISS",\n\t\t\t"name": "Jane",\n\t\t\t"surname": "Doe"\n\t\t},\n\t\t"rooms": {\n\t\t\t"occupancyRefId": 1,\n\t\t\t"code": "2269",\n\t\t\t"paxes": [\n\t\t\t\t{\n\t\t\t\t\t"title": "MISS",\n\t\t\t\t\t"name": "Jane",\n\t\t\t\t\t"surname": "Doe",\n\t\t\t\t\t"age": 30\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"title": "MISS",\n\t\t\t\t\t"name": "Jane",\n\t\t\t\t\t"surname": "Doe",\n\t\t\t\t\t"age": 30\n\t\t\t\t}\n\t\t\t]\n\t\t},\n\t\t"cancelPolicy": {\n\t\t\t"refundable": false\n\t\t}\n\t}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Mandatory input:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"clientReference"})," (Booking ID in client's system.)"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"holder"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"rooms"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"checkIn"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"checkOut"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"hotel"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"board"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"price"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"cancelPolicy"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"payment"})," (If the payment is done by credit card, it's mandatory to specify the payment type and the credit card information.)"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Optional input:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"language"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"deltaPrice"})," (Indicates price variation permitted by the Buyer.)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"remarks"})," (Any customer comments for the supplier to consider.)"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"nationality"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"market"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"ratePlan"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"rateRulesExtended"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"surcharges"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"supplements"})}),"\n"]}),"\n",(0,o.jsx)(e.admonition,{title:"Key Recommendations",type:"tip",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Customize the ",(0,o.jsx)(e.code,{children:"timeout"})," according to your needs, taking into consideration ",(0,o.jsx)(e.strong,{children:"the maximum values in Book is 180,000ms."})]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Consider that the ",(0,o.jsx)(e.code,{children:"deltaPrice"})," sets the price tolerance between Quote and Book. For instance, if the Quote stage displays a price of 100\u20ac and the ",(0,o.jsx)(e.code,{children:"deltaPrice"})," is 5, a change up to 105\u20ac will still secure a confirmed booking."]}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["If the option or rate you want to book has a payment type such as DIRECT, CARD_BOOKING, or CARD_CHECK_IN, it is mandatory to provide payment card information when making the booking. This should be done using the ",(0,o.jsx)(e.code,{children:"PaymentCardInput"})," in the book mutation."]})}),"\n",(0,o.jsx)(e.h3,{id:"2-settings",children:"2. Settings"}),"\n",(0,o.jsx)(e.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,o.jsxs)(e.p,{children:["To specify your quote settings you need to use the input ",(0,o.jsx)(e.code,{children:"HotelSettingsInput"})," in your query variables:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'{\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 180000\n\t}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Mandatory Settings:"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"client"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"context"})," (You have the flexibility to choose between using the supplier's context or your own, depending on which codes you want to see in the response. If you prefer to receive responses with your custom codes, please ensure that your context code is linked to the mapping files that you've previously uploaded to your FTP account.)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"timeout"})," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded.)"]}),"\n"]}),"\n",(0,o.jsx)(e.admonition,{title:"Key Recommendations",type:"tip",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Customize the ",(0,o.jsx)(e.code,{children:"timeout"})," according to your needs, taking into consideration ",(0,o.jsx)(e.strong,{children:"the maximum values in Book is 180,000ms"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Set the ",(0,o.jsx)(e.code,{children:"auditTransaction"}),' to "true" in Book when investigating errors.']}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(e.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,o.jsx)(a,{query:s,variables:r}),"\n",(0,o.jsx)(e.h2,{id:"book-response",children:"Book Response"}),"\n",(0,o.jsx)(e.h3,{id:"book-status",children:"Book Status"}),"\n",(0,o.jsx)(e.p,{children:"Once a Book (Reservation) method is run, our API response will provide its book status. This status represents the current status of the reservation and can be categorized into four possible values:"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Status"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"OK"}),(0,o.jsx)(e.td,{children:"The reservation was successfully completed without any issues."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"ON_REQUEST"}),(0,o.jsxs)(e.td,{children:["Please note that a Book status may change over time: you may receive an ON_REQUEST status in Book response, and after running a ",(0,o.jsx)(e.a,{href:"../booking-management/booking-read",children:"Booking Query"})," some seconds later the status may have already changed to OK."]})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"UNKNOWN"}),(0,o.jsx)(e.td,{children:"The reservation process through Travelgate was completed but due to a supplier error or a timeout, the reservation status is unknown (our system was unable to confirm if the booking has been confirmed or not the on Seller's system). It is the Buyer\u2019s responsibility to check if the booking is OK."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"PENDING_COMMIT"}),(0,o.jsx)(e.td,{children:"The payment has been confirmed on the provider\u2019s side, but is necessary to make a commit in order to confirm the reservation."})]})]})]}),"\n",(0,o.jsx)(e.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)("summary",{children:"What should I do if I receive both an OK status and an error in the same Book response?"}),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{children:["If you receive an error and a booking status OK in the Book response, the reservation status prevails over the error.\nAlthough you may also run a ",(0,o.jsx)("a",{href:"../booking-management/booking-read",children:"Booking Query"})," in order to check the status of a reservation, please note that you should always contact the Seller in order to check the actual status of a booking in those cases you receive a booking status different than OK or no response at all."]})})]}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)("summary",{children:"What is the DeltaPrice? Why should I use it?"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{children:"The Delta Price indicates the price variation permitted by the Buyer (amount or percentage), so that an error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price returned in Quote).\nThis field is implemented if it\u2019s native to the Seller or if another Search/Quote request needs to be done in Book. Please note DeltaPrice should be implemented by a Seller in order to be available to a Buyer."}),(0,o.jsx)("br",{}),(0,o.jsxs)(l,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(e.p,{children:'What does DeltaPrice "applyBoth" mean?'})}),(0,o.jsx)("div",{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"If the value is 'false' it indicates that one of the conditions (amount or percentage) has to meet the DeltaPrice criteria before reservation."}),(0,o.jsx)("li",{children:"If the value is 'true' it indicates that the new price cannot exceed the amount and percentage indicated by the Buyer."})]})})]})]})]}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)("summary",{children:'Why do I receive a status "ON_REQUEST" and a holder name "test" in my reservations the test environment?'}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{children:'In the test environment, it is common for some Sellers to consistently return an ON_REQUEST status. Furthermore, as a standard practice in the test environment, we automatically replace the holder and passenger names with "test".'})})]}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)("summary",{children:"Will the currency in Book be the same as the currency in Quote?"}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{children:"The currency used for the transaction will remain the same throughout the entire Booking Flow, including cancellation policies."})})]}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)("summary",{children:"Do I have to provide real names and ages for all the passengers?"}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{children:"No, you are not required to provide real ages and names for all passengers. You can use default values for each age group and name. The only information that should be real is the holder's information."})})]}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)("summary",{children:"How do I define the total number of rooms in my Book request?"}),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(e.p,{children:"To define the number of rooms in your reservation, you need to utilize the occupancyRefId previously returned i\nn Search response.For instance, for a room of two adults:"}),(0,o.jsx)("p",{children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'"rooms": [\n\t{\n\t\t"occupancyRefId": 1,\n\t\t"paxes": [\n\t\t\t{\n\t\t\t\t"name": "TestName",\n\t\t\t\t"surname": "Surname",\n\t\t\t\t"age": 30\n\t\t\t},\n\t\t\t{\n\t\t\t\t"name": "TestName",\n\t\t\t\t"surname": "Surname",\n\t\t\t\t"age": 30\n\t\t\t}\n\t\t]\n\t}\n]\n'})})})]})})]}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)("summary",{children:"What payment details should I add to my Book request?"}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{children:"The payment type and details to be added in your Book request depend on the payment type returned for the option to be booked, note that payment types depend on the commercial agreement established by a Buyer with their Sellers."})})]}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)("summary",{children:"Where can I get the Hotel Confirmation Number (HCN)?"}),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(e.p,{children:"Once a booking has been successfully confirmed in Travelgate you may retrieve 2 different locators\nfrom its logs:"}),(0,o.jsx)("br",{}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"The Buyer's locator (client reference)."}),(0,o.jsx)("li",{children:"The Seller's locator (provider reference)."})]}),(0,o.jsx)(e.p,{children:"The Seller may also provide a third type of locator, issued by the hotel when it confirms the booking.\nThis is known as the Hotel Confirmation Number (HCN) or Hotel Reference Booking (HRB). Please note we are\nonly able to provide this code if the Seller returns it in their response."})]})})]})]})}function p(t={}){const{wrapper:e}={...(0,i.M)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}function m(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},44808:(t,e,n)=>{var o=n(11504),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,n){var o,s={},c=null,d=null;for(o in void 0!==n&&(c=""+n),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(d=e.ref),e)r.call(e,o)&&!a.hasOwnProperty(o)&&(s[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps)void 0===s[o]&&(s[o]=e[o]);return{$$typeof:i,type:t,key:c,ref:d,props:s,_owner:l.current}}e.Fragment=s,e.jsx=c,e.jsxs=c},17624:(t,e,n)=>{t.exports=n(44808)},4552:(t,e,n)=>{n.d(e,{I:()=>l,M:()=>r});var o=n(11504);const i={},s=o.createContext(i);function r(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);