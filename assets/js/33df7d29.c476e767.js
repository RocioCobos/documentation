"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),i=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(r.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(n),b=a,m=p["".concat(r,".").concat(b)]||p[b]||g[b]||l;return n?o.createElement(m,c(c({ref:t},s),{},{components:n})):o.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=b;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[p]="string"==typeof e?e:a,c[1]=d;for(var i=2;i<l;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7493:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>r,toc:()=>b});var o=n(87462),a=n(67294),l=n(3905);const c={id:"speed-connection-collection",title:"SpeedConnectionCollection",hide_table_of_contents:!1},d=void 0,r={unversionedId:"objects/speed-connection-collection",id:"objects/speed-connection-collection",title:"SpeedConnectionCollection",description:"No description",source:"@site/api/objects/speed-connection-collection.mdx",sourceDirName:"objects",slug:"/objects/speed-connection-collection",permalink:"/api/objects/speed-connection-collection",draft:!1,tags:[],version:"current",frontMatter:{id:"speed-connection-collection",title:"SpeedConnectionCollection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SpeedConfiguration",permalink:"/api/objects/speed-configuration"},next:{title:"SpeedConnectionData",permalink:"/api/objects/speed-connection-data"}},i={},s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedConnectionCollection.<b>edges</b></code><Bullet /><code>[SpeedConnectionEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-speedconnectioncollectionbedgesbcodespeedconnectionedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedConnectionCollection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-speedconnectioncollectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedConnectionCollection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-speedconnectioncollectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:d=!1}=e;const[r,i]=(0,a.useState)(d);return(0,l.kt)("details",(0,o.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&c)},u={Bullet:s,SpecifiedBy:p,Badge:g,toc:b,Details:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type SpeedConnectionCollection {\n  edges: [SpeedConnectionEdge]\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-speedconnectioncollectionbedgesbcodespeedconnectionedge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnectionCollection.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/speed-connection-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[SpeedConnectionEdge]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-speedconnectioncollectionbadvisemessagebcodeadvisemessage--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnectionCollection.",(0,l.kt)("b",null,"adviseMessage"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,l.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-speedconnectioncollectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnectionCollection.adviseMessage.",(0,l.kt)("b",null,"level"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,l.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-speedconnectioncollectionbtotalcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SpeedConnectionCollection.",(0,l.kt)("b",null,"totalCount"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/speed-query"},(0,l.kt)("inlineCode",{parentName:"a"},"SpeedQuery"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);