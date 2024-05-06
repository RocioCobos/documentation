/*! For license information please see 4de2d35f.5cd7b7b8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97448],{73496:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>x,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>b});var n=a(74848),l=a(28453),r=a(96540);const s={id:"alert-event-data",title:"AlertEventData",hide_table_of_contents:!1},d=void 0,c={id:"objects/alert-event-data",title:"AlertEventData",description:"AlertEvent data",source:"@site/api/objects/alert-event-data.mdx",sourceDirName:"objects",slug:"/objects/alert-event-data",permalink:"/api/objects/alert-event-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-event-data",title:"AlertEventData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertEventConnection",permalink:"/api/objects/alert-event-connection"},next:{title:"AlertEventDetail",permalink:"/api/objects/alert-event-detail"}},o={},i=()=>{const e={span:"span",...(0,l.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,l.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const t={span:"span",...(0,l.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:a,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,l.R)()},[c,o]=(0,r.useState)(s);return(0,n.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertEventData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerteventdatacodeid--",level:4},{value:'<code>AlertEventData.<b>groupBy</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alerteventdatagroupbystring-",level:4},{value:'<code>AlertEventData.<b>status</b></code><Bullet></Bullet><code>AlertEventType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerteventdatastatusalerteventtype--",level:4},{value:'<code>AlertEventData.<b>details</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerteventdatadetailsstring--",level:4},{value:'<code>AlertEventData.<b>detailsInfo</b></code><Bullet></Bullet><code>[AlertEventDetail]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerteventdatadetailsinfoalerteventdetail--",level:4},{value:'<code>AlertEventData.<b>history</b></code><Bullet></Bullet><code>AlertEventConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alerteventdatahistoryalerteventconnection--",level:4},{value:'<code>AlertEventData.history.<b>relay</b></code><Bullet></Bullet><code>RelayInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alerteventdatahistoryrelayrelayinput-",level:5},{value:'<code>AlertEventData.history.<b>filter</b></code><Bullet></Bullet><code>AlertFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alerteventdatahistoryfilteralertfilterinput-",level:5},{value:"Member of",id:"member-of",level:3}];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"AlertEvent data"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type AlertEventData {\n  code: ID!\n  groupBy: String\n  status: AlertEventType!\n  details: String!\n  detailsInfo: [AlertEventDetail]!\n  history(relay: RelayInput, filter: AlertFilterInput): AlertEventConnection!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"alerteventdatacodeid--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventData.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/scalars/id",children:(0,n.jsx)(t.code,{children:"ID!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"alerteventdatagroupbystring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventData.",(0,n.jsx)("b",{children:"groupBy"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"alerteventdatastatusalerteventtype--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventData.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/enums/alert-event-type",children:(0,n.jsx)(t.code,{children:"AlertEventType!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Status event"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerteventdatadetailsstring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventData.",(0,n.jsx)("b",{children:"details"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Contains data in html format encrypted"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerteventdatadetailsinfoalerteventdetail--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventData.",(0,n.jsx)("b",{children:"detailsInfo"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/objects/alert-event-detail",children:(0,n.jsx)(t.code,{children:"[AlertEventDetail]!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Contains events data"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alerteventdatahistoryalerteventconnection--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventData.",(0,n.jsx)("b",{children:"history"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/objects/alert-event-connection",children:(0,n.jsx)(t.code,{children:"AlertEventConnection!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Last 10 events of the alert/grouBy"}),"\n",(0,n.jsxs)(t.h5,{id:"alerteventdatahistoryrelayrelayinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventData.history.",(0,n.jsx)("b",{children:"relay"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/inputs/relay-input",children:(0,n.jsx)(t.code,{children:"RelayInput"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h5,{id:"alerteventdatahistoryfilteralertfilterinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertEventData.history.",(0,n.jsx)("b",{children:"filter"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(t.a,{href:"/api/inputs/alert-filter-input",children:(0,n.jsx)(t.code,{children:"AlertFilterInput"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/alert-event",children:(0,n.jsx)(t.code,{children:"AlertEvent"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},21020:(e,t,a)=>{var n=a(96540),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,a){var n,r={},o=null,i=null;for(n in void 0!==a&&(o=""+a),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(i=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:l,type:e,key:o,ref:i,props:r,_owner:d.current}}t.Fragment=r,t.jsx=o,t.jsxs=o},74848:(e,t,a)=>{e.exports=a(21020)},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>d});var n=a(96540);const l={},r=n.createContext(l);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);