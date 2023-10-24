"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92300],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(a),u=r,k=p["".concat(d,".").concat(u)]||p[u]||g[u]||o;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90847:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>k,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),r=a(67294),o=a(3905);const l={id:"package-holder",title:"PackageHolder",hide_table_of_contents:!1},c=void 0,d={unversionedId:"inputs/package-holder",id:"inputs/package-holder",title:"PackageHolder",description:"No description",source:"@site/api/inputs/package-holder.mdx",sourceDirName:"inputs",slug:"/inputs/package-holder",permalink:"/api/inputs/package-holder",draft:!1,tags:[],version:"current",frontMatter:{id:"package-holder",title:"PackageHolder",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PackageContactInput",permalink:"/api/inputs/package-contact-input"},next:{title:"PackageInputSettings",permalink:"/api/inputs/package-input-settings"}},i={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PackageHolder.<b>age</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-packageholderbagebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PackageHolder.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-packageholderbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PackageHolder.<b>surname</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-packageholderbsurnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PackageHolder.<b>contact</b></code><Bullet /><code>PackageContactInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-packageholderbcontactbcodepackagecontactinput--",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[d,i]=(0,r.useState)(c);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},m={Bullet:s,SpecifiedBy:p,Badge:g,toc:u,Details:k},b="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input PackageHolder {\n  age: Int!\n  name: String!\n  surname: String!\n  contact: PackageContactInput!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-packageholderbagebcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PackageHolder.",(0,o.kt)("b",null,"age"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Age of the holder")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-packageholderbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PackageHolder.",(0,o.kt)("b",null,"name"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Name of the holder")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-packageholderbsurnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PackageHolder.",(0,o.kt)("b",null,"surname"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Surname of the holder")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-packageholderbcontactbcodepackagecontactinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PackageHolder.",(0,o.kt)("b",null,"contact"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/package-contact-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PackageContactInput!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Contact information of the holder")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/book-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"BookWhereInput"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);