/*! For license information please see 3ad5a01f.54eea57a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93610],{11192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(17624),a=t(4552);const i={sidebar_position:1},r="Hotel-X Development - Cancel Mutation",s={id:"our-products/are-you-a-buyer/our-methods/booking-management/cancel/what-is-cancel-mutation",title:"Hotel-X Development - Cancel Mutation",description:"You can use Hotel-X Cancel Mutation to easily cancel a booking made through TravelgateX.",source:"@site/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/what-is-cancel-mutation.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/booking-management/cancel",slug:"/our-products/are-you-a-buyer/our-methods/booking-management/cancel/what-is-cancel-mutation",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/what-is-cancel-mutation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kbSidebar",previous:{title:"How to obtain the Hotel Confirmation Number (HCN)",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/where-can-i-get-the-hotel-confirmation-number-hcn"},next:{title:"Status in Cancel response",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-management/cancel/cancel-status"}},c={},l=[{value:"How can I cancel a booking?\ud83d\udca1",id:"how-can-i-cancel-a-booking",level:3},{value:"What information can I expect in Cancel response?\u2714\ufe0f",id:"what-information-can-i-expect-in-cancel-response\ufe0f",level:3},{value:"How are cancellation costs calculated and displayed?\ud83d\udd22",id:"how-are-cancellation-costs-calculated-and-displayed",level:3},{value:"Can I apply any filters to my Hotel-X Cancel Mutation?\ud83d\udca1",id:"can-i-apply-any-filters-to-my-hotel-x-cancel-mutation",level:3},{value:"Is it possible to retrieve the cancellation costs without canceling the option?\ud83d\udd0e",id:"is-it-possible-to-retrieve-the-cancellation-costs-without-canceling-the-option",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"hotel-x-development---cancel-mutation",children:"Hotel-X Development - Cancel Mutation"}),"\n",(0,o.jsx)(n.p,{children:"You can use Hotel-X Cancel Mutation to easily cancel a booking made through TravelgateX."}),"\n",(0,o.jsx)(n.h3,{id:"how-can-i-cancel-a-booking",children:"How can I cancel a booking?\ud83d\udca1"}),"\n",(0,o.jsx)(n.p,{children:"You have two options to cancel a reservation:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Using its booking reference."}),"\n",(0,o.jsx)(n.li,{children:"Using its bookingID."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Don't forget to check our article on ",(0,o.jsx)(n.a,{href:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/book/hotel-x-development-book-mutation",children:"Book Mutation"})," for further details on the information returned in Book response\ud83d\ude80"]})}),"\n",(0,o.jsx)(n.h3,{id:"what-information-can-i-expect-in-cancel-response\ufe0f",children:"What information can I expect in Cancel response?\u2714\ufe0f"}),"\n",(0,o.jsxs)(n.p,{children:["The information returned in Cancel response may vary between Sellers, so please check our ",(0,o.jsx)(n.a,{href:"/playground",children:"Hotel-X Playground Documentation"})," in order to add to your Cancel the fields expected on your side. Additionally, you may check the Sellers' ",(0,o.jsx)(n.a,{href:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query",children:"Metadata"})," for further details on the specifications established on their side for this Method."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://storage.travelgate.com/kbase/cancel_mutation_1.jpg",alt:"cancel_mutation_1"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Some of the fields returned once a booking is cancelled are:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Booking status: more information on status in cancel response here."}),"\n",(0,o.jsx)(n.li,{children:"Reference"}),"\n",(0,o.jsx)(n.li,{children:"Price"}),"\n",(0,o.jsx)(n.li,{children:"Holder"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Remember to check the Sellers' ",(0,o.jsx)(n.a,{href:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query",children:"Metadata"})," for further details on their specifications and information returned on their side in Cancel response.\ud83d\udd0e"]})}),"\n",(0,o.jsx)(n.h3,{id:"how-are-cancellation-costs-calculated-and-displayed",children:"How are cancellation costs calculated and displayed?\ud83d\udd22"}),"\n",(0,o.jsx)(n.p,{children:"Depending on the specifications provided by a Seller, cancellation costs can be calculated using three different penalty types. It is important to keep in mind that a booking may have more than one penalty type associated with it."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"NIGHTS:"})," It indicates the number of nights to be penalized."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"PERCENT:"})," It indicates the percentage to pay based on the option price (possible values between 0 and 100)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"IMPORT:"})," It Indicates the exact amount payable."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"important",type:"warning",children:(0,o.jsxs)(n.p,{children:["To ensure seamless billing, ",(0,o.jsx)(n.strong,{children:"it's important that you handle all cancellations via our API"}),".",(0,o.jsx)(n.br,{}),"\n","Should you face any issues, please don't hesitate to get in touch with our ",(0,o.jsx)(n.a,{href:"https://app.travelgatex.com/tickets",children:"Customer Care team"})," for assistance. Additionally, please make sure to cancel any test bookings with Sellers and to check that such bookings are refundable."]})}),"\n",(0,o.jsx)(n.h3,{id:"can-i-apply-any-filters-to-my-hotel-x-cancel-mutation",children:"Can I apply any filters to my Hotel-X Cancel Mutation?\ud83d\udca1"}),"\n",(0,o.jsx)(n.p,{children:"Unfortunately, there are no filters in the Cancel Mutation."}),"\n",(0,o.jsx)(n.h3,{id:"is-it-possible-to-retrieve-the-cancellation-costs-without-canceling-the-option",children:"Is it possible to retrieve the cancellation costs without canceling the option?\ud83d\udd0e"}),"\n",(0,o.jsx)(n.p,{children:"If the Seller provides cancel policies information, you can access it either through Hotel-X Quote Query or Hotel-X Booking Query."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Don't forget to check our ",(0,o.jsx)(n.a,{href:"/playground",children:"Hotel-X API Playground"})," and ",(0,o.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/cancel",children:"Documentation"})," for further information on Cancel Mutation. Interested in cancel penalties information as well? We've got you covered with some awesome ",(0,o.jsx)(n.a,{href:"/kb/faqs/faqs-cancel-policies/hotel-buyers-api-cancel-policies",children:"articles"})," that dive deep into the topic!\ud83d\ude80"]})})]})}function u(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},44808:(e,n,t)=>{var o=t(11504),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,i={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,o)&&!c.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:a,type:e,key:l,ref:d,props:i,_owner:s.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>r});var o=t(11504);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);