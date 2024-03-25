/*! For license information please see 12d00ec2.964730d4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10768],{42468:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>f});var l=n(17624),s=n(4552),a=n(11504);const r={id:"full-stay",title:"FullStay"},i=void 0,o={id:"objects/full-stay",title:"FullStay",description:"Represents the full stay for a product.",source:"@site/api/objects/full-stay.mdx",sourceDirName:"objects",slug:"/objects/full-stay",permalink:"/api/objects/full-stay",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"full-stay",title:"FullStay"},sidebar:"schemaSidebar",previous:{title:"FlightTicket",permalink:"/api/objects/flight-ticket"},next:{title:"GeneratedPaymentInfo",permalink:"/api/objects/generated-payment-info"}},c={},d=()=>{const e={span:"span",...(0,s.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.M)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,s.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(t.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>FullStay.<b>minimum</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"fullstayminimumint-",level:4},{value:'<code>FullStay.<b>maximum</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"fullstaymaximumint-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,s.M)()},[o,c]=(0,a.useState)(r);return(0,l.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Represents the full stay for a product."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-graphql",children:"type FullStay {\n  minimum: Int\n  maximum: Int\n}\n"})}),"\n",(0,l.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(t.h4,{id:"fullstayminimumint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["FullStay.",(0,l.jsx)("b",{children:"minimum"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(t.a,{href:"/api/scalars/int",children:(0,l.jsx)(t.code,{children:"Int"})})," ",(0,l.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"Minimum length of the full stay."}),"\n"]}),"\n",(0,l.jsxs)(t.h4,{id:"fullstaymaximumint-",children:[(0,l.jsx)(t.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["FullStay.",(0,l.jsx)("b",{children:"maximum"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(t.a,{href:"/api/scalars/int",children:(0,l.jsx)(t.code,{children:"Int"})})," ",(0,l.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsx)(t.p,{children:"Maximum length of the full stay."}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"/api/objects/length-of-stay",children:(0,l.jsx)(t.code,{children:"LengthOfStay"})})," ",(0,l.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},44808:(e,t,n)=>{var l=n(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var l,a={},c=null,d=null;for(l in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,l)&&!o.hasOwnProperty(l)&&(a[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===a[l]&&(a[l]=t[l]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>r});var l=n(11504);const s={},a=l.createContext(s);function r(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);