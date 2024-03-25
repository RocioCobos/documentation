/*! For license information please see e230f1ec.57fec2df.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29804],{43140:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>o,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>g});var a=n(17624),r=n(4552),s=n(11504);const d={id:"data-range-input",title:"DataRangeInput"},i=void 0,l={id:"inputs/data-range-input",title:"DataRangeInput",description:"No description",source:"@site/api/inputs/data-range-input.mdx",sourceDirName:"inputs",slug:"/inputs/data-range-input",permalink:"/api/inputs/data-range-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"data-range-input",title:"DataRangeInput"},sidebar:"schemaSidebar",previous:{title:"CrmDataInput",permalink:"/api/inputs/crm-data-input"},next:{title:"DateRangeProductInput",permalink:"/api/inputs/date-range-product-input"}},c={},o=()=>{const e={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>DataRangeInput.<b>start_date</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"datarangeinputstart_datetime--",level:4},{value:'<code>DataRangeInput.<b>end_date</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"datarangeinputend_datetime--",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:t,children:n,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,r.M)()},[l,c]=(0,s.useState)(d);return(0,a.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input DataRangeInput {\n  start_date: Time!\n  end_date: Time!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"datarangeinputstart_datetime--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["DataRangeInput.",(0,a.jsx)("b",{children:"start_date"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/scalars/time",children:(0,a.jsx)(t.code,{children:"Time!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"From 00:00:00"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"datarangeinputend_datetime--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["DataRangeInput.",(0,a.jsx)("b",{children:"end_date"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/scalars/time",children:(0,a.jsx)(t.code,{children:"Time!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To 23:59:59"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/inputs/entity-audit-where-input",children:(0,a.jsx)(t.code,{children:"EntityAuditWhereInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},44808:(e,t,n)=>{var a=n(11504),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,s={},c=null,o=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)d.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:o,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>d});var a=n(11504);const r={},s=a.createContext(r);function d(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);