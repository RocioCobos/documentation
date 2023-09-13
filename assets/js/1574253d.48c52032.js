"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,f=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},51146:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var a=r(87462),n=r(67294),i=r(3905);const c={id:"search-criteria-where-input",title:"SearchCriteriaWhereInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"inputs/search-criteria-where-input",id:"inputs/search-criteria-where-input",title:"SearchCriteriaWhereInput",description:"No description",source:"@site/api/inputs/search-criteria-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/search-criteria-where-input",permalink:"/api/inputs/search-criteria-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"search-criteria-where-input",title:"SearchCriteriaWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SearchCriteriaUpdateInput",permalink:"/api/inputs/search-criteria-update-input"},next:{title:"SearchWhereInput",permalink:"/api/inputs/search-where-input"}},s={},p=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),h=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteriaWhereInput.<b>code_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcriteriawhereinputbcode_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteriaWhereInput.<b>supplier_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchcriteriawhereinputbsupplier_inbcodeid--",level:4}],f=e=>{let{dataOpen:t,dataClose:r,children:c,startOpen:l=!1}=e;const[o,s]=(0,n.useState)(l);return(0,i.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},o?t:r),o&&c)},m={Bullet:p,SpecifiedBy:d,Badge:u,toc:h,Details:f},b="wrapper";function y(e){let{components:t,...r}=e;return(0,i.kt)(b,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SearchCriteriaWhereInput {\n  code_in: [ID!]\n  supplier_in: [ID!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriawhereinputbcode_inbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaWhereInput.",(0,i.kt)("b",null,"code_in"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriawhereinputbsupplier_inbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaWhereInput.",(0,i.kt)("b",null,"supplier_in"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}y.isMDXComponent=!0}}]);