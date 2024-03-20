/*! For license information please see ff41e608.55619faf.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72384],{67300:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>h,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var r=n(17624),i=n(4552),a=n(11504);const s={id:"supplier-service-integration-data",title:"SupplierServiceIntegrationData"},o=void 0,l={id:"inputs/supplier-service-integration-data",title:"SupplierServiceIntegrationData",description:"No description",source:"@site/api/inputs/supplier-service-integration-data.mdx",sourceDirName:"inputs",slug:"/inputs/supplier-service-integration-data",permalink:"/api/inputs/supplier-service-integration-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"supplier-service-integration-data",title:"SupplierServiceIntegrationData"},sidebar:"schemaSidebar",previous:{title:"SupplierGiataUpdateInput",permalink:"/api/inputs/supplier-giata-update-input"},next:{title:"SupplierUpdateInput",permalink:"/api/inputs/supplier-update-input"}},c={},p=()=>{const e={span:"span",...(0,i.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,i.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,i.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>SupplierServiceIntegrationData.<b>type</b></code><Bullet></Bullet><code>ServiceIntegrationType</code> <Badge class="badge badge--secondary"></Badge>',id:"supplierserviceintegrationdatatypeserviceintegrationtype-",level:4},{value:'<code>SupplierServiceIntegrationData.<b>group</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"supplierserviceintegrationdatagroupstring-",level:4}],h=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,i.M)()},[l,c]=(0,a.useState)(s);return(0,r.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input SupplierServiceIntegrationData {\n  type: ServiceIntegrationType\n  group: String\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"supplierserviceintegrationdatatypeserviceintegrationtype-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierServiceIntegrationData.",(0,r.jsx)("b",{children:"type"})]})}),(0,r.jsx)(p,{}),(0,r.jsx)(t.a,{href:"/api/enums/service-integration-type",children:(0,r.jsx)(t.code,{children:"ServiceIntegrationType"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(t.h4,{id:"supplierserviceintegrationdatagroupstring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["SupplierServiceIntegrationData.",(0,r.jsx)("b",{children:"group"})]})}),(0,r.jsx)(p,{}),(0,r.jsx)(t.a,{href:"/api/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"})]})}function v(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},44808:(e,t,n)=>{var r=n(11504),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,p=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:p,props:a,_owner:o.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>s});var r=n(11504);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);