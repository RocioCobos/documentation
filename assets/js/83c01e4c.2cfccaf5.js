"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58717],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),g=s(a),p=n,b=g["".concat(d,".").concat(p)]||g[p]||y[p]||r;return a?o.createElement(b,l(l({ref:t},i),{},{components:a})):o.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[g]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},20272:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var o=a(87462),n=a(67294),r=a(3905);const l={id:"category-data",title:"CategoryData",hide_table_of_contents:!1},c=void 0,d={unversionedId:"objects/category-data",id:"objects/category-data",title:"CategoryData",description:"Category data",source:"@site/api/objects/category-data.mdx",sourceDirName:"objects",slug:"/objects/category-data",permalink:"/api/objects/category-data",draft:!1,tags:[],version:"current",frontMatter:{id:"category-data",title:"CategoryData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CategoryConnection",permalink:"/api/objects/category-connection"},next:{title:"CategoryEdge",permalink:"/api/objects/category-edge"}},s={},i=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CategoryData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-categorydatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CategoryData.<b>categoryCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-categorydatabcategorycodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CategoryData.<b>texts</b></code><Bullet /><code>[Text!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-categorydatabtextsbcodetext--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[d,s]=(0,n.useState)(c);return(0,r.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},u={Bullet:i,SpecifiedBy:g,Badge:y,toc:p,Details:b},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Category data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CategoryData {\n  code: ID!\n  categoryCode: String!\n  texts(languages: [Language!]): [Text!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-categorydatabcodebcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CategoryData.",(0,r.kt)("b",null,"code"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Internal code for checking availability")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-categorydatabcategorycodebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CategoryData.",(0,r.kt)("b",null,"categoryCode"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Code of the hotel based on the Supplier selected")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-categorydatabtextsbcodetext--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CategoryData.",(0,r.kt)("b",null,"texts"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/text"},(0,r.kt)("inlineCode",{parentName:"a"},"[Text!]"))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Label"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-categorydatatextsblanguagesbcodelanguage--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CategoryData.texts.",(0,r.kt)("b",null,"languages"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/scalars/language"},(0,r.kt)("inlineCode",{parentName:"a"},"[Language!]"))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/category"},(0,r.kt)("inlineCode",{parentName:"a"},"Category"))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);