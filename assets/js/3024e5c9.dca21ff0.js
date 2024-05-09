/*! For license information please see 3024e5c9.dca21ff0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78502],{72905:(i,e,n)=>{n.r(e),n.d(e,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>r,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var t=n(74848),a=n(28453),o=n(96540);const c={id:"traffic-optimization-connection-data",title:"TrafficOptimizationConnectionData"},r=void 0,s={id:"types/objects/traffic-optimization-connection-data",title:"TrafficOptimizationConnectionData",description:"No description",source:"@site/api/types/objects/traffic-optimization-connection-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/traffic-optimization-connection-data",permalink:"/api/types/objects/traffic-optimization-connection-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-connection-data",title:"TrafficOptimizationConnectionData"},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationConnectionConnection",permalink:"/api/types/objects/traffic-optimization-connection-connection"},next:{title:"TrafficOptimizationConnectionEdge",permalink:"/api/types/objects/traffic-optimization-connection-edge"}},d={},l=()=>{const i={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=i=>{const e={a:"a",...(0,a.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(e.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:i.url,title:"Specified by "+i.url,children:"\u2398"})]})},p=i=>{const e={span:"span",...(0,a.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{className:i.class,children:i.text})})},h=({dataOpen:i,dataClose:e,children:n,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,a.R)()},[s,d]=(0,o.useState)(c);return(0,t.jsxs)(r.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:i=>{i.preventDefault(),d((i=>!i))},style:{listStyle:"none"},children:s?i:e}),s&&n]})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>TrafficOptimizationConnectionData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondatacodeid--",level:4},{value:'<code>TrafficOptimizationConnectionData.<b>organizationBuyer</b></code><Bullet></Bullet><code>TrafficOptimizationOrganization!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondataorganizationbuyertrafficoptimizationorganization--",level:4},{value:'<code>TrafficOptimizationConnectionData.<b>organizationSeller</b></code><Bullet></Bullet><code>TrafficOptimizationOrganization!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondataorganizationsellertrafficoptimizationorganization--",level:4},{value:'<code>TrafficOptimizationConnectionData.<b>historicalActions</b></code><Bullet></Bullet><code>TrafficOptimizationHistoricalActions</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondatahistoricalactionstrafficoptimizationhistoricalactions-",level:4},{value:'<code>TrafficOptimizationConnectionData.historicalActions.<b>where</b></code><Bullet></Bullet><code>HistoricalActionsWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondatahistoricalactionswherehistoricalactionswhereinput-",level:5},{value:'<code>TrafficOptimizationConnectionData.<b>configuration</b></code><Bullet></Bullet><code>TrafficOptimizationConnectionConfiguration!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondataconfigurationtrafficoptimizationconnectionconfiguration--",level:4},{value:'<code>TrafficOptimizationConnectionData.<b>accesses</b></code><Bullet></Bullet><code>TrafficOptimizationAccessConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondataaccessestrafficoptimizationaccessconnection-",level:4},{value:"Member Of",id:"member-of",level:3}];function g(i){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"No description"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-graphql",children:"type TrafficOptimizationConnectionData {\n  code: ID!\n  organizationBuyer: TrafficOptimizationOrganization!\n  organizationSeller: TrafficOptimizationOrganization!\n  historicalActions(\n    where: HistoricalActionsWhereInput\n  ): TrafficOptimizationHistoricalActions\n  configuration: TrafficOptimizationConnectionConfiguration!\n  accesses: TrafficOptimizationAccessConnection\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(e.h4,{id:"trafficoptimizationconnectiondatacodeid--",children:[(0,t.jsx)(e.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(e.a,{href:"/api/types/scalars/id",children:(0,t.jsx)(e.code,{children:"ID!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(e.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(e.h4,{id:"trafficoptimizationconnectiondataorganizationbuyertrafficoptimizationorganization--",children:[(0,t.jsx)(e.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"organizationBuyer"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(e.a,{href:"/api/types/objects/traffic-optimization-organization",children:(0,t.jsx)(e.code,{children:"TrafficOptimizationOrganization!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(e.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(e.h4,{id:"trafficoptimizationconnectiondataorganizationsellertrafficoptimizationorganization--",children:[(0,t.jsx)(e.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"organizationSeller"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(e.a,{href:"/api/types/objects/traffic-optimization-organization",children:(0,t.jsx)(e.code,{children:"TrafficOptimizationOrganization!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(e.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(e.h4,{id:"trafficoptimizationconnectiondatahistoricalactionstrafficoptimizationhistoricalactions-",children:[(0,t.jsx)(e.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"historicalActions"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(e.a,{href:"/api/types/objects/traffic-optimization-historical-actions",children:(0,t.jsx)(e.code,{children:"TrafficOptimizationHistoricalActions"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.h5,{id:"trafficoptimizationconnectiondatahistoricalactionswherehistoricalactionswhereinput-",children:[(0,t.jsx)(e.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.historicalActions.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(e.a,{href:"/api/types/inputs/historical-actions-where-input",children:(0,t.jsx)(e.code,{children:"HistoricalActionsWhereInput"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,t.jsxs)(e.h4,{id:"trafficoptimizationconnectiondataconfigurationtrafficoptimizationconnectionconfiguration--",children:[(0,t.jsx)(e.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"configuration"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(e.a,{href:"/api/types/objects/traffic-optimization-connection-configuration",children:(0,t.jsx)(e.code,{children:"TrafficOptimizationConnectionConfiguration!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(e.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(e.h4,{id:"trafficoptimizationconnectiondataaccessestrafficoptimizationaccessconnection-",children:[(0,t.jsx)(e.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"accesses"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(e.a,{href:"/api/types/objects/traffic-optimization-access-connection",children:(0,t.jsx)(e.code,{children:"TrafficOptimizationAccessConnection"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(e.blockquote,{children:"\n"}),"\n",(0,t.jsx)(e.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/api/types/objects/traffic-optimization-connection",children:(0,t.jsx)(e.code,{children:"TrafficOptimizationConnection"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(i={}){const{wrapper:e}={...(0,a.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(g,{...i})}):g(i)}},21020:(i,e,n)=>{var t=n(96540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(i,e,n){var t,o={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(l=e.ref),e)c.call(e,t)&&!s.hasOwnProperty(t)&&(o[t]=e[t]);if(i&&i.defaultProps)for(t in e=i.defaultProps)void 0===o[t]&&(o[t]=e[t]);return{$$typeof:a,type:i,key:d,ref:l,props:o,_owner:r.current}}e.Fragment=o,e.jsx=d,e.jsxs=d},74848:(i,e,n)=>{i.exports=n(21020)},28453:(i,e,n)=>{n.d(e,{R:()=>c,x:()=>r});var t=n(96540);const a={},o=t.createContext(a);function c(i){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function r(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:c(i.components),t.createElement(o.Provider,{value:e},i.children)}}}]);