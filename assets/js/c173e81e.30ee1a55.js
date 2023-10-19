"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2554],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(a),p=i,u=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return a?n.createElement(u,r(r({ref:t},s),{},{components:a})):n.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,r[1]=c;for(var m=2;m<o;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},61197:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>d,assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=a(67294),o=a(3905);const r={id:"traffic-optimization-recommendation",title:"TrafficOptimizationRecommendation",hide_table_of_contents:!1},c=void 0,l={unversionedId:"objects/traffic-optimization-recommendation",id:"objects/traffic-optimization-recommendation",title:"TrafficOptimizationRecommendation",description:"No description",source:"@site/api/objects/traffic-optimization-recommendation.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-recommendation",permalink:"/api/objects/traffic-optimization-recommendation",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-recommendation",title:"TrafficOptimizationRecommendation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationRecommendationAllAccessesData",permalink:"/api/objects/traffic-optimization-recommendation-all-accesses-data"},next:{title:"TrafficOptimizationRecommendationsAllAccesses",permalink:"/api/objects/traffic-optimization-recommendations-all-accesses"}},m={},s=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationRecommendation.<b>trafficOptimizationRecommendationAllAccessesData</b></code><Bullet /><code>TrafficOptimizationRecommendationAllAccessesData!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationrecommendationbtrafficoptimizationrecommendationallaccessesdatabcodetrafficoptimizationrecommendationallaccessesdata--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:c=!1}=e;const[l,m]=(0,i.useState)(c);return(0,o.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),m((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&r)},b={Bullet:s,SpecifiedBy:d,Badge:f,toc:p,Details:u},y="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationRecommendation {\n  trafficOptimizationRecommendationAllAccessesData: TrafficOptimizationRecommendationAllAccessesData!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationrecommendationbtrafficoptimizationrecommendationallaccessesdatabcodetrafficoptimizationrecommendationallaccessesdata--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationRecommendation.",(0,o.kt)("b",null,"trafficOptimizationRecommendationAllAccessesData"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-recommendation-all-accesses-data"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationRecommendationAllAccessesData!"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-recommendations-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationRecommendationsEdge"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);