/*! For license information please see 09824bd2.8029dfef.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1250],{38940:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var r=n(17624),a=n(4552),s=n(11504);const i={id:"room-input",title:"RoomInput"},o=void 0,c={id:"inputs/room-input",title:"RoomInput",description:"Occupancy for a room. It contains a list of pax ages.",source:"@site/api/inputs/room-input.mdx",sourceDirName:"inputs",slug:"/inputs/room-input",permalink:"/api/inputs/room-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"room-input",title:"RoomInput"},sidebar:"schemaSidebar",previous:{title:"RestrictionsLoadInput",permalink:"/api/inputs/restrictions-load-input"},next:{title:"SearchCriteriaCodeWhereInput",permalink:"/api/inputs/search-criteria-code-where-input"}},l={},d=()=>{const e={span:"span",...(0,a.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,a.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,a.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>RoomInput.<b>paxes</b></code><Bullet></Bullet><code>[PaxInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roominputpaxespaxinput--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,a.M)()},[c,l]=(0,s.useState)(i);return(0,r.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Occupancy for a room. It contains a list of pax ages."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input RoomInput {\n  paxes: [PaxInput!]!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"roominputpaxespaxinput--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomInput.",(0,r.jsx)("b",{children:"paxes"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/inputs/pax-input",children:(0,r.jsx)(t.code,{children:"[PaxInput!]!"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Array of paxes ages. The number of items in the array will indicate the pax occupancy."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/inputs/hotel-criteria-search-input",children:(0,r.jsx)(t.code,{children:"HotelCriteriaSearchInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/inputs/hotel-one-step-quote-input",children:(0,r.jsx)(t.code,{children:"HotelOneStepQuoteInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/inputs/search-criteria-create-input",children:(0,r.jsx)(t.code,{children:"SearchCriteriaCreateInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,r.jsx)(d,{}),(0,r.jsx)(t.a,{href:"/api/inputs/search-criteria-update-input",children:(0,r.jsx)(t.code,{children:"SearchCriteriaUpdateInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},44808:(e,t,n)=>{var r=n(11504),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>i});var r=n(11504);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);