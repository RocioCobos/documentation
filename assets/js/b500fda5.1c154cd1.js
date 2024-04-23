/*! For license information please see b500fda5.1c154cd1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67658],{29624:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=n(17624),d=n(4552),s=n(11504);const i={id:"rate-update-input",title:"RateUpdateInput"},l=void 0,c={id:"inputs/rate-update-input",title:"RateUpdateInput",description:"Represents a rate update object.",source:"@site/api/inputs/rate-update-input.mdx",sourceDirName:"inputs",slug:"/inputs/rate-update-input",permalink:"/api/inputs/rate-update-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"rate-update-input",title:"RateUpdateInput"},sidebar:"schemaSidebar",previous:{title:"RateRulesFilterInput",permalink:"/api/inputs/rate-rules-filter-input"},next:{title:"RecommendationsWhereInput",permalink:"/api/inputs/recommendations-where-input"}},r={},o=()=>{const e={span:"span",...(0,d.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,d.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,d.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>RateUpdateInput.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputcodestring--",level:4},{value:'<code>RateUpdateInput.<b>baseRateCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputbaseratecodestring-",level:4},{value:'<code>RateUpdateInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputnamestring-",level:4},{value:'<code>RateUpdateInput.<b>active</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputactiveboolean-",level:4},{value:'<code>RateUpdateInput.<b>mealPlanIncluded</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputmealplanincludedint-",level:4},{value:'<code>RateUpdateInput.<b>agePolicies</b></code><Bullet></Bullet><code>AgePoliciesUpdateInput</code> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputagepoliciesagepoliciesupdateinput-",level:4},{value:'<code>RateUpdateInput.<b>paymentPolicies</b></code><Bullet></Bullet><code>PaymentPoliciesUpdateInput</code> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputpaymentpoliciespaymentpoliciesupdateinput-",level:4},{value:'<code>RateUpdateInput.<b>bookingRules</b></code><Bullet></Bullet><code>InventoryBookingRulesInput</code> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputbookingrulesinventorybookingrulesinput-",level:4},{value:'<code>RateUpdateInput.<b>cancelPolicies</b></code><Bullet></Bullet><code>CancelPoliciesUpdateInput</code> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputcancelpoliciescancelpoliciesupdateinput-",level:4},{value:'<code>RateUpdateInput.<b>amendPolicy</b></code><Bullet></Bullet><code>AmendPolicyUpdateInput</code> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputamendpolicyamendpolicyupdateinput-",level:4},{value:'<code>RateUpdateInput.<b>surcharges</b></code><Bullet></Bullet><code>[InventorySurchargeInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rateupdateinputsurchargesinventorysurchargeinput--",level:4},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const l={details:"details",summary:"summary",...(0,d.M)()},[c,r]=(0,s.useState)(i);return(0,a.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Represents a rate update object."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input RateUpdateInput {\n  code: String!\n  baseRateCode: String\n  name: String\n  active: Boolean\n  mealPlanIncluded: Int\n  agePolicies: AgePoliciesUpdateInput\n  paymentPolicies: PaymentPoliciesUpdateInput\n  bookingRules: InventoryBookingRulesInput\n  cancelPolicies: CancelPoliciesUpdateInput\n  amendPolicy: AmendPolicyUpdateInput\n  surcharges: [InventorySurchargeInput]\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputcodestring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Code associated with the rate."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputbaseratecodestring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"baseRateCode"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Base rate code of the rate."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputnamestring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Name of the rate."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputactiveboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"active"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Indicates whether the rate is active."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputmealplanincludedint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"mealPlanIncluded"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Meal plan included in the rate."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputagepoliciesagepoliciesupdateinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"agePolicies"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/inputs/age-policies-update-input",children:(0,a.jsx)(t.code,{children:"AgePoliciesUpdateInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Age policies associated with the rate. See AgePoliciesUpdate."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputpaymentpoliciespaymentpoliciesupdateinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"paymentPolicies"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/inputs/payment-policies-update-input",children:(0,a.jsx)(t.code,{children:"PaymentPoliciesUpdateInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Payment policies associated with the rate. See PaymentPoliciesUpdate."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputbookingrulesinventorybookingrulesinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"bookingRules"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/inputs/inventory-booking-rules-input",children:(0,a.jsx)(t.code,{children:"InventoryBookingRulesInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Booking rules associated with the rate. See BookingRules."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputcancelpoliciescancelpoliciesupdateinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"cancelPolicies"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/inputs/cancel-policies-update-input",children:(0,a.jsx)(t.code,{children:"CancelPoliciesUpdateInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Cancel policies associated with the rate. See CancelPoliciesUpdate."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputamendpolicyamendpolicyupdateinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"amendPolicy"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/inputs/amend-policy-update-input",children:(0,a.jsx)(t.code,{children:"AmendPolicyUpdateInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Amend policy associated with the rate. See AmendPolicyUpdate."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"rateupdateinputsurchargesinventorysurchargeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["RateUpdateInput.",(0,a.jsx)("b",{children:"surcharges"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/inputs/inventory-surcharge-input",children:(0,a.jsx)(t.code,{children:"[InventorySurchargeInput]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"List of surcharges associated with the rate. See Surcharge."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/inputs/inventory-rate-setup-update-input",children:(0,a.jsx)(t.code,{children:"InventoryRateSetupUpdateInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function j(e={}){const{wrapper:t}={...(0,d.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},44808:(e,t,n)=>{var a=n(11504),d=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function r(e,t,n){var a,s={},r=null,o=null;for(a in void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(o=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:d,type:e,key:r,ref:o,props:s,_owner:l.current}}t.Fragment=s,t.jsx=r,t.jsxs=r},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>i});var a=n(11504);const d={},s=a.createContext(d);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);