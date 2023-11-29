"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64465],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,u=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return a?n.createElement(u,l(l({ref:t},i),{},{components:a})):n.createElement(u,l({ref:t},i))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},48805:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>b});var n=a(87462),r=a(67294),o=a(3905);const l={id:"stat",title:"Stat",hide_table_of_contents:!1},s=void 0,c={unversionedId:"objects/stat",id:"objects/stat",title:"Stat",description:"No description",source:"@site/api/objects/stat.mdx",sourceDirName:"objects",slug:"/objects/stat",permalink:"/api/objects/stat",draft:!1,tags:[],version:"current",frontMatter:{id:"stat",title:"Stat",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatTransaction",permalink:"/api/objects/stat-transaction"},next:{title:"StatsAggregationConnection",permalink:"/api/objects/stats-aggregation-connection"}},d={},i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Stat.<b>start</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statbstartbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Stat.<b>end</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statbendbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Stat.<b>duration</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statbdurationbcodefloat-",level:4},{value:"Member Of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:s=!1}=e;const[c,d]=(0,r.useState)(s);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},g={Bullet:i,SpecifiedBy:p,Badge:m,toc:b,Details:u},f="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Stat {\n  start: DateTime!\n  end: DateTime!\n  duration: Float\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statbstartbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Stat.",(0,o.kt)("b",null,"start"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Start UTC")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statbendbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Stat.",(0,o.kt)("b",null,"end"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"End UTC")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statbdurationbcodefloat-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Stat.",(0,o.kt)("b",null,"duration"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Difference between start and end in miliseconds")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/stat-access"},(0,o.kt)("inlineCode",{parentName:"a"},"StatAccess"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/stat-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"StatPlugin"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/stats-request"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsRequest"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/stat-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"StatTransaction"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);