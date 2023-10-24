"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),p=o,y=s["".concat(l,".").concat(p)]||s[p]||m[p]||a;return n?r.createElement(y,c(c({ref:t},d),{},{components:n})):r.createElement(y,c({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9588:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(87462),o=n(67294),a=n(3905);const c={id:"connection-order-by-enum",title:"ConnectionOrderByEnum",hide_table_of_contents:!1},i=void 0,l={unversionedId:"enums/connection-order-by-enum",id:"enums/connection-order-by-enum",title:"ConnectionOrderByEnum",description:"No description",source:"@site/api/enums/connection-order-by-enum.mdx",sourceDirName:"enums",slug:"/enums/connection-order-by-enum",permalink:"/api/enums/connection-order-by-enum",draft:!1,tags:[],version:"current",frontMatter:{id:"connection-order-by-enum",title:"ConnectionOrderByEnum",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ConditionType",permalink:"/api/enums/condition-type"},next:{title:"ConnectionType",permalink:"/api/enums/connection-type"}},u={},d=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ConnectionOrderByEnum.<b>created_at_ASC</b></code>",id:"code-style-fontweight-normal-connectionorderbyenumbcreated_at_ascbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ConnectionOrderByEnum.<b>created_at_DESC</b></code>",id:"code-style-fontweight-normal-connectionorderbyenumbcreated_at_descbcode",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:i=!1}=e;const[l,u]=(0,o.useState)(i);return(0,a.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&c)},f={Bullet:d,SpecifiedBy:s,Badge:m,toc:p,Details:y},b="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ConnectionOrderByEnum {\n  created_at_ASC\n  created_at_DESC\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-connectionorderbyenumbcreated_at_ascbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ConnectionOrderByEnum.",(0,a.kt)("b",null,"created_at_ASC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-connectionorderbyenumbcreated_at_descbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ConnectionOrderByEnum.",(0,a.kt)("b",null,"created_at_DESC")))),(0,a.kt)("blockquote",null))}g.isMDXComponent=!0}}]);