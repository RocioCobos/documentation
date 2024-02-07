/*! For license information please see e4b6ded2.2f1b9724.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55976],{1336:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>r,toc:()=>j});var a=n(17624),o=n(4552),t=n(11504);const c={id:"group-connection",title:"GroupConnection"},d=void 0,r={id:"objects/group-connection",title:"GroupConnection",description:"No description",source:"@site/api/objects/group-connection.mdx",sourceDirName:"objects",slug:"/objects/group-connection",permalink:"/api/objects/group-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"group-connection",title:"GroupConnection"},sidebar:"schemaSidebar",previous:{title:"GiataData",permalink:"/api/objects/giata-data"},next:{title:"GroupContentData",permalink:"/api/objects/group-content-data"}},i={},l=()=>{const e={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,o.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>GroupConnection.<b>edges</b></code><Bullet></Bullet><code>[GroupEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupconnectionedgesgroupedge--",level:4},{value:'<code>GroupConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupconnectionpageinfopageinfo--",level:4},{value:'<code>GroupConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupconnectionadvisemessageadvisemessage--",level:4},{value:'<code>GroupConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>GroupConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:s,children:n,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,o.M)()},[r,i]=(0,t.useState)(c);return(0,a.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&n]})};function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type GroupConnection {\n  edges: [GroupEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"groupconnectionedgesgroupedge--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/objects/group-edge",children:(0,a.jsx)(s.code,{children:"[GroupEdge]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"groupconnectionpageinfopageinfo--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/objects/page-info",children:(0,a.jsx)(s.code,{children:"PageInfo!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"groupconnectionadvisemessageadvisemessage--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupConnection.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,a.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"List of advise messages."}),"\n",(0,a.jsxs)(s.h5,{id:"groupconnectionadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupConnection.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,a.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"groupconnectiontotalcountint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["GroupConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Identifies the total count of items in the connection."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/objects/access-data",children:(0,a.jsx)(s.code,{children:"AccessData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/objects/admin-query",children:(0,a.jsx)(s.code,{children:"AdminQuery"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/objects/apidata",children:(0,a.jsx)(s.code,{children:"APIData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/interfaces/group-common-data",children:(0,a.jsx)(s.code,{children:"GroupCommonData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"interface"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/objects/group-data",children:(0,a.jsx)(s.code,{children:"GroupData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/objects/member-data",children:(0,a.jsx)(s.code,{children:"MemberData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/objects/organization-data",children:(0,a.jsx)(s.code,{children:"OrganizationData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(s.a,{href:"/api/objects/supplier-data",children:(0,a.jsx)(s.code,{children:"SupplierData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},44808:(e,s,n)=>{var a=n(11504),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,n){var a,t={},i=null,l=null;for(a in void 0!==n&&(i=""+n),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(l=s.ref),s)c.call(s,a)&&!r.hasOwnProperty(a)&&(t[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===t[a]&&(t[a]=s[a]);return{$$typeof:o,type:e,key:i,ref:l,props:t,_owner:d.current}}s.Fragment=t,s.jsx=i,s.jsxs=i},17624:(e,s,n)=>{e.exports=n(44808)},4552:(e,s,n)=>{n.d(s,{I:()=>d,M:()=>c});var a=n(11504);const o={},t=a.createContext(o);function c(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);