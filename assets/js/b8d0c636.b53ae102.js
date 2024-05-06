/*! For license information please see b8d0c636.b53ae102.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60101],{22022:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>x,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>j});var n=s(74848),t=s(28453),d=s(96540);const i={id:"organizations",title:"Organizations"},o=void 0,r={id:"types/objects/organizations",title:"Organizations",description:"No description",source:"@site/api/types/objects/organizations.mdx",sourceDirName:"types/objects",slug:"/types/objects/organizations",permalink:"/api/types/objects/organizations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"organizations",title:"Organizations"},sidebar:"schemaSidebar",previous:{title:"OrganizationsEdge",permalink:"/api/types/objects/organizations-edge"},next:{title:"PackageCancelPenalty",permalink:"/api/types/objects/package-cancel-penalty"}},c={},l=()=>{const e={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,t.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const a={span:"span",...(0,t.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:s,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,t.R)()},[r,c]=(0,d.useState)(i);return(0,n.jsxs)(o.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&s]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Organizations.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationscodeid--",level:4},{value:'<code>Organizations.<b>organizationsData</b></code><Bullet></Bullet><code>OrganizationsData</code> <Badge class="badge badge--secondary"></Badge>',id:"organizationsorganizationsdataorganizationsdata-",level:4},{value:'<code>Organizations.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationsadvisemessageadvisemessage--",level:4},{value:'<code>Organizations.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationsadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Organizations.<b>createdAt</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationscreatedattime--",level:4},{value:'<code>Organizations.<b>updatedAt</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationsupdatedattime--",level:4},{value:'<code>Organizations.<b>deletedAt</b></code><Bullet></Bullet><code>Time</code> <Badge class="badge badge--secondary"></Badge>',id:"organizationsdeletedattime-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type Organizations {\n  code: ID!\n  organizationsData: OrganizationsData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: Time!\n  updatedAt: Time!\n  deletedAt: Time\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"organizationscodeid--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Organizations.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(a.code,{children:"ID!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Organization unique code"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"organizationsorganizationsdataorganizationsdata-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Organizations.",(0,n.jsx)("b",{children:"organizationsData"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/organizations-data",children:(0,n.jsx)(a.code,{children:"OrganizationsData"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Extended Organization information"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"organizationsadvisemessageadvisemessage--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Organizations.",(0,n.jsx)("b",{children:"adviseMessage"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/advise-message",children:(0,n.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"List of advise messages."}),"\n",(0,n.jsxs)(a.h5,{id:"organizationsadvisemessageleveladvisemessagelevel--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Organizations.adviseMessage.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/enums/advise-message-level",children:(0,n.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"organizationscreatedattime--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Organizations.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/scalars/time",children:(0,n.jsx)(a.code,{children:"Time!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Organization creation date"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"organizationsupdatedattime--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Organizations.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/scalars/time",children:(0,n.jsx)(a.code,{children:"Time!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Organization last update date"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"organizationsdeletedattime-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Organizations.",(0,n.jsx)("b",{children:"deletedAt"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/scalars/time",children:(0,n.jsx)(a.code,{children:"Time"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Organization removal date"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/types/objects/admin-mutation",children:(0,n.jsx)(a.code,{children:"AdminMutation"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/admin-query",children:(0,n.jsx)(a.code,{children:"AdminQuery"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/connection-data",children:(0,n.jsx)(a.code,{children:"ConnectionData"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/organizations-data",children:(0,n.jsx)(a.code,{children:"OrganizationsData"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/organizations-edge",children:(0,n.jsx)(a.code,{children:"OrganizationsEdge"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},21020:(e,a,s)=>{var n=s(96540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,s){var n,d={},c=null,l=null;for(n in void 0!==s&&(c=""+s),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(l=a.ref),a)i.call(a,n)&&!r.hasOwnProperty(n)&&(d[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===d[n]&&(d[n]=a[n]);return{$$typeof:t,type:e,key:c,ref:l,props:d,_owner:o.current}}a.Fragment=d,a.jsx=c,a.jsxs=c},74848:(e,a,s)=>{e.exports=s(21020)},28453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>o});var n=s(96540);const t={},d=n.createContext(t);function i(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);