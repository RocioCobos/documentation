/*! For license information please see 50595c65.61df59f9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76993],{63786:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>c,assets:()=>p,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>l,toc:()=>x});var r=t(74848),i=t(28453),s=t(96540);const a={id:"supplier-update-input",title:"SupplierUpdateInput",hide_table_of_contents:!1},d=void 0,l={id:"inputs/supplier-update-input",title:"SupplierUpdateInput",description:"Update Supplier input",source:"@site/api/inputs/supplier-update-input.mdx",sourceDirName:"inputs",slug:"/inputs/supplier-update-input",permalink:"/api/inputs/supplier-update-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"supplier-update-input",title:"SupplierUpdateInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupplierServiceIntegrationData",permalink:"/api/inputs/supplier-service-integration-data"},next:{title:"SupplierWhereInput",permalink:"/api/inputs/supplier-where-input"}},p={},o=()=>{const e={span:"span",...(0,i.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},c=e=>{const n={a:"a",...(0,i.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,i.R)()},[l,p]=(0,s.useState)(a);return(0,r.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>SupplierUpdateInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"supplierupdateinputnamestring-",level:4},{value:'<code>SupplierUpdateInput.<b>providerCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"supplierupdateinputprovidercodeid-",level:4},{value:'<code>SupplierUpdateInput.<b>serviceApi</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"supplierupdateinputserviceapiid-",level:4},{value:'<code>SupplierUpdateInput.<b>groupContentCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"supplierupdateinputgroupcontentcodeid-",level:4},{value:'<code>SupplierUpdateInput.<b>ownerCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"supplierupdateinputownercodeid-",level:4}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Update Supplier input"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input SupplierUpdateInput {\n  name: String\n  providerCode: ID\n  serviceApi: ID\n  groupContentCode: ID\n  ownerCode: ID\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"supplierupdateinputnamestring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierUpdateInput.",(0,r.jsx)("b",{children:"name"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Set Supplier name"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"supplierupdateinputprovidercodeid-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierUpdateInput.",(0,r.jsx)("b",{children:"providerCode"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/api/scalars/id",children:(0,r.jsx)(n.code,{children:"ID"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Set Supplier Provider"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"supplierupdateinputserviceapiid-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierUpdateInput.",(0,r.jsx)("b",{children:"serviceApi"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/api/scalars/id",children:(0,r.jsx)(n.code,{children:"ID"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Set Supplier serviceApi"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"supplierupdateinputgroupcontentcodeid-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierUpdateInput.",(0,r.jsx)("b",{children:"groupContentCode"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/api/scalars/id",children:(0,r.jsx)(n.code,{children:"ID"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Set Supplier GroupContent\nUse allGroupContents to get a list of valid GroupContents or create a new one with createGroupContent"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"supplierupdateinputownercodeid-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierUpdateInput.",(0,r.jsx)("b",{children:"ownerCode"})]})}),(0,r.jsx)(o,{}),(0,r.jsx)(n.a,{href:"/api/scalars/id",children:(0,r.jsx)(n.code,{children:"ID"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Set new Owner.\nThe user must have permissions in both organizations (origin and destination) in order to make the change.\nWhen modifying the Owner, keep in mind that you can leave users of the origin organization without visibility of this Supplier"}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},21020:(e,n,t)=>{var r=t(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,s={},p=null,o=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,r)&&!l.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:p,ref:o,props:s,_owner:d.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);