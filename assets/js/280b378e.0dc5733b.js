/*! For license information please see 280b378e.0dc5733b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46840],{43704:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>b});var a=t(17624),i=t(4552),s=t(11504);const c={id:"certification-connection",title:"CertificationConnection"},o=void 0,d={id:"objects/certification-connection",title:"CertificationConnection",description:"No description",source:"@site/api/objects/certification-connection.mdx",sourceDirName:"objects",slug:"/objects/certification-connection",permalink:"/api/objects/certification-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"certification-connection",title:"CertificationConnection"},sidebar:"schemaSidebar",previous:{title:"Category",permalink:"/api/objects/category"},next:{title:"CertificationData",permalink:"/api/objects/certification-data"}},r={},l=()=>{const e={span:"span",...(0,i.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,i.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,i.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>CertificationConnection.<b>edges</b></code><Bullet></Bullet><code>[CertificationEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectionedgescertificationedge--",level:4},{value:'<code>CertificationConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectionpageinfopageinfo--",level:4},{value:'<code>CertificationConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectionadvisemessageadvisemessage--",level:4},{value:'<code>CertificationConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>CertificationConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const o={details:"details",summary:"summary",...(0,i.M)()},[d,r]=(0,s.useState)(c);return(0,a.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type CertificationConnection {\n  edges: [CertificationEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"certificationconnectionedgescertificationedge--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/objects/certification-edge",children:(0,a.jsx)(n.code,{children:"[CertificationEdge]"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"certificationconnectionpageinfopageinfo--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/objects/page-info",children:(0,a.jsx)(n.code,{children:"PageInfo!"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"certificationconnectionadvisemessageadvisemessage--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/objects/advise-message",children:(0,a.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.h5,{id:"certificationconnectionadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/enums/advise-message-level",children:(0,a.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"certificationconnectiontotalcountint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/objects/hotel-xquery",children:(0,a.jsx)(n.code,{children:"HotelXQuery"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},44808:(e,n,t)=>{var a=t(11504),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,t){var a,s={},r=null,l=null;for(a in void 0!==t&&(r=""+t),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,a)&&!d.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:i,type:e,key:r,ref:l,props:s,_owner:o.current}}n.Fragment=s,n.jsx=r,n.jsxs=r},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>c});var a=t(11504);const i={},s=a.createContext(i);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);