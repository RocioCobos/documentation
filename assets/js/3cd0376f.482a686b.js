"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86387],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},f="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=c(a),m=i,u=f["".concat(s,".").concat(m)]||f[m]||d[m]||o;return a?n.createElement(u,r(r({ref:e},p),{},{components:a})):n.createElement(u,r({ref:e},p))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[f]="string"==typeof t?t:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14142:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>d,Bullet:()=>p,Details:()=>u,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(87462),i=a(67294),o=a(3905);const r={id:"traffic-optimization-hotel-stats-data",title:"TrafficOptimizationHotelStatsData",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/traffic-optimization-hotel-stats-data",id:"objects/traffic-optimization-hotel-stats-data",title:"TrafficOptimizationHotelStatsData",description:"No description",source:"@site/api/objects/traffic-optimization-hotel-stats-data.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-hotel-stats-data",permalink:"/api/objects/traffic-optimization-hotel-stats-data",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-hotel-stats-data",title:"TrafficOptimizationHotelStatsData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationHotelStatsAggregation",permalink:"/api/objects/traffic-optimization-hotel-stats-aggregation"},next:{title:"TrafficOptimizationHotelStats",permalink:"/api/objects/traffic-optimization-hotel-stats"}},c={},p=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=t=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),d=t=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:t.class},t.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationHotelStatsData.<b>hits</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationhotelstatsdatabhitsbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],u=t=>{let{dataOpen:e,dataClose:a,children:r,startOpen:l=!1}=t;const[s,c]=(0,i.useState)(l);return(0,o.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:t=>{t.preventDefault(),c((t=>!t))},style:{listStyle:"none"}},s?e:a),s&&r)},b={Bullet:p,SpecifiedBy:f,Badge:d,toc:m,Details:u},y="wrapper";function g(t){let{components:e,...a}=t;return(0,o.kt)(y,(0,n.Z)({},b,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationHotelStatsData {\n  hits: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationhotelstatsdatabhitsbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationHotelStatsData.",(0,o.kt)("b",null,"hits"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-hotel-stats"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelStats"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-stats-hotel-blacklist"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsHotelBlacklist"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-stats-hotel-blacklist-access"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsHotelBlacklistAccess"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);