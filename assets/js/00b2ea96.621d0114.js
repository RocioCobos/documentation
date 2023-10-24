"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||a;return n?o.createElement(f,c(c({ref:t},m),{},{components:n})):o.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79757:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=n(87462),r=n(67294),a=n(3905);const c={id:"contact-importance",title:"ContactImportance",hide_table_of_contents:!1},l=void 0,i={unversionedId:"enums/contact-importance",id:"enums/contact-importance",title:"ContactImportance",description:"No description",source:"@site/api/enums/contact-importance.mdx",sourceDirName:"enums",slug:"/enums/contact-importance",permalink:"/api/enums/contact-importance",draft:!1,tags:[],version:"current",frontMatter:{id:"contact-importance",title:"ContactImportance",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ConnectionType",permalink:"/api/enums/connection-type"},next:{title:"ContentType",permalink:"/api/enums/content-type"}},p={},m=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ContactImportance.<b>EXECUTION_LEVEL</b></code>",id:"code-style-fontweight-normal-contactimportancebexecution_levelbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ContactImportance.<b>DECISION_MAKER</b></code>",id:"code-style-fontweight-normal-contactimportancebdecision_makerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ContactImportance.<b>PRIMARY</b></code>",id:"code-style-fontweight-normal-contactimportancebprimarybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ContactImportance.<b>MINOR</b></code>",id:"code-style-fontweight-normal-contactimportancebminorbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[i,p]=(0,r.useState)(l);return(0,a.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},b={Bullet:m,SpecifiedBy:s,Badge:u,toc:d,Details:f},y="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ContactImportance {\n  EXECUTION_LEVEL\n  DECISION_MAKER\n  PRIMARY\n  MINOR\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-contactimportancebexecution_levelbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ContactImportance.",(0,a.kt)("b",null,"EXECUTION_LEVEL")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-contactimportancebdecision_makerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ContactImportance.",(0,a.kt)("b",null,"DECISION_MAKER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-contactimportancebprimarybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ContactImportance.",(0,a.kt)("b",null,"PRIMARY")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-contactimportancebminorbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ContactImportance.",(0,a.kt)("b",null,"MINOR")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/crm-data-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CrmDataInput"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);