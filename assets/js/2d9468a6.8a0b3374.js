/*! For license information please see 2d9468a6.8a0b3374.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62765],{57249:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var r=n(74848),a=n(28453),s=n(96540);const i={id:"email",title:"Email"},o=void 0,c={id:"types/scalars/email",title:"Email",description:"Format RFC 5322",source:"@site/api/types/scalars/email.mdx",sourceDirName:"types/scalars",slug:"/types/scalars/email",permalink:"/api/types/scalars/email",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"email",title:"Email"},sidebar:"schemaSidebar",previous:{title:"Duration",permalink:"/api/types/scalars/duration"},next:{title:"EnvironmentName",permalink:"/api/types/scalars/environment-name"}},l={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,s.useState)(i);return(0,r.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},f=[{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Format RFC 5322"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"scalar Email\n"})}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/inputs/activation-connect-input",children:(0,r.jsx)(t.code,{children:"ActivationConnectInput"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/contact-info-input",children:(0,r.jsx)(t.code,{children:"ContactInfoInput"})})," ",(0,r.jsx)(m,{class:"badge badge--secondary",text:"input"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);