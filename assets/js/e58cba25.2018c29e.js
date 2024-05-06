/*! For license information please see e58cba25.2018c29e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35846],{90308:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>b,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var s=a(74848),o=a(28453),t=a(96540);const i={id:"organization-connection",title:"OrganizationConnection"},c=void 0,d={id:"types/objects/organization-connection",title:"OrganizationConnection",description:"No description",source:"@site/api/types/objects/organization-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/organization-connection",permalink:"/api/types/objects/organization-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"organization-connection",title:"OrganizationConnection"},sidebar:"schemaSidebar",previous:{title:"Operation",permalink:"/api/types/objects/operation"},next:{title:"OrganizationContact",permalink:"/api/types/objects/organization-contact"}},r={},l=()=>{const e={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,o.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const n={span:"span",...(0,o.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:a,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,o.R)()},[d,r]=(0,t.useState)(i);return(0,s.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>OrganizationConnection.<b>edges</b></code><Bullet></Bullet><code>[OrganizationEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationconnectionedgesorganizationedge--",level:4},{value:'<code>OrganizationConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationconnectionpageinfopageinfo--",level:4},{value:'<code>OrganizationConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationconnectionadvisemessageadvisemessage--",level:4},{value:'<code>OrganizationConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>OrganizationConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type OrganizationConnection {\n  edges: [OrganizationEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"organizationconnectionedgesorganizationedge--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationConnection.",(0,s.jsx)("b",{children:"edges"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/organization-edge",children:(0,s.jsx)(n.code,{children:"[OrganizationEdge]"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"organizationconnectionpageinfopageinfo--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationConnection.",(0,s.jsx)("b",{children:"pageInfo"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,s.jsx)(n.code,{children:"PageInfo!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(n.h4,{id:"organizationconnectionadvisemessageadvisemessage--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationConnection.",(0,s.jsx)("b",{children:"adviseMessage"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/advise-message",children:(0,s.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"List of advise messages."}),"\n",(0,s.jsxs)(n.h5,{id:"organizationconnectionadvisemessageleveladvisemessagelevel--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationConnection.adviseMessage.",(0,s.jsx)("b",{children:"level"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/enums/advise-message-level",children:(0,s.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"organizationconnectiontotalcountint--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationConnection.",(0,s.jsx)("b",{children:"totalCount"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(n.code,{children:"Int!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Identifies the total count of items in the connection."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/types/objects/admin-query",children:(0,s.jsx)(n.code,{children:"AdminQuery"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/types/objects/partner-data",children:(0,s.jsx)(n.code,{children:"PartnerData"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},21020:(e,n,a)=>{var s=a(96540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,a){var s,t={},r=null,l=null;for(s in void 0!==a&&(r=""+a),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:o,type:e,key:r,ref:l,props:t,_owner:c.current}}n.Fragment=t,n.jsx=r,n.jsxs=r},74848:(e,n,a)=>{e.exports=a(21020)},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var s=a(96540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);