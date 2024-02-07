/*! For license information please see d3a2a37b.3979a0b3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90990],{67340:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>b,assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>f});var t=o(17624),a=o(4552),r=o(11504);const d={id:"board-connection",title:"BoardConnection"},s=void 0,c={id:"objects/board-connection",title:"BoardConnection",description:"BoardList definition",source:"@site/api/objects/board-connection.mdx",sourceDirName:"objects",slug:"/objects/board-connection",permalink:"/api/objects/board-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"board-connection",title:"BoardConnection"},sidebar:"schemaSidebar",previous:{title:"Bed",permalink:"/api/objects/bed"},next:{title:"BoardData",permalink:"/api/objects/board-data"}},i={},l=()=>{const e={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const n={a:"a",...(0,a.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>BoardConnection.<b>edges</b></code><Bullet></Bullet><code>[BoardEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"boardconnectionedgesboardedge--",level:4},{value:'<code>BoardConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"boardconnectionpageinfopageinfo--",level:4},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:n,children:o,startOpen:d=!1})=>{const s={details:"details",summary:"summary",...(0,a.M)()},[c,i]=(0,r.useState)(d);return(0,t.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(s.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&o]})};function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"BoardList definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type BoardConnection {\n  edges: [BoardEdge]\n  pageInfo: PageInfo!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"boardconnectionedgesboardedge--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BoardConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/board-edge",children:(0,t.jsx)(n.code,{children:"[BoardEdge]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"boardconnectionpageinfopageinfo--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["BoardConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/page-info",children:(0,t.jsx)(n.code,{children:"PageInfo!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Indicates info about page"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/objects/hotel-xquery",children:(0,t.jsx)(n.code,{children:"HotelXQuery"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},44808:(e,n,o)=>{var t=o(11504),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,o){var t,r={},i=null,l=null;for(t in void 0!==o&&(i=""+o),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)d.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:a,type:e,key:i,ref:l,props:r,_owner:s.current}}n.Fragment=r,n.jsx=i,n.jsxs=i},17624:(e,n,o)=>{e.exports=o(44808)},4552:(e,n,o)=>{o.d(n,{I:()=>s,M:()=>d});var t=o(11504);const a={},r=t.createContext(a);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);