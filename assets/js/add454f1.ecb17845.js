"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16266],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),h=o,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},62535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:1},i="Quickstart",s={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/quickstart",id:"apis/for-buyers/hotel-x-pull-buyers-api/quickstart",title:"Quickstart",description:"Hotel-X API is a powerful aggregation solution that allows you to get results from the largest network of Sellers in a single request. Whether it's at the hotel, room type, or rate plan level, you have the flexibility to aggregate data to meet your specific needs.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart.md",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/apis/overview"},next:{title:"Endpoint",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/endpoint"}},l={},u=[{value:"Let&#39;s get started: How to make a booking!",id:"lets-get-started-how-to-make-a-booking",level:2},{value:"Introduction and prerequisites",id:"introduction-and-prerequisites",level:3},{value:"API Endpoint",id:"api-endpoint",level:4},{value:"Request Headers",id:"request-headers",level:4},{value:"Supported Operations",id:"supported-operations",level:4},{value:"Step 1: Find available hotels based on your search criteria",id:"step-1-find-available-hotels-based-on-your-search-criteria",level:3},{value:"2. Quote your selected option",id:"2-quote-your-selected-option",level:3},{value:"3. Confirm and book the option!",id:"3-confirm-and-book-the-option",level:3},{value:"Next steps",id:"next-steps",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Hotel-X API is a powerful aggregation solution that allows you to get results from the largest network of Sellers in a single request. Whether it's at the hotel, room type, or rate plan level, you have the flexibility to aggregate data to meet your specific needs."),(0,o.kt)("p",null,"What sets Hotel-X API apart is its innovative plugin structure, which enhances connectivity and equips you with a competitive edge in your operations. This unique feature is complemented by Hotel-X's ability to provide pre-processed responses, ensuring your system tasks are efficient and hassle-free."),(0,o.kt)("p",null,"[A\xf1adir esquema]"),(0,o.kt)("p",null,"In this quickstart tutorial, you will create a basic sample booking. Along the way, you will grasp essential concepts and techniques that are foundational to using the API for various tasks, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Retrieving static information"),(0,o.kt)("li",{parentName:"ul"},"Making a booking"),(0,o.kt)("li",{parentName:"ul"},"Managing reservations")),(0,o.kt)("h2",{id:"lets-get-started-how-to-make-a-booking"},"Let's get started: How to make a booking!"),(0,o.kt)("p",null,"Hotel-X offers a powerful GraphQL-based API that simplifies the process of booking hotels and managing reservations. Whether you're a seasoned developer or just getting started, this guide will walk you through the basics of using the API to make hotel bookings."),(0,o.kt)("h3",{id:"introduction-and-prerequisites"},"Introduction and prerequisites"),(0,o.kt)("h4",{id:"api-endpoint"},"API Endpoint"),(0,o.kt)("p",null,"Hotel-X, being a GraphQL-based API, utilizes a single endpoint for all operations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"https://api.travelgatex.com\n")),(0,o.kt)("h4",{id:"request-headers"},"Request Headers"),(0,o.kt)("p",null,"To interact with the API, you'll need to include two essential request headers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gzip Compression: This header helps optimize data transfer between your application and the API.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"Accept-Encoding: gzip.\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API Key (For this basic sample booking, we provide you with a test API Key): We've provided a test API Key for this sample booking to get you started, but once you have started our Onboarding you would obtain your own API key to use in your dev andproduction environment.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"Authorization: ApiKey 8626cf56-e364-4fd1-4fe0-311e23ac6355\n")),(0,o.kt)("h4",{id:"supported-operations"},"Supported Operations"),(0,o.kt)("p",null,"Lastly, please note that the Hotel-X API supports two types of operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Query"),': which are "read-only" and used for retrieving data from our system.  You can use queries to search for hotels, check availability...')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Mutation"),": which allow for changes, additions, or deletions of data within our system. This is where you can create bookings, update reservations...")),(0,o.kt)("p",null,"But now this quickstart guide will focus on the basics of using the Hotel-X API to make hotel reservations, so let's dive in and get started!"),(0,o.kt)("h3",{id:"step-1-find-available-hotels-based-on-your-search-criteria"},"Step 1: Find available hotels based on your search criteria"),(0,o.kt)("p",null,"The Search query is where the adventure begins in our shopping journey! Our aim here is to see what's available within your specified date range and for the number of guests (pax) you have in mind, whether it's for a particular hotel or in your desired destination. This step lets you explore your options before committing to a booking. You can even spice things up by searching with one or more sellers' accesses, giving you the freedom to tailor your search. But hey, for this example, let's kick it off with a simple search for a specific hotel using a particular test Seller!"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"}," This example demonstrates the essential fields for obtaining results but keep in mind that the Hotel-X API offers a wide range of additional fields and functionalities! If you're curious and want to discover all the exciting details, check out the full ",(0,o.kt)("a",{parentName:"p",href:"#"},"search step documentation"),". Happy exploring! \ud83d\ude0a\ud83d\udd0d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n    hotelX {\n        search(\n            criteria: {\n                checkIn: "2024-10-28"\n                checkOut: "2024-10-29"\n                occupancies: [{ paxes: [{ age: 30 }, { age: 30 }] }]\n                hotels: ["1"]\n                currency: "EUR"\n                market: "ES"\n                language: "es"\n                nationality: "ES"\n            }\n            settings: {\n                client: "client_demo"\n                context: "HOTELTEST"\n                testMode: true\n                timeout: 25000\n            }\n            filterSearch: { access: { includes: ["2"] } }\n        ) {\n            context\n            errors {\n                code\n                type\n                description\n            }\n            warnings {\n                code\n                type\n                description\n            }\n            options {\n                id\n                accessCode\n                supplierCode\n                hotelCode\n                hotelName\n                boardCode\n                paymentType\n                status\n                occupancies {\n                    id\n                    paxes {\n                        age\n                    }\n                }\n                rooms {\n                    occupancyRefId\n                    code\n                    description\n                    refundable\n                    roomPrice {\n                        price {\n                            currency\n                            binding\n                            net\n                            gross\n                            exchange {\n                                currency\n                                rate\n                            }\n                        }\n                        breakdown {\n                            start\n                            end\n                            price {\n                                currency\n                                binding\n                                net\n                                gross\n                                exchange {\n                                    currency\n                                    rate\n                                }\n                                minimumSellingPrice\n                            }\n                        }\n                    }\n                    beds {\n                        type\n                        count\n                    }\n                    ratePlans {\n                        start\n                        end\n                        code\n                        name\n                    }\n                }\n                price {\n                    currency\n                    binding\n                    net\n                    gross\n                    exchange {\n                        currency\n                        rate\n                    }\n                    minimumSellingPrice\n                    markups {\n                        channel\n                        currency\n                        binding\n                        net\n                        gross\n                        exchange {\n                            currency\n                            rate\n                        }\n                        rules {\n                            id\n                            name\n                            type\n                            value\n                        }\n                    }\n                }\n                supplements {\n                    start\n                    end\n                    code\n                    name\n                    description\n                    supplementType\n                    chargeType\n                    mandatory\n                    durationType\n                    quantity\n                    unit\n                    resort {\n                        code\n                        name\n                        description\n                    }\n                    price {\n                        currency\n                        binding\n                        net\n                        gross\n                        exchange {\n                            currency\n                            rate\n                        }\n                    }\n                }\n                surcharges {\n                    code\n                    chargeType\n                    description\n                    price {\n                        currency\n                        binding\n                        net\n                        gross\n                        exchange {\n                            currency\n                            rate\n                        }\n                        markups {\n                            channel\n                            currency\n                            binding\n                            net\n                            gross\n                            exchange {\n                                currency\n                                rate\n                            }\n                        }\n                    }\n                }\n                rateRules\n                cancelPolicy {\n                    refundable\n                    cancelPenalties {\n                        deadline\n                        isCalculatedDeadline\n                        hoursBefore\n                        penaltyType\n                        currency\n                        value\n                    }\n                }\n                remarks\n            }\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"2-quote-your-selected-option"},"2. Quote your selected option"),(0,o.kt)("p",null,"Now, let's dive into the exciting part! After carefully reviewing all the options in the search results and finding the hotel that perfectly suits your journey, it's time to move forward and request a quote. This quote operation is like getting an exclusive preview before the grand booking. It provides you with up-to-the-minute pricing, a detailed breakdown of your expenses, and crucial information about cancellation policies."),(0,o.kt)("p",null,"To make this happen, you'll need to retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"optionRefId")," from the search results and use this value as the input for the Quote request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n    hotelX {\n        quote(\n            criteria: {\n                optionRefId: "13[%!03!~|3[%@241028!~|241029!~|1!~|1!~|0!~|ES!~|ES!~|es!~|EUR!~|0!~|2!~|1!~|1!~|1!~|0!~|15091141!~|BAR[%@BAR!~|146[%@0[%@false[%@EUR[%@[%@0[%@!~|1|30#30|1|2024-10-28|1|4132467|4132468|1|11|0!~|2269[%!2269!~|30[%@30!~|!~|Double Standard!~|1!~|!~|mercado[%@ES[%!ExpireDate[%@29/10/2024[%!tarifaNRF[%@true[%!RateRule[%@tarifaNoRefundablePorHabitacion!~|OK!~|Sith!~|0!~|"\n            }\n            settings: {\n                client: "client_demo"\n                context: "HOTELTEST"\n                testMode: true\n                timeout: 5000\n            }\n        ) {\n            errors {\n                code\n                type\n                description\n            }\n            warnings {\n                code\n                type\n                description\n            }\n            optionQuote {\n                optionRefId\n                status\n                price {\n                    currency\n                    binding\n                    net\n                    gross\n                    exchange {\n                        currency\n                        rate\n                    }\n                    minimumSellingPrice\n                }\n                surcharges {\n                    chargeType\n                    price {\n                        currency\n                        binding\n                        net\n                        gross\n                        exchange {\n                            currency\n                            rate\n                        }\n                        minimumSellingPrice\n                    }\n                    description\n                }\n                cancelPolicy {\n                    refundable\n                    description\n                    cancelPenalties {\n                        hoursBefore\n                        penaltyType\n                        currency\n                        value\n                    }\n                }\n                paymentType\n                cardTypes\n                remarks\n            }\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"3-confirm-and-book-the-option"},"3. Confirm and book the option!"),(0,o.kt)("p",null,"You're almost there! After securing your quote and ensuring all the details align with your travel plans, it's time to proceed with the booking. In this step, you confirm your reservation and officially lock in your stay."),(0,o.kt)("p",null,"You'll need to provide the 'optionRefId' returned in the Quote step and enter all the necessary passenger information. Upon a successful booking request, you'll receive a confirmation along with essential reservation details. Congratulations! Your hotel stay is now officially booked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n    hotelX {\n        book(\n            input: {\n                optionRefId: "11!11?1$241028?241029?1?1?0?ES?ES?es?EUR?0?2?1?1?1?0?15091142?BAR[%@BAR?146.0$0$false$EUR$$0$?1|30#30|1|2024-10-28|1|4132467|4132468|1|11|0?2269!2269?30$30??Double Standard?1??After$146.0!Before$146.0!ExpireDate$29/10/2024!mercado$ES!tgx_sess$f6152cba-f792-4e81-a2c1-e73ca63ecd02?OK?Sith?0?"\n                clientReference: "test_0123456789"\n                deltaPrice: { amount: 10, percent: 10, applyBoth: true }\n                holder: { name: "Jane", surname: "Doe" }\n                remarks: "This is just a test booking! Feel free to include any extra information in the remarks section that you\'d like the supplier to know."\n                rooms: {\n                    occupancyRefId: 1\n                    paxes: [\n                        { name: "Jane", surname: "Doe", age: 30 }\n                        { name: "John", surname: "Smith", age: 30 }\n                    ]\n                }\n            }\n            settings: {\n                client: "client_demo"\n                context: "HOTELTEST"\n                testMode: true\n                timeout: 60000\n            }\n        ) {\n            errors {\n                code\n                type\n                description\n            }\n            warnings {\n                code\n                type\n                description\n            }\n\n            booking {\n                status\n                price {\n                    currency\n                    binding\n                    net\n                    gross\n                    exchange {\n                        currency\n                        rate\n                    }\n                }\n                reference {\n                    bookingID\n                    client\n                    supplier\n                    hotel\n                }\n                holder {\n                    name\n                    surname\n                }\n                cancelPolicy {\n                    refundable\n                    cancelPenalties {\n                        hoursBefore\n                        penaltyType\n                        currency\n                        value\n                    }\n                }\n                remarks\n                hotel {\n                    hotelCode\n                    hotelName\n                    bookingDate\n                    start\n                    end\n                    boardCode\n                    occupancies {\n                        id\n                        paxes {\n                            age\n                        }\n                    }\n                    rooms {\n                        code\n                        description\n                        occupancyRefId\n                        price {\n                            currency\n                            binding\n                            net\n                            gross\n                            exchange {\n                                currency\n                                rate\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n\n')),(0,o.kt)("h3",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Congratulations on completing this quickstart tutorial! You've just learned how to create a basic sample booking. But there's more to discover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../hotel-x-pull-buyers-api/content/overview"},"Retrieve static information"),": Explore accessing static data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../hotel-x-pull-buyers-api/booking-flow/overview"},"Make a booking"),": Learn how to book with more details."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../hotel-x-pull-buyers-api/booking-management/overview"},"Manage reservations"),": Get the hang of reservation management.")),(0,o.kt)("p",null,"Our documentation has additional useful fields and functionalities for your business. To find out more, browse through our documentation to unlock the potential of these methods. Enjoy your journey!"))}d.isMDXComponent=!0}}]);