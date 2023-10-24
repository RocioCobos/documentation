"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60787],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(o),y=r,m=u["".concat(i,".").concat(y)]||u[y]||s[y]||l;return o?n.createElement(m,a(a({ref:t},p),{},{components:o})):n.createElement(m,a({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,a=new Array(l);a[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var d=2;d<l;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},2314:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>s,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>y});var n=o(87462),r=o(67294),l=o(3905);const a={id:"product-type",title:"ProductType",hide_table_of_contents:!1},c=void 0,i={unversionedId:"enums/product-type",id:"enums/product-type",title:"ProductType",description:"No description",source:"@site/api/enums/product-type.mdx",sourceDirName:"enums",slug:"/enums/product-type",permalink:"/api/enums/product-type",draft:!1,tags:[],version:"current",frontMatter:{id:"product-type",title:"ProductType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PluginType",permalink:"/api/enums/plugin-type"},next:{title:"ProfileClassification",permalink:"/api/enums/profile-classification"}},d={},p=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),y=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ProductType.<b>ACCOMODATION</b></code>",id:"code-style-fontweight-normal-producttypebaccomodationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProductType.<b>ACTIVITY</b></code>",id:"code-style-fontweight-normal-producttypebactivitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProductType.<b>INSURANCE</b></code>",id:"code-style-fontweight-normal-producttypebinsurancebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProductType.<b>ITINERARY</b></code>",id:"code-style-fontweight-normal-producttypebitinerarybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProductType.<b>TRANSFER</b></code>",id:"code-style-fontweight-normal-producttypebtransferbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProductType.<b>TRANSPORT</b></code>",id:"code-style-fontweight-normal-producttypebtransportbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:o,children:a,startOpen:c=!1}=e;const[i,d]=(0,r.useState)(c);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:o),i&&a)},f={Bullet:p,SpecifiedBy:u,Badge:s,toc:y,Details:m},b="wrapper";function k(e){let{components:t,...o}=e;return(0,l.kt)(b,(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ProductType {\n  ACCOMODATION\n  ACTIVITY\n  INSURANCE\n  ITINERARY\n  TRANSFER\n  TRANSPORT\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-producttypebaccomodationbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductType.",(0,l.kt)("b",null,"ACCOMODATION")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-producttypebactivitybcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductType.",(0,l.kt)("b",null,"ACTIVITY")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-producttypebinsurancebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductType.",(0,l.kt)("b",null,"INSURANCE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-producttypebitinerarybcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductType.",(0,l.kt)("b",null,"ITINERARY")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-producttypebtransferbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductType.",(0,l.kt)("b",null,"TRANSFER")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-producttypebtransportbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductType.",(0,l.kt)("b",null,"TRANSPORT")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/itinerary-map"},(0,l.kt)("inlineCode",{parentName:"a"},"ItineraryMap"))," ",(0,l.kt)(s,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);