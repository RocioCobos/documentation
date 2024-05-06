/*! For license information please see 25311738.959226ae.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95493],{55787:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>f,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=s(74848),r=s(28453),a=s(96540);const i={id:"alert-notifications",title:"AlertNotifications"},l=void 0,o={id:"types/objects/alert-notifications",title:"AlertNotifications",description:"No description",source:"@site/api/types/objects/alert-notifications.mdx",sourceDirName:"types/objects",slug:"/types/objects/alert-notifications",permalink:"/api/types/objects/alert-notifications",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-notifications",title:"AlertNotifications"},sidebar:"schemaSidebar",previous:{title:"AlertEvent",permalink:"/api/types/objects/alert-event"},next:{title:"AlertPrice",permalink:"/api/types/objects/alert-price"}},c={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const t={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:s,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[o,c]=(0,a.useState)(i);return(0,n.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertNotifications.<b>emails</b></code><Bullet></Bullet><code>AlertEmails</code> <Badge class="badge badge--secondary"></Badge>',id:"alertnotificationsemailsalertemails-",level:4},{value:'<code>AlertNotifications.<b>slack</b></code><Bullet></Bullet><code>AlertSlack</code> <Badge class="badge badge--secondary"></Badge>',id:"alertnotificationsslackalertslack-",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type AlertNotifications {\n  emails: AlertEmails\n  slack: AlertSlack\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"alertnotificationsemailsalertemails-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertNotifications.",(0,n.jsx)("b",{children:"emails"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/alert-emails",children:(0,n.jsx)(t.code,{children:"AlertEmails"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"emails"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alertnotificationsslackalertslack-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertNotifications.",(0,n.jsx)("b",{children:"slack"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/types/objects/alert-slack",children:(0,n.jsx)(t.code,{children:"AlertSlack"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"slack"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/types/objects/alert-configuration",children:(0,n.jsx)(t.code,{children:"AlertConfiguration"})})," ",(0,n.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},21020:(e,t,s)=>{var n=s(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,a={},c=null,d=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!o.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:d,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);