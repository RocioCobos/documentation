/*! For license information please see 02e2d051.df6af164.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70672],{29032:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var r=a(17624),o=a(4552),d=a(11504);const t={id:"managed-group-edge",title:"ManagedGroupEdge"},s=void 0,c={id:"objects/managed-group-edge",title:"ManagedGroupEdge",description:"No description",source:"@site/api/objects/managed-group-edge.mdx",sourceDirName:"objects",slug:"/objects/managed-group-edge",permalink:"/api/objects/managed-group-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"managed-group-edge",title:"ManagedGroupEdge"},sidebar:"schemaSidebar",previous:{title:"ManagedGroupData",permalink:"/api/objects/managed-group-data"},next:{title:"ManagedGroup",permalink:"/api/objects/managed-group"}},l={},i=()=>{const e={span:"span",...(0,o.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,o.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,o.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>ManagedGroupEdge.<b>node</b></code><Bullet></Bullet><code>ManagedGroup</code> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupedgenodemanagedgroup-",level:4},{value:'<code>ManagedGroupEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:n,children:a,startOpen:t=!1})=>{const s={details:"details",summary:"summary",...(0,o.M)()},[c,l]=(0,d.useState)(t);return(0,r.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&a]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type ManagedGroupEdge {\n  node: ManagedGroup\n  cursor: String!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"managedgroupedgenodemanagedgroup-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroupEdge.",(0,r.jsx)("b",{children:"node"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/objects/managed-group",children:(0,r.jsx)(n.code,{children:"ManagedGroup"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(n.h4,{id:"managedgroupedgecursorstring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroupEdge.",(0,r.jsx)("b",{children:"cursor"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/objects/managed-group-connection",children:(0,r.jsx)(n.code,{children:"ManagedGroupConnection"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},44808:(e,n,a)=>{var r=a(11504),o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,a){var r,d={},l=null,i=null;for(r in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(i=n.ref),n)t.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:i,props:d,_owner:s.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},17624:(e,n,a)=>{e.exports=a(44808)},4552:(e,n,a)=>{a.d(n,{I:()=>s,M:()=>t});var r=a(11504);const o={},d=r.createContext(o);function t(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);