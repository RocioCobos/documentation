"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87566],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},g=Object.keys(e);for(o=0;o<g.length;o++)a=g[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(o=0;o<g.length;o++)a=g[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),d=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,g=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),s=d(a),k=n,m=s["".concat(i,".").concat(k)]||s[k]||b[k]||g;return a?o.createElement(m,l(l({ref:t},c),{},{components:a})):o.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var g=a.length,l=new Array(g);l[0]=k;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[s]="string"==typeof e?e:n,l[1]=r;for(var d=2;d<g;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9866:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var o=a(87462),n=a(67294),g=a(3905);const l={id:"booking-aggregation",title:"BookingAggregation",hide_table_of_contents:!1},r=void 0,i={unversionedId:"objects/booking-aggregation",id:"objects/booking-aggregation",title:"BookingAggregation",description:"No description",source:"@site/api/objects/booking-aggregation.mdx",sourceDirName:"objects",slug:"/objects/booking-aggregation",permalink:"/api/objects/booking-aggregation",draft:!1,tags:[],version:"current",frontMatter:{id:"booking-aggregation",title:"BookingAggregation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BookReference",permalink:"/api/objects/book-reference"},next:{title:"BookingDetail",permalink:"/api/objects/booking-detail"}},d={},c=()=>(0,g.kt)(n.Fragment,null,(0,g.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,g.kt)(n.Fragment,null,"Specification",(0,g.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,g.kt)(n.Fragment,null,(0,g.kt)("span",{className:e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>status</b></code><Bullet /><code>BookStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-bookingaggregationbstatusbcodebookstatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>client</b></code><Bullet /><code>Client</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-bookingaggregationbclientbcodeclient-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>supplier</b></code><Bullet /><code>Supplier</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-bookingaggregationbsupplierbcodesupplier-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>currency</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationbcurrencybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>bookingAt</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationbbookingatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>checkInAt</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationbcheckinatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>cancelAt</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationbcancelatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>originMarket</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationboriginmarketbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>destinationCountry</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationbdestinationcountrybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>paxType</b></code><Bullet /><code>PaxTypeType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-bookingaggregationbpaxtypebcodepaxtypetype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>bookingWindow</b></code><Bullet /><code>BookingWindowType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-bookingaggregationbbookingwindowbcodebookingwindowtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>lengthOfStay</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationblengthofstaybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>hotelName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationbhotelnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>amount</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationbamountbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>amountEur</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationbamounteurbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>amountCancelPenalties</b></code><Bullet /><code>[AmountCancelPenalty]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-bookingaggregationbamountcancelpenaltiesbcodeamountcancelpenalty--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>numBookings</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-bookingaggregationbnumbookingsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BookingAggregation.<b>aggregate</b></code><Bullet /><code>Aggregate</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-bookingaggregationbaggregatebcodeaggregate-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[i,d]=(0,n.useState)(r);return(0,g.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,g.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},p={Bullet:c,SpecifiedBy:s,Badge:b,toc:k,Details:m},u="wrapper";function y(e){let{components:t,...a}=e;return(0,g.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,g.kt)("p",null,"No description"),(0,g.kt)("pre",null,(0,g.kt)("code",{parentName:"pre",className:"language-graphql"},"type BookingAggregation {\n  status: BookStatusType\n  client: Client\n  supplier: Supplier\n  currency: String\n  bookingAt: Date\n  checkInAt: Date\n  cancelAt: Date\n  originMarket: String\n  destinationCountry: String\n  paxType: PaxTypeType\n  bookingWindow: BookingWindowType\n  lengthOfStay: Int\n  hotelName: String\n  amount: Float\n  amountEur: Float\n  amountCancelPenalties: [AmountCancelPenalty]\n  numBookings: Int\n  aggregate: Aggregate\n}\n")),(0,g.kt)("h3",{id:"fields"},"Fields"),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbstatusbcodebookstatustype-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"status"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/enums/book-status-type"},(0,g.kt)("inlineCode",{parentName:"a"},"BookStatusType"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbclientbcodeclient-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"client"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/objects/client"},(0,g.kt)("inlineCode",{parentName:"a"},"Client"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbsupplierbcodesupplier-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"supplier"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/objects/supplier"},(0,g.kt)("inlineCode",{parentName:"a"},"Supplier"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbcurrencybcodestring-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"currency"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,g.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbbookingatbcodedate-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"bookingAt"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,g.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbcheckinatbcodedate-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"checkInAt"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,g.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbcancelatbcodedate-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"cancelAt"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,g.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationboriginmarketbcodestring-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"originMarket"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,g.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbdestinationcountrybcodestring-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"destinationCountry"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,g.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbpaxtypebcodepaxtypetype-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"paxType"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/enums/pax-type-type"},(0,g.kt)("inlineCode",{parentName:"a"},"PaxTypeType"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbbookingwindowbcodebookingwindowtype-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"bookingWindow"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/enums/booking-window-type"},(0,g.kt)("inlineCode",{parentName:"a"},"BookingWindowType"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationblengthofstaybcodeint-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"lengthOfStay"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,g.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbhotelnamebcodestring-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"hotelName"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,g.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbamountbcodefloat-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"amount"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,g.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbamounteurbcodefloat-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"amountEur"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,g.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbamountcancelpenaltiesbcodeamountcancelpenalty--"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"amountCancelPenalties"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/objects/amount-cancel-penalty"},(0,g.kt)("inlineCode",{parentName:"a"},"[AmountCancelPenalty]"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbnumbookingsbcodeint-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"numBookings"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,g.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h4",{id:"code-style-fontweight-normal-bookingaggregationbaggregatebcodeaggregate-"},(0,g.kt)("a",{parentName:"h4",href:"#"},(0,g.kt)("code",{style:{fontWeight:"normal"}},"BookingAggregation.",(0,g.kt)("b",null,"aggregate"))),(0,g.kt)(c,{mdxType:"Bullet"}),(0,g.kt)("a",{parentName:"h4",href:"/api/objects/aggregate"},(0,g.kt)("inlineCode",{parentName:"a"},"Aggregate"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,g.kt)("blockquote",null),(0,g.kt)("h3",{id:"member-of"},"Member of"),(0,g.kt)("p",null,(0,g.kt)("a",{parentName:"p",href:"/api/objects/insights-xbooking-aggregation"},(0,g.kt)("inlineCode",{parentName:"a"},"InsightsXBookingAggregation"))," ",(0,g.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);