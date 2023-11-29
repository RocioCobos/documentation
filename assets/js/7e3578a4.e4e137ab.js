"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),l=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(r.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=l(a),m=o,g=f["".concat(r,".").concat(m)]||f[m]||p[m]||i;return a?n.createElement(g,c(c({ref:t},d),{},{components:a})):n.createElement(g,c({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,c=new Array(i);c[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[f]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62009:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>r,toc:()=>m});var n=a(87462),o=a(67294),i=a(3905);const c={id:"traffic-optimization-access-connection",title:"TrafficOptimizationAccessConnection",hide_table_of_contents:!1},s=void 0,r={unversionedId:"objects/traffic-optimization-access-connection",id:"objects/traffic-optimization-access-connection",title:"TrafficOptimizationAccessConnection",description:"No description",source:"@site/api/objects/traffic-optimization-access-connection.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-access-connection",permalink:"/api/objects/traffic-optimization-access-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-access-connection",title:"TrafficOptimizationAccessConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Timeout",permalink:"/api/objects/timeout"},next:{title:"TrafficOptimizationAccessData",permalink:"/api/objects/traffic-optimization-access-data"}},l={},d=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessConnection.<b>edges</b></code><Bullet /><code>[TrafficOptimizationAccessEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationaccessconnectionbedgesbcodetrafficoptimizationaccessedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationaccessconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationAccessConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationaccessconnectionbtotalcountbcodeint--",level:4},{value:"Member Of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:s=!1}=e;const[r,l]=(0,o.useState)(s);return(0,i.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&c)},b={Bullet:d,SpecifiedBy:f,Badge:p,toc:m,Details:g},u="wrapper";function y(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationAccessConnection {\n  edges: [TrafficOptimizationAccessEdge]\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccessconnectionbedgesbcodetrafficoptimizationaccessedge--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessConnection.",(0,i.kt)("b",null,"edges"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-access-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[TrafficOptimizationAccessEdge]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccessconnectionbadvisemessagebcodeadvisemessage--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessConnection.",(0,i.kt)("b",null,"adviseMessage"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationaccessconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessConnection.adviseMessage.",(0,i.kt)("b",null,"level"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationaccessconnectionbtotalcountbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationAccessConnection.",(0,i.kt)("b",null,"totalCount"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,i.kt)("h3",{id:"member-of"},"Member Of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-connection-data"},(0,i.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConnectionData"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);