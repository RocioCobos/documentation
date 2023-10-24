"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92400],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=o.createContext({}),s=function(t){var e=o.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},p=function(t){var e=s(t.components);return o.createElement(c.Provider,{value:e},t.children)},f="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=s(a),m=r,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return a?o.createElement(d,n(n({ref:e},p),{},{components:a})):o.createElement(d,n({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,n=new Array(i);n[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[f]="string"==typeof t?t:r,n[1]=l;for(var s=2;s<i;s++)n[s]=a[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45856:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>u,Bullet:()=>p,Details:()=>d,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>n,metadata:()=>c,toc:()=>m});var o=a(87462),r=a(67294),i=a(3905);const n={id:"traffic-optimization-stats-data-group-by",title:"TrafficOptimizationStatsDataGroupBy",hide_table_of_contents:!1},l=void 0,c={unversionedId:"enums/traffic-optimization-stats-data-group-by",id:"enums/traffic-optimization-stats-data-group-by",title:"TrafficOptimizationStatsDataGroupBy",description:"No description",source:"@site/api/enums/traffic-optimization-stats-data-group-by.mdx",sourceDirName:"enums",slug:"/enums/traffic-optimization-stats-data-group-by",permalink:"/api/enums/traffic-optimization-stats-data-group-by",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-stats-data-group-by",title:"TrafficOptimizationStatsDataGroupBy",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationRequester",permalink:"/api/enums/traffic-optimization-requester"},next:{title:"TrafficType",permalink:"/api/enums/traffic-type"}},s={},p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=t=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),u=t=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:t.class},t.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>TrafficOptimizationStatsDataGroupBy.<b>BUYER</b></code>",id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybbuyerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TrafficOptimizationStatsDataGroupBy.<b>SELLER</b></code>",id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybsellerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TrafficOptimizationStatsDataGroupBy.<b>ACCESS</b></code>",id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybaccessbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TrafficOptimizationStatsDataGroupBy.<b>SUPPLIER</b></code>",id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybsupplierbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TrafficOptimizationStatsDataGroupBy.<b>BLACKLIST_TYPE</b></code>",id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybblacklist_typebcode",level:4},{value:"Member of",id:"member-of",level:3}],d=t=>{let{dataOpen:e,dataClose:a,children:n,startOpen:l=!1}=t;const[c,s]=(0,r.useState)(l);return(0,i.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:t=>{t.preventDefault(),s((t=>!t))},style:{listStyle:"none"}},c?e:a),c&&n)},y={Bullet:p,SpecifiedBy:f,Badge:u,toc:m,Details:d},b="wrapper";function g(t){let{components:e,...a}=t;return(0,i.kt)(b,(0,o.Z)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TrafficOptimizationStatsDataGroupBy {\n  BUYER\n  SELLER\n  ACCESS\n  SUPPLIER\n  BLACKLIST_TYPE\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybbuyerbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationStatsDataGroupBy.",(0,i.kt)("b",null,"BUYER")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybsellerbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationStatsDataGroupBy.",(0,i.kt)("b",null,"SELLER")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybaccessbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationStatsDataGroupBy.",(0,i.kt)("b",null,"ACCESS")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybsupplierbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationStatsDataGroupBy.",(0,i.kt)("b",null,"SUPPLIER")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationstatsdatagroupbybblacklist_typebcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationStatsDataGroupBy.",(0,i.kt)("b",null,"BLACKLIST_TYPE")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/traffic-optimization-stats-aggregation-group-by-input"},(0,i.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsAggregationGroupByInput"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);