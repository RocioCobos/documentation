"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,g=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.createElement(g,c(c({ref:t},d),{},{components:n})):o.createElement(g,c({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},20032:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>b});var o=n(87462),r=n(67294),a=n(3905);const c={id:"resource-connection",title:"ResourceConnection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/resource-connection",id:"objects/resource-connection",title:"ResourceConnection",description:"No description",source:"@site/api/objects/resource-connection.mdx",sourceDirName:"objects",slug:"/objects/resource-connection",permalink:"/api/objects/resource-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"resource-connection",title:"ResourceConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Resort",permalink:"/api/objects/resort"},next:{title:"ResourceData",permalink:"/api/objects/resource-data"}},s={},d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ResourceConnection.<b>edges</b></code><Bullet /><code>[ResourceEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-resourceconnectionbedgesbcoderesourceedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResourceConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-resourceconnectionbpageinfobcodepageinfo--",level:4},{value:"Member Of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[i,s]=(0,r.useState)(l);return(0,a.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},f={Bullet:d,SpecifiedBy:p,Badge:u,toc:b,Details:g},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ResourceConnection {\n  edges: [ResourceEdge]\n  pageInfo: PageInfo!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-resourceconnectionbedgesbcoderesourceedge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ResourceConnection.",(0,a.kt)("b",null,"edges"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/objects/resource-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[ResourceEdge]"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-resourceconnectionbpageinfobcodepageinfo--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ResourceConnection.",(0,a.kt)("b",null,"pageInfo"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member Of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,a.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/objects/apidata"},(0,a.kt)("inlineCode",{parentName:"a"},"APIData"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/objects/role-data"},(0,a.kt)("inlineCode",{parentName:"a"},"RoleData"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);