/*! For license information please see 3b8a8f5f.6161cffb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33854],{83820:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>f});var n=r(74848),c=r(28453),a=r(96540);const s={id:"price-static",title:"PriceStatic",hide_table_of_contents:!1},i=void 0,o={id:"objects/price-static",title:"PriceStatic",description:"No description",source:"@site/api/objects/price-static.mdx",sourceDirName:"objects",slug:"/objects/price-static",permalink:"/api/objects/price-static",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"price-static",title:"PriceStatic",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PriceChange",permalink:"/api/objects/price-change"},next:{title:"Price",permalink:"/api/objects/price"}},l={},d=()=>{const e={span:"span",...(0,c.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,c.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,c.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:r,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,c.R)()},[o,l]=(0,a.useState)(s);return(0,n.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&r]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>PriceStatic.<b>amount</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricestaticamountfloat--",level:4},{value:'<code>PriceStatic.<b>currency</b></code><Bullet></Bullet><code>Currency!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricestaticcurrencycurrency--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type PriceStatic {\n  amount: Float!\n  currency: Currency!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"pricestaticamountfloat--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PriceStatic.",(0,n.jsx)("b",{children:"amount"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/float",children:(0,n.jsx)(t.code,{children:"Float!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Net amount"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"pricestaticcurrencycurrency--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PriceStatic.",(0,n.jsx)("b",{children:"currency"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/currency",children:(0,n.jsx)(t.code,{children:"Currency!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Price curency"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/mandatory-fee",children:(0,n.jsx)(t.code,{children:"MandatoryFee"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},21020:(e,t,r)=>{var n=r(96540),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!o.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:c,type:e,key:l,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const c={},a=n.createContext(c);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);