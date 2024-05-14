/*! For license information please see 83c329ac.b7cd2607.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16813],{22468:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>y});var r=t(74848),s=t(28453),o=t(96540);const a={id:"amount-inc-type",title:"AmountIncType"},c=void 0,i={id:"types/enums/amount-inc-type",title:"AmountIncType",description:"No description",source:"@site/api/types/enums/amount-inc-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/amount-inc-type",permalink:"/api/types/enums/amount-inc-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"amount-inc-type",title:"AmountIncType"},sidebar:"schemaSidebar",previous:{title:"AmountApplyType",permalink:"/api/types/enums/amount-apply-type"},next:{title:"ApikeyRole",permalink:"/api/types/enums/apikey-role"}},l={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[i,l]=(0,o.useState)(a);return(0,r.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})},y=[{value:"Values",id:"values",level:3},{value:"<code>AmountIncType.<b>PERCENT</b></code>",id:"amountinctypepercent",level:4},{value:"<code>AmountIncType.<b>AMOUNT</b></code>",id:"amountinctypeamount",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"enum AmountIncType {\n  PERCENT\n  AMOUNT\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(n.h4,{id:"amountinctypepercent",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AmountIncType.",(0,r.jsx)("b",{children:"PERCENT"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h4,{id:"amountinctypeamount",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AmountIncType.",(0,r.jsx)("b",{children:"AMOUNT"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/types/objects/price-adjust",children:(0,r.jsx)(n.code,{children:"PriceAdjust"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/types/inputs/price-adjust-input",children:(0,r.jsx)(n.code,{children:"PriceAdjustInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,o={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!i.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:l,ref:d,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);