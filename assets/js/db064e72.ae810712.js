/*! For license information please see db064e72.ae810712.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81280],{45608:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>x});var n=a(17624),s=a(4552),r=a(11504);const i={id:"language",title:"Language"},c=void 0,o={id:"scalars/language",title:"Language",description:"The Language type represents language values. A good example might be a Hotel Description Language.",source:"@site/api/scalars/language.mdx",sourceDirName:"scalars",slug:"/scalars/language",permalink:"/api/scalars/language",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"language",title:"Language"},sidebar:"schemaSidebar",previous:{title:"JWT",permalink:"/api/scalars/jwt"},next:{title:"LocationCode",permalink:"/api/scalars/location-code"}},d={},l=()=>{const e={span:"span",...(0,s.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},x=[{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:a,startOpen:i=!1})=>{const c={details:"details",summary:"summary",...(0,s.M)()},[o,d]=(0,r.useState)(i);return(0,n.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&a]})};function j(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'The Language type represents language values. A good example might be a Hotel Description Language.\nIn queries or mutations, Language fields have to be specified in ISO 639-1 format with enclosing double quotes "en".'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"scalar Language\n"})}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/criteria-search",children:(0,n.jsx)(t.code,{children:"CriteriaSearch"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-book-input",children:(0,n.jsx)(t.code,{children:"HotelBookInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-cancel-input",children:(0,n.jsx)(t.code,{children:"HotelCancelInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-commit-input",children:(0,n.jsx)(t.code,{children:"HotelCommitInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-criteria-amend-board-quote-input",children:(0,n.jsx)(t.code,{children:"HotelCriteriaAmendBoardQuoteInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-criteria-amend-dates-quote-input",children:(0,n.jsx)(t.code,{children:"HotelCriteriaAmendDatesQuoteInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-criteria-amend-paxes-quote-input",children:(0,n.jsx)(t.code,{children:"HotelCriteriaAmendPaxesQuoteInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-criteria-amend-remarks-quote-input",children:(0,n.jsx)(t.code,{children:"HotelCriteriaAmendRemarksQuoteInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-criteria-amend-rooms-quote-input",children:(0,n.jsx)(t.code,{children:"HotelCriteriaAmendRoomsQuoteInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-criteria-booking-input",children:(0,n.jsx)(t.code,{children:"HotelCriteriaBookingInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-criteria-quote-input",children:(0,n.jsx)(t.code,{children:"HotelCriteriaQuoteInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-criteria-search-input",children:(0,n.jsx)(t.code,{children:"HotelCriteriaSearchInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/objects/hotel-xdefault-settings-data",children:(0,n.jsx)(t.code,{children:"HotelXDefaultSettingsData"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/hotel-xdefault-settings-data-input",children:(0,n.jsx)(t.code,{children:"HotelXDefaultSettingsDataInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/search-criteria-create-input",children:(0,n.jsx)(t.code,{children:"SearchCriteriaCreateInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/objects/search-criteria-data",children:(0,n.jsx)(t.code,{children:"SearchCriteriaData"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/search-criteria-update-input",children:(0,n.jsx)(t.code,{children:"SearchCriteriaUpdateInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/objects/text",children:(0,n.jsx)(t.code,{children:"Text"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},44808:(e,t,a)=>{var n=a(11504),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,a){var n,r={},d=null,l=null;for(n in void 0!==a&&(d=""+a),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!o.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:l,props:r,_owner:c.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},17624:(e,t,a)=>{e.exports=a(44808)},4552:(e,t,a)=>{a.d(t,{I:()=>c,M:()=>i});var n=a(11504);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);