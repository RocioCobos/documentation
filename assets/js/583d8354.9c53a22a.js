"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29014],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69354:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=r(87462),a=r(67294),o=r(3905);const l={id:"alerts-x",title:"alertsX",hide_table_of_contents:!1},i=void 0,s={unversionedId:"mutations/alerts-x",id:"mutations/alerts-x",title:"alertsX",description:"No description",source:"@site/api/mutations/alerts-x.mdx",sourceDirName:"mutations",slug:"/mutations/alerts-x",permalink:"/api/mutations/alerts-x",draft:!1,tags:[],version:"current",frontMatter:{id:"alerts-x",title:"alertsX",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"admin",permalink:"/api/mutations/admin"},next:{title:"hotelX",permalink:"/api/mutations/hotel-x"}},c={},p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Type",id:"type",level:3},{value:'<code>AlertsXMutation</code> <Badge class="badge badge--secondary" text="object"/>',id:"alertsxmutation-",level:4}],f=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[s,c]=(0,a.useState)(i);return(0,o.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&l)},y={Bullet:p,SpecifiedBy:u,Badge:d,toc:m,Details:f},b="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"alertsX: AlertsXMutation\n")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"alertsxmutation-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/alerts-xmutation"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertsXMutation"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}g.isMDXComponent=!0}}]);