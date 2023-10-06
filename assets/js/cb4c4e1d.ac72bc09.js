"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5775:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=n(87462),a=n(67294),l=n(3905);const o={id:"alert-event-type",title:"AlertEventType",hide_table_of_contents:!1},i=void 0,c={unversionedId:"enums/alert-event-type",id:"enums/alert-event-type",title:"AlertEventType",description:"No description",source:"@site/api/enums/alert-event-type.mdx",sourceDirName:"enums",slug:"/enums/alert-event-type",permalink:"/api/enums/alert-event-type",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-event-type",title:"AlertEventType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertEmailType",permalink:"/api/enums/alert-email-type"},next:{title:"AlertGroups",permalink:"/api/enums/alert-groups"}},p={},s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AlertEventType.<b>OK</b></code>",id:"code-style-fontweight-normal-alerteventtypebokbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AlertEventType.<b>ALERTING</b></code>",id:"code-style-fontweight-normal-alerteventtypebalertingbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[c,p]=(0,a.useState)(i);return(0,l.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},f={Bullet:s,SpecifiedBy:u,Badge:d,toc:m,Details:y},b="wrapper";function v(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AlertEventType {\n  OK\n  ALERTING\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alerteventtypebokbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertEventType.",(0,l.kt)("b",null,"OK")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alerteventtypebalertingbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertEventType.",(0,l.kt)("b",null,"ALERTING")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/alert-event-data"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertEventData"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);