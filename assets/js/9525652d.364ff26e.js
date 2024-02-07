/*! For license information please see 9525652d.364ff26e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83264],{15016:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>g,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var n=a(17624),i=a(4552),d=a(11504);const t={id:"mapping-inscription",title:"MappingInscription"},c=void 0,r={id:"objects/mapping-inscription",title:"MappingInscription",description:"No description",source:"@site/api/objects/mapping-inscription.mdx",sourceDirName:"objects",slug:"/objects/mapping-inscription",permalink:"/api/objects/mapping-inscription",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"mapping-inscription",title:"MappingInscription"},sidebar:"schemaSidebar",previous:{title:"MappingEntity",permalink:"/api/objects/mapping-entity"},next:{title:"MappingMutation",permalink:"/api/objects/mapping-mutation"}},l={},o=()=>{const e={span:"span",...(0,i.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,i.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const s={span:"span",...(0,i.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>MappingInscription.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mappinginscriptioncodeid--",level:4},{value:'<code>MappingInscription.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mappinginscriptioncreatedatdatetime--",level:4},{value:'<code>MappingInscription.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mappinginscriptionupdatedatdatetime--",level:4},{value:'<code>MappingInscription.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mappinginscriptionadvisemessageadvisemessage--",level:4},{value:'<code>MappingInscription.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mappinginscriptionadvisemessageleveladvisemessagelevel--",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:a,startOpen:t=!1})=>{const c={details:"details",summary:"summary",...(0,i.M)()},[r,l]=(0,d.useState)(t);return(0,n.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&a]})};function m(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type MappingInscription implements Node {\n  code: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"mappinginscriptioncodeid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MappingInscription.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Internal TGX identificator"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"mappinginscriptioncreatedatdatetime--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MappingInscription.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Create date"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"mappinginscriptionupdatedatdatetime--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MappingInscription.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime!"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Update date"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"mappinginscriptionadvisemessageadvisemessage--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MappingInscription.",(0,n.jsx)("b",{children:"adviseMessage"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,n.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"List of messages"}),"\n",(0,n.jsxs)(s.h5,{id:"mappinginscriptionadvisemessageleveladvisemessagelevel--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MappingInscription.adviseMessage.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,n.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(s.h4,{id:"node-",children:[(0,n.jsx)(s.a,{href:"/api/interfaces/node",children:(0,n.jsx)(s.code,{children:"Node"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/objects/mapping-mutation",children:(0,n.jsx)(s.code,{children:"MappingMutation"})})," ",(0,n.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},44808:(e,s,a)=>{var n=a(11504),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,a){var n,d={},l=null,o=null;for(n in void 0!==a&&(l=""+a),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(o=s.ref),s)t.call(s,n)&&!r.hasOwnProperty(n)&&(d[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===d[n]&&(d[n]=s[n]);return{$$typeof:i,type:e,key:l,ref:o,props:d,_owner:c.current}}s.Fragment=d,s.jsx=l,s.jsxs=l},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>c,M:()=>t});var n=a(11504);const i={},d=n.createContext(i);function t(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);