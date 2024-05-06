/*! For license information please see 14812f43.bd7678cc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10722],{79311:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(74848),i=n(28453),r=n(96540);const s={id:"alert-average-time-relative-configuration-by-requests-input",title:"AlertAverageTimeRelativeConfigurationByRequestsInput",hide_table_of_contents:!1},o=void 0,l={id:"inputs/alert-average-time-relative-configuration-by-requests-input",title:"AlertAverageTimeRelativeConfigurationByRequestsInput",description:"No description",source:"@site/api/inputs/alert-average-time-relative-configuration-by-requests-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-average-time-relative-configuration-by-requests-input",permalink:"/api/inputs/alert-average-time-relative-configuration-by-requests-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-average-time-relative-configuration-by-requests-input",title:"AlertAverageTimeRelativeConfigurationByRequestsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertAverageTimeRelativeByTimeInput",permalink:"/api/inputs/alert-average-time-relative-by-time-input"},next:{title:"AlertAverageTimeRelativeConfigurationByTimeInput",permalink:"/api/inputs/alert-average-time-relative-configuration-by-time-input"}},c={},d=()=>{const e={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,i.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,i.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,i.R)()},[l,c]=(0,r.useState)(s);return(0,a.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertAverageTimeRelativeConfigurationByRequestsInput.<b>maxTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbyrequestsinputmaxtimeint-",level:4},{value:'<code>AlertAverageTimeRelativeConfigurationByRequestsInput.<b>maxAverageTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbyrequestsinputmaxaveragetimeint-",level:4},{value:'<code>AlertAverageTimeRelativeConfigurationByRequestsInput.<b>windowing</b></code><Bullet></Bullet><code>AlertCommonByRequestsInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbyrequestsinputwindowingalertcommonbyrequestsinput--",level:4},{value:'<code>AlertAverageTimeRelativeConfigurationByRequestsInput.<b>common</b></code><Bullet></Bullet><code>AlertCommonConfigurationInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbyrequestsinputcommonalertcommonconfigurationinput--",level:4},{value:'<code>AlertAverageTimeRelativeConfigurationByRequestsInput.<b>relative</b></code><Bullet></Bullet><code>AlertCommonRelativeInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertaveragetimerelativeconfigurationbyrequestsinputrelativealertcommonrelativeinput--",level:4},{value:"Member of",id:"member-of",level:3}];function v(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AlertAverageTimeRelativeConfigurationByRequestsInput {\n  maxTime: Int\n  maxAverageTime: Int\n  windowing: AlertCommonByRequestsInput!\n  common: AlertCommonConfigurationInput!\n  relative: AlertCommonRelativeInput!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbyrequestsinputmaxtimeint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByRequestsInput.",(0,a.jsx)("b",{children:"maxTime"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Time not allowed in miliseconds"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbyrequestsinputmaxaveragetimeint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByRequestsInput.",(0,a.jsx)("b",{children:"maxAverageTime"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Average time not allowed in miliseconds"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbyrequestsinputwindowingalertcommonbyrequestsinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByRequestsInput.",(0,a.jsx)("b",{children:"windowing"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-common-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertCommonByRequestsInput!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Common configuration for requests window type"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbyrequestsinputcommonalertcommonconfigurationinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByRequestsInput.",(0,a.jsx)("b",{children:"common"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-common-configuration-input",children:(0,a.jsx)(t.code,{children:"AlertCommonConfigurationInput!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Common configuration alert"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertaveragetimerelativeconfigurationbyrequestsinputrelativealertcommonrelativeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertAverageTimeRelativeConfigurationByRequestsInput.",(0,a.jsx)("b",{children:"relative"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-common-relative-input",children:(0,a.jsx)(t.code,{children:"AlertCommonRelativeInput!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Common configuration of relative mode type"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/inputs/alert-average-time-relative-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertAverageTimeRelativeByRequestsInput"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},21020:(e,t,n)=>{var a=n(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,r={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,a)&&!l.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);