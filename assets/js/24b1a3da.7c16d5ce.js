"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,m=p["".concat(r,".").concat(b)]||p[b]||g[b]||l;return n?a.createElement(m,c(c({ref:t},s),{},{components:n})):a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=b;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var d=2;d<l;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92594:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>r,toc:()=>b});var a=n(87462),o=n(67294),l=n(3905);const c={id:"client-connection",title:"ClientConnection",hide_table_of_contents:!1},i=void 0,r={unversionedId:"objects/client-connection",id:"objects/client-connection",title:"ClientConnection",description:"Connection (list) of Clients",source:"@site/api/objects/client-connection.mdx",sourceDirName:"objects",slug:"/objects/client-connection",permalink:"/api/objects/client-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"client-connection",title:"ClientConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CheckInformation",permalink:"/api/objects/check-information"},next:{title:"ClientData",permalink:"/api/objects/client-data"}},d={},s=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ClientConnection.<b>edges</b></code><Bullet /><code>[ClientEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-clientconnectionbedgesbcodeclientedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-clientconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-clientconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-clientconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:i=!1}=e;const[r,d]=(0,o.useState)(i);return(0,l.kt)("details",(0,a.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&c)},u={Bullet:s,SpecifiedBy:p,Badge:g,toc:b,Details:m},f="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Connection (list) of Clients"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ClientConnection {\n  edges: [ClientEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-clientconnectionbedgesbcodeclientedge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ClientConnection.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/client-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[ClientEdge]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Client edges of client connection")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-clientconnectionbpageinfobcodepageinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ClientConnection.",(0,l.kt)("b",null,"pageInfo"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Page info of the connection")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-clientconnectionbadvisemessagebcodeadvisemessage--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ClientConnection.",(0,l.kt)("b",null,"adviseMessage"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,l.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-clientconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ClientConnection.adviseMessage.",(0,l.kt)("b",null,"level"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,l.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-clientconnectionbtotalcountbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ClientConnection.",(0,l.kt)("b",null,"totalCount"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,l.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/interfaces/group-common-data"},(0,l.kt)("inlineCode",{parentName:"a"},"GroupCommonData"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/group-data"},(0,l.kt)("inlineCode",{parentName:"a"},"GroupData"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/organization-data"},(0,l.kt)("inlineCode",{parentName:"a"},"OrganizationData"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/supplier-data"},(0,l.kt)("inlineCode",{parentName:"a"},"SupplierData"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);