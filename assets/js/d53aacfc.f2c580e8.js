"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,b=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},77660:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>y});var r=n(87462),a=n(67294),o=n(3905);const i={id:"service-api-type",title:"ServiceApiType",hide_table_of_contents:!1},l=void 0,c={unversionedId:"enums/service-api-type",id:"enums/service-api-type",title:"ServiceApiType",description:"Services Api available.",source:"@site/api/enums/service-api-type.mdx",sourceDirName:"enums",slug:"/enums/service-api-type",permalink:"/api/enums/service-api-type",draft:!1,tags:[],version:"current",frontMatter:{id:"service-api-type",title:"ServiceApiType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SellerTechSolutionCompanyType",permalink:"/api/enums/seller-tech-solution-company-type"},next:{title:"ServiceIntegrationType",permalink:"/api/enums/service-integration-type"}},p={},s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),y=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ServiceApiType.<b>HOTEL</b></code>",id:"code-style-fontweight-normal-serviceapitypebhotelbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ServiceApiType.<b>TRANSPORTATION</b></code>",id:"code-style-fontweight-normal-serviceapitypebtransportationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ServiceApiType.<b>CAR</b></code>",id:"code-style-fontweight-normal-serviceapitypebcarbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ServiceApiType.<b>TRANSFERS</b></code>",id:"code-style-fontweight-normal-serviceapitypebtransfersbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ServiceApiType.<b>ACTIVITIES</b></code>",id:"code-style-fontweight-normal-serviceapitypebactivitiesbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ServiceApiType.<b>VIRTUALACCOUNT</b></code>",id:"code-style-fontweight-normal-serviceapitypebvirtualaccountbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ServiceApiType.<b>PAYMENT</b></code>",id:"code-style-fontweight-normal-serviceapitypebpaymentbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ServiceApiType.<b>PACKAGE</b></code>",id:"code-style-fontweight-normal-serviceapitypebpackagebcode",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[c,p]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},m={Bullet:s,SpecifiedBy:u,Badge:d,toc:y,Details:b},h="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Services Api available."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ServiceApiType {\n  HOTEL\n  TRANSPORTATION\n  CAR\n  TRANSFERS\n  ACTIVITIES\n  VIRTUALACCOUNT\n  PAYMENT\n  PACKAGE\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceapitypebhotelbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiType.",(0,o.kt)("b",null,"HOTEL")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the request has been done against the Hotel API")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceapitypebtransportationbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiType.",(0,o.kt)("b",null,"TRANSPORTATION")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the request has been done against the Transportation API")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceapitypebcarbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiType.",(0,o.kt)("b",null,"CAR")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the request has been done against the Car API")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceapitypebtransfersbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiType.",(0,o.kt)("b",null,"TRANSFERS")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the request has been done against the Transfers API")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceapitypebactivitiesbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiType.",(0,o.kt)("b",null,"ACTIVITIES")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the request has been done against the Activities API")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceapitypebvirtualaccountbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiType.",(0,o.kt)("b",null,"VIRTUALACCOUNT")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the request has been done against the Virtual Account API")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceapitypebpaymentbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiType.",(0,o.kt)("b",null,"PAYMENT")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the request has been done against the Payment API")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-serviceapitypebpackagebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ServiceApiType.",(0,o.kt)("b",null,"PACKAGE")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the request has been done against the Package API")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/stats-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsFilterInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);