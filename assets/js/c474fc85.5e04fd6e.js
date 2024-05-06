/*! For license information please see c474fc85.5e04fd6e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82659],{88012:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>c,assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>x});var r=t(74848),o=t(28453),i=t(96540);const s={id:"hotel-xapp-where-unique-input",title:"HotelXAppWhereUniqueInput",hide_table_of_contents:!1},a=void 0,l={id:"inputs/hotel-xapp-where-unique-input",title:"HotelXAppWhereUniqueInput",description:"No description",source:"@site/api/inputs/hotel-xapp-where-unique-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xapp-where-unique-input",permalink:"/api/inputs/hotel-xapp-where-unique-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-xapp-where-unique-input",title:"HotelXAppWhereUniqueInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXAppInput",permalink:"/api/inputs/hotel-xapp-input"},next:{title:"HotelXBoardQueryInput",permalink:"/api/inputs/hotel-xboard-query-input"}},p={},d=()=>{const e={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},c=e=>{const n={a:"a",...(0,o.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,o.R)()},[l,p]=(0,i.useState)(s);return(0,r.jsxs)(a.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(a.summary,{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXAppWhereUniqueInput.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxappwhereuniqueinputcodeid--",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input HotelXAppWhereUniqueInput {\n  code: ID!\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"hotelxappwhereuniqueinputcodeid--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXAppWhereUniqueInput.",(0,r.jsx)("b",{children:"code"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/scalars/id",children:(0,r.jsx)(n.code,{children:"ID!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Code that identifies the app."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/inputs/hotel-xapp-input",children:(0,r.jsx)(n.code,{children:"HotelXAppInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,i={},p=null,d=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:p,ref:d,props:i,_owner:a.current}}n.Fragment=i,n.jsx=p,n.jsxs=p},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);