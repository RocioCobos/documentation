/*! For license information please see 21e6c980.2d781cb4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72036],{24412:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>l,assets:()=>r,contentTitle:()=>t,default:()=>u,frontMatter:()=>g,metadata:()=>d,toc:()=>b});var o=s(17624),i=s(4552),a=s(11504);const g={id:"insights-xbooking-aggregation-connection",title:"InsightsXBookingAggregationConnection"},t=void 0,d={id:"objects/insights-xbooking-aggregation-connection",title:"InsightsXBookingAggregationConnection",description:"Booking Aggregation",source:"@site/api/objects/insights-xbooking-aggregation-connection.mdx",sourceDirName:"objects",slug:"/objects/insights-xbooking-aggregation-connection",permalink:"/api/objects/insights-xbooking-aggregation-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"insights-xbooking-aggregation-connection",title:"InsightsXBookingAggregationConnection"},sidebar:"schemaSidebar",previous:{title:"InsightsQuery",permalink:"/api/objects/insights-query"},next:{title:"InsightsXBookingAggregationEdge",permalink:"/api/objects/insights-xbooking-aggregation-edge"}},r={},c=()=>{const e={span:"span",...(0,i.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const n={a:"a",...(0,i.M)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,i.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Booking Aggregation",id:"booking-aggregation",level:2},{value:"Fields",id:"fields",level:3},{value:'<code>InsightsXBookingAggregationConnection.<b>edges</b></code><Bullet></Bullet><code>[InsightsXBookingAggregationEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationconnectionedgesinsightsxbookingaggregationedge--",level:4},{value:'<code>InsightsXBookingAggregationConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationconnectionpageinfopageinfo--",level:4},{value:'<code>InsightsXBookingAggregationConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationconnectionadvisemessageadvisemessage--",level:4},{value:'<code>InsightsXBookingAggregationConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:s,startOpen:g=!1})=>{const t={details:"details",summary:"summary",...(0,i.M)()},[d,r]=(0,a.useState)(g);return(0,o.jsxs)(t.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(t.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&s]})};function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"booking-aggregation",children:"Booking Aggregation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type InsightsXBookingAggregationConnection {\n  edges: [InsightsXBookingAggregationEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"insightsxbookingaggregationconnectionedgesinsightsxbookingaggregationedge--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregationConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(n.a,{href:"/api/objects/insights-xbooking-aggregation-edge",children:(0,o.jsx)(n.code,{children:"[InsightsXBookingAggregationEdge]"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"insightsxbookingaggregationconnectionpageinfopageinfo--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregationConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(n.a,{href:"/api/objects/page-info",children:(0,o.jsx)(n.code,{children:"PageInfo!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"insightsxbookingaggregationconnectionadvisemessageadvisemessage--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregationConnection.",(0,o.jsx)("b",{children:"adviseMessage"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(n.a,{href:"/api/objects/advise-message",children:(0,o.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.h5,{id:"insightsxbookingaggregationconnectionadvisemessageleveladvisemessagelevel--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregationConnection.adviseMessage.",(0,o.jsx)("b",{children:"level"})]})}),(0,o.jsx)(c,{}),(0,o.jsx)(n.a,{href:"/api/enums/advise-message-level",children:(0,o.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/objects/insights-xbooking-report",children:(0,o.jsx)(n.code,{children:"InsightsXBookingReport"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},44808:(e,n,s)=>{var o=s(11504),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,t=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,s){var o,a={},r=null,c=null;for(o in void 0!==s&&(r=""+s),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(c=n.ref),n)g.call(n,o)&&!d.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:i,type:e,key:r,ref:c,props:a,_owner:t.current}}n.Fragment=a,n.jsx=r,n.jsxs=r},17624:(e,n,s)=>{e.exports=s(44808)},4552:(e,n,s)=>{s.d(n,{I:()=>t,M:()=>g});var o=s(11504);const i={},a=o.createContext(i);function g(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:g(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);