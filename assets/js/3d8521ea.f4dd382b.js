/*! For license information please see 3d8521ea.f4dd382b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1272],{89944:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>g,Details:()=>x,SpecifiedBy:()=>r,assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>b});var i=s(17624),o=s(4552),t=s(11504);const a={id:"insights-xbooking-detail-connection",title:"InsightsXBookingDetailConnection"},d=void 0,l={id:"objects/insights-xbooking-detail-connection",title:"InsightsXBookingDetailConnection",description:"Booking Details",source:"@site/api/objects/insights-xbooking-detail-connection.mdx",sourceDirName:"objects",slug:"/objects/insights-xbooking-detail-connection",permalink:"/api/objects/insights-xbooking-detail-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"insights-xbooking-detail-connection",title:"InsightsXBookingDetailConnection"},sidebar:"schemaSidebar",previous:{title:"InsightsXBookingAggregation",permalink:"/api/objects/insights-xbooking-aggregation"},next:{title:"InsightsXBookingDetailEdge",permalink:"/api/objects/insights-xbooking-detail-edge"}},c={},g=()=>{const e={span:"span",...(0,o.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},r=e=>{const n={a:"a",...(0,o.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,o.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Booking Details",id:"booking-details",level:2},{value:"Fields",id:"fields",level:3},{value:'<code>InsightsXBookingDetailConnection.<b>edges</b></code><Bullet></Bullet><code>[InsightsXBookingDetailEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailconnectionedgesinsightsxbookingdetailedge--",level:4},{value:'<code>InsightsXBookingDetailConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailconnectionpageinfopageinfo--",level:4},{value:'<code>InsightsXBookingDetailConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailconnectionadvisemessageadvisemessage--",level:4},{value:'<code>InsightsXBookingDetailConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingdetailconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:s,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,o.M)()},[l,c]=(0,t.useState)(a);return(0,i.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&s]})};function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"booking-details",children:"Booking Details"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"type InsightsXBookingDetailConnection {\n  edges: [InsightsXBookingDetailEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.h4,{id:"insightsxbookingdetailconnectionedgesinsightsxbookingdetailedge--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetailConnection.",(0,i.jsx)("b",{children:"edges"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(n.a,{href:"/api/objects/insights-xbooking-detail-edge",children:(0,i.jsx)(n.code,{children:"[InsightsXBookingDetailEdge]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(n.h4,{id:"insightsxbookingdetailconnectionpageinfopageinfo--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetailConnection.",(0,i.jsx)("b",{children:"pageInfo"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(n.a,{href:"/api/objects/page-info",children:(0,i.jsx)(n.code,{children:"PageInfo!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsx)(n.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(n.h4,{id:"insightsxbookingdetailconnectionadvisemessageadvisemessage--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetailConnection.",(0,i.jsx)("b",{children:"adviseMessage"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(n.a,{href:"/api/objects/advise-message",children:(0,i.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.h5,{id:"insightsxbookingdetailconnectionadvisemessageleveladvisemessagelevel--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingDetailConnection.adviseMessage.",(0,i.jsx)("b",{children:"level"})]})}),(0,i.jsx)(g,{}),(0,i.jsx)(n.a,{href:"/api/enums/advise-message-level",children:(0,i.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/objects/insights-xbooking-report",children:(0,i.jsx)(n.code,{children:"InsightsXBookingReport"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},44808:(e,n,s)=>{var i=s(11504),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var i,t={},c=null,g=null;for(i in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(g=n.ref),n)a.call(n,i)&&!l.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:o,type:e,key:c,ref:g,props:t,_owner:d.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},17624:(e,n,s)=>{e.exports=s(44808)},4552:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>a});var i=s(11504);const o={},t=i.createContext(o);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);