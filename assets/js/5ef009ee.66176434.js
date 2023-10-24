"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84303],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var g=n.createContext({}),r=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=r(e.components);return n.createElement(g.Provider,{value:t},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,g=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=r(a),b=o,p=i["".concat(g,".").concat(b)]||i[b]||y[b]||l;return a?n.createElement(p,d(d({ref:t},s),{},{components:a})):n.createElement(p,d({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,d=new Array(l);d[0]=b;var c={};for(var g in t)hasOwnProperty.call(t,g)&&(c[g]=t[g]);c.originalType=e,c[i]="string"==typeof e?e:o,d[1]=c;for(var r=2;r<l;r++)d[r]=a[r];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},35968:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>i,assets:()=>r,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var n=a(87462),o=a(67294),l=a(3905);const d={id:"logging-legacy-data",title:"LoggingLegacyData",hide_table_of_contents:!1},c=void 0,g={unversionedId:"objects/logging-legacy-data",id:"objects/logging-legacy-data",title:"LoggingLegacyData",description:"No description",source:"@site/api/objects/logging-legacy-data.mdx",sourceDirName:"objects",slug:"/objects/logging-legacy-data",permalink:"/api/objects/logging-legacy-data",draft:!1,tags:[],version:"current",frontMatter:{id:"logging-legacy-data",title:"LoggingLegacyData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"LoggingLegacyConnection",permalink:"/api/objects/logging-legacy-connection"},next:{title:"LoggingLegacyEdge",permalink:"/api/objects/logging-legacy-edge"}},r={},s=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-logginglegacydatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>timestamp</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-logginglegacydatabtimestampbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>sessionID</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-logginglegacydatabsessionidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>access</b></code><Bullet /><code>Access!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-logginglegacydatabaccessbcodeaccess--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>client</b></code><Bullet /><code>Client!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-logginglegacydatabclientbcodeclient--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>operation</b></code><Bullet /><code>Operation!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-logginglegacydataboperationbcodeoperation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>trafficType</b></code><Bullet /><code>TrafficType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-logginglegacydatabtraffictypebcodetraffictype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>cloudEnvironment</b></code><Bullet /><code>Environment!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-logginglegacydatabcloudenvironmentbcodeenvironment--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>statusType</b></code><Bullet /><code>StatsInfoTypes!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-logginglegacydatabstatustypebcodestatsinfotypes--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>errorCode</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-logginglegacydataberrorcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>execTime</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-logginglegacydatabexectimebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>url</b></code><Bullet /><code>URI!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-logginglegacydataburlbcodeuri--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LoggingLegacyData.<b>unencryptedURL</b></code><Bullet /><code>URI!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-logginglegacydatabunencryptedurlbcodeuri--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:c=!1}=e;const[g,r]=(0,o.useState)(c);return(0,l.kt)("details",(0,n.Z)({},g?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},g?t:a),g&&d)},m={Bullet:s,SpecifiedBy:i,Badge:y,toc:b,Details:p},u="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type LoggingLegacyData {\n  code: ID!\n  timestamp: DateTime!\n  sessionID: ID!\n  access: Access!\n  client: Client!\n  operation: Operation!\n  trafficType: TrafficType!\n  cloudEnvironment: Environment!\n  statusType: StatsInfoTypes!\n  errorCode: ID!\n  execTime: Int!\n  url: URI!\n  unencryptedURL: URI!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabcodebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"code"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabtimestampbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"timestamp"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Date of search")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabsessionidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"sessionID"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return session id")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabaccessbcodeaccess--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"access"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/access"},(0,l.kt)("inlineCode",{parentName:"a"},"Access!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Owner access")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabclientbcodeclient--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"client"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/client"},(0,l.kt)("inlineCode",{parentName:"a"},"Client!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Owner client")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydataboperationbcodeoperation--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"operation"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/operation"},(0,l.kt)("inlineCode",{parentName:"a"},"Operation!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return group operation")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabtraffictypebcodetraffictype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"trafficType"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/traffic-type"},(0,l.kt)("inlineCode",{parentName:"a"},"TrafficType!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Responsible for the execution of the this stats. If TRUE then cache, else client")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabcloudenvironmentbcodeenvironment--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"cloudEnvironment"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/environment"},(0,l.kt)("inlineCode",{parentName:"a"},"Environment!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return environment")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabstatustypebcodestatsinfotypes--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"statusType"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/stats-info-types"},(0,l.kt)("inlineCode",{parentName:"a"},"StatsInfoTypes!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"return hub status")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydataberrorcodebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"errorCode"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return if exist error code")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabexectimebcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"execTime"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return execTime")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydataburlbcodeuri--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"url"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/uri"},(0,l.kt)("inlineCode",{parentName:"a"},"URI!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return the URL to download")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-logginglegacydatabunencryptedurlbcodeuri--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"LoggingLegacyData.",(0,l.kt)("b",null,"unencryptedURL"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/uri"},(0,l.kt)("inlineCode",{parentName:"a"},"URI!"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Return the unencrypted URL to download")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/logging-legacy"},(0,l.kt)("inlineCode",{parentName:"a"},"LoggingLegacy"))," ",(0,l.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);