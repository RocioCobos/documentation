/*! For license information please see 6dcca6c7.c009ee38.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70996],{73412:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>p,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var i=t(17624),n=t(4552),a=t(11504);const s={id:"flight-origin-dest-criteria-input",title:"FlightOriginDestCriteriaInput"},l=void 0,d={id:"inputs/flight-origin-dest-criteria-input",title:"FlightOriginDestCriteriaInput",description:"The Origin and Destination airport/city pair wich restrict a passenger journey or a flight.",source:"@site/api/inputs/flight-origin-dest-criteria-input.mdx",sourceDirName:"inputs",slug:"/inputs/flight-origin-dest-criteria-input",permalink:"/api/inputs/flight-origin-dest-criteria-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-origin-dest-criteria-input",title:"FlightOriginDestCriteriaInput"},sidebar:"schemaSidebar",previous:{title:"FlightOfferWhereInput",permalink:"/api/inputs/flight-offer-where-input"},next:{title:"FlightSegmentWhereInput",permalink:"/api/inputs/flight-segment-where-input"}},c={},o=()=>{const e={span:"span",...(0,n.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,n.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,n.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightOriginDestCriteriaInput.<b>departure</b></code><Bullet></Bullet><code>Departure!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorigindestcriteriainputdeparturedeparture--",level:4},{value:'<code>FlightOriginDestCriteriaInput.<b>arrival</b></code><Bullet></Bullet><code>Arrival!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorigindestcriteriainputarrivalarrival--",level:4},{value:'<code>FlightOriginDestCriteriaInput.<b>departureAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorigindestcriteriainputdepartureatdatetime--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:r,children:t,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,n.M)()},[d,c]=(0,a.useState)(s);return(0,i.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&t]})};function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"The Origin and Destination airport/city pair wich restrict a passenger journey or a flight."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-graphql",children:"input FlightOriginDestCriteriaInput {\n  departure: Departure!\n  arrival: Arrival!\n  departureAt: DateTime!\n}\n"})}),"\n",(0,i.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(r.h4,{id:"flightorigindestcriteriainputdeparturedeparture--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOriginDestCriteriaInput.",(0,i.jsx)("b",{children:"departure"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(r.a,{href:"/api/scalars/departure",children:(0,i.jsx)(r.code,{children:"Departure!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(r.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(r.h4,{id:"flightorigindestcriteriainputarrivalarrival--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOriginDestCriteriaInput.",(0,i.jsx)("b",{children:"arrival"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(r.a,{href:"/api/scalars/arrival",children:(0,i.jsx)(r.code,{children:"Arrival!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(r.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(r.h4,{id:"flightorigindestcriteriainputdepartureatdatetime--",children:[(0,i.jsx)(r.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOriginDestCriteriaInput.",(0,i.jsx)("b",{children:"departureAt"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(r.a,{href:"/api/scalars/date-time",children:(0,i.jsx)(r.code,{children:"DateTime!"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(r.blockquote,{children:"\n"}),"\n",(0,i.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/api/inputs/flight-offer-where-input",children:(0,i.jsx)(r.code,{children:"FlightOfferWhereInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:r}={...(0,n.M)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},44808:(e,r,t)=>{var i=t(11504),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var i,a={},c=null,o=null;for(i in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(o=r.ref),r)s.call(r,i)&&!d.hasOwnProperty(i)&&(a[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===a[i]&&(a[i]=r[i]);return{$$typeof:n,type:e,key:c,ref:o,props:a,_owner:l.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},17624:(e,r,t)=>{e.exports=t(44808)},4552:(e,r,t)=>{t.d(r,{I:()=>l,M:()=>s});var i=t(11504);const n={},a=i.createContext(n);function s(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);