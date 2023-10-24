"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,g=d["".concat(i,".").concat(y)]||d[y]||p[y]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},49767:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>g,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=r(87462),a=r(67294),o=r(3905);const l={id:"hotel-xcategory-query-input",title:"HotelXCategoryQueryInput",hide_table_of_contents:!1},c=void 0,i={unversionedId:"inputs/hotel-xcategory-query-input",id:"inputs/hotel-xcategory-query-input",title:"HotelXCategoryQueryInput",description:"No description",source:"@site/api/inputs/hotel-xcategory-query-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xcategory-query-input",permalink:"/api/inputs/hotel-xcategory-query-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xcategory-query-input",title:"HotelXCategoryQueryInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXBusinessRulesInput",permalink:"/api/inputs/hotel-xbusiness-rules-input"},next:{title:"HotelXCommitReferenceInput",permalink:"/api/inputs/hotel-xcommit-reference-input"}},s={},u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXCategoryQueryInput.<b>categoryCodes</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxcategoryqueryinputbcategorycodesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXCategoryQueryInput.<b>access</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxcategoryqueryinputbaccessbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXCategoryQueryInput.<b>group</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxcategoryqueryinputbgroupbcodeid-",level:4}],g=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:c=!1}=e;const[i,s]=(0,a.useState)(c);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&l)},m={Bullet:u,SpecifiedBy:d,Badge:p,toc:y,Details:g},f="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXCategoryQueryInput {\n  categoryCodes: [String!]\n  access: ID\n  group: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-hotelxcategoryqueryinputbcategorycodesbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HotelXCategoryQueryInput.",(0,o.kt)("b",null,"categoryCodes"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the category codes that you want filter.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-hotelxcategoryqueryinputbaccessbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HotelXCategoryQueryInput.",(0,o.kt)("b",null,"access"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the access that you want use.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-hotelxcategoryqueryinputbgroupbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HotelXCategoryQueryInput.",(0,o.kt)("b",null,"group"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the group that you want to search categories.")))}b.isMDXComponent=!0}}]);