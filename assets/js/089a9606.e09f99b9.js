"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return r?n.createElement(y,o(o({ref:t},i),{},{components:r})):n.createElement(y,o({ref:t},i))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:a,o[1]=d;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},291:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(87462),a=r(67294),l=r(3905);const o={id:"three-dscard-enrolled-status-type",title:"ThreeDSCardEnrolledStatusType",hide_table_of_contents:!1},d=void 0,s={unversionedId:"enums/three-dscard-enrolled-status-type",id:"enums/three-dscard-enrolled-status-type",title:"ThreeDSCardEnrolledStatusType",description:"No description",source:"@site/api/enums/three-dscard-enrolled-status-type.mdx",sourceDirName:"enums",slug:"/enums/three-dscard-enrolled-status-type",permalink:"/api/enums/three-dscard-enrolled-status-type",draft:!1,tags:[],version:"current",frontMatter:{id:"three-dscard-enrolled-status-type",title:"ThreeDSCardEnrolledStatusType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TermType",permalink:"/api/enums/term-type"},next:{title:"ThreeDSSignatureStatusType",permalink:"/api/enums/three-dssignature-status-type"}},c={},i=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ThreeDSCardEnrolledStatusType.<b>CARD_ENROLLED</b></code>",id:"code-style-fontweight-normal-threedscardenrolledstatustypebcard_enrolledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ThreeDSCardEnrolledStatusType.<b>CARD_NOT_ENROLLED</b></code>",id:"code-style-fontweight-normal-threedscardenrolledstatustypebcard_not_enrolledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ThreeDSCardEnrolledStatusType.<b>CANT_AUTHENTICATE</b></code>",id:"code-style-fontweight-normal-threedscardenrolledstatustypebcant_authenticatebcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:d=!1}=e;const[s,c]=(0,a.useState)(d);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&o)},f={Bullet:i,SpecifiedBy:u,Badge:p,toc:m,Details:y},h="wrapper";function b(e){let{components:t,...r}=e;return(0,l.kt)(h,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ThreeDSCardEnrolledStatusType {\n  CARD_ENROLLED\n  CARD_NOT_ENROLLED\n  CANT_AUTHENTICATE\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threedscardenrolledstatustypebcard_enrolledbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreeDSCardEnrolledStatusType.",(0,l.kt)("b",null,"CARD_ENROLLED")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Card enrolled")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threedscardenrolledstatustypebcard_not_enrolledbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreeDSCardEnrolledStatusType.",(0,l.kt)("b",null,"CARD_NOT_ENROLLED")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Card not enrolled")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-threedscardenrolledstatustypebcant_authenticatebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ThreeDSCardEnrolledStatusType.",(0,l.kt)("b",null,"CANT_AUTHENTICATE")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Can not authenticate")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/inputs/three-domain-security-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ThreeDomainSecurityInput"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);