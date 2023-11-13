"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(n),h=a,y=c["".concat(u,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43997:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>c,assets:()=>o,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=n(87462),a=n(67294),i=n(3905);const l={id:"supplier-where-unique-input",title:"SupplierWhereUniqueInput",hide_table_of_contents:!1},p=void 0,u={unversionedId:"inputs/supplier-where-unique-input",id:"inputs/supplier-where-unique-input",title:"SupplierWhereUniqueInput",description:"Supplier where unique input",source:"@site/api/inputs/supplier-where-unique-input.mdx",sourceDirName:"inputs",slug:"/inputs/supplier-where-unique-input",permalink:"/api/inputs/supplier-where-unique-input",draft:!1,tags:[],version:"current",frontMatter:{id:"supplier-where-unique-input",title:"SupplierWhereUniqueInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupplierWhereInput",permalink:"/api/inputs/supplier-where-input"},next:{title:"SurchargeInput",permalink:"/api/inputs/surcharge-input"}},o={},s=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),h=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierWhereUniqueInput.<b>search</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierwhereuniqueinputbsearchbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierWhereUniqueInput.<b>searchBy</b></code><Bullet /><code>SupplierSearchByOptions!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierwhereuniqueinputbsearchbybcodesuppliersearchbyoptions--",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:p=!1}=e;const[u,o]=(0,a.useState)(p);return(0,i.kt)("details",(0,r.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"}},u?t:n),u&&l)},m={Bullet:s,SpecifiedBy:c,Badge:d,toc:h,Details:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Supplier where unique input"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierWhereUniqueInput {\n  search: ID!\n  searchBy: SupplierSearchByOptions!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplierwhereuniqueinputbsearchbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SupplierWhereUniqueInput.",(0,i.kt)("b",null,"search"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplierwhereuniqueinputbsearchbybcodesuppliersearchbyoptions--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SupplierWhereUniqueInput.",(0,i.kt)("b",null,"searchBy"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/enums/supplier-search-by-options"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierSearchByOptions!"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}b.isMDXComponent=!0}}]);