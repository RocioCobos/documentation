/*! For license information please see 7233b618.7db7011e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22625],{546:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>x});var r=n(74848),a=n(28453),i=n(96540);const s={id:"alert-update-price-input",title:"AlertUpdatePriceInput"},c=void 0,l={id:"types/inputs/alert-update-price-input",title:"AlertUpdatePriceInput",description:"No description",source:"@site/api/types/inputs/alert-update-price-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/alert-update-price-input",permalink:"/api/types/inputs/alert-update-price-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-update-price-input",title:"AlertUpdatePriceInput"},sidebar:"schemaSidebar",previous:{title:"AlertUpdatePriceAbsoluteConfigurationByTimeInput",permalink:"/api/types/inputs/alert-update-price-absolute-configuration-by-time-input"},next:{title:"AlertUpdatePriceRelativeByRequestsInput",permalink:"/api/types/inputs/alert-update-price-relative-by-requests-input"}},d={},o=()=>{const e={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,a.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[l,d]=(0,i.useState)(s);return(0,r.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdatePriceInput.<b>check</b></code><Bullet></Bullet><code>AlertCheckPrice</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatepriceinputcheckalertcheckprice-",level:4},{value:'<code>AlertUpdatePriceInput.<b>range</b></code><Bullet></Bullet><code>AlertRangePrice</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatepriceinputrangealertrangeprice-",level:4},{value:'<code>AlertUpdatePriceInput.<b>amount</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatepriceinputamountint-",level:4},{value:'<code>AlertUpdatePriceInput.<b>commission</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatepriceinputcommissionint-",level:4},{value:'<code>AlertUpdatePriceInput.<b>amountBy</b></code><Bullet></Bullet><code>AlertAmountBy</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatepriceinputamountbyalertamountby-",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdatePriceInput {\n  check: AlertCheckPrice\n  range: AlertRangePrice\n  amount: Int\n  commission: Int\n  amountBy: AlertAmountBy\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"alertupdatepriceinputcheckalertcheckprice-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdatePriceInput.",(0,r.jsx)("b",{children:"check"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(t.a,{href:"/api/types/enums/alert-check-price",children:(0,r.jsx)(t.code,{children:"AlertCheckPrice"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Specify which field is going to be checked. Amount, commission or both"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"alertupdatepriceinputrangealertrangeprice-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdatePriceInput.",(0,r.jsx)("b",{children:"range"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(t.a,{href:"/api/types/enums/alert-range-price",children:(0,r.jsx)(t.code,{children:"AlertRangePrice"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Low or greater values of amount/commission (value included)"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"alertupdatepriceinputamountint-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdatePriceInput.",(0,r.jsx)("b",{children:"amount"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(t.code,{children:"Int"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Value of amount price"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"alertupdatepriceinputcommissionint-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdatePriceInput.",(0,r.jsx)("b",{children:"commission"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,r.jsx)(t.code,{children:"Int"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Value of commission price"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"alertupdatepriceinputamountbyalertamountby-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdatePriceInput.",(0,r.jsx)("b",{children:"amountBy"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(t.a,{href:"/api/types/enums/alert-amount-by",children:(0,r.jsx)(t.code,{children:"AlertAmountBy"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Amount can be checked by its total value or night"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/types/inputs/alert-update-price-absolute-configuration-by-requests-input",children:(0,r.jsx)(t.code,{children:"AlertUpdatePriceAbsoluteConfigurationByRequestsInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(o,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/alert-update-price-absolute-configuration-by-time-input",children:(0,r.jsx)(t.code,{children:"AlertUpdatePriceAbsoluteConfigurationByTimeInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(o,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/alert-update-price-relative-configuration-by-requests-input",children:(0,r.jsx)(t.code,{children:"AlertUpdatePriceRelativeConfigurationByRequestsInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(o,{}),(0,r.jsx)(t.a,{href:"/api/types/inputs/alert-update-price-relative-configuration-by-time-input",children:(0,r.jsx)(t.code,{children:"AlertUpdatePriceRelativeConfigurationByTimeInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,i={},d=null,o=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(o=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:o,props:i,_owner:c.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);