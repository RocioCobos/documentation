/*! For license information please see 00111551.67a40a2c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45041],{42925:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});var r=o(74848),i=o(28453);const a={title:"Categories",sidebar_position:5},s="Hotel-X Development - Categories Query",n={id:"our-products/are-you-a-buyer/our-methods/static-content/hotel-x-categories-query",title:"Categories",description:"What is Hotel-X Categories Query?\u2b50",source:"@site/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-categories-query.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/static-content",slug:"/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-categories-query",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-categories-query",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Categories",sidebar_position:5},sidebar:"kbSidebar",previous:{title:"Boards",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-boards-query"},next:{title:"Metadata",permalink:"/kb/our-products/are-you-a-buyer/our-methods/static-content/hotel-x-metadata-query"}},l={},c=[{value:"What is Hotel-X Categories Query?\u2b50",id:"what-is-hotel-x-categories-query",level:3},{value:"How can I retrieve the Seller&#39;s Category List via Hotel-X?",id:"how-can-i-retrieve-the-sellers-category-list-via-hotel-x",level:3},{value:"How can I know the total amount of categories returned by a Seller?\ud83d\udd22",id:"how-can-i-know-the-total-amount-of-categories-returned-by-a-seller",level:3},{value:"What can I expect to receive in Categories Query response?\u2714\ufe0f",id:"what-can-i-expect-to-receive-in-categories-query-response\ufe0f",level:3},{value:"Can I filter by category code?\u2714\ufe0f",id:"can-i-filter-by-category-code\ufe0f",level:3},{value:"What category codes should I map as Buyer? Does TravelgateX map for us?\u2753",id:"what-category-codes-should-i-map-as-buyer-does-travelgatex-map-for-us",level:3},{value:"Will I receive availability results for all the categories within a Seller&#39;s portfolio?\u26a0\ufe0f",id:"will-i-receive-availability-results-for-all-the-categories-within-a-sellers-portfolio\ufe0f",level:3}];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"hotel-x-development---categories-query",children:"Hotel-X Development - Categories Query"}),"\n",(0,r.jsx)(t.h3,{id:"what-is-hotel-x-categories-query",children:"What is Hotel-X Categories Query?\u2b50"}),"\n",(0,r.jsx)(t.p,{children:"The Categories Query retrieves the list of categories associated with the given credentials (access). E.g. 5 stars, 1 key, and others."}),"\n",(0,r.jsx)(t.h3,{id:"how-can-i-retrieve-the-sellers-category-list-via-hotel-x",children:"How can I retrieve the Seller's Category List via Hotel-X?"}),"\n",(0,r.jsxs)(t.p,{children:["You just need to follow the specifications in our ",(0,r.jsx)(t.a,{href:"https://api.travelgatex.com/",children:"API Playground"})," and build your own Categories Query, as easy as that! Also, remember you are able to ",(0,r.jsx)(t.strong,{children:"personalize"})," the fields requested, so only the information that matters to you is returned in the response."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Don't forget to check our ",(0,r.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/categories#requests-examples",children:"Hotel-X Pull Buyers API Documentation"})," for a full example of a Hotel-X Categories Query!\ud83d\ude80"]})}),"\n",(0,r.jsx)(t.h3,{id:"how-can-i-know-the-total-amount-of-categories-returned-by-a-seller",children:"How can I know the total amount of categories returned by a Seller?\ud83d\udd22"}),"\n",(0,r.jsx)(t.p,{children:"To determine the total number of categories provided by a Seller, it's crucial to download the complete categories list."}),"\n",(0,r.jsx)(t.h3,{id:"what-can-i-expect-to-receive-in-categories-query-response\ufe0f",children:"What can I expect to receive in Categories Query response?\u2714\ufe0f"}),"\n",(0,r.jsx)(t.p,{children:"Some of the fields returned are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Code"}),"\n",(0,r.jsx)(t.li,{children:"Category Code"}),"\n",(0,r.jsx)(t.li,{children:"Text"}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Please note that the amount of information and content returned may vary between Sellers."})}),"\n",(0,r.jsx)(t.h3,{id:"can-i-filter-by-category-code\ufe0f",children:"Can I filter by category code?\u2714\ufe0f"}),"\n",(0,r.jsx)(t.p,{children:'Yes! You can filter your results by adding the "categoryCode" field to your criteria and specifying the category or categories you want to receive.'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://storage.travelgate.com/kbase/categories_query_1.jpg",alt:"categories_query_1"})}),"\n",(0,r.jsx)(t.h3,{id:"what-category-codes-should-i-map-as-buyer-does-travelgatex-map-for-us",children:"What category codes should I map as Buyer? Does TravelgateX map for us?\u2753"}),"\n",(0,r.jsx)(t.p,{children:"Our objective is to ensure that Buyers always receive the native information as sent by the Seller without any modification, so mapping should be done either internally or externally on your side."}),"\n",(0,r.jsx)(t.p,{children:"Additionally, connecting with a new Seller doesn't always mean interest in the whole portfolio of categories, so you have the flexibility to map only the specific categories you are interested in."}),"\n",(0,r.jsx)(t.h3,{id:"will-i-receive-availability-results-for-all-the-categories-within-a-sellers-portfolio\ufe0f",children:"Will I receive availability results for all the categories within a Seller's portfolio?\u26a0\ufe0f"}),"\n",(0,r.jsx)(t.p,{children:"No, the Categories Query response includes all the categories that a Seller has configured for your account. However, it is possible that there may be no availability for the specific dates or distribution that you are requesting."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Don't forget to check our ",(0,r.jsx)(t.a,{href:"/playground",children:"API Playground"})," for further information on Hotel-X Categories Query!\ud83d\ude80"]})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},21020:(e,t,o)=>{var r=o(96540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,n=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var r,a={},c=null,u=null;for(r in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:n.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,o)=>{e.exports=o(21020)},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>n});var r=o(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);