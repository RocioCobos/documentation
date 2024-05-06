/*! For license information please see bba52aa8.fe92007f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83501],{38804:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var o=i(74848),s=i(28453);const t={sidebar_position:4},l="Amend Rooms",r={id:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms",title:"Amend Rooms",description:"The Amend Rooms operation allows you to modify your booking's rooms. You can add or remove rooms or change the room type. To make a modification to your booking accurately, you should begin by executing the 'quote amend' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the 'commit' mutation, which will finalize the modification in the Seller's system.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-rooms.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Amend Board",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-board"},next:{title:"Amend Paxes",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/amend-paxes"}},d={},c=[{value:"Quote Amend Rooms",id:"quote-amend-rooms",level:2},{value:"Inputs",id:"inputs",level:3},{value:"1. Criteria",id:"1-criteria",level:4},{value:"2. Settings",id:"2-settings",level:3},{value:"Commit Amend Rooms",id:"commit-amend-rooms",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"1. Data",id:"1-data",level:3},{value:"2. Settings",id:"2-settings-1",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CautionSettingsHotelX:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CautionSettingsHotelX",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"amend-rooms",children:"Amend Rooms"}),"\n",(0,o.jsx)(n.p,{children:"The Amend Rooms operation allows you to modify your booking's rooms. You can add or remove rooms or change the room type. To make a modification to your booking accurately, you should begin by executing the 'quote amend' query to confirm the feasibility of the change and its associated price. After obtaining this information, you can proceed to implement the amendment using the 'commit' mutation, which will finalize the modification in the Seller's system."}),"\n",(0,o.jsx)(n.h2,{id:"quote-amend-rooms",children:"Quote Amend Rooms"}),"\n",(0,o.jsx)(n.p,{children:"The quote amend query simulates the amendment to confirm the price of the booking modification. The returned fields include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"amendFee"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"amendedBookingDetail"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"reference"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"holder"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"hotel"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"price"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"quotePrice"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"cancelPolicy"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"remarks"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"status"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"inputs",children:"Inputs"}),"\n",(0,o.jsx)(n.p,{children:"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Criteria"}),"\n",(0,o.jsx)(n.li,{children:"Settings"}),"\n"]}),"\n",(0,o.jsx)(i,{}),"\n",(0,o.jsx)(n.h4,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,o.jsxs)(n.p,{children:["You can perform the ",(0,o.jsx)(n.code,{children:"query"})," (simulation) of the amendment sending all the booking information (",(0,o.jsx)(n.code,{children:"reference"}),", ",(0,o.jsx)(n.code,{children:"dates"}),", ",(0,o.jsx)(n.code,{children:"hotelCode"}),") or sending the bookingID got in the booking flow:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Booking information:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"accessCode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"language"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"hotelCode"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"reference"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"dates"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"BookingID got in the booking flow:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bookingID"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"2-settings",children:"2. Settings"}),"\n",(0,o.jsx)(n.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Mandatory Settings:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"client"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"context"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"timeout"})," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Optional Settings:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"group"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"auditTransactions"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"suppliers"})," (Each one contains its own code, settings and accesses)"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"plugins"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"testMode"})," (This flag allows only the accesses checked as test)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clientTokens"})," (Used to identify the origin of the request, this is only used in plugins)"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"businessRules"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"commit-amend-rooms",children:"Commit Amend Rooms"}),"\n",(0,o.jsx)(n.p,{children:"The commit amend mutation generates the amendment to confirm the booking modification. The returned fields include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"amendFee"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"amendedBookingDetail"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"reference"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"holder"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"hotel"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"price"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"quotePrice"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"cancelPolicy"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"remarks"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"status"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,o.jsx)(n.p,{children:"When creating your quote amend query, you have two different inputs to fill based on your specific needs:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Data"}),"\n",(0,o.jsx)(n.li,{children:"Settings"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"1-data",children:"1. Data"}),"\n",(0,o.jsxs)(n.p,{children:["You must perform the ",(0,o.jsx)(n.code,{children:"mutation"})," (commit) of the amendment sending the ",(0,o.jsx)(n.code,{children:"amendmentID"})," received in the quote amend response:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"amendmentID"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"2-settings-1",children:"2. Settings"}),"\n",(0,o.jsx)(n.p,{children:"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Mandatory Settings"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"context"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"timeout"})," (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"businessRules"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"language"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"currency"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"nationality"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"markets"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Optional Settings"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"group"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"auditTransactions"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"suppliers"})," (Each one contains its own code, settings and accesses)"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"plugins"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"testMode"})," (This flag allows only the accesses checked as test)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"clientTokens"})," (Used to identify the origin of the request, this is only used in plugins)"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},21020:(e,n,i)=>{var o=i(96540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var o,t={},c=null,a=null;for(o in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,o)&&!d.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:s,type:e,key:c,ref:a,props:t,_owner:r.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},74848:(e,n,i)=>{e.exports=i(21020)},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var o=i(96540);const s={},t=o.createContext(s);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);