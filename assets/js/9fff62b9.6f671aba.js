/*! For license information please see 9fff62b9.6f671aba.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71916],{37628:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var r=t(17624),s=t(4552),a=t(11504);const i={id:"inventory-price-rates-input",title:"InventoryPriceRatesInput"},c=void 0,o={id:"inputs/inventory-price-rates-input",title:"InventoryPriceRatesInput",description:"Retrieve rates query input",source:"@site/api/inputs/inventory-price-rates-input.mdx",sourceDirName:"inputs",slug:"/inputs/inventory-price-rates-input",permalink:"/api/inputs/inventory-price-rates-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-price-rates-input",title:"InventoryPriceRatesInput"},sidebar:"schemaSidebar",previous:{title:"InventoryPriceMealPlanSupplementsInput",permalink:"/api/inputs/inventory-price-meal-plan-supplements-input"},next:{title:"InventoryRateSetupCreateInput",permalink:"/api/inputs/inventory-rate-setup-create-input"}},d={},l=()=>{const e={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryPriceRatesInput.<b>clientCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputclientcodestring--",level:4},{value:'<code>InventoryPriceRatesInput.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputsuppliercodestring--",level:4},{value:'<code>InventoryPriceRatesInput.<b>rates</b></code><Bullet></Bullet><code>[RatePriceRetrieveInput]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputratesratepriceretrieveinput--",level:4},{value:'<code>InventoryPriceRatesInput.<b>hotelCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputhotelcodestring--",level:4},{value:'<code>InventoryPriceRatesInput.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventorypriceratesinputcontextcodestring-",level:4}],h=({dataOpen:e,dataClose:n,children:t,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,s.M)()},[o,d]=(0,a.useState)(i);return(0,r.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Retrieve rates query input"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input InventoryPriceRatesInput {\n  clientCode: String!\n  supplierCode: String!\n  rates: [RatePriceRetrieveInput]!\n  hotelCode: String!\n  contextCode: String\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputclientcodestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"clientCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Client code."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputsuppliercodestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"supplierCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Travelgate Supplier/Channel code."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputratesratepriceretrieveinput--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"rates"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/inputs/rate-price-retrieve-input",children:(0,r.jsx)(n.code,{children:"[RatePriceRetrieveInput]!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Hotel rates input data."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputhotelcodestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"hotelCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Code associated with the hotel."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"inventorypriceratesinputcontextcodestring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceRatesInput.",(0,r.jsx)("b",{children:"contextCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Context code."}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},44808:(e,n,t)=>{var r=t(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,a={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!o.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:l,props:a,_owner:c.current}}n.Fragment=a,n.jsx=d,n.jsxs=d},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>i});var r=t(11504);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);