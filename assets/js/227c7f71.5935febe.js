"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27172],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},f=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return a?n.createElement(m,l(l({ref:t},f),{},{components:a})):n.createElement(m,l({ref:t},f))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1895:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>f,Details:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(87462),r=a(67294),o=a(3905);const l={id:"traffic-type",title:"TrafficType",hide_table_of_contents:!1},i=void 0,c={unversionedId:"enums/traffic-type",id:"enums/traffic-type",title:"TrafficType",description:"Posible source of ratios",source:"@site/api/enums/traffic-type.mdx",sourceDirName:"enums",slug:"/enums/traffic-type",permalink:"/api/enums/traffic-type",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-type",title:"TrafficType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationStatsDataGroupBy",permalink:"/api/enums/traffic-optimization-stats-data-group-by"},next:{title:"TransportType",permalink:"/api/enums/transport-type"}},p={},f=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>TrafficType.<b>BASIC</b></code>",id:"code-style-fontweight-normal-traffictypebbasicbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TrafficType.<b>SPEED</b></code>",id:"code-style-fontweight-normal-traffictypebspeedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TrafficType.<b>SCHEDULER</b></code>",id:"code-style-fontweight-normal-traffictypebschedulerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TrafficType.<b>OPTIMIZED</b></code>",id:"code-style-fontweight-normal-traffictypeboptimizedbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[c,p]=(0,r.useState)(i);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},y={Bullet:f,SpecifiedBy:s,Badge:d,toc:u,Details:m},b="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Posible source of ratios"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TrafficType {\n  BASIC\n  SPEED\n  SCHEDULER\n  OPTIMIZED\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-traffictypebbasicbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficType.",(0,o.kt)("b",null,"BASIC")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ratios calculated from traffic between buyer and seller")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-traffictypebspeedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficType.",(0,o.kt)("b",null,"SPEED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ratios calculated from traffic between buyer and Speed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-traffictypebschedulerbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficType.",(0,o.kt)("b",null,"SCHEDULER")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ratios calculated from traffic between buyer and Static information cache")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-traffictypeboptimizedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficType.",(0,o.kt)("b",null,"OPTIMIZED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ratios calculated from traffic between TGX s caches and seller")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/logging-legacy-data"},(0,o.kt)("inlineCode",{parentName:"a"},"LoggingLegacyData"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/logging-legacy-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"LoggingLegacyFilterInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/operation-detailed"},(0,o.kt)("inlineCode",{parentName:"a"},"OperationDetailed"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/stats-aggregation-connection-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsAggregationConnectionWhereInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/stats-aggregation-data"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsAggregationData"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/stats-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsFilterInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);