/*! For license information please see 05010d6f.907a63a2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79740],{93784:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>h,Bullet:()=>g,Details:()=>j,SpecifiedBy:()=>l,assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>x});var s=t(17624),n=t(4552),r=t(11504);const d={id:"stats-aggregation-data",title:"StatsAggregationData"},o=void 0,i={id:"objects/stats-aggregation-data",title:"StatsAggregationData",description:"No description",source:"@site/api/objects/stats-aggregation-data.mdx",sourceDirName:"objects",slug:"/objects/stats-aggregation-data",permalink:"/api/objects/stats-aggregation-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"stats-aggregation-data",title:"StatsAggregationData"},sidebar:"schemaSidebar",previous:{title:"StatsAggregationConnection",permalink:"/api/objects/stats-aggregation-connection"},next:{title:"StatsAggregationEdge",permalink:"/api/objects/stats-aggregation-edge"}},c={},g=()=>{const e={span:"span",...(0,n.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const a={a:"a",...(0,n.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,n.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>StatsAggregationData.<b>hits</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdatahitsint--",level:4},{value:'<code>StatsAggregationData.<b>totalTime</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdatatotaltimeint--",level:4},{value:'<code>StatsAggregationData.<b>buyer</b></code><Bullet></Bullet><code>Organization</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdatabuyerorganization-",level:4},{value:'<code>StatsAggregationData.<b>seller</b></code><Bullet></Bullet><code>Organization</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdatasellerorganization-",level:4},{value:'<code>StatsAggregationData.<b>access</b></code><Bullet></Bullet><code>Access</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdataaccessaccess-",level:4},{value:'<code>StatsAggregationData.<b>client</b></code><Bullet></Bullet><code>Client</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdataclientclient-",level:4},{value:'<code>StatsAggregationData.<b>supplier</b></code><Bullet></Bullet><code>Supplier</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdatasuppliersupplier-",level:4},{value:'<code>StatsAggregationData.<b>operation</b></code><Bullet></Bullet><code>Operation</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdataoperationoperation-",level:4},{value:'<code>StatsAggregationData.<b>operationType</b></code><Bullet></Bullet><code>OperationType</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdataoperationtypeoperationtype-",level:4},{value:'<code>StatsAggregationData.<b>errorCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdataerrorcodeid-",level:4},{value:'<code>StatsAggregationData.<b>errorType</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdataerrortypeid-",level:4},{value:'<code>StatsAggregationData.<b>trafficType</b></code><Bullet></Bullet><code>TrafficType</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdatatraffictypetraffictype-",level:4},{value:'<code>StatsAggregationData.<b>time</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdatatimedatetime-",level:4},{value:'<code>StatsAggregationData.<b>api</b></code><Bullet></Bullet><code>API</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdataapiapi-",level:4},{value:'<code>StatsAggregationData.<b>deaggregateData</b></code><Bullet></Bullet><code>StatsAggregationConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdatadeaggregatedatastatsaggregationconnection-",level:4},{value:'<code>StatsAggregationData.deaggregateData.<b>where</b></code><Bullet></Bullet><code>StatsAggregationConnectionWhereInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsaggregationdatadeaggregatedatawherestatsaggregationconnectionwhereinput--",level:5},{value:"Member Of",id:"member-of",level:3}],j=({dataOpen:e,dataClose:a,children:t,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,n.M)()},[i,c]=(0,r.useState)(d);return(0,s.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&t]})};function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type StatsAggregationData {\n  hits: Int!\n  totalTime: Int!\n  buyer: Organization\n  seller: Organization\n  access: Access\n  client: Client\n  supplier: Supplier\n  operation: Operation\n  operationType: OperationType\n  errorCode: ID\n  errorType: ID\n  trafficType: TrafficType\n  time: DateTime\n  api: API\n  deaggregateData(\n    where: StatsAggregationConnectionWhereInput!\n  ): StatsAggregationConnection\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdatahitsint--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"hits"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/scalars/int",children:(0,s.jsx)(a.code,{children:"Int!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"number of hits"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdatatotaltimeint--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"totalTime"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/scalars/int",children:(0,s.jsx)(a.code,{children:"Int!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"total time of hits"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdatabuyerorganization-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"buyer"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/objects/organization",children:(0,s.jsx)(a.code,{children:"Organization"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"buyer returned if you you group by BUYER_ORGANIZATION"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdatasellerorganization-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"seller"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/objects/organization",children:(0,s.jsx)(a.code,{children:"Organization"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"seller returned if you group by SELLER_ORGANIZATION"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdataaccessaccess-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"access"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/objects/access",children:(0,s.jsx)(a.code,{children:"Access"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"access returned if you group by ACCESS"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdataclientclient-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"client"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/objects/client",children:(0,s.jsx)(a.code,{children:"Client"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"client returned if you group by CLIENT"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdatasuppliersupplier-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"supplier"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/objects/supplier",children:(0,s.jsx)(a.code,{children:"Supplier"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"supplier returned if you group by SUPPLIER"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdataoperationoperation-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"operation"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/objects/operation",children:(0,s.jsx)(a.code,{children:"Operation"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"operation returned if you group by OPERATION"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdataoperationtypeoperationtype-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"operationType"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/enums/operation-type",children:(0,s.jsx)(a.code,{children:"OperationType"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"operationType returned if you group by OPERATION TYPE"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdataerrorcodeid-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"errorCode"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/scalars/id",children:(0,s.jsx)(a.code,{children:"ID"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"error code returned if you group by ERROR CODE"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdataerrortypeid-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"errorType"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/scalars/id",children:(0,s.jsx)(a.code,{children:"ID"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"error type returned if you group by ERROR TYPE"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdatatraffictypetraffictype-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"trafficType"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/enums/traffic-type",children:(0,s.jsx)(a.code,{children:"TrafficType"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"traffic type returned if you group by TRAFFIC TYPE"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdatatimedatetime-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"time"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"returned time value if groupByTime is used"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdataapiapi-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"api"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/objects/api",children:(0,s.jsx)(a.code,{children:"API"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"api code returned if you groupBy API"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"statsaggregationdatadeaggregatedatastatsaggregationconnection-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.",(0,s.jsx)("b",{children:"deaggregateData"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/objects/stats-aggregation-connection",children:(0,s.jsx)(a.code,{children:"StatsAggregationConnection"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"to get data deaggregate from this node"}),"\n",(0,s.jsxs)(a.h5,{id:"statsaggregationdatadeaggregatedatawherestatsaggregationconnectionwhereinput--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsAggregationData.deaggregateData.",(0,s.jsx)("b",{children:"where"})]})}),(0,s.jsx)(g,{}),(0,s.jsx)(a.a,{href:"/api/inputs/stats-aggregation-connection-where-input",children:(0,s.jsx)(a.code,{children:"StatsAggregationConnectionWhereInput!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/objects/stats-aggregation",children:(0,s.jsx)(a.code,{children:"StatsAggregation"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:a}={...(0,n.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},44808:(e,a,t)=>{var s=t(11504),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var s,r={},c=null,g=null;for(s in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(g=a.ref),a)d.call(a,s)&&!i.hasOwnProperty(s)&&(r[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===r[s]&&(r[s]=a[s]);return{$$typeof:n,type:e,key:c,ref:g,props:r,_owner:o.current}}a.Fragment=r,a.jsx=c,a.jsxs=c},17624:(e,a,t)=>{e.exports=t(44808)},4552:(e,a,t)=>{t.d(a,{I:()=>o,M:()=>d});var s=t(11504);const n={},r=s.createContext(n);function d(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);