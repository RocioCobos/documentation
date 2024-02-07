/*! For license information please see b9568bef.2c474e4e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28168],{36284:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var n=a(17624),s=a(4552),r=a(11504);const c={id:"package-status",title:"PackageStatus"},l=void 0,o={id:"enums/package-status",title:"PackageStatus",description:"No description",source:"@site/api/enums/package-status.mdx",sourceDirName:"enums",slug:"/enums/package-status",permalink:"/api/enums/package-status",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"package-status",title:"PackageStatus"},sidebar:"schemaSidebar",previous:{title:"PackagePersonalTitleType",permalink:"/api/enums/package-personal-title-type"},next:{title:"PartnerImportanceType",permalink:"/api/enums/partner-importance-type"}},i={},d=()=>{const e={span:"span",...(0,s.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>PackageStatus.<b>AVAILABLE</b></code>",id:"packagestatusavailable",level:4},{value:"<code>PackageStatus.<b>ON_REQUEST</b></code>",id:"packagestatuson_request",level:4},{value:"<code>PackageStatus.<b>UNAVAILABLE</b></code>",id:"packagestatusunavailable",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:t,children:a,startOpen:c=!1})=>{const l={details:"details",summary:"summary",...(0,s.M)()},[o,i]=(0,r.useState)(c);return(0,n.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&a]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"enum PackageStatus {\n  AVAILABLE\n  ON_REQUEST\n  UNAVAILABLE\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,n.jsx)(t.h4,{id:"packagestatusavailable",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageStatus.",(0,n.jsx)("b",{children:"AVAILABLE"})]})})}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h4,{id:"packagestatuson_request",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageStatus.",(0,n.jsx)("b",{children:"ON_REQUEST"})]})})}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h4,{id:"packagestatusunavailable",children:(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageStatus.",(0,n.jsx)("b",{children:"UNAVAILABLE"})]})})}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/quote-payload",children:(0,n.jsx)(t.code,{children:"QuotePayload"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},44808:(e,t,a)=>{var n=a(11504),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,a){var n,r={},i=null,d=null;for(n in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!o.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:i,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=i,t.jsxs=i},17624:(e,t,a)=>{e.exports=a(44808)},4552:(e,t,a)=>{a.d(t,{I:()=>l,M:()=>c});var n=a(11504);const s={},r=n.createContext(s);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);