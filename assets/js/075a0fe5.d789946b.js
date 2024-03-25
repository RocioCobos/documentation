/*! For license information please see 075a0fe5.d789946b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79988],{1928:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>v});var t=r(17624),d=r(4552),a=r(11504);const i={id:"inventory-load-price-derived-rates-input",title:"InventoryLoadPriceDerivedRatesInput"},s=void 0,o={id:"inputs/inventory-load-price-derived-rates-input",title:"InventoryLoadPriceDerivedRatesInput",description:"Load price derived rates mutation input",source:"@site/api/inputs/inventory-load-price-derived-rates-input.mdx",sourceDirName:"inputs",slug:"/inputs/inventory-load-price-derived-rates-input",permalink:"/api/inputs/inventory-load-price-derived-rates-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-load-price-derived-rates-input",title:"InventoryLoadPriceDerivedRatesInput"},sidebar:"schemaSidebar",previous:{title:"InventoryLoadAvailOffersInput",permalink:"/api/inputs/inventory-load-avail-offers-input"},next:{title:"InventoryLoadPriceMealPlanSupplementsInput",permalink:"/api/inputs/inventory-load-price-meal-plan-supplements-input"}},c={},l=()=>{const e={span:"span",...(0,d.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,d.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,d.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},v=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryLoadPriceDerivedRatesInput.<b>clientCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryloadpricederivedratesinputclientcodestring--",level:4},{value:'<code>InventoryLoadPriceDerivedRatesInput.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryloadpricederivedratesinputsuppliercodestring--",level:4},{value:'<code>InventoryLoadPriceDerivedRatesInput.<b>derivedRates</b></code><Bullet></Bullet><code>[DerivedRatePriceLoadInput]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryloadpricederivedratesinputderivedratesderivedratepriceloadinput--",level:4},{value:'<code>InventoryLoadPriceDerivedRatesInput.<b>hotelCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryloadpricederivedratesinputhotelcodestring--",level:4},{value:'<code>InventoryLoadPriceDerivedRatesInput.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryloadpricederivedratesinputcontextcodestring-",level:4}],g=({dataOpen:e,dataClose:n,children:r,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,d.M)()},[o,c]=(0,a.useState)(i);return(0,t.jsxs)(s.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&r]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Load price derived rates mutation input"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input InventoryLoadPriceDerivedRatesInput {\n  clientCode: String!\n  supplierCode: String!\n  derivedRates: [DerivedRatePriceLoadInput]!\n  hotelCode: String!\n  contextCode: String\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"inventoryloadpricederivedratesinputclientcodestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryLoadPriceDerivedRatesInput.",(0,t.jsx)("b",{children:"clientCode"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Client code."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"inventoryloadpricederivedratesinputsuppliercodestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryLoadPriceDerivedRatesInput.",(0,t.jsx)("b",{children:"supplierCode"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Travelgate Supplier/Channel code."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"inventoryloadpricederivedratesinputderivedratesderivedratepriceloadinput--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryLoadPriceDerivedRatesInput.",(0,t.jsx)("b",{children:"derivedRates"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/inputs/derived-rate-price-load-input",children:(0,t.jsx)(n.code,{children:"[DerivedRatePriceLoadInput]!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Hotel rates input data."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"inventoryloadpricederivedratesinputhotelcodestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryLoadPriceDerivedRatesInput.",(0,t.jsx)("b",{children:"hotelCode"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Code associated with the hotel."}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"inventoryloadpricederivedratesinputcontextcodestring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryLoadPriceDerivedRatesInput.",(0,t.jsx)("b",{children:"contextCode"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Context code."}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,d.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},44808:(e,n,r)=>{var t=r(11504),d=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,a={},c=null,l=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!o.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:d,type:e,key:c,ref:l,props:a,_owner:s.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},17624:(e,n,r)=>{e.exports=r(44808)},4552:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>i});var t=r(11504);const d={},a=t.createContext(d);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);