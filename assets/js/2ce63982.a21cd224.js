"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(f,r(r({ref:t},g),{},{components:n})):a.createElement(f,r({ref:t},g))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4761:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>g,Details:()=>f,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(87462),i=n(67294),o=n(3905);const r={id:"traffic-optimization-aggregation-hotel-stats-connection-where-input",title:"TrafficOptimizationAggregationHotelStatsConnectionWhereInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input",id:"inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input",title:"TrafficOptimizationAggregationHotelStatsConnectionWhereInput",description:"No description",source:"@site/api/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input",permalink:"/api/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-aggregation-hotel-stats-connection-where-input",title:"TrafficOptimizationAggregationHotelStatsConnectionWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationAccessHotelBlacklistWhereInput",permalink:"/api/inputs/traffic-optimization-access-hotel-blacklist-where-input"},next:{title:"TrafficOptimizationAggregationStatsConnectionWhereInput",permalink:"/api/inputs/traffic-optimization-aggregation-stats-connection-where-input"}},s={},g=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>timeRange</b></code><Bullet /><code>TimeRangeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbtimerangebcodetimerangeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>buyer_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbbuyer_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>seller_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbseller_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>access_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbaccess_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>supplier_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbsupplier_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>mode</b></code><Bullet /><code>ModeType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbmodebcodemodetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAggregationHotelStatsConnectionWhereInput.<b>groupBy</b></code><Bullet /><code>TrafficOptimizationStatsAggregationGroupByInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbgroupbybcodetrafficoptimizationstatsaggregationgroupbyinput-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[c,s]=(0,i.useState)(l);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},m={Bullet:g,SpecifiedBy:d,Badge:p,toc:u,Details:f},b="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input TrafficOptimizationAggregationHotelStatsConnectionWhereInput {\n  timeRange: TimeRangeInput!\n  buyer_in: [ID!]\n  seller_in: [ID!]\n  access_in: [ID!]\n  supplier_in: [ID!]\n  mode: ModeType!\n  groupBy: TrafficOptimizationStatsAggregationGroupByInput\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbtimerangebcodetimerangeinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,o.kt)("b",null,"timeRange"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/time-range-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TimeRangeInput!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbbuyer_inbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,o.kt)("b",null,"buyer_in"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbseller_inbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,o.kt)("b",null,"seller_in"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbaccess_inbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,o.kt)("b",null,"access_in"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbsupplier_inbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,o.kt)("b",null,"supplier_in"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbmodebcodemodetype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,o.kt)("b",null,"mode"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/mode-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ModeType!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaggregationhotelstatsconnectionwhereinputbgroupbybcodetrafficoptimizationstatsaggregationgroupbyinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAggregationHotelStatsConnectionWhereInput.",(0,o.kt)("b",null,"groupBy"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/traffic-optimization-stats-aggregation-group-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsAggregationGroupByInput"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}h.isMDXComponent=!0}}]);