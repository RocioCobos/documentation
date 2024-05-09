/*! For license information please see 42a2ec7e.29d0ace1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60632],{13407:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>b});var s=r(74848),t=r(28453),a=r(96540);const i={id:"members-apikey-where-input",title:"MembersAPIKeyWhereInput"},l=void 0,d={id:"types/inputs/members-apikey-where-input",title:"MembersAPIKeyWhereInput",description:"No description",source:"@site/api/types/inputs/members-apikey-where-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/members-apikey-where-input",permalink:"/api/types/inputs/members-apikey-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"members-apikey-where-input",title:"MembersAPIKeyWhereInput"},sidebar:"schemaSidebar",previous:{title:"MemberWhereUniqueInput",permalink:"/api/types/inputs/member-where-unique-input"},next:{title:"MembersWhereInput",permalink:"/api/types/inputs/members-where-input"}},c={},o=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:r,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,t.R)()},[d,c]=(0,a.useState)(i);return(0,s.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&r]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>MembersAPIKeyWhereInput.<b>code_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersapikeywhereinputcode_inid--",level:4},{value:'<code>MembersAPIKeyWhereInput.<b>label</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"membersapikeywhereinputlabelstring-",level:4},{value:'<code>MembersAPIKeyWhereInput.<b>organization</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"membersapikeywhereinputorganizationid-",level:4},{value:'<code>MembersAPIKeyWhereInput.<b>includeArchived</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"membersapikeywhereinputincludearchivedboolean-",level:4}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input MembersAPIKeyWhereInput {\n  code_in: [ID!]\n  label: String\n  organization: ID\n  includeArchived: Boolean\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"membersapikeywhereinputcode_inid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersAPIKeyWhereInput.",(0,s.jsx)("b",{children:"code_in"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"[ID!]"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Filter by Members Code"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"membersapikeywhereinputlabelstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersAPIKeyWhereInput.",(0,s.jsx)("b",{children:"label"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Filter by Members Name"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"membersapikeywhereinputorganizationid-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersAPIKeyWhereInput.",(0,s.jsx)("b",{children:"organization"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/id",children:(0,s.jsx)(n.code,{children:"ID"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Filter by organization"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"membersapikeywhereinputincludearchivedboolean-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersAPIKeyWhereInput.",(0,s.jsx)("b",{children:"includeArchived"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,s.jsx)(n.code,{children:"Boolean"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Includes archived apikeys"}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},21020:(e,n,r)=>{var s=r(96540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var s,a={},c=null,o=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(a[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===a[s]&&(a[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:o,props:a,_owner:l.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(96540);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);