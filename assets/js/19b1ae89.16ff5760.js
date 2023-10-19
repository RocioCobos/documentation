"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),p=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},y=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,m=u["".concat(i,".").concat(y)]||u[y]||d[y]||o;return n?l.createElement(m,r(r({ref:t},s),{},{components:n})):l.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},41648:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>c,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var l=n(87462),a=n(67294),o=n(3905);const r={id:"place-type",title:"PlaceType",hide_table_of_contents:!1},c=void 0,i={unversionedId:"enums/place-type",id:"enums/place-type",title:"PlaceType",description:"No description",source:"@site/api/enums/place-type.mdx",sourceDirName:"enums",slug:"/enums/place-type",permalink:"/api/enums/place-type",draft:!1,tags:[],version:"current",frontMatter:{id:"place-type",title:"PlaceType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PersonalTitleType",permalink:"/api/enums/personal-title-type"},next:{title:"PluginStepType",permalink:"/api/enums/plugin-step-type"}},p={},s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),y=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PlaceType.<b>AIRPORT</b></code>",id:"code-style-fontweight-normal-placetypebairportbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PlaceType.<b>BUS_STATION</b></code>",id:"code-style-fontweight-normal-placetypebbus_stationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PlaceType.<b>CITY</b></code>",id:"code-style-fontweight-normal-placetypebcitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PlaceType.<b>PORT</b></code>",id:"code-style-fontweight-normal-placetypebportbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PlaceType.<b>TRAIN_STATION</b></code>",id:"code-style-fontweight-normal-placetypebtrain_stationbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:c=!1}=e;const[i,p]=(0,a.useState)(c);return(0,o.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&r)},f={Bullet:s,SpecifiedBy:u,Badge:d,toc:y,Details:m},b="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PlaceType {\n  AIRPORT\n  BUS_STATION\n  CITY\n  PORT\n  TRAIN_STATION\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-placetypebairportbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PlaceType.",(0,o.kt)("b",null,"AIRPORT")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-placetypebbus_stationbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PlaceType.",(0,o.kt)("b",null,"BUS_STATION")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-placetypebcitybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PlaceType.",(0,o.kt)("b",null,"CITY")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-placetypebportbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PlaceType.",(0,o.kt)("b",null,"PORT")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-placetypebtrain_stationbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PlaceType.",(0,o.kt)("b",null,"TRAIN_STATION")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/place"},(0,o.kt)("inlineCode",{parentName:"a"},"Place"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);