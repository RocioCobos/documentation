"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80612],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),u=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),m=o,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(k,a(a({ref:e},p),{},{components:n})):i.createElement(k,a({ref:e},p))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74605:(t,e,n)=>{n.d(e,{B:()=>o,T:()=>i});const i="query (\n\t$criteriaQuote: HotelCriteriaQuoteInput!\n\t$settings: HotelSettingsInput\n) {\n\thotelX {\n\t\tquote(criteria: $criteriaQuote, settings: $settings) {\n\t\t\terrors {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\twarnings {\n\t\t\t\tcode\n\t\t\t\ttype\n\t\t\t\tdescription\n\t\t\t}\n\t\t\toptionQuote {\n\t\t\t\toptionRefId\n\t\t\t\tstatus\n\t\t\t\tprice {\n\t\t\t\t\tcurrency\n\t\t\t\t\tbinding\n\t\t\t\t\tnet\n\t\t\t\t\tgross\n\t\t\t\t\texchange {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\trate\n\t\t\t\t\t}\n\t\t\t\t\tminimumSellingPrice\n\t\t\t\t}\n\t\t\t\tsurcharges {\n\t\t\t\t\tchargeType\n\t\t\t\t\tprice {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tbinding\n\t\t\t\t\t\tnet\n\t\t\t\t\t\tgross\n\t\t\t\t\t\texchange {\n\t\t\t\t\t\t\tcurrency\n\t\t\t\t\t\t\trate\n\t\t\t\t\t\t}\n\t\t\t\t\t\tminimumSellingPrice\n\t\t\t\t\t}\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\trefundable\n\t\t\t\t\tdescription\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\thoursBefore\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpaymentType\n\t\t\t\tcardTypes\n\t\t\t\tremarks\n\t\t\t}\n\t\t}\n\t}\n}",o='{\n\t"criteriaQuote": {\n\t\t"optionRefId": "13[%!03!~|3[%@241028!~|241029!~|1!~|1!~|0!~|ES!~|ES!~|es!~|EUR!~|0!~|2!~|1!~|1!~|0!~|0!~|10101446!~|BARRF[%@BARRF!~|210[%@0[%@false[%@EUR[%@[%@0[%@!~|1|30#30|1|2024-10-28|1|4247163|4247164|1|11|0!~|5683[%!5683!~|30[%@30!~|!~|Double Suite Deluxe!~|1!~|!~|mercado[%@ES[%!ExpireDate[%@29/10/2024!~|OK!~|Sith!~|0!~|"\n\t},\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 5000\n\t}\n}'},9036:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),o=(n(67294),n(3905)),r=n(74605);const a={sidebar_position:3},l="Quote",s={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote",id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote",title:"Quote",description:"Quote operation evaluates the rate before booking, providing the same information as the Search response for a hotel rate, including up-to-date pricing. Additionally, it offers further details such as rate breakdown and cancellation policies. The returned fields include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-flow",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Search",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/search"},next:{title:"Book",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book"}},u={},p=[{value:"Inputs",id:"inputs",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Response",id:"response",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},d=c("CautionSettingsHotelX"),m=c("GraphqlSample"),k={toc:p},y="wrapper";function h(t){let{components:e,...n}=t;return(0,o.kt)(y,(0,i.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quote"},"Quote"),(0,o.kt)("p",null,"Quote operation evaluates the rate before booking, providing the same information as the Search response for a hotel rate, including up-to-date pricing. Additionally, it offers further details such as rate breakdown and cancellation policies. The returned fields include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"status")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"price")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cancelPolicy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rooms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"surcharges"))),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,"When creating your quote query, you have two different inputs to fill based on your specific needs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Criteria"),(0,o.kt)("li",{parentName:"ol"},"Settings")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n    hotelX {\n    quote\n      criteria: {}\n      settings: {}\n    }\n}\n")),(0,o.kt)(d,{mdxType:"CautionSettingsHotelX"}),(0,o.kt)("h3",{id:"1-criteria"},"1. Criteria"),(0,o.kt)("p",null,"This query offers versatility in quote options, with certain fields marked as mandatory (",(0,o.kt)("inlineCode",{parentName:"p"},"optionRefId"),") and others as optional (",(0,o.kt)("inlineCode",{parentName:"p"},"language"),"). This flexibility empowers you to create a personalized Quote Query, tailoring the requested fields to your specific needs. "),(0,o.kt)("p",null,"To specify your quote criteria you need to use the input ",(0,o.kt)("inlineCode",{parentName:"p"},"HotelCriteriaQuoteInput")," in your query variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "optionRefId": "13[%!03!~|3[%@241028!~|241029!~|1!~|1!~|0!~|ES!~|ES!~|es!~|EUR!~|0!~|2!~|1!~|1!~|1!~|0!~|15091141!~|BAR[%@BAR!~|146[%@0[%@false[%@EUR[%@[%@0[%@!~|1|30#30|1|2024-10-28|1|4132467|4132468|1|11|0!~|2269[%!2269!~|30[%@30!~|!~|Double Standard!~|1!~|!~|mercado[%@ES[%!ExpireDate[%@29/10/2024[%!tarifaNRF[%@true[%!RateRule[%@tarifaNoRefundablePorHabitacion!~|OK!~|Sith!~|0!~|"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mandatory criteria:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"optionRefId")," (Identifier of the option chosen in Search)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional criteria:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"language"))),(0,o.kt)("h3",{id:"2-settings"},"2. Settings"),(0,o.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."),(0,o.kt)("p",null,"To specify your quote settings you need to use the input ",(0,o.kt)("inlineCode",{parentName:"p"},"HotelSettingsInput")," in your query variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings": {\n        "client": "client_demo",\n        "context": "HOTELTEST",\n        "testMode": true,\n        "auditTransactions": false,\n        "timeout": 10000\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mandatory Settings:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," (You have the flexibility to choose between using the supplier's context or your own, depending on which codes you want to see in the response. If you prefer to receive responses with your custom codes, please ensure that your context code is linked to the mapping files that you've previously uploaded to your FTP account.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"businessRules"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional Settings:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auditTransactions")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"suppliers")," (Each one contains its own code, settings and accesses.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"plugins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testMode")," (This flag allows only the accesses checked as test.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clientTokens")," (Used to identify the origin of the request, this is only used with some ",(0,o.kt)("a",{parentName:"li",href:"../plugins/overview"},"plugins"),".)")),(0,o.kt)("admonition",{title:"Key Recommendations",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Customize the ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout")," according to your needs, taking into consideration ",(0,o.kt)("strong",{parentName:"p"},"the maximum values in Quote is 180,000ms"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"audiTransaction"),' to "true" in Quote when investigating errors.')))),(0,o.kt)("h3",{id:"requests-examples"},"Requests Examples"),(0,o.kt)(m,{query:r.T,variables:r.B,mdxType:"GraphqlSample"}),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"As mentioned earlier, the quote response will provide you with updated information about the option you selected during the search step. In this quote response, ",(0,o.kt)("strong",{parentName:"p"},"there are some essential details that you should carefully review and consider")," when providing information to your final customers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Cancellation Policies:")," Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelPolicy")," structure response, you will find a ",(0,o.kt)("inlineCode",{parentName:"p"},"refundable"),' field. If this field is marked as "false," it means that the room has a 100% cancellation cost, making it non-refundable.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Remarks:")," Pay attention to any remarks or additional notes provided in the response.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Taxes:")," Ensure you are aware of any applicable taxes associated with the selected option."))),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Do I have to perform a Quote Query in order to Book an option?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Yes, in order to confirm a reservation, it is necessary to complete all three Booking Flow methods: Search, Quote, and Book."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Are there any limitations on the number of Hotel-X Quote requests allowed per minute?"),(0,o.kt)("div",null,(0,o.kt)("div",null,'Not from TravelgateX side, we don\'t have any limitations on the RPM ("Requests for Minute") in any of our methods. However, some Sellers may have some limitations so we suggest you contact directly with them in order to discuss this information.'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Do options get blocked in Hotel-X Quote Query?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Some Sellers may block the options when performing a Quote Query so we strongly recommend to contact them directly regarding this topic in order to prevent future issues."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Is there any possibility to obtain RoomCodes in Quote?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"If the Seller provides this information, you can obtain the room code by including the rooms node in the HotelOptionQuote node."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What should I do if I receive a status RQ in Quote response?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"You may receive a status On Request (status RQ) in Quote response in those cases the availability of the option previously selected is pending to be confirmed by the Seller. If you receive status RQ in Quote response, you should run a new Search request and restart the Booking Flow."))))}h.isMDXComponent=!0}}]);