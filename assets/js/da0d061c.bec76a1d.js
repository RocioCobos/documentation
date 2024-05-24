/*! For license information please see da0d061c.bec76a1d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68592],{61511:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>x});var n=s(74848),a=s(28453),d=s(96540);const l={id:"update-system-input",title:"UpdateSystemInput",hide_table_of_contents:!1},r=void 0,i={id:"inputs/update-system-input",title:"UpdateSystemInput",description:"System input for UpdateSystem",source:"@site/api/inputs/update-system-input.mdx",sourceDirName:"inputs",slug:"/inputs/update-system-input",permalink:"/api/inputs/update-system-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"update-system-input",title:"UpdateSystemInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateOrganizationInput",permalink:"/api/inputs/update-organization-input"},next:{title:"UrlsInput",permalink:"/api/inputs/urls-input"}},c={},o=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:s,startOpen:l=!1})=>{const r={details:"details",summary:"summary",...(0,a.R)()},[i,c]=(0,d.useState)(l);return(0,n.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>UpdateSystemInput.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputcodeid--",level:4},{value:'<code>UpdateSystemInput.<b>name</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputnameid-",level:4},{value:'<code>UpdateSystemInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputisactiveboolean-",level:4},{value:'<code>UpdateSystemInput.<b>group</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputgroupid-",level:4},{value:'<code>UpdateSystemInput.<b>owner</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputownerid-",level:4},{value:'<code>UpdateSystemInput.<b>suppliers</b></code><Bullet></Bullet><code>[ID]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"updatesysteminputsuppliersid--",level:4}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"System input for UpdateSystem"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input UpdateSystemInput {\n  code: ID!\n  name: ID\n  isActive: Boolean\n  group: ID\n  owner: ID\n  suppliers: [ID]\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"updatesysteminputcodeid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatesysteminputnameid-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/scalars/id",children:(0,n.jsx)(t.code,{children:"ID"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatesysteminputisactiveboolean-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,n.jsx)("b",{children:"isActive"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatesysteminputgroupid-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,n.jsx)("b",{children:"group"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/scalars/id",children:(0,n.jsx)(t.code,{children:"ID"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatesysteminputownerid-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,n.jsx)("b",{children:"owner"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/scalars/id",children:(0,n.jsx)(t.code,{children:"ID"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"updatesysteminputsuppliersid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["UpdateSystemInput.",(0,n.jsx)("b",{children:"suppliers"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/scalars/id",children:(0,n.jsx)(t.code,{children:"[ID]"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"})]})}function y(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},21020:(e,t,s)=>{var n=s(96540),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,d={},c=null,o=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(d[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===d[n]&&(d[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:o,props:d,_owner:r.current}}t.Fragment=d,t.jsx=c,t.jsxs=c},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var n=s(96540);const a={},d=n.createContext(a);function l(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);