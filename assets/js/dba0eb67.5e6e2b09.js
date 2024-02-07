/*! For license information please see dba0eb67.5e6e2b09.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33120],{45524:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>j,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>p,assets:()=>n,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var d=s(17624),t=s(4552),r=s(11504);const l={id:"supplier",title:"Supplier"},c=void 0,i={id:"objects/supplier",title:"Supplier",description:"A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers",source:"@site/api/objects/supplier.mdx",sourceDirName:"objects",slug:"/objects/supplier",permalink:"/api/objects/supplier",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"supplier",title:"Supplier"},sidebar:"schemaSidebar",previous:{title:"SupplierEdge",permalink:"/api/objects/supplier-edge"},next:{title:"Surcharge",permalink:"/api/objects/surcharge"}},n={},o=()=>{const e={span:"span",...(0,t.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,t.M)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const a={span:"span",...(0,t.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>Supplier.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliercodeid--",level:4},{value:'<code>Supplier.<b>supplierData</b></code><Bullet></Bullet><code>SupplierData</code> <Badge class="badge badge--secondary"></Badge>',id:"suppliersupplierdatasupplierdata-",level:4},{value:'<code>Supplier.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplieradvisemessageadvisemessage--",level:4},{value:'<code>Supplier.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplieradvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Supplier.<b>error</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliererrorerror---",level:4},{value:'<code>Supplier.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"suppliercreatedatdatetime--",level:4},{value:'<code>Supplier.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"supplierupdatedatdatetime--",level:4},{value:'<code>Supplier.<b>deletedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"supplierdeletedatdatetime-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],x=({dataOpen:e,dataClose:a,children:s,startOpen:l=!1})=>{const c={details:"details",summary:"summary",...(0,t.M)()},[i,n]=(0,r.useState)(l);return(0,d.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),n((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&s]})};function h(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"A Supplier is a Partner who is connected to TravelgateX on the supply side in order to sell their product to connected Buyers"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type Supplier implements Node {\n  code: ID!\n  supplierData: SupplierData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  error: [Error!] @deprecated\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  deletedAt: DateTime\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"suppliercodeid--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/scalars/id",children:(0,d.jsx)(a.code,{children:"ID!"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Supplier unique code"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"suppliersupplierdatasupplierdata-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,d.jsx)("b",{children:"supplierData"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/supplier-data",children:(0,d.jsx)(a.code,{children:"SupplierData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Extended Supplier information"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"supplieradvisemessageadvisemessage--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,d.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"List of advise messages."}),"\n",(0,d.jsxs)(a.h5,{id:"supplieradvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,d.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"suppliererrorerror---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,d.jsx)("b",{children:"error"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/error",children:(0,d.jsx)(a.code,{children:"[Error!]"})})," ",(0,d.jsx)(j,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.admonition,{title:"DEPRECATED",type:"warning",children:(0,d.jsx)(a.p,{children:"deprecated from 2019-01-01. Use AdviseMessage instead"})}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"suppliercreatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Supplier creation date"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"supplierupdatedatdatetime--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime!"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Supplier last update date"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"supplierdeletedatdatetime-",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Supplier.",(0,d.jsx)("b",{children:"deletedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(a.code,{children:"DateTime"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Supplier deleted date"}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(a.h4,{id:"node-",children:[(0,d.jsx)(a.a,{href:"/api/interfaces/node",children:(0,d.jsx)(a.code,{children:"Node"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/objects/access-data",children:(0,d.jsx)(a.code,{children:"AccessData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/admin-mutation",children:(0,d.jsx)(a.code,{children:"AdminMutation"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/admin-query",children:(0,d.jsx)(a.code,{children:"AdminQuery"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/audit-rule-data",children:(0,d.jsx)(a.code,{children:"AuditRuleData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/booking-aggregation",children:(0,d.jsx)(a.code,{children:"BookingAggregation"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/booking-detail",children:(0,d.jsx)(a.code,{children:"BookingDetail"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/flight-offer-data",children:(0,d.jsx)(a.code,{children:"FlightOfferData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/flight-order-data",children:(0,d.jsx)(a.code,{children:"FlightOrderData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/payment-card-data",children:(0,d.jsx)(a.code,{children:"PaymentCardData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/stats-aggregation-data",children:(0,d.jsx)(a.code,{children:"StatsAggregationData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/supplier-edge",children:(0,d.jsx)(a.code,{children:"SupplierEdge"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/system-data",children:(0,d.jsx)(a.code,{children:"SystemData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/traffic-optimization-hotel-blacklist-data",children:(0,d.jsx)(a.code,{children:"TrafficOptimizationHotelBlacklistData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/traffic-optimization-hotel-stats-aggregation-data",children:(0,d.jsx)(a.code,{children:"TrafficOptimizationHotelStatsAggregationData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(a.a,{href:"/api/objects/traffic-optimization-stats-aggregation-data",children:(0,d.jsx)(a.code,{children:"TrafficOptimizationStatsAggregationData"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(a.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/unions/alert-objects-union",children:(0,d.jsx)(a.code,{children:"AlertObjectsUnion"})})," ",(0,d.jsx)(j,{class:"badge badge--secondary",text:"union"})]})]})}function b(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},44808:(e,a,s)=>{var d=s(11504),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function n(e,a,s){var d,r={},n=null,o=null;for(d in void 0!==s&&(n=""+s),void 0!==a.key&&(n=""+a.key),void 0!==a.ref&&(o=a.ref),a)l.call(a,d)&&!i.hasOwnProperty(d)&&(r[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===r[d]&&(r[d]=a[d]);return{$$typeof:t,type:e,key:n,ref:o,props:r,_owner:c.current}}a.Fragment=r,a.jsx=n,a.jsxs=n},17624:(e,a,s)=>{e.exports=s(44808)},4552:(e,a,s)=>{s.d(a,{I:()=>c,M:()=>l});var d=s(11504);const t={},r=d.createContext(t);function l(e){const a=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),d.createElement(r.Provider,{value:a},e.children)}}}]);