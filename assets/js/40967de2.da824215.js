/*! For license information please see 40967de2.da824215.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56542],{66911:(e,o,a)=>{a.r(o),a.d(o,{Badge:()=>b,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>r,toc:()=>x});var t=a(74848),s=a(28453),n=a(96540);const l={id:"hotel-book-payload",title:"HotelBookPayload",hide_table_of_contents:!1},d=void 0,r={id:"objects/hotel-book-payload",title:"HotelBookPayload",description:"No description",source:"@site/api/objects/hotel-book-payload.mdx",sourceDirName:"objects",slug:"/objects/hotel-book-payload",permalink:"/api/objects/hotel-book-payload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-book-payload",title:"HotelBookPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Holder",permalink:"/api/objects/holder"},next:{title:"HotelBookingAmend",permalink:"/api/objects/hotel-booking-amend"}},c={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const o={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const o={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:o,children:a,startOpen:l=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[r,c]=(0,n.useState)(l);return(0,t.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:r?e:o}),r&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelBookPayload.<b>stats</b></code><Bullet></Bullet><code>StatsRequest</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookpayloadstatsstatsrequest-",level:4},{value:'<code>HotelBookPayload.stats.<b>token</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookpayloadstatstokenstring--",level:5},{value:'<code>HotelBookPayload.<b>auditData</b></code><Bullet></Bullet><code>AuditData</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookpayloadauditdataauditdata-",level:4},{value:'<code>HotelBookPayload.<b>booking</b></code><Bullet></Bullet><code>HotelBookingDetail</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookpayloadbookinghotelbookingdetail-",level:4},{value:'<code>HotelBookPayload.<b>errors</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookpayloaderrorserror--",level:4},{value:'<code>HotelBookPayload.<b>warnings</b></code><Bullet></Bullet><code>[Warning!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelbookpayloadwarningswarning--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Response</code> <Badge class="badge badge--secondary"></Badge>',id:"response-",level:4},{value:"Member of",id:"member-of",level:3}];function u(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"No description"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-graphql",children:"type HotelBookPayload implements Response {\n  stats(token: String!): StatsRequest\n  auditData: AuditData\n  booking: HotelBookingDetail\n  errors: [Error!]\n  warnings: [Warning!]\n}\n"})}),"\n",(0,t.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(o.h4,{id:"hotelbookpayloadstatsstatsrequest-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookPayload.",(0,t.jsx)("b",{children:"stats"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(o.a,{href:"/api/objects/stats-request",children:(0,t.jsx)(o.code,{children:"StatsRequest"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Application stats in string format"}),"\n",(0,t.jsxs)(o.h5,{id:"hotelbookpayloadstatstokenstring--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookPayload.stats.",(0,t.jsx)("b",{children:"token"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(o.a,{href:"/api/scalars/string",children:(0,t.jsx)(o.code,{children:"String!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"hotelbookpayloadauditdataauditdata-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookPayload.",(0,t.jsx)("b",{children:"auditData"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(o.a,{href:"/api/objects/audit-data",children:(0,t.jsx)(o.code,{children:"AuditData"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Data sent and received in the supplier's native format."}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"hotelbookpayloadbookinghotelbookingdetail-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookPayload.",(0,t.jsx)("b",{children:"booking"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(o.a,{href:"/api/objects/hotel-booking-detail",children:(0,t.jsx)(o.code,{children:"HotelBookingDetail"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Information about booking"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"hotelbookpayloaderrorserror--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookPayload.",(0,t.jsx)("b",{children:"errors"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(o.a,{href:"/api/objects/error",children:(0,t.jsx)(o.code,{children:"[Error!]"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Errors that abort services"}),"\n"]}),"\n",(0,t.jsxs)(o.h4,{id:"hotelbookpayloadwarningswarning--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelBookPayload.",(0,t.jsx)("b",{children:"warnings"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(o.a,{href:"/api/objects/warning",children:(0,t.jsx)(o.code,{children:"[Warning!]"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:["Potentially harmful situations or errors that won't force the service to abort.\nTo identify if it is blocked one, you can check our documentation regards this matter\n",(0,t.jsx)(o.a,{href:"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/",children:"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/"})]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(o.h4,{id:"response-",children:[(0,t.jsx)(o.a,{href:"/api/interfaces/response",children:(0,t.jsx)(o.code,{children:"Response"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(o.blockquote,{children:"\n"}),"\n",(0,t.jsx)(o.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/api/objects/hotel-xmutation",children:(0,t.jsx)(o.code,{children:"HotelXMutation"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},21020:(e,o,a)=>{var t=a(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,a){var t,n={},c=null,i=null;for(t in void 0!==a&&(c=""+a),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(i=o.ref),o)l.call(o,t)&&!r.hasOwnProperty(t)&&(n[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===n[t]&&(n[t]=o[t]);return{$$typeof:s,type:e,key:c,ref:i,props:n,_owner:d.current}}o.Fragment=n,o.jsx=c,o.jsxs=c},74848:(e,o,a)=>{e.exports=a(21020)},28453:(e,o,a)=>{a.d(o,{R:()=>l,x:()=>d});var t=a(96540);const s={},n=t.createContext(s);function l(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);