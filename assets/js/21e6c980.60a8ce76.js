"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),l=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(r.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,k=d["".concat(r,".").concat(p)]||d[p]||b[p]||i;return n?o.createElement(k,g(g({ref:t},c),{},{components:n})):o.createElement(k,g({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,g=new Array(i);g[0]=p;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[d]="string"==typeof e?e:a,g[1]=s;for(var l=2;l<i;l++)g[l]=n[l];return o.createElement.apply(null,g)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39111:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>k,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>g,metadata:()=>r,toc:()=>p});var o=n(87462),a=n(67294),i=n(3905);const g={id:"insights-xbooking-aggregation-connection",title:"InsightsXBookingAggregationConnection",hide_table_of_contents:!1},s=void 0,r={unversionedId:"objects/insights-xbooking-aggregation-connection",id:"objects/insights-xbooking-aggregation-connection",title:"InsightsXBookingAggregationConnection",description:"Booking Aggregation",source:"@site/api/objects/insights-xbooking-aggregation-connection.mdx",sourceDirName:"objects",slug:"/objects/insights-xbooking-aggregation-connection",permalink:"/api/objects/insights-xbooking-aggregation-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"insights-xbooking-aggregation-connection",title:"InsightsXBookingAggregationConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InsightsQuery",permalink:"/api/objects/insights-query"},next:{title:"InsightsXBookingAggregationEdge",permalink:"/api/objects/insights-xbooking-aggregation-edge"}},l={},c=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),p=[{value:"Booking Aggregation",id:"booking-aggregation",level:2},{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsXBookingAggregationConnection.<b>edges</b></code><Bullet /><code>[InsightsXBookingAggregationEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-insightsxbookingaggregationconnectionbedgesbcodeinsightsxbookingaggregationedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsXBookingAggregationConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-insightsxbookingaggregationconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsXBookingAggregationConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-insightsxbookingaggregationconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:n,children:g,startOpen:s=!1}=e;const[r,l]=(0,a.useState)(s);return(0,i.kt)("details",(0,o.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&g)},m={Bullet:c,SpecifiedBy:d,Badge:b,toc:p,Details:k},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"booking-aggregation"},"Booking Aggregation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type InsightsXBookingAggregationConnection {\n  edges: [InsightsXBookingAggregationEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-insightsxbookingaggregationconnectionbedgesbcodeinsightsxbookingaggregationedge--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InsightsXBookingAggregationConnection.",(0,i.kt)("b",null,"edges"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/insights-xbooking-aggregation-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[InsightsXBookingAggregationEdge]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-insightsxbookingaggregationconnectionbpageinfobcodepageinfo--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InsightsXBookingAggregationConnection.",(0,i.kt)("b",null,"pageInfo"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-insightsxbookingaggregationconnectionbadvisemessagebcodeadvisemessage--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InsightsXBookingAggregationConnection.",(0,i.kt)("b",null,"adviseMessage"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-insightsxbookingaggregationconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InsightsXBookingAggregationConnection.adviseMessage.",(0,i.kt)("b",null,"level"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/insights-xbooking-report"},(0,i.kt)("inlineCode",{parentName:"a"},"InsightsXBookingReport"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);