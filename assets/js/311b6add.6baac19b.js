"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),s=o,f=d["".concat(p,".").concat(s)]||d[s]||u[s]||r;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},69231:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),o=a(67294),r=a(3905);const i={id:"alert-update-common-comparative-input",title:"AlertUpdateCommonComparativeInput",hide_table_of_contents:!1},l=void 0,p={unversionedId:"inputs/alert-update-common-comparative-input",id:"inputs/alert-update-common-comparative-input",title:"AlertUpdateCommonComparativeInput",description:"No description",source:"@site/api/inputs/alert-update-common-comparative-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-common-comparative-input",permalink:"/api/inputs/alert-update-common-comparative-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-update-common-comparative-input",title:"AlertUpdateCommonComparativeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertUpdateCommonByTimeInput",permalink:"/api/inputs/alert-update-common-by-time-input"},next:{title:"AlertUpdateCommonConfigurationInput",permalink:"/api/inputs/alert-update-common-configuration-input"}},c={},m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateCommonComparativeInput.<b>historicalWindow</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatecommoncomparativeinputbhistoricalwindowbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateCommonComparativeInput.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatecommoncomparativeinputboffsetbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateCommonComparativeInput.<b>variation</b></code><Bullet /><code>AlertVariation</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-alertupdatecommoncomparativeinputbvariationbcodealertvariation-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateCommonComparativeInput.<b>percentageToAlert</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatecommoncomparativeinputbpercentagetoalertbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:l=!1}=e;const[p,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&i)},b={Bullet:m,SpecifiedBy:d,Badge:u,toc:s,Details:f},g="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertUpdateCommonComparativeInput {\n  historicalWindow: Int\n  offset: Int\n  variation: AlertVariation\n  percentageToAlert: Int\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertupdatecommoncomparativeinputbhistoricalwindowbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateCommonComparativeInput.",(0,r.kt)("b",null,"historicalWindow"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The time frame in minutes to be used to compare with the window time frame")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertupdatecommoncomparativeinputboffsetbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateCommonComparativeInput.",(0,r.kt)("b",null,"offset"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Time frame in minutes to set the beginning of historicalWindow")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertupdatecommoncomparativeinputbvariationbcodealertvariation-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateCommonComparativeInput.",(0,r.kt)("b",null,"variation"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/alert-variation"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertVariation"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"According to percentageToAlert value")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertupdatecommoncomparativeinputbpercentagetoalertbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateCommonComparativeInput.",(0,r.kt)("b",null,"percentageToAlert"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Percentage of traffic to be considered status ALERTING")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-average-time-comparative-configuration-by-time-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertUpdateAverageTimeComparativeConfigurationByTimeInput"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-error-rate-comparative-configuration-by-time-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertUpdateErrorRateComparativeConfigurationByTimeInput"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-peak-traffic-comparative-configuration-by-time-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertUpdatePeakTrafficComparativeConfigurationByTimeInput"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);