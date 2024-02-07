/*! For license information please see 5ef21ae2.1fada638.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97560],{4052:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(17624),r=n(4552),i=n(11504);const o={id:"admin",title:"admin"},s=void 0,c={id:"mutations/admin",title:"admin",description:"No description",source:"@site/api/mutations/admin.mdx",sourceDirName:"mutations",slug:"/mutations/admin",permalink:"/api/mutations/admin",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"admin",title:"admin"},sidebar:"schemaSidebar",previous:{title:"activation",permalink:"/api/mutations/activation"},next:{title:"alertsX",permalink:"/api/mutations/alerts-x"}},d={},l=()=>{const e={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},p=[{value:"Type",id:"type",level:3},{value:'<code>AdminMutation</code> <Badge class="badge badge--secondary"></Badge>',id:"adminmutation-",level:4}],f=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const s={details:"details",summary:"summary",...(0,r.M)()},[c,d]=(0,i.useState)(o);return(0,a.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"admin: AdminMutation\n"})}),"\n",(0,a.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,a.jsxs)(t.h4,{id:"adminmutation-",children:[(0,a.jsx)(t.a,{href:"/api/objects/admin-mutation",children:(0,a.jsx)(t.code,{children:"AdminMutation"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The admin query root of TravelgateX s for implementing GraphQL mutations."}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},44808:(e,t,n)=>{var a=n(11504),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,i={},d=null,l=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,a)&&!c.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:d,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>o});var a=n(11504);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);