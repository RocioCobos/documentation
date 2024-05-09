/*! For license information please see b676c975.a47be37c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53756],{9930:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>p,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var t=r(74848),s=r(28453),a=r(96540);const o={id:"members-type",title:"MembersType",hide_table_of_contents:!1},l=void 0,i={id:"enums/members-type",title:"MembersType",description:"No description",source:"@site/api/enums/members-type.mdx",sourceDirName:"enums",slug:"/enums/members-type",permalink:"/api/enums/members-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"members-type",title:"MembersType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MembersRole",permalink:"/api/enums/members-role"},next:{title:"MetadataType",permalink:"/api/enums/metadata-type"}},c={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:r,startOpen:o=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[i,c]=(0,a.useState)(o);return(0,t.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&r]})},b=[{value:"Values",id:"values",level:3},{value:"<code>MembersType.<b>USER</b></code>",id:"memberstypeuser",level:4},{value:"<code>MembersType.<b>API_KEY</b></code>",id:"memberstypeapi_key",level:4},{value:"Member of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"enum MembersType {\n  USER\n  API_KEY\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(n.h4,{id:"memberstypeuser",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersType.",(0,t.jsx)("b",{children:"USER"})]})})}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h4,{id:"memberstypeapi_key",children:(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersType.",(0,t.jsx)("b",{children:"API_KEY"})]})})}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/objects/members-data",children:(0,t.jsx)(n.code,{children:"MembersData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(d,{}),(0,t.jsx)(n.a,{href:"/api/inputs/members-where-input",children:(0,t.jsx)(n.code,{children:"MembersWhereInput"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,a={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!i.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:l.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(96540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);