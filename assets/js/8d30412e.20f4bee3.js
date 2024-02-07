/*! For license information please see 8d30412e.20f4bee3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37752],{51176:(i,e,t)=>{t.r(e),t.d(e,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>r,default:()=>b,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var a=t(17624),o=t(4552),c=t(11504);const n={id:"traffic-optimization-historical-action",title:"TrafficOptimizationHistoricalAction"},r=void 0,s={id:"objects/traffic-optimization-historical-action",title:"TrafficOptimizationHistoricalAction",description:"No description",source:"@site/api/objects/traffic-optimization-historical-action.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-historical-action",permalink:"/api/objects/traffic-optimization-historical-action",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-historical-action",title:"TrafficOptimizationHistoricalAction"},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationGeneralMetrics",permalink:"/api/objects/traffic-optimization-general-metrics"},next:{title:"TrafficOptimizationHistoricalActions",permalink:"/api/objects/traffic-optimization-historical-actions"}},d={},l=()=>{const i={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=i=>{const e={a:"a",...(0,o.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(e.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:i.url,title:"Specified by "+i.url,children:"\u2398"})]})},p=i=>{const e={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{className:i.class,children:i.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>TrafficOptimizationHistoricalAction.<b>date</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationhistoricalactiondatedatetime--",level:4},{value:'<code>TrafficOptimizationHistoricalAction.<b>actionType</b></code><Bullet></Bullet><code>TrafficOptimizationActionType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationhistoricalactionactiontypetrafficoptimizationactiontype--",level:4},{value:'<code>TrafficOptimizationHistoricalAction.<b>requestedBy</b></code><Bullet></Bullet><code>TrafficOptimizationRequester!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationhistoricalactionrequestedbytrafficoptimizationrequester--",level:4},{value:'<code>TrafficOptimizationHistoricalAction.<b>modifiedBy</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationhistoricalactionmodifiedbystring--",level:4},{value:'<code>TrafficOptimizationHistoricalAction.<b>criterias</b></code><Bullet></Bullet><code>[TrafficOptimizationCriteriaType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"trafficoptimizationhistoricalactioncriteriastrafficoptimizationcriteriatype--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:i,dataClose:e,children:t,startOpen:n=!1})=>{const r={details:"details",summary:"summary",...(0,o.M)()},[s,d]=(0,c.useState)(n);return(0,a.jsxs)(r.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:i=>{i.preventDefault(),d((i=>!i))},style:{listStyle:"none"},children:s?i:e}),s&&t]})};function u(i){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...i.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"No description"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-graphql",children:"type TrafficOptimizationHistoricalAction {\n  date: DateTime!\n  actionType: TrafficOptimizationActionType!\n  requestedBy: TrafficOptimizationRequester!\n  modifiedBy: String!\n  criterias: [TrafficOptimizationCriteriaType!]\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(e.h4,{id:"trafficoptimizationhistoricalactiondatedatetime--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationHistoricalAction.",(0,a.jsx)("b",{children:"date"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(e.a,{href:"/api/scalars/date-time",children:(0,a.jsx)(e.code,{children:"DateTime!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"trafficoptimizationhistoricalactionactiontypetrafficoptimizationactiontype--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationHistoricalAction.",(0,a.jsx)("b",{children:"actionType"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(e.a,{href:"/api/enums/traffic-optimization-action-type",children:(0,a.jsx)(e.code,{children:"TrafficOptimizationActionType!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"trafficoptimizationhistoricalactionrequestedbytrafficoptimizationrequester--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationHistoricalAction.",(0,a.jsx)("b",{children:"requestedBy"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(e.a,{href:"/api/enums/traffic-optimization-requester",children:(0,a.jsx)(e.code,{children:"TrafficOptimizationRequester!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"trafficoptimizationhistoricalactionmodifiedbystring--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationHistoricalAction.",(0,a.jsx)("b",{children:"modifiedBy"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(e.a,{href:"/api/scalars/string",children:(0,a.jsx)(e.code,{children:"String!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(e.h4,{id:"trafficoptimizationhistoricalactioncriteriastrafficoptimizationcriteriatype--",children:[(0,a.jsx)(e.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficOptimizationHistoricalAction.",(0,a.jsx)("b",{children:"criterias"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(e.a,{href:"/api/enums/traffic-optimization-criteria-type",children:(0,a.jsx)(e.code,{children:"[TrafficOptimizationCriteriaType!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(e.blockquote,{children:"\n"}),"\n",(0,a.jsx)(e.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"/api/objects/traffic-optimization-historical-actions",children:(0,a.jsx)(e.code,{children:"TrafficOptimizationHistoricalActions"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(i={}){const{wrapper:e}={...(0,o.M)(),...i.components};return e?(0,a.jsx)(e,{...i,children:(0,a.jsx)(u,{...i})}):u(i)}},44808:(i,e,t)=>{var a=t(11504),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(i,e,t){var a,c={},d=null,l=null;for(a in void 0!==t&&(d=""+t),void 0!==e.key&&(d=""+e.key),void 0!==e.ref&&(l=e.ref),e)n.call(e,a)&&!s.hasOwnProperty(a)&&(c[a]=e[a]);if(i&&i.defaultProps)for(a in e=i.defaultProps)void 0===c[a]&&(c[a]=e[a]);return{$$typeof:o,type:i,key:d,ref:l,props:c,_owner:r.current}}e.Fragment=c,e.jsx=d,e.jsxs=d},17624:(i,e,t)=>{i.exports=t(44808)},4552:(i,e,t)=>{t.d(e,{I:()=>r,M:()=>n});var a=t(11504);const o={},c=a.createContext(o);function n(i){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function r(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:n(i.components),a.createElement(c.Provider,{value:e},i.children)}}}]);