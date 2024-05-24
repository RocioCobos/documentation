/*! For license information please see 3b134b92.e2b7f17c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78147],{34967:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>x});var a=n(74848),s=n(28453),r=n(96540);const l={id:"alert-email-input",title:"AlertEmailInput"},i=void 0,d={id:"types/inputs/alert-email-input",title:"AlertEmailInput",description:"No description",source:"@site/api/types/inputs/alert-email-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/alert-email-input",permalink:"/api/types/inputs/alert-email-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-email-input",title:"AlertEmailInput"},sidebar:"schemaSidebar",previous:{title:"AlertCriteriaInput",permalink:"/api/types/inputs/alert-criteria-input"},next:{title:"AlertEmailsInput",permalink:"/api/types/inputs/alert-emails-input"}},o={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const i={details:"details",summary:"summary",...(0,s.R)()},[d,o]=(0,r.useState)(l);return(0,a.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertEmailInput.<b>address</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertemailinputaddressid--",level:4},{value:'<code>AlertEmailInput.<b>type</b></code><Bullet></Bullet><code>AlertEmailType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertemailinputtypealertemailtype--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AlertEmailInput {\n  address: ID!\n  type: AlertEmailType!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"alertemailinputaddressid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEmailInput.",(0,a.jsx)("b",{children:"address"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Email address"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertemailinputtypealertemailtype--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEmailInput.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/alert-email-type",children:(0,a.jsx)(t.code,{children:"AlertEmailType!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Destination email type"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-common-configuration-input",children:(0,a.jsx)(t.code,{children:"AlertCommonConfigurationInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-emails-input",children:(0,a.jsx)(t.code,{children:"AlertEmailsInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-update-common-configuration-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateCommonConfigurationInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/alert-update-emails-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateEmailsInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var a=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var a,r={},o=null,c=null;for(a in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,a)&&!d.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:s,type:e,key:o,ref:c,props:r,_owner:i.current}}t.Fragment=r,t.jsx=o,t.jsxs=o},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);