/*! For license information please see 72158451.5c987a1d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3068],{93674:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var i=n(74848),r=n(28453),o=n(90904),s=n(50868),a=n(66716);const l={sidebar_position:1},c="Quickstart",u={id:"apis/for-buyers/hotel-x-pull-buyers-api/quickstart",title:"Quickstart",description:"Introduction",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apis/overview"},next:{title:"Endpoint",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/making-requests/endpoint"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Let&#39;s Get Started: How to Make a Booking!",id:"lets-get-started-how-to-make-a-booking",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Request Headers",id:"request-headers",level:4},{value:"Supported Operations",id:"supported-operations",level:4},{value:"1. Find available hotels based on your search criteria",id:"1-find-available-hotels-based-on-your-search-criteria",level:3},{value:"2. Quote your selected option",id:"2-quote-your-selected-option",level:3},{value:"3. Confirm and book the option!",id:"3-confirm-and-book-the-option",level:3},{value:"Next Steps",id:"next-steps",level:2}];function p(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...t.components},{GraphqlSample:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(e.p,{children:"Hotel-X API is a powerful aggregation solution that allows you to get results from the largest network of Sellers in a single request. Whether it's at the hotel, room type, or rate plan level, you have the flexibility to aggregate data to meet your specific needs."}),"\n",(0,i.jsx)(e.p,{children:"What sets Hotel-X API apart is its innovative plugin structure, which enhances connectivity and equips you with a competitive edge in your operations. This unique feature is complemented by Hotel-X's ability to provide pre-processed responses, ensuring your system tasks are efficient and hassle-free."}),"\n",(0,i.jsxs)(e.p,{children:["\xa0\n",(0,i.jsx)(e.img,{src:"https://storage.travelgate.com/docs/hotel-x_overview.svg",alt:"Hotel-X Overview"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Using the Hotel-X API, you will be able to access static information, make bookings, and manage reservations."})," In this quickstart tutorial, you will learn how to create a simple sample booking."]}),"\n",(0,i.jsx)(e.h2,{id:"lets-get-started-how-to-make-a-booking",children:"Let's Get Started: How to Make a Booking!"}),"\n",(0,i.jsx)(e.p,{children:"Hotel-X offers a powerful GraphQL-based API that simplifies the process of booking hotels and managing reservations. Whether you're a seasoned developer or just getting started, this guide will walk you through the basics of using the API to make hotel bookings."}),"\n",(0,i.jsx)(e.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(e.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsx)(e.p,{children:"Hotel-X, being a GraphQL-based API, utilizes a single endpoint for all operations:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"https://api.travelgatex.com\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Or ",(0,i.jsx)(e.code,{children:"https://api-cn.travelgatex.com"})," if your servers are situated in China for better system's performance."]}),"\n",(0,i.jsx)(e.h4,{id:"request-headers",children:"Request Headers"}),"\n",(0,i.jsx)(e.p,{children:"To interact with the API, you'll need to include three essential request headers:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Gzip Compression: This header helps optimize data transfer between your application and the API."}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"Accept-Encoding: gzip.\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Keep Alive: In order to increase performance and improve response times."}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"Connection: keep-alive\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["API Key: You can find your API Key on the Travelgate website in Connections > ",(0,i.jsx)(e.a,{href:"https://app.travelgatex.com/connections/settings",children:"API Settings"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:"Authorization: ApiKey xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\n"})}),"\n",(0,i.jsx)(e.p,{children:"If you don't have an API key yet, you will be able to test the query and mutation examples with a test API key we've added to the playground in the next sections."}),"\n",(0,i.jsx)(e.h4,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,i.jsx)(e.p,{children:"Lastly, please note that the Hotel-X API supports two types of operations:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Query"}),': which are "read-only" and used for retrieving data from our system.  You can use queries to search for hotels, check availability...']}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Mutation"}),": which allow for changes, additions, or deletions of data within our system. This is where you can create bookings, update reservations..."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"But now this quickstart guide will focus on the basics of using the Hotel-X API to make hotel reservations, so let's dive in and get started!"}),"\n",(0,i.jsx)(e.h3,{id:"1-find-available-hotels-based-on-your-search-criteria",children:"1. Find available hotels based on your search criteria"}),"\n",(0,i.jsx)(e.p,{children:"The Search query is where the adventure begins in our shopping journey! Our aim here is to see what's available within your specified date range and for the number of guests (pax) you have in mind, whether it's for a particular hotel or in your desired destination. This step lets you explore your options before committing to a booking. You can even spice things up by searching with one or more sellers' accesses, giving you the freedom to tailor your search. But hey, for this example, let's kick it off with a simple search for a specific hotel using a particular test Seller."}),"\n",(0,i.jsx)(n,{query:o.Oy,variables:o.P5}),"\n",(0,i.jsx)(e.p,{children:"If you execute the previous search query by clicking on the play button, you'll see an example of how a search response could be, with all the options and rates available for the hotel and criteria requested in the query. For each option, you will receive relevant information such as rate, room type, price, cancellation policies, and more."}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["This example demonstrates the essential fields for obtaining results but keep in mind that the Hotel-X API offers a wide range of additional fields and functionalities! If you're curious and want to discover all the exciting details, check out the full ",(0,i.jsx)(e.a,{href:"./booking-flow/search",children:"search step documentation"}),". Happy exploring! \ud83d\ude0a\ud83d\udd0d"]})}),"\n",(0,i.jsx)(e.h3,{id:"2-quote-your-selected-option",children:"2. Quote your selected option"}),"\n",(0,i.jsx)(e.p,{children:"Now, let's dive into the exciting part! After carefully reviewing all the options in the search results and finding the hotel that perfectly suits your journey, it's time to move forward and request a quote. This quote operation is like getting an exclusive preview before the grand booking. It provides you with up-to-the-minute pricing, a detailed breakdown of your expenses, and crucial information about cancellation policies."}),"\n",(0,i.jsxs)(e.p,{children:["To make this happen, you'll need to retrieve the ",(0,i.jsx)(e.code,{children:"optionRefId"})," from the option of the search results that you want to valuate and use this value as the input for the Quote request:"]}),"\n",(0,i.jsx)(n,{query:s.i,variables:s.v}),"\n",(0,i.jsx)(e.h3,{id:"3-confirm-and-book-the-option",children:"3. Confirm and book the option!"}),"\n",(0,i.jsx)(e.p,{children:"You're almost there! After securing your quote and ensuring all the details align with your travel plans, it's time to proceed with the booking. In this step, you confirm your reservation and officially lock in your stay."}),"\n",(0,i.jsxs)(e.p,{children:["You'll need to provide the ",(0,i.jsx)(e.code,{children:"optionRefId"})," returned in the Quote step and enter all the necessary passenger information. Upon a successful booking request, you'll receive a confirmation along with essential reservation details. Congratulations! Your hotel stay is now officially booked."]}),"\n",(0,i.jsx)(n,{query:a.M,variables:a.E}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["Make sure to change the value of the ",(0,i.jsx)(e.code,{children:"clientReference"})," field so that the Book can be confirmed correctly."]})}),"\n",(0,i.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(e.p,{children:"Congratulations on completing this quickstart tutorial! \ud83c\udf89 You've successfully learned the basics of creating a sample booking. But there's a world of knowledge waiting for you:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Explore the ",(0,i.jsx)(e.a,{href:"../hotel-x-pull-buyers-api/making-requests/endpoint",children:"Making Requests"})," section to dive deep into how a GraphQL API works and maximize its performance."]}),"\n",(0,i.jsxs)(e.li,{children:["Discover various queries and mutations grouped by the following actions:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../hotel-x-pull-buyers-api/content/overview",children:"Retrieve static information"}),": Explore accessing static data."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../hotel-x-pull-buyers-api/booking-flow/overview",children:"Make a booking"}),": Learn how to book with more details."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../hotel-x-pull-buyers-api/booking-management/overview",children:"Manage reservations"}),": Get the hang of reservation management."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Unleash the full potential of your business with our diverse range of ",(0,i.jsx)(e.a,{href:"../hotel-x-pull-buyers-api/plugins/overview",children:"plugins"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Our documentation is a treasure trove of additional features and functionalities to enhance your business. To uncover these valuable resources, explore our documentation further and make the most of these methods. Enjoy your journey!"})]})}function g(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(p,{...t})}):p(t)}},66716:(t,e,n)=>{n.d(e,{E:()=>r,M:()=>i});const i="mutation ($bookInput: HotelBookInput!, $settings: HotelSettingsInput) {\n\thotelX {\n\t\tbook(input: $bookInput, settings: $settings) {\n\t\t\terrors {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\twarnings {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\n\t\t\tbooking {\n\t\t\t\tstatus\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t\texchange {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\trate\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treference {\n\t\t\t\t\tbookingID\n\t\t\t\t\tclient\n\t\t\t\t\tsupplier\n\t\t\t\t\thotel\n\t\t\t\t}\n\t\t\t\tholder {\n\t\t\t\t\tname\n\t\t\t\t\tsurname\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\tdeadline\n\t\t\t\t\t\tisCalculatedDeadline\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tremarks\n\t\t\t\thotel {\n\t\t\t\t\thotelCode\n\t\t\t\t\thotelName\n\t\t\t\t\tbookingDate\n\t\t\t\t\tstart\n\t\t\t\t\tend\n\t\t\t\t\tboardCode\n\t\t\t\t\toccupancies {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpaxes {\n\t\t\t\t\t\t\tage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\trooms {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tdescription\n\t\t\t\t\t\toccupancyRefId\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\tbinding\n\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\tgross\n\t\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\trate\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"bookInput": {\n\t\t"optionRefId": "11!11?1$241028?241029?1?1?0?ES?ES?es?EUR?0?2?1?1?0?1?10101449?BARRF[%@BARRF?210.0$0$false$EUR$$0$?1|30#30|1|2024-10-28|1|4247163|4247164|1|11|0?5683!5683?30$30??Double Suite Deluxe?1?120$2$EUR$52.5$2024-10-22T10:00:00Z!72$2$EUR$105$2024-10-24T10:00:00Z!24$2$EUR$210$2024-10-26T10:00:00Z?After$210.0!Before$210.0!ExpireDate$29/10/2024!mercado$ES!tgx_sess$691c61a5-80b2-40a3-b6d2-4c32d5e30fca?OK?Sith?0?",\n\t\t"clientReference": "test_0123456789",\n\t\t"deltaPrice": {\n\t\t\t"amount": 10,\n\t\t\t"percent": 10,\n\t\t\t"applyBoth": true\n\t\t},\n\t\t"holder": {\n\t\t\t"name": "Jane",\n\t\t\t"surname": "Doe"\n\t\t},\n\t\t"remarks": "This is just a test booking! Feel free to include any extra information in the remarks section that you\'d like the supplier to know.",\n\t\t"rooms": {\n\t\t\t"occupancyRefId": 1,\n\t\t\t"paxes": [\n\t\t\t\t{\n\t\t\t\t\t"name": "Jane",\n\t\t\t\t\t"surname": "Doe",\n\t\t\t\t\t"age": 30\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"name": "John",\n\t\t\t\t\t"surname": "Smith",\n\t\t\t\t\t"age": 30\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 60000\n\t}\n}'},50868:(t,e,n)=>{n.d(e,{i:()=>i,v:()=>r});const i="query (\n\t$criteriaQuote: HotelCriteriaQuoteInput!\n\t$settings: HotelSettingsInput\n) {\n\thotelX {\n\t\tquote(criteria: $criteriaQuote, settings: $settings) {\n\t\t\terrors {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\twarnings {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\toptionQuote {\n\t\t\t\toptionRefId\n\t\t\t\tstatus\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t\texchange {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\trate\n\t\t\t\t\t}\n\t\t\t\t\tminimumSellingPrice\n\t\t\t\t}\n\t\t\t\tsurcharges {\n\t\t\t\t\tchargeType\n\t\t\t\t\tprice {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tbinding\n\t\t\t\t\t\tnet\n\t\t\t\t\t\tgross\n\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\trate\n\t\t\t\t\t\t}\n\t\t\t\t\t\tminimumSellingPrice\n\t\t\t\t\t}\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tdescription\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\tdeadline\n\t\t\t\t\t\tisCalculatedDeadline\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpaymentType\n\t\t\t\tcardTypes\n\t\t\t\tremarks\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"criteriaQuote": {\n\t\t"optionRefId": "13[%!03!~|3[%@241028!~|241029!~|1!~|1!~|0!~|ES!~|ES!~|es!~|EUR!~|0!~|2!~|1!~|1!~|0!~|0!~|10101446!~|BARRF[%@BARRF!~|210[%@0[%@false[%@EUR[%@[%@0[%@!~|1|30#30|1|2024-10-28|1|4247163|4247164|1|11|0!~|5683[%!5683!~|30[%@30!~|!~|Double Suite Deluxe!~|1!~|!~|mercado[%@ES[%!ExpireDate[%@29/10/2024!~|OK!~|Sith!~|0!~|"\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 5000\n\t}\n}'},90904:(t,e,n)=>{n.d(e,{Oy:()=>i,P5:()=>r,_S:()=>o,hL:()=>s});const i="query (\n\t$criteriaSearch: HotelCriteriaSearchInput\n\t$settings: HotelSettingsInput\n\t$filterSearch: HotelXFilterSearchInput\n) {\n\thotelX {\n\t\tsearch(\n\t\t\tcriteria: $criteriaSearch\n\t\t\tsettings: $settings\n\t\t\tfilterSearch: $filterSearch\n\t\t) {\n\t\t\tcontext\n\t\t\terrors {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\twarnings {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\toptions {\n\t\t\t\tid\n\t\t\t\taccessCode\n\t\t\t\tsupplierCode\n\t\t\t\thotelCode\n\t\t\t\thotelName\n\t\t\t\tboardCode\n\t\t\t\tpaymentType\n\t\t\t\tstatus\n\t\t\t\toccupancies {\n\t\t\t\t\tid\n\t\t\t\t\tpaxes {\n\t\t\t\t\t\tage\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\trooms {\n\t\t\t\t\toccupancyRefId\n\t\t\t\t\tcode\n\t\t\t\t\tdescription\n\t\t\t\t\trefundable\n\t\t\t\t\troomPrice {\n\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\tbinding\n\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\tgross\n\t\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\trate\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tbreakdown {\n\t\t\t\t\t\t\tstart\n\t\t\t\t\t\t\tend\n\t\t\t\t\t\t\tprice {\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\tbinding\n\t\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\t\tgross\n\t\t\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\t\trate\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tminimumSellingPrice\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tbeds {\n\t\t\t\t\t\ttype\n\t\t\t\t\t\tcount\n\t\t\t\t\t}\n\t\t\t\t\tratePlans {\n\t\t\t\t\t\tstart\n\t\t\t\t\t\tend\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t\texchange {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\trate\n\t\t\t\t\t}\n\t\t\t\t\tminimumSellingPrice\n\t\t\t\t\tmarkups {\n\t\t\t\t\t\tchannel\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tbinding\n\t\t\t\t\t\tnet\n\t\t\t\t\t\tgross\n\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\trate\n\t\t\t\t\t\t}\n\t\t\t\t\t\trules {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tsupplements {\n\t\t\t\t\tstart\n\t\t\t\t\tend\n\t\t\t\t\tcode\n\t\t\t\t\tname\n\t\t\t\t\tdescription\n\t\t\t\t\tsupplementType\n\t\t\t\t\tchargeType\n\t\t\t\t\tmandatory\n\t\t\t\t\tdurationType\n\t\t\t\t\tquantity\n\t\t\t\t\tunit\n\t\t\t\t\tresort {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t}\n\t\t\t\t\tprice {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tbinding\n\t\t\t\t\t\tnet\n\t\t\t\t\t\tgross\n\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\trate\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tsurcharges {\n\t\t\t\t\tcode\n\t\t\t\t\tchargeType\n\t\t\t\t\tdescription\n\t\t\t\t\tmandatory\n\t\t\t\t\tprice {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tbinding\n\t\t\t\t\t\tnet\n\t\t\t\t\t\tgross\n\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\trate\n\t\t\t\t\t\t}\n\t\t\t\t\t\tmarkups {\n\t\t\t\t\t\t\tchannel\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\tbinding\n\t\t\t\t\t\t\tnet\n\t\t\t\t\t\t\tgross\n\t\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\t\trate\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\trateRules\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\tdeadline\n\t\t\t\t\t\tisCalculatedDeadline\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tremarks\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"criteriaSearch": {\n\t\t"checkIn": "2024-10-28",\n\t\t"checkOut": "2024-10-29",\n\t\t"occupancies": [\n\t\t\t{\n\t\t\t\t"paxes": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t"hotels": [\n\t\t\t"1"\n\t\t],\n\t\t"currency": "EUR",\n\t\t"markets": [\n\t\t\t"ES"\n\t\t],\n\t\t"language": "es",\n\t\t"nationality": "ES"\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 25000\n\t},\n\t"filterSearch": {\n\t\t"access": {\n\t\t\t"includes": [\n\t\t\t\t"2"\n\t\t\t]\n\t\t}\n\t}\n}',o='{\n\t"criteriaSearch": {\n\t\t"checkIn": "2024-10-28",\n\t\t"checkOut": "2024-10-29",\n\t\t"occupancies": [\n\t\t\t{\n\t\t\t\t"paxes": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t{\n\t\t\t\t"paxes": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 8\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t"hotels": [\n\t\t\t"1"\n\t\t],\n\t\t"currency": "EUR",\n\t\t"markets": [\n\t\t\t"ES"\n\t\t],\n\t\t"language": "es",\n\t\t"nationality": "ES"\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 25000\n\t},\n\t"filterSearch": {\n\t\t"access": {\n\t\t\t"includes": [\n\t\t\t\t"2"\n\t\t\t]\n\t\t}\n\t}\n}',s='{\n\t"criteriaSearch": {\n\t\t"checkIn": "2024-10-28",\n\t\t"checkOut": "2024-10-29",\n\t\t"occupancies": [\n\t\t\t{\n\t\t\t\t"paxes": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t"hotels": [\n\t\t\t"1",\n\t\t\t"2"\n\t\t],\n\t\t"currency": "EUR",\n\t\t"markets": [\n\t\t\t"ES"\n\t\t],\n\t\t"language": "es",\n\t\t"nationality": "ES"\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 25000\n\t},\n\t"filterSearch": {\n\t\t"access": {\n\t\t\t"includes": [\n\t\t\t\t"2"\n\t\t\t]\n\t\t}\n\t}\n}'},21020:(t,e,n)=>{var i=n(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,n){var i,o={},c=null,u=null;for(i in void 0!==n&&(c=""+n),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(u=e.ref),e)s.call(e,i)&&!l.hasOwnProperty(i)&&(o[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps)void 0===o[i]&&(o[i]=e[i]);return{$$typeof:r,type:t,key:c,ref:u,props:o,_owner:a.current}}e.Fragment=o,e.jsx=c,e.jsxs=c},74848:(t,e,n)=>{t.exports=n(21020)},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);