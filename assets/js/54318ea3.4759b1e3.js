"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12872],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=m(a),s=r,y=u["".concat(l,".").concat(s)]||u[s]||c[s]||i;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},30976:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=a(67294),i=a(3905);const o={id:"alert-update-common-by-time-input",title:"AlertUpdateCommonByTimeInput",hide_table_of_contents:!1},p=void 0,l={unversionedId:"inputs/alert-update-common-by-time-input",id:"inputs/alert-update-common-by-time-input",title:"AlertUpdateCommonByTimeInput",description:"No description",source:"@site/api/inputs/alert-update-common-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-common-by-time-input",permalink:"/api/inputs/alert-update-common-by-time-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-update-common-by-time-input",title:"AlertUpdateCommonByTimeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertUpdateCommonByRequestsInput",permalink:"/api/inputs/alert-update-common-by-requests-input"},next:{title:"AlertUpdateCommonComparativeInput",permalink:"/api/inputs/alert-update-common-comparative-input"}},m={},d=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateCommonByTimeInput.<b>periodicity</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatecommonbytimeinputbperiodicitybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateCommonByTimeInput.<b>window</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatecommonbytimeinputbwindowbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateCommonByTimeInput.<b>minNumberRequests</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatecommonbytimeinputbminnumberrequestsbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:p=!1}=e;const[l,m]=(0,r.useState)(p);return(0,i.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&o)},b={Bullet:d,SpecifiedBy:u,Badge:c,toc:s,Details:y},f="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertUpdateCommonByTimeInput {\n  periodicity: Int\n  window: Int\n  minNumberRequests: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdatecommonbytimeinputbperiodicitybcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateCommonByTimeInput.",(0,i.kt)("b",null,"periodicity"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Frequency of time in minutes in which the alert will be reviewed")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdatecommonbytimeinputbwindowbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateCommonByTimeInput.",(0,i.kt)("b",null,"window"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The time frame in minutes")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdatecommonbytimeinputbminnumberrequestsbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateCommonByTimeInput.",(0,i.kt)("b",null,"minNumberRequests"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Minimum number of requests must be in window to check the alert")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-average-time-absolute-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-average-time-comparative-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateAverageTimeComparativeConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-average-time-relative-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateAverageTimeRelativeConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-business-metric-ratio-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateBusinessMetricRatioConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-error-rate-comparative-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateErrorRateComparativeConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-error-rate-relative-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateErrorRateRelativeConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-peak-traffic-absolute-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-peak-traffic-comparative-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdatePeakTrafficComparativeConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-price-absolute-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdatePriceAbsoluteConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-price-relative-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdatePriceRelativeConfigurationByTimeInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);