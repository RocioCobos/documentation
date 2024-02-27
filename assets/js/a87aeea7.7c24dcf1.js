/*! For license information please see a87aeea7.7c24dcf1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35044],{5172:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var r=n(17624),s=n(4552),a=n(11504);const o={id:"inventory-rates-setup-create-input",title:"InventoryRatesSetupCreateInput"},d=void 0,i={id:"inputs/inventory-rates-setup-create-input",title:"InventoryRatesSetupCreateInput",description:"Rates Setup update mutation input",source:"@site/api/inputs/inventory-rates-setup-create-input.mdx",sourceDirName:"inputs",slug:"/inputs/inventory-rates-setup-create-input",permalink:"/api/inputs/inventory-rates-setup-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-rates-setup-create-input",title:"InventoryRatesSetupCreateInput"},sidebar:"schemaSidebar",previous:{title:"InventoryRateSetupUpdateInput",permalink:"/api/inputs/inventory-rate-setup-update-input"},next:{title:"InventoryRatesSetupFilterInput",permalink:"/api/inputs/inventory-rates-setup-filter-input"}},c={},l=()=>{const e={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryRatesSetupCreateInput.<b>clientCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratessetupcreateinputclientcodestring--",level:4},{value:'<code>InventoryRatesSetupCreateInput.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratessetupcreateinputsuppliercodestring--",level:4},{value:'<code>InventoryRatesSetupCreateInput.<b>rates</b></code><Bullet></Bullet><code>[InventoryRateSetupCreateInput]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratessetupcreateinputratesinventoryratesetupcreateinput--",level:4},{value:'<code>InventoryRatesSetupCreateInput.<b>hotelCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratessetupcreateinputhotelcodestring--",level:4},{value:'<code>InventoryRatesSetupCreateInput.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryratessetupcreateinputcontextcodestring-",level:4}],h=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,s.M)()},[i,c]=(0,a.useState)(o);return(0,r.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Rates Setup update mutation input"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input InventoryRatesSetupCreateInput {\n  clientCode: String!\n  supplierCode: String!\n  rates: [InventoryRateSetupCreateInput]!\n  hotelCode: String!\n  contextCode: String\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryratessetupcreateinputclientcodestring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRatesSetupCreateInput.",(0,r.jsx)("b",{children:"clientCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Client code."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryratessetupcreateinputsuppliercodestring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRatesSetupCreateInput.",(0,r.jsx)("b",{children:"supplierCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Travelgate Supplier/Channel code."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryratessetupcreateinputratesinventoryratesetupcreateinput--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRatesSetupCreateInput.",(0,r.jsx)("b",{children:"rates"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/inputs/inventory-rate-setup-create-input",children:(0,r.jsx)(t.code,{children:"[InventoryRateSetupCreateInput]!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Hotel input data."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryratessetupcreateinputhotelcodestring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRatesSetupCreateInput.",(0,r.jsx)("b",{children:"hotelCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/scalars/string",children:(0,r.jsx)(t.code,{children:"String!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Hotel codes of the rooms to retrieve."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"inventoryratessetupcreateinputcontextcodestring-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryRatesSetupCreateInput.",(0,r.jsx)("b",{children:"contextCode"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(t.a,{href:"/api/scalars/string",children:(0,r.jsx)(t.code,{children:"String"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Travelgate Supplier/Channel context code."}),"\n"]})]})}function y(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},44808:(e,t,n)=>{var r=n(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:l,props:a,_owner:d.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>d,M:()=>o});var r=n(11504);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);