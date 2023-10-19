"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(a),f=r,b=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},63837:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>f});var n=a(87462),r=a(67294),i=a(3905);const o={id:"alert-update-peak-traffic-absolute-by-time-input",title:"AlertUpdatePeakTrafficAbsoluteByTimeInput",hide_table_of_contents:!1},l=void 0,p={unversionedId:"inputs/alert-update-peak-traffic-absolute-by-time-input",id:"inputs/alert-update-peak-traffic-absolute-by-time-input",title:"AlertUpdatePeakTrafficAbsoluteByTimeInput",description:"No description",source:"@site/api/inputs/alert-update-peak-traffic-absolute-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-peak-traffic-absolute-by-time-input",permalink:"/api/inputs/alert-update-peak-traffic-absolute-by-time-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-update-peak-traffic-absolute-by-time-input",title:"AlertUpdatePeakTrafficAbsoluteByTimeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertUpdateNotificationsInput",permalink:"/api/inputs/alert-update-notifications-input"},next:{title:"AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput",permalink:"/api/inputs/alert-update-peak-traffic-absolute-configuration-by-time-input"}},c={},u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdatePeakTrafficAbsoluteByTimeInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatepeaktrafficabsolutebytimeinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdatePeakTrafficAbsoluteByTimeInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatepeaktrafficabsolutebytimeinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdatePeakTrafficAbsoluteByTimeInput.<b>configuration</b></code><Bullet /><code>AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertupdatepeaktrafficabsolutebytimeinputbconfigurationbcodealertupdatepeaktrafficabsoluteconfigurationbytimeinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertUpdatePeakTrafficAbsoluteByTimeInput.<b>isActive</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertupdatepeaktrafficabsolutebytimeinputbisactivebcodeboolean-",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[p,c]=(0,r.useState)(l);return(0,i.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&o)},m={Bullet:u,SpecifiedBy:s,Badge:d,toc:f,Details:b},y="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertUpdatePeakTrafficAbsoluteByTimeInput {\n  name: String\n  description: String\n  configuration: AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput\n  isActive: Boolean\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdatepeaktrafficabsolutebytimeinputbnamebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdatePeakTrafficAbsoluteByTimeInput.",(0,i.kt)("b",null,"name"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Name of the alert")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdatepeaktrafficabsolutebytimeinputbdescriptionbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdatePeakTrafficAbsoluteByTimeInput.",(0,i.kt)("b",null,"description"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Description of the alert")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdatepeaktrafficabsolutebytimeinputbconfigurationbcodealertupdatepeaktrafficabsoluteconfigurationbytimeinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdatePeakTrafficAbsoluteByTimeInput.",(0,i.kt)("b",null,"configuration"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/alert-update-peak-traffic-absolute-configuration-by-time-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Configuration of the alert")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-alertupdatepeaktrafficabsolutebytimeinputbisactivebcodeboolean-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AlertUpdatePeakTrafficAbsoluteByTimeInput.",(0,i.kt)("b",null,"isActive"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To enable or desable the alert")))}k.isMDXComponent=!0}}]);