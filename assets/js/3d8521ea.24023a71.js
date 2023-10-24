"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),d=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=d(e.components);return o.createElement(r.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,k=c["".concat(r,".").concat(p)]||c[p]||b[p]||i;return n?o.createElement(k,s(s({ref:t},g),{},{components:n})):o.createElement(k,s({ref:t},g))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72022:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>g,Details:()=>k,SpecifiedBy:()=>c,assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(87462),a=n(67294),i=n(3905);const s={id:"insights-xbooking-detail-connection",title:"InsightsXBookingDetailConnection",hide_table_of_contents:!1},l=void 0,r={unversionedId:"objects/insights-xbooking-detail-connection",id:"objects/insights-xbooking-detail-connection",title:"InsightsXBookingDetailConnection",description:"Booking Details",source:"@site/api/objects/insights-xbooking-detail-connection.mdx",sourceDirName:"objects",slug:"/objects/insights-xbooking-detail-connection",permalink:"/api/objects/insights-xbooking-detail-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"insights-xbooking-detail-connection",title:"InsightsXBookingDetailConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InsightsXBookingAggregation",permalink:"/api/objects/insights-xbooking-aggregation"},next:{title:"InsightsXBookingDetailEdge",permalink:"/api/objects/insights-xbooking-detail-edge"}},d={},g=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),p=[{value:"Booking Details",id:"booking-details",level:2},{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsXBookingDetailConnection.<b>edges</b></code><Bullet /><code>[InsightsXBookingDetailEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-insightsxbookingdetailconnectionbedgesbcodeinsightsxbookingdetailedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsXBookingDetailConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-insightsxbookingdetailconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsXBookingDetailConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-insightsxbookingdetailconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[r,d]=(0,a.useState)(l);return(0,i.kt)("details",(0,o.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&s)},m={Bullet:g,SpecifiedBy:c,Badge:b,toc:p,Details:k},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"booking-details"},"Booking Details"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type InsightsXBookingDetailConnection {\n  edges: [InsightsXBookingDetailEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-insightsxbookingdetailconnectionbedgesbcodeinsightsxbookingdetailedge--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InsightsXBookingDetailConnection.",(0,i.kt)("b",null,"edges"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/insights-xbooking-detail-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[InsightsXBookingDetailEdge]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-insightsxbookingdetailconnectionbpageinfobcodepageinfo--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InsightsXBookingDetailConnection.",(0,i.kt)("b",null,"pageInfo"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-insightsxbookingdetailconnectionbadvisemessagebcodeadvisemessage--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InsightsXBookingDetailConnection.",(0,i.kt)("b",null,"adviseMessage"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-insightsxbookingdetailconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InsightsXBookingDetailConnection.adviseMessage.",(0,i.kt)("b",null,"level"))),(0,i.kt)(g,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/insights-xbooking-report"},(0,i.kt)("inlineCode",{parentName:"a"},"InsightsXBookingReport"))," ",(0,i.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);