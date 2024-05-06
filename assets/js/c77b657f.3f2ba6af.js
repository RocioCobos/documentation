/*! For license information please see c77b657f.3f2ba6af.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3286],{67321:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var r=t(74848),s=t(28453),d=t(96540);const a={id:"order-by-descendents",title:"OrderByDescendents",hide_table_of_contents:!1},o=void 0,c={id:"enums/order-by-descendents",title:"OrderByDescendents",description:"No description",source:"@site/api/enums/order-by-descendents.mdx",sourceDirName:"enums",slug:"/enums/order-by-descendents",permalink:"/api/enums/order-by-descendents",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"order-by-descendents",title:"OrderByDescendents",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OperationType",permalink:"/api/enums/operation-type"},next:{title:"OrganizationContactType",permalink:"/api/enums/organization-contact-type"}},i={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[c,i]=(0,d.useState)(a);return(0,r.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},h=[{value:"Values",id:"values",level:3},{value:"<code>OrderByDescendents.<b>created_at_ASC</b></code>",id:"orderbydescendentscreated_at_asc",level:4},{value:"<code>OrderByDescendents.<b>created_at_DESC</b></code>",id:"orderbydescendentscreated_at_desc",level:4}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"enum OrderByDescendents {\n  created_at_ASC\n  created_at_DESC\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(n.h4,{id:"orderbydescendentscreated_at_asc",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderByDescendents.",(0,r.jsx)("b",{children:"created_at_ASC"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h4,{id:"orderbydescendentscreated_at_desc",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["OrderByDescendents.",(0,r.jsx)("b",{children:"created_at_DESC"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var r,d={},i=null,l=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:s,type:e,key:i,ref:l,props:d,_owner:o.current}}n.Fragment=d,n.jsx=i,n.jsxs=i},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},d=r.createContext(s);function a(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);