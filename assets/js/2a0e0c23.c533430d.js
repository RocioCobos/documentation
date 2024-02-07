/*! For license information please see 2a0e0c23.c533430d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53608],{44648:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>x,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var a=n(17624),r=n(4552),s=n(11504);const d={id:"payment-xexpire-date",title:"PaymentXExpireDate"},o=void 0,c={id:"objects/payment-xexpire-date",title:"PaymentXExpireDate",description:"The card expiration date",source:"@site/api/objects/payment-xexpire-date.mdx",sourceDirName:"objects",slug:"/objects/payment-xexpire-date",permalink:"/api/objects/payment-xexpire-date",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payment-xexpire-date",title:"PaymentXExpireDate"},sidebar:"schemaSidebar",previous:{title:"PaymentCard",permalink:"/api/objects/payment-card"},next:{title:"PaymentXMutation",permalink:"/api/objects/payment-xmutation"}},i={},l=()=>{const e={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const t={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>PaymentXExpireDate.<b>month</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxexpiredatemonthint--",level:4},{value:'<code>PaymentXExpireDate.<b>year</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxexpiredateyearint--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,r.M)()},[c,i]=(0,s.useState)(d);return(0,a.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The card expiration date"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type PaymentXExpireDate {\n  month: Int!\n  year: Int!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"paymentxexpiredatemonthint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXExpireDate.",(0,a.jsx)("b",{children:"month"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Month MM"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"paymentxexpiredateyearint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXExpireDate.",(0,a.jsx)("b",{children:"year"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Year yy"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/objects/payment-xstored-card-data",children:(0,a.jsx)(t.code,{children:"PaymentXStoredCardData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},44808:(e,t,n)=>{var a=n(11504),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var a,s={},i=null,l=null;for(a in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)d.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:i,ref:l,props:s,_owner:o.current}}t.Fragment=s,t.jsx=i,t.jsxs=i},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>d});var a=n(11504);const r={},s=a.createContext(r);function d(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);