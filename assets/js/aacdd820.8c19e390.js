/*! For license information please see aacdd820.8c19e390.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51458],{25703:(e,d,t)=>{t.r(d),t.d(d,{Badge:()=>g,Bullet:()=>o,Details:()=>f,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>x});var a=t(74848),r=t(28453),s=t(96540);const n={id:"flight-order",title:"FlightOrder",hide_table_of_contents:!1},l=void 0,i={id:"objects/flight-order",title:"FlightOrder",description:"A record of the agreement of one party with another to receive products and services under specified terms and conditions.",source:"@site/api/objects/flight-order.mdx",sourceDirName:"objects",slug:"/objects/flight-order",permalink:"/api/objects/flight-order",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-order",title:"FlightOrder",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightOrderItem",permalink:"/api/objects/flight-order-item"},next:{title:"FlightPax",permalink:"/api/objects/flight-pax"}},c={},o=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const d={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const d={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:d,children:t,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[i,c]=(0,s.useState)(n);return(0,a.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:d}),i&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightOrder.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightordercodeid--",level:4},{value:'<code>FlightOrder.<b>flightOrderData</b></code><Bullet></Bullet><code>FlightOrderData</code> <Badge class="badge badge--secondary"></Badge>',id:"flightorderflightorderdataflightorderdata-",level:4},{value:'<code>FlightOrder.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightordercreatedatdatetime--",level:4},{value:'<code>FlightOrder.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorderupdatedatdatetime--",level:4},{value:'<code>FlightOrder.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorderadvisemessageadvisemessage--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4}];function b(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.p,{children:"A record of the agreement of one party with another to receive products and services under specified terms and conditions."}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-graphql",children:"type FlightOrder implements Node {\n  code: ID!\n  flightOrderData: FlightOrderData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage: [AdviseMessage]\n}\n"})}),"\n",(0,a.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(d.h4,{id:"flightordercodeid--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/api/scalars/id",children:(0,a.jsx)(d.code,{children:"ID!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(d.h4,{id:"flightorderflightorderdataflightorderdata-",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,a.jsx)("b",{children:"flightOrderData"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/api/objects/flight-order-data",children:(0,a.jsx)(d.code,{children:"FlightOrderData"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(d.h4,{id:"flightordercreatedatdatetime--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/api/scalars/date-time",children:(0,a.jsx)(d.code,{children:"DateTime!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(d.h4,{id:"flightorderupdatedatdatetime--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/api/scalars/date-time",children:(0,a.jsx)(d.code,{children:"DateTime!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(d.h4,{id:"flightorderadvisemessageadvisemessage--",children:[(0,a.jsx)(d.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(d.a,{href:"/api/objects/advise-message",children:(0,a.jsx)(d.code,{children:"[AdviseMessage]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"}),"\n",(0,a.jsx)(d.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(d.h4,{id:"node-",children:[(0,a.jsx)(d.a,{href:"/api/interfaces/node",children:(0,a.jsx)(d.code,{children:"Node"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(d.blockquote,{children:"\n"})]})}function u(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,d,t)=>{var a=t(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,d,t){var a,s={},c=null,o=null;for(a in void 0!==t&&(c=""+t),void 0!==d.key&&(c=""+d.key),void 0!==d.ref&&(o=d.ref),d)n.call(d,a)&&!i.hasOwnProperty(a)&&(s[a]=d[a]);if(e&&e.defaultProps)for(a in d=e.defaultProps)void 0===s[a]&&(s[a]=d[a]);return{$$typeof:r,type:e,key:c,ref:o,props:s,_owner:l.current}}d.Fragment=s,d.jsx=c,d.jsxs=c},74848:(e,d,t)=>{e.exports=t(21020)},28453:(e,d,t)=>{t.d(d,{R:()=>n,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function n(e){const d=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(s.Provider,{value:d},e.children)}}}]);