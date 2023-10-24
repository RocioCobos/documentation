"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,s=d["".concat(m,".").concat(g)]||d[g]||p[g]||r;return n?a.createElement(s,o(o({ref:t},c),{},{components:n})):a.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50024:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>s,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>m,toc:()=>g});var a=n(87462),i=n(67294),r=n(3905);const o={id:"alert-average-time-relative-configuration-by-time-input",title:"AlertAverageTimeRelativeConfigurationByTimeInput",hide_table_of_contents:!1},l=void 0,m={unversionedId:"inputs/alert-average-time-relative-configuration-by-time-input",id:"inputs/alert-average-time-relative-configuration-by-time-input",title:"AlertAverageTimeRelativeConfigurationByTimeInput",description:"No description",source:"@site/api/inputs/alert-average-time-relative-configuration-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-average-time-relative-configuration-by-time-input",permalink:"/api/inputs/alert-average-time-relative-configuration-by-time-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-average-time-relative-configuration-by-time-input",title:"AlertAverageTimeRelativeConfigurationByTimeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertAverageTimeRelativeConfigurationByRequestsInput",permalink:"/api/inputs/alert-average-time-relative-configuration-by-requests-input"},next:{title:"AlertBoundsInput",permalink:"/api/inputs/alert-bounds-input"}},u={},c=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertAverageTimeRelativeConfigurationByTimeInput.<b>maxTime</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbmaxtimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertAverageTimeRelativeConfigurationByTimeInput.<b>maxAverageTime</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbmaxaveragetimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertAverageTimeRelativeConfigurationByTimeInput.<b>windowing</b></code><Bullet /><code>AlertCommonByTimeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbwindowingbcodealertcommonbytimeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertAverageTimeRelativeConfigurationByTimeInput.<b>common</b></code><Bullet /><code>AlertCommonConfigurationInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbcommonbcodealertcommonconfigurationinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertAverageTimeRelativeConfigurationByTimeInput.<b>relative</b></code><Bullet /><code>AlertCommonRelativeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbrelativebcodealertcommonrelativeinput--",level:4},{value:"Member of",id:"member-of",level:3}],s=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[m,u]=(0,i.useState)(l);return(0,r.kt)("details",(0,a.Z)({},m?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},m?t:n),m&&o)},b={Bullet:c,SpecifiedBy:d,Badge:p,toc:g,Details:s},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertAverageTimeRelativeConfigurationByTimeInput {\n  maxTime: Int\n  maxAverageTime: Int\n  windowing: AlertCommonByTimeInput!\n  common: AlertCommonConfigurationInput!\n  relative: AlertCommonRelativeInput!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbmaxtimebcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertAverageTimeRelativeConfigurationByTimeInput.",(0,r.kt)("b",null,"maxTime"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Time not allowed in miliseconds")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbmaxaveragetimebcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertAverageTimeRelativeConfigurationByTimeInput.",(0,r.kt)("b",null,"maxAverageTime"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Average time not allowed in miliseconds")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbwindowingbcodealertcommonbytimeinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertAverageTimeRelativeConfigurationByTimeInput.",(0,r.kt)("b",null,"windowing"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/alert-common-by-time-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertCommonByTimeInput!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Common configuration of time window type")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbcommonbcodealertcommonconfigurationinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertAverageTimeRelativeConfigurationByTimeInput.",(0,r.kt)("b",null,"common"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/alert-common-configuration-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertCommonConfigurationInput!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Common configuration alert")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertaveragetimerelativeconfigurationbytimeinputbrelativebcodealertcommonrelativeinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertAverageTimeRelativeConfigurationByTimeInput.",(0,r.kt)("b",null,"relative"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/alert-common-relative-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertCommonRelativeInput!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Common configuration of relative mode type")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/alert-average-time-relative-by-time-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertAverageTimeRelativeByTimeInput"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);