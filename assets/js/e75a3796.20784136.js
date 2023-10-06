"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,y=p["".concat(i,".").concat(b)]||p[b]||d[b]||l;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},84659:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var n=a(87462),r=a(67294),l=a(3905);const o={id:"alert-price-absolute-by-requests-input",title:"AlertPriceAbsoluteByRequestsInput",hide_table_of_contents:!1},s=void 0,i={unversionedId:"inputs/alert-price-absolute-by-requests-input",id:"inputs/alert-price-absolute-by-requests-input",title:"AlertPriceAbsoluteByRequestsInput",description:"No description",source:"@site/api/inputs/alert-price-absolute-by-requests-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-price-absolute-by-requests-input",permalink:"/api/inputs/alert-price-absolute-by-requests-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-price-absolute-by-requests-input",title:"AlertPriceAbsoluteByRequestsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertPeakTrafficComparativeConfigurationByTimeInput",permalink:"/api/inputs/alert-peak-traffic-comparative-configuration-by-time-input"},next:{title:"AlertPriceAbsoluteByTimeInput",permalink:"/api/inputs/alert-price-absolute-by-time-input"}},u={},c=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceAbsoluteByRequestsInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceAbsoluteByRequestsInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceAbsoluteByRequestsInput.<b>configuration</b></code><Bullet /><code>AlertPriceAbsoluteConfigurationByRequestsInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbconfigurationbcodealertpriceabsoluteconfigurationbyrequestsinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceAbsoluteByRequestsInput.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPriceAbsoluteByRequestsInput.<b>group</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbgroupbcodeid--",level:4}],y=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:s=!1}=e;const[i,u]=(0,r.useState)(s);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},g={Bullet:c,SpecifiedBy:p,Badge:d,toc:b,Details:y},m="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertPriceAbsoluteByRequestsInput {\n  name: String\n  description: String\n  configuration: AlertPriceAbsoluteConfigurationByRequestsInput!\n  isActive: Boolean!\n  group: ID!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceAbsoluteByRequestsInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Name of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbdescriptionbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceAbsoluteByRequestsInput.",(0,l.kt)("b",null,"description"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Description of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbconfigurationbcodealertpriceabsoluteconfigurationbyrequestsinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceAbsoluteByRequestsInput.",(0,l.kt)("b",null,"configuration"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/alert-price-absolute-configuration-by-requests-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertPriceAbsoluteConfigurationByRequestsInput!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Configuration of the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbisactivebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceAbsoluteByRequestsInput.",(0,l.kt)("b",null,"isActive"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To enable or desable the alert")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alertpriceabsolutebyrequestsinputbgroupbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertPriceAbsoluteByRequestsInput.",(0,l.kt)("b",null,"group"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"groups where the alert is setted")))}f.isMDXComponent=!0}}]);