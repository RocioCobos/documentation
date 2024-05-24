/*! For license information please see 11274129.a523aa8d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2718],{36259:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var s=t(74848),a=t(28453),i=t(96540);const c={id:"certification-connection",title:"CertificationConnection"},o=void 0,d={id:"types/objects/certification-connection",title:"CertificationConnection",description:"No description",source:"@site/api/types/objects/certification-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/certification-connection",permalink:"/api/types/objects/certification-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"certification-connection",title:"CertificationConnection"},sidebar:"schemaSidebar",previous:{title:"Category",permalink:"/api/types/objects/category"},next:{title:"CertificationData",permalink:"/api/types/objects/certification-data"}},r={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[d,r]=(0,i.useState)(c);return(0,s.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>CertificationConnection.<b>edges</b></code><Bullet></Bullet><code>[CertificationEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectionedgescertificationedge--",level:4},{value:'<code>CertificationConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectionpageinfopageinfo--",level:4},{value:'<code>CertificationConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectionadvisemessageadvisemessage--",level:4},{value:'<code>CertificationConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>CertificationConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type CertificationConnection {\n  edges: [CertificationEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"certificationconnectionedgescertificationedge--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.",(0,s.jsx)("b",{children:"edges"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/certification-edge",children:(0,s.jsx)(n.code,{children:"[CertificationEdge]"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"certificationconnectionpageinfopageinfo--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.",(0,s.jsx)("b",{children:"pageInfo"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,s.jsx)(n.code,{children:"PageInfo!"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"certificationconnectionadvisemessageadvisemessage--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.",(0,s.jsx)("b",{children:"adviseMessage"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/advise-message",children:(0,s.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.h5,{id:"certificationconnectionadvisemessageleveladvisemessagelevel--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.adviseMessage.",(0,s.jsx)("b",{children:"level"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/enums/advise-message-level",children:(0,s.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"certificationconnectiontotalcountint--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.",(0,s.jsx)("b",{children:"totalCount"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(n.code,{children:"Int!"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/types/objects/hotel-xquery",children:(0,s.jsx)(n.code,{children:"HotelXQuery"})})," ",(0,s.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},21020:(e,n,t)=>{var s=t(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,t){var s,i={},r=null,l=null;for(s in void 0!==t&&(r=""+t),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:a,type:e,key:r,ref:l,props:i,_owner:o.current}}n.Fragment=i,n.jsx=r,n.jsxs=r},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);