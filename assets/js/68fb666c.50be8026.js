"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),b=n,y=p["".concat(s,".").concat(b)]||p[b]||d[b]||l;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},86520:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>b});var a=r(87462),n=r(67294),l=r(3905);const i={id:"alert-price-relative-by-requests-input",title:"AlertPriceRelativeByRequestsInput",hide_table_of_contents:!1},o=void 0,s={unversionedId:"inputs/alert-price-relative-by-requests-input",id:"inputs/alert-price-relative-by-requests-input",title:"AlertPriceRelativeByRequestsInput",description:"No description",source:"@site/api/inputs/alert-price-relative-by-requests-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-price-relative-by-requests-input",permalink:"/api/inputs/alert-price-relative-by-requests-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-price-relative-by-requests-input",title:"AlertPriceRelativeByRequestsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertPriceInput",permalink:"/api/inputs/alert-price-input"},next:{title:"AlertPriceRelativeByTimeInput",permalink:"/api/inputs/alert-price-relative-by-time-input"}},c={},u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceRelativeByRequestsInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceRelativeByRequestsInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceRelativeByRequestsInput.<b>configuration</b></code><Bullet /><code>AlertPriceRelativeConfigurationByRequestsInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbconfigurationbcodealertpricerelativeconfigurationbyrequestsinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceRelativeByRequestsInput.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceRelativeByRequestsInput.<b>group</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbgroupbcodeid--",level:4}],y=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:o=!1}=e;const[s,c]=(0,n.useState)(o);return(0,l.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&i)},g={Bullet:u,SpecifiedBy:p,Badge:d,toc:b,Details:y},m="wrapper";function f(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertPriceRelativeByRequestsInput {\n  name: String\n  description: String\n  configuration: AlertPriceRelativeConfigurationByRequestsInput!\n  isActive: Boolean!\n  group: ID!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceRelativeByRequestsInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Name of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbdescriptionbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceRelativeByRequestsInput.",(0,l.kt)("b",null,"description"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Description of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbconfigurationbcodealertpricerelativeconfigurationbyrequestsinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceRelativeByRequestsInput.",(0,l.kt)("b",null,"configuration"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/alert-price-relative-configuration-by-requests-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertPriceRelativeConfigurationByRequestsInput!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Configuration of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbisactivebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceRelativeByRequestsInput.",(0,l.kt)("b",null,"isActive"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To enable or desable the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpricerelativebyrequestsinputbgroupbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceRelativeByRequestsInput.",(0,l.kt)("b",null,"group"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"groups where the alert is setted")))}f.isMDXComponent=!0}}]);