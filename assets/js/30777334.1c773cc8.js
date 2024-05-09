/*! For license information please see 30777334.1c773cc8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60723],{61202:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=n(74848),t=n(28453),l=n(96540);const o={id:"supplier-edge",title:"SupplierEdge",hide_table_of_contents:!1},i=void 0,d={id:"objects/supplier-edge",title:"SupplierEdge",description:"Supplier connection edge",source:"@site/api/objects/supplier-edge.mdx",sourceDirName:"objects",slug:"/objects/supplier-edge",permalink:"/api/objects/supplier-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"supplier-edge",title:"SupplierEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupplierData",permalink:"/api/objects/supplier-data"},next:{title:"Supplier",permalink:"/api/objects/supplier"}},a={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:r,children:n,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,t.R)()},[d,a]=(0,l.useState)(o);return(0,s.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>SupplierEdge.<b>node</b></code><Bullet></Bullet><code>Supplier</code> <Badge class="badge badge--secondary"></Badge>',id:"supplieredgenodesupplier-",level:4},{value:'<code>SupplierEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplieredgecursorstring--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Supplier connection edge"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-graphql",children:"type SupplierEdge {\n  node: Supplier\n  cursor: String!\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(r.h4,{id:"supplieredgenodesupplier-",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierEdge.",(0,s.jsx)("b",{children:"node"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(r.a,{href:"/api/objects/supplier",children:(0,s.jsx)(r.code,{children:"Supplier"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Supplier item"}),"\n"]}),"\n",(0,s.jsxs)(r.h4,{id:"supplieredgecursorstring--",children:[(0,s.jsx)(r.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierEdge.",(0,s.jsx)("b",{children:"cursor"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(r.a,{href:"/api/scalars/string",children:(0,s.jsx)(r.code,{children:"String!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Cursor to the next item"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/objects/supplier-connection",children:(0,s.jsx)(r.code,{children:"SupplierConnection"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var s,l={},a=null,c=null;for(s in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(c=r.ref),r)o.call(r,s)&&!d.hasOwnProperty(s)&&(l[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===l[s]&&(l[s]=r[s]);return{$$typeof:t,type:e,key:a,ref:c,props:l,_owner:i.current}}r.Fragment=l,r.jsx=a,r.jsxs=a},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var s=n(96540);const t={},l=s.createContext(t);function o(e){const r=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:r},e.children)}}}]);