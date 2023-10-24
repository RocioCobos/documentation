"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98461:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(87462),n=r(67294),i=r(3905);const o={id:"search-criteria",title:"searchCriteria",hide_table_of_contents:!1},c=void 0,l={unversionedId:"mutations/search-criteria",id:"mutations/search-criteria",title:"searchCriteria",description:"No description",source:"@site/api/mutations/search-criteria.mdx",sourceDirName:"mutations",slug:"/mutations/search-criteria",permalink:"/api/mutations/search-criteria",draft:!1,tags:[],version:"current",frontMatter:{id:"search-criteria",title:"searchCriteria",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"paymentX",permalink:"/api/mutations/payment-x"},next:{title:"social",permalink:"/api/mutations/social"}},s={},p=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Type",id:"type",level:3},{value:'<code>SearchCriteriaMutation</code> <Badge class="badge badge--secondary" text="object"/>',id:"searchcriteriamutation-",level:4}],f=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:c=!1}=e;const[l,s]=(0,n.useState)(c);return(0,i.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:r),l&&o)},y={Bullet:p,SpecifiedBy:u,Badge:d,toc:m,Details:f},b="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(b,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"searchCriteria: SearchCriteriaMutation\n")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"searchcriteriamutation-"},(0,i.kt)("a",{parentName:"h4",href:"/api/objects/search-criteria-mutation"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchCriteriaMutation"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}h.isMDXComponent=!0}}]);