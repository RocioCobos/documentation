/*! For license information please see a93c4c13.3f3ec2a4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31848],{20376:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>g,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>s,default:()=>k,frontMatter:()=>c,metadata:()=>l,toc:()=>b});var a=n(17624),d=n(4552),t=n(11504);const c={id:"booking-hotel",title:"BookingHotel"},s=void 0,l={id:"objects/booking-hotel",title:"BookingHotel",description:"No description",source:"@site/api/objects/booking-hotel.mdx",sourceDirName:"objects",slug:"/objects/booking-hotel",permalink:"/api/objects/booking-hotel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"booking-hotel",title:"BookingHotel"},sidebar:"schemaSidebar",previous:{title:"BookingHotelDetails",permalink:"/api/objects/booking-hotel-details"},next:{title:"BookingPayload",permalink:"/api/objects/booking-payload"}},r={},i=()=>{const e={span:"span",...(0,d.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const o={a:"a",...(0,d.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const o={span:"span",...(0,d.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>BookingHotel.<b>creationDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelcreationdatedate--",level:4},{value:'<code>BookingHotel.<b>checkIn</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelcheckindate--",level:4},{value:'<code>BookingHotel.<b>checkOut</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelcheckoutdate--",level:4},{value:'<code>BookingHotel.<b>bookingDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelbookingdatedate-",level:4},{value:'<code>BookingHotel.<b>start</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelstartdate-",level:4},{value:'<code>BookingHotel.<b>end</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelenddate-",level:4},{value:'<code>BookingHotel.<b>hotelCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelhotelcodestring-",level:4},{value:'<code>BookingHotel.<b>hotelName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelhotelnamestring-",level:4},{value:'<code>BookingHotel.<b>boardCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelboardcodestring-",level:4},{value:'<code>BookingHotel.<b>occupancies</b></code><Bullet></Bullet><code>[Occupancy!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteloccupanciesoccupancy--",level:4},{value:'<code>BookingHotel.<b>rooms</b></code><Bullet></Bullet><code>[BookingRoom!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghotelroomsbookingroom--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:o,children:n,startOpen:c=!1})=>{const s={details:"details",summary:"summary",...(0,d.M)()},[l,r]=(0,t.useState)(c);return(0,a.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:o}),l&&n]})};function j(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"No description"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-graphql",children:"type BookingHotel {\n  creationDate: Date @deprecated\n  checkIn: Date @deprecated\n  checkOut: Date @deprecated\n  bookingDate: Date\n  start: Date\n  end: Date\n  hotelCode: String\n  hotelName: String\n  boardCode: String\n  occupancies: [Occupancy!]\n  rooms: [BookingRoom!]\n}\n"})}),"\n",(0,a.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelcreationdatedate--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"creationDate"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/date",children:(0,a.jsx)(o.code,{children:"Date"})})," ",(0,a.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.admonition,{title:"DEPRECATED",type:"warning",children:(0,a.jsx)(o.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,a.jsx)(o.p,{children:"Creation date of the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelcheckindate--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"checkIn"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/date",children:(0,a.jsx)(o.code,{children:"Date"})})," ",(0,a.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.admonition,{title:"DEPRECATED",type:"warning",children:(0,a.jsx)(o.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,a.jsx)(o.p,{children:"Check-in date for booking\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelcheckoutdate--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"checkOut"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/date",children:(0,a.jsx)(o.code,{children:"Date"})})," ",(0,a.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.admonition,{title:"DEPRECATED",type:"warning",children:(0,a.jsx)(o.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,a.jsx)(o.p,{children:"Check-out date for the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelbookingdatedate-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"bookingDate"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/date",children:(0,a.jsx)(o.code,{children:"Date"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Creation date of the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelstartdate-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"start"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/date",children:(0,a.jsx)(o.code,{children:"Date"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Check-in date for booking\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelenddate-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"end"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/date",children:(0,a.jsx)(o.code,{children:"Date"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Check-out date for the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelhotelcodestring-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"hotelCode"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/string",children:(0,a.jsx)(o.code,{children:"String"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Code of the hotel in the context selected."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelhotelnamestring-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"hotelName"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/string",children:(0,a.jsx)(o.code,{children:"String"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Name of the hotel."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelboardcodestring-",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"boardCode"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/scalars/string",children:(0,a.jsx)(o.code,{children:"String"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"Code of the board in the context selected."}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghoteloccupanciesoccupancy--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"occupancies"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/objects/occupancy",children:(0,a.jsx)(o.code,{children:"[Occupancy!]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"List of occupancies for the request"}),"\n"]}),"\n",(0,a.jsxs)(o.h4,{id:"bookinghotelroomsbookingroom--",children:[(0,a.jsx)(o.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotel.",(0,a.jsx)("b",{children:"rooms"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(o.a,{href:"/api/objects/booking-room",children:(0,a.jsx)(o.code,{children:"[BookingRoom!]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(o.blockquote,{children:["\n",(0,a.jsx)(o.p,{children:"List of rooms."}),"\n"]}),"\n",(0,a.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/api/objects/hotel-booking-detail",children:(0,a.jsx)(o.code,{children:"HotelBookingDetail"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function k(e={}){const{wrapper:o}={...(0,d.M)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},44808:(e,o,n)=>{var a=n(11504),d=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,o,n){var a,t={},r=null,i=null;for(a in void 0!==n&&(r=""+n),void 0!==o.key&&(r=""+o.key),void 0!==o.ref&&(i=o.ref),o)c.call(o,a)&&!l.hasOwnProperty(a)&&(t[a]=o[a]);if(e&&e.defaultProps)for(a in o=e.defaultProps)void 0===t[a]&&(t[a]=o[a]);return{$$typeof:d,type:e,key:r,ref:i,props:t,_owner:s.current}}o.Fragment=t,o.jsx=r,o.jsxs=r},17624:(e,o,n)=>{e.exports=n(44808)},4552:(e,o,n)=>{n.d(o,{I:()=>s,M:()=>c});var a=n(11504);const d={},t=a.createContext(d);function c(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);