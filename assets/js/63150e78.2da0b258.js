/*! For license information please see 63150e78.2da0b258.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40068],{49376:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var t=n(17624),a=n(4552),i=n(11504);const s={id:"provider-create-input",title:"ProviderCreateInput"},d=void 0,o={id:"inputs/provider-create-input",title:"ProviderCreateInput",description:"Create new Provider input",source:"@site/api/inputs/provider-create-input.mdx",sourceDirName:"inputs",slug:"/inputs/provider-create-input",permalink:"/api/inputs/provider-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"provider-create-input",title:"ProviderCreateInput"},sidebar:"schemaSidebar",previous:{title:"PromotionInput",permalink:"/api/inputs/promotion-input"},next:{title:"ProviderInput",permalink:"/api/inputs/provider-input"}},c={},l=()=>{const e={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,a.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ProviderCreateInput.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providercreateinputcodeid--",level:4},{value:'<code>ProviderCreateInput.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providercreateinputnamestring--",level:4},{value:'<code>ProviderCreateInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"providercreateinputisactiveboolean-",level:4},{value:'<code>ProviderCreateInput.<b>id</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"providercreateinputidid-",level:4}],x=({dataOpen:e,dataClose:r,children:n,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,a.M)()},[o,c]=(0,i.useState)(s);return(0,t.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:r}),o&&n]})};function v(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Create new Provider input"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"input ProviderCreateInput {\n  code: ID!\n  name: String!\n  isActive: Boolean\n  id: ID\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"providercreateinputcodeid--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderCreateInput.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/scalars/id",children:(0,t.jsx)(r.code,{children:"ID!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"No blank, no special characters"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"providercreateinputnamestring--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderCreateInput.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/scalars/string",children:(0,t.jsx)(r.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Provider name"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"providercreateinputisactiveboolean-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderCreateInput.",(0,t.jsx)("b",{children:"isActive"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/scalars/boolean",children:(0,t.jsx)(r.code,{children:"Boolean"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Indicates whether a Provider is active or inactive, true by default"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"providercreateinputidid-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderCreateInput.",(0,t.jsx)("b",{children:"id"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/scalars/id",children:(0,t.jsx)(r.code,{children:"ID"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Optional, use it only if a specific ID has to be specified"}),"\n"]})]})}function g(e={}){const{wrapper:r}={...(0,a.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},44808:(e,r,n)=>{var t=n(11504),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,i={},c=null,l=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,t)&&!o.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:a,type:e,key:c,ref:l,props:i,_owner:d.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},17624:(e,r,n)=>{e.exports=n(44808)},4552:(e,r,n)=>{n.d(r,{I:()=>d,M:()=>s});var t=n(11504);const a={},i=t.createContext(a);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);