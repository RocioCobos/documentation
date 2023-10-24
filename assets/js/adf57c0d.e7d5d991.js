"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19495],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(a),m=o,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(b,l(l({ref:t},s),{},{components:a})):n.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30347:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(87462),o=a(67294),r=a(3905);const l={id:"context-data",title:"ContextData",hide_table_of_contents:!1},c=void 0,d={unversionedId:"objects/context-data",id:"objects/context-data",title:"ContextData",description:"Extended Context information",source:"@site/api/objects/context-data.mdx",sourceDirName:"objects",slug:"/objects/context-data",permalink:"/api/objects/context-data",draft:!1,tags:[],version:"current",frontMatter:{id:"context-data",title:"ContextData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ContentPayload",permalink:"/api/objects/content-payload"},next:{title:"Context",permalink:"/api/objects/context"}},i={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ContextData.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-contextdatabidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContextData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-contextdatabcodebcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[d,i]=(0,o.useState)(c);return(0,r.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},f={Bullet:s,SpecifiedBy:p,Badge:u,toc:m,Details:b},y="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Extended Context information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ContextData {\n  id: ID!\n  code: ID!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-contextdatabidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ContextData.",(0,r.kt)("b",null,"id"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Context unique ID. Format: integer.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-contextdatabcodebcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ContextData.",(0,r.kt)("b",null,"code"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Context unique code")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/context"},(0,r.kt)("inlineCode",{parentName:"a"},"Context"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);