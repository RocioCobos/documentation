/*! For license information please see e33757c9.b4e14fc0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23713],{44960:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=t(17624),r=t(4552),c=t(11504);const o={id:"crm-data-input",title:"CrmDataInput"},s=void 0,i={id:"inputs/crm-data-input",title:"CrmDataInput",description:"CRM Data Input",source:"@site/api/inputs/crm-data-input.mdx",sourceDirName:"inputs",slug:"/inputs/crm-data-input",permalink:"/api/inputs/crm-data-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"crm-data-input",title:"CrmDataInput"},sidebar:"schemaSidebar",previous:{title:"CriteriaBookingReferencesInput",permalink:"/api/inputs/criteria-booking-references-input"},next:{title:"DataRangeInput",permalink:"/api/inputs/data-range-input"}},l={},d=()=>{const e={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,r.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>CrmDataInput.<b>crmID</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"crmdatainputcrmidstring-",level:4},{value:'<code>CrmDataInput.<b>contactImportance</b></code><Bullet></Bullet><code>ContactImportance</code> <Badge class="badge badge--secondary"></Badge>',id:"crmdatainputcontactimportancecontactimportance-",level:4},{value:'<code>CrmDataInput.<b>companyRole</b></code><Bullet></Bullet><code>CompanyRole</code> <Badge class="badge badge--secondary"></Badge>',id:"crmdatainputcompanyrolecompanyrole-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const s={details:"details",summary:"summary",...(0,r.M)()},[i,l]=(0,c.useState)(o);return(0,a.jsxs)(s.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"CRM Data Input"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input CrmDataInput {\n  crmID: String\n  contactImportance: ContactImportance\n  companyRole: CompanyRole\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"crmdatainputcrmidstring-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CrmDataInput.",(0,a.jsx)("b",{children:"crmID"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/scalars/string",children:(0,a.jsx)(n.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"CRMD unique ID"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"crmdatainputcontactimportancecontactimportance-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CrmDataInput.",(0,a.jsx)("b",{children:"contactImportance"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/enums/contact-importance",children:(0,a.jsx)(n.code,{children:"ContactImportance"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Contact value"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"crmdatainputcompanyrolecompanyrole-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CrmDataInput.",(0,a.jsx)("b",{children:"companyRole"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/enums/company-role",children:(0,a.jsx)(n.code,{children:"CompanyRole"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Role type"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/inputs/update-member-input",children:(0,a.jsx)(n.code,{children:"UpdateMemberInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},44808:(e,n,t)=>{var a=t(11504),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,c={},l=null,d=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,a)&&!i.hasOwnProperty(a)&&(c[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===c[a]&&(c[a]=n[a]);return{$$typeof:r,type:e,key:l,ref:d,props:c,_owner:s.current}}n.Fragment=c,n.jsx=l,n.jsxs=l},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>o});var a=t(11504);const r={},c=a.createContext(r);function o(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);