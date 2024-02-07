/*! For license information please see ffbfae04.c6dac86c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60836],{82572:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var s=n(17624),r=n(4552),a=n(11504);const l={id:"sql-status-type",title:"SqlStatusType"},o=void 0,i={id:"enums/sql-status-type",title:"SqlStatusType",description:"No description",source:"@site/api/enums/sql-status-type.mdx",sourceDirName:"enums",slug:"/enums/sql-status-type",permalink:"/api/enums/sql-status-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"sql-status-type",title:"SqlStatusType"},sidebar:"schemaSidebar",previous:{title:"SpeedRQMode",permalink:"/api/enums/speed-rqmode"},next:{title:"StatsDataGroupBy",permalink:"/api/enums/stats-data-group-by"}},c={},d=()=>{const e={span:"span",...(0,r.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>SqlStatusType.<b>PENDING</b></code>",id:"sqlstatustypepending",level:4},{value:"<code>SqlStatusType.<b>OK</b></code>",id:"sqlstatustypeok",level:4},{value:"<code>SqlStatusType.<b>NOK</b></code>",id:"sqlstatustypenok",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,r.M)()},[i,c]=(0,a.useState)(l);return(0,s.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"enum SqlStatusType {\n  PENDING\n  OK\n  NOK\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(t.h4,{id:"sqlstatustypepending",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SqlStatusType.",(0,s.jsx)("b",{children:"PENDING"})]})})}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h4,{id:"sqlstatustypeok",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SqlStatusType.",(0,s.jsx)("b",{children:"OK"})]})})}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h4,{id:"sqlstatustypenok",children:(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SqlStatusType.",(0,s.jsx)("b",{children:"NOK"})]})})}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/objects/user-onboarding-data",children:(0,s.jsx)(t.code,{children:"UserOnboardingData"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/inputs/user-onboarding-update-input",children:(0,s.jsx)(t.code,{children:"UserOnboardingUpdateInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function y(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},44808:(e,t,n)=>{var s=n(11504),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,a={},c=null,d=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,s)&&!i.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>l});var s=n(11504);const r={},a=s.createContext(r);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);