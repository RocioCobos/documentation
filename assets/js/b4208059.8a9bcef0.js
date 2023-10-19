"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60742],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var i=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=i.createContext({}),s=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return i.createElement(r.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=l,b=p["".concat(r,".").concat(m)]||p[m]||f[m]||n;return a?i.createElement(b,o(o({ref:t},d),{},{components:a})):i.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=m;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c[p]="string"==typeof e?e:l,o[1]=c;for(var s=2;s<n;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12645:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var i=a(87462),l=a(67294),n=a(3905);const o={id:"traffic-optimization-access-hotel-blacklist-where-input",title:"TrafficOptimizationAccessHotelBlacklistWhereInput",hide_table_of_contents:!1},c=void 0,r={unversionedId:"inputs/traffic-optimization-access-hotel-blacklist-where-input",id:"inputs/traffic-optimization-access-hotel-blacklist-where-input",title:"TrafficOptimizationAccessHotelBlacklistWhereInput",description:"No description",source:"@site/api/inputs/traffic-optimization-access-hotel-blacklist-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/traffic-optimization-access-hotel-blacklist-where-input",permalink:"/api/inputs/traffic-optimization-access-hotel-blacklist-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-access-hotel-blacklist-where-input",title:"TrafficOptimizationAccessHotelBlacklistWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationAccessHotelBlacklistStatsWhereInput",permalink:"/api/inputs/traffic-optimization-access-hotel-blacklist-stats-where-input"},next:{title:"TrafficOptimizationAggregationHotelStatsConnectionWhereInput",permalink:"/api/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input"}},s={},d=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessHotelBlacklistWhereInput.<b>code_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbcode_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessHotelBlacklistWhereInput.<b>mode</b></code><Bullet /><code>ModeType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbmodebcodemodetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessHotelBlacklistWhereInput.<b>hotelCode_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbhotelcode_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessHotelBlacklistWhereInput.<b>hotelName_contains</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbhotelname_containsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessHotelBlacklistWhereInput.<b>buyer_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbbuyer_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessHotelBlacklistWhereInput.<b>seller_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbseller_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessHotelBlacklistWhereInput.<b>access_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbaccess_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessHotelBlacklistWhereInput.<b>criterias_in</b></code><Bullet /><code>[TrafficOptimizationCriteriaType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbcriterias_inbcodetrafficoptimizationcriteriatype--",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[r,s]=(0,l.useState)(c);return(0,n.kt)("details",(0,i.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&o)},u={Bullet:d,SpecifiedBy:p,Badge:f,toc:m,Details:b},h="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input TrafficOptimizationAccessHotelBlacklistWhereInput {\n  code_in: [ID!]\n  mode: ModeType!\n  hotelCode_in: [ID!]\n  hotelName_contains: [ID!]\n  buyer_in: [ID!]\n  seller_in: [ID!]\n  access_in: [ID!]\n  criterias_in: [TrafficOptimizationCriteriaType!]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbcode_inbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessHotelBlacklistWhereInput.",(0,n.kt)("b",null,"code_in"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbmodebcodemodetype--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessHotelBlacklistWhereInput.",(0,n.kt)("b",null,"mode"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/enums/mode-type"},(0,n.kt)("inlineCode",{parentName:"a"},"ModeType!"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbhotelcode_inbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessHotelBlacklistWhereInput.",(0,n.kt)("b",null,"hotelCode_in"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbhotelname_containsbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessHotelBlacklistWhereInput.",(0,n.kt)("b",null,"hotelName_contains"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbbuyer_inbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessHotelBlacklistWhereInput.",(0,n.kt)("b",null,"buyer_in"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbseller_inbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessHotelBlacklistWhereInput.",(0,n.kt)("b",null,"seller_in"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbaccess_inbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessHotelBlacklistWhereInput.",(0,n.kt)("b",null,"access_in"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccesshotelblacklistwhereinputbcriterias_inbcodetrafficoptimizationcriteriatype--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessHotelBlacklistWhereInput.",(0,n.kt)("b",null,"criterias_in"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/enums/traffic-optimization-criteria-type"},(0,n.kt)("inlineCode",{parentName:"a"},"[TrafficOptimizationCriteriaType!]"))," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null))}g.isMDXComponent=!0}}]);