"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89485:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),i=n(67294),r=n(3905);const o={id:"time-range-input",title:"TimeRangeInput",hide_table_of_contents:!1},l=void 0,p={unversionedId:"inputs/time-range-input",id:"inputs/time-range-input",title:"TimeRangeInput",description:"No description",source:"@site/api/inputs/time-range-input.mdx",sourceDirName:"inputs",slug:"/inputs/time-range-input",permalink:"/api/inputs/time-range-input",draft:!1,tags:[],version:"current",frontMatter:{id:"time-range-input",title:"TimeRangeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ThreeDomainSecurityInput",permalink:"/api/inputs/three-domain-security-input"},next:{title:"TimeoutInput",permalink:"/api/inputs/timeout-input"}},u={},s=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TimeRangeInput.<b>relative</b></code><Bullet /><code>RelativeInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-timerangeinputbrelativebcoderelativeinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TimeRangeInput.<b>absolute</b></code><Bullet /><code>AbsoluteInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-timerangeinputbabsolutebcodeabsoluteinput-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[p,u]=(0,i.useState)(l);return(0,r.kt)("details",(0,a.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&o)},f={Bullet:s,SpecifiedBy:c,Badge:d,toc:m,Details:g},b="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input TimeRangeInput {\n  relative: RelativeInput\n  absolute: AbsoluteInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-timerangeinputbrelativebcoderelativeinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TimeRangeInput.",(0,r.kt)("b",null,"relative"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/relative-input"},(0,r.kt)("inlineCode",{parentName:"a"},"RelativeInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use now() to query data with timestamps relative to the server\u2019s current timestamp.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-timerangeinputbabsolutebcodeabsoluteinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TimeRangeInput.",(0,r.kt)("b",null,"absolute"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/absolute-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AbsoluteInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Specify absolute time with date-time strings.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/logging-legacy-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"LoggingLegacyFilterInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/stats-aggregation-connection-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"StatsAggregationConnectionWhereInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/stats-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"StatsFilterInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/traffic-optimization-aggregation-hotel-stats-connection-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAggregationHotelStatsConnectionWhereInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/traffic-optimization-aggregation-stats-connection-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAggregationStatsConnectionWhereInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);