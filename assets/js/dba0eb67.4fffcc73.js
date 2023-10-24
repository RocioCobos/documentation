"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var d=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,d)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,d,r=function(e,t){if(null==e)return{};var a,d,r={},l=Object.keys(e);for(d=0;d<l.length;d++)a=l[d],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(d=0;d<l.length;d++)a=l[d],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=d.createContext({}),s=function(e){var t=d.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=s(e.components);return d.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},g=d.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(a),g=r,b=c["".concat(i,".").concat(g)]||c[g]||m[g]||l;return a?d.createElement(b,n(n({ref:t},p),{},{components:a})):d.createElement(b,n({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,n=new Array(l);n[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,n[1]=o;for(var s=2;s<l;s++)n[s]=a[s];return d.createElement.apply(null,n)}return d.createElement.apply(null,a)}g.displayName="MDXCreateElement"},94057:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>c,assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>n,metadata:()=>i,toc:()=>g});var d=a(87462),r=a(67294),l=a(3905);const n={id:"supplier",title:"Supplier",hide_table_of_contents:!1},o=void 0,i={unversionedId:"objects/supplier",id:"objects/supplier",title:"Supplier",description:"A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",source:"@site/api/objects/supplier.mdx",sourceDirName:"objects",slug:"/objects/supplier",permalink:"/api/objects/supplier",draft:!1,tags:[],version:"current",frontMatter:{id:"supplier",title:"Supplier",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupplierEdge",permalink:"/api/objects/supplier-edge"},next:{title:"Surcharge",permalink:"/api/objects/surcharge"}},s={},p=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Supplier.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplier.<b>supplierData</b></code><Bullet /><code>SupplierData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierbsupplierdatabcodesupplierdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplier.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplier.<b>error</b></code><Bullet /><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierberrorbcodeerror---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplier.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplier.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplier.<b>deletedAt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierbdeletedatbcodedatetime-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:o=!1}=e;const[i,s]=(0,r.useState)(o);return(0,l.kt)("details",(0,d.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&n)},u={Bullet:p,SpecifiedBy:c,Badge:m,toc:g,Details:b},k="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,d.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Supplier implements Node {\n  code: ID!\n  supplierData: SupplierData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  error: [Error!] @deprecated\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  deletedAt: DateTime\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierbcodebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Supplier.",(0,l.kt)("b",null,"code"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supplier unique code")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierbsupplierdatabcodesupplierdata-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Supplier.",(0,l.kt)("b",null,"supplierData"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/supplier-data"},(0,l.kt)("inlineCode",{parentName:"a"},"SupplierData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Extended Supplier information")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierbadvisemessagebcodeadvisemessage--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Supplier.",(0,l.kt)("b",null,"adviseMessage"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,l.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplieradvisemessageblevelbcodeadvisemessagelevel--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Supplier.adviseMessage.",(0,l.kt)("b",null,"level"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,l.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierberrorbcodeerror---"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Supplier.",(0,l.kt)("b",null,"error"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/error"},(0,l.kt)("inlineCode",{parentName:"a"},"[Error!]"))," ",(0,l.kt)(m,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"deprecated from 2019-01-01. Use AdviseMessage instead"))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierbcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Supplier.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supplier creation date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierbupdatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Supplier.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supplier last update date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierbdeletedatbcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Supplier.",(0,l.kt)("b",null,"deletedAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supplier deleted date")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"node-"},(0,l.kt)("a",{parentName:"h4",href:"/api/interfaces/node"},(0,l.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/access-data"},(0,l.kt)("inlineCode",{parentName:"a"},"AccessData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/admin-mutation"},(0,l.kt)("inlineCode",{parentName:"a"},"AdminMutation"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,l.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/audit-rule-data"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditRuleData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/booking-aggregation"},(0,l.kt)("inlineCode",{parentName:"a"},"BookingAggregation"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/booking-detail"},(0,l.kt)("inlineCode",{parentName:"a"},"BookingDetail"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/flight-offer-data"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightOfferData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/flight-order-data"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightOrderData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/payment-card-data"},(0,l.kt)("inlineCode",{parentName:"a"},"PaymentCardData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/stats-aggregation-data"},(0,l.kt)("inlineCode",{parentName:"a"},"StatsAggregationData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/supplier-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"SupplierEdge"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/system-data"},(0,l.kt)("inlineCode",{parentName:"a"},"SystemData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-hotel-blacklist-data"},(0,l.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelBlacklistData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-hotel-stats-aggregation-data"},(0,l.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelStatsAggregationData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-stats-aggregation-data"},(0,l.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsAggregationData"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/unions/alert-objects-union"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertObjectsUnion"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);