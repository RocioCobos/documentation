/*! For license information please see f65354e8.2c241694.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4512],{68660:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>l,assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var d=t(17624),r=t(4552),a=t(11504);const o={id:"audit-rule-connection-where-input",title:"AuditRuleConnectionWhereInput"},i=void 0,s={id:"inputs/audit-rule-connection-where-input",title:"AuditRuleConnectionWhereInput",description:"No description",source:"@site/api/inputs/audit-rule-connection-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/audit-rule-connection-where-input",permalink:"/api/inputs/audit-rule-connection-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"audit-rule-connection-where-input",title:"AuditRuleConnectionWhereInput"},sidebar:"schemaSidebar",previous:{title:"AssetWhereUniqueInput",permalink:"/api/inputs/asset-where-unique-input"},next:{title:"AuditRuleCreateInput",permalink:"/api/inputs/audit-rule-create-input"}},u={},c=()=>{const e={span:"span",...(0,r.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const n={a:"a",...(0,r.M)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,r.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AuditRuleConnectionWhereInput.<b>product</b></code><Bullet></Bullet><code>AuditRuleProductInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditruleconnectionwhereinputproductauditruleproductinput--",level:4},{value:'<code>AuditRuleConnectionWhereInput.<b>auditStatus</b></code><Bullet></Bullet><code>AuditRuleStatus!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditruleconnectionwhereinputauditstatusauditrulestatus--",level:4},{value:'<code>AuditRuleConnectionWhereInput.<b>owner</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditruleconnectionwhereinputownerid--",level:4},{value:'<code>AuditRuleConnectionWhereInput.<b>mode</b></code><Bullet></Bullet><code>ModeType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"auditruleconnectionwhereinputmodemodetype--",level:4}],x=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,r.M)()},[s,u]=(0,a.useState)(o);return(0,d.jsxs)(i.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(i.summary,{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"},children:s?e:n}),s&&t]})};function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"No description"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",children:"input AuditRuleConnectionWhereInput {\n  product: AuditRuleProductInput!\n  auditStatus: AuditRuleStatus!\n  owner: ID!\n  mode: ModeType!\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(n.h4,{id:"auditruleconnectionwhereinputproductauditruleproductinput--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleConnectionWhereInput.",(0,d.jsx)("b",{children:"product"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(n.a,{href:"/api/enums/audit-rule-product-input",children:(0,d.jsx)(n.code,{children:"AuditRuleProductInput!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(n.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(n.h4,{id:"auditruleconnectionwhereinputauditstatusauditrulestatus--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleConnectionWhereInput.",(0,d.jsx)("b",{children:"auditStatus"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(n.a,{href:"/api/enums/audit-rule-status",children:(0,d.jsx)(n.code,{children:"AuditRuleStatus!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(n.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(n.h4,{id:"auditruleconnectionwhereinputownerid--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleConnectionWhereInput.",(0,d.jsx)("b",{children:"owner"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(n.a,{href:"/api/scalars/id",children:(0,d.jsx)(n.code,{children:"ID!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(n.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(n.h4,{id:"auditruleconnectionwhereinputmodemodetype--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AuditRuleConnectionWhereInput.",(0,d.jsx)("b",{children:"mode"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(n.a,{href:"/api/enums/mode-type",children:(0,d.jsx)(n.code,{children:"ModeType!"})})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsx)(n.blockquote,{children:"\n"})]})}function b(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},44808:(e,n,t)=>{var d=t(11504),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var d,a={},u=null,c=null;for(d in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,d)&&!s.hasOwnProperty(d)&&(a[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===a[d]&&(a[d]=n[d]);return{$$typeof:r,type:e,key:u,ref:c,props:a,_owner:i.current}}n.Fragment=a,n.jsx=u,n.jsxs=u},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>o});var d=t(11504);const r={},a=d.createContext(r);function o(e){const n=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);