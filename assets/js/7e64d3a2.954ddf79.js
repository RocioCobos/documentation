"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),b=c(a),m=o,g=b["".concat(r,".").concat(m)]||b[m]||p[m]||s;return a?n.createElement(g,l(l({ref:t},i),{},{components:a})):n.createElement(g,l({ref:t},i))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,l=new Array(s);l[0]=m;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[b]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91943:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var n=a(87462),o=a(67294),s=a(3905);const l={id:"stats-info",title:"StatsInfo",hide_table_of_contents:!1},d=void 0,r={unversionedId:"objects/stats-info",id:"objects/stats-info",title:"StatsInfo",description:"Details of an specific error",source:"@site/api/objects/stats-info.mdx",sourceDirName:"objects",slug:"/objects/stats-info",permalink:"/api/objects/stats-info",draft:!1,tags:[],version:"current",frontMatter:{id:"stats-info",title:"StatsInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatsEdge",permalink:"/api/objects/stats-edge"},next:{title:"StatsQuery",permalink:"/api/objects/stats-query"}},c={},i=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatsInfo.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsinfobcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsInfo.<b>type</b></code><Bullet /><code>StatsInfoTypes!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-statsinfobtypebcodestatsinfotypes--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsInfo.<b>hits</b></code><Bullet /><code>Int64!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsinfobhitsbcodeint64--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsInfo.<b>time</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsinfobtimebcodeint---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsInfo.<b>averageTime</b></code><Bullet /><code>Int64!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsinfobaveragetimebcodeint64--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsInfo.<b>totalTime</b></code><Bullet /><code>Int64!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsinfobtotaltimebcodeint64--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsInfo.<b>assets</b></code><Bullet /><code>[StatsAsset!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsinfobassetsbcodestatsasset--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[r,c]=(0,o.useState)(d);return(0,s.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&l)},f={Bullet:i,SpecifiedBy:b,Badge:p,toc:m,Details:g},u="wrapper";function y(e){let{components:t,...a}=e;return(0,s.kt)(u,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Details of an specific error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type StatsInfo {\n  code: ID!\n  type: StatsInfoTypes!\n  hits: Int64!\n  time: Int! @deprecated\n  averageTime: Int64!\n  totalTime: Int64!\n  assets: [StatsAsset!]\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfobcodebcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfo.",(0,s.kt)("b",null,"code"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfobtypebcodestatsinfotypes--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfo.",(0,s.kt)("b",null,"type"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/enums/stats-info-types"},(0,s.kt)("inlineCode",{parentName:"a"},"StatsInfoTypes!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Stats type")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfobhitsbcodeint64--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfo.",(0,s.kt)("b",null,"hits"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/int-64"},(0,s.kt)("inlineCode",{parentName:"a"},"Int64!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Total hits")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfobtimebcodeint---"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfo.",(0,s.kt)("b",null,"time"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(p,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"deprecated from 2019-04-03. Added new fields averageTime and totalTime.")),(0,s.kt)("p",{parentName:"blockquote"},"Average time (ms)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfobaveragetimebcodeint64--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfo.",(0,s.kt)("b",null,"averageTime"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/int-64"},(0,s.kt)("inlineCode",{parentName:"a"},"Int64!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Average time (ms)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfobtotaltimebcodeint64--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfo.",(0,s.kt)("b",null,"totalTime"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/int-64"},(0,s.kt)("inlineCode",{parentName:"a"},"Int64!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Total time (ms)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfobassetsbcodestatsasset--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfo.",(0,s.kt)("b",null,"assets"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stats-asset"},(0,s.kt)("inlineCode",{parentName:"a"},"[StatsAsset!]"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Details about errors.")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api/objects/operation-detailed"},(0,s.kt)("inlineCode",{parentName:"a"},"OperationDetailed"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);