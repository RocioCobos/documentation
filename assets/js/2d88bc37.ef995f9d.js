/*! For license information please see 2d88bc37.ef995f9d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50408],{72516:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var o=n(17624),a=n(4552),r=n(11504);const s={id:"hotel-xmap-option-input",title:"HotelXMapOptionInput"},i=void 0,l={id:"inputs/hotel-xmap-option-input",title:"HotelXMapOptionInput",description:"No description",source:"@site/api/inputs/hotel-xmap-option-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xmap-option-input",permalink:"/api/inputs/hotel-xmap-option-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-xmap-option-input",title:"HotelXMapOptionInput"},sidebar:"schemaSidebar",previous:{title:"HotelXHotelListInput",permalink:"/api/inputs/hotel-xhotel-list-input"},next:{title:"HotelXMappingReportWhereInput",permalink:"/api/inputs/hotel-xmapping-report-where-input"}},c={},d=()=>{const e={span:"span",...(0,a.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.M)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,a.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXMapOptionInput.<b>groupCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxmapoptioninputgroupcodeid--",level:4},{value:'<code>HotelXMapOptionInput.<b>context</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxmapoptioninputcontextstring--",level:4}],x=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,a.M)()},[l,c]=(0,r.useState)(s);return(0,o.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})};function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"No description"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"input HotelXMapOptionInput {\n  groupCode: ID!\n  context: String!\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"hotelxmapoptioninputgroupcodeid--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXMapOptionInput.",(0,o.jsx)("b",{children:"groupCode"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/scalars/id",children:(0,o.jsx)(t.code,{children:"ID!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(t.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(t.h4,{id:"hotelxmapoptioninputcontextstring--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXMapOptionInput.",(0,o.jsx)("b",{children:"context"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/scalars/string",children:(0,o.jsx)(t.code,{children:"String!"})})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(t.blockquote,{children:"\n"})]})}function m(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},44808:(e,t,n)=>{var o=n(11504),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,r={},c=null,d=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!l.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:a,type:e,key:c,ref:d,props:r,_owner:i.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>s});var o=n(11504);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);