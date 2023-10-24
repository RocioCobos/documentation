"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11316],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,b=d["".concat(c,".").concat(m)]||d[m]||g[m]||o;return a?n.createElement(b,l(l({ref:t},s),{},{components:a})):n.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1560:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905);const l={id:"mapping",title:"Mapping",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/mapping",id:"objects/mapping",title:"Mapping",description:"Returns the mapping for a group.",source:"@site/api/objects/mapping.mdx",sourceDirName:"objects",slug:"/objects/mapping",permalink:"/api/objects/mapping",draft:!1,tags:[],version:"current",frontMatter:{id:"mapping",title:"Mapping",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MappingMutation",permalink:"/api/objects/mapping-mutation"},next:{title:"Markup",permalink:"/api/objects/markup"}},p={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Mapping.<b>contexts</b></code><Bullet /><code>[MappingContext!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mappingbcontextsbcodemappingcontext--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Mapping.<b>errors</b></code><Bullet /><code>[Error!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mappingberrorsbcodeerror--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Mapping.<b>warnings</b></code><Bullet /><code>[Warning!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mappingbwarningsbcodewarning--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[c,p]=(0,r.useState)(i);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},u={Bullet:s,SpecifiedBy:d,Badge:g,toc:m,Details:b},f="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Returns the mapping for a group.\n@deprecated(reason: "deprecated from 2019-09-10. not operating or being used")'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mapping {\n  contexts(codes: [String!]): [MappingContext!]\n  errors: [Error!]\n  warnings: [Warning!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mappingbcontextsbcodemappingcontext--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Mapping.",(0,o.kt)("b",null,"contexts"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/mapping-context"},(0,o.kt)("inlineCode",{parentName:"a"},"[MappingContext!]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns the differents group contexts, you can filter by some contexts."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-mappingcontextsbcodesbcodestring--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Mapping.contexts.",(0,o.kt)("b",null,"codes"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mappingberrorsbcodeerror--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Mapping.",(0,o.kt)("b",null,"errors"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/error"},(0,o.kt)("inlineCode",{parentName:"a"},"[Error!]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Errors that abort services")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-mappingbwarningsbcodewarning--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Mapping.",(0,o.kt)("b",null,"warnings"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/warning"},(0,o.kt)("inlineCode",{parentName:"a"},"[Warning!]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Potentially harmful situations or errors that won't force the service to abort")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-xquery"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelXQuery"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);