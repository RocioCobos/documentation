/*! For license information please see 227c7f71.e9a025e2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94456],{15892:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(17624),a=n(4552),s=n(11504);const i={id:"traffic-type",title:"TrafficType"},c=void 0,o={id:"enums/traffic-type",title:"TrafficType",description:"Posible source of ratios",source:"@site/api/enums/traffic-type.mdx",sourceDirName:"enums",slug:"/enums/traffic-type",permalink:"/api/enums/traffic-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"traffic-type",title:"TrafficType"},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationStatsDataGroupBy",permalink:"/api/enums/traffic-optimization-stats-data-group-by"},next:{title:"TransportType",permalink:"/api/enums/transport-type"}},l={},d=()=>{const e={span:"span",...(0,a.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const t={a:"a",...(0,a.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},u=[{value:"Values",id:"values",level:3},{value:"<code>TrafficType.<b>BASIC</b></code>",id:"traffictypebasic",level:4},{value:"<code>TrafficType.<b>SPEED</b></code>",id:"traffictypespeed",level:4},{value:"<code>TrafficType.<b>SCHEDULER</b></code>",id:"traffictypescheduler",level:4},{value:"<code>TrafficType.<b>OPTIMIZED</b></code>",id:"traffictypeoptimized",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,a.M)()},[o,l]=(0,s.useState)(i);return(0,r.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Posible source of ratios"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"enum TrafficType {\n  BASIC\n  SPEED\n  SCHEDULER\n  OPTIMIZED\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(t.h4,{id:"traffictypebasic",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficType.",(0,r.jsx)("b",{children:"BASIC"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ratios calculated from traffic between buyer and seller"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"traffictypespeed",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficType.",(0,r.jsx)("b",{children:"SPEED"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ratios calculated from traffic between buyer and Speed"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"traffictypescheduler",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficType.",(0,r.jsx)("b",{children:"SCHEDULER"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ratios calculated from traffic between buyer and Static information cache"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"traffictypeoptimized",children:(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TrafficType.",(0,r.jsx)("b",{children:"OPTIMIZED"})]})})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Ratios calculated from traffic between TGX s caches and seller"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/objects/logging-legacy-data",children:(0,r.jsx)(t.code,{children:"LoggingLegacyData"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/inputs/logging-legacy-filter-input",children:(0,r.jsx)(t.code,{children:"LoggingLegacyFilterInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/objects/operation-detailed",children:(0,r.jsx)(t.code,{children:"OperationDetailed"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/inputs/stats-aggregation-connection-where-input",children:(0,r.jsx)(t.code,{children:"StatsAggregationConnectionWhereInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/objects/stats-aggregation-data",children:(0,r.jsx)(t.code,{children:"StatsAggregationData"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/inputs/stats-filter-input",children:(0,r.jsx)(t.code,{children:"StatsFilterInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function j(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},44808:(e,t,n)=>{var r=n(11504),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!o.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>i});var r=n(11504);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);