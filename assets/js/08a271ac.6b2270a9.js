"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=d(n),b=o,m=g["".concat(c,".").concat(b)]||g[b]||p[b]||i;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},44478:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>b});var a=n(87462),o=n(67294),i=n(3905);const r={id:"organization-connection",title:"OrganizationConnection",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/organization-connection",id:"objects/organization-connection",title:"OrganizationConnection",description:"No description",source:"@site/api/objects/organization-connection.mdx",sourceDirName:"objects",slug:"/objects/organization-connection",permalink:"/api/objects/organization-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"organization-connection",title:"OrganizationConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Operation",permalink:"/api/objects/operation"},next:{title:"OrganizationContact",permalink:"/api/objects/organization-contact"}},d={},s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationConnection.<b>edges</b></code><Bullet /><code>[OrganizationEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-organizationconnectionbedgesbcodeorganizationedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-organizationconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-organizationconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[c,d]=(0,o.useState)(l);return(0,i.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},u={Bullet:s,SpecifiedBy:g,Badge:p,toc:b,Details:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrganizationConnection {\n  edges: [OrganizationEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-organizationconnectionbedgesbcodeorganizationedge--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"OrganizationConnection.",(0,i.kt)("b",null,"edges"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/organization-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[OrganizationEdge]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-organizationconnectionbpageinfobcodepageinfo--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"OrganizationConnection.",(0,i.kt)("b",null,"pageInfo"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-organizationconnectionbadvisemessagebcodeadvisemessage--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"OrganizationConnection.",(0,i.kt)("b",null,"adviseMessage"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-organizationconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"OrganizationConnection.adviseMessage.",(0,i.kt)("b",null,"level"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,i.kt)("h4",{id:"code-style-fontweight-normal-organizationconnectionbtotalcountbcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"OrganizationConnection.",(0,i.kt)("b",null,"totalCount"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,i.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/partner-data"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerData"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);