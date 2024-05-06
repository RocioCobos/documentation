/*! For license information please see 30e50572.06603a38.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60790],{35961:(e,o,a)=>{a.r(o),a.d(o,{Badge:()=>g,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>x});var t=a(74848),d=a(28453),n=a(96540);const s={id:"booking-hotel-details",title:"BookingHotelDetails",hide_table_of_contents:!1},l=void 0,c={id:"objects/booking-hotel-details",title:"BookingHotelDetails",description:"No description",source:"@site/api/objects/booking-hotel-details.mdx",sourceDirName:"objects",slug:"/objects/booking-hotel-details",permalink:"/api/objects/booking-hotel-details",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"booking-hotel-details",title:"BookingHotelDetails",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BookingDetail",permalink:"/api/objects/booking-detail"},next:{title:"BookingHotel",permalink:"/api/objects/booking-hotel"}},i={},r=()=>{const e={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const o={a:"a",...(0,d.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const o={span:"span",...(0,d.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:o,children:a,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,d.R)()},[c,i]=(0,n.useState)(s);return(0,t.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:o}),c&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>BookingHotelDetails.<b>creationDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailscreationdatedate--",level:4},{value:'<code>BookingHotelDetails.<b>checkIn</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailscheckindate--",level:4},{value:'<code>BookingHotelDetails.<b>checkOut</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailscheckoutdate--",level:4},{value:'<code>BookingHotelDetails.<b>bookingDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailsbookingdatedate-",level:4},{value:'<code>BookingHotelDetails.<b>start</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailsstartdate-",level:4},{value:'<code>BookingHotelDetails.<b>end</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailsenddate-",level:4},{value:'<code>BookingHotelDetails.<b>cancelDate</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailscanceldatedate-",level:4},{value:'<code>BookingHotelDetails.<b>hotelCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailshotelcodestring-",level:4},{value:'<code>BookingHotelDetails.<b>hotelName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailshotelnamestring-",level:4},{value:'<code>BookingHotelDetails.<b>boardCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailsboardcodestring-",level:4},{value:'<code>BookingHotelDetails.<b>occupancies</b></code><Bullet></Bullet><code>[Occupancy!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailsoccupanciesoccupancy--",level:4},{value:'<code>BookingHotelDetails.<b>rooms</b></code><Bullet></Bullet><code>[BookingRoom!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookinghoteldetailsroomsbookingroom--",level:4},{value:"Member of",id:"member-of",level:3}];function j(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"No description"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-graphql",children:"type BookingHotelDetails {\n  creationDate: Date @deprecated\n  checkIn: Date @deprecated\n  checkOut: Date @deprecated\n  bookingDate: Date\n  start: Date\n  end: Date\n  cancelDate: Date\n  hotelCode: String\n  hotelName: String\n  boardCode: String\n  occupancies: [Occupancy!]\n  rooms: [BookingRoom!]\n}\n"})}),"\n",(0,t.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailscreationdatedate--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"creationDate"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/date",children:(0,t.jsx)(o.code,{children:"Date"})})," ",(0,t.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.admonition,{title:"DEPRECATED",type:"caution",children:(0,t.jsx)(o.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,t.jsx)(o.p,{children:"Creation date of the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailscheckindate--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"checkIn"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/date",children:(0,t.jsx)(o.code,{children:"Date"})})," ",(0,t.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.admonition,{title:"DEPRECATED",type:"caution",children:(0,t.jsx)(o.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,t.jsx)(o.p,{children:"Check-in date for booking\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailscheckoutdate--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"checkOut"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/date",children:(0,t.jsx)(o.code,{children:"Date"})})," ",(0,t.jsx)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.admonition,{title:"DEPRECATED",type:"caution",children:(0,t.jsx)(o.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,t.jsx)(o.p,{children:"Check-out date for the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailsbookingdatedate-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"bookingDate"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/date",children:(0,t.jsx)(o.code,{children:"Date"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Creation date of the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailsstartdate-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"start"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/date",children:(0,t.jsx)(o.code,{children:"Date"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Check-in date for booking\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailsenddate-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"end"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/date",children:(0,t.jsx)(o.code,{children:"Date"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Check-out date for the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailscanceldatedate-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"cancelDate"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/date",children:(0,t.jsx)(o.code,{children:"Date"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Cancel date for the booking.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailshotelcodestring-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"hotelCode"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/string",children:(0,t.jsx)(o.code,{children:"String"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Code of the hotel in the context selected."}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailshotelnamestring-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"hotelName"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/string",children:(0,t.jsx)(o.code,{children:"String"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Name of the hotel."}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailsboardcodestring-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"boardCode"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/scalars/string",children:(0,t.jsx)(o.code,{children:"String"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Code of the board in the context selected."}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailsoccupanciesoccupancy--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"occupancies"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/objects/occupancy",children:(0,t.jsx)(o.code,{children:"[Occupancy!]"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"List of occupancies for the request"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"bookinghoteldetailsroomsbookingroom--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BookingHotelDetails.",(0,t.jsx)("b",{children:"rooms"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(o.a,{href:"/api/objects/booking-room",children:(0,t.jsx)(o.code,{children:"[BookingRoom!]"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"List of rooms."}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/api/objects/booking-detail",children:(0,t.jsx)(o.code,{children:"BookingDetail"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function k(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},21020:(e,o,a)=>{var t=a(96540),d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,o,a){var t,n={},i=null,r=null;for(t in void 0!==a&&(i=""+a),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(r=o.ref),o)s.call(o,t)&&!c.hasOwnProperty(t)&&(n[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===n[t]&&(n[t]=o[t]);return{$$typeof:d,type:e,key:i,ref:r,props:n,_owner:l.current}}o.Fragment=n,o.jsx=i,o.jsxs=i},74848:(e,o,a)=>{e.exports=a(21020)},28453:(e,o,a)=>{a.d(o,{R:()=>s,x:()=>l});var t=a(96540);const d={},n=t.createContext(d);function s(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);