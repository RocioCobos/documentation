"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=d(r),p=a,u=m["".concat(c,".").concat(p)]||m[p]||b[p]||o;return r?n.createElement(u,l(l({ref:t},i),{},{components:r})):n.createElement(u,l({ref:t},i))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},37239:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(67294),o=r(3905);const l={id:"members-edge",title:"MembersEdge",hide_table_of_contents:!1},s=void 0,c={unversionedId:"objects/members-edge",id:"objects/members-edge",title:"MembersEdge",description:"No description",source:"@site/api/objects/members-edge.mdx",sourceDirName:"objects",slug:"/objects/members-edge",permalink:"/api/objects/members-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"members-edge",title:"MembersEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MembersData",permalink:"/api/objects/members-data"},next:{title:"Members",permalink:"/api/objects/members"}},d={},i=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MembersEdge.<b>node</b></code><Bullet /><code>Members</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-membersedgebnodebcodemembers-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MembersEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-membersedgebcursorbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:s=!1}=e;const[c,d]=(0,a.useState)(s);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&l)},g={Bullet:i,SpecifiedBy:m,Badge:b,toc:p,Details:u},f="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type MembersEdge {\n  node: Members\n  cursor: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-membersedgebnodebcodemembers-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MembersEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/members"},(0,o.kt)("inlineCode",{parentName:"a"},"Members"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-membersedgebcursorbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MembersEdge.",(0,o.kt)("b",null,"cursor"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/members-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"MembersConnection"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);