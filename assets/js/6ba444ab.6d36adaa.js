/*! For license information please see 6ba444ab.6d36adaa.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69232],{15932:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>x,Bullet:()=>j,Details:()=>h,SpecifiedBy:()=>l,assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>b});var c=a(17624),t=a(4552),o=a(11504);const d={id:"advise-message",title:"AdviseMessage"},n=void 0,r={id:"objects/advise-message",title:"AdviseMessage",description:"List of advise messages (errors, warnings and/or info messages).",source:"@site/api/objects/advise-message.mdx",sourceDirName:"objects",slug:"/objects/advise-message",permalink:"/api/objects/advise-message",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"advise-message",title:"AdviseMessage"},sidebar:"schemaSidebar",previous:{title:"AdminQuery",permalink:"/api/objects/admin-query"},next:{title:"AgeRange",permalink:"/api/objects/age-range"}},i={},j=()=>{const e={span:"span",...(0,t.M)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const s={a:"a",...(0,t.M)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const s={span:"span",...(0,t.M)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AdviseMessage.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"advisemessagecodeid--",level:4},{value:'<code>AdviseMessage.<b>type</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"advisemessagetypestring---",level:4},{value:'<code>AdviseMessage.<b>description</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"advisemessagedescriptionstring--",level:4},{value:'<code>AdviseMessage.<b>level</b></code><Bullet></Bullet><code>AdviseMessageLevel!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"advisemessageleveladvisemessagelevel--",level:4},{value:'<code>AdviseMessage.<b>external</b></code><Bullet></Bullet><code>ExternalMessage</code> <Badge class="badge badge--secondary"></Badge>',id:"advisemessageexternalexternalmessage-",level:4},{value:'<code>AdviseMessage.<b>correlationID</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"advisemessagecorrelationidid--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:s,children:a,startOpen:d=!1})=>{const n={details:"details",summary:"summary",...(0,t.M)()},[r,i]=(0,o.useState)(d);return(0,c.jsxs)(n.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(n.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&a]})};function g(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"List of advise messages (errors, warnings and/or info messages)."}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-graphql",children:"type AdviseMessage {\n  code: ID!\n  type: String! @deprecated\n  description: String!\n  level: AdviseMessageLevel!\n  external: ExternalMessage\n  correlationID: ID!\n}\n"})}),"\n",(0,c.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(s.h4,{id:"advisemessagecodeid--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AdviseMessage.",(0,c.jsx)("b",{children:"code"})]})}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/scalars/id",children:(0,c.jsx)(s.code,{children:"ID!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"AM code: The following codes can be returned:"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"advisemessagetypestring---",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AdviseMessage.",(0,c.jsx)("b",{children:"type"})]})}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/scalars/string",children:(0,c.jsx)(s.code,{children:"String!"})})," ",(0,c.jsx)(x,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.admonition,{title:"DEPRECATED",type:"warning",children:(0,c.jsx)(s.p,{children:"deprecated from 2018-06-01."})}),"\n",(0,c.jsx)(s.p,{children:"Error type: The following types are valid:[type]"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"advisemessagedescriptionstring--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AdviseMessage.",(0,c.jsx)("b",{children:"description"})]})}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/scalars/string",children:(0,c.jsx)(s.code,{children:"String!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Error description"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"advisemessageleveladvisemessagelevel--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AdviseMessage.",(0,c.jsx)("b",{children:"level"})]})}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,c.jsx)(s.code,{children:"AdviseMessageLevel!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Indicates the level of importance of the message.\nPossible values: ERROR, WARN, INFO."}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"advisemessageexternalexternalmessage-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AdviseMessage.",(0,c.jsx)("b",{children:"external"})]})}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/external-message",children:(0,c.jsx)(s.code,{children:"ExternalMessage"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Specify the external message."}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"advisemessagecorrelationidid--",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AdviseMessage.",(0,c.jsx)("b",{children:"correlationID"})]})}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/scalars/id",children:(0,c.jsx)(s.code,{children:"ID!"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Identifier to investigate the cause of the error."}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.a,{href:"/api/objects/access",children:(0,c.jsx)(s.code,{children:"Access"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/access-connection",children:(0,c.jsx)(s.code,{children:"AccessConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/activation",children:(0,c.jsx)(s.code,{children:"Activation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/activation-connection",children:(0,c.jsx)(s.code,{children:"ActivationConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/airport",children:(0,c.jsx)(s.code,{children:"Airport"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/alert",children:(0,c.jsx)(s.code,{children:"Alert"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/alert-event",children:(0,c.jsx)(s.code,{children:"AlertEvent"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/all-group",children:(0,c.jsx)(s.code,{children:"AllGroup"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/all-groups-connection",children:(0,c.jsx)(s.code,{children:"AllGroupsConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/api",children:(0,c.jsx)(s.code,{children:"API"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/apidata",children:(0,c.jsx)(s.code,{children:"APIData"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/audit-rule",children:(0,c.jsx)(s.code,{children:"AuditRule"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/audit-rule-connection",children:(0,c.jsx)(s.code,{children:"AuditRuleConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/audit-rule-data",children:(0,c.jsx)(s.code,{children:"AuditRuleData"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/avail-derived-rates-rs",children:(0,c.jsx)(s.code,{children:"AvailDerivedRatesRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/avail-offers-rs",children:(0,c.jsx)(s.code,{children:"AvailOffersRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/avail-rates-rs",children:(0,c.jsx)(s.code,{children:"AvailRatesRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/avail-retrieve-rs",children:(0,c.jsx)(s.code,{children:"AvailRetrieveRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/board",children:(0,c.jsx)(s.code,{children:"Board"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/booking-payload",children:(0,c.jsx)(s.code,{children:"BookingPayload"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/book-payload",children:(0,c.jsx)(s.code,{children:"BookPayload"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/cancel-payload",children:(0,c.jsx)(s.code,{children:"CancelPayload"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/categories-rs",children:(0,c.jsx)(s.code,{children:"CategoriesRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/category",children:(0,c.jsx)(s.code,{children:"Category"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/certification",children:(0,c.jsx)(s.code,{children:"Certification"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/certification-connection",children:(0,c.jsx)(s.code,{children:"CertificationConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/certification-result",children:(0,c.jsx)(s.code,{children:"CertificationResult"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/client",children:(0,c.jsx)(s.code,{children:"Client"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/client-connection",children:(0,c.jsx)(s.code,{children:"ClientConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/connection",children:(0,c.jsx)(s.code,{children:"Connection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/connection-connection",children:(0,c.jsx)(s.code,{children:"ConnectionConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/content-payload",children:(0,c.jsx)(s.code,{children:"ContentPayload"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/context",children:(0,c.jsx)(s.code,{children:"Context"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/destination",children:(0,c.jsx)(s.code,{children:"Destination"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/domain",children:(0,c.jsx)(s.code,{children:"Domain"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/entity",children:(0,c.jsx)(s.code,{children:"Entity"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/entity-audit",children:(0,c.jsx)(s.code,{children:"EntityAudit"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/entity-audit-connection",children:(0,c.jsx)(s.code,{children:"EntityAuditConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/ferry-cancel-payload",children:(0,c.jsx)(s.code,{children:"FerryCancelPayload"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/ferry-offer",children:(0,c.jsx)(s.code,{children:"FerryOffer"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/ferry-order-payload",children:(0,c.jsx)(s.code,{children:"FerryOrderPayload"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/ferry-quote-payload",children:(0,c.jsx)(s.code,{children:"FerryQuotePayload"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/ferry-search-connection",children:(0,c.jsx)(s.code,{children:"FerrySearchConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-offer",children:(0,c.jsx)(s.code,{children:"FlightOffer"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-offer-item",children:(0,c.jsx)(s.code,{children:"FlightOfferItem"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-order",children:(0,c.jsx)(s.code,{children:"FlightOrder"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-order-item",children:(0,c.jsx)(s.code,{children:"FlightOrderItem"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/flight-service",children:(0,c.jsx)(s.code,{children:"FlightService"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/geoname",children:(0,c.jsx)(s.code,{children:"Geoname"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/get-meal-plans-rs",children:(0,c.jsx)(s.code,{children:"GetMealPlansRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/group",children:(0,c.jsx)(s.code,{children:"Group"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/group-connection",children:(0,c.jsx)(s.code,{children:"GroupConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/group-content",children:(0,c.jsx)(s.code,{children:"GroupContent"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel",children:(0,c.jsx)(s.code,{children:"Hotel"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-booking-amend",children:(0,c.jsx)(s.code,{children:"HotelBookingAmend"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-one-step-book",children:(0,c.jsx)(s.code,{children:"HotelOneStepBook"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-one-step-quote",children:(0,c.jsx)(s.code,{children:"HotelOneStepQuote"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-runtime-configuration",children:(0,c.jsx)(s.code,{children:"HotelRuntimeConfiguration"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotels-rs",children:(0,c.jsx)(s.code,{children:"HotelsRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotels-setup-rs",children:(0,c.jsx)(s.code,{children:"HotelsSetupRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-xamenity",children:(0,c.jsx)(s.code,{children:"HotelXAmenity"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-xcommon-settings",children:(0,c.jsx)(s.code,{children:"HotelXCommonSettings"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-xdefault-settings",children:(0,c.jsx)(s.code,{children:"HotelXDefaultSettings"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-xmapping-report-response",children:(0,c.jsx)(s.code,{children:"HotelXMappingReportResponse"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hotel-xupdate-status",children:(0,c.jsx)(s.code,{children:"HotelXUpdateStatus"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hub-provider",children:(0,c.jsx)(s.code,{children:"HubProvider"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/hub-user",children:(0,c.jsx)(s.code,{children:"HubUser"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/insights-xbooking-aggregation",children:(0,c.jsx)(s.code,{children:"InsightsXBookingAggregation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/insights-xbooking-aggregation-connection",children:(0,c.jsx)(s.code,{children:"InsightsXBookingAggregationConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/insights-xbooking-detail",children:(0,c.jsx)(s.code,{children:"InsightsXBookingDetail"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/insights-xbooking-detail-connection",children:(0,c.jsx)(s.code,{children:"InsightsXBookingDetailConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/insights-xbooking-report",children:(0,c.jsx)(s.code,{children:"InsightsXBookingReport"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/localities-rs",children:(0,c.jsx)(s.code,{children:"LocalitiesRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/logging",children:(0,c.jsx)(s.code,{children:"Logging"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/logging-legacy",children:(0,c.jsx)(s.code,{children:"LoggingLegacy"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/macro-permission",children:(0,c.jsx)(s.code,{children:"MacroPermission"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/managed-group",children:(0,c.jsx)(s.code,{children:"ManagedGroup"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/mapping-inscription",children:(0,c.jsx)(s.code,{children:"MappingInscription"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/member",children:(0,c.jsx)(s.code,{children:"Member"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/member-connection",children:(0,c.jsx)(s.code,{children:"MemberConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/members",children:(0,c.jsx)(s.code,{children:"Members"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/members-connection",children:(0,c.jsx)(s.code,{children:"MembersConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/metadata",children:(0,c.jsx)(s.code,{children:"Metadata"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/metadata-connection",children:(0,c.jsx)(s.code,{children:"MetadataConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/offers-rs",children:(0,c.jsx)(s.code,{children:"OffersRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/operation",children:(0,c.jsx)(s.code,{children:"Operation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/organization",children:(0,c.jsx)(s.code,{children:"Organization"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/organization-connection",children:(0,c.jsx)(s.code,{children:"OrganizationConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/organizations",children:(0,c.jsx)(s.code,{children:"Organizations"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/organizations-connection",children:(0,c.jsx)(s.code,{children:"OrganizationsConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/partner",children:(0,c.jsx)(s.code,{children:"Partner"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/partner-connection",children:(0,c.jsx)(s.code,{children:"PartnerConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/password",children:(0,c.jsx)(s.code,{children:"Password"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/payment-card",children:(0,c.jsx)(s.code,{children:"PaymentCard"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/performance-data",children:(0,c.jsx)(s.code,{children:"PerformanceData"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/point-of-sale",children:(0,c.jsx)(s.code,{children:"PointOfSale"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/price-derived-rates-rs",children:(0,c.jsx)(s.code,{children:"PriceDerivedRatesRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/price-meal-plan-supplements-rs",children:(0,c.jsx)(s.code,{children:"PriceMealPlanSupplementsRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/price-rates-rs",children:(0,c.jsx)(s.code,{children:"PriceRatesRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/product",children:(0,c.jsx)(s.code,{children:"Product"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/product-data",children:(0,c.jsx)(s.code,{children:"ProductData"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/profile-connection",children:(0,c.jsx)(s.code,{children:"ProfileConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/profile-v2",children:(0,c.jsx)(s.code,{children:"ProfileV2"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/provider",children:(0,c.jsx)(s.code,{children:"Provider"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/quote-payload",children:(0,c.jsx)(s.code,{children:"QuotePayload"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/rates-rs",children:(0,c.jsx)(s.code,{children:"RatesRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/rates-set-up-rs",children:(0,c.jsx)(s.code,{children:"RatesSetUpRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/recommendation",children:(0,c.jsx)(s.code,{children:"Recommendation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/recommendations-connection",children:(0,c.jsx)(s.code,{children:"RecommendationsConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/resource",children:(0,c.jsx)(s.code,{children:"Resource"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/role",children:(0,c.jsx)(s.code,{children:"Role"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/rooms-rs",children:(0,c.jsx)(s.code,{children:"RoomsRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/rooms-set-up-rs",children:(0,c.jsx)(s.code,{children:"RoomsSetUpRs"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/room-static",children:(0,c.jsx)(s.code,{children:"RoomStatic"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/search-criteria",children:(0,c.jsx)(s.code,{children:"SearchCriteria"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/search-criteria-connection",children:(0,c.jsx)(s.code,{children:"SearchCriteriaConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/search-option",children:(0,c.jsx)(s.code,{children:"SearchOption"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/search-payload",children:(0,c.jsx)(s.code,{children:"SearchPayload"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/social-category",children:(0,c.jsx)(s.code,{children:"SocialCategory"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/social-category-connection",children:(0,c.jsx)(s.code,{children:"SocialCategoryConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/social-sub-category",children:(0,c.jsx)(s.code,{children:"SocialSubCategory"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/social-sub-category-connection",children:(0,c.jsx)(s.code,{children:"SocialSubCategoryConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/speed-access",children:(0,c.jsx)(s.code,{children:"SpeedAccess"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/speed-access-collection",children:(0,c.jsx)(s.code,{children:"SpeedAccessCollection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/speed-connection",children:(0,c.jsx)(s.code,{children:"SpeedConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/speed-connection-collection",children:(0,c.jsx)(s.code,{children:"SpeedConnectionCollection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/speed-mutation",children:(0,c.jsx)(s.code,{children:"SpeedMutation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/stats",children:(0,c.jsx)(s.code,{children:"Stats"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/stats-aggregation",children:(0,c.jsx)(s.code,{children:"StatsAggregation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/stats-aggregation-connection",children:(0,c.jsx)(s.code,{children:"StatsAggregationConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/stats-connection",children:(0,c.jsx)(s.code,{children:"StatsConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/stats-real-time-range",children:(0,c.jsx)(s.code,{children:"StatsRealTimeRange"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/supplier",children:(0,c.jsx)(s.code,{children:"Supplier"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/supplier-connection",children:(0,c.jsx)(s.code,{children:"SupplierConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-access",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationAccess"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-access-connection",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationAccessConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-aggregation-performance-stats-connection",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationAggregationPerformanceStatsConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-connection",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-connection-connection",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationConnectionConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-hotel-blacklist",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationHotelBlacklist"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-hotel-blacklist-connection",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationHotelBlacklistConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-hotel-stats-aggregation",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationHotelStatsAggregation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-hotel-stats-aggregation-connection",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationHotelStatsAggregationConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-performance-stats",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationPerformanceStats"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-recommendations-all-accesses",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationRecommendationsAllAccesses"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-stats-access-hotel-blacklist",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationStatsAccessHotelBlacklist"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-stats-aggregation",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationStatsAggregation"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-stats-aggregation-connection",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationStatsAggregationConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/traffic-optimization-stats-all-accesses-hotel-blacklist",children:(0,c.jsx)(s.code,{children:"TrafficOptimizationStatsAllAccessesHotelBlacklist"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/user-profile",children:(0,c.jsx)(s.code,{children:"UserProfile"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(j,{}),(0,c.jsx)(s.a,{href:"/api/objects/user-profile-connection",children:(0,c.jsx)(s.code,{children:"UserProfileConnection"})})," ",(0,c.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(g,{...e})}):g(e)}},44808:(e,s,a)=>{var c=a(11504),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,n=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,a){var c,o={},i=null,j=null;for(c in void 0!==a&&(i=""+a),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(j=s.ref),s)d.call(s,c)&&!r.hasOwnProperty(c)&&(o[c]=s[c]);if(e&&e.defaultProps)for(c in s=e.defaultProps)void 0===o[c]&&(o[c]=s[c]);return{$$typeof:t,type:e,key:i,ref:j,props:o,_owner:n.current}}s.Fragment=o,s.jsx=i,s.jsxs=i},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>n,M:()=>d});var c=a(11504);const t={},o=c.createContext(t);function d(e){const s=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(o.Provider,{value:s},e.children)}}}]);