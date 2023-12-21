"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19401],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=s(a),m=r,u=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33853:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(87462),r=a(67294),i=a(3905);const o={id:"traffic-optimization-general-metrics",title:"TrafficOptimizationGeneralMetrics",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/traffic-optimization-general-metrics",id:"objects/traffic-optimization-general-metrics",title:"TrafficOptimizationGeneralMetrics",description:"No description",source:"@site/api/objects/traffic-optimization-general-metrics.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-general-metrics",permalink:"/api/objects/traffic-optimization-general-metrics",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-general-metrics",title:"TrafficOptimizationGeneralMetrics",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationConnection",permalink:"/api/objects/traffic-optimization-connection"},next:{title:"TrafficOptimizationHotelBlacklistConnection",permalink:"/api/objects/traffic-optimization-hotel-blacklist-connection"}},s={},d=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationGeneralMetrics.<b>totalHotels</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationgeneralmetricsbtotalhotelsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationGeneralMetrics.<b>totalSearches</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationgeneralmetricsbtotalsearchesbcodeint--",level:4},{value:"Member Of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[c,s]=(0,r.useState)(l);return(0,i.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},b={Bullet:d,SpecifiedBy:f,Badge:p,toc:m,Details:u},g="wrapper";function y(e){let{components:t,...a}=e;return(0,i.kt)(g,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationGeneralMetrics {\n  totalHotels: Int!\n  totalSearches: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationgeneralmetricsbtotalhotelsbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationGeneralMetrics.",(0,i.kt)("b",null,"totalHotels"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationgeneralmetricsbtotalsearchesbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationGeneralMetrics.",(0,i.kt)("b",null,"totalSearches"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member Of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-recommendation-all-accesses-data"},(0,i.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationRecommendationAllAccessesData"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);