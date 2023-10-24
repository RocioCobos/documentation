"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37311],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20678:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var n=r(87462),i=r(67294),a=r(3905);const l={id:"service-api-filter",title:"ServiceApiFilter",hide_table_of_contents:!1},o=void 0,c={unversionedId:"inputs/service-api-filter",id:"inputs/service-api-filter",title:"ServiceApiFilter",description:"No description",source:"@site/api/inputs/service-api-filter.mdx",sourceDirName:"inputs",slug:"/inputs/service-api-filter",permalink:"/api/inputs/service-api-filter",draft:!1,tags:[],version:"current",frontMatter:{id:"service-api-filter",title:"ServiceApiFilter",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SendVerificationEmailInput",permalink:"/api/inputs/send-verification-email-input"},next:{title:"SetSupplierMappingInput",permalink:"/api/inputs/set-supplier-mapping-input"}},p={},s=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ServiceApiFilter.<b>ApiName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-serviceapifilterbapinamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ServiceApiFilter.<b>OperationName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-serviceapifilterboperationnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ServiceApiFilter.<b>OperationType</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-serviceapifilterboperationtypebcodestring-",level:4}],m=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:o=!1}=e;const[c,p]=(0,i.useState)(o);return(0,a.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&l)},g={Bullet:s,SpecifiedBy:d,Badge:u,toc:f,Details:m},y="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input ServiceApiFilter {\n  ApiName: String\n  OperationName: String\n  OperationType: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-serviceapifilterbapinamebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiFilter.",(0,a.kt)("b",null,"ApiName"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-serviceapifilterboperationnamebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiFilter.",(0,a.kt)("b",null,"OperationName"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-serviceapifilterboperationtypebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiFilter.",(0,a.kt)("b",null,"OperationType"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}b.isMDXComponent=!0}}]);