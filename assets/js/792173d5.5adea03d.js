/*! For license information please see 792173d5.5adea03d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42720],{97500:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>j,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>n,default:()=>b,frontMatter:()=>c,metadata:()=>o,toc:()=>x});var d=s(17624),r=s(4552),t=s(11504);const c={id:"group",title:"Group"},n=void 0,o={id:"objects/group",title:"Group",description:"Groups are organized hierarchically.",source:"@site/api/objects/group.mdx",sourceDirName:"objects",slug:"/objects/group",permalink:"/api/objects/group",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"group",title:"Group"},sidebar:"schemaSidebar",previous:{title:"GroupEdge",permalink:"/api/objects/group-edge"},next:{title:"Holder",permalink:"/api/objects/holder"}},l={},i=()=>{const e={span:"span",...(0,r.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,r.M)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const a={span:"span",...(0,r.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Group.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupcodeid--",level:4},{value:'<code>Group.<b>groupData</b></code><Bullet></Bullet><code>GroupData</code> <Badge class="badge badge--secondary"></Badge>',id:"groupgroupdatagroupdata-",level:4},{value:'<code>Group.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupadvisemessageadvisemessage--",level:4},{value:'<code>Group.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Group.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupcreatedatdatetime--",level:4},{value:'<code>Group.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"groupupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],u=({dataOpen:e,dataClose:a,children:s,startOpen:c=!1})=>{const n={details:"details",summary:"summary",...(0,r.M)()},[o,l]=(0,t.useState)(c);return(0,d.jsxs)(n.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(n.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})};function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Groups are organized hierarchically."}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type Group implements Node {\n  code: ID!\n  groupData: GroupData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"groupcodeid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"groupgroupdatagroupdata-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"groupData"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/group-data",children:(0,d.jsx)(a.code,{children:"GroupData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"groupadvisemessageadvisemessage--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,d.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"List of advise messages."}),"\n",(0,d.jsxs)(a.h5,{id:"groupadvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,d.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"groupcreatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date created"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"groupupdatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Group.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date updated"}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"node-",children:[(0,d.jsx)(a.a,{href:"/api/interfaces/node",children:(0,d.jsx)(a.code,{children:"Node"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/objects/admin-mutation",children:(0,d.jsx)(a.code,{children:"AdminMutation"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/alert-data",children:(0,d.jsx)(a.code,{children:"AlertData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/audit-rule-data",children:(0,d.jsx)(a.code,{children:"AuditRuleData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/client-data",children:(0,d.jsx)(a.code,{children:"ClientData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/group-data",children:(0,d.jsx)(a.code,{children:"GroupData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/group-edge",children:(0,d.jsx)(a.code,{children:"GroupEdge"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/managed-group-data",children:(0,d.jsx)(a.code,{children:"ManagedGroupData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/payment-xstored-card-data",children:(0,d.jsx)(a.code,{children:"PaymentXStoredCardData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/profile",children:(0,d.jsx)(a.code,{children:"Profile"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/profile-data",children:(0,d.jsx)(a.code,{children:"ProfileData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/system-data",children:(0,d.jsx)(a.code,{children:"SystemData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/unions/alert-objects-union",children:(0,d.jsx)(a.code,{children:"AlertObjectsUnion"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function b(e={}){const{wrapper:a}={...(0,r.M)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},44808:(e,a,s)=>{var d=s(11504),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,n=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,s){var d,t={},l=null,i=null;for(d in void 0!==s&&(l=""+s),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)c.call(a,d)&&!o.hasOwnProperty(d)&&(t[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===t[d]&&(t[d]=a[d]);return{$$typeof:r,type:e,key:l,ref:i,props:t,_owner:n.current}}a.Fragment=t,a.jsx=l,a.jsxs=l},17624:(e,a,s)=>{e.exports=s(44808)},4552:(e,a,s)=>{s.d(a,{I:()=>n,M:()=>c});var d=s(11504);const r={},t=d.createContext(r);function c(e){const a=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(t.Provider,{value:a},e.children)}}}]);