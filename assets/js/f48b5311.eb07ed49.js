/*! For license information please see f48b5311.eb07ed49.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84665],{60731:(e,t,d)=>{d.r(t),d.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>h,SpecifiedBy:()=>o,assets:()=>c,contentTitle:()=>s,default:()=>j,frontMatter:()=>l,metadata:()=>i,toc:()=>x});var a=d(74848),r=d(28453),n=d(96540);const l={id:"audit-rule-create-input",title:"AuditRuleCreateInput"},s=void 0,i={id:"types/inputs/audit-rule-create-input",title:"AuditRuleCreateInput",description:"No description",source:"@site/api/types/inputs/audit-rule-create-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/audit-rule-create-input",permalink:"/api/types/inputs/audit-rule-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"audit-rule-create-input",title:"AuditRuleCreateInput"},sidebar:"schemaSidebar",previous:{title:"AuditRuleConnectionWhereInput",permalink:"/api/types/inputs/audit-rule-connection-where-input"},next:{title:"AuditRuleWhereInput",permalink:"/api/types/inputs/audit-rule-where-input"}},c={},u=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const t={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:d,startOpen:l=!1})=>{const s={details:"details",summary:"summary",...(0,r.R)()},[i,c]=(0,n.useState)(l);return(0,a.jsxs)(s.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&d]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AuditRuleCreateInput.<b>group</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputgroupid-",level:4},{value:'<code>AuditRuleCreateInput.<b>access</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputaccessid-",level:4},{value:'<code>AuditRuleCreateInput.<b>clientName</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputclientnameid-",level:4},{value:'<code>AuditRuleCreateInput.<b>errorCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputerrorcodeid-",level:4},{value:'<code>AuditRuleCreateInput.<b>percentageToAudit</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputpercentagetoauditint--",level:4},{value:'<code>AuditRuleCreateInput.<b>product</b></code><Bullet></Bullet><code>AuditRuleProductInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputproductauditruleproductinput--",level:4},{value:'<code>AuditRuleCreateInput.<b>supplier</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputsupplierid-",level:4},{value:'<code>AuditRuleCreateInput.<b>ttl</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputttlint--",level:4},{value:'<code>AuditRuleCreateInput.<b>orgBuyer</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputorgbuyerid-",level:4},{value:'<code>AuditRuleCreateInput.<b>orgSeller</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputorgsellerid-",level:4},{value:'<code>AuditRuleCreateInput.<b>mode</b></code><Bullet></Bullet><code>ModeType</code> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputmodemodetype-",level:4},{value:'<code>AuditRuleCreateInput.<b>startTime</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"auditrulecreateinputstarttimestring-",level:4}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AuditRuleCreateInput {\n  group: ID\n  access: ID\n  clientName: ID\n  errorCode: ID\n  percentageToAudit: Int!\n  product: AuditRuleProductInput!\n  supplier: ID\n  ttl: Int!\n  orgBuyer: ID\n  orgSeller: ID\n  mode: ModeType\n  startTime: String\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputgroupid-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"group"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputaccessid-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"access"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputclientnameid-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"clientName"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputerrorcodeid-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"errorCode"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputpercentagetoauditint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"percentageToAudit"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputproductauditruleproductinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"product"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/audit-rule-product-input",children:(0,a.jsx)(t.code,{children:"AuditRuleProductInput!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputsupplierid-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"supplier"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputttlint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"ttl"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputorgbuyerid-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"orgBuyer"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputorgsellerid-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"orgSeller"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputmodemodetype-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"mode"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/mode-type",children:(0,a.jsx)(t.code,{children:"ModeType"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"auditrulecreateinputstarttimestring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleCreateInput.",(0,a.jsx)("b",{children:"startTime"})]})}),(0,a.jsx)(u,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"If startTime is null, the audit initalization time will be te current time."}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},21020:(e,t,d)=>{var a=d(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,d){var a,n={},c=null,u=null;for(a in void 0!==d&&(c=""+d),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!i.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===n[a]&&(n[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:u,props:n,_owner:s.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},74848:(e,t,d)=>{e.exports=d(21020)},28453:(e,t,d)=>{d.d(t,{R:()=>l,x:()=>s});var a=d(96540);const r={},n=a.createContext(r);function l(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);