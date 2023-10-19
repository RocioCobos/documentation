"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var g=n.createContext({}),c=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(g.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,g=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=c(a),m=o,p=s["".concat(g,".").concat(m)]||s[m]||b[m]||l;return a?n.createElement(p,r(r({ref:t},i),{},{components:a})):n.createElement(p,r({ref:t},i))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var d={};for(var g in t)hasOwnProperty.call(t,g)&&(d[g]=t[g]);d.originalType=e,d[s]="string"==typeof e?e:o,r[1]=d;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15524:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>g,toc:()=>m});var n=a(87462),o=a(67294),l=a(3905);const r={id:"logging-data",title:"LoggingData",hide_table_of_contents:!1},d=void 0,g={unversionedId:"objects/logging-data",id:"objects/logging-data",title:"LoggingData",description:"No description",source:"@site/api/objects/logging-data.mdx",sourceDirName:"objects",slug:"/objects/logging-data",permalink:"/api/objects/logging-data",draft:!1,tags:[],version:"current",frontMatter:{id:"logging-data",title:"LoggingData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Location",permalink:"/api/objects/location"},next:{title:"LoggingLegacyConnection",permalink:"/api/objects/logging-legacy-connection"}},c={},i=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingData.<b>product</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-loggingdatabproductbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingData.<b>timestamp</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-loggingdatabtimestampbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingData.<b>level</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-loggingdatablevelbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingData.<b>message</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-loggingdatabmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingData.<b>tgx</b></code><Bullet /><code>TGX!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-loggingdatabtgxbcodetgx--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingData.<b>document</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-loggingdatabdocumentbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[g,c]=(0,o.useState)(d);return(0,l.kt)("details",(0,n.Z)({},g?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},g?t:a),g&&r)},u={Bullet:i,SpecifiedBy:s,Badge:b,toc:m,Details:p},y="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(y,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type LoggingData {\n  product: String!\n  timestamp: DateTime!\n  level: ID!\n  message: String!\n  tgx: TGX!\n  document: String!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loggingdatabproductbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingData.",(0,l.kt)("b",null,"product"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Index or Product of the Log")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loggingdatabtimestampbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingData.",(0,l.kt)("b",null,"timestamp"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Date of log")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loggingdatablevelbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingData.",(0,l.kt)("b",null,"level"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Level of log")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loggingdatabmessagebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingData.",(0,l.kt)("b",null,"message"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Message of log")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loggingdatabtgxbcodetgx--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingData.",(0,l.kt)("b",null,"tgx"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/tgx"},(0,l.kt)("inlineCode",{parentName:"a"},"TGX!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Mandatory fields of log")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-loggingdatabdocumentbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingData.",(0,l.kt)("b",null,"document"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Document JSON")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/logging"},(0,l.kt)("inlineCode",{parentName:"a"},"Logging"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);