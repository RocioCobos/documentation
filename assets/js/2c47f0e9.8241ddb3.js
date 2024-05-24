/*! For license information please see 2c47f0e9.8241ddb3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10541],{29470:(e,o,a)=>{a.r(o),a.d(o,{Badge:()=>h,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>l,default:()=>j,frontMatter:()=>t,metadata:()=>i,toc:()=>m});var n=a(74848),s=a(28453),d=a(96540);const t={id:"hotel-booking-amend",title:"HotelBookingAmend",hide_table_of_contents:!1},l=void 0,i={id:"objects/hotel-booking-amend",title:"HotelBookingAmend",description:"No description",source:"@site/api/objects/hotel-booking-amend.mdx",sourceDirName:"objects",slug:"/objects/hotel-booking-amend",permalink:"/api/objects/hotel-booking-amend",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-booking-amend",title:"HotelBookingAmend",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelBookPayload",permalink:"/api/objects/hotel-book-payload"},next:{title:"HotelBookingDetail",permalink:"/api/objects/hotel-booking-detail"}},c={},r=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const o={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const o={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:o,children:a,startOpen:t=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[i,c]=(0,d.useState)(t);return(0,n.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:o}),i&&a]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelBookingAmend.<b>auditData</b></code><Bullet></Bullet><code>AuditData</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookingamendauditdataauditdata-",level:4},{value:'<code>HotelBookingAmend.<b>amendedBookingDetail</b></code><Bullet></Bullet><code>HotelBookingDetail</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookingamendamendedbookingdetailhotelbookingdetail-",level:4},{value:'<code>HotelBookingAmend.<b>amendFee</b></code><Bullet></Bullet><code>Price</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookingamendamendfeeprice-",level:4},{value:'<code>HotelBookingAmend.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookingamendadvisemessageadvisemessage--",level:4},{value:'<code>HotelBookingAmend.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookingamendadvisemessageleveladvisemessagelevel--",level:5},{value:"Member of",id:"member-of",level:3}];function x(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"No description"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-graphql",children:"type HotelBookingAmend {\n  auditData: AuditData\n  amendedBookingDetail: HotelBookingDetail\n  amendFee: Price\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,n.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(o.h4,{id:"hotelbookingamendauditdataauditdata-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookingAmend.",(0,n.jsx)("b",{children:"auditData"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(o.a,{href:"/api/objects/audit-data",children:(0,n.jsx)(o.code,{children:"AuditData"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Data sent and received in the supplier's native format."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hotelbookingamendamendedbookingdetailhotelbookingdetail-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookingAmend.",(0,n.jsx)("b",{children:"amendedBookingDetail"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(o.a,{href:"/api/objects/hotel-booking-detail",children:(0,n.jsx)(o.code,{children:"HotelBookingDetail"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Details about amended booking"}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hotelbookingamendamendfeeprice-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookingAmend.",(0,n.jsx)("b",{children:"amendFee"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(o.a,{href:"/api/objects/price",children:(0,n.jsx)(o.code,{children:"Price"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Specifies the fee (Gross, Net and Amount) of the amendment fee."}),"\n"]}),"\n",(0,n.jsxs)(o.h4,{id:"hotelbookingamendadvisemessageadvisemessage--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookingAmend.",(0,n.jsx)("b",{children:"adviseMessage"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(o.a,{href:"/api/objects/advise-message",children:(0,n.jsx)(o.code,{children:"[AdviseMessage!]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"List of advise messages (errors, warnings and/or info messages)."}),"\n",(0,n.jsxs)(o.h5,{id:"hotelbookingamendadvisemessageleveladvisemessagelevel--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookingAmend.adviseMessage.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(o.a,{href:"/api/enums/advise-message-level",children:(0,n.jsx)(o.code,{children:"[AdviseMessageLevel]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/api/objects/hotel-xmutation",children:(0,n.jsx)(o.code,{children:"HotelXMutation"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(r,{}),(0,n.jsx)(o.a,{href:"/api/objects/hotel-xquery",children:(0,n.jsx)(o.code,{children:"HotelXQuery"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},21020:(e,o,a)=>{var n=a(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,a){var n,d={},c=null,r=null;for(n in void 0!==a&&(c=""+a),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(r=o.ref),o)t.call(o,n)&&!i.hasOwnProperty(n)&&(d[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===d[n]&&(d[n]=o[n]);return{$$typeof:s,type:e,key:c,ref:r,props:d,_owner:l.current}}o.Fragment=d,o.jsx=c,o.jsxs=c},74848:(e,o,a)=>{e.exports=a(21020)},28453:(e,o,a)=>{a.d(o,{R:()=>t,x:()=>l});var n=a(96540);const s={},d=n.createContext(s);function t(e){const o=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);