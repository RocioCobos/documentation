/*! For license information please see 4d9c241a.af460206.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95199],{90880:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var o=r(74848),t=r(28453),a=r(96540);const i={id:"remove-member-from-organization-input",title:"RemoveMemberFromOrganizationInput",hide_table_of_contents:!1},s=void 0,d={id:"inputs/remove-member-from-organization-input",title:"RemoveMemberFromOrganizationInput",description:"No description",source:"@site/api/inputs/remove-member-from-organization-input.mdx",sourceDirName:"inputs",slug:"/inputs/remove-member-from-organization-input",permalink:"/api/inputs/remove-member-from-organization-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"remove-member-from-organization-input",title:"RemoveMemberFromOrganizationInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RelayInput",permalink:"/api/inputs/relay-input"},next:{title:"RoomInput",permalink:"/api/inputs/room-input"}},l={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,t.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:r,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,t.R)()},[d,l]=(0,a.useState)(i);return(0,o.jsxs)(s.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&r]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>RemoveMemberFromOrganizationInput.<b>member</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"removememberfromorganizationinputmemberid--",level:4},{value:'<code>RemoveMemberFromOrganizationInput.<b>orgCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"removememberfromorganizationinputorgcodeid--",level:4}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"input RemoveMemberFromOrganizationInput {\n  member: ID!\n  orgCode: ID!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"removememberfromorganizationinputmemberid--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RemoveMemberFromOrganizationInput.",(0,o.jsx)("b",{children:"member"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(n.a,{href:"/api/scalars/id",children:(0,o.jsx)(n.code,{children:"ID!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"removememberfromorganizationinputorgcodeid--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RemoveMemberFromOrganizationInput.",(0,o.jsx)("b",{children:"orgCode"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(n.a,{href:"/api/scalars/id",children:(0,o.jsx)(n.code,{children:"ID!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},21020:(e,n,r)=>{var o=r(96540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var o,a={},l=null,c=null;for(o in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,o)&&!d.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:t,type:e,key:l,ref:c,props:a,_owner:s.current}}n.Fragment=a,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var o=r(96540);const t={},a=o.createContext(t);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);