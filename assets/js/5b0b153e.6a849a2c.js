"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38562:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>c,assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905);const l={id:"partner-status-type",title:"PartnerStatusType",hide_table_of_contents:!1},p=void 0,i={unversionedId:"enums/partner-status-type",id:"enums/partner-status-type",title:"PartnerStatusType",description:"No description",source:"@site/api/enums/partner-status-type.mdx",sourceDirName:"enums",slug:"/enums/partner-status-type",permalink:"/api/enums/partner-status-type",draft:!1,tags:[],version:"current",frontMatter:{id:"partner-status-type",title:"PartnerStatusType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PartnerOrderByInput",permalink:"/api/enums/partner-order-by-input"},next:{title:"PaxTypeType",permalink:"/api/enums/pax-type-type"}},s={},u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PartnerStatusType.<b>ACTIVE</b></code>",id:"code-style-fontweight-normal-partnerstatustypebactivebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PartnerStatusType.<b>PASSIVE</b></code>",id:"code-style-fontweight-normal-partnerstatustypebpassivebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PartnerStatusType.<b>INACTIVE</b></code>",id:"code-style-fontweight-normal-partnerstatustypebinactivebcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:p=!1}=e;const[i,s]=(0,a.useState)(p);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},f={Bullet:u,SpecifiedBy:c,Badge:d,toc:m,Details:y},b="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PartnerStatusType {\n  ACTIVE\n  PASSIVE\n  INACTIVE\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-partnerstatustypebactivebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PartnerStatusType.",(0,o.kt)("b",null,"ACTIVE")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-partnerstatustypebpassivebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PartnerStatusType.",(0,o.kt)("b",null,"PASSIVE")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-partnerstatustypebinactivebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PartnerStatusType.",(0,o.kt)("b",null,"INACTIVE")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/profile"},(0,o.kt)("inlineCode",{parentName:"a"},"Profile"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/profile-create-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ProfileCreateInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/profile-data"},(0,o.kt)("inlineCode",{parentName:"a"},"ProfileData"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/profile-update-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ProfileUpdateInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/profile-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ProfileWhereInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);