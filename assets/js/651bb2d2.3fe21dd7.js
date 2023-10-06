"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||y[d]||r;return n?a.createElement(m,s(s({ref:t},i),{},{components:n})):a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53830:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),o=n(67294),r=n(3905);const s={id:"payer-response-status-type",title:"PayerResponseStatusType",hide_table_of_contents:!1},l=void 0,p={unversionedId:"enums/payer-response-status-type",id:"enums/payer-response-status-type",title:"PayerResponseStatusType",description:"Indicates the authentication status of the transaction",source:"@site/api/enums/payer-response-status-type.mdx",sourceDirName:"enums",slug:"/enums/payer-response-status-type",permalink:"/api/enums/payer-response-status-type",draft:!1,tags:[],version:"current",frontMatter:{id:"payer-response-status-type",title:"PayerResponseStatusType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaxType",permalink:"/api/enums/pax-type"},next:{title:"PaymentCardStatus",permalink:"/api/enums/payment-card-status"}},c={},i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PayerResponseStatusType.<b>AUTHENTICATION_SUCCESS</b></code>",id:"code-style-fontweight-normal-payerresponsestatustypebauthentication_successbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PayerResponseStatusType.<b>AUTHENTICATION_FAILED</b></code>",id:"code-style-fontweight-normal-payerresponsestatustypebauthentication_failedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PayerResponseStatusType.<b>AUTHENTICATION_INCOMPLETE</b></code>",id:"code-style-fontweight-normal-payerresponsestatustypebauthentication_incompletebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PayerResponseStatusType.<b>TRANSACTION_ATTEMPT_SUCCESS_A</b></code>",id:"code-style-fontweight-normal-payerresponsestatustypebtransaction_attempt_success_abcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PayerResponseStatusType.<b>TRANSACTION_ATTEMPT_SUCCESS_B</b></code>",id:"code-style-fontweight-normal-payerresponsestatustypebtransaction_attempt_success_bbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PayerResponseStatusType.<b>AUTHENTICATION_REJECTED</b></code>",id:"code-style-fontweight-normal-payerresponsestatustypebauthentication_rejectedbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[p,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&s)},f={Bullet:i,SpecifiedBy:u,Badge:y,toc:d,Details:m},T="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(T,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Indicates the authentication status of the transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PayerResponseStatusType {\n  AUTHENTICATION_SUCCESS\n  AUTHENTICATION_FAILED\n  AUTHENTICATION_INCOMPLETE\n  TRANSACTION_ATTEMPT_SUCCESS_A\n  TRANSACTION_ATTEMPT_SUCCESS_B\n  AUTHENTICATION_REJECTED\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-payerresponsestatustypebauthentication_successbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PayerResponseStatusType.",(0,r.kt)("b",null,"AUTHENTICATION_SUCCESS")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Successful Authentication")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-payerresponsestatustypebauthentication_failedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PayerResponseStatusType.",(0,r.kt)("b",null,"AUTHENTICATION_FAILED")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Failed Authentication")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-payerresponsestatustypebauthentication_incompletebcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PayerResponseStatusType.",(0,r.kt)("b",null,"AUTHENTICATION_INCOMPLETE")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unable to Complete Authentication")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-payerresponsestatustypebtransaction_attempt_success_abcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PayerResponseStatusType.",(0,r.kt)("b",null,"TRANSACTION_ATTEMPT_SUCCESS_A")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Successful Attempts Transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-payerresponsestatustypebtransaction_attempt_success_bbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PayerResponseStatusType.",(0,r.kt)("b",null,"TRANSACTION_ATTEMPT_SUCCESS_B")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Successful Attempts Transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-payerresponsestatustypebauthentication_rejectedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PayerResponseStatusType.",(0,r.kt)("b",null,"AUTHENTICATION_REJECTED")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Authentication Rejected (Merchant must not submit for authorisation)")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/three-domain-security-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ThreeDomainSecurityInput"))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);