/*! For license information please see d0d98e9d.deec7a94.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57088],{69372:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>g,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>r,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var s=d(17624),t=d(4552),l=d(11504);const n={id:"audit-rule",title:"AuditRule"},r=void 0,c={id:"objects/audit-rule",title:"AuditRule",description:"The service used to access the stats of every connection that uses the HUB",source:"@site/api/objects/audit-rule.mdx",sourceDirName:"objects",slug:"/objects/audit-rule",permalink:"/api/objects/audit-rule",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"audit-rule",title:"AuditRule"},sidebar:"schemaSidebar",previous:{title:"AuditRuleEdge",permalink:"/api/objects/audit-rule-edge"},next:{title:"BearerData",permalink:"/api/objects/bearer-data"}},i={},o=()=>{const e={span:"span",...(0,t.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,t.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,t.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AuditRule.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecodeid--",level:4},{value:'<code>AuditRule.<b>auditRuleData</b></code><Bullet></Bullet><code>AuditRuleData</code> <Badge class="badge badge--secondary"></Badge>',id:"auditruleauditruledataauditruledata-",level:4},{value:'<code>AuditRule.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditruleadvisemessageadvisemessage--",level:4},{value:'<code>AuditRule.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditruleadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>AuditRule.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreatedatdatetime--",level:4},{value:'<code>AuditRule.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditruleupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:a,children:d,startOpen:n=!1})=>{const r={details:"details",summary:"summary",...(0,t.M)()},[c,i]=(0,l.useState)(n);return(0,s.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&d]})};function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"The service used to access the stats of every connection that uses the HUB"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type AuditRule implements Node {\n  code: ID!\n  auditRuleData: AuditRuleData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"auditrulecodeid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRule.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/api/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"auditruleauditruledataauditruledata-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRule.",(0,s.jsx)("b",{children:"auditRuleData"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/api/objects/audit-rule-data",children:(0,s.jsx)(a.code,{children:"AuditRuleData"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"auditruleadvisemessageadvisemessage--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRule.",(0,s.jsx)("b",{children:"adviseMessage"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,s.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Errors that will lead the service to abort"}),"\n",(0,s.jsxs)(a.h5,{id:"auditruleadvisemessageleveladvisemessagelevel--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRule.adviseMessage.",(0,s.jsx)("b",{children:"level"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,s.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"auditrulecreatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRule.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Create date"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"auditruleupdatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRule.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Update date"}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(a.h4,{id:"node-",children:[(0,s.jsx)(a.a,{href:"/api/interfaces/node",children:(0,s.jsx)(a.code,{children:"Node"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/objects/audit-rule-edge",children:(0,s.jsx)(a.code,{children:"AuditRuleEdge"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(o,{}),(0,s.jsx)(a.a,{href:"/api/objects/logging-mutation",children:(0,s.jsx)(a.code,{children:"LoggingMutation"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},44808:(e,a,d)=>{var s=d(11504),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,d){var s,l={},i=null,o=null;for(s in void 0!==d&&(i=""+d),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(o=a.ref),a)n.call(a,s)&&!c.hasOwnProperty(s)&&(l[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===l[s]&&(l[s]=a[s]);return{$$typeof:t,type:e,key:i,ref:o,props:l,_owner:r.current}}a.Fragment=l,a.jsx=i,a.jsxs=i},17624:(e,a,d)=>{e.exports=d(44808)},4552:(e,a,d)=>{d.d(a,{I:()=>r,M:()=>n});var s=d(11504);const t={},l=s.createContext(t);function n(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);