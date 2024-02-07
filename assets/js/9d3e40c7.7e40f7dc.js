/*! For license information please see 9d3e40c7.7e40f7dc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69856],{41376:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>p,Bullet:()=>i,Details:()=>j,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>x});var t=a(17624),n=a(4552),r=a(11504);const o={id:"response",title:"Response"},d=void 0,c={id:"interfaces/response",title:"Response",description:"No description",source:"@site/api/interfaces/response.mdx",sourceDirName:"interfaces",slug:"/interfaces/response",permalink:"/api/interfaces/response",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"response",title:"Response"},sidebar:"schemaSidebar",previous:{title:"Priceable",permalink:"/api/interfaces/priceable"},next:{title:"activation",permalink:"/api/mutations/activation"}},l={},i=()=>{const e={span:"span",...(0,n.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,n.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const s={span:"span",...(0,n.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Response.<b>stats</b></code><Bullet></Bullet><code>StatsRequest</code> <Badge class="badge badge--secondary"></Badge>',id:"responsestatsstatsrequest-",level:4},{value:'<code>Response.stats.<b>token</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"responsestatstokenstring--",level:5},{value:'<code>Response.<b>auditData</b></code><Bullet></Bullet><code>AuditData</code> <Badge class="badge badge--secondary"></Badge>',id:"responseauditdataauditdata-",level:4},{value:'<code>Response.<b>errors</b></code><Bullet></Bullet><code>[Error!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"responseerrorserror--",level:4},{value:'<code>Response.<b>warnings</b></code><Bullet></Bullet><code>[Warning!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"responsewarningswarning--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],j=({dataOpen:e,dataClose:s,children:a,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,n.M)()},[c,l]=(0,r.useState)(o);return(0,t.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&a]})};function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"No description"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"interface Response {\n  stats(token: String!): StatsRequest\n  auditData: AuditData\n  errors: [Error!]\n  warnings: [Warning!]\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"responsestatsstatsrequest-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Response.",(0,t.jsx)("b",{children:"stats"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/objects/stats-request",children:(0,t.jsx)(s.code,{children:"StatsRequest"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Application stats"}),"\n",(0,t.jsxs)(s.h5,{id:"responsestatstokenstring--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Response.stats.",(0,t.jsx)("b",{children:"token"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/scalars/string",children:(0,t.jsx)(s.code,{children:"String!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"responseauditdataauditdata-",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Response.",(0,t.jsx)("b",{children:"auditData"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/objects/audit-data",children:(0,t.jsx)(s.code,{children:"AuditData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Data sent and received in the supplier\u2019s original format."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"responseerrorserror--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Response.",(0,t.jsx)("b",{children:"errors"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/objects/error",children:(0,t.jsx)(s.code,{children:"[Error!]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Errors that lead the service to stop"}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"responsewarningswarning--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Response.",(0,t.jsx)("b",{children:"warnings"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/objects/warning",children:(0,t.jsx)(s.code,{children:"[Warning!]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Potentially harmful situations or errors that do not stop the service"}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/objects/hotel-booking",children:(0,t.jsx)(s.code,{children:"HotelBooking"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/objects/hotel-book-payload",children:(0,t.jsx)(s.code,{children:"HotelBookPayload"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/objects/hotel-cancel-payload",children:(0,t.jsx)(s.code,{children:"HotelCancelPayload"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/objects/hotel-commit-payload",children:(0,t.jsx)(s.code,{children:"HotelCommitPayload"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/objects/hotel-quote",children:(0,t.jsx)(s.code,{children:"HotelQuote"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(s.a,{href:"/api/objects/hotel-search",children:(0,t.jsx)(s.code,{children:"HotelSearch"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},44808:(e,s,a)=>{var t=a(11504),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,a){var t,r={},l=null,i=null;for(t in void 0!==a&&(l=""+a),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)o.call(s,t)&&!c.hasOwnProperty(t)&&(r[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===r[t]&&(r[t]=s[t]);return{$$typeof:n,type:e,key:l,ref:i,props:r,_owner:d.current}}s.Fragment=r,s.jsx=l,s.jsxs=l},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>d,M:()=>o});var t=a(11504);const n={},r=t.createContext(n);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);