/*! For license information please see 9421b116.eb798c16.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56761],{46631:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=t(74848),a=t(28453),s=t(96540);const o={id:"social",title:"social",hide_table_of_contents:!1},i=void 0,c={id:"queries/social",title:"social",description:"The Social query root for implementing GraphQL query.",source:"@site/api/queries/social.mdx",sourceDirName:"queries",slug:"/queries/social",permalink:"/api/queries/social",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"social",title:"social",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"searchCriteria",permalink:"/api/queries/search-criteria"},next:{title:"speed",permalink:"/api/queries/speed"}},l={},d=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:r,children:t,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[c,l]=(0,s.useState)(o);return(0,n.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&t]})},h=[{value:"Type",id:"type",level:3},{value:'<code>SocialQuery</code> <Badge class="badge badge--secondary"></Badge>',id:"socialquery-",level:4}];function m(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The Social query root for implementing GraphQL query."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"social: SocialQuery\n"})}),"\n",(0,n.jsx)(r.h3,{id:"type",children:"Type"}),"\n",(0,n.jsxs)(r.h4,{id:"socialquery-",children:[(0,n.jsx)(r.a,{href:"/api/objects/social-query",children:(0,n.jsx)(r.code,{children:"SocialQuery"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"})]})}function y(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},21020:(e,r,t)=>{var n=t(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,s={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,n)&&!c.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:i.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(96540);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);