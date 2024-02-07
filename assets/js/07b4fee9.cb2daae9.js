/*! For license information please see 07b4fee9.cb2daae9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27172],{19120:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>f,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>y});var o=t(17624),a=t(4552),r=t(11504);const c={id:"category-connection",title:"CategoryConnection"},s=void 0,d={id:"objects/category-connection",title:"CategoryConnection",description:"CategoryList definition",source:"@site/api/objects/category-connection.mdx",sourceDirName:"objects",slug:"/objects/category-connection",permalink:"/api/objects/category-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"category-connection",title:"CategoryConnection"},sidebar:"schemaSidebar",previous:{title:"CancelPolicy",permalink:"/api/objects/cancel-policy"},next:{title:"CategoryData",permalink:"/api/objects/category-data"}},i={},l=()=>{const e={span:"span",...(0,a.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,a.M)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,a.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>CategoryConnection.<b>edges</b></code><Bullet></Bullet><code>[CategoryEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryconnectionedgescategoryedge--",level:4},{value:'<code>CategoryConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"categoryconnectionpageinfopageinfo--",level:4},{value:"Member Of",id:"member-of",level:3}],f=({dataOpen:e,dataClose:n,children:t,startOpen:c=!1})=>{const s={details:"details",summary:"summary",...(0,a.M)()},[d,i]=(0,r.useState)(c);return(0,o.jsxs)(s.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(s.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"CategoryList definition"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type CategoryConnection {\n  edges: [CategoryEdge]\n  pageInfo: PageInfo @deprecated\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"categoryconnectionedgescategoryedge--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/objects/category-edge",children:(0,o.jsx)(n.code,{children:"[CategoryEdge]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"categoryconnectionpageinfopageinfo--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["CategoryConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/objects/page-info",children:(0,o.jsx)(n.code,{children:"PageInfo"})})," ",(0,o.jsx)(p,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.admonition,{title:"DEPRECATED",type:"warning",children:(0,o.jsx)(n.p,{children:"This property is deprecated and is no longer recommended for use."})}),"\n",(0,o.jsx)(n.p,{children:"Indicates info about page"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/objects/hotel-xquery",children:(0,o.jsx)(n.code,{children:"HotelXQuery"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},44808:(e,n,t)=>{var o=t(11504),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var o,r={},i=null,l=null;for(o in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,o)&&!d.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:a,type:e,key:i,ref:l,props:r,_owner:s.current}}n.Fragment=r,n.jsx=i,n.jsxs=i},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>c});var o=t(11504);const a={},r=o.createContext(a);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);