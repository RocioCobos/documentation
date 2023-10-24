"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90075],{3905:(t,e,a)=>{a.d(e,{Zo:()=>f,kt:()=>g});var i=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,o=function(t,e){if(null==t)return{};var a,i,o={},n=Object.keys(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var r=i.createContext({}),s=function(t){var e=i.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},f=function(t){var e=s(t.components);return i.createElement(r.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,r=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),d=s(a),p=o,g=d["".concat(r,".").concat(p)]||d[p]||m[p]||n;return a?i.createElement(g,c(c({ref:e},f),{},{components:a})):i.createElement(g,c({ref:e},f))}));function g(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,c=new Array(n);c[0]=p;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l[d]="string"==typeof t?t:o,c[1]=l;for(var s=2;s<n;s++)c[s]=a[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},42e3:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>m,Bullet:()=>f,Details:()=>g,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var i=a(87462),o=a(67294),n=a(3905);const c={id:"traffic-optimization-query",title:"TrafficOptimizationQuery",hide_table_of_contents:!1},l=void 0,r={unversionedId:"objects/traffic-optimization-query",id:"objects/traffic-optimization-query",title:"TrafficOptimizationQuery",description:"No description",source:"@site/api/objects/traffic-optimization-query.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-query",permalink:"/api/objects/traffic-optimization-query",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-query",title:"TrafficOptimizationQuery",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationOrganization",permalink:"/api/objects/traffic-optimization-organization"},next:{title:"TrafficOptimizationRecommendationAllAccessesData",permalink:"/api/objects/traffic-optimization-recommendation-all-accesses-data"}},s={},f=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:t.class},t.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.<b>allTrafficOptimizationConnections</b></code><Bullet /><code>TrafficOptimizationConnectionConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationconnectionsbcodetrafficoptimizationconnectionconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.<b>trafficOptimizationConnectionConnection</b></code><Bullet /><code>TrafficOptimizationConnectionConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationquerybtrafficoptimizationconnectionconnectionbcodetrafficoptimizationconnectionconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.<b>allTrafficOptimizationAccessHotelBlacklist</b></code><Bullet /><code>TrafficOptimizationHotelBlacklistConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationaccesshotelblacklistbcodetrafficoptimizationhotelblacklistconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.allTrafficOptimizationAccessHotelBlacklist.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationaccesshotelblacklistbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.allTrafficOptimizationAccessHotelBlacklist.<b>after</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationaccesshotelblacklistbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.<b>allTrafficOptimizationAllAccessesHotelBlacklistStats</b></code><Bullet /><code>TrafficOptimizationStatsAllAccessesHotelBlacklist!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationallaccesseshotelblackliststatsbcodetrafficoptimizationstatsallaccesseshotelblacklist--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.<b>allTrafficOptimizationAccessHotelBlacklistStats</b></code><Bullet /><code>TrafficOptimizationStatsAccessHotelBlacklist!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationaccesshotelblackliststatsbcodetrafficoptimizationstatsaccesshotelblacklist--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.<b>allTrafficOptimizationAllAccessesHotelBlacklist</b></code><Bullet /><code>TrafficOptimizationHotelBlacklistConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationallaccesseshotelblacklistbcodetrafficoptimizationhotelblacklistconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.allTrafficOptimizationAllAccessesHotelBlacklist.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationallaccesseshotelblacklistbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.allTrafficOptimizationAllAccessesHotelBlacklist.<b>after</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationallaccesseshotelblacklistbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.<b>allTrafficOptimizationAllAccessesRecommendations</b></code><Bullet /><code>TrafficOptimizationRecommendationsAllAccesses!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationallaccessesrecommendationsbcodetrafficoptimizationrecommendationsallaccesses--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.allTrafficOptimizationAllAccessesRecommendations.<b>first</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationallaccessesrecommendationsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.<b>getTrafficOptimizationAggregationStats</b></code><Bullet /><code>TrafficOptimizationStatsAggregationConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationquerybgettrafficoptimizationaggregationstatsbcodetrafficoptimizationstatsaggregationconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationQuery.<b>getTrafficOptimizationAggregationHotelStats</b></code><Bullet /><code>TrafficOptimizationHotelStatsAggregationConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationquerybgettrafficoptimizationaggregationhotelstatsbcodetrafficoptimizationhotelstatsaggregationconnection--",level:4},{value:"Returned by",id:"returned-by",level:3}],g=t=>{let{dataOpen:e,dataClose:a,children:c,startOpen:l=!1}=t;const[r,s]=(0,o.useState)(l);return(0,n.kt)("details",(0,i.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:t=>{t.preventDefault(),s((t=>!t))},style:{listStyle:"none"}},r?e:a),r&&c)},b={Bullet:f,SpecifiedBy:d,Badge:m,toc:p,Details:g},u="wrapper";function k(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,i.Z)({},b,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationQuery {\n  allTrafficOptimizationConnections(\n    where: TrafficOptimizationConnectionWhereInput!\n  ): TrafficOptimizationConnectionConnection!\n  trafficOptimizationConnectionConnection(\n    where: TrafficOptimizationConnectionConnectionWhereInput\n  ): TrafficOptimizationConnectionConnection!\n  allTrafficOptimizationAccessHotelBlacklist(\n    where: TrafficOptimizationAccessHotelBlacklistWhereInput\n    first: Int\n    after: String\n  ): TrafficOptimizationHotelBlacklistConnection!\n  allTrafficOptimizationAllAccessesHotelBlacklistStats(\n    where: TrafficOptimizationAllAccessesHotelBlacklistStatsWhereInput\n  ): TrafficOptimizationStatsAllAccessesHotelBlacklist!\n  allTrafficOptimizationAccessHotelBlacklistStats(\n    where: TrafficOptimizationAccessHotelBlacklistStatsWhereInput\n  ): TrafficOptimizationStatsAccessHotelBlacklist!\n  allTrafficOptimizationAllAccessesHotelBlacklist(\n    where: TrafficOptimizationAllAccessesHotelBlacklistWhereInput\n    first: Int\n    after: String\n  ): TrafficOptimizationHotelBlacklistConnection!\n  allTrafficOptimizationAllAccessesRecommendations(\n    where: TrafficOptimizationAllAccessesRecommendationsWhereInput\n    first: Int\n  ): TrafficOptimizationRecommendationsAllAccesses!\n  getTrafficOptimizationAggregationStats(\n    where: TrafficOptimizationAggregationStatsConnectionWhereInput!\n  ): TrafficOptimizationStatsAggregationConnection!\n  getTrafficOptimizationAggregationHotelStats(\n    where: TrafficOptimizationAggregationHotelStatsConnectionWhereInput!\n  ): TrafficOptimizationHotelStatsAggregationConnection!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationconnectionsbcodetrafficoptimizationconnectionconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.",(0,n.kt)("b",null,"allTrafficOptimizationConnections"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-connection-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConnectionConnection!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationconnectionsbwherebcodetrafficoptimizationconnectionwhereinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationConnections.",(0,n.kt)("b",null,"where"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-connection-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConnectionWhereInput!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationquerybtrafficoptimizationconnectionconnectionbcodetrafficoptimizationconnectionconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.",(0,n.kt)("b",null,"trafficOptimizationConnectionConnection"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-connection-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConnectionConnection!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Return traffic optimization configuration"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationquerytrafficoptimizationconnectionconnectionbwherebcodetrafficoptimizationconnectionconnectionwhereinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.trafficOptimizationConnectionConnection.",(0,n.kt)("b",null,"where"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-connection-connection-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConnectionConnectionWhereInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationaccesshotelblacklistbcodetrafficoptimizationhotelblacklistconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.",(0,n.kt)("b",null,"allTrafficOptimizationAccessHotelBlacklist"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-hotel-blacklist-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelBlacklistConnection!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Return blacklist hotels of Accesses"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationaccesshotelblacklistbwherebcodetrafficoptimizationaccesshotelblacklistwhereinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAccessHotelBlacklist.",(0,n.kt)("b",null,"where"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-access-hotel-blacklist-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAccessHotelBlacklistWhereInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationaccesshotelblacklistbfirstbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAccessHotelBlacklist.",(0,n.kt)("b",null,"first"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationaccesshotelblacklistbafterbcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAccessHotelBlacklist.",(0,n.kt)("b",null,"after"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationallaccesseshotelblackliststatsbcodetrafficoptimizationstatsallaccesseshotelblacklist--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.",(0,n.kt)("b",null,"allTrafficOptimizationAllAccessesHotelBlacklistStats"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-stats-all-accesses-hotel-blacklist"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsAllAccessesHotelBlacklist!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Return all unique blacklist hotels of Connections"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationallaccesseshotelblackliststatsbwherebcodetrafficoptimizationallaccesseshotelblackliststatswhereinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAllAccessesHotelBlacklistStats.",(0,n.kt)("b",null,"where"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-all-accesses-hotel-blacklist-stats-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAllAccessesHotelBlacklistStatsWhereInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationaccesshotelblackliststatsbcodetrafficoptimizationstatsaccesshotelblacklist--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.",(0,n.kt)("b",null,"allTrafficOptimizationAccessHotelBlacklistStats"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-stats-access-hotel-blacklist"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsAccessHotelBlacklist!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Return all unique blacklist hotels of accesses"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationaccesshotelblackliststatsbwherebcodetrafficoptimizationaccesshotelblackliststatswhereinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAccessHotelBlacklistStats.",(0,n.kt)("b",null,"where"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-access-hotel-blacklist-stats-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAccessHotelBlacklistStatsWhereInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationallaccesseshotelblacklistbcodetrafficoptimizationhotelblacklistconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.",(0,n.kt)("b",null,"allTrafficOptimizationAllAccessesHotelBlacklist"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-hotel-blacklist-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelBlacklistConnection!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Return blacklist hotels of Connections"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationallaccesseshotelblacklistbwherebcodetrafficoptimizationallaccesseshotelblacklistwhereinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAllAccessesHotelBlacklist.",(0,n.kt)("b",null,"where"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-all-accesses-hotel-blacklist-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAllAccessesHotelBlacklistWhereInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationallaccesseshotelblacklistbfirstbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAllAccessesHotelBlacklist.",(0,n.kt)("b",null,"first"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationallaccesseshotelblacklistbafterbcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAllAccessesHotelBlacklist.",(0,n.kt)("b",null,"after"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationqueryballtrafficoptimizationallaccessesrecommendationsbcodetrafficoptimizationrecommendationsallaccesses--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.",(0,n.kt)("b",null,"allTrafficOptimizationAllAccessesRecommendations"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-recommendations-all-accesses"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationRecommendationsAllAccesses!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Return recommendations of Connections"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationallaccessesrecommendationsbwherebcodetrafficoptimizationallaccessesrecommendationswhereinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAllAccessesRecommendations.",(0,n.kt)("b",null,"where"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-all-accesses-recommendations-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAllAccessesRecommendationsWhereInput"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationqueryalltrafficoptimizationallaccessesrecommendationsbfirstbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.allTrafficOptimizationAllAccessesRecommendations.",(0,n.kt)("b",null,"first"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationquerybgettrafficoptimizationaggregationstatsbcodetrafficoptimizationstatsaggregationconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.",(0,n.kt)("b",null,"getTrafficOptimizationAggregationStats"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-stats-aggregation-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsAggregationConnection!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the aggregated stats registered for a specified input (buyer, seller, access or a combination between these)"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationquerygettrafficoptimizationaggregationstatsbwherebcodetrafficoptimizationaggregationstatsconnectionwhereinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.getTrafficOptimizationAggregationStats.",(0,n.kt)("b",null,"where"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-aggregation-stats-connection-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAggregationStatsConnectionWhereInput!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationquerybgettrafficoptimizationaggregationhotelstatsbcodetrafficoptimizationhotelstatsaggregationconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.",(0,n.kt)("b",null,"getTrafficOptimizationAggregationHotelStats"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-hotel-stats-aggregation-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelStatsAggregationConnection!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the aggregated hotel stats registered for a specified input (buyer, seller, access or a combination between these)"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationquerygettrafficoptimizationaggregationhotelstatsbwherebcodetrafficoptimizationaggregationhotelstatsconnectionwhereinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationQuery.getTrafficOptimizationAggregationHotelStats.",(0,n.kt)("b",null,"where"))),(0,n.kt)(f,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAggregationHotelStatsConnectionWhereInput!"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/queries/traffic-optimization"},(0,n.kt)("inlineCode",{parentName:"a"},"trafficOptimization"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);