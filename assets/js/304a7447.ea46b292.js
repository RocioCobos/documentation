/*! For license information please see 304a7447.ea46b292.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60955],{40016:(e,o,n)=>{n.r(o),n.d(o,{Badge:()=>u,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var t=n(17624),s=n(4552),a=n(11504);const r={id:"one-step-book-room-input",title:"OneStepBookRoomInput"},i=void 0,d={id:"inputs/one-step-book-room-input",title:"OneStepBookRoomInput",description:"No description",source:"@site/api/inputs/one-step-book-room-input.mdx",sourceDirName:"inputs",slug:"/inputs/one-step-book-room-input",permalink:"/api/inputs/one-step-book-room-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"one-step-book-room-input",title:"OneStepBookRoomInput"},sidebar:"schemaSidebar",previous:{title:"NullableStringFilter",permalink:"/api/inputs/nullable-string-filter"},next:{title:"OrganizationWhereUniqueInput",permalink:"/api/inputs/organization-where-unique-input"}},c={},l=()=>{const e={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const o={a:"a",...(0,s.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const o={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>OneStepBookRoomInput.<b>occupancyRefId</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onestepbookroominputoccupancyrefidint--",level:4},{value:'<code>OneStepBookRoomInput.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onestepbookroominputcodestring--",level:4},{value:'<code>OneStepBookRoomInput.<b>promotions</b></code><Bullet></Bullet><code>[PromotionInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onestepbookroominputpromotionspromotioninput--",level:4},{value:'<code>OneStepBookRoomInput.<b>paxes</b></code><Bullet></Bullet><code>[BookPaxInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"onestepbookroominputpaxesbookpaxinput--",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:o,children:n,startOpen:r=!1})=>{const i={details:"details",summary:"summary",...(0,s.M)()},[d,c]=(0,a.useState)(r);return(0,t.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:o}),d&&n]})};function h(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"No description"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-graphql",children:"input OneStepBookRoomInput {\n  occupancyRefId: Int!\n  code: String!\n  promotions: [PromotionInput!]\n  paxes: [BookPaxInput!]!\n}\n"})}),"\n",(0,t.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(o.h4,{id:"onestepbookroominputoccupancyrefidint--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OneStepBookRoomInput.",(0,t.jsx)("b",{children:"occupancyRefId"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(o.a,{href:"/api/scalars/int",children:(0,t.jsx)(o.code,{children:"Int!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(o.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(o.h4,{id:"onestepbookroominputcodestring--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OneStepBookRoomInput.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(o.a,{href:"/api/scalars/string",children:(0,t.jsx)(o.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(o.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(o.h4,{id:"onestepbookroominputpromotionspromotioninput--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OneStepBookRoomInput.",(0,t.jsx)("b",{children:"promotions"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(o.a,{href:"/api/inputs/promotion-input",children:(0,t.jsx)(o.code,{children:"[PromotionInput!]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(o.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(o.h4,{id:"onestepbookroominputpaxesbookpaxinput--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["OneStepBookRoomInput.",(0,t.jsx)("b",{children:"paxes"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(o.a,{href:"/api/inputs/book-pax-input",children:(0,t.jsx)(o.code,{children:"[BookPaxInput!]!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(o.blockquote,{children:"\n"}),"\n",(0,t.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/api/inputs/hotel-one-step-book-input",children:(0,t.jsx)(o.code,{children:"HotelOneStepBookInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,t.jsx)(l,{}),(0,t.jsx)(o.a,{href:"/api/inputs/hotel-one-step-quote-input",children:(0,t.jsx)(o.code,{children:"HotelOneStepQuoteInput"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:o}={...(0,s.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},44808:(e,o,n)=>{var t=n(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,n){var t,a={},c=null,l=null;for(t in void 0!==n&&(c=""+n),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)r.call(o,t)&&!d.hasOwnProperty(t)&&(a[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===a[t]&&(a[t]=o[t]);return{$$typeof:s,type:e,key:c,ref:l,props:a,_owner:i.current}}o.Fragment=a,o.jsx=c,o.jsxs=c},17624:(e,o,n)=>{e.exports=n(44808)},4552:(e,o,n)=>{n.d(o,{I:()=>i,M:()=>r});var t=n(11504);const s={},a=t.createContext(s);function r(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:o},e.children)}}}]);