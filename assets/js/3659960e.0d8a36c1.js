"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),r=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=r(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=r(n),g=o,p=m["".concat(i,".").concat(g)]||m[g]||b[g]||c;return n?a.createElement(p,l(l({ref:t},s),{},{components:n})):a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=g;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[m]="string"==typeof e?e:o,l[1]=d;for(var r=2;r<c;r++)l[r]=n[r];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},23309:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>m,assets:()=>r,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=n(87462),o=n(67294),c=n(3905);const l={id:"connection",title:"Connection",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/connection",id:"objects/connection",title:"Connection",description:"Connection identifies who is making the request and holds the configuration assigned to it.",source:"@site/api/objects/connection.mdx",sourceDirName:"objects",slug:"/objects/connection",permalink:"/api/objects/connection",draft:!1,tags:[],version:"current",frontMatter:{id:"connection",title:"Connection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ConnectionEdge",permalink:"/api/objects/connection-edge"},next:{title:"ContactInfo",permalink:"/api/objects/contact-info"}},r={},s=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Connection.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-connectionbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Connection.<b>connectionData</b></code><Bullet /><code>ConnectionData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-connectionbconnectiondatabcodeconnectiondata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Connection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-connectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Connection.<b>createdAt</b></code><Bullet /><code>Time!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-connectionbcreatedatbcodetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Connection.<b>updatedAt</b></code><Bullet /><code>Time!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-connectionbupdatedatbcodetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Connection.<b>deletedAt</b></code><Bullet /><code>Time</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-connectionbdeletedatbcodetime-",level:4},{value:"Member Of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:d=!1}=e;const[i,r]=(0,o.useState)(d);return(0,c.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},u={Bullet:s,SpecifiedBy:m,Badge:b,toc:g,Details:p},k="wrapper";function f(e){let{components:t,...n}=e;return(0,c.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Connection identifies who is making the request and holds the configuration assigned to it."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type Connection {\n  code: ID!\n  connectionData: ConnectionData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: Time!\n  updatedAt: Time!\n  deletedAt: Time\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionbcodebcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.",(0,c.kt)("b",null,"code"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Connection unique code")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionbconnectiondatabcodeconnectiondata-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.",(0,c.kt)("b",null,"connectionData"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/connection-data"},(0,c.kt)("inlineCode",{parentName:"a"},"ConnectionData"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Extended Connection information")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionbadvisemessagebcodeadvisemessage--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.",(0,c.kt)("b",null,"adviseMessage"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,c.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-connectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.adviseMessage.",(0,c.kt)("b",null,"level"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionbcreatedatbcodetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.",(0,c.kt)("b",null,"createdAt"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/time"},(0,c.kt)("inlineCode",{parentName:"a"},"Time!"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Connection creation date")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionbupdatedatbcodetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.",(0,c.kt)("b",null,"updatedAt"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/time"},(0,c.kt)("inlineCode",{parentName:"a"},"Time!"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Connection last update date")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionbdeletedatbcodetime-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.",(0,c.kt)("b",null,"deletedAt"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/time"},(0,c.kt)("inlineCode",{parentName:"a"},"Time"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Connection deleted date")),(0,c.kt)("h3",{id:"member-of"},"Member Of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/connection-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"ConnectionEdge"))," ",(0,c.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);