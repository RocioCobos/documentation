"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90892],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=u(n),k=o,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||l;return n?a.createElement(m,r(r({ref:e},d),{},{components:n})):a.createElement(m,r({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,r=new Array(l);r[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68703:(t,e,n)=>{n.d(e,{a:()=>a,q:()=>o});const a="mutation ($bookInput: HotelBookInput!, $settings: HotelSettingsInput) {\n\thotelX {\n\t\tbook(input: $bookInput, settings: $settings) {\n\t\t\terrors {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\twarnings {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\n\t\t\tbooking {\n\t\t\t\tstatus\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t\texchange {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\trate\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treference {\n\t\t\t\t\tbookingID\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\thotel\n\t\t\t\t}\n\t\t\t\tholder {\n\t\t\t\t\tname\n\t\t\t\t\tsurname\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\thoursBefore\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tremarks\n\t\t\t\thotel {\n\t\t\t\t\thotelCode\n\t\t\t\t\thotelName\n\t\t\t\t\tbookingDate\n\t\t\t\t\tstart\n\t\t\t\t\tend\n\t\t\t\t\tboardCode\n\t\t\t\t\toccupancies {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpaxes {\n\t\t\t\t\t\t\tage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\trooms {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\toccupancyRefId\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\tbinding\n\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\tgross\n\t\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\trate\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",o='{\n\t"bookInput": {\n\t\t"optionRefId": "11!11?1$241028?241029?1?1?0?ES?ES?es?EUR?0?2?1?1?1?0?15091142?BAR[%@BAR?146.0$0$false$EUR$$0$?1|30#30|1|2024-10-28|1|4132467|4132468|1|11|0?2269!2269?30$30??Double Standard?1??After$146.0!Before$146.0!ExpireDate$29/10/2024!mercado$ES!tgx_sess$f6152cba-f792-4e81-a2c1-e73ca63ecd02?OK?Sith?0?",\n\t\t"clientReference": "test_0123456789",\n\t\t"deltaPrice": {\n\t\t\t"amount": 10,\n\t\t\t"percent": 10,\n\t\t\t"applyBoth": true\n\t\t},\n\t\t"holder": {\n\t\t\t"name": "Jane",\n\t\t\t"surname": "Doe"\n\t\t},\n\t\t"remarks": "This is just a test booking! Feel free to include any extra information in the remarks section that you\'d like the supplier to know.",\n\t\t"rooms": {\n\t\t\t"occupancyRefId": 1,\n\t\t\t"paxes": [\n\t\t\t\t{\n\t\t\t\t\t"name": "Jane",\n\t\t\t\t\t"surname": "Doe",\n\t\t\t\t\t"age": 30\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"name": "John",\n\t\t\t\t\t"surname": "Smith",\n\t\t\t\t\t"age": 30\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 60000\n\t}\n}'},51387:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),l=n(68703);const r={sidebar_position:4},i="Book",s={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book",title:"Book",description:"The Book operation requests a booking confirmation for the specified optionId obtained from the Quote. It provides a concise summary of the option, along with the reservation status. Please note that the returned information may vary depending on the Seller. The returned fields include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quote",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote"},next:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/overview"}},u={},d=[{value:"Inputs",id:"inputs",level:2},{value:"1. Input",id:"1-input",level:3},{value:"Payment Card",id:"payment-card",level:4},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Response",id:"response",level:2},{value:"Book Status",id:"book-status",level:3},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2}],p=(c="GraphqlSample",function(t){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)});var c;const k={toc:d},m="wrapper";function h(t){let{components:e,...n}=t;return(0,o.kt)(m,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"book"},"Book"),(0,o.kt)("p",null,"The Book operation requests a booking confirmation for the specified optionId obtained from the Quote. It provides a concise summary of the option, along with the reservation status. Please note that the returned information may vary depending on the Seller. The returned fields include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"holder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hotel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"price")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cancelPolicy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookingID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status")," (Make sure you add this field to your Query in order to receive the reservation status in BookRS)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clientReference")," (The booking locator in your system (alphanumerical value))"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"supplierReference")," (Make sure you add this field to your Query in order to receive the provider locator in BookRS)")),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,"This mutation offers versatility in book options, with certain fields marked as mandatory (optionRefId, clientReference, holder etc.) and others as optional (language, delta price, payment card etc.). This flexibility empowers you to create a personalized Book Multation, tailoring the requested fields to your specific needs. "),(0,o.kt)("p",null,"When creating your book mutation, you have two different inputs to fill based on your specific needs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Input"),(0,o.kt)("li",{parentName:"ol"},"Settings")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n    hotelX {\n    book\n      input: {}\n      settings: {}\n    }\n}\n")),(0,o.kt)("h3",{id:"1-input"},"1. Input"),(0,o.kt)("p",null,"To specify your book input you need to use the input ",(0,o.kt)("inlineCode",{parentName:"p"},"HotelBookInput")," in your mutation variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "bookInput": {\n        "optionRefId": "11!11?1$241028?241029?1?1?0?ES?ES?es?EUR?0?2?1?1?1?0?15091142?BAR[%@BAR?146.0$0$false$EUR$$0$?1|30#30|1|2024-10-28|1|4132467|4132468|1|11|0?2269!2269?30$30??Double Standard?1??After$146.0!Before$146.0!ExpireDate$29/10/2024!mercado$ES!tgx_sess$f6152cba-f792-4e81-a2c1-e73ca63ecd02?OK?Sith?0?",\n        "clientReference": "test_0123456789",\n        "deltaPrice": {\n            "amount": 10,\n            "percent": 10,\n            "applyBoth": true\n        },\n        "holder": {\n            "name": "Jane",\n            "surname": "Doe"\n        },\n        "remarks": "This is just a test booking! Feel free to include any extra information in the remarks section that you\'d like the supplier to know.",\n        "rooms": {\n            "occupancyRefId": 1,\n            "paxes": [\n                {\n                    "name": "Jane",\n                    "surname": "Doe",\n                    "age": 30\n                },\n                {\n                    "name": "John",\n                    "surname": "Smith",\n                    "age": 30\n                }\n            ]\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mandatory input:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"optionRefId")," (identifier of the option used in Quote)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clientReference")," (booking ID in client's system)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"holder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rooms"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional input:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"language")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deltaPrice")," (indicates price variation permitted by the client)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paymentCard")," (if the payment is done by credit card, it's mandatory to specify the payment type and the credit card information)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remarks")," (any customer comments for the supplier to consider)")),(0,o.kt)("admonition",{title:"Key Recommendations",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Consider that the ",(0,o.kt)("inlineCode",{parentName:"p"},"deltaPrice")," sets the price tolerance between Quote and Book. For instance, if the Quote stage displays a price of 100 and the ",(0,o.kt)("inlineCode",{parentName:"p"},"deltaPrice")," is 5, a change up to 105 will still secure a confirmed booking.")),(0,o.kt)("h4",{id:"payment-card"},"Payment Card"),(0,o.kt)("p",null,"If the option or rate you want to book has a payment type such as DIRECT, CARD_BOOKING, or CARD_CHECK_IN, it is mandatory to provide payment card information when making the booking. This should be done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"PaymentCardInput")," in the book mutation."),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"isVCC"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualCreditCard")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"threeDomainSecurity"),", are all optionals."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n            "cardType": "VI",\n            "holder": {\n                "name": "test_name",\n                "surname": "test_surname"\n            },\n            "number": "4874495143042809",\n            "CVC": "330",\n            "expire": {\n                "month": 9,\n                "year": 2028\n            },\n            "isVCC": true,\n            "virtualCreditCard": {\n                "activationDate": "2020-10-02",\n                "deactivationDate": "2021-01-02",\n                "currentBalance": 50.58,\n                "currencyCode": "EUR"\n            },\n            "threeDomainSecurity": {\n                "version": "1.0.1",\n                "DSTransactionID": "transaction 1",\n                "XID": "id123456",\n                "ECI": "05",\n                "CAVV": "CAVV",\n                "payerResponse": "base64xml response",\n                "payerResponseStatus": "AUTHENTICATION_SUCCESS",\n                "cardEnrolledStatus": "CARD_ENROLLED",\n                "merchantName": "test_name",\n                "signatureStatus": "SIGNATURE_NOT_VALIDATED"\n            }\n        }\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Possible values for the threeDomainSecurity fields"),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)("b",null,"Visa, American Express, Diners Club and JCB"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"ECI Value"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"05"),(0,o.kt)("td",null,"3DS authentication was successful, transactions are secured by 3DS.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"06"),(0,o.kt)("td",null,"Authentication was attempted but was not or could not be completed; possible reasons being either the card or its Issuing Bank has yet to participate in 3DS.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"07"),(0,o.kt)("td",null,"3DS authentication is either failed or could not be attempted; possible reasons being both card and Issuing Bank are not secured by 3DS, technical errors, or improper configuration.")))),(0,o.kt)("br",null),(0,o.kt)("b",null,"Mastercard"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"ECI Value"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"00"),(0,o.kt)("td",null,"3DS authentication is either failed or could not be attempted; possible reasons being both card and Issuing Bank are not secured by 3DS, technical errors, or improper configuration.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"01"),(0,o.kt)("td",null,"3DS authentication was attempted but was not or could not be completed; possible reasons being either the card or its Issuing Bank has yet to participate in 3DS, or cardholder ran out of time to authorize.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"02"),(0,o.kt)("td",null,"3DS authentication is successful."))))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Payer response status"),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("strong",null,"Status Value")),(0,o.kt)("th",null,(0,o.kt)("strong",null,"Description")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"AUTHENTICATION_SUCCESS"),(0,o.kt)("td",null,"Successful Authentication.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"AUTHENTICATION_FAILED"),(0,o.kt)("td",null,"Failed Authentication.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"AUTHENTICATION_INCOMPLETE"),(0,o.kt)("td",null,"Unable to complete Authentication.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"TRANSACTION_ATTEMPT_SUCCESS_A"),(0,o.kt)("td",null,"Successful Attempts Transaction.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"TRANSACTION_ATTEMPT_SUCCESS_B"),(0,o.kt)("td",null,"You can proceed to authorisation using the information received.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"AUTHENTICATION_REJECTED"),(0,o.kt)("td",null,"Authentication Rejected."))))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Card enrollment status"),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("strong",null,"Status Value")),(0,o.kt)("th",null,(0,o.kt)("strong",null,"Description")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"CARD_ENROLLED"),(0,o.kt)("td",null,"Cardholder is enrolled. Bank is participating in 3-D Secure protocol and will return the ACSUrl.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"CARD_NOT_ENROLLED"),(0,o.kt)("td",null,"Cardholder Not Participating \u2013 Cardholder is not enrolled.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"CANT_AUTHENTICATE"),(0,o.kt)("td",null,"Unavailable. The DS or ACS is not available for authentication at the time of the request."))))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Signature verification status"),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("strong",null,"Status Value")),(0,o.kt)("th",null,(0,o.kt)("strong",null,"Description")))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"SIGNATURE_VALIDATED"),(0,o.kt)("td",null,"Signature of the PARes has been validated successfully.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"SIGNATURE_NOT_VALIDATED"),(0,o.kt)("td",null,"PARes could not be validated."))))))),(0,o.kt)("h3",{id:"2-settings"},"2. Settings"),(0,o.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,o.kt)("p",null,"To specify your quote settings you need to use the input ",(0,o.kt)("inlineCode",{parentName:"p"},"HotelSettingsInput")," in your query variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings": {\n        "client": "client_demo",\n        "context": "HOTELTEST",\n        "testMode": true,\n        "auditTransactions": false,\n        "timeout": 60000\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mandatory Settings:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," (Your context code must be linked to the mapping files previously uploaded on your side to the FTP. By doing so, you will receive results from all your Sellers with your own Hotel Codes, ensuring a smooth and seamless process)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"businessRules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"language")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nationality")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"markets"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional Settings:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auditTransactions")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"suppliers")," (Each one contains its own code, settings and accesses)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"plugins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testMode")," (This flag allows only the accesses checked as test)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clientTokens")," (Used to identify the origin of the request, this is only used in plugins)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"commitRequired")," (Indicates if the book will be confirmed in 1 or 2 steps. It only should be used in Book)")),(0,o.kt)("admonition",{title:"Key Recommendations",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout")," according to your needs, taking into consideration the maximum values in Book is 180,000ms.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"auditTransaction"),' to "true" in Book when investigating errors.')))),(0,o.kt)("h3",{id:"requests-examples"},"Requests Examples"),(0,o.kt)(p,{query:l.a,variables:l.q,mdxType:"GraphqlSample"}),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("h3",{id:"book-status"},"Book Status"),(0,o.kt)("p",null,"Once a Book (Reservation) method is run, our API response will provide its book status. This status represents the current status of the reservation and can be categorized into four possible values:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OK"),(0,o.kt)("td",{parentName:"tr",align:null},"The reservation was successfully completed without any issues.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ON_REQUEST"),(0,o.kt)("td",{parentName:"tr",align:null},"Please note that a Book status may change over time: you may receive an ON_REQUEST status in Book response, and after running a Booking Query some seconds later the status may have already changed to OK.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,o.kt)("td",{parentName:"tr",align:null},"The reservation process through TravelgateX was completed but due to a supplier error or a timeout, the reservation status is unknown (our system was unable to confirm if the booking has been confirmed or not the on Seller's system). It is the Buyer\u2019s responsibility to check if the booking is OK.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PENDING_COMMIT"),(0,o.kt)("td",{parentName:"tr",align:null},"The payment has been confirmed on the provider\u2019s side, but is necessary to make a commit in order to confirm the reservation.")))),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What should I do if I receive both an OK status and an error in the same Book response?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"If you receive an error and a booking status OK in the Book response, the reservation status prevails over the error. Although you may also run a Booking Query in order to check the status of a reservation, please note that you should always contact the Seller in order to check the actual status of a booking in those cases you receive a booking status different than OK or no response at all."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What is the DeltaPrice? Why should I use it?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"The Delta Price indicates the price variation permitted by the Buyer (amount or percentage), so that an error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue (price is lower or equal to the price returned in Quote). This field is implemented if it\u2019s native to the Seller or if another Search/Quote request needs to be done in Book. Please note DeltaPrice should be implemented by a Seller in order to be available to a Buyer."),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,'What does DeltaPrice "applyBoth" mean?'),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,"If the value is 'false' it indicates that one of the conditions (amount or percentage) has to meet the DeltaPrice criteria before reservation."),(0,o.kt)("li",null,"If the value is 'true' it indicates that the new price cannot exceed the amount and percentage indicated by the Buyer.")))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,'Why do I receive a status "ON_REQUEST" and a holder name "test" in my reservations the test environment?'),(0,o.kt)("div",null,(0,o.kt)("div",null,'In the test environment, it is common for some Sellers to consistently return an ON_REQUEST status. Furthermore, as a standard practice in the test environment, we automatically replace the holder and passenger names with "test".'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Will the currency in Book be the same as the currency in Quote?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"The currency used for the transaction will remain the same throughout the entire Booking Flow, including cancellation policies."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Do I have to provide real names and ages for all the passengers?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"No, you are not required to provide real ages and names for all passengers. You can use default values for each age group and name. The only information that should be real is the holder's information."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I define the total number of rooms in my Book request?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"To define the number of rooms in your reservation, you need to utilize the occupancyRefId previously returned in Search response.For instance, for a room of two adults:",(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"rooms": [\n    {\n        "occupancyRefId": 1,\n        "paxes": [\n            {\n                "name": "TestName",\n                "surname": "Surname",\n                "age": 30\n            },\n            {\n                "name": "TestName",\n                "surname": "Surname",\n                "age": 30\n            }\n        ]\n    }\n]\n')))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What payment details should I add to my Book request?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"The payment type and details to be added in your Book request depend on the payment type returned for the option to be booked, note that payment types depend on the commercial agreement established by a Buyer with their Sellers."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Where can I get the Hotel Confirmation Number (HCN)?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Once a booking has been successfully confirmed in TravelgateX you may retrieve 2 different locators from its logs:",(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",null,"The Buyer's locator (client reference)."),(0,o.kt)("li",null,"The Seller's locator (provider reference).")),"The Seller may also provide a third type of locator, issued by the hotel when it confirms the booking. This is known as the Hotel Confirmation Number (HCN) or Hotel Reference Booking (HRB).Please note we are only able to provide this code if the Seller returns it in their response."))))}h.isMDXComponent=!0}}]);