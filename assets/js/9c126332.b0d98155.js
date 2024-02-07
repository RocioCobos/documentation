/*! For license information please see 9c126332.b0d98155.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88434],{72656:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=n(17624),a=n(4552),s=n(11504);const l={id:"alert-range-price",title:"AlertRangePrice"},i=void 0,c={id:"enums/alert-range-price",title:"AlertRangePrice",description:"No description",source:"@site/api/enums/alert-range-price.mdx",sourceDirName:"enums",slug:"/enums/alert-range-price",permalink:"/api/enums/alert-range-price",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-range-price",title:"AlertRangePrice"},sidebar:"schemaSidebar",previous:{title:"AlertMode",permalink:"/api/enums/alert-mode"},next:{title:"AlertSharedType",permalink:"/api/enums/alert-shared-type"}},o={},d=()=>{const e={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,a.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>AlertRangePrice.<b>LESS</b></code>",id:"alertrangepriceless",level:4},{value:"<code>AlertRangePrice.<b>GREATER</b></code>",id:"alertrangepricegreater",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:r,children:n,startOpen:l=!1})=>{const i={details:"details",summary:"summary",...(0,a.M)()},[c,o]=(0,s.useState)(l);return(0,t.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&n]})};function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"No description"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"enum AlertRangePrice {\n  LESS\n  GREATER\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(r.h4,{id:"alertrangepriceless",children:(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertRangePrice.",(0,t.jsx)("b",{children:"LESS"})]})})}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsx)(r.h4,{id:"alertrangepricegreater",children:(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertRangePrice.",(0,t.jsx)("b",{children:"GREATER"})]})})}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/objects/alert-price",children:(0,t.jsx)(r.code,{children:"AlertPrice"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/api/inputs/alert-price-input",children:(0,t.jsx)(r.code,{children:"AlertPriceInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/api/inputs/alert-update-price-input",children:(0,t.jsx)(r.code,{children:"AlertUpdatePriceInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:r}={...(0,a.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},44808:(e,r,n)=>{var t=n(11504),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var t,s={},o=null,d=null;for(t in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:o,ref:d,props:s,_owner:i.current}}r.Fragment=s,r.jsx=o,r.jsxs=o},17624:(e,r,n)=>{e.exports=n(44808)},4552:(e,r,n)=>{n.d(r,{I:()=>i,M:()=>l});var t=n(11504);const a={},s=t.createContext(a);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);