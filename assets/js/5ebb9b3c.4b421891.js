/*! For license information please see 5ebb9b3c.4b421891.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17688],{17660:(i,n,e)=>{e.r(n),e.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>r,default:()=>b,frontMatter:()=>c,metadata:()=>s,toc:()=>h});var t=e(17624),a=e(4552),o=e(11504);const c={id:"traffic-optimization-connection-data",title:"TrafficOptimizationConnectionData"},r=void 0,s={id:"objects/traffic-optimization-connection-data",title:"TrafficOptimizationConnectionData",description:"No description",source:"@site/api/objects/traffic-optimization-connection-data.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-connection-data",permalink:"/api/objects/traffic-optimization-connection-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-connection-data",title:"TrafficOptimizationConnectionData"},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationConnectionConnection",permalink:"/api/objects/traffic-optimization-connection-connection"},next:{title:"TrafficOptimizationConnectionEdge",permalink:"/api/objects/traffic-optimization-connection-edge"}},d={},l=()=>{const i={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=i=>{const n={a:"a",...(0,a.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:i.url,title:"Specified by "+i.url,children:"\u2398"})]})},p=i=>{const n={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:i.class,children:i.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>TrafficOptimizationConnectionData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondatacodeid--",level:4},{value:'<code>TrafficOptimizationConnectionData.<b>organizationBuyer</b></code><Bullet></Bullet><code>TrafficOptimizationOrganization!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondataorganizationbuyertrafficoptimizationorganization--",level:4},{value:'<code>TrafficOptimizationConnectionData.<b>organizationSeller</b></code><Bullet></Bullet><code>TrafficOptimizationOrganization!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondataorganizationsellertrafficoptimizationorganization--",level:4},{value:'<code>TrafficOptimizationConnectionData.<b>historicalActions</b></code><Bullet></Bullet><code>TrafficOptimizationHistoricalActions</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondatahistoricalactionstrafficoptimizationhistoricalactions-",level:4},{value:'<code>TrafficOptimizationConnectionData.historicalActions.<b>where</b></code><Bullet></Bullet><code>HistoricalActionsWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondatahistoricalactionswherehistoricalactionswhereinput-",level:5},{value:'<code>TrafficOptimizationConnectionData.<b>configuration</b></code><Bullet></Bullet><code>TrafficOptimizationConnectionConfiguration!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondataconfigurationtrafficoptimizationconnectionconfiguration--",level:4},{value:'<code>TrafficOptimizationConnectionData.<b>accesses</b></code><Bullet></Bullet><code>TrafficOptimizationAccessConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationconnectiondataaccessestrafficoptimizationaccessconnection-",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:i,dataClose:n,children:e,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,a.M)()},[s,d]=(0,o.useState)(c);return(0,t.jsxs)(r.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:i=>{i.preventDefault(),d((i=>!i))},style:{listStyle:"none"},children:s?i:n}),s&&e]})};function g(i){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.M)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type TrafficOptimizationConnectionData {\n  code: ID!\n  organizationBuyer: TrafficOptimizationOrganization!\n  organizationSeller: TrafficOptimizationOrganization!\n  historicalActions(\n    where: HistoricalActionsWhereInput\n  ): TrafficOptimizationHistoricalActions\n  configuration: TrafficOptimizationConnectionConfiguration!\n  accesses: TrafficOptimizationAccessConnection\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"trafficoptimizationconnectiondatacodeid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/id",children:(0,t.jsx)(n.code,{children:"ID!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"trafficoptimizationconnectiondataorganizationbuyertrafficoptimizationorganization--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"organizationBuyer"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/traffic-optimization-organization",children:(0,t.jsx)(n.code,{children:"TrafficOptimizationOrganization!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"trafficoptimizationconnectiondataorganizationsellertrafficoptimizationorganization--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"organizationSeller"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/traffic-optimization-organization",children:(0,t.jsx)(n.code,{children:"TrafficOptimizationOrganization!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"trafficoptimizationconnectiondatahistoricalactionstrafficoptimizationhistoricalactions-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"historicalActions"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/traffic-optimization-historical-actions",children:(0,t.jsx)(n.code,{children:"TrafficOptimizationHistoricalActions"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.h5,{id:"trafficoptimizationconnectiondatahistoricalactionswherehistoricalactionswhereinput-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.historicalActions.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/inputs/historical-actions-where-input",children:(0,t.jsx)(n.code,{children:"HistoricalActionsWhereInput"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"trafficoptimizationconnectiondataconfigurationtrafficoptimizationconnectionconfiguration--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"configuration"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/traffic-optimization-connection-configuration",children:(0,t.jsx)(n.code,{children:"TrafficOptimizationConnectionConfiguration!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"trafficoptimizationconnectiondataaccessestrafficoptimizationaccessconnection-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationConnectionData.",(0,t.jsx)("b",{children:"accesses"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/traffic-optimization-access-connection",children:(0,t.jsx)(n.code,{children:"TrafficOptimizationAccessConnection"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/objects/traffic-optimization-connection",children:(0,t.jsx)(n.code,{children:"TrafficOptimizationConnection"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(i={}){const{wrapper:n}={...(0,a.M)(),...i.components};return n?(0,t.jsx)(n,{...i,children:(0,t.jsx)(g,{...i})}):g(i)}},44808:(i,n,e)=>{var t=e(11504),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(i,n,e){var t,o={},d=null,l=null;for(t in void 0!==e&&(d=""+e),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!s.hasOwnProperty(t)&&(o[t]=n[t]);if(i&&i.defaultProps)for(t in n=i.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:a,type:i,key:d,ref:l,props:o,_owner:r.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},17624:(i,n,e)=>{i.exports=e(44808)},4552:(i,n,e)=>{e.d(n,{I:()=>r,M:()=>c});var t=e(11504);const a={},o=t.createContext(a);function c(i){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function r(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:c(i.components),t.createElement(o.Provider,{value:n},i.children)}}}]);