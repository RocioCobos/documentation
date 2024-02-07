/*! For license information please see 106d0494.b4f95925.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92748],{58476:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var l=i(17624),s=i(4552);const t={title:"Cancel Policies and Deadlines",sidebar_position:3},a="Cancel Policies and Deadlines: A Closer Look",r={id:"faqs/faqs-cancel-policies/cancel-policies-and-deadlines-closer-look",title:"Cancel Policies and Deadlines",description:"Case 1 \u2705",source:"@site/kb/faqs/faqs-cancel-policies/cancel-policies-and-deadlines-closer-look.md",sourceDirName:"faqs/faqs-cancel-policies",slug:"/faqs/faqs-cancel-policies/cancel-policies-and-deadlines-closer-look",permalink:"/kb/faqs/faqs-cancel-policies/cancel-policies-and-deadlines-closer-look",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Cancel Policies and Deadlines",sidebar_position:3},sidebar:"kbSidebar",previous:{title:"Hotel Buyers API - Cancel Policies",permalink:"/kb/faqs/faqs-cancel-policies/hotel-buyers-api-cancel-policies"}},o={},c=[{value:"Case 1 \u2705",id:"case-1-",level:3},{value:"Case 2 \u2705",id:"case-2-",level:3},{value:"Case 3 \u2705",id:"case-3-",level:3}];function d(e){const n={admonition:"admonition",br:"br",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"cancel-policies-and-deadlines-a-closer-look",children:"Cancel Policies and Deadlines: A Closer Look"}),"\n",(0,l.jsx)(n.h3,{id:"case-1-",children:"Case 1 \u2705"}),"\n",(0,l.jsxs)(n.p,{children:["If the Seller provides a ",(0,l.jsx)(n.strong,{children:"complete deadline with Timezone information in their API Response"}),", we will utilize that data to convert the deadline to UTC-0.\nExample:",(0,l.jsx)(n.br,{}),"\n","Given a rate with Check-In date on 25/08/2022:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"If the Supplier returns the deadline 2022-08-24T09:00:00.00+03, this is what we will return in the \u201cDeadline\u201d node in TravelgateX response: 2022-08-24T06:00:00Z"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"case-2-",children:"Case 2 \u2705"}),"\n",(0,l.jsxs)(n.p,{children:["In cases where ",(0,l.jsx)(n.strong,{children:"we do not receive a complete deadline (including the Timezone)"})," from the Seller via API Response, ",(0,l.jsx)(n.strong,{children:"but they confirm their working Timezone"})," through a ticket or email, we will establish and utilize that specific Timezone to convert the deadline to UTC-0."]}),"\n",(0,l.jsx)(n.p,{children:"Given a rate with Check-In date on 25/08/2022. If the Seller informs us that they always work in UTC+5:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Example 1:",(0,l.jsx)(n.br,{}),"\n",'If the Seller provides the deadline as "2022-08-24T09:00:00.00", we will return it as "2022-08-24T04:00:00Z" in the "Deadline" node.']}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Example 2:",(0,l.jsx)(n.br,{}),"\n",'If the Seller provides the Cancel Penalties as "DaysBefore:1", it will be represented as "2022-08-23T19:00:00Z" in the "Deadline" node.']}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Example 3:",(0,l.jsx)(n.br,{}),"\n",'When the Seller provides the Cancel Penalties as "23/08/2022", it will be converted to "2022-08-22T19:00:00Z" in the "Deadline" node.']}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Example 4:",(0,l.jsx)(n.br,{}),"\n",'If the Seller provides the Cancel Penalties as "HoursPriorCheckIn:48", it will be reflected as "2022-08-22T19:00:00Z" in the "Deadline" node.']}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"case-3-",children:"Case 3 \u2705"}),"\n",(0,l.jsxs)(n.p,{children:["If the Seller indicates (via ticket or email) that their ",(0,l.jsx)(n.strong,{children:"Timezone is unknown or based on HotelTimezone or the Buyer's Timezone"}),", we will apply a buffer of +14 hours to the Deadline node. This precautionary measure is taken to prevent any potential issues or charges."]}),"\n",(0,l.jsx)(n.p,{children:"Given a rate with Check-In date on 25/08/2022:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Example 1:\nIf the Seller provides a deadline of 2022-08-24T09:00:00.00, we will display it in the "Deadline" node as "2022-08-23T19:00:00Z".'}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Example 2:\nIf the Seller returns the Cancel Penalties as "DaysBefore:1", we will display it in the "Deadline" node as "2022-08-23T10:00:00Z".'}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Example 3:\nIf the Seller returns the Cancel Penalties as "23/08/2022", we will display it in the "Deadline" node as "2022-08-22T10:00:00Z".'}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Example 4:\nIf the Seller returns the Cancel Penalties as "HoursPriorCheckIn:48", we will display it in the "Deadline" node as "2022-08-22T10:00:00Z".'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"Interested in learning more about cancel penalties in TravelgateX? Don't forget to explore our informative articles dedicated to this topic!\ud83c\udf1f"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},44808:(e,n,i)=>{var l=i(11504),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var l,t={},c=null,d=null;for(l in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,l)&&!o.hasOwnProperty(l)&&(t[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===t[l]&&(t[l]=n[l]);return{$$typeof:s,type:e,key:c,ref:d,props:t,_owner:r.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},17624:(e,n,i)=>{e.exports=i(44808)},4552:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>a});var l=i(11504);const s={},t=l.createContext(s);function a(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);