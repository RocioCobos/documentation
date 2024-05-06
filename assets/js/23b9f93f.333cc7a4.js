/*! For license information please see 23b9f93f.333cc7a4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65141],{55889:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>b});var a=n(74848),o=n(28453),l=n(96540);const t={id:"all-groups-connection",title:"AllGroupsConnection"},d=void 0,c={id:"types/objects/all-groups-connection",title:"AllGroupsConnection",description:"No description",source:"@site/api/types/objects/all-groups-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/all-groups-connection",permalink:"/api/types/objects/all-groups-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"all-groups-connection",title:"AllGroupsConnection"},sidebar:"schemaSidebar",previous:{title:"AllGroup",permalink:"/api/types/objects/all-group"},next:{title:"AllGroupsEdge",permalink:"/api/types/objects/all-groups-edge"}},r={},i=()=>{const e={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,o.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:s,children:n,startOpen:t=!1})=>{const d={details:"details",summary:"summary",...(0,o.R)()},[c,r]=(0,l.useState)(t);return(0,a.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&n]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AllGroupsConnection.<b>edges</b></code><Bullet></Bullet><code>[AllGroupsEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectionedgesallgroupsedge--",level:4},{value:'<code>AllGroupsConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectionpageinfopageinfo--",level:4},{value:'<code>AllGroupsConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectionadvisemessageadvisemessage--",level:4},{value:'<code>AllGroupsConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>AllGroupsConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type AllGroupsConnection {\n  edges: [AllGroupsEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"allgroupsconnectionedgesallgroupsedge--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/all-groups-edge",children:(0,a.jsx)(s.code,{children:"[AllGroupsEdge]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"allgroupsconnectionpageinfopageinfo--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/page-info",children:(0,a.jsx)(s.code,{children:"PageInfo!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"allgroupsconnectionadvisemessageadvisemessage--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,a.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.h5,{id:"allgroupsconnectionadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,a.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"allgroupsconnectiontotalcountint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/types/objects/admin-query",children:(0,a.jsx)(s.code,{children:"AdminQuery"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/all-group-data",children:(0,a.jsx)(s.code,{children:"AllGroupData"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/types/objects/organizations-data",children:(0,a.jsx)(s.code,{children:"OrganizationsData"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,s,n)=>{var a=n(96540),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function r(e,s,n){var a,l={},r=null,i=null;for(a in void 0!==n&&(r=""+n),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(i=s.ref),s)t.call(s,a)&&!c.hasOwnProperty(a)&&(l[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===l[a]&&(l[a]=s[a]);return{$$typeof:o,type:e,key:r,ref:i,props:l,_owner:d.current}}s.Fragment=l,s.jsx=r,s.jsxs=r},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>d});var a=n(96540);const o={},l=a.createContext(o);function t(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);