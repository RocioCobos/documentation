"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46359],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),g=s(a),b=r,m=g["".concat(c,".").concat(b)]||g[b]||y[b]||n;return a?o.createElement(m,d(d({ref:t},i),{},{components:a})):o.createElement(m,d({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,d=new Array(n);d[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:r,d[1]=l;for(var s=2;s<n;s++)d[s]=a[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},27757:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>b});var o=a(87462),r=a(67294),n=a(3905);const d={id:"category",title:"Category",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/category",id:"objects/category",title:"Category",description:"Category Type",source:"@site/api/objects/category.mdx",sourceDirName:"objects",slug:"/objects/category",permalink:"/api/objects/category",draft:!1,tags:[],version:"current",frontMatter:{id:"category",title:"Category",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CategoryEdge",permalink:"/api/objects/category-edge"},next:{title:"CheckInformation",permalink:"/api/objects/check-information"}},s={},i=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Category.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-categorybcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Category.<b>categoryData</b></code><Bullet /><code>CategoryData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-categorybcategorydatabcodecategorydata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Category.<b>error</b></code><Bullet /><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-categoryberrorbcodeerror---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Category.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-categorybadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Category.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-categorybcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Category.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-categorybupdatedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[c,s]=(0,r.useState)(l);return(0,n.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&d)},p={Bullet:i,SpecifiedBy:g,Badge:y,toc:b,Details:m},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Category Type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Category implements Node {\n  code: ID!\n  categoryData: CategoryData\n  error: [Error!] @deprecated\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-categorybcodebcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Category.",(0,n.kt)("b",null,"code"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Category ID")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-categorybcategorydatabcodecategorydata-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Category.",(0,n.kt)("b",null,"categoryData"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/category-data"},(0,n.kt)("inlineCode",{parentName:"a"},"CategoryData"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Category data")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-categoryberrorbcodeerror---"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Category.",(0,n.kt)("b",null,"error"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/error"},(0,n.kt)("inlineCode",{parentName:"a"},"[Error!]"))," ",(0,n.kt)(y,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Deprecated from 2019-07-03")),(0,n.kt)("p",{parentName:"blockquote"},"Errors that abort services")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-categorybadvisemessagebcodeadvisemessage--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Category.",(0,n.kt)("b",null,"adviseMessage"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,n.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of messages"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-categoryadvisemessageblevelbcodeadvisemessagelevel--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Category.adviseMessage.",(0,n.kt)("b",null,"level"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,n.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-categorybcreatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Category.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Date created")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-categorybupdatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Category.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Date updated")),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"node-"},(0,n.kt)("a",{parentName:"h4",href:"/api/interfaces/node"},(0,n.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/category-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"CategoryEdge"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);