"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(d,l(l({ref:t},p),{},{components:r})):a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3682:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,Details:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var a=r(87462),n=r(67294),o=r(3905);const l={id:"area",title:"Area",hide_table_of_contents:!1},i=void 0,c={unversionedId:"scalars/area",id:"scalars/area",title:"Area",description:"Area(m\xb2) International System of Units.",source:"@site/api/scalars/area.mdx",sourceDirName:"scalars",slug:"/scalars/area",permalink:"/api/scalars/area",draft:!1,tags:[],version:"current",frontMatter:{id:"area",title:"Area",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertEmail",permalink:"/api/scalars/alert-email"},next:{title:"Arrival",permalink:"/api/scalars/arrival"}},s={},p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Member of",id:"member-of",level:3}],d=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[c,s]=(0,n.useState)(i);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&l)},y={Bullet:p,SpecifiedBy:u,Badge:m,toc:f,Details:d},b="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Area(m\xb2) International System of Units."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Area\n")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/room-data"},(0,o.kt)("inlineCode",{parentName:"a"},"RoomData"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);