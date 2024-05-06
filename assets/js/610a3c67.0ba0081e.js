/*! For license information please see 610a3c67.0ba0081e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69138],{94735:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>h,assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var s=r(74848),n=r(28453),a=r(96540);const o={id:"flight-surcharge",title:"FlightSurcharge"},c=void 0,l={id:"types/objects/flight-surcharge",title:"FlightSurcharge",description:"Amount added on to a usual charge for a specific product, purpose, or service.",source:"@site/api/types/objects/flight-surcharge.mdx",sourceDirName:"types/objects",slug:"/types/objects/flight-surcharge",permalink:"/api/types/objects/flight-surcharge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-surcharge",title:"FlightSurcharge"},sidebar:"schemaSidebar",previous:{title:"FlightService",permalink:"/api/types/objects/flight-service"},next:{title:"FlightTicket",permalink:"/api/types/objects/flight-ticket"}},i={},d=()=>{const e={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,n.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,n.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:t,children:r,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,n.R)()},[l,i]=(0,a.useState)(o);return(0,s.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&r]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightSurcharge.<b>totalAmount</b></code><Bullet></Bullet><code>AmountType</code> <Badge class="badge badge--secondary"></Badge>',id:"flightsurchargetotalamountamounttype-",level:4},{value:'<code>FlightSurcharge.<b>breakdown</b></code><Bullet></Bullet><code>[Fee]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightsurchargebreakdownfee--",level:4},{value:"Member Of",id:"member-of",level:3}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Amount added on to a usual charge for a specific product, purpose, or service."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type FlightSurcharge {\n  totalAmount: AmountType\n  breakdown: [Fee]\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"flightsurchargetotalamountamounttype-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSurcharge.",(0,s.jsx)("b",{children:"totalAmount"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/amount-type",children:(0,s.jsx)(t.code,{children:"AmountType"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(t.h4,{id:"flightsurchargebreakdownfee--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightSurcharge.",(0,s.jsx)("b",{children:"breakdown"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/fee",children:(0,s.jsx)(t.code,{children:"[Fee]"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(t.blockquote,{children:"\n"}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/objects/flight-price",children:(0,s.jsx)(t.code,{children:"FlightPrice"})})," ",(0,s.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},21020:(e,t,r)=>{var s=r(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var s,a={},i=null,d=null;for(s in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:i,ref:d,props:a,_owner:c.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var s=r(96540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);