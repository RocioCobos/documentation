/*! For license information please see 4128008b.36d60330.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95616],{13712:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>j,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>x,assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var t=s(17624),c=s(4552),n=s(11504);const r={id:"float",title:"Float"},i=void 0,d={id:"scalars/float",title:"Float",description:"The Float scalar type represents signed double-precision fractional values as specified by IEEE 754.",source:"@site/api/scalars/float.mdx",sourceDirName:"scalars",slug:"/scalars/float",permalink:"/api/scalars/float",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"float",title:"Float"},sidebar:"schemaSidebar",previous:{title:"FlightNumber",permalink:"/api/scalars/flight-number"},next:{title:"ID",permalink:"/api/scalars/id"}},l={},o=()=>{const e={span:"span",...(0,c.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const a={a:"a",...(0,c.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const a={span:"span",...(0,c.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},p=[{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:a,children:s,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,c.M)()},[d,l]=(0,n.useState)(r);return(0,t.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&s]})};function b(e){const a={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"Float"})," scalar type represents signed double-precision fractional values as specified by ",(0,t.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/IEEE_floating_point",children:"IEEE 754"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"scalar Float\n"})}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/objects/aggregate-sum",children:(0,t.jsx)(a.code,{children:"AggregateSum"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/amend-penalty-input",children:(0,t.jsx)(a.code,{children:"AmendPenaltyInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/amount-cancel-penalty",children:(0,t.jsx)(a.code,{children:"AmountCancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/amount-type",children:(0,t.jsx)(a.code,{children:"AmountType"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/asset",children:(0,t.jsx)(a.code,{children:"Asset"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/asset-create-through-creating-other-subentity",children:(0,t.jsx)(a.code,{children:"AssetCreateThroughCreatingOtherSubentity"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/audit-data",children:(0,t.jsx)(a.code,{children:"AuditData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/booking-aggregation",children:(0,t.jsx)(a.code,{children:"BookingAggregation"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/cancel-penalty",children:(0,t.jsx)(a.code,{children:"CancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/cancel-penalty-input",children:(0,t.jsx)(a.code,{children:"CancelPenaltyInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/coordinates",children:(0,t.jsx)(a.code,{children:"Coordinates"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/delta-price-input",children:(0,t.jsx)(a.code,{children:"DeltaPriceInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/exchange",children:(0,t.jsx)(a.code,{children:"Exchange"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/ferry-cancel-penalty",children:(0,t.jsx)(a.code,{children:"FerryCancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/float-filter",children:(0,t.jsx)(a.code,{children:"FloatFilter"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/inventory-cancel-penalty",children:(0,t.jsx)(a.code,{children:"InventoryCancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/inventory-cancel-penalty-input",children:(0,t.jsx)(a.code,{children:"InventoryCancelPenaltyInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/inventory-payment-policies",children:(0,t.jsx)(a.code,{children:"InventoryPaymentPolicies"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/inventory-surcharge",children:(0,t.jsx)(a.code,{children:"InventorySurcharge"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/inventory-surcharge-input",children:(0,t.jsx)(a.code,{children:"InventorySurchargeInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/markup",children:(0,t.jsx)(a.code,{children:"Markup"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/nullable-float-filter",children:(0,t.jsx)(a.code,{children:"NullableFloatFilter"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/package-cancel-penalty",children:(0,t.jsx)(a.code,{children:"PackageCancelPenalty"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/package-price",children:(0,t.jsx)(a.code,{children:"PackagePrice"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/payment-policies-create-input",children:(0,t.jsx)(a.code,{children:"PaymentPoliciesCreateInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/payment-policies-update-input",children:(0,t.jsx)(a.code,{children:"PaymentPoliciesUpdateInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/price",children:(0,t.jsx)(a.code,{children:"Price"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/interfaces/priceable",children:(0,t.jsx)(a.code,{children:"Priceable"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"interface"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/price-change",children:(0,t.jsx)(a.code,{children:"PriceChange"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/price-input",children:(0,t.jsx)(a.code,{children:"PriceInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/price-static",children:(0,t.jsx)(a.code,{children:"PriceStatic"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/profile",children:(0,t.jsx)(a.code,{children:"Profile"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/profile-create-input",children:(0,t.jsx)(a.code,{children:"ProfileCreateInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/profile-data",children:(0,t.jsx)(a.code,{children:"ProfileData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/profile-update-input",children:(0,t.jsx)(a.code,{children:"ProfileUpdateInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/rate",children:(0,t.jsx)(a.code,{children:"Rate"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/rule",children:(0,t.jsx)(a.code,{children:"Rule"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/objects/stat",children:(0,t.jsx)(a.code,{children:"Stat"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(o,{}),(0,t.jsx)(a.a,{href:"/api/inputs/virtual-credit-card-input",children:(0,t.jsx)(a.code,{children:"VirtualCreditCardInput"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"input"})]})]})}function u(e={}){const{wrapper:a}={...(0,c.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},44808:(e,a,s)=>{var t=s(11504),c=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,s){var t,n={},l=null,o=null;for(t in void 0!==s&&(l=""+s),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(o=a.ref),a)r.call(a,t)&&!d.hasOwnProperty(t)&&(n[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===n[t]&&(n[t]=a[t]);return{$$typeof:c,type:e,key:l,ref:o,props:n,_owner:i.current}}a.Fragment=n,a.jsx=l,a.jsxs=l},17624:(e,a,s)=>{e.exports=s(44808)},4552:(e,a,s)=>{s.d(a,{I:()=>i,M:()=>r});var t=s(11504);const c={},n=t.createContext(c);function r(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);