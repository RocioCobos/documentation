/*! For license information please see 9b3260ff.fe66532c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51408],{10652:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var i=n(17624),r=n(4552),c=n(11504);const o={id:"certification-edge",title:"CertificationEdge"},a=void 0,s={id:"objects/certification-edge",title:"CertificationEdge",description:"No description",source:"@site/api/objects/certification-edge.mdx",sourceDirName:"objects",slug:"/objects/certification-edge",permalink:"/api/objects/certification-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"certification-edge",title:"CertificationEdge"},sidebar:"schemaSidebar",previous:{title:"CertificationData",permalink:"/api/objects/certification-data"},next:{title:"CertificationResult",permalink:"/api/objects/certification-result"}},d={},l=()=>{const e={span:"span",...(0,r.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const t={a:"a",...(0,r.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>CertificationEdge.<b>node</b></code><Bullet></Bullet><code>Certification</code> <Badge class="badge badge--secondary"></Badge>',id:"certificationedgenodecertification-",level:4},{value:'<code>CertificationEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,r.M)()},[s,d]=(0,c.useState)(o);return(0,i.jsxs)(a.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"type CertificationEdge {\n  node: Certification\n  cursor: String!\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"certificationedgenodecertification-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationEdge.",(0,i.jsx)("b",{children:"node"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/objects/certification",children:(0,i.jsx)(t.code,{children:"Certification"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"certificationedgecursorstring--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationEdge.",(0,i.jsx)("b",{children:"cursor"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String!"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/objects/certification-connection",children:(0,i.jsx)(t.code,{children:"CertificationConnection"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},44808:(e,t,n)=>{var i=n(11504),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,c={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,i)&&!s.hasOwnProperty(i)&&(c[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===c[i]&&(c[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:l,props:c,_owner:a.current}}t.Fragment=c,t.jsx=d,t.jsxs=d},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>o});var i=n(11504);const r={},c=i.createContext(r);function o(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);