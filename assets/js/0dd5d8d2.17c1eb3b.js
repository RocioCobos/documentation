/*! For license information please see 0dd5d8d2.17c1eb3b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38920],{96828:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>h,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>n,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>x});var d=s(17624),t=s(4552),r=s(11504);const c={id:"category",title:"Category"},n=void 0,o={id:"objects/category",title:"Category",description:"Category Type",source:"@site/api/objects/category.mdx",sourceDirName:"objects",slug:"/objects/category",permalink:"/api/objects/category",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category",title:"Category"},sidebar:"schemaSidebar",previous:{title:"CategoryEdge",permalink:"/api/objects/category-edge"},next:{title:"CertificationConnection",permalink:"/api/objects/certification-connection"}},l={},i=()=>{const e={span:"span",...(0,t.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,t.M)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,t.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Category.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycodeid--",level:4},{value:'<code>Category.<b>categoryData</b></code><Bullet></Bullet><code>CategoryData</code> <Badge class="badge badge--secondary"></Badge>',id:"categorycategorydatacategorydata-",level:4},{value:'<code>Category.<b>error</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryerrorerror---",level:4},{value:'<code>Category.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryadvisemessageadvisemessage--",level:4},{value:'<code>Category.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Category.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categorycreatedatdatetime--",level:4},{value:'<code>Category.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:a,children:s,startOpen:c=!1})=>{const n={details:"details",summary:"summary",...(0,t.M)()},[o,l]=(0,r.useState)(c);return(0,d.jsxs)(n.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(n.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&s]})};function y(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Category Type"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type Category implements Node {\n  code: ID!\n  categoryData: CategoryData\n  error: [Error!] @deprecated\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"categorycodeid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Category ID"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"categorycategorydatacategorydata-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,d.jsx)("b",{children:"categoryData"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/category-data",children:(0,d.jsx)(a.code,{children:"CategoryData"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Category data"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"categoryerrorerror---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,d.jsx)("b",{children:"error"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/error",children:(0,d.jsx)(a.code,{children:"[Error!]"})})," ",(0,d.jsx)(h,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.admonition,{title:"DEPRECATED",type:"warning",children:(0,d.jsx)(a.p,{children:"Deprecated from 2019-07-03"})}),"\n",(0,d.jsx)(a.p,{children:"Errors that abort services"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"categoryadvisemessageadvisemessage--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,d.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"List of messages"}),"\n",(0,d.jsxs)(a.h5,{id:"categoryadvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,d.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"categorycreatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date created"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"categoryupdatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Category.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Date updated"}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"node-",children:[(0,d.jsx)(a.a,{href:"/api/interfaces/node",children:(0,d.jsx)(a.code,{children:"Node"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/objects/category-edge",children:(0,d.jsx)(a.code,{children:"CategoryEdge"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(y,{...e})}):y(e)}},44808:(e,a,s)=>{var d=s(11504),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,n=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,s){var d,r={},l=null,i=null;for(d in void 0!==s&&(l=""+s),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)c.call(a,d)&&!o.hasOwnProperty(d)&&(r[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===r[d]&&(r[d]=a[d]);return{$$typeof:t,type:e,key:l,ref:i,props:r,_owner:n.current}}a.Fragment=r,a.jsx=l,a.jsxs=l},17624:(e,a,s)=>{e.exports=s(44808)},4552:(e,a,s)=>{s.d(a,{I:()=>n,M:()=>c});var d=s(11504);const t={},r=d.createContext(t);function c(e){const a=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function n(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),d.createElement(r.Provider,{value:a},e.children)}}}]);