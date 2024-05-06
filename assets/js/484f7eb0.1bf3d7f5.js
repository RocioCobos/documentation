/*! For license information please see 484f7eb0.1bf3d7f5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94891],{17599:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>x});var o=n(74848),r=n(28453),a=n(96540);const s={id:"hotel-xtracing",title:"HotelXTracing",hide_table_of_contents:!1},l=void 0,c={id:"objects/hotel-xtracing",title:"HotelXTracing",description:"No description",source:"@site/api/objects/hotel-xtracing.mdx",sourceDirName:"objects",slug:"/objects/hotel-xtracing",permalink:"/api/objects/hotel-xtracing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-xtracing",title:"HotelXTracing",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXQuery",permalink:"/api/objects/hotel-xquery"},next:{title:"HotelXTransactionSpan",permalink:"/api/objects/hotel-xtransaction-span"}},i={},d=()=>{const e={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[c,i]=(0,a.useState)(s);return(0,o.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXTracing.<b>operationSpan</b></code><Bullet></Bullet><code>HotelXOperationSpan!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxtracingoperationspanhotelxoperationspan--",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"No description"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"type HotelXTracing {\n  operationSpan: HotelXOperationSpan!\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"hotelxtracingoperationspanhotelxoperationspan--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXTracing.",(0,o.jsx)("b",{children:"operationSpan"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/objects/hotel-xoperation-span",children:(0,o.jsx)(t.code,{children:"HotelXOperationSpan!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(t.blockquote,{children:"\n"}),"\n",(0,o.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/api/objects/hotel-search",children:(0,o.jsx)(t.code,{children:"HotelSearch"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},21020:(e,t,n)=>{var o=n(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var o,a={},i=null,d=null;for(o in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:i,ref:d,props:a,_owner:l.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(96540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);