"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),r=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=r(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,d=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=r(n),b=o,g=p["".concat(s,".").concat(b)]||p[b]||m[b]||d;return n?a.createElement(g,c(c({ref:t},i),{},{components:n})):a.createElement(g,c({ref:t},i))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=n.length,c=new Array(d);c[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var r=2;r<d;r++)c[r]=n[r];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},69252:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>b});var a=n(87462),o=n(67294),d=n(3905);const c={id:"speed-connection",title:"SpeedConnection",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/speed-connection",id:"objects/speed-connection",title:"SpeedConnection",description:"No description",source:"@site/api/objects/speed-connection.mdx",sourceDirName:"objects",slug:"/objects/speed-connection",permalink:"/api/objects/speed-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"speed-connection",title:"SpeedConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SpeedConnectionEdge",permalink:"/api/objects/speed-connection-edge"},next:{title:"SpeedHistoricalAction",permalink:"/api/objects/speed-historical-action"}},r={},i=()=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(o.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedConnection.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-speedconnectionbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedConnection.<b>speedConnectionData</b></code><Bullet /><code>SpeedConnectionData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-speedconnectionbspeedconnectiondatabcodespeedconnectiondata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedConnection.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-speedconnectionbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedConnection.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-speedconnectionbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-speedconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:"Member Of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[s,r]=(0,o.useState)(l);return(0,d.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&c)},u={Bullet:i,SpecifiedBy:p,Badge:m,toc:b,Details:g},y="wrapper";function f(e){let{components:t,...n}=e;return(0,d.kt)(y,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type SpeedConnection {\n  code: ID!\n  speedConnectionData: SpeedConnectionData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-speedconnectionbcodebcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnection.",(0,d.kt)("b",null,"code"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-speedconnectionbspeedconnectiondatabcodespeedconnectiondata-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnection.",(0,d.kt)("b",null,"speedConnectionData"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/speed-connection-data"},(0,d.kt)("inlineCode",{parentName:"a"},"SpeedConnectionData"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-speedconnectionbcreatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnection.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-speedconnectionbupdatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnection.",(0,d.kt)("b",null,"updatedAt"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-speedconnectionbadvisemessagebcodeadvisemessage--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnection.",(0,d.kt)("b",null,"adviseMessage"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-speedconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnection.adviseMessage.",(0,d.kt)("b",null,"level"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,d.kt)("h3",{id:"member-of"},"Member Of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/objects/speed-connection-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"SpeedConnectionEdge"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/speed-mutation"},(0,d.kt)("inlineCode",{parentName:"a"},"SpeedMutation"))," ",(0,d.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);