"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,g=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?o.createElement(g,c(c({ref:t},d),{},{components:n})):o.createElement(g,c({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[f]="string"==typeof e?e:a,c[1]=r;for(var s=2;s<i;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88523:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var o=n(87462),a=n(67294),i=n(3905);const c={id:"traffic-optimization-connection-connection",title:"TrafficOptimizationConnectionConnection",hide_table_of_contents:!1},r=void 0,l={unversionedId:"objects/traffic-optimization-connection-connection",id:"objects/traffic-optimization-connection-connection",title:"TrafficOptimizationConnectionConnection",description:"No description",source:"@site/api/objects/traffic-optimization-connection-connection.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-connection-connection",permalink:"/api/objects/traffic-optimization-connection-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-connection-connection",title:"TrafficOptimizationConnectionConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationConnectionConfiguration",permalink:"/api/objects/traffic-optimization-connection-configuration"},next:{title:"TrafficOptimizationConnectionData",permalink:"/api/objects/traffic-optimization-connection-data"}},s={},d=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnection.<b>edges</b></code><Bullet /><code>[TrafficOptimizationConnectionEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionbedgesbcodetrafficoptimizationconnectionedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:r=!1}=e;const[l,s]=(0,a.useState)(r);return(0,i.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&c)},b={Bullet:d,SpecifiedBy:f,Badge:p,toc:m,Details:g},u="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationConnectionConnection {\n  edges: [TrafficOptimizationConnectionEdge]\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionbedgesbcodetrafficoptimizationconnectionedge--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnection.",(0,i.kt)("b",null,"edges"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-connection-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[TrafficOptimizationConnectionEdge]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionbadvisemessagebcodeadvisemessage--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnection.",(0,i.kt)("b",null,"adviseMessage"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnection.adviseMessage.",(0,i.kt)("b",null,"level"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionbtotalcountbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnection.",(0,i.kt)("b",null,"totalCount"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-query"},(0,i.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationQuery"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);