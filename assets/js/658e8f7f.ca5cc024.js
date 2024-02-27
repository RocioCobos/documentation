/*! For license information please see 658e8f7f.ca5cc024.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77912],{94424:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>x,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>y});var r=t(17624),o=t(4552),a=t(11504);const s={id:"inventory-tax-type",title:"InventoryTaxType"},i=void 0,l={id:"enums/inventory-tax-type",title:"InventoryTaxType",description:"Represents the type of tax for a rate.",source:"@site/api/enums/inventory-tax-type.mdx",sourceDirName:"enums",slug:"/enums/inventory-tax-type",permalink:"/api/enums/inventory-tax-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-tax-type",title:"InventoryTaxType"},sidebar:"schemaSidebar",previous:{title:"InventoryPaxType",permalink:"/api/enums/inventory-pax-type"},next:{title:"LifecycleStage",permalink:"/api/enums/lifecycle-stage"}},c={},d=()=>{const e={span:"span",...(0,o.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,o.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const n={span:"span",...(0,o.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},y=[{value:"Values",id:"values",level:3},{value:"<code>InventoryTaxType.<b>CITY</b></code>",id:"inventorytaxtypecity",level:4},{value:"<code>InventoryTaxType.<b>LOCAL</b></code>",id:"inventorytaxtypelocal",level:4},{value:"<code>InventoryTaxType.<b>RESORT_FEE</b></code>",id:"inventorytaxtyperesort_fee",level:4},{value:"<code>InventoryTaxType.<b>SUPPLEMENT_TO_BE_PAID_ON_SPOT</b></code>",id:"inventorytaxtypesupplement_to_be_paid_on_spot",level:4},{value:"Member Of",id:"member-of",level:3}],u=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,o.M)()},[l,c]=(0,a.useState)(s);return(0,r.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Represents the type of tax for a rate."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"enum InventoryTaxType {\n  CITY\n  LOCAL\n  RESORT_FEE\n  SUPPLEMENT_TO_BE_PAID_ON_SPOT\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(n.h4,{id:"inventorytaxtypecity",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryTaxType.",(0,r.jsx)("b",{children:"CITY"})]})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The tax is a city tax."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inventorytaxtypelocal",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryTaxType.",(0,r.jsx)("b",{children:"LOCAL"})]})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The tax is a local tax."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inventorytaxtyperesort_fee",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryTaxType.",(0,r.jsx)("b",{children:"RESORT_FEE"})]})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The tax is a resort fee."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inventorytaxtypesupplement_to_be_paid_on_spot",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryTaxType.",(0,r.jsx)("b",{children:"SUPPLEMENT_TO_BE_PAID_ON_SPOT"})]})})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The tax is a supplement to be paid on spot."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/objects/inventory-surcharge",children:(0,r.jsx)(n.code,{children:"InventorySurcharge"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/inputs/inventory-surcharge-input",children:(0,r.jsx)(n.code,{children:"InventorySurchargeInput"})})," ",(0,r.jsx)(x,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},44808:(e,n,t)=>{var r=t(11504),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,a={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:d,props:a,_owner:i.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>s});var r=t(11504);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);