/*! For license information please see a7d3f731.3d6a7609.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91348],{73692:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>y});var n=r(17624),o=r(4552),a=r(11504);const s={id:"category-edge",title:"CategoryEdge"},c=void 0,d={id:"objects/category-edge",title:"CategoryEdge",description:"CategoryList Edge definition",source:"@site/api/objects/category-edge.mdx",sourceDirName:"objects",slug:"/objects/category-edge",permalink:"/api/objects/category-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category-edge",title:"CategoryEdge"},sidebar:"schemaSidebar",previous:{title:"CategoryData",permalink:"/api/objects/category-data"},next:{title:"Category",permalink:"/api/objects/category"}},l={},i=()=>{const e={span:"span",...(0,o.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const t={a:"a",...(0,o.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,o.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>CategoryEdge.<b>node</b></code><Bullet></Bullet><code>Category</code> <Badge class="badge badge--secondary"></Badge>',id:"categoryedgenodecategory-",level:4},{value:'<code>CategoryEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:t,children:r,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,o.M)()},[d,l]=(0,a.useState)(s);return(0,n.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&r]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"CategoryList Edge definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type CategoryEdge {\n  node: Category\n  cursor: String!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"categoryedgenodecategory-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/objects/category",children:(0,n.jsx)(t.code,{children:"Category"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"categoryedgecursorstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/category-connection",children:(0,n.jsx)(t.code,{children:"CategoryConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},44808:(e,t,r)=>{var n=r(11504),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,i=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)s.call(t,n)&&!d.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:i,props:a,_owner:c.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},17624:(e,t,r)=>{e.exports=r(44808)},4552:(e,t,r)=>{r.d(t,{I:()=>c,M:()=>s});var n=r(11504);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);