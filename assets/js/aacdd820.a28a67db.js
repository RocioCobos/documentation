/*! For license information please see aacdd820.a28a67db.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6696],{71676:(e,d,a)=>{a.r(d),a.d(d,{Badge:()=>g,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>n,metadata:()=>i,toc:()=>f});var t=a(17624),r=a(4552),s=a(11504);const n={id:"flight-order",title:"FlightOrder"},l=void 0,i={id:"objects/flight-order",title:"FlightOrder",description:"A record of the agreement of one party with another to receive products and services under specified terms and conditions.",source:"@site/api/objects/flight-order.mdx",sourceDirName:"objects",slug:"/objects/flight-order",permalink:"/api/objects/flight-order",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flight-order",title:"FlightOrder"},sidebar:"schemaSidebar",previous:{title:"FlightOrderItem",permalink:"/api/objects/flight-order-item"},next:{title:"FlightPax",permalink:"/api/objects/flight-pax"}},c={},o=()=>{const e={span:"span",...(0,r.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const d={a:"a",...(0,r.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(d.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const d={span:"span",...(0,r.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>FlightOrder.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightordercodeid--",level:4},{value:'<code>FlightOrder.<b>flightOrderData</b></code><Bullet></Bullet><code>FlightOrderData</code> <Badge class="badge badge--secondary"></Badge>',id:"flightorderflightorderdataflightorderdata-",level:4},{value:'<code>FlightOrder.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightordercreatedatdatetime--",level:4},{value:'<code>FlightOrder.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorderupdatedatdatetime--",level:4},{value:'<code>FlightOrder.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"flightorderadvisemessageadvisemessage--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4}],x=({dataOpen:e,dataClose:d,children:a,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,r.M)()},[i,c]=(0,s.useState)(n);return(0,t.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:d}),i&&a]})};function u(e){const d={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:"A record of the agreement of one party with another to receive products and services under specified terms and conditions."}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-graphql",children:"type FlightOrder implements Node {\n  code: ID!\n  flightOrderData: FlightOrderData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage: [AdviseMessage]\n}\n"})}),"\n",(0,t.jsx)(d.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(d.h4,{id:"flightordercodeid--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(d.a,{href:"/api/scalars/id",children:(0,t.jsx)(d.code,{children:"ID!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(d.h4,{id:"flightorderflightorderdataflightorderdata-",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,t.jsx)("b",{children:"flightOrderData"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(d.a,{href:"/api/objects/flight-order-data",children:(0,t.jsx)(d.code,{children:"FlightOrderData"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(d.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(d.h4,{id:"flightordercreatedatdatetime--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(d.a,{href:"/api/scalars/date-time",children:(0,t.jsx)(d.code,{children:"DateTime!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(d.h4,{id:"flightorderupdatedatdatetime--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(d.a,{href:"/api/scalars/date-time",children:(0,t.jsx)(d.code,{children:"DateTime!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(d.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(d.h4,{id:"flightorderadvisemessageadvisemessage--",children:[(0,t.jsx)(d.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FlightOrder.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(d.a,{href:"/api/objects/advise-message",children:(0,t.jsx)(d.code,{children:"[AdviseMessage]"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(d.blockquote,{children:"\n"}),"\n",(0,t.jsx)(d.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(d.h4,{id:"node-",children:[(0,t.jsx)(d.a,{href:"/api/interfaces/node",children:(0,t.jsx)(d.code,{children:"Node"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(d.blockquote,{children:"\n"})]})}function b(e={}){const{wrapper:d}={...(0,r.M)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},44808:(e,d,a)=>{var t=a(11504),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,d,a){var t,s={},c=null,o=null;for(t in void 0!==a&&(c=""+a),void 0!==d.key&&(c=""+d.key),void 0!==d.ref&&(o=d.ref),d)n.call(d,t)&&!i.hasOwnProperty(t)&&(s[t]=d[t]);if(e&&e.defaultProps)for(t in d=e.defaultProps)void 0===s[t]&&(s[t]=d[t]);return{$$typeof:r,type:e,key:c,ref:o,props:s,_owner:l.current}}d.Fragment=s,d.jsx=c,d.jsxs=c},17624:(e,d,a)=>{e.exports=a(44808)},4552:(e,d,a)=>{a.d(d,{I:()=>l,M:()=>n});var t=a(11504);const r={},s=t.createContext(r);function n(e){const d=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(s.Provider,{value:d},e.children)}}}]);