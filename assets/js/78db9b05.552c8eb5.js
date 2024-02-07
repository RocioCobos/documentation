/*! For license information please see 78db9b05.552c8eb5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8864],{89716:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>h,Bullet:()=>o,Details:()=>p,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=t(17624),a=t(4552),s=t(11504);const l={id:"flight-segment",title:"FlightSegment"},i=void 0,d={id:"objects/flight-segment",title:"FlightSegment",description:"Transportation of a passenger on a Dated Operating Segment",source:"@site/api/objects/flight-segment.mdx",sourceDirName:"objects",slug:"/objects/flight-segment",permalink:"/api/objects/flight-segment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-segment",title:"FlightSegment"},sidebar:"schemaSidebar",previous:{title:"FlightPrice",permalink:"/api/objects/flight-price"},next:{title:"FlightServiceData",permalink:"/api/objects/flight-service-data"}},c={},o=()=>{const e={span:"span",...(0,a.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const r={a:"a",...(0,a.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const r={span:"span",...(0,a.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightSegment.<b>arrival</b></code><Bullet></Bullet><code>TransportArrival!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentarrivaltransportarrival--",level:4},{value:'<code>FlightSegment.<b>departure</b></code><Bullet></Bullet><code>TransportDeparture!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentdeparturetransportdeparture--",level:4},{value:'<code>FlightSegment.<b>carrier</b></code><Bullet></Bullet><code>AirlineCode</code> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentcarrierairlinecode-",level:4},{value:'<code>FlightSegment.<b>flightNumber</b></code><Bullet></Bullet><code>FlightNumber</code> <Badge class="badge badge--secondary"></Badge>',id:"flightsegmentflightnumberflightnumber-",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:r,children:t,startOpen:l=!1})=>{const i={details:"details",summary:"summary",...(0,a.M)()},[d,c]=(0,s.useState)(l);return(0,n.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&t]})};function m(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Transportation of a passenger on a Dated Operating Segment"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type FlightSegment {\n  arrival: TransportArrival!\n  departure: TransportDeparture!\n  carrier: AirlineCode\n  flightNumber: FlightNumber\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"flightsegmentarrivaltransportarrival--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegment.",(0,n.jsx)("b",{children:"arrival"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/objects/transport-arrival",children:(0,n.jsx)(r.code,{children:"TransportArrival!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"flightsegmentdeparturetransportdeparture--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegment.",(0,n.jsx)("b",{children:"departure"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/objects/transport-departure",children:(0,n.jsx)(r.code,{children:"TransportDeparture!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"flightsegmentcarrierairlinecode-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegment.",(0,n.jsx)("b",{children:"carrier"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/airline-code",children:(0,n.jsx)(r.code,{children:"AirlineCode"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"flightsegmentflightnumberflightnumber-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSegment.",(0,n.jsx)("b",{children:"flightNumber"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/flight-number",children:(0,n.jsx)(r.code,{children:"FlightNumber"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/objects/flight-service-data",children:(0,n.jsx)(r.code,{children:"FlightServiceData"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:r}={...(0,a.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},44808:(e,r,t)=>{var n=t(11504),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,s={},c=null,o=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(o=r.ref),r)l.call(r,n)&&!d.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:o,props:s,_owner:i.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},17624:(e,r,t)=>{e.exports=t(44808)},4552:(e,r,t)=>{t.d(r,{I:()=>i,M:()=>l});var n=t(11504);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);