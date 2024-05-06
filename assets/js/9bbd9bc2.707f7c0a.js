/*! For license information please see 9bbd9bc2.707f7c0a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54254],{10173:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var o=r(74848),t=r(28453),i=r(96540);const c={id:"provider-connection-type",title:"ProviderConnectionType",hide_table_of_contents:!1},s=void 0,a={id:"enums/provider-connection-type",title:"ProviderConnectionType",description:"Provider connection type",source:"@site/api/enums/provider-connection-type.mdx",sourceDirName:"enums",slug:"/enums/provider-connection-type",permalink:"/api/enums/provider-connection-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"provider-connection-type",title:"ProviderConnectionType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProfileClassification",permalink:"/api/enums/profile-classification"},next:{title:"ProviderOrderByEnum",permalink:"/api/enums/provider-order-by-enum"}},l={},d=()=>{const e={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,t.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:r,startOpen:c=!1})=>{const s={details:"details",summary:"summary",...(0,t.R)()},[a,l]=(0,i.useState)(c);return(0,o.jsxs)(s.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&r]})},h=[{value:"Values",id:"values",level:3},{value:"<code>ProviderConnectionType.<b>PULL</b></code>",id:"providerconnectiontypepull",level:4},{value:"<code>ProviderConnectionType.<b>PUSH</b></code>",id:"providerconnectiontypepush",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Provider connection type"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"enum ProviderConnectionType {\n  PULL\n  PUSH\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,o.jsx)(n.h4,{id:"providerconnectiontypepull",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderConnectionType.",(0,o.jsx)("b",{children:"PULL"})]})})}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsx)(n.h4,{id:"providerconnectiontypepush",children:(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderConnectionType.",(0,o.jsx)("b",{children:"PUSH"})]})})}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/objects/provider-data",children:(0,o.jsx)(n.code,{children:"ProviderData"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function v(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},21020:(e,n,r)=>{var o=r(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,i={},l=null,d=null;for(o in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,o)&&!a.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:t,type:e,key:l,ref:d,props:i,_owner:s.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>s});var o=r(96540);const t={},i=o.createContext(t);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);