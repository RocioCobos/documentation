"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95880],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),g=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=g(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=g(a),p=o,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||n;return a?i.createElement(m,r(r({ref:t},c),{},{components:a})):i.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var g=2;g<n;g++)r[g]=a[g];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},95639:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>d,assets:()=>g,contentTitle:()=>s,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(87462),o=a(67294),n=a(3905);const r={id:"traffic-optimization-hotel-stats-aggregation",title:"TrafficOptimizationHotelStatsAggregation",hide_table_of_contents:!1},s=void 0,l={unversionedId:"objects/traffic-optimization-hotel-stats-aggregation",id:"objects/traffic-optimization-hotel-stats-aggregation",title:"TrafficOptimizationHotelStatsAggregation",description:"No description",source:"@site/api/objects/traffic-optimization-hotel-stats-aggregation.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-hotel-stats-aggregation",permalink:"/api/objects/traffic-optimization-hotel-stats-aggregation",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-hotel-stats-aggregation",title:"TrafficOptimizationHotelStatsAggregation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationHotelStatsAggregationEdge",permalink:"/api/objects/traffic-optimization-hotel-stats-aggregation-edge"},next:{title:"TrafficOptimizationHotelStatsData",permalink:"/api/objects/traffic-optimization-hotel-stats-data"}},g={},c=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationHotelStatsAggregation.<b>aggregationData</b></code><Bullet /><code>TrafficOptimizationHotelStatsAggregationData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationhotelstatsaggregationbaggregationdatabcodetrafficoptimizationhotelstatsaggregationdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationHotelStatsAggregation.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationhotelstatsaggregationbadvisemessagebcodeadvisemessage--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:s=!1}=e;const[l,g]=(0,o.useState)(s);return(0,n.kt)("details",(0,i.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),g((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&r)},b={Bullet:c,SpecifiedBy:d,Badge:f,toc:p,Details:m},u="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationHotelStatsAggregation {\n  aggregationData: TrafficOptimizationHotelStatsAggregationData\n  adviseMessage(level: AdviseMessageLevel): [AdviseMessage!]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationhotelstatsaggregationbaggregationdatabcodetrafficoptimizationhotelstatsaggregationdata-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationHotelStatsAggregation.",(0,n.kt)("b",null,"aggregationData"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-hotel-stats-aggregation-data"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelStatsAggregationData"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationhotelstatsaggregationbadvisemessagebcodeadvisemessage--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationHotelStatsAggregation.",(0,n.kt)("b",null,"adviseMessage"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,n.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationhotelstatsaggregationadvisemessageblevelbcodeadvisemessagelevel-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationHotelStatsAggregation.adviseMessage.",(0,n.kt)("b",null,"level"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,n.kt)("inlineCode",{parentName:"a"},"AdviseMessageLevel"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-hotel-stats-aggregation-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelStatsAggregationEdge"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);