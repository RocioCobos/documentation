/*! For license information please see 78a31376.694847b3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14760],{64648:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>p});var a=n(17624),o=n(4552),l=n(11504);const d={id:"all-groups-connection",title:"AllGroupsConnection"},c=void 0,t={id:"objects/all-groups-connection",title:"AllGroupsConnection",description:"No description",source:"@site/api/objects/all-groups-connection.mdx",sourceDirName:"objects",slug:"/objects/all-groups-connection",permalink:"/api/objects/all-groups-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"all-groups-connection",title:"AllGroupsConnection"},sidebar:"schemaSidebar",previous:{title:"AllGroup",permalink:"/api/objects/all-group"},next:{title:"AllGroupsEdge",permalink:"/api/objects/all-groups-edge"}},r={},i=()=>{const e={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,o.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AllGroupsConnection.<b>edges</b></code><Bullet></Bullet><code>[AllGroupsEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectionedgesallgroupsedge--",level:4},{value:'<code>AllGroupsConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectionpageinfopageinfo--",level:4},{value:'<code>AllGroupsConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectionadvisemessageadvisemessage--",level:4},{value:'<code>AllGroupsConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>AllGroupsConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"allgroupsconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:s,children:n,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,o.M)()},[t,r]=(0,l.useState)(d);return(0,a.jsxs)(c.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:t?e:s}),t&&n]})};function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type AllGroupsConnection {\n  edges: [AllGroupsEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"allgroupsconnectionedgesallgroupsedge--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/all-groups-edge",children:(0,a.jsx)(s.code,{children:"[AllGroupsEdge]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"allgroupsconnectionpageinfopageinfo--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/page-info",children:(0,a.jsx)(s.code,{children:"PageInfo!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"allgroupsconnectionadvisemessageadvisemessage--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,a.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.h5,{id:"allgroupsconnectionadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,a.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"allgroupsconnectiontotalcountint--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AllGroupsConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/scalars/int",children:(0,a.jsx)(s.code,{children:"Int!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/objects/admin-query",children:(0,a.jsx)(s.code,{children:"AdminQuery"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/all-group-data",children:(0,a.jsx)(s.code,{children:"AllGroupData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/organizations-data",children:(0,a.jsx)(s.code,{children:"OrganizationsData"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},44808:(e,s,n)=>{var a=n(11504),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function r(e,s,n){var a,l={},r=null,i=null;for(a in void 0!==n&&(r=""+n),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(i=s.ref),s)d.call(s,a)&&!t.hasOwnProperty(a)&&(l[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===l[a]&&(l[a]=s[a]);return{$$typeof:o,type:e,key:r,ref:i,props:l,_owner:c.current}}s.Fragment=l,s.jsx=r,s.jsxs=r},17624:(e,s,n)=>{e.exports=n(44808)},4552:(e,s,n)=>{n.d(s,{I:()=>c,M:()=>d});var a=n(11504);const o={},l=a.createContext(o);function d(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);