/*! For license information please see 2759e9f1.507c5a4b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11792],{18220:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=n(17624),s=n(4552),i=n(11504);const a={id:"alert-ratios-input",title:"AlertRatiosInput"},l=void 0,o={id:"inputs/alert-ratios-input",title:"AlertRatiosInput",description:"No description",source:"@site/api/inputs/alert-ratios-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-ratios-input",permalink:"/api/inputs/alert-ratios-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-ratios-input",title:"AlertRatiosInput"},sidebar:"schemaSidebar",previous:{title:"AlertPriceRelativeConfigurationByTimeInput",permalink:"/api/inputs/alert-price-relative-configuration-by-time-input"},next:{title:"AlertSlackAdvancedOptionsInput",permalink:"/api/inputs/alert-slack-advanced-options-input"}},c={},d=()=>{const e={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertRatiosInput.<b>check</b></code><Bullet></Bullet><code>AlertCheckRatio!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertratiosinputcheckalertcheckratio--",level:4},{value:'<code>AlertRatiosInput.<b>l2b</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertratiosinputl2bint-",level:4},{value:'<code>AlertRatiosInput.<b>conversion</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertratiosinputconversionint-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const l={details:"details",summary:"summary",...(0,s.M)()},[o,c]=(0,i.useState)(a);return(0,r.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input AlertRatiosInput {\n  check: AlertCheckRatio!\n  l2b: Int\n  conversion: Int\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"alertratiosinputcheckalertcheckratio--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertRatiosInput.",(0,r.jsx)("b",{children:"check"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/enums/alert-check-ratio",children:(0,r.jsx)(t.code,{children:"AlertCheckRatio!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ratio to checked"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"alertratiosinputl2bint-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertRatiosInput.",(0,r.jsx)("b",{children:"l2b"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/scalars/int",children:(0,r.jsx)(t.code,{children:"Int"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"l2b ratio limit to be advised"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"alertratiosinputconversionint-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertRatiosInput.",(0,r.jsx)("b",{children:"conversion"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/scalars/int",children:(0,r.jsx)(t.code,{children:"Int"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"conversion ratio limit to be advised"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/inputs/alert-business-metric-ratio-configuration-by-time-input",children:(0,r.jsx)(t.code,{children:"AlertBusinessMetricRatioConfigurationByTimeInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},44808:(e,t,n)=>{var r=n(11504),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>a});var r=n(11504);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);