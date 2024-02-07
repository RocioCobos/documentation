/*! For license information please see 6d7359f5.9fe2db06.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43872],{60536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var i=n(17624),o=n(4552);const s="query (\n\t$criteriaBookingRead: HotelCriteriaBookingInput!\n\t$settings: HotelSettingsInput!\n) {\n\thotelX {\n\t\tbooking(criteria: $criteriaBookingRead, settings: $settings) {\n\t\t\terrors {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\twarnings {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\tbookings {\n\t\t\t\tstatus\n\t\t\t\treference {\n\t\t\t\t\tbookingID\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\thotel\n\t\t\t\t}\n\t\t\t\tholder {\n\t\t\t\t\tname\n\t\t\t\t\tsurname\n\t\t\t\t}\n\t\t\t\thotel {\n\t\t\t\t\tbookingDate\n\t\t\t\t\tstart\n\t\t\t\t\tend\n\t\t\t\t\thotelCode\n\t\t\t\t\thotelName\n\t\t\t\t\tboardCode\n\t\t\t\t\toccupancies {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpaxes {\n\t\t\t\t\t\t\tage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\trooms {\n\t\t\t\t\t\toccupancyRefId\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\trate\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\thoursBefore\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tremarks\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"criteriaBookingRead": {\n\t\t"bookingID": "1@1[241028[241029[231010[1[en[EUR[2[test_01234567890[2636944"\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 60000\n\t}\n}',c='{\n\t"criteriaBookingRead": {\n\t\t"accessCode": "2",\n\t\t"typeSearch": "REFERENCES",\n\t\t"references": {\n\t\t\t"hotelCode": "1",\n\t\t\t"currency": "EUR",\n\t\t\t"references": [\n\t\t\t\t{\n\t\t\t\t\t"client": "test_01234567890"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 18000\n\t}\n}',a='{\n\t"criteriaBookingRead": {\n\t\t"accessCode": "2",\n\t\t"typeSearch": "DATES",\n\t\t"dates": {\n\t\t\t"dateType": "ARRIVAL",\n\t\t\t"start": "2024-10-25",\n\t\t\t"end": "2024-10-30"\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 180000\n\t}\n}',l='{\n\t"criteriaBookingRead": {\n\t\t"accessCode": "2",\n\t\t"typeSearch": "DATES",\n\t\t"dates": {\n\t\t\t"dateType": "BOOKING",\n\t\t\t"start": "2023-10-01",\n\t\t\t"end": "2023-10-10"\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 180000\n\t}\n}',d={sidebar_position:2},h="Booking Read and List",u={id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",title:"Booking Read and List",description:"The Booking query allows you to retrieve a specific booking with all its details using the booking ID or reference locator. You can also obtain a list of bookings that were made within a specific arrival date range or a specific booking date range. The returned fields for each booking in the list include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/booking-read.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/overview"},next:{title:"Cancel",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel"}},p={},g=[{value:"Booking Read and List Inputs",id:"booking-read-and-list-inputs",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Booking read with the <code>bookingID</code> from the book response",id:"booking-read-with-the-bookingid-from-the-book-response",level:4},{value:"Booking read using the <code>accessCode</code>, <code>hotelCode</code>, <code>currency</code> and <code>reference</code> from the book response",id:"booking-read-using-the-accesscode-hotelcode-currency-and-reference-from-the-book-response",level:4},{value:"Booking list by arrival date range",id:"booking-list-by-arrival-date-range",level:4},{value:"Booking list by booking date range",id:"booking-list-by-booking-date-range",level:4},{value:"Booking Read and List Response",id:"booking-read-and-list-response",level:2}];function x(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components},{CautionSettingsHotelX:n,GraphqlSample:d}=t;return n||j("CautionSettingsHotelX",!0),d||j("GraphqlSample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"booking-read-and-list",children:"Booking Read and List"}),"\n",(0,i.jsx)(t.p,{children:"The Booking query allows you to retrieve a specific booking with all its details using the booking ID or reference locator. You can also obtain a list of bookings that were made within a specific arrival date range or a specific booking date range. The returned fields for each booking in the list include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"holder"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"hotel"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"price"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"remarks"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"status"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"booking-read-and-list-inputs",children:"Booking Read and List Inputs"}),"\n",(0,i.jsx)(t.p,{children:"When creating your booking query, you have two different inputs to fill based on your specific needs:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Criteria"}),"\n",(0,i.jsx)(t.li,{children:"Settings"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"query {\n    hotelX {\n    booking\n      criteria: {}\n      settings: {}\n\t}\n}\n"})}),"\n",(0,i.jsx)(n,{}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:"Remember that you can choose the information you want displayed:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"reference"}),": To display client or supplier booking reference"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"status"}),": To display the booking status"]}),"\n"]})]}),"\n",(0,i.jsx)(t.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,i.jsxs)(t.p,{children:["This query offers versatility in booking search, with all fields marked as optional (",(0,i.jsx)(t.code,{children:"accessCode"}),", ",(0,i.jsx)(t.code,{children:"typeSearch"}),", ",(0,i.jsx)(t.code,{children:"language"})," etc.). This flexibility empowers you to create a personalized Booking List Query, tailoring the requested fields to your specific needs."]}),"\n",(0,i.jsxs)(t.p,{children:["To specify your booking criteria you need to use the input ",(0,i.jsx)(t.code,{children:"HotelCriteriaBookingInput"})," in your query variables."]}),"\n",(0,i.jsxs)(t.p,{children:["Booking read using the ",(0,i.jsx)(t.code,{children:"bookingID"})," input:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'{\n    "criteria" : {\n        "bookingID" : "1@1[241028[241029[230918[1[es[EUR[2[test_0123456789[2596391"\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Booking read using the ",(0,i.jsx)(t.code,{children:"accessCode"}),", ",(0,i.jsx)(t.code,{children:"hotelCode"})," and ",(0,i.jsx)(t.code,{children:"references"})," inputs:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'{\n    "criteria" : {\n        "accessCode" : "2",\n        "typeSearch" : "REFERENCES",\n        "references" : {\n            "hotelCode" : "1",\n            "currency" : "EUR",\n            "references" : [\n                {\n                    "client" : "test_0123456789"\n                }\n            ]\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Booking list by dates:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'{\n    "criteria" : {\n        "accessCode" : "2",\n        "typeSearch" : "DATES",\n        "dates" : {\n            "dateType" : "ARRIVAL",\n            "start" : "2024-10-28",\n            "end" : "2024-10-28"\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Optional criteria"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"accessCode"})," (Necessary if you search by references or by dates)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"typeSearch"})," (Necessary if you search by references or by dates)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"language"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dates"})," (To receive a list of all the reservations made in a specific type frame)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bookingID"})," (To receive the details of a specific reservation)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"references"})," (To receive the details of a specific reservation)"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["Even if not all criteria are marked as mandatory, you must either use the ",(0,i.jsx)(t.code,{children:"bookingID"})," from the book response or provide the set of all other criteria, including the ",(0,i.jsx)(t.code,{children:"accessCode"}),", ",(0,i.jsx)(t.code,{children:"hotel"}),", and ",(0,i.jsx)(t.code,{children:"reference"}),", to read the reservation."]})}),"\n",(0,i.jsx)(t.h3,{id:"2-settings",children:"2. Settings"}),"\n",(0,i.jsx)(t.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,i.jsxs)(t.p,{children:["To specify your booking settings you need to use the input ",(0,i.jsx)(t.code,{children:"HotelSettingsInput"})," in your query variables:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'{\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"auditTransactions": false,\n\t\t"timeout": 60000\n\t}\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Mandatory Settings:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"client"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"context"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"timeout"})," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"businessRules"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Optional Settings:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"group"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"auditTransactions"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"suppliers"})," (Each one contains its own code, settings and accesses)"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"plugins"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"testMode"})," (This flag allows only the accesses checked as test)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"clientTokens"})," (Used to identify the origin of the request, this is only used in plugins)"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,i.jsxs)(t.h4,{id:"booking-read-with-the-bookingid-from-the-book-response",children:["Booking read with the ",(0,i.jsx)(t.code,{children:"bookingID"})," from the book response"]}),"\n",(0,i.jsx)(d,{query:s,variables:r}),"\n",(0,i.jsxs)(t.h4,{id:"booking-read-using-the-accesscode-hotelcode-currency-and-reference-from-the-book-response",children:["Booking read using the ",(0,i.jsx)(t.code,{children:"accessCode"}),", ",(0,i.jsx)(t.code,{children:"hotelCode"}),", ",(0,i.jsx)(t.code,{children:"currency"})," and ",(0,i.jsx)(t.code,{children:"reference"})," from the book response"]}),"\n",(0,i.jsx)(d,{query:s,variables:c}),"\n",(0,i.jsx)(t.h4,{id:"booking-list-by-arrival-date-range",children:"Booking list by arrival date range"}),"\n",(0,i.jsx)(d,{query:s,variables:a}),"\n",(0,i.jsx)(t.h4,{id:"booking-list-by-booking-date-range",children:"Booking list by booking date range"}),"\n",(0,i.jsx)(d,{query:s,variables:l}),"\n",(0,i.jsx)(t.h2,{id:"booking-read-and-list-response",children:"Booking Read and List Response"}),"\n",(0,i.jsx)(t.p,{children:"Keep in mind that the content of the Booking response can differ depending on the Sellers. For instance, some Sellers might provide details about the hotel or cancel policies, while others may only offer information about the status and locators/references."})]})}function b(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}function j(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44808:(e,t,n)=>{var i=n(11504),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>r});var i=n(11504);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);