"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},54235:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>y});var o=n(87462),a=n(67294),r=n(3905);const i={id:"destination-type",title:"DestinationType",hide_table_of_contents:!1},l=void 0,s={unversionedId:"enums/destination-type",id:"enums/destination-type",title:"DestinationType",description:"Indicates the type of destination",source:"@site/api/enums/destination-type.mdx",sourceDirName:"enums",slug:"/enums/destination-type",permalink:"/api/enums/destination-type",draft:!1,tags:[],version:"current",frontMatter:{id:"destination-type",title:"DestinationType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DescriptionType",permalink:"/api/enums/description-type"},next:{title:"Discount",permalink:"/api/enums/discount"}},c={},p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),y=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>DestinationType.<b>ZONE</b></code>",id:"code-style-fontweight-normal-destinationtypebzonebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DestinationType.<b>CITY</b></code>",id:"code-style-fontweight-normal-destinationtypebcitybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DestinationType.<b>COUNTRY</b></code>",id:"code-style-fontweight-normal-destinationtypebcountrybcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[s,c]=(0,a.useState)(l);return(0,r.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},f={Bullet:p,SpecifiedBy:d,Badge:u,toc:y,Details:m},b="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Indicates the type of destination"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum DestinationType {\n  ZONE\n  CITY\n  COUNTRY\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-destinationtypebzonebcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DestinationType.",(0,r.kt)("b",null,"ZONE")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Zone")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-destinationtypebcitybcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DestinationType.",(0,r.kt)("b",null,"CITY")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"City")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-destinationtypebcountrybcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DestinationType.",(0,r.kt)("b",null,"COUNTRY")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Country")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/destination-data"},(0,r.kt)("inlineCode",{parentName:"a"},"DestinationData"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);