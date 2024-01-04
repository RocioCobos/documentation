"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),f=l(a),m=o,b=f["".concat(s,".").concat(m)]||f[m]||p[m]||n;return a?i.createElement(b,c(c({ref:t},d),{},{components:a})):i.createElement(b,c({ref:t},d))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,c=new Array(n);c[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[f]="string"==typeof e?e:o,c[1]=r;for(var l=2;l<n;l++)c[l]=a[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58633:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var i=a(87462),o=a(67294),n=a(3905);const c={id:"traffic-optimization-access-data",title:"TrafficOptimizationAccessData",hide_table_of_contents:!1},r=void 0,s={unversionedId:"objects/traffic-optimization-access-data",id:"objects/traffic-optimization-access-data",title:"TrafficOptimizationAccessData",description:"No description",source:"@site/api/objects/traffic-optimization-access-data.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-access-data",permalink:"/api/objects/traffic-optimization-access-data",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-access-data",title:"TrafficOptimizationAccessData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationAccessConnection",permalink:"/api/objects/traffic-optimization-access-connection"},next:{title:"TrafficOptimizationAccessEdge",permalink:"/api/objects/traffic-optimization-access-edge"}},l={},d=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaccessdatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessData.<b>historicalActions</b></code><Bullet /><code>TrafficOptimizationHistoricalActions</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationaccessdatabhistoricalactionsbcodetrafficoptimizationhistoricalactions-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessData.<b>configuration</b></code><Bullet /><code>TrafficOptimizationConfiguration!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationaccessdatabconfigurationbcodetrafficoptimizationconfiguration--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessData.<b>access</b></code><Bullet /><code>Access!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationaccessdatabaccessbcodeaccess--",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:r=!1}=e;const[s,l]=(0,o.useState)(r);return(0,n.kt)("details",(0,i.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&c)},u={Bullet:d,SpecifiedBy:f,Badge:p,toc:m,Details:b},g="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationAccessData {\n  code: ID!\n  historicalActions: TrafficOptimizationHistoricalActions\n  configuration: TrafficOptimizationConfiguration!\n  access: Access!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccessdatabcodebcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessData.",(0,n.kt)("b",null,"code"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccessdatabhistoricalactionsbcodetrafficoptimizationhistoricalactions-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessData.",(0,n.kt)("b",null,"historicalActions"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-historical-actions"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHistoricalActions"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccessdatabconfigurationbcodetrafficoptimizationconfiguration--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessData.",(0,n.kt)("b",null,"configuration"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-configuration"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConfiguration!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccessdatabaccessbcodeaccess--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessData.",(0,n.kt)("b",null,"access"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/access"},(0,n.kt)("inlineCode",{parentName:"a"},"Access!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member Of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-access"},(0,n.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAccess"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);