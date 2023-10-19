"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),m=s(n),g=o,p=m["".concat(c,".").concat(g)]||m[g]||b[g]||r;return n?a.createElement(p,l(l({ref:t},i),{},{components:n})):a.createElement(p,l({ref:t},i))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[m]="string"==typeof e?e:o,l[1]=d;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16115:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var a=n(87462),o=n(67294),r=n(3905);const l={id:"member-connection",title:"MemberConnection",hide_table_of_contents:!1},d=void 0,c={unversionedId:"objects/member-connection",id:"objects/member-connection",title:"MemberConnection",description:"No description",source:"@site/api/objects/member-connection.mdx",sourceDirName:"objects",slug:"/objects/member-connection",permalink:"/api/objects/member-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"member-connection",title:"MemberConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Medium",permalink:"/api/objects/medium"},next:{title:"MemberData",permalink:"/api/objects/member-data"}},s={},i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MemberConnection.<b>edges</b></code><Bullet /><code>[MemberEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-memberconnectionbedgesbcodememberedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MemberConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-memberconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MemberConnection.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-memberconnectionbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MemberConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-memberconnectionbtotalcountbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:d=!1}=e;const[c,s]=(0,o.useState)(d);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},u={Bullet:i,SpecifiedBy:m,Badge:b,toc:g,Details:p},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type MemberConnection {\n  edges: [MemberEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-memberconnectionbedgesbcodememberedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MemberConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/member-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[MemberEdge]"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-memberconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MemberConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-memberconnectionbadvisemessagebcodeadvisemessage--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MemberConnection.",(0,r.kt)("b",null,"adviseMessage"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,r.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-memberconnectionadvisemessageblevelbcodeadvisemessagelevel--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MemberConnection.adviseMessage.",(0,r.kt)("b",null,"level"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,r.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-memberconnectionbtotalcountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MemberConnection.",(0,r.kt)("b",null,"totalCount"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,r.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/group-common-data"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupCommonData"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/group-data"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupData"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/organization-data"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationData"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);