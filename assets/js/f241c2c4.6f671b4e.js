"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64875],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var n=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,o=e.originalType,d=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),p=l(a),b=c,g=p["".concat(d,".").concat(b)]||p[b]||u[b]||o;return a?n.createElement(g,s(s({ref:t},i),{},{components:a})):n.createElement(g,s({ref:t},i))}));function g(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=a.length,s=new Array(o);s[0]=b;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[p]="string"==typeof e?e:c,s[1]=r;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},28393:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>b});var n=a(87462),c=a(67294),o=a(3905);const s={id:"speed-access-data",title:"SpeedAccessData",hide_table_of_contents:!1},r=void 0,d={unversionedId:"objects/speed-access-data",id:"objects/speed-access-data",title:"SpeedAccessData",description:"No description",source:"@site/api/objects/speed-access-data.mdx",sourceDirName:"objects",slug:"/objects/speed-access-data",permalink:"/api/objects/speed-access-data",draft:!1,tags:[],version:"current",frontMatter:{id:"speed-access-data",title:"SpeedAccessData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SpeedAccessCollection",permalink:"/api/objects/speed-access-collection"},next:{title:"SpeedAccessEdge",permalink:"/api/objects/speed-access-edge"}},l={},i=()=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(c.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedAccessData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-speedaccessdatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedAccessData.<b>access</b></code><Bullet /><code>Access!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-speedaccessdatabaccessbcodeaccess--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SpeedAccessData.<b>configuration</b></code><Bullet /><code>SpeedConfiguration!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-speedaccessdatabconfigurationbcodespeedconfiguration--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:r=!1}=e;const[d,l]=(0,c.useState)(r);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&s)},f={Bullet:i,SpecifiedBy:p,Badge:u,toc:b,Details:g},m="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SpeedAccessData {\n  code: ID!\n  access: Access!\n  configuration: SpeedConfiguration!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-speedaccessdatabcodebcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpeedAccessData.",(0,o.kt)("b",null,"code"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-speedaccessdatabaccessbcodeaccess--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpeedAccessData.",(0,o.kt)("b",null,"access"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/access"},(0,o.kt)("inlineCode",{parentName:"a"},"Access!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-speedaccessdatabconfigurationbcodespeedconfiguration--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SpeedAccessData.",(0,o.kt)("b",null,"configuration"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/speed-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"SpeedConfiguration!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/speed-access"},(0,o.kt)("inlineCode",{parentName:"a"},"SpeedAccess"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);