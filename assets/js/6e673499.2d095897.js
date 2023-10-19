"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1151],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(a),g=r,b=p["".concat(c,".").concat(g)]||p[g]||u[g]||n;return a?o.createElement(b,l(l({ref:t},s),{},{components:a})):o.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<n;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},66110:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var o=a(87462),r=a(67294),n=a(3905);const l={id:"alert-type-configuration",title:"AlertTypeConfiguration",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/alert-type-configuration",id:"objects/alert-type-configuration",title:"AlertTypeConfiguration",description:"Depending on the alert type, typeConfiguration will use some fields",source:"@site/api/objects/alert-type-configuration.mdx",sourceDirName:"objects",slug:"/objects/alert-type-configuration",permalink:"/api/objects/alert-type-configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-type-configuration",title:"AlertTypeConfiguration",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertSlack",permalink:"/api/objects/alert-slack"},next:{title:"Alert",permalink:"/api/objects/alert"}},d={},s=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertTypeConfiguration.<b>maxAverageTime</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerttypeconfigurationbmaxaveragetimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertTypeConfiguration.<b>maxTime</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerttypeconfigurationbmaxtimebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertTypeConfiguration.<b>requestsToAlert</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerttypeconfigurationbrequeststoalertbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertTypeConfiguration.<b>toCheck</b></code><Bullet /><code>[Int!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerttypeconfigurationbtocheckbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertTypeConfiguration.<b>toCompare</b></code><Bullet /><code>[Int!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerttypeconfigurationbtocomparebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertTypeConfiguration.<b>price</b></code><Bullet /><code>AlertPrice</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-alerttypeconfigurationbpricebcodealertprice-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertTypeConfiguration.<b>bounds</b></code><Bullet /><code>AlertBounds</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-alerttypeconfigurationbboundsbcodealertbounds-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertTypeConfiguration.<b>ratios</b></code><Bullet /><code>AlertRatios</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-alerttypeconfigurationbratiosbcodealertratios-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[c,d]=(0,r.useState)(i);return(0,n.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},f={Bullet:s,SpecifiedBy:p,Badge:u,toc:g,Details:b},m="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Depending on the alert type, typeConfiguration will use some fields"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type AlertTypeConfiguration {\n  maxAverageTime: Int\n  maxTime: Int\n  requestsToAlert: Int\n  toCheck: [Int!]\n  toCompare: [Int!]\n  price: AlertPrice\n  bounds: AlertBounds\n  ratios: AlertRatios\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-alerttypeconfigurationbmaxaveragetimebcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AlertTypeConfiguration.",(0,n.kt)("b",null,"maxAverageTime"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Average time not allowed in miliseconds. Used for Average time alert type")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-alerttypeconfigurationbmaxtimebcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AlertTypeConfiguration.",(0,n.kt)("b",null,"maxTime"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Time not allowed in miliseconds. Used for Average time alert type")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-alerttypeconfigurationbrequeststoalertbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AlertTypeConfiguration.",(0,n.kt)("b",null,"requestsToAlert"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Requests vs total requests checked to consider alert in ALERTING status. Used for Average time alert type")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-alerttypeconfigurationbtocheckbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AlertTypeConfiguration.",(0,n.kt)("b",null,"toCheck"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Error codes to be Checked. By default all error codes excepts 0. Used for Error rate alert Type")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-alerttypeconfigurationbtocomparebcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AlertTypeConfiguration.",(0,n.kt)("b",null,"toCompare"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Error codes to be Compared with Checked codes. By default all error codes. Used for Error rate alert Type")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-alerttypeconfigurationbpricebcodealertprice-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AlertTypeConfiguration.",(0,n.kt)("b",null,"price"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/alert-price"},(0,n.kt)("inlineCode",{parentName:"a"},"AlertPrice"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Price contains the specific configuration for Price alert Type")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-alerttypeconfigurationbboundsbcodealertbounds-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AlertTypeConfiguration.",(0,n.kt)("b",null,"bounds"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/alert-bounds"},(0,n.kt)("inlineCode",{parentName:"a"},"AlertBounds"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Bounds contains the specific configuration for Peak Traffic alert Type")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-alerttypeconfigurationbratiosbcodealertratios-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AlertTypeConfiguration.",(0,n.kt)("b",null,"ratios"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/alert-ratios"},(0,n.kt)("inlineCode",{parentName:"a"},"AlertRatios"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Ratios contains the specific configuration for Business MEtric alert type")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/alert-configuration"},(0,n.kt)("inlineCode",{parentName:"a"},"AlertConfiguration"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);