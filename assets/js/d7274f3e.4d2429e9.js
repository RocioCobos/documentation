"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var n=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),g=d(a),p=c,u=g["".concat(s,".").concat(p)]||g[p]||b[p]||o;return a?n.createElement(u,r(r({ref:t},i),{},{components:a})):n.createElement(u,r({ref:t},i))}));function u(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:c,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58382:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),c=a(67294),o=a(3905);const r={id:"legacy-access-data",title:"LegacyAccessData",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/legacy-access-data",id:"objects/legacy-access-data",title:"LegacyAccessData",description:"No description",source:"@site/api/objects/legacy-access-data.mdx",sourceDirName:"objects",slug:"/objects/legacy-access-data",permalink:"/api/objects/legacy-access-data",draft:!1,tags:[],version:"current",frontMatter:{id:"legacy-access-data",title:"LegacyAccessData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"LegacyAccessConnection",permalink:"/api/objects/legacy-access-connection"},next:{title:"LegacyAccessEdge",permalink:"/api/objects/legacy-access-edge"}},d={},i=()=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,o.kt)(c.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LegacyAccessData.<b>hubUser</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legacyaccessdatabhubuserbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegacyAccessData.<b>hubProvider</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legacyaccessdatabhubproviderbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegacyAccessData.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legacyaccessdatabisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegacyAccessData.<b>isActiveSpeed</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-legacyaccessdatabisactivespeedbcodeboolean--",level:4},{value:"Member Of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:l=!1}=e;const[s,d]=(0,c.useState)(l);return(0,o.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&r)},y={Bullet:i,SpecifiedBy:g,Badge:b,toc:p,Details:u},m="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type LegacyAccessData {\n  hubUser: String!\n  hubProvider: String!\n  isActive: Boolean!\n  isActiveSpeed: Boolean!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legacyaccessdatabhubuserbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegacyAccessData.",(0,o.kt)("b",null,"hubUser"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HubUser code related to hubProvider")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legacyaccessdatabhubproviderbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegacyAccessData.",(0,o.kt)("b",null,"hubProvider"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HubProvider code related to HubUser")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legacyaccessdatabisactivebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegacyAccessData.",(0,o.kt)("b",null,"isActive"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates if the relation is active")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-legacyaccessdatabisactivespeedbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"LegacyAccessData.",(0,o.kt)("b",null,"isActiveSpeed"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates if speed enabled")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/legacy-access"},(0,o.kt)("inlineCode",{parentName:"a"},"LegacyAccess"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);