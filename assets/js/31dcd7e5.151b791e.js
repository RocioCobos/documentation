/*! For license information please see 31dcd7e5.151b791e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45338],{38280:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>b});var s=n(17624),o=n(4552),a=n(11504);const c={id:"timeout",title:"Timeout"},r=void 0,i={id:"objects/timeout",title:"Timeout",description:"No description",source:"@site/api/objects/timeout.mdx",sourceDirName:"objects",slug:"/objects/timeout",permalink:"/api/objects/timeout",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"timeout",title:"Timeout"},sidebar:"schemaSidebar",previous:{title:"TimeRange",permalink:"/api/objects/time-range"},next:{title:"TrafficOptimizationAccessConnection",permalink:"/api/objects/traffic-optimization-access-connection"}},l={},d=()=>{const e={span:"span",...(0,o.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,o.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,o.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>Timeout.<b>search</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"timeoutsearchint--",level:4},{value:'<code>Timeout.<b>quote</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"timeoutquoteint--",level:4},{value:'<code>Timeout.<b>book</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"timeoutbookint--",level:4},{value:"Member Of",id:"member-of",level:3}],m=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,o.M)()},[i,l]=(0,a.useState)(c);return(0,s.jsxs)(r.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"No description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type Timeout {\n  search: Int!\n  quote: Int!\n  book: Int!\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"timeoutsearchint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Timeout.",(0,s.jsx)("b",{children:"search"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/scalars/int",children:(0,s.jsx)(t.code,{children:"Int!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Milliseconds before the search connection is closed."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"timeoutquoteint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Timeout.",(0,s.jsx)("b",{children:"quote"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/scalars/int",children:(0,s.jsx)(t.code,{children:"Int!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Milliseconds before the quote connection is closed."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"timeoutbookint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Timeout.",(0,s.jsx)("b",{children:"book"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/scalars/int",children:(0,s.jsx)(t.code,{children:"Int!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Milliseconds before the book connection is closed."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/objects/hotel-xcommon-settings-data",children:(0,s.jsx)(t.code,{children:"HotelXCommonSettingsData"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(d,{}),(0,s.jsx)(t.a,{href:"/api/objects/hotel-xdefault-settings-data",children:(0,s.jsx)(t.code,{children:"HotelXDefaultSettingsData"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},44808:(e,t,n)=>{var s=n(11504),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,a={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,s)&&!i.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:o,type:e,key:l,ref:d,props:a,_owner:r.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>c});var s=n(11504);const o={},a=s.createContext(o);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);