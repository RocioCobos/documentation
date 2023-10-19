"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=i(n),g=r,y=u["".concat(s,".").concat(g)]||u[g]||p[g]||c;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60887:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=n(87462),r=n(67294),c=n(3905);const l={id:"legacy-access-input",title:"LegacyAccessInput",hide_table_of_contents:!1},o=void 0,s={unversionedId:"inputs/legacy-access-input",id:"inputs/legacy-access-input",title:"LegacyAccessInput",description:"No description",source:"@site/api/inputs/legacy-access-input.mdx",sourceDirName:"inputs",slug:"/inputs/legacy-access-input",permalink:"/api/inputs/legacy-access-input",draft:!1,tags:[],version:"current",frontMatter:{id:"legacy-access-input",title:"LegacyAccessInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"LegacyAccessFilter",permalink:"/api/inputs/legacy-access-filter"},next:{title:"LegacyAccessWhereUniqueInput",permalink:"/api/inputs/legacy-access-where-unique-input"}},i={},d=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LegacyAccessInput.<b>hubUser</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legacyaccessinputbhubuserbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegacyAccessInput.<b>hubProvider</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legacyaccessinputbhubproviderbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegacyAccessInput.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legacyaccessinputbisactivebcodeboolean--",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:o=!1}=e;const[s,i]=(0,r.useState)(o);return(0,c.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&l)},b={Bullet:d,SpecifiedBy:u,Badge:p,toc:g,Details:y},m="wrapper";function f(e){let{components:t,...n}=e;return(0,c.kt)(m,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"input LegacyAccessInput {\n  hubUser: String!\n  hubProvider: String!\n  isActive: Boolean!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-legacyaccessinputbhubuserbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"LegacyAccessInput.",(0,c.kt)("b",null,"hubUser"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-legacyaccessinputbhubproviderbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"LegacyAccessInput.",(0,c.kt)("b",null,"hubProvider"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-legacyaccessinputbisactivebcodeboolean--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"LegacyAccessInput.",(0,c.kt)("b",null,"isActive"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}f.isMDXComponent=!0}}]);