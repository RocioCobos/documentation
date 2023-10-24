"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63872],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return r?a.createElement(b,o(o({ref:t},s),{},{components:r})):a.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30131:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=r(87462),n=r(67294),l=r(3905);const o={id:"alert-error-rate-relative-by-time-input",title:"AlertErrorRateRelativeByTimeInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"inputs/alert-error-rate-relative-by-time-input",id:"inputs/alert-error-rate-relative-by-time-input",title:"AlertErrorRateRelativeByTimeInput",description:"No description",source:"@site/api/inputs/alert-error-rate-relative-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-error-rate-relative-by-time-input",permalink:"/api/inputs/alert-error-rate-relative-by-time-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-error-rate-relative-by-time-input",title:"AlertErrorRateRelativeByTimeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertErrorRateRelativeByRequestsInput",permalink:"/api/inputs/alert-error-rate-relative-by-requests-input"},next:{title:"AlertErrorRateRelativeConfigurationByRequestsInput",permalink:"/api/inputs/alert-error-rate-relative-configuration-by-requests-input"}},d={},s=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeByTimeInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeByTimeInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeByTimeInput.<b>configuration</b></code><Bullet /><code>AlertErrorRateRelativeConfigurationByTimeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbconfigurationbcodealerterrorraterelativeconfigurationbytimeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeByTimeInput.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeByTimeInput.<b>group</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbgroupbcodeid--",level:4}],b=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:i=!1}=e;const[c,d]=(0,n.useState)(i);return(0,l.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&o)},y={Bullet:s,SpecifiedBy:u,Badge:p,toc:m,Details:b},g="wrapper";function f(e){let{components:t,...r}=e;return(0,l.kt)(g,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertErrorRateRelativeByTimeInput {\n  name: String\n  description: String\n  configuration: AlertErrorRateRelativeConfigurationByTimeInput!\n  isActive: Boolean!\n  group: ID!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeByTimeInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Name of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbdescriptionbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeByTimeInput.",(0,l.kt)("b",null,"description"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Description of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbconfigurationbcodealerterrorraterelativeconfigurationbytimeinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeByTimeInput.",(0,l.kt)("b",null,"configuration"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/alert-error-rate-relative-configuration-by-time-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertErrorRateRelativeConfigurationByTimeInput!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Configuration of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbisactivebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeByTimeInput.",(0,l.kt)("b",null,"isActive"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To enable or desable the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativebytimeinputbgroupbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeByTimeInput.",(0,l.kt)("b",null,"group"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"groups where the alert is setted")))}f.isMDXComponent=!0}}]);