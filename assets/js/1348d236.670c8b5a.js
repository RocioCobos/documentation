"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4417],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73249:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=r(87462),o=r(67294),a=r(3905);const i={id:"supplier-search-by-options",title:"SupplierSearchByOptions",hide_table_of_contents:!1},l=void 0,p={unversionedId:"enums/supplier-search-by-options",id:"enums/supplier-search-by-options",title:"SupplierSearchByOptions",description:"Supplier unique search options",source:"@site/api/enums/supplier-search-by-options.mdx",sourceDirName:"enums",slug:"/enums/supplier-search-by-options",permalink:"/api/enums/supplier-search-by-options",draft:!1,tags:[],version:"current",frontMatter:{id:"supplier-search-by-options",title:"SupplierSearchByOptions",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupplierOrderByEnum",permalink:"/api/enums/supplier-order-by-enum"},next:{title:"TagRuntimeType",permalink:"/api/enums/tag-runtime-type"}},s={},c=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupplierSearchByOptions.<b>ID</b></code>",id:"code-style-fontweight-normal-suppliersearchbyoptionsbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupplierSearchByOptions.<b>CODE</b></code>",id:"code-style-fontweight-normal-suppliersearchbyoptionsbcodebcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:l=!1}=e;const[p,s]=(0,o.useState)(l);return(0,a.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},p?t:r),p&&i)},f={Bullet:c,SpecifiedBy:u,Badge:d,toc:m,Details:y},b="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Supplier unique search options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupplierSearchByOptions {\n  ID\n  CODE\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-suppliersearchbyoptionsbidbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplierSearchByOptions.",(0,a.kt)("b",null,"ID")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-suppliersearchbyoptionsbcodebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplierSearchByOptions.",(0,a.kt)("b",null,"CODE")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/supplier-where-unique-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierWhereUniqueInput"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);