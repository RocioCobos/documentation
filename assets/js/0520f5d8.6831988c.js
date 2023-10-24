"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=o,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2389:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>f});var a=n(87462),o=n(67294),r=n(3905);const i={id:"alert-peak-traffic-absolute-configuration-by-time-input",title:"AlertPeakTrafficAbsoluteConfigurationByTimeInput",hide_table_of_contents:!1},l=void 0,u={unversionedId:"inputs/alert-peak-traffic-absolute-configuration-by-time-input",id:"inputs/alert-peak-traffic-absolute-configuration-by-time-input",title:"AlertPeakTrafficAbsoluteConfigurationByTimeInput",description:"No description",source:"@site/api/inputs/alert-peak-traffic-absolute-configuration-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-peak-traffic-absolute-configuration-by-time-input",permalink:"/api/inputs/alert-peak-traffic-absolute-configuration-by-time-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-peak-traffic-absolute-configuration-by-time-input",title:"AlertPeakTrafficAbsoluteConfigurationByTimeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertPeakTrafficAbsoluteByTimeInput",permalink:"/api/inputs/alert-peak-traffic-absolute-by-time-input"},next:{title:"AlertPeakTrafficComparativeByTimeInput",permalink:"/api/inputs/alert-peak-traffic-comparative-by-time-input"}},c={},p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPeakTrafficAbsoluteConfigurationByTimeInput.<b>bounds</b></code><Bullet /><code>AlertBoundsInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertpeaktrafficabsoluteconfigurationbytimeinputbboundsbcodealertboundsinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPeakTrafficAbsoluteConfigurationByTimeInput.<b>windowing</b></code><Bullet /><code>AlertCommonByTimeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertpeaktrafficabsoluteconfigurationbytimeinputbwindowingbcodealertcommonbytimeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPeakTrafficAbsoluteConfigurationByTimeInput.<b>common</b></code><Bullet /><code>AlertCommonConfigurationInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertpeaktrafficabsoluteconfigurationbytimeinputbcommonbcodealertcommonconfigurationinput--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[u,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},u?t:n),u&&i)},b={Bullet:p,SpecifiedBy:s,Badge:d,toc:f,Details:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertPeakTrafficAbsoluteConfigurationByTimeInput {\n  bounds: AlertBoundsInput!\n  windowing: AlertCommonByTimeInput!\n  common: AlertCommonConfigurationInput!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertpeaktrafficabsoluteconfigurationbytimeinputbboundsbcodealertboundsinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertPeakTrafficAbsoluteConfigurationByTimeInput.",(0,r.kt)("b",null,"bounds"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/alert-bounds-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertBoundsInput!"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Limits for number of requests")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertpeaktrafficabsoluteconfigurationbytimeinputbwindowingbcodealertcommonbytimeinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertPeakTrafficAbsoluteConfigurationByTimeInput.",(0,r.kt)("b",null,"windowing"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/alert-common-by-time-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertCommonByTimeInput!"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Common configuration for requests window type")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertpeaktrafficabsoluteconfigurationbytimeinputbcommonbcodealertcommonconfigurationinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertPeakTrafficAbsoluteConfigurationByTimeInput.",(0,r.kt)("b",null,"common"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/alert-common-configuration-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertCommonConfigurationInput!"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Common configuration alert")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/alert-peak-traffic-absolute-by-time-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertPeakTrafficAbsoluteByTimeInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);