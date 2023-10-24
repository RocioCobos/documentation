"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56843],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(m,c(c({ref:t},l),{},{components:a})):n.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},84928:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>f});var n=a(87462),r=a(67294),i=a(3905);const c={id:"traffic-optimization-update-access-where-input",title:"TrafficOptimizationUpdateAccessWhereInput",hide_table_of_contents:!1},o=void 0,s={unversionedId:"inputs/traffic-optimization-update-access-where-input",id:"inputs/traffic-optimization-update-access-where-input",title:"TrafficOptimizationUpdateAccessWhereInput",description:"No description",source:"@site/api/inputs/traffic-optimization-update-access-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/traffic-optimization-update-access-where-input",permalink:"/api/inputs/traffic-optimization-update-access-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-update-access-where-input",title:"TrafficOptimizationUpdateAccessWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationUpdateAccessDataInput",permalink:"/api/inputs/traffic-optimization-update-access-data-input"},next:{title:"TrafficOptimizationUpdateAllAccessesCriteriaDataInput",permalink:"/api/inputs/traffic-optimization-update-all-accesses-criteria-data-input"}},p={},l=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationUpdateAccessWhereInput.<b>accessCode</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationupdateaccesswhereinputbaccesscodebcodeid--",level:4}],m=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:o=!1}=e;const[s,p]=(0,r.useState)(o);return(0,i.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&c)},y={Bullet:l,SpecifiedBy:d,Badge:u,toc:f,Details:m},b="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(b,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input TrafficOptimizationUpdateAccessWhereInput {\n  accessCode: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationupdateaccesswhereinputbaccesscodebcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationUpdateAccessWhereInput.",(0,i.kt)("b",null,"accessCode"))),(0,i.kt)(l,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}g.isMDXComponent=!0}}]);