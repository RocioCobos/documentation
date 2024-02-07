/*! For license information please see 7dd30892.78e73f90.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98472],{97312:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=n(17624),s=n(4552),i=n(11504);const r={id:"validation-status-type",title:"ValidationStatusType"},o=void 0,l={id:"enums/validation-status-type",title:"ValidationStatusType",description:"No description",source:"@site/api/enums/validation-status-type.mdx",sourceDirName:"enums",slug:"/enums/validation-status-type",permalink:"/api/enums/validation-status-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"validation-status-type",title:"ValidationStatusType"},sidebar:"schemaSidebar",previous:{title:"UnitTimeType",permalink:"/api/enums/unit-time-type"},next:{title:"Schema Documentation",permalink:"/api/"}},d={},c=()=>{const e={span:"span",...(0,s.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>ValidationStatusType.<b>PENDING</b></code>",id:"validationstatustypepending",level:4},{value:"<code>ValidationStatusType.<b>OK</b></code>",id:"validationstatustypeok",level:4},{value:"<code>ValidationStatusType.<b>ERROR</b></code>",id:"validationstatustypeerror",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,s.M)()},[l,d]=(0,i.useState)(r);return(0,a.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"enum ValidationStatusType {\n  PENDING\n  OK\n  ERROR\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(t.h4,{id:"validationstatustypepending",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ValidationStatusType.",(0,a.jsx)("b",{children:"PENDING"})]})})}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h4,{id:"validationstatustypeok",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ValidationStatusType.",(0,a.jsx)("b",{children:"OK"})]})})}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h4,{id:"validationstatustypeerror",children:(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ValidationStatusType.",(0,a.jsx)("b",{children:"ERROR"})]})})}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/objects/validation",children:(0,a.jsx)(t.code,{children:"Validation"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},44808:(e,t,n)=>{var a=n(11504),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,i={},d=null,c=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:o.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>r});var a=n(11504);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);