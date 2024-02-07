/*! For license information please see 40b153e0.7f582241.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46860],{57784:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=n(17624),i=n(4552);const r={sidebar_position:1},a="Hotel-X Development - Booking Query",s={id:"our-products/are-you-a-buyer/our-methods/booking-management/booking/what-is-hotel-x-booking-query",title:"Hotel-X Development - Booking Query",description:"The Booking Query operation enables you to obtain either the specific details of a reservation (booking details) or a list of reservations made within a specified time frame (booking list).",source:"@site/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/what-is-hotel-x-booking-query.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/booking-management/booking",slug:"/our-products/are-you-a-buyer/our-methods/booking-management/booking/what-is-hotel-x-booking-query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/what-is-hotel-x-booking-query",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kbSidebar",previous:{title:"Status in Cancel response",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status"},next:{title:"Booking Query: Booking Details",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/booking-details"}},l={},c=[{value:"What can I expect to receive in the Booking Query response?\u2714\ufe0f",id:"what-can-i-expect-to-receive-in-the-booking-query-response\ufe0f",level:3},{value:"How can I find out if a Seller only accepts a specific type of Booking Query?\u2705",id:"how-can-i-find-out-if-a-seller-only-accepts-a-specific-type-of-booking-query",level:3}];function u(e){const o={a:"a",admonition:"admonition",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"hotel-x-development---booking-query",children:"Hotel-X Development - Booking Query"}),"\n",(0,t.jsx)(o.p,{children:"The Booking Query operation enables you to obtain either the specific details of a reservation (booking details) or a list of reservations made within a specified time frame (booking list)."}),"\n",(0,t.jsx)(o.h3,{id:"what-can-i-expect-to-receive-in-the-booking-query-response\ufe0f",children:"What can I expect to receive in the Booking Query response?\u2714\ufe0f"}),"\n",(0,t.jsx)(o.p,{children:"Some of the fields returned are:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Holder"}),"\n",(0,t.jsx)(o.li,{children:"Hotel"}),"\n",(0,t.jsx)(o.li,{children:"Price"}),"\n",(0,t.jsx)(o.li,{children:"Remarks"}),"\n",(0,t.jsx)(o.li,{children:"Status"}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:"https://storage.travelgate.com/kbase/booking_query_3.jpg",alt:"booking_query_3"})}),"\n",(0,t.jsx)(o.h3,{id:"how-can-i-find-out-if-a-seller-only-accepts-a-specific-type-of-booking-query",children:"How can I find out if a Seller only accepts a specific type of Booking Query?\u2705"}),"\n",(0,t.jsxs)(o.p,{children:["Please note that ",(0,t.jsx)(o.strong,{children:"the queryable fields available by a Seller may vary between Sellers"}),". You can check the restrictions and fields returned/allowed for a specific Seller via our ",(0,t.jsx)(o.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata",children:"Metadata Query"}),"."]}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.p,{children:["Don't forget to check our ",(0,t.jsx)(o.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata#requests-examples",children:"Hotel-X Pull Buyers API Documentation"})," for a full example of a Hotel-X Metadata Query!\ud83d\ude80"]})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:'"queryableBy"'})," indicates that the Seller allows searching through a given field."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:'"requires"'})," indicates whether receiving this information is mandatory on the Seller's API."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:'"value"'})," indicates if that Seller requires or allows that specific field."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:'"reviewDate"'})," indicates the last time this value was checked against the Seller."]}),"\n"]}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsx)(o.p,{children:"If you are not using Hotel-X bookingID input, you should indicate your accessCode in the HotelCriteriaBookingInput. Language is optional, but we recommend adding this information for optimal results."})})]})}function d(e={}){const{wrapper:o}={...(0,i.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},44808:(e,o,n)=>{var t=n(11504),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,n){var t,r={},c=null,u=null;for(t in void 0!==n&&(c=""+n),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(u=o.ref),o)a.call(o,t)&&!l.hasOwnProperty(t)&&(r[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===r[t]&&(r[t]=o[t]);return{$$typeof:i,type:e,key:c,ref:u,props:r,_owner:s.current}}o.Fragment=r,o.jsx=c,o.jsxs=c},17624:(e,o,n)=>{e.exports=n(44808)},4552:(e,o,n)=>{n.d(o,{I:()=>s,M:()=>a});var t=n(11504);const i={},r=t.createContext(i);function a(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);