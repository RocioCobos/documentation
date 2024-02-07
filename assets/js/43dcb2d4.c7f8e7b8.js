/*! For license information please see 43dcb2d4.c7f8e7b8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23884],{98012:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>a,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var r=t(17624),o=t(4552),l=t(11504);const s={id:"alert-bound",title:"AlertBound"},a=void 0,d={id:"enums/alert-bound",title:"AlertBound",description:"No description",source:"@site/api/enums/alert-bound.mdx",sourceDirName:"enums",slug:"/enums/alert-bound",permalink:"/api/enums/alert-bound",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-bound",title:"AlertBound"},sidebar:"schemaSidebar",previous:{title:"AlertAmountBy",permalink:"/api/enums/alert-amount-by"},next:{title:"AlertCheckPrice",permalink:"/api/enums/alert-check-price"}},i={},c=()=>{const e={span:"span",...(0,o.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,o.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,o.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>AlertBound.<b>UPPER</b></code>",id:"alertboundupper",level:4},{value:"<code>AlertBound.<b>LOWER</b></code>",id:"alertboundlower",level:4},{value:"<code>AlertBound.<b>BOTH</b></code>",id:"alertboundboth",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,o.M)()},[d,i]=(0,l.useState)(s);return(0,r.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(a.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"enum AlertBound {\n  UPPER\n  LOWER\n  BOTH\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(n.h4,{id:"alertboundupper",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertBound.",(0,r.jsx)("b",{children:"UPPER"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h4,{id:"alertboundlower",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertBound.",(0,r.jsx)("b",{children:"LOWER"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h4,{id:"alertboundboth",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertBound.",(0,r.jsx)("b",{children:"BOTH"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/objects/alert-bounds",children:(0,r.jsx)(n.code,{children:"AlertBounds"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/inputs/alert-bounds-input",children:(0,r.jsx)(n.code,{children:"AlertBoundsInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/inputs/alert-update-bounds-input",children:(0,r.jsx)(n.code,{children:"AlertUpdateBoundsInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},44808:(e,n,t)=>{var r=t(11504),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var r,l={},i=null,c=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:o,type:e,key:i,ref:c,props:l,_owner:a.current}}n.Fragment=l,n.jsx=i,n.jsxs=i},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var r=t(11504);const o={},l=r.createContext(o);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);