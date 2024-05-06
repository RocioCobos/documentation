/*! For license information please see 651bb2d2.6298f462.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52291],{13133:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>y});var n=s(74848),a=s(28453),r=s(96540);const o={id:"payer-response-status-type",title:"PayerResponseStatusType",hide_table_of_contents:!1},i=void 0,c={id:"enums/payer-response-status-type",title:"PayerResponseStatusType",description:"Indicates the authentication status of the transaction",source:"@site/api/enums/payer-response-status-type.mdx",sourceDirName:"enums",slug:"/enums/payer-response-status-type",permalink:"/api/enums/payer-response-status-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payer-response-status-type",title:"PayerResponseStatusType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaxType",permalink:"/api/enums/pax-type"},next:{title:"PaymentCardStatus",permalink:"/api/enums/payment-card-status"}},l={},p=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},d=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:s,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,r.useState)(o);return(0,n.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&s]})},y=[{value:"Values",id:"values",level:3},{value:"<code>PayerResponseStatusType.<b>AUTHENTICATION_SUCCESS</b></code>",id:"payerresponsestatustypeauthentication_success",level:4},{value:"<code>PayerResponseStatusType.<b>AUTHENTICATION_FAILED</b></code>",id:"payerresponsestatustypeauthentication_failed",level:4},{value:"<code>PayerResponseStatusType.<b>AUTHENTICATION_INCOMPLETE</b></code>",id:"payerresponsestatustypeauthentication_incomplete",level:4},{value:"<code>PayerResponseStatusType.<b>TRANSACTION_ATTEMPT_SUCCESS_A</b></code>",id:"payerresponsestatustypetransaction_attempt_success_a",level:4},{value:"<code>PayerResponseStatusType.<b>TRANSACTION_ATTEMPT_SUCCESS_B</b></code>",id:"payerresponsestatustypetransaction_attempt_success_b",level:4},{value:"<code>PayerResponseStatusType.<b>AUTHENTICATION_REJECTED</b></code>",id:"payerresponsestatustypeauthentication_rejected",level:4},{value:"Member of",id:"member-of",level:3}];function T(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Indicates the authentication status of the transaction"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"enum PayerResponseStatusType {\n  AUTHENTICATION_SUCCESS\n  AUTHENTICATION_FAILED\n  AUTHENTICATION_INCOMPLETE\n  TRANSACTION_ATTEMPT_SUCCESS_A\n  TRANSACTION_ATTEMPT_SUCCESS_B\n  AUTHENTICATION_REJECTED\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,n.jsx)(t.h4,{id:"payerresponsestatustypeauthentication_success",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PayerResponseStatusType.",(0,n.jsx)("b",{children:"AUTHENTICATION_SUCCESS"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Successful Authentication"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"payerresponsestatustypeauthentication_failed",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PayerResponseStatusType.",(0,n.jsx)("b",{children:"AUTHENTICATION_FAILED"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Failed Authentication"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"payerresponsestatustypeauthentication_incomplete",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PayerResponseStatusType.",(0,n.jsx)("b",{children:"AUTHENTICATION_INCOMPLETE"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Unable to Complete Authentication"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"payerresponsestatustypetransaction_attempt_success_a",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PayerResponseStatusType.",(0,n.jsx)("b",{children:"TRANSACTION_ATTEMPT_SUCCESS_A"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Successful Attempts Transaction"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"payerresponsestatustypetransaction_attempt_success_b",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PayerResponseStatusType.",(0,n.jsx)("b",{children:"TRANSACTION_ATTEMPT_SUCCESS_B"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Successful Attempts Transaction"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"payerresponsestatustypeauthentication_rejected",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PayerResponseStatusType.",(0,n.jsx)("b",{children:"AUTHENTICATION_REJECTED"})]})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Authentication Rejected (Merchant must not submit for authorisation)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/inputs/three-domain-security-input",children:(0,n.jsx)(t.code,{children:"ThreeDomainSecurityInput"})})," ",(0,n.jsx)(d,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(T,{...e})}):T(e)}},21020:(e,t,s)=>{var n=s(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var n,r={},l=null,p=null;for(n in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:p,props:r,_owner:i.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var n=s(96540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);