/*! For license information please see 4d9c241a.d0aa5ca5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66620],{37244:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var t=r(17624),o=r(4552),a=r(11504);const i={id:"remove-member-from-organization-input",title:"RemoveMemberFromOrganizationInput"},s=void 0,d={id:"inputs/remove-member-from-organization-input",title:"RemoveMemberFromOrganizationInput",description:"No description",source:"@site/api/inputs/remove-member-from-organization-input.mdx",sourceDirName:"inputs",slug:"/inputs/remove-member-from-organization-input",permalink:"/api/inputs/remove-member-from-organization-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"remove-member-from-organization-input",title:"RemoveMemberFromOrganizationInput"},sidebar:"schemaSidebar",previous:{title:"RelayInput",permalink:"/api/inputs/relay-input"},next:{title:"ResortInput",permalink:"/api/inputs/resort-input"}},l={},c=()=>{const e={span:"span",...(0,o.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,o.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,o.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>RemoveMemberFromOrganizationInput.<b>member</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"removememberfromorganizationinputmemberid--",level:4},{value:'<code>RemoveMemberFromOrganizationInput.<b>orgCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"removememberfromorganizationinputorgcodeid--",level:4}],g=({dataOpen:e,dataClose:n,children:r,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,o.M)()},[d,l]=(0,a.useState)(i);return(0,t.jsxs)(s.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&r]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input RemoveMemberFromOrganizationInput {\n  member: ID!\n  orgCode: ID!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"removememberfromorganizationinputmemberid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RemoveMemberFromOrganizationInput.",(0,t.jsx)("b",{children:"member"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"removememberfromorganizationinputorgcodeid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["RemoveMemberFromOrganizationInput.",(0,t.jsx)("b",{children:"orgCode"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},44808:(e,n,r)=>{var t=r(11504),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,a={},l=null,c=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:s.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},17624:(e,n,r)=>{e.exports=r(44808)},4552:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>i});var t=r(11504);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);