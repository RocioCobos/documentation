/*! For license information please see 759efcac.a0f424be.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14452],{60164:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var i=n(17624),o=n(4552);const s="query (\n\t$input: HotelOneStepQuoteInput!\n\t$settings: HotelSettingsInput!\n\t$filter: HotelFilterInput!\n) {\n\thotelX {\n\t\toneStepQuote(input: $input, settings: $settings, filter: $filter) {\n\t\t\toptionQuote {\n\t\t\t\toptionRefId\n\t\t\t\tcardTypes\n\t\t\t\tpaymentType\n\t\t\t\tprice {\n\t\t\t\t\tbinding\n\t\t\t\t\tcurrency\n\t\t\t\t\tgross\n\t\t\t\t\tnet\n\t\t\t\t\tminimumSellingPrice\n\t\t\t\t}\n\t\t\t\tremarks\n\t\t\t\trooms {\n\t\t\t\t\tcode\n\t\t\t\t\tdescription\n\t\t\t\t\toccupancyRefId\n\t\t\t\t}\n\t\t\t\tsurcharges {\n\t\t\t\t\tchargeType\n\t\t\t\t\tcode\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t\tcancelPolicy {\n\t\t\t\t\tdescription\n\t\t\t\t\trefundable\n\t\t\t\t\tcancelPenalties {\n\t\t\t\t\t\tcurrency\n\t\t\t\t\t\tdeadline\n\t\t\t\t\t\tisCalculatedDeadline\n\t\t\t\t\t\tpenaltyType\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tadviseMessage {\n\t\t\t\tcode\n\t\t\t\tdescription\n\t\t\t}\n\t\t}\n\t}\n}",r='{\n\t"input": {\n\t\t"language": "es",\n\t\t"market": "ES",\n\t\t"nationality": "ES",\n\t\t"checkIn": "2024-10-28",\n\t\t"checkOut": "2024-10-29",\n\t\t"hotel": "1",\n\t\t"board": "1",\n\t\t"price": {\n\t\t\t"currency": "EUR",\n\t\t\t"binding": false,\n\t\t\t"net": 146,\n\t\t\t"gross": 146\n\t\t},\n\t\t"ratePlan": "BAR",\n\t\t"rooms": [\n\t\t\t{\n\t\t\t\t"occupancyRefId": 1,\n\t\t\t\t"code": "2269",\n\t\t\t\t"paxes": []\n\t\t\t}\n\t\t],\n\t\t"rateRulesExtended": [\n\t\t\t{\n\t\t\t\t"type": "PACKAGE"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "NON_REFUNDABLE"\n\t\t\t}\n\t\t],\n\t\t"occupancies": [\n\t\t\t{\n\t\t\t\t"paxes": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t"cancelPolicy": {\n\t\t\t"refundable": false,\n\t\t\t"cancelPenalties": []\n\t\t}\n\t},\n\t"settings": {\n\t\t"testMode": true,\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"timeout": 20000\n\t},\n\t"filter": {\n\t\t"access": "2",\n\t\t"excludeComparisonFields": "SURCHARGES"\n\t}\n}',l={sidebar_position:3},c="One Step Quote",a={id:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepquote",title:"One Step Quote",description:"One step quote operation evaluates the rate before booking, checking if the option is still available and including up-to-date pricing and cancellation policies. The returned fields include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepquote.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepquote",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepquote",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepquote.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/overview"},next:{title:"One Step Book",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepbook"}},d={},u=[{value:"One Step Quote Inputs",id:"one-step-quote-inputs",level:2},{value:"1. Input",id:"1-input",level:3},{value:"2. Settings",id:"2-settings",level:3},{value:"3. Filter",id:"3-filter",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Quote option without checking the surcharges",id:"quote-option-without-checking-the-surcharges",level:4},{value:"Quote Response",id:"quote-response",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}];function h(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...t.components},{CautionSettingsHotelX:n,Details:l,GraphqlSample:c}=e;return n||x("CautionSettingsHotelX",!0),l||x("Details",!0),c||x("GraphqlSample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"one-step-quote",children:"One Step Quote"}),"\n",(0,i.jsx)(e.p,{children:"One step quote operation evaluates the rate before booking, checking if the option is still available and including up-to-date pricing and cancellation policies. The returned fields include:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"status"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"price"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"cancelPolicy"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"rooms"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"surcharges"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"one-step-quote-inputs",children:"One Step Quote Inputs"}),"\n",(0,i.jsx)(e.p,{children:"When creating your one step quote query, you have three different inputs to fill based on your specific needs:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Criteria"}),"\n",(0,i.jsx)(e.li,{children:"Settings"}),"\n",(0,i.jsx)(e.li,{children:"Filter"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-graphql",children:"query {\n    hotelX {\n    oneStepQuote\n      input: {}\n      settings: {}\n      filter: {}\n\t}\n}\n"})}),"\n",(0,i.jsx)(n,{}),"\n",(0,i.jsx)(e.h3,{id:"1-input",children:"1. Input"}),"\n",(0,i.jsx)(e.p,{children:"This query offers versatility in quote options, with certain fields marked as mandatory and others as optional."}),"\n",(0,i.jsxs)(e.p,{children:["To specify your one step quote criteria you need to use the input ",(0,i.jsx)(e.code,{children:"HotelOneStepQuoteInput"})," in your query variables:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'{\n\t"input": {\n\t\t"language": "es",\n\t\t"market": "ES",\n\t\t"nationality": "ES",\n\t\t"checkIn": "2024-10-28",\n\t\t"checkOut": "2024-10-29",\n\t\t"hotel": "1",\n\t\t"board": "1",\n\t\t"price": {\n\t\t\t"currency": "EUR",\n\t\t\t"binding": false,\n\t\t\t"net": 450.6,\n\t\t\t"gross": 460.6\n\t\t},\n\t\t"ratePlan": "BAR",\n\t\t"rooms": [\n\t\t\t{\n\t\t\t\t"occupancyRefId": 1,\n\t\t\t\t"code": "2269",\n\t\t\t\t"paxes": []\n\t\t\t}\n\t\t],\n\t\t"rateRulesExtended": [\n\t\t\t{\n\t\t\t\t"type": "PACKAGE"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"type": "NON_REFUNDABLE"\n\t\t\t}\n\t\t],\n\t\t"occupancies": [\n\t\t\t{\n\t\t\t\t"paxes": [\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t"age": 30\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t],\n\t\t"cancelPolicy": {\n\t\t\t"refundable": false,\n\t\t\t"cancelPenalties": []\n\t\t}\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Mandatory criteria:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"checkIn"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"checkOut"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"hotel"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"board"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"occupancies"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"rooms"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"price"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"cancelPolicy"})}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Optional criteria:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"language"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"nationality"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"market"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"ratePlan"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"rateRulesExtended"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"surcharges"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"supplements"})}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-settings",children:"2. Settings"}),"\n",(0,i.jsx)(e.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,i.jsxs)(e.p,{children:["To specify your quote settings you need to use the input ",(0,i.jsx)(e.code,{children:"HotelSettingsInput"})," in your query variables:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'{\n\t"settings": {\n\t\t"client": "client_demo",\n\t\t"context": "HOTELTEST",\n\t\t"testMode": true,\n\t\t"timeout": 180000\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Mandatory Settings:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.code,{children:"client"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"context"})," (You have the flexibility to choose between using the supplier's context or your own, depending on which codes you want to see in the response. If you prefer to receive responses with your custom codes, please ensure that your context code is linked to the mapping files that you've previously uploaded to your FTP account.)"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"timeout"})," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded.)"]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{title:"Key Recommendations",type:"tip",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Customize the ",(0,i.jsx)(e.code,{children:"timeout"})," according to your needs, taking into consideration ",(0,i.jsx)(e.strong,{children:"the maximum values in One Step Quote is 180,000ms"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Set the ",(0,i.jsx)(e.code,{children:"audiTransaction"}),' to "true" in One Step Quote when investigating errors.']}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(e.h3,{id:"3-filter",children:"3. Filter"}),"\n",(0,i.jsx)(e.p,{children:"Filter allow you to precisely tailor the response according to your preferences."}),"\n",(0,i.jsxs)(e.p,{children:["To specify your filters you need to use the input ",(0,i.jsx)(e.code,{children:"HotelFilterInput"})," in your query variables. The available filters inside this input are:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"access"})," (mandatory): Specify the supplier access you want to use to quote the option."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"excludeComparisonFields"})," (optional): If there are specific rate characteristics you prefer not to use internally for finding the option, indicate them here. For example, you may not want us to specifically check for a non-refundable option. You may want us to quote an option with the same other characteristics (hotel, rate, board), and whether the option is refundable or not doesn't matter to you."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'{\n    "filter": {\n\t\t"access": "2",\n        "excludeComparisonFields": [\n            "CANCEL_POLICY"\n        ]\n\t}\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,i.jsx)(e.h4,{id:"quote-option-without-checking-the-surcharges",children:"Quote option without checking the surcharges"}),"\n",(0,i.jsx)(c,{query:s,variables:r}),"\n",(0,i.jsx)(e.h2,{id:"quote-response",children:"Quote Response"}),"\n",(0,i.jsxs)(e.p,{children:["As mentioned earlier, the quote response will provide you with updated information about the option found with the criteria indicated in the input. In this one step quote response, ",(0,i.jsx)(e.strong,{children:"there are some essential details that you should carefully review and consider"})," when providing information to your final customers:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Cancellation Policies:"})," Within the ",(0,i.jsx)(e.code,{children:"cancelPolicy"})," structure response, you will find a ",(0,i.jsx)(e.code,{children:"refundable"}),' field. If this field is marked as "false," it means that the room has a 100% cancellation cost, making it non-refundable.']}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Remarks:"})," Pay attention to any remarks or additional notes provided in the response."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Taxes:"})," Ensure you are aware of any applicable taxes associated with the selected option."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["The next step is to confirm the booking using the standard ",(0,i.jsx)(e.a,{href:"../booking-flow/book",children:"book mutation"})," in the Hotel-X API, utilizing the ",(0,i.jsx)(e.code,{children:"optionRefId"})," obtained from the results."]}),"\n",(0,i.jsx)(e.h2,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Are there any limitations on the number of Hotel-X One Step Quote requests allowed per minute?"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:'Not from Travelgate side, we don\'t have any limitations on the RPM ("Requests for Minute") in any of our methods. However, some Sellers may have some limitations so we suggest you contact directly with them in order to discuss this information.'})})]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Do options get blocked in Hotel-X Quote Query?"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:"Some Sellers may block the options when performing a Quote Query so we strongly recommend to contact them directly regarding this topic in order to prevent future issues."})})]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Is there any possibility to obtain RoomCodes in Quote?"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:"If the Seller provides this information, you can obtain the room code by including the rooms node in the HotelOptionQuote node."})})]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"What should I do if I receive a status RQ in Quote response?"}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:"You may receive a status On Request (status RQ) in Quote response in those cases the availability of the option previously selected is pending to be confirmed by the Seller. If you receive status RQ in Quote response, you should run a new Search request and restart the Booking Flow."})})]})]})}function p(t={}){const{wrapper:e}={...(0,o.M)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(h,{...t})}):h(t)}function x(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},44808:(t,e,n)=>{var i=n(11504),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,n){var i,s={},a=null,d=null;for(i in void 0!==n&&(a=""+n),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(d=e.ref),e)r.call(e,i)&&!c.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps)void 0===s[i]&&(s[i]=e[i]);return{$$typeof:o,type:t,key:a,ref:d,props:s,_owner:l.current}}e.Fragment=s,e.jsx=a,e.jsxs=a},17624:(t,e,n)=>{t.exports=n(44808)},4552:(t,e,n)=>{n.d(e,{I:()=>l,M:()=>r});var i=n(11504);const o={},s=i.createContext(o);function r(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);