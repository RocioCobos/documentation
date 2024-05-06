/*! For license information please see a584115b.6b7b05fa.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26265],{1045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var o=t(74848),r=t(28453);const s={sidebar_position:1},a="Hotel-X Development - Amendments",i={id:"our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query",title:"Hotel-X Development - Amendments",description:"What are Amendments and how can I use them?",source:"@site/kb/our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/booking-management/amendments",slug:"/our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/amendments/what-is-hotel-x-amendments-query",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kbSidebar",previous:{title:"Booking Query: Booking List",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/booking/booking-list"},next:{title:"Hotels",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-hotels-query"}},d={},m=[{value:"What are Amendments and how can I use them?",id:"what-are-amendments-and-how-can-i-use-them",level:3},{value:"How can I know if a Seller supports Amendments?",id:"how-can-i-know-if-a-seller-supports-amendments",level:3}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"hotel-x-development---amendments",children:"Hotel-X Development - Amendments"}),"\n",(0,o.jsx)(n.h3,{id:"what-are-amendments-and-how-can-i-use-them",children:"What are Amendments and how can I use them?"}),"\n",(0,o.jsx)(n.p,{children:"The Amendment operations allow you to modify different aspects of a booking. There are currently five amendment operations available:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"amendDates: Allows to amend the checkin and/or the checkout of a booking"}),"\n",(0,o.jsx)(n.li,{children:"amendBoard: Allows to amend the board of a booking"}),"\n",(0,o.jsx)(n.li,{children:"amendRemarks: Allows to add a special request (remark) on a booking"}),"\n",(0,o.jsx)(n.li,{children:"amendPaxes: Allows to amend the paxes of a booking"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Each amendment type must be performend in two steps: a Query and a Mutation:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Query"}),": it simulates the amendment - it's used to make a request to the Supplier in order to retrieve the new price of the booking and the cost of confirming the modification, if such cost exists. As an analogy, it would be the same as the Quote method in a Booking Flow. In addition, the Query will provide an amendmentID token to be sent in the second method, which should not be interpreted in any case by the Partner."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["How can I run an Amendments Query?","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Sending all the booking information (references, dates, hotel code)"}),"\n",(0,o.jsx)(n.li,{children:"Sending the bookingID received in the Book response (reservation response)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Mutation"}),": it commits the amendment - it is used to confirm the booking modification in the Supplier\u2019s system. In the Mutation, the amendmentID received in the Query response will be sent in order to provide all the required information."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["How can I run an Amendments Mutation?","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You can perform the mutation (commmit) of the amendment by sending the amendmentID received in the previous response."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"how-can-i-know-if-a-seller-supports-amendments",children:"How can I know if a Seller supports Amendments?"}),"\n",(0,o.jsxs)(n.p,{children:["To learn more about Amendments, including which modifications a Seller allows and what can or cannot be changed through mutations, please review the Seller's ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query",children:"Metadata"})})," response."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://storage.travelgate.com/kbase/metadata-amends-1.jpg",alt:"metadata-amends-1"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["You will find further information and examples about booking modifications in our ",(0,o.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/amendments/",children:"Hotel-X Pull Buyers API Documentation"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},21020:(e,n,t)=>{var o=t(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function m(e,n,t){var o,s={},m=null,l=null;for(o in void 0!==t&&(m=""+t),void 0!==n.key&&(m=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,o)&&!d.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:r,type:e,key:m,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=m,n.jsxs=m},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);