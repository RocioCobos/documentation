/*! For license information please see 78db9b05.899f7484.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55244],{21816:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>h,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=r(74848),a=r(28453),s=r(96540);const l={id:"flight-segment",title:"FlightSegment",hide_table_of_contents:!1},i=void 0,d={id:"objects/flight-segment",title:"FlightSegment",description:"Transportation of a passenger on a Dated Operating Segment",source:"@site/api/objects/flight-segment.mdx",sourceDirName:"objects",slug:"/objects/flight-segment",permalink:"/api/objects/flight-segment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-segment",title:"FlightSegment",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightPrice",permalink:"/api/objects/flight-price"},next:{title:"FlightServiceData",permalink:"/api/objects/flight-service-data"}},o={},c=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:r,startOpen:l=!1})=>{const i={details:"details",summary:"summary",...(0,a.R)()},[d,o]=(0,s.useState)(l);return(0,n.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&r]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightSegment.<b>arrival</b></code><Bullet></Bullet><code>TransportArrival!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentarrivaltransportarrival--",level:4},{value:'<code>FlightSegment.<b>departure</b></code><Bullet></Bullet><code>TransportDeparture!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentdeparturetransportdeparture--",level:4},{value:'<code>FlightSegment.<b>carrier</b></code><Bullet></Bullet><code>AirlineCode</code> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentcarrierairlinecode-",level:4},{value:'<code>FlightSegment.<b>flightNumber</b></code><Bullet></Bullet><code>FlightNumber</code> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentflightnumberflightnumber-",level:4},{value:"Member of",id:"member-of",level:3}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Transportation of a passenger on a Dated Operating Segment"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type FlightSegment {\n  arrival: TransportArrival!\n  departure: TransportDeparture!\n  carrier: AirlineCode\n  flightNumber: FlightNumber\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"flightsegmentarrivaltransportarrival--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegment.",(0,n.jsx)("b",{children:"arrival"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/objects/transport-arrival",children:(0,n.jsx)(t.code,{children:"TransportArrival!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"flightsegmentdeparturetransportdeparture--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegment.",(0,n.jsx)("b",{children:"departure"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/objects/transport-departure",children:(0,n.jsx)(t.code,{children:"TransportDeparture!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"flightsegmentcarrierairlinecode-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegment.",(0,n.jsx)("b",{children:"carrier"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/scalars/airline-code",children:(0,n.jsx)(t.code,{children:"AirlineCode"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(t.h4,{id:"flightsegmentflightnumberflightnumber-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegment.",(0,n.jsx)("b",{children:"flightNumber"})]})}),(0,n.jsx)(c,{}),(0,n.jsx)(t.a,{href:"/api/scalars/flight-number",children:(0,n.jsx)(t.code,{children:"FlightNumber"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(t.blockquote,{children:"\n"}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/flight-service-data",children:(0,n.jsx)(t.code,{children:"FlightServiceData"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},21020:(e,t,r)=>{var n=r(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,s={},o=null,c=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:o,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);