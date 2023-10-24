"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15326],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},61815:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var n=a(87462),r=a(67294),l=a(3905);const o={id:"alert-peak-traffic-absolute-by-time-input",title:"AlertPeakTrafficAbsoluteByTimeInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"inputs/alert-peak-traffic-absolute-by-time-input",id:"inputs/alert-peak-traffic-absolute-by-time-input",title:"AlertPeakTrafficAbsoluteByTimeInput",description:"No description",source:"@site/api/inputs/alert-peak-traffic-absolute-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-peak-traffic-absolute-by-time-input",permalink:"/api/inputs/alert-peak-traffic-absolute-by-time-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-peak-traffic-absolute-by-time-input",title:"AlertPeakTrafficAbsoluteByTimeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertObjectInput",permalink:"/api/inputs/alert-object-input"},next:{title:"AlertPeakTrafficAbsoluteConfigurationByTimeInput",permalink:"/api/inputs/alert-peak-traffic-absolute-configuration-by-time-input"}},s={},u=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPeakTrafficAbsoluteByTimeInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPeakTrafficAbsoluteByTimeInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPeakTrafficAbsoluteByTimeInput.<b>configuration</b></code><Bullet /><code>AlertPeakTrafficAbsoluteConfigurationByTimeInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbconfigurationbcodealertpeaktrafficabsoluteconfigurationbytimeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPeakTrafficAbsoluteByTimeInput.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPeakTrafficAbsoluteByTimeInput.<b>group</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbgroupbcodeid--",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[c,s]=(0,r.useState)(i);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},m={Bullet:u,SpecifiedBy:p,Badge:d,toc:f,Details:b},g="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertPeakTrafficAbsoluteByTimeInput {\n  name: String\n  description: String\n  configuration: AlertPeakTrafficAbsoluteConfigurationByTimeInput!\n  isActive: Boolean!\n  group: ID!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPeakTrafficAbsoluteByTimeInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Name of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbdescriptionbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPeakTrafficAbsoluteByTimeInput.",(0,l.kt)("b",null,"description"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Description of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbconfigurationbcodealertpeaktrafficabsoluteconfigurationbytimeinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPeakTrafficAbsoluteByTimeInput.",(0,l.kt)("b",null,"configuration"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/alert-peak-traffic-absolute-configuration-by-time-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertPeakTrafficAbsoluteConfigurationByTimeInput!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Configuration of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbisactivebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPeakTrafficAbsoluteByTimeInput.",(0,l.kt)("b",null,"isActive"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To enable or desable the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpeaktrafficabsolutebytimeinputbgroupbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPeakTrafficAbsoluteByTimeInput.",(0,l.kt)("b",null,"group"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"groups where the alert is setted")))}y.isMDXComponent=!0}}]);