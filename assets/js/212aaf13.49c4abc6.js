"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),s=a,g=p["".concat(c,".").concat(s)]||p[s]||m[s]||o;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},43470:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),a=r(67294),o=r(3905);const i={id:"alert-error-rate-relative-configuration-by-time-input",title:"AlertErrorRateRelativeConfigurationByTimeInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"inputs/alert-error-rate-relative-configuration-by-time-input",id:"inputs/alert-error-rate-relative-configuration-by-time-input",title:"AlertErrorRateRelativeConfigurationByTimeInput",description:"No description",source:"@site/api/inputs/alert-error-rate-relative-configuration-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-error-rate-relative-configuration-by-time-input",permalink:"/api/inputs/alert-error-rate-relative-configuration-by-time-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-error-rate-relative-configuration-by-time-input",title:"AlertErrorRateRelativeConfigurationByTimeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertErrorRateRelativeConfigurationByRequestsInput",permalink:"/api/inputs/alert-error-rate-relative-configuration-by-requests-input"},next:{title:"AlertErrorTypeInput",permalink:"/api/inputs/alert-error-type-input"}},u={},d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeConfigurationByTimeInput.<b>toCheck</b></code><Bullet /><code>[Int!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbtocheckbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeConfigurationByTimeInput.<b>toCompare</b></code><Bullet /><code>[Int!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbtocomparebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeConfigurationByTimeInput.<b>windowing</b></code><Bullet /><code>AlertCommonByTimeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbwindowingbcodealertcommonbytimeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeConfigurationByTimeInput.<b>common</b></code><Bullet /><code>AlertCommonConfigurationInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbcommonbcodealertcommonconfigurationinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertErrorRateRelativeConfigurationByTimeInput.<b>relative</b></code><Bullet /><code>AlertCommonRelativeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbrelativebcodealertcommonrelativeinput--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:l=!1}=e;const[c,u]=(0,a.useState)(l);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&i)},b={Bullet:d,SpecifiedBy:p,Badge:m,toc:s,Details:g},y="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertErrorRateRelativeConfigurationByTimeInput {\n  toCheck: [Int!]\n  toCompare: [Int!]\n  windowing: AlertCommonByTimeInput!\n  common: AlertCommonConfigurationInput!\n  relative: AlertCommonRelativeInput!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbtocheckbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeConfigurationByTimeInput.",(0,o.kt)("b",null,"toCheck"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default all error codes are checked")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbtocomparebcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeConfigurationByTimeInput.",(0,o.kt)("b",null,"toCompare"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By defaults all traffic is compared")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbwindowingbcodealertcommonbytimeinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeConfigurationByTimeInput.",(0,o.kt)("b",null,"windowing"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/alert-common-by-time-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertCommonByTimeInput!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Common configuration for requests window type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbcommonbcodealertcommonconfigurationinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeConfigurationByTimeInput.",(0,o.kt)("b",null,"common"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/alert-common-configuration-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertCommonConfigurationInput!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Common configuration alert")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alerterrorraterelativeconfigurationbytimeinputbrelativebcodealertcommonrelativeinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertErrorRateRelativeConfigurationByTimeInput.",(0,o.kt)("b",null,"relative"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/alert-common-relative-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertCommonRelativeInput!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Common configuration of relative mode type")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/alert-error-rate-relative-by-time-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertErrorRateRelativeByTimeInput"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);