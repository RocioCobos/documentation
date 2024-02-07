/*! For license information please see e1ab3a08.2ba322c1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61072],{74300:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>l,default:()=>j,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(17624),s=r(4552),a=r(11504);const o={id:"alert-ratios",title:"AlertRatios"},l=void 0,c={id:"objects/alert-ratios",title:"AlertRatios",description:"No description",source:"@site/api/objects/alert-ratios.mdx",sourceDirName:"objects",slug:"/objects/alert-ratios",permalink:"/api/objects/alert-ratios",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-ratios",title:"AlertRatios"},sidebar:"schemaSidebar",previous:{title:"AlertPrice",permalink:"/api/objects/alert-price"},next:{title:"AlertSlackAdvancedOptions",permalink:"/api/objects/alert-slack-advanced-options"}},i={},d=()=>{const e={span:"span",...(0,s.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,s.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertRatios.<b>check</b></code><Bullet></Bullet><code>AlertCheckRatio!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertratioscheckalertcheckratio--",level:4},{value:'<code>AlertRatios.<b>l2b</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertratiosl2bint-",level:4},{value:'<code>AlertRatios.<b>conversion</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertratiosconversionint-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:t,children:r,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,s.M)()},[c,i]=(0,a.useState)(o);return(0,n.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&r]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type AlertRatios {\n  check: AlertCheckRatio!\n  l2b: Int\n  conversion: Int\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"alertratioscheckalertcheckratio--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertRatios.",(0,n.jsx)("b",{children:"check"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/enums/alert-check-ratio",children:(0,n.jsx)(t.code,{children:"AlertCheckRatio!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Ratio to checked"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alertratiosl2bint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertRatios.",(0,n.jsx)("b",{children:"l2b"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"l2b ratio limit to be advised"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alertratiosconversionint-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertRatios.",(0,n.jsx)("b",{children:"conversion"})]})}),(0,n.jsx)(d,{}),(0,n.jsx)(t.a,{href:"/api/scalars/int",children:(0,n.jsx)(t.code,{children:"Int"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"conversion ratio limit to be advised"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/alert-type-configuration",children:(0,n.jsx)(t.code,{children:"AlertTypeConfiguration"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},44808:(e,t,r)=>{var n=r(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,a={},i=null,d=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:i,ref:d,props:a,_owner:l.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},17624:(e,t,r)=>{e.exports=r(44808)},4552:(e,t,r)=>{r.d(t,{I:()=>l,M:()=>o});var n=r(11504);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);