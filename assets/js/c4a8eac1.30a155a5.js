"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,b=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return r?a.createElement(b,i(i({ref:t},d),{},{components:r})):a.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42669:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(87462),n=r(67294),o=r(3905);const i={id:"alert-error-rate-comparative-by-time-input",title:"AlertErrorRateComparativeByTimeInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"inputs/alert-error-rate-comparative-by-time-input",id:"inputs/alert-error-rate-comparative-by-time-input",title:"AlertErrorRateComparativeByTimeInput",description:"No description",source:"@site/api/inputs/alert-error-rate-comparative-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-error-rate-comparative-by-time-input",permalink:"/api/inputs/alert-error-rate-comparative-by-time-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-error-rate-comparative-by-time-input",title:"AlertErrorRateComparativeByTimeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertErrorCodeInput",permalink:"/api/inputs/alert-error-code-input"},next:{title:"AlertErrorRateComparativeConfigurationByTimeInput",permalink:"/api/inputs/alert-error-rate-comparative-configuration-by-time-input"}},p={},d=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateComparativeByTimeInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateComparativeByTimeInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateComparativeByTimeInput.<b>configuration</b></code><Bullet /><code>AlertErrorRateComparativeConfigurationByTimeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbconfigurationbcodealerterrorratecomparativeconfigurationbytimeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateComparativeByTimeInput.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateComparativeByTimeInput.<b>group</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbgroupbcodeid--",level:4}],b=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:l=!1}=e;const[c,p]=(0,n.useState)(l);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&i)},g={Bullet:d,SpecifiedBy:s,Badge:m,toc:u,Details:b},y="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertErrorRateComparativeByTimeInput {\n  name: String\n  description: String\n  configuration: AlertErrorRateComparativeConfigurationByTimeInput!\n  isActive: Boolean!\n  group: ID!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateComparativeByTimeInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Name of the alert")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateComparativeByTimeInput.",(0,o.kt)("b",null,"description"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Description of the alert")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbconfigurationbcodealerterrorratecomparativeconfigurationbytimeinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateComparativeByTimeInput.",(0,o.kt)("b",null,"configuration"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/alert-error-rate-comparative-configuration-by-time-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertErrorRateComparativeConfigurationByTimeInput!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Configuration of the alert")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbisactivebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateComparativeByTimeInput.",(0,o.kt)("b",null,"isActive"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To enable or desable the alert")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorratecomparativebytimeinputbgroupbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateComparativeByTimeInput.",(0,o.kt)("b",null,"group"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"groups where the alert is setted")))}f.isMDXComponent=!0}}]);