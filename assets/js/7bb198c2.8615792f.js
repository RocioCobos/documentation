/*! For license information please see 7bb198c2.8615792f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58323],{70904:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var t=s(74848),n=s(28453);const i={sidebar_position:3},r="How to limit options through Business Rules",u={id:"our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-limit-and-filter-options-through-business-rules",title:"How to limit options through Business Rules",description:"What are the Business Rules that I can incorporate into my requests?\ud83d\udca1",source:"@site/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-limit-and-filter-options-through-business-rules.mdx",sourceDirName:"our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos",slug:"/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-limit-and-filter-options-through-business-rules",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-limit-and-filter-options-through-business-rules",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"kbSidebar",previous:{title:"How to filter Hotel-X Search requests",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-tos/how-to-filter-hotel-x-search-requests"},next:{title:"Hotel-X Search: Everything You Need to Know About Rooms",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/faq/hotel-x-search-everything-you-need-to-know-about-rooms"}},a={},l=[{value:"What are the Business Rules that I can incorporate into my requests?\ud83d\udca1",id:"what-are-the-business-rules-that-i-can-incorporate-into-my-requests",level:3},{value:"How can I set up Business Rules in my requests?\ud83d\udee0\ufe0f",id:"how-can-i-set-up-business-rules-in-my-requests\ufe0f",level:3},{value:"Additional considerations on Business Rules\u2714\ufe0f",id:"additional-considerations-on-business-rules\ufe0f",level:3}];function h(e){const o={a:"a",admonition:"admonition",h1:"h1",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components},{TipContactCustomerCare:s}=o;return s||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipContactCustomerCare",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-limit-options-through-business-rules",children:"How to limit options through Business Rules"}),"\n",(0,t.jsx)(o.h3,{id:"what-are-the-business-rules-that-i-can-incorporate-into-my-requests",children:"What are the Business Rules that I can incorporate into my requests?\ud83d\udca1"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"CHEAPER_AMOUNT"}),": The cheapest options is returned without exceeding the optionsQuota limit."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"ROOM_TYPE"}),": It groups the option by room type without exceeding the optionsQuota limit."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:"https://storage.travelgate.com/kbase/businessRules_2.jpg",alt:"businessRules_2"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.admonition,{type:"info",children:(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.strong,{children:"optionsQuota"})," makes reference to the maximum number of options per mealplan returned in search response."]})}),"\n",(0,t.jsx)(o.h3,{id:"how-can-i-set-up-business-rules-in-my-requests\ufe0f",children:"How can I set up Business Rules in my requests?\ud83d\udee0\ufe0f"}),"\n",(0,t.jsxs)(o.p,{children:["To configure Business Rules in your Search Query, simply include the ",(0,t.jsx)(o.strong,{children:"BusinessRulesInput"})," in your request settings:"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:"https://storage.travelgate.com/kbase/businessRules_1.jpg",alt:"businessRules_1"})}),"\n",(0,t.jsxs)(o.admonition,{type:"tip",children:[(0,t.jsx)(o.mdxAdmonitionTitle,{}),(0,t.jsxs)(o.p,{children:["You can also configure your own Business Rules implementing our ",(0,t.jsx)(o.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/overview",children:"Aggregation plugin"}),".  More information on Business Rules on our ",(0,t.jsx)(o.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"API Documentation"}),"."]})]}),"\n",(0,t.jsx)(o.h3,{id:"additional-considerations-on-business-rules\ufe0f",children:"Additional considerations on Business Rules\u2714\ufe0f"}),"\n",(0,t.jsx)(o.p,{children:"Please note that we filter options by utilizing a limited combination of room types:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Initially, we group ",(0,t.jsx)(o.strong,{children:"options with the same room type/classification"})," together. For instance, you may receive options like Standard-Standard-Standard-Standard or Junior-Junior-Junior-Junior."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Subsequently, we ",(0,t.jsx)(o.strong,{children:"combine the cheapest rooms with the remaining ones"}),", ensuring that duplicates are checked and the options do not exceed the specified optionsQuota limit.\nIf a Buyer specifies a BusinessRules value, it will be implemented when the number of returned options surpasses the optionsQuota. However, if the Buyer does not provide any businessRules values, the default businessRules of CheaperAmount will be applied."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,o,s)=>{var t=s(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,s){var t,i={},l=null,h=null;for(t in void 0!==s&&(l=""+s),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(h=o.ref),o)r.call(o,t)&&!a.hasOwnProperty(t)&&(i[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===i[t]&&(i[t]=o[t]);return{$$typeof:n,type:e,key:l,ref:h,props:i,_owner:u.current}}o.Fragment=i,o.jsx=l,o.jsxs=l},74848:(e,o,s)=>{e.exports=s(21020)},28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>u});var t=s(96540);const n={},i=t.createContext(n);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function u(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);