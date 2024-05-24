/*! For license information please see 4491d839.e6f8d8dc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5129],{48199:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>f});var o=t(74848),i=t(28453),s=t(96540);const a={id:"contact-info-input",title:"ContactInfoInput"},r=void 0,c={id:"types/inputs/contact-info-input",title:"ContactInfoInput",description:"No description",source:"@site/api/types/inputs/contact-info-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/contact-info-input",permalink:"/api/types/inputs/contact-info-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"contact-info-input",title:"ContactInfoInput"},sidebar:"schemaSidebar",previous:{title:"ConnectionWhereInput",permalink:"/api/types/inputs/connection-where-input"},next:{title:"ContentWhereInput",permalink:"/api/types/inputs/content-where-input"}},l={},d=()=>{const e={span:"span",...(0,i.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,i.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const r={details:"details",summary:"summary",...(0,i.R)()},[c,l]=(0,s.useState)(a);return(0,o.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>ContactInfoInput.<b>email</b></code><Bullet></Bullet><code>Email</code> <Badge class="badge badge--secondary"></Badge>',id:"contactinfoinputemailemail-",level:4},{value:'<code>ContactInfoInput.<b>phone</b></code><Bullet></Bullet><code>PhoneInput</code> <Badge class="badge badge--secondary"></Badge>',id:"contactinfoinputphonephoneinput-",level:4},{value:"Member Of",id:"member-of",level:3}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"input ContactInfoInput {\n  email: Email\n  phone: PhoneInput\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"contactinfoinputemailemail-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ContactInfoInput.",(0,o.jsx)("b",{children:"email"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/email",children:(0,o.jsx)(n.code,{children:"Email"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Email contact"}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"contactinfoinputphonephoneinput-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ContactInfoInput.",(0,o.jsx)("b",{children:"phone"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/api/types/inputs/phone-input",children:(0,o.jsx)(n.code,{children:"PhoneInput"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Phone contact"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/inputs/holder-input",children:(0,o.jsx)(n.code,{children:"HolderInput"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},21020:(e,n,t)=>{var o=t(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,s={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,o)&&!c.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:r.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);