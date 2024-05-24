/*! For license information please see 6eae6190.229d56da.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57046],{18895:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=n(74848),d=n(28453),r=n(96540);const s={id:"entity-audit-edge",title:"EntityAuditEdge",hide_table_of_contents:!1},a=void 0,o={id:"objects/entity-audit-edge",title:"EntityAuditEdge",description:"No description",source:"@site/api/objects/entity-audit-edge.mdx",sourceDirName:"objects",slug:"/objects/entity-audit-edge",permalink:"/api/objects/entity-audit-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"entity-audit-edge",title:"EntityAuditEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"EntityAuditData",permalink:"/api/objects/entity-audit-data"},next:{title:"EntityAudit",permalink:"/api/objects/entity-audit"}},c={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,d.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const t={span:"span",...(0,d.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,d.R)()},[o,c]=(0,r.useState)(s);return(0,i.jsxs)(a.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>EntityAuditEdge.<b>node</b></code><Bullet></Bullet><code>EntityAudit</code> <Badge class="badge badge--secondary"></Badge>',id:"entityauditedgenodeentityaudit-",level:4},{value:'<code>EntityAuditEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"entityauditedgecursorstring--",level:4},{value:"Member of",id:"member-of",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type EntityAuditEdge {\n  node: EntityAudit\n  cursor: String!\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"entityauditedgenodeentityaudit-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["EntityAuditEdge.",(0,i.jsx)("b",{children:"node"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/objects/entity-audit",children:(0,i.jsx)(t.code,{children:"EntityAudit"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"entityauditedgecursorstring--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["EntityAuditEdge.",(0,i.jsx)("b",{children:"cursor"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String!"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/objects/entity-audit-connection",children:(0,i.jsx)(t.code,{children:"EntityAuditConnection"})})," ",(0,i.jsx)(y,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var i=n(96540),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,r={},c=null,l=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,i)&&!o.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:d,type:e,key:c,ref:l,props:r,_owner:a.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const d={},r=i.createContext(d);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);