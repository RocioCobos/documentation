/*! For license information please see 5b4288fb.e769443f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11388],{32288:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var a=t(74848),s=t(28453),i=t(96540);const r={id:"client-create-input",title:"ClientCreateInput"},l=void 0,c={id:"types/inputs/client-create-input",title:"ClientCreateInput",description:"Create new client input",source:"@site/api/types/inputs/client-create-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/client-create-input",permalink:"/api/types/inputs/client-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"client-create-input",title:"ClientCreateInput"},sidebar:"schemaSidebar",previous:{title:"CertificationInput",permalink:"/api/types/inputs/certification-input"},next:{title:"ClientFilter",permalink:"/api/types/inputs/client-filter"}},d={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[c,d]=(0,i.useState)(r);return(0,a.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ClientCreateInput.<b>name</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientcreateinputnameid--",level:4},{value:'<code>ClientCreateInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"clientcreateinputisactiveboolean-",level:4},{value:'<code>ClientCreateInput.<b>group</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientcreateinputgroupid--",level:4},{value:'<code>ClientCreateInput.<b>id</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"clientcreateinputidid-",level:4}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Create new client input"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input ClientCreateInput {\n  name: ID!\n  isActive: Boolean\n  group: ID!\n  id: ID\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"clientcreateinputnameid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientCreateInput.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:'No blank, no special characters (except "_" and "-"). The name will be lowercase'}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"clientcreateinputisactiveboolean-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientCreateInput.",(0,a.jsx)("b",{children:"isActive"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Indicates whether a Client is active or inactive"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"clientcreateinputgroupid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientCreateInput.",(0,a.jsx)("b",{children:"group"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"IAM Group code. The group must exist."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"clientcreateinputidid-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientCreateInput.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(n.code,{children:"ID"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Optional, use it only if ID has to be specified"}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},21020:(e,n,t)=>{var a=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var a,i={},d=null,o=null;for(a in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(o=n.ref),n)r.call(n,a)&&!c.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:s,type:e,key:d,ref:o,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(96540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);