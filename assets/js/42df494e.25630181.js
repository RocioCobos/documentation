/*! For license information please see 42df494e.25630181.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58756],{11712:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>u,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>b});var r=a(17624),n=a(4552),t=a(11504);const s={id:"provider-data",title:"ProviderData"},i=void 0,o={id:"objects/provider-data",title:"ProviderData",description:"Extended Provider information",source:"@site/api/objects/provider-data.mdx",sourceDirName:"objects",slug:"/objects/provider-data",permalink:"/api/objects/provider-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"provider-data",title:"ProviderData"},sidebar:"schemaSidebar",previous:{title:"Property",permalink:"/api/objects/property"},next:{title:"Provider",permalink:"/api/objects/provider"}},c={},l=()=>{const e={span:"span",...(0,n.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const d={a:"a",...(0,n.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const d={span:"span",...(0,n.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>ProviderData.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providerdataidid--",level:4},{value:'<code>ProviderData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providerdatacodeid--",level:4},{value:'<code>ProviderData.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providerdatanamestring--",level:4},{value:'<code>ProviderData.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providerdataisactiveboolean--",level:4},{value:'<code>ProviderData.<b>isPublic</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providerdataispublicboolean--",level:4},{value:'<code>ProviderData.<b>audits</b></code><Bullet></Bullet><code>EntityAuditConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providerdataauditsentityauditconnection--",level:4},{value:'<code>ProviderData.audits.<b>where</b></code><Bullet></Bullet><code>EntityAuditWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"providerdataauditswhereentityauditwhereinput-",level:5},{value:'<code>ProviderData.audits.<b>orderBy</b></code><Bullet></Bullet><code>EntityAuditOrderByEnum</code> <Badge class="badge badge--secondary"></Badge>',id:"providerdataauditsorderbyentityauditorderbyenum-",level:5},{value:'<code>ProviderData.<b>connectionType</b></code><Bullet></Bullet><code>ProviderConnectionType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providerdataconnectiontypeproviderconnectiontype--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:d,children:a,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,n.M)()},[o,c]=(0,t.useState)(s);return(0,r.jsxs)(i.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:d}),o&&a]})};function p(e){const d={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.p,{children:"Extended Provider information"}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-graphql",children:"type ProviderData {\n  id: ID!\n  code: ID!\n  name: String!\n  isActive: Boolean!\n  isPublic: Boolean @deprecated\n  audits(\n    where: EntityAuditWhereInput\n    orderBy: EntityAuditOrderByEnum\n  ): EntityAuditConnection!\n  connectionType: ProviderConnectionType!\n}\n"})}),"\n",(0,r.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(d.h4,{id:"providerdataidid--",children:[(0,r.jsx)(d.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderData.",(0,r.jsx)("b",{children:"id"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/scalars/id",children:(0,r.jsx)(d.code,{children:"ID!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsx)(d.p,{children:"Provider unique ID. Format: integer."}),"\n"]}),"\n",(0,r.jsxs)(d.h4,{id:"providerdatacodeid--",children:[(0,r.jsx)(d.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderData.",(0,r.jsx)("b",{children:"code"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/scalars/id",children:(0,r.jsx)(d.code,{children:"ID!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsx)(d.p,{children:"Provider unique code"}),"\n"]}),"\n",(0,r.jsxs)(d.h4,{id:"providerdatanamestring--",children:[(0,r.jsx)(d.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderData.",(0,r.jsx)("b",{children:"name"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/scalars/string",children:(0,r.jsx)(d.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsx)(d.p,{children:"Provider name"}),"\n"]}),"\n",(0,r.jsxs)(d.h4,{id:"providerdataisactiveboolean--",children:[(0,r.jsx)(d.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderData.",(0,r.jsx)("b",{children:"isActive"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/scalars/boolean",children:(0,r.jsx)(d.code,{children:"Boolean!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsx)(d.p,{children:"Indicates whether a Provider is active.\nIf the Provider is deactivated, all its Suppliers will be deactivated"}),"\n"]}),"\n",(0,r.jsxs)(d.h4,{id:"providerdataispublicboolean--",children:[(0,r.jsx)(d.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderData.",(0,r.jsx)("b",{children:"isPublic"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/scalars/boolean",children:(0,r.jsx)(d.code,{children:"Boolean"})})," ",(0,r.jsx)(u,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsx)(d.admonition,{title:"DEPRECATED",type:"warning",children:(0,r.jsx)(d.p,{children:"deprecated from 2019-01-01. Not used"})}),"\n"]}),"\n",(0,r.jsxs)(d.h4,{id:"providerdataauditsentityauditconnection--",children:[(0,r.jsx)(d.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderData.",(0,r.jsx)("b",{children:"audits"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/objects/entity-audit-connection",children:(0,r.jsx)(d.code,{children:"EntityAuditConnection!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsx)(d.p,{children:"Audits it shows the provider's change history"}),"\n",(0,r.jsxs)(d.h5,{id:"providerdataauditswhereentityauditwhereinput-",children:[(0,r.jsx)(d.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderData.audits.",(0,r.jsx)("b",{children:"where"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/inputs/entity-audit-where-input",children:(0,r.jsx)(d.code,{children:"EntityAuditWhereInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,r.jsxs)(d.h5,{id:"providerdataauditsorderbyentityauditorderbyenum-",children:[(0,r.jsx)(d.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderData.audits.",(0,r.jsx)("b",{children:"orderBy"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/enums/entity-audit-order-by-enum",children:(0,r.jsx)(d.code,{children:"EntityAuditOrderByEnum"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsx)(d.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(d.h4,{id:"providerdataconnectiontypeproviderconnectiontype--",children:[(0,r.jsx)(d.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderData.",(0,r.jsx)("b",{children:"connectionType"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/enums/provider-connection-type",children:(0,r.jsx)(d.code,{children:"ProviderConnectionType!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(d.blockquote,{children:["\n",(0,r.jsx)(d.p,{children:"Indicates connection type of Supplier"}),"\n"]}),"\n",(0,r.jsx)(d.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.a,{href:"/api/objects/provider",children:(0,r.jsx)(d.code,{children:"Provider"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(l,{}),(0,r.jsx)(d.a,{href:"/api/objects/supplier-data",children:(0,r.jsx)(d.code,{children:"SupplierData"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:d}={...(0,n.M)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},44808:(e,d,a)=>{var r=a(11504),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,d,a){var r,t={},c=null,l=null;for(r in void 0!==a&&(c=""+a),void 0!==d.key&&(c=""+d.key),void 0!==d.ref&&(l=d.ref),d)s.call(d,r)&&!o.hasOwnProperty(r)&&(t[r]=d[r]);if(e&&e.defaultProps)for(r in d=e.defaultProps)void 0===t[r]&&(t[r]=d[r]);return{$$typeof:n,type:e,key:c,ref:l,props:t,_owner:i.current}}d.Fragment=t,d.jsx=c,d.jsxs=c},17624:(e,d,a)=>{e.exports=a(44808)},4552:(e,d,a)=>{a.d(d,{I:()=>i,M:()=>s});var r=a(11504);const n={},t=r.createContext(n);function s(e){const d=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(t.Provider,{value:d},e.children)}}}]);