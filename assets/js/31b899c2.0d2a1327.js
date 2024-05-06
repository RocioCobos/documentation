/*! For license information please see 31b899c2.0d2a1327.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85176],{61786:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var a=n(74848),r=n(28453),s=n(96540);const c={id:"payment-card-status",title:"PaymentCardStatus",hide_table_of_contents:!1},d=void 0,l={id:"enums/payment-card-status",title:"PaymentCardStatus",description:"No description",source:"@site/api/enums/payment-card-status.mdx",sourceDirName:"enums",slug:"/enums/payment-card-status",permalink:"/api/enums/payment-card-status",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payment-card-status",title:"PaymentCardStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PayerResponseStatusType",permalink:"/api/enums/payer-response-status-type"},next:{title:"PaymentCardType",permalink:"/api/enums/payment-card-type"}},o={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,r.R)()},[l,o]=(0,s.useState)(c);return(0,a.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},h=[{value:"Values",id:"values",level:3},{value:"<code>PaymentCardStatus.<b>CREATED</b></code>",id:"paymentcardstatuscreated",level:4},{value:"<code>PaymentCardStatus.<b>CANCELED</b></code>",id:"paymentcardstatuscanceled",level:4},{value:"<code>PaymentCardStatus.<b>EXPIRED</b></code>",id:"paymentcardstatusexpired",level:4},{value:"<code>PaymentCardStatus.<b>ACTIVE</b></code>",id:"paymentcardstatusactive",level:4},{value:"<code>PaymentCardStatus.<b>UNKNOWN</b></code>",id:"paymentcardstatusunknown",level:4},{value:"Member of",id:"member-of",level:3}];function y(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"enum PaymentCardStatus {\n  CREATED\n  CANCELED\n  EXPIRED\n  ACTIVE\n  UNKNOWN\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(t.h4,{id:"paymentcardstatuscreated",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentCardStatus.",(0,a.jsx)("b",{children:"CREATED"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Payment card created correctly."}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"paymentcardstatuscanceled",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentCardStatus.",(0,a.jsx)("b",{children:"CANCELED"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Payment card canceled correctly."}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"paymentcardstatusexpired",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentCardStatus.",(0,a.jsx)("b",{children:"EXPIRED"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Payment card expired."}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"paymentcardstatusactive",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentCardStatus.",(0,a.jsx)("b",{children:"ACTIVE"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Payment card is active."}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"paymentcardstatusunknown",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentCardStatus.",(0,a.jsx)("b",{children:"UNKNOWN"})]})})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"When Payment card is UNKNOWN, the buyer needs to check with the VCC provider to ensure if some payment has been made."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/objects/payment-card-data",children:(0,a.jsx)(t.code,{children:"PaymentCardData"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},21020:(e,t,n)=>{var a=n(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var a,s={},o=null,i=null;for(a in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(i=t.ref),t)c.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:o,ref:i,props:s,_owner:d.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var a=n(96540);const r={},s=a.createContext(r);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);