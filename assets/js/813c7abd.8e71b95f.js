/*! For license information please see 813c7abd.8e71b95f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86304],{4692:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>h,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>b});var d=t(17624),n=t(4552),s=t(11504);const o={id:"operation-detailed",title:"OperationDetailed"},i=void 0,l={id:"objects/operation-detailed",title:"OperationDetailed",description:"Stats information per operation",source:"@site/api/objects/operation-detailed.mdx",sourceDirName:"objects",slug:"/objects/operation-detailed",permalink:"/api/objects/operation-detailed",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"operation-detailed",title:"OperationDetailed"},sidebar:"schemaSidebar",previous:{title:"OperationData",permalink:"/api/objects/operation-data"},next:{title:"OperationEdge",permalink:"/api/objects/operation-edge"}},r={},c=()=>{const e={span:"span",...(0,n.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,n.M)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,n.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>OperationDetailed.<b>operation</b></code><Bullet></Bullet><code>Operation!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"operationdetailedoperationoperation--",level:4},{value:'<code>OperationDetailed.<b>totalHits</b></code><Bullet></Bullet><code>Int64!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"operationdetailedtotalhitsint64--",level:4},{value:'<code>OperationDetailed.<b>detailedHits</b></code><Bullet></Bullet><code>[StatsInfo!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"operationdetaileddetailedhitsstatsinfo--",level:4},{value:'<code>OperationDetailed.detailedHits.<b>type</b></code><Bullet></Bullet><code>[StatsInfoTypes!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"operationdetaileddetailedhitstypestatsinfotypes--",level:5},{value:'<code>OperationDetailed.detailedHits.<b>code</b></code><Bullet></Bullet><code>[Int!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"operationdetaileddetailedhitscodeint--",level:5},{value:'<code>OperationDetailed.<b>cache</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"operationdetailedcacheboolean---",level:4},{value:'<code>OperationDetailed.<b>trafficType</b></code><Bullet></Bullet><code>TrafficType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"operationdetailedtraffictypetraffictype--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:a,children:t,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,n.M)()},[l,r]=(0,s.useState)(o);return(0,d.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(i.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&t]})};function g(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Stats information per operation"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type OperationDetailed {\n  operation: Operation!\n  totalHits: Int64!\n  detailedHits(type: [StatsInfoTypes!], code: [Int!]): [StatsInfo!]\n  cache: Boolean! @deprecated\n  trafficType: TrafficType!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"operationdetailedoperationoperation--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OperationDetailed.",(0,d.jsx)("b",{children:"operation"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(a.a,{href:"/api/objects/operation",children:(0,d.jsx)(a.code,{children:"Operation!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Operation information"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"operationdetailedtotalhitsint64--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OperationDetailed.",(0,d.jsx)("b",{children:"totalHits"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(a.a,{href:"/api/scalars/int-64",children:(0,d.jsx)(a.code,{children:"Int64!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Total hits."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"operationdetaileddetailedhitsstatsinfo--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OperationDetailed.",(0,d.jsx)("b",{children:"detailedHits"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(a.a,{href:"/api/objects/stats-info",children:(0,d.jsx)(a.code,{children:"[StatsInfo!]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Hits grouped depending on their status"}),"\n",(0,d.jsxs)(a.h5,{id:"operationdetaileddetailedhitstypestatsinfotypes--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OperationDetailed.detailedHits.",(0,d.jsx)("b",{children:"type"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(a.a,{href:"/api/enums/stats-info-types",children:(0,d.jsx)(a.code,{children:"[StatsInfoTypes!]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(a.h5,{id:"operationdetaileddetailedhitscodeint--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OperationDetailed.detailedHits.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(a.a,{href:"/api/scalars/int",children:(0,d.jsx)(a.code,{children:"[Int!]"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(a.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(a.h4,{id:"operationdetailedcacheboolean---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OperationDetailed.",(0,d.jsx)("b",{children:"cache"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(a.a,{href:"/api/scalars/boolean",children:(0,d.jsx)(a.code,{children:"Boolean!"})})," ",(0,d.jsx)(h,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.admonition,{title:"DEPRECATED",type:"warning",children:(0,d.jsx)(a.p,{children:"deprecated from 2019-04-03. Added new field trafficType."})}),"\n",(0,d.jsx)(a.p,{children:"Responsible for the execution of the this stats. If TRUE then cache, else client"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"operationdetailedtraffictypetraffictype--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["OperationDetailed.",(0,d.jsx)("b",{children:"trafficType"})]})}),(0,d.jsx)(c,{}),(0,d.jsx)(a.a,{href:"/api/enums/traffic-type",children:(0,d.jsx)(a.code,{children:"TrafficType!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Responsible for the execution of the this stats. If TRUE then cache, else client"}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/objects/stats-data",children:(0,d.jsx)(a.code,{children:"StatsData"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:a}={...(0,n.M)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},44808:(e,a,t)=>{var d=t(11504),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,a,t){var d,s={},r=null,c=null;for(d in void 0!==t&&(r=""+t),void 0!==a.key&&(r=""+a.key),void 0!==a.ref&&(c=a.ref),a)o.call(a,d)&&!l.hasOwnProperty(d)&&(s[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===s[d]&&(s[d]=a[d]);return{$$typeof:n,type:e,key:r,ref:c,props:s,_owner:i.current}}a.Fragment=s,a.jsx=r,a.jsxs=r},17624:(e,a,t)=>{e.exports=t(44808)},4552:(e,a,t)=>{t.d(a,{I:()=>i,M:()=>o});var d=t(11504);const n={},s=d.createContext(n);function o(e){const a=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),d.createElement(s.Provider,{value:a},e.children)}}}]);