/*! For license information please see b91eed76.9d3cfbc3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17662],{27522:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>u,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var t=n(74848),c=n(28453),a=n(96540);const s={id:"alert-price",title:"AlertPrice",hide_table_of_contents:!1},l=void 0,i={id:"objects/alert-price",title:"AlertPrice",description:"Price contains the specific configuration for Price alert Type",source:"@site/api/objects/alert-price.mdx",sourceDirName:"objects",slug:"/objects/alert-price",permalink:"/api/objects/alert-price",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-price",title:"AlertPrice",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertNotifications",permalink:"/api/objects/alert-notifications"},next:{title:"AlertRatios",permalink:"/api/objects/alert-ratios"}},o={},d=()=>{const e={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const r={a:"a",...(0,c.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,c.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:r,children:n,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,c.R)()},[i,o]=(0,a.useState)(s);return(0,t.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:r}),i&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertPrice.<b>check</b></code><Bullet></Bullet><code>AlertCheckPrice!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpricecheckalertcheckprice--",level:4},{value:'<code>AlertPrice.<b>range</b></code><Bullet></Bullet><code>AlertRangePrice!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpricerangealertrangeprice--",level:4},{value:'<code>AlertPrice.<b>amount</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertpriceamountint-",level:4},{value:'<code>AlertPrice.<b>commission</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertpricecommissionint-",level:4},{value:'<code>AlertPrice.<b>amountBy</b></code><Bullet></Bullet><code>AlertAmountBy</code> <Badge class="badge badge--secondary"></Badge>',id:"alertpriceamountbyalertamountby-",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Price contains the specific configuration for Price alert Type"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type AlertPrice {\n  check: AlertCheckPrice!\n  range: AlertRangePrice!\n  amount: Int\n  commission: Int\n  amountBy: AlertAmountBy\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"alertpricecheckalertcheckprice--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPrice.",(0,t.jsx)("b",{children:"check"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/api/enums/alert-check-price",children:(0,t.jsx)(r.code,{children:"AlertCheckPrice!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Specify which field is goinf to be checked. Amount, commission or both"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"alertpricerangealertrangeprice--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPrice.",(0,t.jsx)("b",{children:"range"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/api/enums/alert-range-price",children:(0,t.jsx)(r.code,{children:"AlertRangePrice!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Low or greater values of amount/commission (value included)"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"alertpriceamountint-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPrice.",(0,t.jsx)("b",{children:"amount"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/api/scalars/int",children:(0,t.jsx)(r.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Value of amount price"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"alertpricecommissionint-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPrice.",(0,t.jsx)("b",{children:"commission"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/api/scalars/int",children:(0,t.jsx)(r.code,{children:"Int"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Value of commission price"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"alertpriceamountbyalertamountby-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPrice.",(0,t.jsx)("b",{children:"amountBy"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(r.a,{href:"/api/enums/alert-amount-by",children:(0,t.jsx)(r.code,{children:"AlertAmountBy"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Used for check amount"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/objects/alert-type-configuration",children:(0,t.jsx)(r.code,{children:"AlertTypeConfiguration"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},21020:(e,r,n)=>{var t=n(96540),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var t,a={},o=null,d=null;for(t in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,t)&&!i.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:c,type:e,key:o,ref:d,props:a,_owner:l.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>l});var t=n(96540);const c={},a=t.createContext(c);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);