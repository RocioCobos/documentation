"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42766:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(87462),a=n(67294),i=n(3905);const o={id:"unit-time-type",title:"UnitTimeType",hide_table_of_contents:!1},l=void 0,p={unversionedId:"enums/unit-time-type",id:"enums/unit-time-type",title:"UnitTimeType",description:"Unit Time Type",source:"@site/api/enums/unit-time-type.mdx",sourceDirName:"enums",slug:"/enums/unit-time-type",permalink:"/api/enums/unit-time-type",draft:!1,tags:[],version:"current",frontMatter:{id:"unit-time-type",title:"UnitTimeType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TripMode",permalink:"/api/enums/trip-mode"},next:{title:"Schema Documentation",permalink:"/api/"}},c={},u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>UnitTimeType.<b>DAY</b></code>",id:"code-style-fontweight-normal-unittimetypebdaybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UnitTimeType.<b>HOUR</b></code>",id:"code-style-fontweight-normal-unittimetypebhourbcode",level:4},{value:"Member Of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[p,c]=(0,a.useState)(l);return(0,i.kt)("details",(0,r.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&o)},f={Bullet:u,SpecifiedBy:m,Badge:s,toc:d,Details:y},b="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unit Time Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum UnitTimeType {\n  DAY\n  HOUR\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-unittimetypebdaybcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UnitTimeType.",(0,i.kt)("b",null,"DAY")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Day")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-unittimetypebhourbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UnitTimeType.",(0,i.kt)("b",null,"HOUR")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hour")),(0,i.kt)("h3",{id:"member-of"},"Member Of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/supplement"},(0,i.kt)("inlineCode",{parentName:"a"},"Supplement"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/supplement-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplementInput"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);