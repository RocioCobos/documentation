/*! For license information please see 19e0801e.55ef2b40.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57756],{5725:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>y});var a=t(74848),i=t(28453),r=t(96540);const s={id:"apikey-organization-input",title:"ApikeyOrganizationInput"},o=void 0,l={id:"types/inputs/apikey-organization-input",title:"ApikeyOrganizationInput",description:"No description",source:"@site/api/types/inputs/apikey-organization-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/apikey-organization-input",permalink:"/api/types/inputs/apikey-organization-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"apikey-organization-input",title:"ApikeyOrganizationInput"},sidebar:"schemaSidebar",previous:{title:"APIKeyCreateInput",permalink:"/api/types/inputs/apikey-create-input"},next:{title:"ApikeyServiceRole",permalink:"/api/types/inputs/apikey-service-role"}},c={},d=()=>{const e={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,i.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,i.R)()},[l,c]=(0,r.useState)(s);return(0,a.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>ApikeyOrganizationInput.<b>organization</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeyorganizationinputorganizationid--",level:4},{value:'<code>ApikeyOrganizationInput.<b>apikey</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apikeyorganizationinputapikeystring--",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input ApikeyOrganizationInput {\n  organization: ID!\n  apikey: String!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"apikeyorganizationinputorganizationid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeyOrganizationInput.",(0,a.jsx)("b",{children:"organization"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Organization where apikey belongs to"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"apikeyorganizationinputapikeystring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ApikeyOrganizationInput.",(0,a.jsx)("b",{children:"apikey"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Apikey's sufix"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var a=t(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,r={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,a)&&!l.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===r[a]&&(r[a]=n[a]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:o.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);