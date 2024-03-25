/*! For license information please see a2e59813.1bbc6e15.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14332],{22708:(e,s,o)=>{o.r(s),o.d(s,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var a=o(17624),t=o(4552),l=o(11504);const n={id:"stop-sales",title:"StopSales"},r=void 0,c={id:"objects/stop-sales",title:"StopSales",description:"Represents stop sales restrictions.",source:"@site/api/objects/stop-sales.mdx",sourceDirName:"objects",slug:"/objects/stop-sales",permalink:"/api/objects/stop-sales",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"stop-sales",title:"StopSales"},sidebar:"schemaSidebar",previous:{title:"Stats",permalink:"/api/objects/stats"},next:{title:"Supplement",permalink:"/api/objects/supplement"}},d={},i=()=>{const e={span:"span",...(0,t.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,t.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,t.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>StopSales.<b>closeMaster</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"stopsalesclosemasterboolean-",level:4},{value:'<code>StopSales.<b>closeOnArrival</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"stopsalescloseonarrivalboolean-",level:4},{value:'<code>StopSales.<b>closeOnDeparture</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"stopsalescloseondepartureboolean-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:o,startOpen:n=!1})=>{const r={details:"details",summary:"summary",...(0,t.M)()},[c,d]=(0,l.useState)(n);return(0,a.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&o]})};function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Represents stop sales restrictions."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type StopSales {\n  closeMaster: Boolean\n  closeOnArrival: Boolean\n  closeOnDeparture: Boolean\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"stopsalesclosemasterboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StopSales.",(0,a.jsx)("b",{children:"closeMaster"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Indicates whether to close the master."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stopsalescloseonarrivalboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StopSales.",(0,a.jsx)("b",{children:"closeOnArrival"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Indicates whether to close on arrival. Null if not applicable."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"stopsalescloseondepartureboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["StopSales.",(0,a.jsx)("b",{children:"closeOnDeparture"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Indicates whether to close on departure. Null if not applicable."}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/objects/offer-avail-load",children:(0,a.jsx)(s.code,{children:"OfferAvailLoad"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/restrictions-derived-rate-load",children:(0,a.jsx)(s.code,{children:"RestrictionsDerivedRateLoad"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(s.a,{href:"/api/objects/restrictions-load",children:(0,a.jsx)(s.code,{children:"RestrictionsLoad"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},44808:(e,s,o)=>{var a=o(11504),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,o){var a,l={},d=null,i=null;for(a in void 0!==o&&(d=""+o),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(i=s.ref),s)n.call(s,a)&&!c.hasOwnProperty(a)&&(l[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===l[a]&&(l[a]=s[a]);return{$$typeof:t,type:e,key:d,ref:i,props:l,_owner:r.current}}s.Fragment=l,s.jsx=d,s.jsxs=d},17624:(e,s,o)=>{e.exports=o(44808)},4552:(e,s,o)=>{o.d(s,{I:()=>r,M:()=>n});var a=o(11504);const t={},l=a.createContext(t);function n(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);