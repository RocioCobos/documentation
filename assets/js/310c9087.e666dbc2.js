"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),y=a,m=s["".concat(i,".").concat(y)]||s[y]||u[y]||r;return n?o.createElement(m,l(l({ref:t},d),{},{components:n})):o.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},15171:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var o=n(87462),a=n(67294),r=n(3905);const l={id:"iata-ptc-code-type",title:"IATA_PTC_CodeType",hide_table_of_contents:!1},c=void 0,i={unversionedId:"enums/iata-ptc-code-type",id:"enums/iata-ptc-code-type",title:"IATA_PTC_CodeType",description:"Type code applying to the Passenger",source:"@site/api/enums/iata-ptc-code-type.mdx",sourceDirName:"enums",slug:"/enums/iata-ptc-code-type",permalink:"/api/enums/iata-ptc-code-type",draft:!1,tags:[],version:"current",frontMatter:{id:"iata-ptc-code-type",title:"IATA_PTC_CodeType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HubStatus",permalink:"/api/enums/hub-status"},next:{title:"InsightsCountryType",permalink:"/api/enums/insights-country-type"}},p={},d=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),y=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>IATA_PTC_CodeType.<b>ADT</b></code>",id:"code-style-fontweight-normal-iata_ptc_codetypebadtbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IATA_PTC_CodeType.<b>CHD</b></code>",id:"code-style-fontweight-normal-iata_ptc_codetypebchdbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>IATA_PTC_CodeType.<b>INF</b></code>",id:"code-style-fontweight-normal-iata_ptc_codetypebinfbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:c=!1}=e;const[i,p]=(0,a.useState)(c);return(0,r.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},f={Bullet:d,SpecifiedBy:s,Badge:u,toc:y,Details:m},b="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Type code applying to the Passenger"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum IATA_PTC_CodeType {\n  ADT\n  CHD\n  INF\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-iata_ptc_codetypebadtbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"IATA_PTC_CodeType.",(0,r.kt)("b",null,"ADT")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-iata_ptc_codetypebchdbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"IATA_PTC_CodeType.",(0,r.kt)("b",null,"CHD")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-iata_ptc_codetypebinfbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"IATA_PTC_CodeType.",(0,r.kt)("b",null,"INF")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/flight-pax"},(0,r.kt)("inlineCode",{parentName:"a"},"FlightPax"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);