/*! For license information please see 2cd0c250.4f1be479.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65320],{33888:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>u,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var s=d(17624),n=d(4552),r=d(11504);const t={id:"managed-group",title:"ManagedGroup"},o=void 0,c={id:"objects/managed-group",title:"ManagedGroup",description:"No description",source:"@site/api/objects/managed-group.mdx",sourceDirName:"objects",slug:"/objects/managed-group",permalink:"/api/objects/managed-group",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"managed-group",title:"ManagedGroup"},sidebar:"schemaSidebar",previous:{title:"ManagedGroupEdge",permalink:"/api/objects/managed-group-edge"},next:{title:"MandatoryFee",permalink:"/api/objects/mandatory-fee"}},l={},i=()=>{const e={span:"span",...(0,n.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,n.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const a={span:"span",...(0,n.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>ManagedGroup.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupcodeid--",level:4},{value:'<code>ManagedGroup.<b>managedGroupData</b></code><Bullet></Bullet><code>ManagedGroupData</code> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupmanagedgroupdatamanagedgroupdata-",level:4},{value:'<code>ManagedGroup.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupadvisemessageadvisemessage--",level:4},{value:'<code>ManagedGroup.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>ManagedGroup.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupcreatedatdatetime--",level:4},{value:'<code>ManagedGroup.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"managedgroupupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:a,children:d,startOpen:t=!1})=>{const o={details:"details",summary:"summary",...(0,n.M)()},[c,l]=(0,r.useState)(t);return(0,s.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&d]})};function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type ManagedGroup implements Node {\n  code: ID!\n  managedGroupData: ManagedGroupData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"managedgroupcodeid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroup.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"managedgroupmanagedgroupdatamanagedgroupdata-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroup.",(0,s.jsx)("b",{children:"managedGroupData"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/managed-group-data",children:(0,s.jsx)(a.code,{children:"ManagedGroupData"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"managedgroupadvisemessageadvisemessage--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroup.",(0,s.jsx)("b",{children:"adviseMessage"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,s.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"List of advise messages."}),"\n",(0,s.jsxs)(a.h5,{id:"managedgroupadvisemessageleveladvisemessagelevel--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroup.adviseMessage.",(0,s.jsx)("b",{children:"level"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,s.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"managedgroupcreatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroup.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Date created"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"managedgroupupdatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ManagedGroup.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Date updated"}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(a.h4,{id:"node-",children:[(0,s.jsx)(a.a,{href:"/api/interfaces/node",children:(0,s.jsx)(a.code,{children:"Node"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/objects/managed-group-edge",children:(0,s.jsx)(a.code,{children:"ManagedGroupEdge"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:a}={...(0,n.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},44808:(e,a,d)=>{var s=d(11504),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,d){var s,r={},l=null,i=null;for(s in void 0!==d&&(l=""+d),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)t.call(a,s)&&!c.hasOwnProperty(s)&&(r[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===r[s]&&(r[s]=a[s]);return{$$typeof:n,type:e,key:l,ref:i,props:r,_owner:o.current}}a.Fragment=r,a.jsx=l,a.jsxs=l},17624:(e,a,d)=>{e.exports=d(44808)},4552:(e,a,d)=>{d.d(a,{I:()=>o,M:()=>t});var s=d(11504);const n={},r=s.createContext(n);function t(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);