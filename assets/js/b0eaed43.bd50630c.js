"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10409],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),d=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(r.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,c=e.originalType,r=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(a),b=o,m=p["".concat(r,".").concat(b)]||p[b]||g[b]||c;return a?n.createElement(m,s(s({ref:t},i),{},{components:a})):n.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=a.length,s=new Array(c);s[0]=b;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var d=2;d<c;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},25135:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>r,toc:()=>b});var n=a(87462),o=a(67294),c=a(3905);const s={id:"access-connection",title:"AccessConnection",hide_table_of_contents:!1},l=void 0,r={unversionedId:"objects/access-connection",id:"objects/access-connection",title:"AccessConnection",description:"No description",source:"@site/api/objects/access-connection.mdx",sourceDirName:"objects",slug:"/objects/access-connection",permalink:"/api/objects/access-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"access-connection",title:"AccessConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"transport",permalink:"/api/mutations/transport"},next:{title:"AccessData",permalink:"/api/objects/access-data"}},d={},i=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccessConnection.<b>edges</b></code><Bullet /><code>[AccessEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accessconnectionbedgesbcodeaccessedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accessconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-accessconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:l=!1}=e;const[r,d]=(0,o.useState)(l);return(0,c.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&s)},u={Bullet:i,SpecifiedBy:p,Badge:g,toc:b,Details:m},f="wrapper";function y(e){let{components:t,...a}=e;return(0,c.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccessConnection {\n  edges: [AccessEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessconnectionbedgesbcodeaccessedge--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessConnection.",(0,c.kt)("b",null,"edges"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/access-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"[AccessEdge]"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessconnectionbpageinfobcodepageinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessConnection.",(0,c.kt)("b",null,"pageInfo"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessconnectionbadvisemessagebcodeadvisemessage--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessConnection.",(0,c.kt)("b",null,"adviseMessage"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,c.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-accessconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessConnection.adviseMessage.",(0,c.kt)("b",null,"level"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,c.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessconnectionbtotalcountbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessConnection.",(0,c.kt)("b",null,"totalCount"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,c.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/interfaces/group-common-data"},(0,c.kt)("inlineCode",{parentName:"a"},"GroupCommonData"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/group-data"},(0,c.kt)("inlineCode",{parentName:"a"},"GroupData"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/organization-data"},(0,c.kt)("inlineCode",{parentName:"a"},"OrganizationData"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supplier-data"},(0,c.kt)("inlineCode",{parentName:"a"},"SupplierData"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);