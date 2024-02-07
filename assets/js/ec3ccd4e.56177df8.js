/*! For license information please see ec3ccd4e.56177df8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21236],{32516:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=n(17624),s=n(4552),a=n(11504);const o={id:"hotel-xboard-query-input",title:"HotelXBoardQueryInput"},d=void 0,l={id:"inputs/hotel-xboard-query-input",title:"HotelXBoardQueryInput",description:"No description",source:"@site/api/inputs/hotel-xboard-query-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xboard-query-input",permalink:"/api/inputs/hotel-xboard-query-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-xboard-query-input",title:"HotelXBoardQueryInput"},sidebar:"schemaSidebar",previous:{title:"HotelXAppWhereUniqueInput",permalink:"/api/inputs/hotel-xapp-where-unique-input"},next:{title:"HotelXBusinessRulesInput",permalink:"/api/inputs/hotel-xbusiness-rules-input"}},i={},c=()=>{const e={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXBoardQueryInput.<b>boardCodes</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxboardqueryinputboardcodesstring--",level:4},{value:'<code>HotelXBoardQueryInput.<b>access</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxboardqueryinputaccessid--",level:4}],x=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,s.M)()},[l,i]=(0,a.useState)(o);return(0,r.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})};function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input HotelXBoardQueryInput {\n  boardCodes: [String!]\n  access: ID!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"hotelxboardqueryinputboardcodesstring--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXBoardQueryInput.",(0,r.jsx)("b",{children:"boardCodes"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/scalars/string",children:(0,r.jsx)(t.code,{children:"[String!]"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Indicates the board codes that you want filter."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"hotelxboardqueryinputaccessid--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXBoardQueryInput.",(0,r.jsx)("b",{children:"access"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/scalars/id",children:(0,r.jsx)(t.code,{children:"ID!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Indicates the access that you want use."}),"\n"]})]})}function y(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},44808:(e,t,n)=>{var r=n(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,a={},i=null,c=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:i,ref:c,props:a,_owner:d.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>d,M:()=>o});var r=n(11504);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);