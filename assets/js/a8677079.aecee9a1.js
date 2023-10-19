"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),y=o,f=d["".concat(i,".").concat(y)]||d[y]||u[y]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},69633:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var r=n(87462),o=n(67294),a=n(3905);const l={id:"transport-type",title:"TransportType",hide_table_of_contents:!1},p=void 0,i={unversionedId:"enums/transport-type",id:"enums/transport-type",title:"TransportType",description:"No description",source:"@site/api/enums/transport-type.mdx",sourceDirName:"enums",slug:"/enums/transport-type",permalink:"/api/enums/transport-type",draft:!1,tags:[],version:"current",frontMatter:{id:"transport-type",title:"TransportType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficType",permalink:"/api/enums/traffic-type"},next:{title:"TripMode",permalink:"/api/enums/trip-mode"}},s={},c=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),y=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>TransportType.<b>BUS</b></code>",id:"code-style-fontweight-normal-transporttypebbusbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransportType.<b>FERRY</b></code>",id:"code-style-fontweight-normal-transporttypebferrybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransportType.<b>FLIGHT</b></code>",id:"code-style-fontweight-normal-transporttypebflightbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransportType.<b>TRAIN</b></code>",id:"code-style-fontweight-normal-transporttypebtrainbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransportType.<b>TRANSFER</b></code>",id:"code-style-fontweight-normal-transporttypebtransferbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransportType.<b>UNKNOWN</b></code>",id:"code-style-fontweight-normal-transporttypebunknownbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:p=!1}=e;const[i,s]=(0,o.useState)(p);return(0,a.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},m={Bullet:c,SpecifiedBy:d,Badge:u,toc:y,Details:f},b="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TransportType {\n  BUS\n  FERRY\n  FLIGHT\n  TRAIN\n  TRANSFER\n  UNKNOWN\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transporttypebbusbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransportType.",(0,a.kt)("b",null,"BUS")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transporttypebferrybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransportType.",(0,a.kt)("b",null,"FERRY")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transporttypebflightbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransportType.",(0,a.kt)("b",null,"FLIGHT")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transporttypebtrainbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransportType.",(0,a.kt)("b",null,"TRAIN")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transporttypebtransferbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransportType.",(0,a.kt)("b",null,"TRANSFER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transporttypebunknownbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TransportType.",(0,a.kt)("b",null,"UNKNOWN")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/objects/transport"},(0,a.kt)("inlineCode",{parentName:"a"},"Transport"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);