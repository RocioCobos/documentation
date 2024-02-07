/*! For license information please see fe44b107.28e5275f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95804],{86544:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>x,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>j,assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>b});var c=a(17624),d=a(4552),t=a(11504);const r={id:"node",title:"Node"},o=void 0,n={id:"interfaces/node",title:"Node",description:"No description",source:"@site/api/interfaces/node.mdx",sourceDirName:"interfaces",slug:"/interfaces/node",permalink:"/api/interfaces/node",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"node",title:"Node"},sidebar:"schemaSidebar",previous:{title:"GroupCommonData",permalink:"/api/interfaces/group-common-data"},next:{title:"Priceable",permalink:"/api/interfaces/priceable"}},i={},l=()=>{const e={span:"span",...(0,d.M)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},j=e=>{const s={a:"a",...(0,d.M)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,d.M)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Node.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"nodecodeid--",level:4},{value:'<code>Node.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"nodecreatedatdatetime--",level:4},{value:'<code>Node.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"nodeupdatedatdatetime--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],h=({dataOpen:e,dataClose:s,children:a,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,d.M)()},[n,i]=(0,t.useState)(r);return(0,c.jsxs)(o.details,{...n?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:n?e:s}),n&&a]})};function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"No description"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-graphql",children:"interface Node {\n  code: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,c.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(s.h4,{id:"nodecodeid--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Node.",(0,c.jsx)("b",{children:"code"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/scalars/id",children:(0,c.jsx)(s.code,{children:"ID!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"ID code"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"nodecreatedatdatetime--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Node.",(0,c.jsx)("b",{children:"createdAt"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,c.jsx)(s.code,{children:"DateTime!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Date created"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"nodeupdatedatdatetime--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["Node.",(0,c.jsx)("b",{children:"updatedAt"})]})}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,c.jsx)(s.code,{children:"DateTime!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Date updated"}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/api/objects/access",children:(0,c.jsx)(s.code,{children:"Access"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/activation",children:(0,c.jsx)(s.code,{children:"Activation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/airport",children:(0,c.jsx)(s.code,{children:"Airport"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/alert",children:(0,c.jsx)(s.code,{children:"Alert"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/alert-event",children:(0,c.jsx)(s.code,{children:"AlertEvent"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/api",children:(0,c.jsx)(s.code,{children:"API"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/audit-rule",children:(0,c.jsx)(s.code,{children:"AuditRule"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/board",children:(0,c.jsx)(s.code,{children:"Board"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/category",children:(0,c.jsx)(s.code,{children:"Category"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/client",children:(0,c.jsx)(s.code,{children:"Client"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/context",children:(0,c.jsx)(s.code,{children:"Context"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/destination",children:(0,c.jsx)(s.code,{children:"Destination"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/domain",children:(0,c.jsx)(s.code,{children:"Domain"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/entity",children:(0,c.jsx)(s.code,{children:"Entity"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-offer",children:(0,c.jsx)(s.code,{children:"FlightOffer"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-offer-item",children:(0,c.jsx)(s.code,{children:"FlightOfferItem"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-order",children:(0,c.jsx)(s.code,{children:"FlightOrder"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-order-item",children:(0,c.jsx)(s.code,{children:"FlightOrderItem"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-service",children:(0,c.jsx)(s.code,{children:"FlightService"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/geoname",children:(0,c.jsx)(s.code,{children:"Geoname"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/group",children:(0,c.jsx)(s.code,{children:"Group"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/group-content",children:(0,c.jsx)(s.code,{children:"GroupContent"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel",children:(0,c.jsx)(s.code,{children:"Hotel"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-runtime-configuration",children:(0,c.jsx)(s.code,{children:"HotelRuntimeConfiguration"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-xamenity",children:(0,c.jsx)(s.code,{children:"HotelXAmenity"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-xupdate-status",children:(0,c.jsx)(s.code,{children:"HotelXUpdateStatus"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/hub-provider",children:(0,c.jsx)(s.code,{children:"HubProvider"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/hub-user",children:(0,c.jsx)(s.code,{children:"HubUser"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/insights-xbooking-aggregation",children:(0,c.jsx)(s.code,{children:"InsightsXBookingAggregation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/insights-xbooking-detail",children:(0,c.jsx)(s.code,{children:"InsightsXBookingDetail"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/logging",children:(0,c.jsx)(s.code,{children:"Logging"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/logging-legacy",children:(0,c.jsx)(s.code,{children:"LoggingLegacy"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/managed-group",children:(0,c.jsx)(s.code,{children:"ManagedGroup"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/mapping-inscription",children:(0,c.jsx)(s.code,{children:"MappingInscription"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/member",children:(0,c.jsx)(s.code,{children:"Member"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/metadata",children:(0,c.jsx)(s.code,{children:"Metadata"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/operation",children:(0,c.jsx)(s.code,{children:"Operation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/organization",children:(0,c.jsx)(s.code,{children:"Organization"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/partner",children:(0,c.jsx)(s.code,{children:"Partner"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/password",children:(0,c.jsx)(s.code,{children:"Password"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/payment-card",children:(0,c.jsx)(s.code,{children:"PaymentCard"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/payment-xstored-card",children:(0,c.jsx)(s.code,{children:"PaymentXStoredCard"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/point-of-sale",children:(0,c.jsx)(s.code,{children:"PointOfSale"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/product",children:(0,c.jsx)(s.code,{children:"Product"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/provider",children:(0,c.jsx)(s.code,{children:"Provider"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/recommendation",children:(0,c.jsx)(s.code,{children:"Recommendation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/resource",children:(0,c.jsx)(s.code,{children:"Resource"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/role",children:(0,c.jsx)(s.code,{children:"Role"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/room-static",children:(0,c.jsx)(s.code,{children:"RoomStatic"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/stats",children:(0,c.jsx)(s.code,{children:"Stats"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/supplier",children:(0,c.jsx)(s.code,{children:"Supplier"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(l,{}),(0,c.jsx)(s.a,{href:"/api/objects/system",children:(0,c.jsx)(s.code,{children:"System"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:s}={...(0,d.M)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},44808:(e,s,a)=>{var c=a(11504),d=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,a){var c,t={},i=null,l=null;for(c in void 0!==a&&(i=""+a),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(l=s.ref),s)r.call(s,c)&&!n.hasOwnProperty(c)&&(t[c]=s[c]);if(e&&e.defaultProps)for(c in s=e.defaultProps)void 0===t[c]&&(t[c]=s[c]);return{$$typeof:d,type:e,key:i,ref:l,props:t,_owner:o.current}}s.Fragment=t,s.jsx=i,s.jsxs=i},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>o,M:()=>r});var c=a(11504);const d={},t=c.createContext(d);function r(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);