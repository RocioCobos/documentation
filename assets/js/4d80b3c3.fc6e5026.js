/*! For license information please see 4d80b3c3.fc6e5026.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8864],{47611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(74848),i=r(28453);const a={sidebar_position:4,title:"VCC Payments"},s="VCC Payments",o={id:"our-products/are-you-a-buyer/getting-started-as-a-new-buyer/how-to-activate-vcc-payments",title:"VCC Payments",description:"How can I pay bookings using Virtual Credit Cards? \ud83d\udcb3",source:"@site/kb/our-products/are-you-a-buyer/getting-started-as-a-new-buyer/how-to-activate-vcc-payments.md",sourceDirName:"our-products/are-you-a-buyer/getting-started-as-a-new-buyer",slug:"/our-products/are-you-a-buyer/getting-started-as-a-new-buyer/how-to-activate-vcc-payments",permalink:"/kb/our-products/are-you-a-buyer/getting-started-as-a-new-buyer/how-to-activate-vcc-payments",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"VCC Payments"},sidebar:"kbSidebar",previous:{title:"How to connect to a Channel Manager via TravelgateX",permalink:"/kb/our-products/are-you-a-buyer/getting-started-as-a-new-buyer/how-to-connect-to-a-channel-manager-via-travelgatex"},next:{title:"Get Started",permalink:"/kb/our-products/are-you-a-buyer/getting-started-as-a-new-buyer/associate-platform-partner-quick-start/get-started"}},c={},l=[{value:"How can I pay bookings using Virtual Credit Cards? \ud83d\udcb3",id:"how-can-i-pay-bookings-using-virtual-credit-cards-",level:2},{value:"Available actions with your VCC Supplier",id:"available-actions-with-your-vcc-supplier",level:3},{value:"Guide: Activating VCC Payments with Integrated VCC Suppliers",id:"guide-activating-vcc-payments-with-integrated-vcc-suppliers",level:3},{value:"List of VCC Suppliers \ud83d\udcd1",id:"list-of-vcc-suppliers-",level:3}];function u(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{TipContactCustomerCare:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipContactCustomerCare",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"vcc-payments",children:"VCC Payments"}),"\n",(0,n.jsx)(t.h2,{id:"how-can-i-pay-bookings-using-virtual-credit-cards-",children:"How can I pay bookings using Virtual Credit Cards? \ud83d\udcb3"}),"\n",(0,n.jsxs)(t.p,{children:["To pay for bookings within the TravelgateX platform, you have various methods available depending on the ",(0,n.jsx)(t.a,{href:"/kb/faqs/faqs-price/payment-types-at-tgx",children:"payment type"})," returned by the supplier. Some of these methods require a credit card."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"If you obtain or generate your own credit card"}),": Simply send the credit card information through our book mutation card input ",(0,n.jsx)(t.a,{href:"/api/inputs/hotel-book-input",children:(0,n.jsx)(t.code,{children:"paymentCard"})}),", including the card type, number, CVC, and other relevant details."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"If you cannot generate virtual credit cards (VCC)"}),": TravelgateX offers integration with several VCC suppliers who can create virtual credit cards for you at the time of reservation. For each hotel booking where you indicate in your request that a VCC is needed for payment, the system will connect with your VCC supplier to obtain the virtual credit card and use this information to complete the reservation with the hotel supplier."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Check the following sections to see how our integrated VCC suppliers work in the TravelgateX Marketplace:"}),"\n",(0,n.jsx)(t.h3,{id:"available-actions-with-your-vcc-supplier",children:"Available actions with your VCC Supplier"}),"\n",(0,n.jsx)(t.p,{children:"Our VCC Generation plugin offers a range of features to enhance your payment experience:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"VccGen - Create a virtual credit card"}),": The ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card",children:"VCC Generator plugin"})," allows clients to create virtual credit cards with custom activation and expiration dates. This service provides all necessary card information, including cardholder name, card number, CVC, expiration date, and card type (e.g., VI). You can apply rules using the \u2018genvcc.csv\u2019 rules file to determine whether to use a specific VCC based on the rules and request parameters. More details about the rules file can be found ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card#file-format-specification",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"VccCan - Cancel a virtual credit card"}),": The ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card",children:"VCC Cancel plugin"})," cancels a virtual credit card identified by the ID returned in the Book response. The status of the card is returned in the ",(0,n.jsx)(t.code,{children:"paymentInfo"})," field. Use rules in the 'genvcc.csv' file to specify the virtual credit card for cancellation. More details about the rules file can be found ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card#file-format-specification",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"guide-activating-vcc-payments-with-integrated-vcc-suppliers",children:"Guide: Activating VCC Payments with Integrated VCC Suppliers"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Reach an agreement"})," with your chosen VCC payment provider to ensure seamless VCC transactions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:["Open a ticket with our ",(0,n.jsx)(t.a,{href:"https://app.travelgate.com/tickets",children:"Customer Care team"})]}),", providing details about the VCC supplier, the credentials they provided, and the hotel Sellers for whom you wish to activate VCC payments. You will be notified once the activation is complete."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Create your VCC Rules file and upload it to your FTP"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Finish the VCC Setup"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"If you are using our Hotel-X Pull Buyers API"}),": Add the VCC Plugin to your Hotel-X Book and Cancel mutations."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"If you are using our Distribution Solution"}),': Access the Distribution Extranet and configure the "Allow VCC" rule in the configuration section at the agency level.',(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/vcc_activation_1.jpg",alt:"vcc_activation_1"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The VCC plugin is ",(0,n.jsx)(t.strong,{children:"optional"})," and depends on the seller's willingness to accept VCC payments for both bookings and cancellations."]})}),"\n",(0,n.jsx)(t.h3,{id:"list-of-vcc-suppliers-",children:"List of VCC Suppliers \ud83d\udcd1"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Amadeus Virtual Account"}),"\n",(0,n.jsx)(t.li,{children:"Ixaris (IXA)"}),"\n",(0,n.jsx)(t.li,{children:"Ixaris - Voxel (VIXA)"}),"\n",(0,n.jsx)(t.li,{children:"eNett (NET)"}),"\n",(0,n.jsx)(t.li,{children:"WEX"}),"\n"]}),"\n",(0,n.jsx)(r,{})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},21020:(e,t,r)=>{var n=r(96540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:l,ref:u,props:a,_owner:o.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);