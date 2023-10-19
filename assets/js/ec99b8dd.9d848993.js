"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15382:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>y,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=r(87462),a=r(67294),o=r(3905);const s={id:"three-dssignature-status-type",title:"ThreeDSSignatureStatusType",hide_table_of_contents:!1},i=void 0,l={unversionedId:"enums/three-dssignature-status-type",id:"enums/three-dssignature-status-type",title:"ThreeDSSignatureStatusType",description:"No description",source:"@site/api/enums/three-dssignature-status-type.mdx",sourceDirName:"enums",slug:"/enums/three-dssignature-status-type",permalink:"/api/enums/three-dssignature-status-type",draft:!1,tags:[],version:"current",frontMatter:{id:"three-dssignature-status-type",title:"ThreeDSSignatureStatusType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ThreeDSCardEnrolledStatusType",permalink:"/api/enums/three-dscard-enrolled-status-type"},next:{title:"TimePeriod",permalink:"/api/enums/time-period"}},u={},p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ThreeDSSignatureStatusType.<b>SIGNATURE_VALIDATED</b></code>",id:"code-style-fontweight-normal-threedssignaturestatustypebsignature_validatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ThreeDSSignatureStatusType.<b>SIGNATURE_NOT_VALIDATED</b></code>",id:"code-style-fontweight-normal-threedssignaturestatustypebsignature_not_validatedbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:r,children:s,startOpen:i=!1}=e;const[l,u]=(0,a.useState)(i);return(0,o.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?t:r),l&&s)},f={Bullet:p,SpecifiedBy:c,Badge:d,toc:m,Details:y},g="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ThreeDSSignatureStatusType {\n  SIGNATURE_VALIDATED\n  SIGNATURE_NOT_VALIDATED\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedssignaturestatustypebsignature_validatedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDSSignatureStatusType.",(0,o.kt)("b",null,"SIGNATURE_VALIDATED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Signature of the payer response has been validated successfully")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedssignaturestatustypebsignature_not_validatedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDSSignatureStatusType.",(0,o.kt)("b",null,"SIGNATURE_NOT_VALIDATED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Signature of the payer response could not be validated")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/three-domain-security-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreeDomainSecurityInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);