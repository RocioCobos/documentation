/*! For license information please see a5a4e03d.86dcae41.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71836],{36264:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var o=i(17624),s=i(4552);const t={sidebar_position:2},a="Hotel Buyers API - Cancel Policies",l={id:"faqs/faqs-cancel-policies/hotel-buyers-api-cancel-policies",title:"Hotel Buyers API - Cancel Policies",description:"In TravelgateX Quote (Valuation) response, you'll find a number of fields that offer detailed insights. Among these, we've included specific fields that give you clearer information about cancellation policies, so you can have a more precise understanding of your options.",source:"@site/kb/faqs/faqs-cancel-policies/hotel-buyers-api-cancel-policies.md",sourceDirName:"faqs/faqs-cancel-policies",slug:"/faqs/faqs-cancel-policies/hotel-buyers-api-cancel-policies",permalink:"/kb/faqs/faqs-cancel-policies/hotel-buyers-api-cancel-policies",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"kbSidebar",previous:{title:"Hotel Sellers API - Cancel Policies",permalink:"/kb/faqs/faqs-cancel-policies/hotel-sellers-api-cancel-policies"},next:{title:"Cancel Policies and Deadlines",permalink:"/kb/faqs/faqs-cancel-policies/cancel-policies-and-deadlines-closer-look"}},r={},c=[];function d(e){const n={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"hotel-buyers-api---cancel-policies",children:"Hotel Buyers API - Cancel Policies"}),"\n",(0,o.jsxs)(n.p,{children:["In TravelgateX ",(0,o.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote",children:"Quote (Valuation)"})," response, you'll find a number of fields that offer detailed insights. Among these, we've included specific fields that give you clearer information about cancellation policies, so you can have a more precise understanding of your options."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"TIMEZONE:"}),(0,o.jsx)(n.br,{}),"\n","We have added the new field \u201cTimezone\u201d in our Metadata method:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://storage.travelgate.com/kbase/hotel_buyers_api_cancelpolicies1.jpg",alt:"hotel_buyers_api_cancelpolicies1"})}),"\n",(0,o.jsxs)(n.p,{children:["Timezone (see the ",(0,o.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata",children:"Metadata"})," docs to check all possible values) will specify the timezone in UTC in which the cancellation policies are located."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"If you have any doubts about the timezone returned by your Seller (for example, if TimeZone is set as Unknown) we advise you to add an offset of +14 hours in order to avoid unexpected penalties caused by timezone difference."})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DEADLINE:"}),(0,o.jsx)(n.br,{}),"\n",'Additionally, we have added the "Deadline" field on ',(0,o.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/quote",children:"CancellationPolicies"})," returned in Quote/Valuation response, in order to provide more precise information and avoid losing competitiveness."]}),"\n",(0,o.jsxs)(n.p,{children:["This field is not subjected to any ambiguity as it is a date in ",(0,o.jsx)(n.strong,{children:"UTC-0 Standard"}),". The conversion of the date is made according to the value specified on the Metadata TimeZone."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://storage.travelgate.com/kbase/deadline-format-updated.jpg",alt:"deadline-format-updated"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"CALCULATED DEADLINE:"}),(0,o.jsx)(n.br,{}),"\n",'Finally, we have also added a "CalculatedDeadline" field to specify if the Deadline has been taken from the Seller\u2019s response or if it has been calculated by TravelgateX.']}),"\n",(0,o.jsx)(n.p,{children:"Please check the following table for a clear view of how we will treat the Cancellation Policies returned by the Seller according to the TimeZone established on the Metadata:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://storage.travelgate.com/kbase/hotel_buyers_api_cancelpolicies3.jpg",alt:"hotel_buyers_api_cancelpolicies3"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"What do I need to do?"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"hoursBefore node:"})," TravelgateX returns the information as provided by the Seller - no extra hours added on our side. The logic regarding this information should be managed on your side."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"deadline node:"})," TravelgateX returns the calculated deadline information - please check above chart. ",(0,o.jsx)(n.em,{children:"Please make sure you use this node"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["The limit in which a booking can be cancelled without penalty is specified on the field ",(0,o.jsx)(n.strong,{children:"HoursBefore"}),". This parameter informs about the maximum hours that could pass before the penalty starts to apply."]}),(0,o.jsx)(n.p,{children:"Transparency is a fundamental value in our culture and as such we avoid modifying the information provided by our partners. For this reason, hoursBefore value from cancellationPolicies will be returned without adding extra hours."})]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},44808:(e,n,i)=>{var o=i(11504),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var o,t={},c=null,d=null;for(o in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,o)&&!r.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:s,type:e,key:c,ref:d,props:t,_owner:l.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},17624:(e,n,i)=>{e.exports=i(44808)},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>a});var o=i(11504);const s={},t=o.createContext(s);function a(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);