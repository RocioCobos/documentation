/*! For license information please see e564d4d8.2cd1ddb9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50187],{45237:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>x});var o=n(74848),s=n(28453),r=n(96540);const a={id:"hotel-xroom-query-input",title:"HotelXRoomQueryInput"},l=void 0,i={id:"types/inputs/hotel-xroom-query-input",title:"HotelXRoomQueryInput",description:"No description",source:"@site/api/types/inputs/hotel-xroom-query-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/hotel-xroom-query-input",permalink:"/api/types/inputs/hotel-xroom-query-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-xroom-query-input",title:"HotelXRoomQueryInput"},sidebar:"schemaSidebar",previous:{title:"HotelXPluginFilterInput",permalink:"/api/types/inputs/hotel-xplugin-filter-input"},next:{title:"HotelXSupplierInput",permalink:"/api/types/inputs/hotel-xsupplier-input"}},c={},d=()=>{const e={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:n,startOpen:a=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[i,c]=(0,r.useState)(a);return(0,o.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXRoomQueryInput.<b>access</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxroomqueryinputaccessid--",level:4},{value:'<code>HotelXRoomQueryInput.<b>roomCodes</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxroomqueryinputroomcodesstring--",level:4},{value:'<code>HotelXRoomQueryInput.<b>maxSize</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxroomqueryinputmaxsizeint-",level:4}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"No description"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-graphql",children:"input HotelXRoomQueryInput {\n  access: ID!\n  roomCodes: [String!]\n  maxSize: Int\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.h4,{id:"hotelxroomqueryinputaccessid--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXRoomQueryInput.",(0,o.jsx)("b",{children:"access"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/id",children:(0,o.jsx)(t.code,{children:"ID!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Indicates the access that you want use."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"hotelxroomqueryinputroomcodesstring--",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXRoomQueryInput.",(0,o.jsx)("b",{children:"roomCodes"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(t.code,{children:"[String!]"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Indicates the room codes that you want filter."}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"hotelxroomqueryinputmaxsizeint-",children:[(0,o.jsx)(t.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXRoomQueryInput.",(0,o.jsx)("b",{children:"maxSize"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,o.jsx)(t.code,{children:"Int"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Maxium number of items per page"}),"\n"]})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},21020:(e,t,n)=>{var o=n(96540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,r={},c=null,d=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,o)&&!i.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var o=n(96540);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);