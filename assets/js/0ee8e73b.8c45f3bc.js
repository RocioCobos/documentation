"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),m=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(a),s=o,g=d["".concat(u,".").concat(s)]||d[s]||c[s]||i;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},12057:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>d,assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var n=a(87462),o=a(67294),i=a(3905);const r={id:"alert-update-average-time-absolute-configuration-by-time-input",title:"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput",hide_table_of_contents:!1},l=void 0,u={unversionedId:"inputs/alert-update-average-time-absolute-configuration-by-time-input",id:"inputs/alert-update-average-time-absolute-configuration-by-time-input",title:"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput",description:"No description",source:"@site/api/inputs/alert-update-average-time-absolute-configuration-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-average-time-absolute-configuration-by-time-input",permalink:"/api/inputs/alert-update-average-time-absolute-configuration-by-time-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-update-average-time-absolute-configuration-by-time-input",title:"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertUpdateAverageTimeAbsoluteConfigurationByRequestsInput",permalink:"/api/inputs/alert-update-average-time-absolute-configuration-by-requests-input"},next:{title:"AlertUpdateAverageTimeComparativeByTimeInput",permalink:"/api/inputs/alert-update-average-time-comparative-by-time-input"}},m={},p=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.<b>maxTime</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbmaxtimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.<b>maxAverageTime</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbmaxaveragetimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.<b>requestsToAlert</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbrequeststoalertbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.<b>windowing</b></code><Bullet /><code>AlertUpdateCommonByTimeInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbwindowingbcodealertupdatecommonbytimeinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.<b>common</b></code><Bullet /><code>AlertUpdateCommonConfigurationInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbcommonbcodealertupdatecommonconfigurationinput-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:l=!1}=e;const[u,m]=(0,o.useState)(l);return(0,i.kt)("details",(0,n.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},u?t:a),u&&r)},b={Bullet:p,SpecifiedBy:d,Badge:c,toc:s,Details:g},f="wrapper";function y(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput {\n  maxTime: Int\n  maxAverageTime: Int\n  requestsToAlert: Int\n  windowing: AlertUpdateCommonByTimeInput\n  common: AlertUpdateCommonConfigurationInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbmaxtimebcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.",(0,i.kt)("b",null,"maxTime"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Time value not allowed in miliseconds")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbmaxaveragetimebcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.",(0,i.kt)("b",null,"maxAverageTime"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Average time value not allowed in miliseconds")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbrequeststoalertbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.",(0,i.kt)("b",null,"requestsToAlert"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Number of requests with anomaly to set alert in ALERTING status")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbwindowingbcodealertupdatecommonbytimeinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.",(0,i.kt)("b",null,"windowing"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/alert-update-common-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateCommonByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Common configuration for time window type")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdateaveragetimeabsoluteconfigurationbytimeinputbcommonbcodealertupdatecommonconfigurationinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput.",(0,i.kt)("b",null,"common"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/alert-update-common-configuration-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateCommonConfigurationInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Common configuration alert")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-average-time-absolute-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateAverageTimeAbsoluteByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);