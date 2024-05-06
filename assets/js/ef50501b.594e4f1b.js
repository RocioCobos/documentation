/*! For license information please see ef50501b.594e4f1b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24027],{63439:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>g,assets:()=>t,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>x});var s=o(74848),i=o(28453),l=o(96540);const d={id:"booking-detail",title:"BookingDetail",hide_table_of_contents:!1},a=void 0,c={id:"objects/booking-detail",title:"BookingDetail",description:"No description",source:"@site/api/objects/booking-detail.mdx",sourceDirName:"objects",slug:"/objects/booking-detail",permalink:"/api/objects/booking-detail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"booking-detail",title:"BookingDetail",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BookingAggregation",permalink:"/api/objects/booking-aggregation"},next:{title:"BookingHotelDetails",permalink:"/api/objects/booking-hotel-details"}},t={},r=()=>{const e={span:"span",...(0,i.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,i.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,i.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:n,children:o,startOpen:d=!1})=>{const a={details:"details",summary:"summary",...(0,i.R)()},[c,t]=(0,l.useState)(d);return(0,s.jsxs)(a.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(a.summary,{onClick:e=>{e.preventDefault(),t((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&o]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>BookingDetail.<b>reference</b></code><Bullet></Bullet><code>Reference!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailreferencereference--",level:4},{value:'<code>BookingDetail.<b>holder</b></code><Bullet></Bullet><code>Holder</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailholderholder-",level:4},{value:'<code>BookingDetail.<b>hotel</b></code><Bullet></Bullet><code>BookingHotelDetails</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailhotelbookinghoteldetails-",level:4},{value:'<code>BookingDetail.<b>price</b></code><Bullet></Bullet><code>Price</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailpriceprice-",level:4},{value:'<code>BookingDetail.<b>cancelPolicy</b></code><Bullet></Bullet><code>CancelPolicy</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailcancelpolicycancelpolicy-",level:4},{value:'<code>BookingDetail.<b>remarks</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailremarksstring-",level:4},{value:'<code>BookingDetail.<b>status</b></code><Bullet></Bullet><code>BookStatusType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailstatusbookstatustype--",level:4},{value:'<code>BookingDetail.<b>payable</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailpayablestring-",level:4},{value:'<code>BookingDetail.<b>sessionIdQuote</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailsessionidquotestring-",level:4},{value:'<code>BookingDetail.<b>sessionIdBooking</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailsessionidbookingstring-",level:4},{value:'<code>BookingDetail.<b>sessionIdCancel</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailsessionidcancelstring-",level:4},{value:'<code>BookingDetail.<b>client</b></code><Bullet></Bullet><code>Client</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailclientclient-",level:4},{value:'<code>BookingDetail.<b>supplier</b></code><Bullet></Bullet><code>Supplier</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailsuppliersupplier-",level:4},{value:'<code>BookingDetail.<b>access</b></code><Bullet></Bullet><code>Access</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailaccessaccess-",level:4},{value:'<code>BookingDetail.<b>executionTime</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailexecutiontimeint-",level:4},{value:'<code>BookingDetail.<b>timeout</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailtimeoutint-",level:4},{value:'<code>BookingDetail.<b>errorCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookingdetailerrorcodestring-",level:4},{value:"Member of",id:"member-of",level:3}];function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type BookingDetail {\n  reference: Reference!\n  holder: Holder\n  hotel: BookingHotelDetails\n  price: Price\n  cancelPolicy: CancelPolicy\n  remarks: String\n  status: BookStatusType!\n  payable: String\n  sessionIdQuote: String\n  sessionIdBooking: String\n  sessionIdCancel: String\n  client: Client\n  supplier: Supplier\n  access: Access\n  executionTime: Int\n  timeout: Int\n  errorCode: String\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailreferencereference--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"reference"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/objects/reference",children:(0,s.jsx)(n.code,{children:"Reference!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Booking ID in the Supplier s system"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailholderholder-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"holder"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/objects/holder",children:(0,s.jsx)(n.code,{children:"Holder"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Holder s name and surname"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailhotelbookinghoteldetails-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"hotel"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/objects/booking-hotel-details",children:(0,s.jsx)(n.code,{children:"BookingHotelDetails"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Information about the hotel."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailpriceprice-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"price"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/objects/price",children:(0,s.jsx)(n.code,{children:"Price"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies the prices (Gross, Net and Amount) of the option returned."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailcancelpolicycancelpolicy-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"cancelPolicy"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/objects/cancel-policy",children:(0,s.jsx)(n.code,{children:"CancelPolicy"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Specifies cancel policies of the book returned."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailremarksstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"remarks"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Additional information about the book."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailstatusbookstatustype--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"status"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/enums/book-status-type",children:(0,s.jsx)(n.code,{children:"BookStatusType!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Booking Status."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailpayablestring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"payable"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Payable."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailsessionidquotestring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"sessionIdQuote"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Quote Session id"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailsessionidbookingstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"sessionIdBooking"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Booking Session id"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailsessionidcancelstring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"sessionIdCancel"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Cancel Session id"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailclientclient-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"client"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/objects/client",children:(0,s.jsx)(n.code,{children:"Client"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Client Code"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailsuppliersupplier-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"supplier"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/objects/supplier",children:(0,s.jsx)(n.code,{children:"Supplier"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Supplier Code"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailaccessaccess-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"access"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/objects/access",children:(0,s.jsx)(n.code,{children:"Access"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Access ID"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailexecutiontimeint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"executionTime"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/scalars/int",children:(0,s.jsx)(n.code,{children:"Int"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Execution Time"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailtimeoutint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"timeout"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/scalars/int",children:(0,s.jsx)(n.code,{children:"Int"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Timeout"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"bookingdetailerrorcodestring-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingDetail.",(0,s.jsx)("b",{children:"errorCode"})]})}),(0,s.jsx)(r,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Error Code"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/objects/insights-xbooking-detail",children:(0,s.jsx)(n.code,{children:"InsightsXBookingDetail"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},21020:(e,n,o)=>{var s=o(96540),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,o){var s,l={},t=null,r=null;for(s in void 0!==o&&(t=""+o),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(r=n.ref),n)d.call(n,s)&&!c.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:i,type:e,key:t,ref:r,props:l,_owner:a.current}}n.Fragment=l,n.jsx=t,n.jsxs=t},74848:(e,n,o)=>{e.exports=o(21020)},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>a});var s=o(96540);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);