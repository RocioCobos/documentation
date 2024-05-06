/*! For license information please see 19cb98da.bef0ed27.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21724],{40880:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var l=t(74848),s=t(28453),r=t(96540);const n={id:"alert-emails",title:"AlertEmails"},i=void 0,o={id:"types/objects/alert-emails",title:"AlertEmails",description:"No description",source:"@site/api/types/objects/alert-emails.mdx",sourceDirName:"types/objects",slug:"/types/objects/alert-emails",permalink:"/api/types/objects/alert-emails",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-emails",title:"AlertEmails"},sidebar:"schemaSidebar",previous:{title:"AlertEdge",permalink:"/api/types/objects/alert-edge"},next:{title:"AlertEventConnection",permalink:"/api/types/objects/alert-event-connection"}},c={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const a={a:"a",...(0,s.R)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:t,startOpen:n=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[o,c]=(0,r.useState)(n);return(0,l.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&t]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertEmails.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertemailsisactiveboolean--",level:4},{value:'<code>AlertEmails.<b>email</b></code><Bullet></Bullet><code>[AlertEmail!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertemailsemailalertemail--",level:4},{value:'<code>AlertEmails.email.<b>type</b></code><Bullet></Bullet><code>AlertEmailType</code> <Badge class="badge badge--secondary"></Badge>',id:"alertemailsemailtypealertemailtype-",level:5},{value:"Member Of",id:"member-of",level:3}];function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.p,{children:"No description"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-graphql",children:"type AlertEmails {\n  isActive: Boolean!\n  email(type: AlertEmailType): [AlertEmail!]!\n}\n"})}),"\n",(0,l.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(a.h4,{id:"alertemailsisactiveboolean--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEmails.",(0,l.jsx)("b",{children:"isActive"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(a.a,{href:"/api/types/scalars/boolean",children:(0,l.jsx)(a.code,{children:"Boolean!"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(a.blockquote,{children:"\n"}),"\n",(0,l.jsxs)(a.h4,{id:"alertemailsemailalertemail--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEmails.",(0,l.jsx)("b",{children:"email"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(a.a,{href:"/api/types/scalars/alert-email",children:(0,l.jsx)(a.code,{children:"[AlertEmail!]!"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsxs)(a.h5,{id:"alertemailsemailtypealertemailtype-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEmails.email.",(0,l.jsx)("b",{children:"type"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(a.a,{href:"/api/types/enums/alert-email-type",children:(0,l.jsx)(a.code,{children:"AlertEmailType"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,l.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.a,{href:"/api/types/objects/alert-notifications",children:(0,l.jsx)(a.code,{children:"AlertNotifications"})})," ",(0,l.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},21020:(e,a,t)=>{var l=t(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var l,r={},c=null,d=null;for(l in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)n.call(a,l)&&!o.hasOwnProperty(l)&&(r[l]=a[l]);if(e&&e.defaultProps)for(l in a=e.defaultProps)void 0===r[l]&&(r[l]=a[l]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:i.current}}a.Fragment=r,a.jsx=c,a.jsxs=c},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>n,x:()=>i});var l=t(96540);const s={},r=l.createContext(s);function n(e){const a=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),l.createElement(r.Provider,{value:a},e.children)}}}]);