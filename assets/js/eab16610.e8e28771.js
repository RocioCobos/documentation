/*! For license information please see eab16610.e8e28771.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87857],{71865:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=n(74848),s=n(28453),a=n(96540);const r={id:"alert-notifications-input",title:"AlertNotificationsInput",hide_table_of_contents:!1},l=void 0,o={id:"inputs/alert-notifications-input",title:"AlertNotificationsInput",description:"No description",source:"@site/api/inputs/alert-notifications-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-notifications-input",permalink:"/api/inputs/alert-notifications-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-notifications-input",title:"AlertNotificationsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertHubStatusInput",permalink:"/api/inputs/alert-hub-status-input"},next:{title:"AlertObjectInput",permalink:"/api/inputs/alert-object-input"}},c={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[o,c]=(0,a.useState)(r);return(0,i.jsxs)(l.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertNotificationsInput.<b>emails</b></code><Bullet></Bullet><code>AlertEmailsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertnotificationsinputemailsalertemailsinput-",level:4},{value:'<code>AlertNotificationsInput.<b>slack</b></code><Bullet></Bullet><code>AlertSlackInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertnotificationsinputslackalertslackinput-",level:4},{value:"Member of",id:"member-of",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input AlertNotificationsInput {\n  emails: AlertEmailsInput\n  slack: AlertSlackInput\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"alertnotificationsinputemailsalertemailsinput-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertNotificationsInput.",(0,i.jsx)("b",{children:"emails"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-emails-input",children:(0,i.jsx)(t.code,{children:"AlertEmailsInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Emails to send notifications"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"alertnotificationsinputslackalertslackinput-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertNotificationsInput.",(0,i.jsx)("b",{children:"slack"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-slack-input",children:(0,i.jsx)(t.code,{children:"AlertSlackInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Slack to send notificarions"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/inputs/alert-common-configuration-input",children:(0,i.jsx)(t.code,{children:"AlertCommonConfigurationInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},21020:(e,t,n)=>{var i=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,a={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!o.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);