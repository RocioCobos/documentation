/*! For license information please see b527f45d.201e3eec.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35096],{39384:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>h,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>r,toc:()=>m});var d=t(74848),s=t(28453),n=t(96540);const c={id:"metadata",title:"Metadata"},l=void 0,r={id:"types/objects/metadata",title:"Metadata",description:"Metadata Type",source:"@site/api/types/objects/metadata.mdx",sourceDirName:"types/objects",slug:"/types/objects/metadata",permalink:"/api/types/objects/metadata",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"metadata",title:"Metadata"},sidebar:"schemaSidebar",previous:{title:"MetadataSearch",permalink:"/api/types/objects/metadata-search"},next:{title:"OccupancyRange",permalink:"/api/types/objects/occupancy-range"}},i={},o=()=>{const e={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,s.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,s.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:t,startOpen:c=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[r,i]=(0,n.useState)(c);return(0,d.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&t]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>Metadata.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatacodeid--",level:4},{value:'<code>Metadata.<b>metadataData</b></code><Bullet></Bullet><code>MetadataData</code> <Badge class="badge badge--secondary"></Badge>',id:"metadatametadatadatametadatadata-",level:4},{value:'<code>Metadata.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataadvisemessageadvisemessage--",level:4},{value:'<code>Metadata.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Metadata.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatacreatedatdatetime--",level:4},{value:'<code>Metadata.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Metadata Type"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type Metadata implements Node {\n  code: ID!\n  metadataData: MetadataData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"metadatacodeid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Metadata.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Metadata supplier ID"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"metadatametadatadatametadatadata-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Metadata.",(0,d.jsx)("b",{children:"metadataData"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/metadata-data",children:(0,d.jsx)(a.code,{children:"MetadataData"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Metadata data"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"metadataadvisemessageadvisemessage--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Metadata.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/advise-message",children:(0,d.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"List of messages"}),"\n",(0,d.jsxs)(a.h5,{id:"metadataadvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Metadata.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/types/enums/advise-message-level",children:(0,d.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"metadatacreatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Metadata.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date created"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"metadataupdatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Metadata.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date updated"}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"node-",children:[(0,d.jsx)(a.a,{href:"/api/types/interfaces/node",children:(0,d.jsx)(a.code,{children:"Node"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/types/objects/metadata-edge",children:(0,d.jsx)(a.code,{children:"MetadataEdge"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},21020:(e,a,t)=>{var d=t(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,t){var d,n={},i=null,o=null;for(d in void 0!==t&&(i=""+t),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(o=a.ref),a)c.call(a,d)&&!r.hasOwnProperty(d)&&(n[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===n[d]&&(n[d]=a[d]);return{$$typeof:s,type:e,key:i,ref:o,props:n,_owner:l.current}}a.Fragment=n,a.jsx=i,a.jsxs=i},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>l});var d=t(96540);const s={},n=d.createContext(s);function c(e){const a=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(n.Provider,{value:a},e.children)}}}]);