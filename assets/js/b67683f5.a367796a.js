/*! For license information please see b67683f5.a367796a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10972],{96139:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var a=r(74848),s=r(28453),t=r(96540);const o={id:"inventory-surcharge",title:"InventorySurcharge"},c=void 0,l={id:"types/objects/inventory-surcharge",title:"InventorySurcharge",description:"Represents a surcharge applied to a rate.",source:"@site/api/types/objects/inventory-surcharge.mdx",sourceDirName:"types/objects",slug:"/types/objects/inventory-surcharge",permalink:"/api/types/objects/inventory-surcharge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-surcharge",title:"InventorySurcharge"},sidebar:"schemaSidebar",previous:{title:"InventoryRoom",permalink:"/api/types/objects/inventory-room"},next:{title:"ItineraryMap",permalink:"/api/types/objects/itinerary-map"}},d={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,s.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,s.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:n,children:r,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[l,d]=(0,t.useState)(o);return(0,a.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&r]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InventorySurcharge.<b>chargeType</b></code><Bullet></Bullet><code>InventoryChargeType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorysurchargechargetypeinventorychargetype--",level:4},{value:'<code>InventorySurcharge.<b>taxType</b></code><Bullet></Bullet><code>InventoryTaxType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorysurchargetaxtypeinventorytaxtype--",level:4},{value:'<code>InventorySurcharge.<b>value</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorysurchargevaluefloat--",level:4},{value:'<code>InventorySurcharge.<b>applyType</b></code><Bullet></Bullet><code>InventoryApplyType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorysurchargeapplytypeinventoryapplytype--",level:4},{value:'<code>InventorySurcharge.<b>perNight</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorysurchargepernightboolean--",level:4},{value:'<code>InventorySurcharge.<b>perPax</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorysurchargeperpaxboolean--",level:4},{value:"Member Of",id:"member-of",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Represents a surcharge applied to a rate."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type InventorySurcharge {\n  chargeType: InventoryChargeType!\n  taxType: InventoryTaxType!\n  value: Float!\n  applyType: InventoryApplyType!\n  perNight: Boolean!\n  perPax: Boolean!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"inventorysurchargechargetypeinventorychargetype--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventorySurcharge.",(0,a.jsx)("b",{children:"chargeType"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/api/types/enums/inventory-charge-type",children:(0,a.jsx)(n.code,{children:"InventoryChargeType!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Indicates if the surcharge is included or not in the price."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"inventorysurchargetaxtypeinventorytaxtype--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventorySurcharge.",(0,a.jsx)("b",{children:"taxType"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/api/types/enums/inventory-tax-type",children:(0,a.jsx)(n.code,{children:"InventoryTaxType!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The type of tax applied to the surcharge."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"inventorysurchargevaluefloat--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventorySurcharge.",(0,a.jsx)("b",{children:"value"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/float",children:(0,a.jsx)(n.code,{children:"Float!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The value of the surcharge."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"inventorysurchargeapplytypeinventoryapplytype--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventorySurcharge.",(0,a.jsx)("b",{children:"applyType"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/api/types/enums/inventory-apply-type",children:(0,a.jsx)(n.code,{children:"InventoryApplyType!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The type of application for the surcharge."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"inventorysurchargepernightboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventorySurcharge.",(0,a.jsx)("b",{children:"perNight"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Indicates whether the surcharge is applied per night."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"inventorysurchargeperpaxboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["InventorySurcharge.",(0,a.jsx)("b",{children:"perPax"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/api/types/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Indicates whether the surcharge is applied per person."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/types/objects/inventory-rate-setup",children:(0,a.jsx)(n.code,{children:"InventoryRateSetup"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},21020:(e,n,r)=>{var a=r(96540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var a,t={},d=null,i=null;for(a in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(i=n.ref),n)o.call(n,a)&&!l.hasOwnProperty(a)&&(t[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===t[a]&&(t[a]=n[a]);return{$$typeof:s,type:e,key:d,ref:i,props:t,_owner:c.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var a=r(96540);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);