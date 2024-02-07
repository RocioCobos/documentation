/*! For license information please see afc30ddb.5a522b3a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17616],{25900:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>d,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var i=t(17624),s=t(4552),r=t(11504);const p={id:"inscribe-set-mapping-input",title:"InscribeSetMappingInput"},a=void 0,o={id:"inputs/inscribe-set-mapping-input",title:"InscribeSetMappingInput",description:"Information required to store a mapping in TGX system",source:"@site/api/inputs/inscribe-set-mapping-input.mdx",sourceDirName:"inputs",slug:"/inputs/inscribe-set-mapping-input",permalink:"/api/inputs/inscribe-set-mapping-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inscribe-set-mapping-input",title:"InscribeSetMappingInput"},sidebar:"schemaSidebar",previous:{title:"InscribeDeleteMappingInput",permalink:"/api/inputs/inscribe-delete-mapping-input"},next:{title:"InsightsCountriesInput",permalink:"/api/inputs/insights-countries-input"}},l={},c=()=>{const e={span:"span",...(0,s.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},d=e=>{const n={span:"span",...(0,s.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>InscribeSetMappingInput.<b>supplierMappings</b></code><Bullet></Bullet><code>[SetSupplierMappingInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inscribesetmappinginputsuppliermappingssetsuppliermappinginput--",level:4}],g=({dataOpen:e,dataClose:n,children:t,startOpen:p=!1})=>{const a={details:"details",summary:"summary",...(0,s.M)()},[o,l]=(0,r.useState)(p);return(0,i.jsxs)(a.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})};function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Information required to store a mapping in TGX system"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"input InscribeSetMappingInput {\n  supplierMappings: [SetSupplierMappingInput!]!\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.h4,{id:"inscribesetmappinginputsuppliermappingssetsuppliermappinginput--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InscribeSetMappingInput.",(0,i.jsx)("b",{children:"supplierMappings"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/api/inputs/set-supplier-mapping-input",children:(0,i.jsx)(n.code,{children:"[SetSupplierMappingInput!]!"})})," ",(0,i.jsx)(d,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(d,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"List of mappings to store in TGX system"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},44808:(e,n,t)=>{var i=t(11504),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,r={},l=null,c=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)p.call(n,i)&&!o.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:l,ref:c,props:r,_owner:a.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>p});var i=t(11504);const s={},r=i.createContext(s);function p(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:p(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);