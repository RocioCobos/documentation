/*! For license information please see a4cebbfd.a5863863.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47644],{30632:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>o,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=t(17624),s=t(4552),a=t(11504);const r={id:"inventory-price-meal-plan-supplements-input",title:"InventoryPriceMealPlanSupplementsInput"},i=void 0,p={id:"inputs/inventory-price-meal-plan-supplements-input",title:"InventoryPriceMealPlanSupplementsInput",description:"Retrieve meal plan supplements price query input",source:"@site/api/inputs/inventory-price-meal-plan-supplements-input.mdx",sourceDirName:"inputs",slug:"/inputs/inventory-price-meal-plan-supplements-input",permalink:"/api/inputs/inventory-price-meal-plan-supplements-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-price-meal-plan-supplements-input",title:"InventoryPriceMealPlanSupplementsInput"},sidebar:"schemaSidebar",previous:{title:"InventoryPriceDerivedRatesInput",permalink:"/api/inputs/inventory-price-derived-rates-input"},next:{title:"InventoryPriceRatesInput",permalink:"/api/inputs/inventory-price-rates-input"}},c={},d=()=>{const e={span:"span",...(0,s.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},o=e=>{const n={a:"a",...(0,s.M)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryPriceMealPlanSupplementsInput.<b>clientCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypricemealplansupplementsinputclientcodestring--",level:4},{value:'<code>InventoryPriceMealPlanSupplementsInput.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypricemealplansupplementsinputsuppliercodestring--",level:4},{value:'<code>InventoryPriceMealPlanSupplementsInput.<b>mealPlanSupplements</b></code><Bullet></Bullet><code>[MealPlanSupplementRetrieveInput]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypricemealplansupplementsinputmealplansupplementsmealplansupplementretrieveinput--",level:4},{value:'<code>InventoryPriceMealPlanSupplementsInput.<b>hotelCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventorypricemealplansupplementsinputhotelcodestring--",level:4},{value:'<code>InventoryPriceMealPlanSupplementsInput.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventorypricemealplansupplementsinputcontextcodestring-",level:4}],g=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,s.M)()},[p,c]=(0,a.useState)(r);return(0,l.jsxs)(i.details,{...p?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:p?e:n}),p&&t]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Retrieve meal plan supplements price query input"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"input InventoryPriceMealPlanSupplementsInput {\n  clientCode: String!\n  supplierCode: String!\n  mealPlanSupplements: [MealPlanSupplementRetrieveInput]!\n  hotelCode: String!\n  contextCode: String\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(n.h4,{id:"inventorypricemealplansupplementsinputclientcodestring--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceMealPlanSupplementsInput.",(0,l.jsx)("b",{children:"clientCode"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/scalars/string",children:(0,l.jsx)(n.code,{children:"String!"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Client code."}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"inventorypricemealplansupplementsinputsuppliercodestring--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceMealPlanSupplementsInput.",(0,l.jsx)("b",{children:"supplierCode"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/scalars/string",children:(0,l.jsx)(n.code,{children:"String!"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Travelgate Supplier/Channel code."}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"inventorypricemealplansupplementsinputmealplansupplementsmealplansupplementretrieveinput--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceMealPlanSupplementsInput.",(0,l.jsx)("b",{children:"mealPlanSupplements"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/inputs/meal-plan-supplement-retrieve-input",children:(0,l.jsx)(n.code,{children:"[MealPlanSupplementRetrieveInput]!"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Hotel meal plan supplements input data."}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"inventorypricemealplansupplementsinputhotelcodestring--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceMealPlanSupplementsInput.",(0,l.jsx)("b",{children:"hotelCode"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/scalars/string",children:(0,l.jsx)(n.code,{children:"String!"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Code associated with the hotel."}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"inventorypricemealplansupplementsinputcontextcodestring-",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryPriceMealPlanSupplementsInput.",(0,l.jsx)("b",{children:"contextCode"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/scalars/string",children:(0,l.jsx)(n.code,{children:"String"})})," ",(0,l.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Context code."}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},44808:(e,n,t)=>{var l=t(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var l,a={},c=null,d=null;for(l in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,l)&&!p.hasOwnProperty(l)&&(a[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===a[l]&&(a[l]=n[l]);return{$$typeof:s,type:e,key:c,ref:d,props:a,_owner:i.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>r});var l=t(11504);const s={},a=l.createContext(s);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);