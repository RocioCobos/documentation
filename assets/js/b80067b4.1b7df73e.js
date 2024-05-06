/*! For license information please see b80067b4.1b7df73e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66870],{18016:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>y,SpecifiedBy:()=>o,assets:()=>i,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(74848),s=n(28453),c=n(96540);const r={id:"accepted-payment-input",title:"AcceptedPaymentInput"},d=void 0,p={id:"types/inputs/accepted-payment-input",title:"AcceptedPaymentInput",description:"No description",source:"@site/api/types/inputs/accepted-payment-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/accepted-payment-input",permalink:"/api/types/inputs/accepted-payment-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"accepted-payment-input",title:"AcceptedPaymentInput"},sidebar:"schemaSidebar",previous:{title:"AbsoluteInput",permalink:"/api/types/inputs/absolute-input"},next:{title:"AccessCloneInput",permalink:"/api/types/inputs/access-clone-input"}},i={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[p,i]=(0,c.useState)(r);return(0,a.jsxs)(d.details,{...p?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:p?e:t}),p&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AcceptedPaymentInput.<b>type</b></code><Bullet></Bullet><code>PaymentType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"acceptedpaymentinputtypepaymenttype--",level:4},{value:'<code>AcceptedPaymentInput.<b>cardTypes</b></code><Bullet></Bullet><code>[PaymentCardType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"acceptedpaymentinputcardtypespaymentcardtype--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AcceptedPaymentInput {\n  type: PaymentType!\n  cardTypes: [PaymentCardType!]\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"acceptedpaymentinputtypepaymenttype--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AcceptedPaymentInput.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/payment-type",children:(0,a.jsx)(t.code,{children:"PaymentType!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"acceptedpaymentinputcardtypespaymentcardtype--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AcceptedPaymentInput.",(0,a.jsx)("b",{children:"cardTypes"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/payment-card-type",children:(0,a.jsx)(t.code,{children:"[PaymentCardType!]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/inputs/payment-policies-create-input",children:(0,a.jsx)(t.code,{children:"PaymentPoliciesCreateInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/payment-policies-update-input",children:(0,a.jsx)(t.code,{children:"PaymentPoliciesUpdateInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var a=n(96540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var a,c={},i=null,l=null;for(a in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,a)&&!p.hasOwnProperty(a)&&(c[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===c[a]&&(c[a]=t[a]);return{$$typeof:s,type:e,key:i,ref:l,props:c,_owner:d.current}}t.Fragment=c,t.jsx=i,t.jsxs=i},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var a=n(96540);const s={},c=a.createContext(s);function r(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);