"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,y=d["".concat(i,".").concat(f)]||d[f]||u[f]||s;return n?o.createElement(y,r(r({ref:t},p),{},{components:n})):o.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<s;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1714:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>y,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>f});var o=n(87462),a=n(67294),s=n(3905);const r={id:"stats-info-types",title:"StatsInfoTypes",hide_table_of_contents:!1},l=void 0,i={unversionedId:"enums/stats-info-types",id:"enums/stats-info-types",title:"StatsInfoTypes",description:"No description",source:"@site/api/enums/stats-info-types.mdx",sourceDirName:"enums",slug:"/enums/stats-info-types",permalink:"/api/enums/stats-info-types",draft:!1,tags:[],version:"current",frontMatter:{id:"stats-info-types",title:"StatsInfoTypes",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatsDataGroupBy",permalink:"/api/enums/stats-data-group-by"},next:{title:"StatsTimeGroupBy",permalink:"/api/enums/stats-time-group-by"}},c={},p=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),f=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>StatsInfoTypes.<b>ALL</b></code>",id:"code-style-fontweight-normal-statsinfotypesballbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StatsInfoTypes.<b>OK</b></code>",id:"code-style-fontweight-normal-statsinfotypesbokbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StatsInfoTypes.<b>INTEGRATION</b></code>",id:"code-style-fontweight-normal-statsinfotypesbintegrationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StatsInfoTypes.<b>PROVIDER</b></code>",id:"code-style-fontweight-normal-statsinfotypesbproviderbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StatsInfoTypes.<b>COMMUNICATION</b></code>",id:"code-style-fontweight-normal-statsinfotypesbcommunicationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StatsInfoTypes.<b>HUB</b></code>",id:"code-style-fontweight-normal-statsinfotypesbhubbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StatsInfoTypes.<b>OTHER</b></code>",id:"code-style-fontweight-normal-statsinfotypesbotherbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[i,c]=(0,a.useState)(l);return(0,s.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&r)},m={Bullet:p,SpecifiedBy:d,Badge:u,toc:f,Details:y},b="wrapper";function k(e){let{components:t,...n}=e;return(0,s.kt)(b,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"enum StatsInfoTypes {\n  ALL\n  OK\n  INTEGRATION\n  PROVIDER\n  COMMUNICATION\n  HUB\n  OTHER\n}\n")),(0,s.kt)("h3",{id:"values"},"Values"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfotypesballbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfoTypes.",(0,s.kt)("b",null,"ALL")))),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfotypesbokbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfoTypes.",(0,s.kt)("b",null,"OK")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Stats in OK state")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfotypesbintegrationbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfoTypes.",(0,s.kt)("b",null,"INTEGRATION")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Stats in NOK state caused by integration issues")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfotypesbproviderbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfoTypes.",(0,s.kt)("b",null,"PROVIDER")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Stats in NOK state caused by supplier issues")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfotypesbcommunicationbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfoTypes.",(0,s.kt)("b",null,"COMMUNICATION")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Stats in NOK state caused by Timeout")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfotypesbhubbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfoTypes.",(0,s.kt)("b",null,"HUB")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Stats in NOK state caused by HUB issues")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsinfotypesbotherbcode"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsInfoTypes.",(0,s.kt)("b",null,"OTHER")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Stats in NOK state caused by other causes")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api/inputs/error-filter"},(0,s.kt)("inlineCode",{parentName:"a"},"ErrorFilter"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/logging-legacy-data"},(0,s.kt)("inlineCode",{parentName:"a"},"LoggingLegacyData"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/stats-info"},(0,s.kt)("inlineCode",{parentName:"a"},"StatsInfo"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);