/*! For license information please see 5ecd3e32.88fa1098.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9327],{89949:(e,r,a)=>{a.r(r),a.d(r,{Badge:()=>h,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>n,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>b});var t=a(74848),d=a(28453),s=a(96540);const i={id:"derived-rate-price-load",title:"DerivedRatePriceLoad"},n=void 0,c={id:"types/objects/derived-rate-price-load",title:"DerivedRatePriceLoad",description:"Represents a derived rate price load.",source:"@site/api/types/objects/derived-rate-price-load.mdx",sourceDirName:"types/objects",slug:"/types/objects/derived-rate-price-load",permalink:"/api/types/objects/derived-rate-price-load",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"derived-rate-price-load",title:"DerivedRatePriceLoad"},sidebar:"schemaSidebar",previous:{title:"DerivedRateAvailLoad",permalink:"/api/types/objects/derived-rate-avail-load"},next:{title:"DerivedRatePrice",permalink:"/api/types/objects/derived-rate-price"}},o={},l=()=>{const e={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,d.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const r={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:r,children:a,startOpen:i=!1})=>{const n={details:"details",summary:"summary",...(0,d.R)()},[c,o]=(0,s.useState)(i);return(0,t.jsxs)(n.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(n.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>DerivedRatePriceLoad.<b>baseRateCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"derivedratepriceloadbaseratecodestring-",level:4},{value:'<code>DerivedRatePriceLoad.<b>rates</b></code><Bullet></Bullet><code>[DerivedRatePrice]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"derivedratepriceloadratesderivedrateprice--",level:4},{value:'<code>DerivedRatePriceLoad.<b>dateRange</b></code><Bullet></Bullet><code>DateRangeProduct</code> <Badge class="badge badge--secondary"></Badge>',id:"derivedratepriceloaddaterangedaterangeproduct-",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Represents a derived rate price load."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type DerivedRatePriceLoad {\n  baseRateCode: String\n  rates: [DerivedRatePrice]\n  dateRange: DateRangeProduct\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"derivedratepriceloadbaseratecodestring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DerivedRatePriceLoad.",(0,t.jsx)("b",{children:"baseRateCode"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Base rate code associated with the derived rate."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"derivedratepriceloadratesderivedrateprice--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DerivedRatePriceLoad.",(0,t.jsx)("b",{children:"rates"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/types/objects/derived-rate-price",children:(0,t.jsx)(r.code,{children:"[DerivedRatePrice]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"List of derived rate prices. See DerivedRatePrice."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"derivedratepriceloaddaterangedaterangeproduct-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DerivedRatePriceLoad.",(0,t.jsx)("b",{children:"dateRange"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/types/objects/date-range-product",children:(0,t.jsx)(r.code,{children:"DateRangeProduct"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Date range to apply"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/types/objects/price-derived-rates-rs",children:(0,t.jsx)(r.code,{children:"PriceDerivedRatesRs"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},21020:(e,r,a)=>{var t=a(96540),d=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,a){var t,s={},o=null,l=null;for(t in void 0!==a&&(o=""+a),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:d,type:e,key:o,ref:l,props:s,_owner:n.current}}r.Fragment=s,r.jsx=o,r.jsxs=o},74848:(e,r,a)=>{e.exports=a(21020)},28453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>n});var t=a(96540);const d={},s=t.createContext(d);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);