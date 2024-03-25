/*! For license information please see d48783d6.da9ff3ca.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1408],{91116:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>n,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>j});var i=t(17624),a=t(4552),d=t(11504);const s={id:"derived-rate-price",title:"DerivedRatePrice"},n=void 0,c={id:"objects/derived-rate-price",title:"DerivedRatePrice",description:"Represents a derived rate price.",source:"@site/api/objects/derived-rate-price.mdx",sourceDirName:"objects",slug:"/objects/derived-rate-price",permalink:"/api/objects/derived-rate-price",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"derived-rate-price",title:"DerivedRatePrice"},sidebar:"schemaSidebar",previous:{title:"DerivedRatePriceLoad",permalink:"/api/objects/derived-rate-price-load"},next:{title:"DerivedRatesAvailLoad",permalink:"/api/objects/derived-rates-avail-load"}},o={},l=()=>{const e={span:"span",...(0,a.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,a.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,a.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.span,{className:e.class,children:e.text})})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>DerivedRatePrice.<b>rateCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"derivedratepriceratecodestring-",level:4},{value:'<code>DerivedRatePrice.<b>priceAdjust</b></code><Bullet></Bullet><code>PriceAdjust</code> <Badge class="badge badge--secondary"></Badge>',id:"derivedratepricepriceadjustpriceadjust-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:r,children:t,startOpen:s=!1})=>{const n={details:"details",summary:"summary",...(0,a.M)()},[c,o]=(0,d.useState)(s);return(0,i.jsxs)(n.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&t]})};function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Represents a derived rate price."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-graphql",children:"type DerivedRatePrice {\n  rateCode: String\n  priceAdjust: PriceAdjust\n}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(r.h4,{id:"derivedratepriceratecodestring-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["DerivedRatePrice.",(0,i.jsx)("b",{children:"rateCode"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(r.a,{href:"/api/scalars/string",children:(0,i.jsx)(r.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Code associated with the rate."}),"\n"]}),"\n",(0,i.jsxs)(r.h4,{id:"derivedratepricepriceadjustpriceadjust-",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["DerivedRatePrice.",(0,i.jsx)("b",{children:"priceAdjust"})]})}),(0,i.jsx)(l,{}),(0,i.jsx)(r.a,{href:"/api/objects/price-adjust",children:(0,i.jsx)(r.code,{children:"PriceAdjust"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Price adjustment associated with the rate. See PriceAdjust."}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/api/objects/derived-rate-price-load",children:(0,i.jsx)(r.code,{children:"DerivedRatePriceLoad"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:r}={...(0,a.M)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},44808:(e,r,t)=>{var i=t(11504),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,n=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var i,d={},o=null,l=null;for(i in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,i)&&!c.hasOwnProperty(i)&&(d[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===d[i]&&(d[i]=r[i]);return{$$typeof:a,type:e,key:o,ref:l,props:d,_owner:n.current}}r.Fragment=d,r.jsx=o,r.jsxs=o},17624:(e,r,t)=>{e.exports=t(44808)},4552:(e,r,t)=>{t.d(r,{I:()=>n,M:()=>s});var i=t(11504);const a={},d=i.createContext(a);function s(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);