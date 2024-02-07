/*! For license information please see 6dd65b7c.77d95ef1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11232],{99511:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>l,assets:()=>r,contentTitle:()=>g,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>b});var n=a(17624),i=a(4552),o=a(11504);const t={id:"insights-xbooking-aggregation",title:"InsightsXBookingAggregation"},g=void 0,d={id:"objects/insights-xbooking-aggregation",title:"InsightsXBookingAggregation",description:"No description",source:"@site/api/objects/insights-xbooking-aggregation.mdx",sourceDirName:"objects",slug:"/objects/insights-xbooking-aggregation",permalink:"/api/objects/insights-xbooking-aggregation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"insights-xbooking-aggregation",title:"InsightsXBookingAggregation"},sidebar:"schemaSidebar",previous:{title:"InsightsXBookingAggregationEdge",permalink:"/api/objects/insights-xbooking-aggregation-edge"},next:{title:"InsightsXBookingDetailConnection",permalink:"/api/objects/insights-xbooking-detail-connection"}},r={},c=()=>{const e={span:"span",...(0,i.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const s={a:"a",...(0,i.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,i.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>InsightsXBookingAggregation.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationcodeid--",level:4},{value:'<code>InsightsXBookingAggregation.<b>InsightsXBookingAggregationData</b></code><Bullet></Bullet><code>BookingAggregation</code> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationinsightsxbookingaggregationdatabookingaggregation-",level:4},{value:'<code>InsightsXBookingAggregation.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationadvisemessageadvisemessage--",level:4},{value:'<code>InsightsXBookingAggregation.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>InsightsXBookingAggregation.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationcreatedatdatetime--",level:4},{value:'<code>InsightsXBookingAggregation.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightsxbookingaggregationupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:a,startOpen:t=!1})=>{const g={details:"details",summary:"summary",...(0,i.M)()},[d,r]=(0,o.useState)(t);return(0,n.jsxs)(g.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(g.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&a]})};function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type InsightsXBookingAggregation implements Node {\n  code: ID!\n  InsightsXBookingAggregationData: BookingAggregation\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"insightsxbookingaggregationcodeid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregation.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"insightsxbookingaggregationinsightsxbookingaggregationdatabookingaggregation-",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregation.",(0,n.jsx)("b",{children:"InsightsXBookingAggregationData"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/objects/booking-aggregation",children:(0,n.jsx)(s.code,{children:"BookingAggregation"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"insightsxbookingaggregationadvisemessageadvisemessage--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregation.",(0,n.jsx)("b",{children:"adviseMessage"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,n.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.h5,{id:"insightsxbookingaggregationadvisemessageleveladvisemessagelevel--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregation.adviseMessage.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,n.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"insightsxbookingaggregationcreatedatdatetime--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregation.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"insightsxbookingaggregationupdatedatdatetime--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsXBookingAggregation.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,n.jsx)(s.code,{children:"DateTime!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)(s.h4,{id:"node-",children:[(0,n.jsx)(s.a,{href:"/api/interfaces/node",children:(0,n.jsx)(s.code,{children:"Node"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/objects/insights-xbooking-aggregation-edge",children:(0,n.jsx)(s.code,{children:"InsightsXBookingAggregationEdge"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},44808:(e,s,a)=>{var n=a(11504),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,g=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function r(e,s,a){var n,o={},r=null,c=null;for(n in void 0!==a&&(r=""+a),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(c=s.ref),s)t.call(s,n)&&!d.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:i,type:e,key:r,ref:c,props:o,_owner:g.current}}s.Fragment=o,s.jsx=r,s.jsxs=r},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>g,M:()=>t});var n=a(11504);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function g(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);