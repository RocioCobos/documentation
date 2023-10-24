"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,g=p["".concat(s,".").concat(b)]||p[b]||m[b]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},57469:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>b});var o=n(87462),a=n(67294),r=n(3905);const i={id:"macro-permissions-connection",title:"MacroPermissionsConnection",hide_table_of_contents:!1},c=void 0,s={unversionedId:"objects/macro-permissions-connection",id:"objects/macro-permissions-connection",title:"MacroPermissionsConnection",description:"No description",source:"@site/api/objects/macro-permissions-connection.mdx",sourceDirName:"objects",slug:"/objects/macro-permissions-connection",permalink:"/api/objects/macro-permissions-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"macro-permissions-connection",title:"MacroPermissionsConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MacroPermission",permalink:"/api/objects/macro-permission"},next:{title:"ManagedGroupConnection",permalink:"/api/objects/managed-group-connection"}},l={},d=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MacroPermissionsConnection.<b>edges</b></code><Bullet /><code>[MacroPermissionEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-macropermissionsconnectionbedgesbcodemacropermissionedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MacroPermissionsConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-macropermissionsconnectionbpageinfobcodepageinfo--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:c=!1}=e;const[s,l]=(0,a.useState)(c);return(0,r.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},u={Bullet:d,SpecifiedBy:p,Badge:m,toc:b,Details:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type MacroPermissionsConnection {\n  edges: [MacroPermissionEdge]\n  pageInfo: PageInfo!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-macropermissionsconnectionbedgesbcodemacropermissionedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MacroPermissionsConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/macro-permission-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[MacroPermissionEdge]"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-macropermissionsconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MacroPermissionsConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/member-data"},(0,r.kt)("inlineCode",{parentName:"a"},"MemberData"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/product-data"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductData"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);