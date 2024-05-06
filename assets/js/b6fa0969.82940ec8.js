/*! For license information please see b6fa0969.82940ec8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48866],{8344:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>f,assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>g});var i=a(74848),s=a(28453),c=a(96540);const n={id:"certification",title:"Certification"},d=void 0,r={id:"types/objects/certification",title:"Certification",description:"No description",source:"@site/api/types/objects/certification.mdx",sourceDirName:"types/objects",slug:"/types/objects/certification",permalink:"/api/types/objects/certification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"certification",title:"Certification"},sidebar:"schemaSidebar",previous:{title:"CertificationResult",permalink:"/api/types/objects/certification-result"},next:{title:"CheckInformation",permalink:"/api/types/objects/check-information"}},o={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const t={a:"a",...(0,s.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:t,children:a,startOpen:n=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[r,o]=(0,c.useState)(n);return(0,i.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:t}),r&&a]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>Certification.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationcodeid--",level:4},{value:'<code>Certification.<b>certificationData</b></code><Bullet></Bullet><code>CertificationData</code> <Badge class="badge badge--secondary"></Badge>',id:"certificationcertificationdatacertificationdata-",level:4},{value:'<code>Certification.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationcreatedatdatetime--",level:4},{value:'<code>Certification.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationupdatedatdatetime--",level:4},{value:'<code>Certification.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationadvisemessageadvisemessage--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type Certification {\n  code: ID!\n  certificationData: CertificationData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage: [AdviseMessage!]\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"certificationcodeid--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Certification.",(0,i.jsx)("b",{children:"code"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,i.jsx)(t.code,{children:"ID!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"certificationcertificationdatacertificationdata-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Certification.",(0,i.jsx)("b",{children:"certificationData"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/certification-data",children:(0,i.jsx)(t.code,{children:"CertificationData"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"certificationcreatedatdatetime--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Certification.",(0,i.jsx)("b",{children:"createdAt"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/date-time",children:(0,i.jsx)(t.code,{children:"DateTime!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"certificationupdatedatdatetime--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Certification.",(0,i.jsx)("b",{children:"updatedAt"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/scalars/date-time",children:(0,i.jsx)(t.code,{children:"DateTime!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"certificationadvisemessageadvisemessage--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["Certification.",(0,i.jsx)("b",{children:"adviseMessage"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/types/objects/advise-message",children:(0,i.jsx)(t.code,{children:"[AdviseMessage!]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/types/objects/certification-edge",children:(0,i.jsx)(t.code,{children:"CertificationEdge"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},21020:(e,t,a)=>{var i=a(96540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,a){var i,c={},o=null,l=null;for(i in void 0!==a&&(o=""+a),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(l=t.ref),t)n.call(t,i)&&!r.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===c[i]&&(c[i]=t[i]);return{$$typeof:s,type:e,key:o,ref:l,props:c,_owner:d.current}}t.Fragment=c,t.jsx=o,t.jsxs=o},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>d});var i=a(96540);const s={},c=i.createContext(s);function n(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);