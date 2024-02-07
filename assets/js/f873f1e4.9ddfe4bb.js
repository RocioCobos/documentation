/*! For license information please see f873f1e4.9ddfe4bb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53900],{9356:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>g,Bullet:()=>a,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=t(17624),s=t(4552),l=t(11504);const c={id:"client-edge",title:"ClientEdge"},i=void 0,o={id:"objects/client-edge",title:"ClientEdge",description:"Client connection edge",source:"@site/api/objects/client-edge.mdx",sourceDirName:"objects",slug:"/objects/client-edge",permalink:"/api/objects/client-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"client-edge",title:"ClientEdge"},sidebar:"schemaSidebar",previous:{title:"ClientData",permalink:"/api/objects/client-data"},next:{title:"Client",permalink:"/api/objects/client"}},d={},a=()=>{const e={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ClientEdge.<b>node</b></code><Bullet></Bullet><code>Client</code> <Badge class="badge badge--secondary"></Badge>',id:"clientedgenodeclient-",level:4},{value:'<code>ClientEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,s.M)()},[o,d]=(0,l.useState)(c);return(0,r.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Client connection edge"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type ClientEdge {\n  node: Client\n  cursor: String!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"clientedgenodeclient-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientEdge.",(0,r.jsx)("b",{children:"node"})]})}),(0,r.jsx)(a,{}),(0,r.jsx)(n.a,{href:"/api/objects/client",children:(0,r.jsx)(n.code,{children:"Client"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Client item"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"clientedgecursorstring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientEdge.",(0,r.jsx)("b",{children:"cursor"})]})}),(0,r.jsx)(a,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Cursor to the next item"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/objects/client-connection",children:(0,r.jsx)(n.code,{children:"ClientConnection"})})," ",(0,r.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},44808:(e,n,t)=>{var r=t(11504),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,l={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,r)&&!o.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:a,props:l,_owner:i.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>c});var r=t(11504);const s={},l=r.createContext(s);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);