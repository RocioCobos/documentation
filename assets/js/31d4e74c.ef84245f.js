/*! For license information please see 31d4e74c.ef84245f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3812],{167:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>h,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>b});var a=s(74848),n=s(28453),d=s(96540);const r={id:"flight-service-data",title:"FlightServiceData"},i=void 0,l={id:"types/objects/flight-service-data",title:"FlightServiceData",description:"No description",source:"@site/api/types/objects/flight-service-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/flight-service-data",permalink:"/api/types/objects/flight-service-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-service-data",title:"FlightServiceData"},sidebar:"schemaSidebar",previous:{title:"FlightSegment",permalink:"/api/types/objects/flight-segment"},next:{title:"FlightService",permalink:"/api/types/objects/flight-service"}},c={},o=()=>{const e={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const t={a:"a",...(0,n.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,n.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:s,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,n.R)()},[l,c]=(0,d.useState)(r);return(0,a.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&s]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightServiceData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightservicedatacodeid--",level:4},{value:'<code>FlightServiceData.<b>type</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightservicedatatypeid--",level:4},{value:'<code>FlightServiceData.<b>description</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightservicedatadescriptionstring--",level:4},{value:'<code>FlightServiceData.<b>pax</b></code><Bullet></Bullet><code>[FlightPax]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightservicedatapaxflightpax--",level:4},{value:'<code>FlightServiceData.<b>segments</b></code><Bullet></Bullet><code>[FlightSegment!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightservicedatasegmentsflightsegment--",level:4},{value:'<code>FlightServiceData.segments.<b>where</b></code><Bullet></Bullet><code>FlightSegmentWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"flightservicedatasegmentswhereflightsegmentwhereinput-",level:5},{value:'<code>FlightServiceData.segments.<b>orderBy</b></code><Bullet></Bullet><code>FlightSegmentOrderByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"flightservicedatasegmentsorderbyflightsegmentorderbyinput-",level:5},{value:"Member Of",id:"member-of",level:3}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type FlightServiceData {\n  code: ID!\n  type: ID!\n  description: String!\n  pax: [FlightPax]!\n  segments(\n    where: FlightSegmentWhereInput\n    orderBy: FlightSegmentOrderByInput\n  ): [FlightSegment!]!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"flightservicedatacodeid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightServiceData.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"flightservicedatatypeid--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightServiceData.",(0,a.jsx)("b",{children:"type"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,a.jsx)(t.code,{children:"ID!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"serviceDefinition"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"flightservicedatadescriptionstring--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightServiceData.",(0,a.jsx)("b",{children:"description"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,a.jsx)(t.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"flightservicedatapaxflightpax--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightServiceData.",(0,a.jsx)("b",{children:"pax"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/flight-pax",children:(0,a.jsx)(t.code,{children:"[FlightPax]!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(t.h4,{id:"flightservicedatasegmentsflightsegment--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightServiceData.",(0,a.jsx)("b",{children:"segments"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/objects/flight-segment",children:(0,a.jsx)(t.code,{children:"[FlightSegment!]!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h5,{id:"flightservicedatasegmentswhereflightsegmentwhereinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightServiceData.segments.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/inputs/flight-segment-where-input",children:(0,a.jsx)(t.code,{children:"FlightSegmentWhereInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(t.h5,{id:"flightservicedatasegmentsorderbyflightsegmentorderbyinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightServiceData.segments.",(0,a.jsx)("b",{children:"orderBy"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(t.a,{href:"/api/types/enums/flight-segment-order-by-input",children:(0,a.jsx)(t.code,{children:"FlightSegmentOrderByInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(t.blockquote,{children:"\n"}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/types/objects/flight-service",children:(0,a.jsx)(t.code,{children:"FlightService"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},21020:(e,t,s)=>{var a=s(96540),n=Symbol.for("react.element"),d=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var a,d={},c=null,o=null;for(a in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)r.call(t,a)&&!l.hasOwnProperty(a)&&(d[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===d[a]&&(d[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:o,props:d,_owner:i.current}}t.Fragment=d,t.jsx=c,t.jsxs=c},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var a=s(96540);const n={},d=a.createContext(n);function r(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);