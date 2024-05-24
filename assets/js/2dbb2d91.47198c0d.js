/*! For license information please see 2dbb2d91.47198c0d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26397],{27286:(e,s,c)=>{c.r(s),c.d(s,{Badge:()=>u,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var n=c(74848),t=c(28453),r=c(96540);const a={id:"access-edge",title:"AccessEdge"},o=void 0,d={id:"types/objects/access-edge",title:"AccessEdge",description:"No description",source:"@site/api/types/objects/access-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/access-edge",permalink:"/api/types/objects/access-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"access-edge",title:"AccessEdge"},sidebar:"schemaSidebar",previous:{title:"AccessData",permalink:"/api/types/objects/access-data"},next:{title:"Access",permalink:"/api/types/objects/access"}},l={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:c,startOpen:a=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[d,l]=(0,r.useState)(a);return(0,n.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&c]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AccessEdge.<b>node</b></code><Bullet></Bullet><code>Access</code> <Badge class="badge badge--secondary"></Badge>',id:"accessedgenodeaccess-",level:4},{value:'<code>AccessEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accessedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type AccessEdge {\n  node: Access\n  cursor: String!\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"accessedgenodeaccess-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/objects/access",children:(0,n.jsx)(s.code,{children:"Access"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"accessedgecursorstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/types/objects/access-connection",children:(0,n.jsx)(s.code,{children:"AccessConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},21020:(e,s,c)=>{var n=c(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,c){var n,r={},l=null,i=null;for(n in void 0!==c&&(l=""+c),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)a.call(s,n)&&!d.hasOwnProperty(n)&&(r[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===r[n]&&(r[n]=s[n]);return{$$typeof:t,type:e,key:l,ref:i,props:r,_owner:o.current}}s.Fragment=r,s.jsx=l,s.jsxs=l},74848:(e,s,c)=>{e.exports=c(21020)},28453:(e,s,c)=>{c.d(s,{R:()=>a,x:()=>o});var n=c(96540);const t={},r=n.createContext(t);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);