"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81999:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>c,assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=n(67294),i=n(3905);const o={id:"alert-update-common-by-requests-input",title:"AlertUpdateCommonByRequestsInput",hide_table_of_contents:!1},u=void 0,l={unversionedId:"inputs/alert-update-common-by-requests-input",id:"inputs/alert-update-common-by-requests-input",title:"AlertUpdateCommonByRequestsInput",description:"No description",source:"@site/api/inputs/alert-update-common-by-requests-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-common-by-requests-input",permalink:"/api/inputs/alert-update-common-by-requests-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-update-common-by-requests-input",title:"AlertUpdateCommonByRequestsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertUpdateBusinessMetricRatioConfigurationByTimeInput",permalink:"/api/inputs/alert-update-business-metric-ratio-configuration-by-time-input"},next:{title:"AlertUpdateCommonByTimeInput",permalink:"/api/inputs/alert-update-common-by-time-input"}},p={},s=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdateCommonByRequestsInput.<b>minNumberRequests</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatecommonbyrequestsinputbminnumberrequestsbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:u=!1}=e;const[l,p]=(0,a.useState)(u);return(0,i.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&o)},b={Bullet:s,SpecifiedBy:c,Badge:d,toc:m,Details:y},f="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertUpdateCommonByRequestsInput {\n  minNumberRequests: Int\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdatecommonbyrequestsinputbminnumberrequestsbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdateCommonByRequestsInput.",(0,i.kt)("b",null,"minNumberRequests"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"minimum number of requests to check the alert")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-average-time-absolute-configuration-by-requests-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateAverageTimeAbsoluteConfigurationByRequestsInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-average-time-relative-configuration-by-requests-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateAverageTimeRelativeConfigurationByRequestsInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-error-rate-relative-configuration-by-requests-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdateErrorRateRelativeConfigurationByRequestsInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-price-absolute-configuration-by-requests-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdatePriceAbsoluteConfigurationByRequestsInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-price-relative-configuration-by-requests-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdatePriceRelativeConfigurationByRequestsInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);