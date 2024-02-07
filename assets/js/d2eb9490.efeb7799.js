/*! For license information please see d2eb9490.efeb7799.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38128],{33120:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>m,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(17624),o=t(4552),l=t(11504);const s={id:"alert-mode",title:"AlertMode"},a=void 0,i={id:"enums/alert-mode",title:"AlertMode",description:"No description",source:"@site/api/enums/alert-mode.mdx",sourceDirName:"enums",slug:"/enums/alert-mode",permalink:"/api/enums/alert-mode",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-mode",title:"AlertMode"},sidebar:"schemaSidebar",previous:{title:"AlertGroups",permalink:"/api/enums/alert-groups"},next:{title:"AlertRangePrice",permalink:"/api/enums/alert-range-price"}},d={},c=()=>{const e={span:"span",...(0,o.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,o.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const r={span:"span",...(0,o.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},p=[{value:"Values",id:"values",level:3},{value:"<code>AlertMode.<b>RELATIVE</b></code>",id:"alertmoderelative",level:4},{value:"<code>AlertMode.<b>ABSOLUTE</b></code>",id:"alertmodeabsolute",level:4},{value:"<code>AlertMode.<b>COMPARATIVE</b></code>",id:"alertmodecomparative",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:r,children:t,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,o.M)()},[i,d]=(0,l.useState)(s);return(0,n.jsxs)(a.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:r}),i&&t]})};function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"No description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"enum AlertMode {\n  RELATIVE\n  ABSOLUTE\n  COMPARATIVE\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"values",children:"Values"}),"\n",(0,n.jsx)(r.h4,{id:"alertmoderelative",children:(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertMode.",(0,n.jsx)("b",{children:"RELATIVE"})]})})}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsx)(r.h4,{id:"alertmodeabsolute",children:(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertMode.",(0,n.jsx)("b",{children:"ABSOLUTE"})]})})}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsx)(r.h4,{id:"alertmodecomparative",children:(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertMode.",(0,n.jsx)("b",{children:"COMPARATIVE"})]})})}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/objects/alert-configuration",children:(0,n.jsx)(r.code,{children:"AlertConfiguration"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:r}={...(0,o.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},44808:(e,r,t)=>{var n=t(11504),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,l={},d=null,c=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===l[n]&&(l[n]=r[n]);return{$$typeof:o,type:e,key:d,ref:c,props:l,_owner:a.current}}r.Fragment=l,r.jsx=d,r.jsxs=d},17624:(e,r,t)=>{e.exports=t(44808)},4552:(e,r,t)=>{t.d(r,{I:()=>a,M:()=>s});var n=t(11504);const o={},l=n.createContext(o);function s(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);