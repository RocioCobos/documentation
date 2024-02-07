/*! For license information please see fd77b56d.823206dd.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68192],{36852:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>o,assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>g});var s=t(17624),i=t(4552),p=t(11504);const a={id:"set-supplier-mapping-input",title:"SetSupplierMappingInput"},r=void 0,d={id:"inputs/set-supplier-mapping-input",title:"SetSupplierMappingInput",description:"No description",source:"@site/api/inputs/set-supplier-mapping-input.mdx",sourceDirName:"inputs",slug:"/inputs/set-supplier-mapping-input",permalink:"/api/inputs/set-supplier-mapping-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"set-supplier-mapping-input",title:"SetSupplierMappingInput"},sidebar:"schemaSidebar",previous:{title:"ServiceApiFilter",permalink:"/api/inputs/service-api-filter"},next:{title:"SettingsBaseInput",permalink:"/api/inputs/settings-base-input"}},l={},c=()=>{const e={span:"span",...(0,i.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const n={a:"a",...(0,i.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>SetSupplierMappingInput.<b>entity</b></code><Bullet></Bullet><code>MappingEntityType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"setsuppliermappinginputentitymappingentitytype--",level:4},{value:'<code>SetSupplierMappingInput.<b>entityCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"setsuppliermappinginputentitycodeid--",level:4},{value:'<code>SetSupplierMappingInput.<b>supplierCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"setsuppliermappinginputsuppliercodeid--",level:4},{value:'<code>SetSupplierMappingInput.<b>mappings</b></code><Bullet></Bullet><code>[ContextedCodeInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"setsuppliermappinginputmappingscontextedcodeinput--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const r={details:"details",summary:"summary",...(0,i.M)()},[d,l]=(0,p.useState)(a);return(0,s.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"input SetSupplierMappingInput {\n  entity: MappingEntityType!\n  entityCode: ID!\n  supplierCode: ID!\n  mappings: [ContextedCodeInput!]!\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"setsuppliermappinginputentitymappingentitytype--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SetSupplierMappingInput.",(0,s.jsx)("b",{children:"entity"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/enums/mapping-entity-type",children:(0,s.jsx)(n.code,{children:"MappingEntityType!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"entity whose the codes are identifiers"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"setsuppliermappinginputentitycodeid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SetSupplierMappingInput.",(0,s.jsx)("b",{children:"entityCode"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"supplier entity code"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"setsuppliermappinginputsuppliercodeid--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SetSupplierMappingInput.",(0,s.jsx)("b",{children:"supplierCode"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/scalars/id",children:(0,s.jsx)(n.code,{children:"ID!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"supplier code"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"setsuppliermappinginputmappingscontextedcodeinput--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["SetSupplierMappingInput.",(0,s.jsx)("b",{children:"mappings"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(n.a,{href:"/api/inputs/contexted-code-input",children:(0,s.jsx)(n.code,{children:"[ContextedCodeInput!]!"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"list of mappings"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/inputs/inscribe-set-mapping-input",children:(0,s.jsx)(n.code,{children:"InscribeSetMappingInput"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},44808:(e,n,t)=>{var s=t(11504),i=Symbol.for("react.element"),p=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,p={},l=null,c=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,s)&&!d.hasOwnProperty(s)&&(p[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===p[s]&&(p[s]=n[s]);return{$$typeof:i,type:e,key:l,ref:c,props:p,_owner:r.current}}n.Fragment=p,n.jsx=l,n.jsxs=l},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>a});var s=t(11504);const i={},p=s.createContext(i);function a(e){const n=s.useContext(p);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(p.Provider,{value:n},e.children)}}}]);