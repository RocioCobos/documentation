"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50077],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3047:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>f});var n=r(87462),a=r(67294),l=r(3905);const o={id:"alerts-x",title:"alertsX",hide_table_of_contents:!1},i=void 0,s={unversionedId:"queries/alerts-x",id:"queries/alerts-x",title:"alertsX",description:"The alertsX product query root for implementing GraphQL query.",source:"@site/api/queries/alerts-x.mdx",sourceDirName:"queries",slug:"/queries/alerts-x",permalink:"/api/queries/alerts-x",draft:!1,tags:[],version:"current",frontMatter:{id:"alerts-x",title:"alertsX",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"admin",permalink:"/api/queries/admin"},next:{title:"hotelX",permalink:"/api/queries/hotel-x"}},c={},u=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Type",id:"type",level:3},{value:'<code>AlertsXQuery</code> <Badge class="badge badge--secondary" text="object"/>',id:"alertsxquery-",level:4}],m=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:i=!1}=e;const[s,c]=(0,a.useState)(i);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&o)},y={Bullet:u,SpecifiedBy:p,Badge:d,toc:f,Details:m},b="wrapper";function g(e){let{components:t,...r}=e;return(0,l.kt)(b,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The alertsX product query root for implementing GraphQL query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"alertsX: AlertsXQuery\n")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"alertsxquery-"},(0,l.kt)("a",{parentName:"h4",href:"/api/objects/alerts-xquery"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertsXQuery"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}g.isMDXComponent=!0}}]);