"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78794],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,b=p["".concat(i,".").concat(u)]||p[u]||g[u]||r;return a?n.createElement(b,l(l({ref:t},s),{},{components:a})):n.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40076:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),o=a(67294),r=a(3905);const l={id:"supplier-connection",title:"SupplierConnection",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/supplier-connection",id:"objects/supplier-connection",title:"SupplierConnection",description:"Connection (list) of Suppliers",source:"@site/api/objects/supplier-connection.mdx",sourceDirName:"objects",slug:"/objects/supplier-connection",permalink:"/api/objects/supplier-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"supplier-connection",title:"SupplierConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Supplement",permalink:"/api/objects/supplement"},next:{title:"SupplierData",permalink:"/api/objects/supplier-data"}},c={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierConnection.<b>edges</b></code><Bullet /><code>[SupplierEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierconnectionbedgesbcodesupplieredge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierConnection.<b>error</b></code><Bullet /><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierconnectionberrorbcodeerror---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierconnectionbtotalcountbcodeint--",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[i,c]=(0,o.useState)(d);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},m={Bullet:s,SpecifiedBy:p,Badge:g,toc:u,Details:b},y="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Connection (list) of Suppliers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierConnection {\n  edges: [SupplierEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  error: [Error!] @deprecated\n  totalCount: Int!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supplierconnectionbedgesbcodesupplieredge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupplierConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/supplier-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[SupplierEdge]"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Supplier edges of Supplier connection")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supplierconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupplierConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Page info of the connection")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supplierconnectionbadvisemessagebcodeadvisemessage--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupplierConnection.",(0,r.kt)("b",null,"adviseMessage"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,r.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupplierConnection.adviseMessage.",(0,r.kt)("b",null,"level"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,r.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supplierconnectionberrorbcodeerror---"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupplierConnection.",(0,r.kt)("b",null,"error"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/error"},(0,r.kt)("inlineCode",{parentName:"a"},"[Error!]"))," ",(0,r.kt)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"deprecated from 2019-01-01. Use AdviseMessage instead"))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supplierconnectionbtotalcountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupplierConnection.",(0,r.kt)("b",null,"totalCount"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,r.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/client-data"},(0,r.kt)("inlineCode",{parentName:"a"},"ClientData"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/group-common-data"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupCommonData"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/group-data"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupData"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/organization-data"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationData"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);