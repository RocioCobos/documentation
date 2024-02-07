/*! For license information please see 3a53d506.e40238f4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54432],{86340:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var a=n(17624),r=n(4552),s=n(11504);const i={id:"criteria-booking-dates-input",title:"CriteriaBookingDatesInput"},d=void 0,o={id:"inputs/criteria-booking-dates-input",title:"CriteriaBookingDatesInput",description:"Criteria by dates",source:"@site/api/inputs/criteria-booking-dates-input.mdx",sourceDirName:"inputs",slug:"/inputs/criteria-booking-dates-input",permalink:"/api/inputs/criteria-booking-dates-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"criteria-booking-dates-input",title:"CriteriaBookingDatesInput"},sidebar:"schemaSidebar",previous:{title:"CreateSystemInput",permalink:"/api/inputs/create-system-input"},next:{title:"CriteriaBookingReferencesInput",permalink:"/api/inputs/criteria-booking-references-input"}},c={},l=()=>{const e={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,r.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>CriteriaBookingDatesInput.<b>dateType</b></code><Bullet></Bullet><code>DateType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"criteriabookingdatesinputdatetypedatetype--",level:4},{value:'<code>CriteriaBookingDatesInput.<b>start</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"criteriabookingdatesinputstartdate--",level:4},{value:'<code>CriteriaBookingDatesInput.<b>end</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"criteriabookingdatesinputenddate--",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const d={details:"details",summary:"summary",...(0,r.M)()},[o,c]=(0,s.useState)(i);return(0,a.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Criteria by dates"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input CriteriaBookingDatesInput {\n  dateType: DateType!\n  start: Date!\n  end: Date!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"criteriabookingdatesinputdatetypedatetype--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CriteriaBookingDatesInput.",(0,a.jsx)("b",{children:"dateType"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/enums/date-type",children:(0,a.jsx)(t.code,{children:"DateType!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Type of date. Can be Arrival or Booking date."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"criteriabookingdatesinputstartdate--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CriteriaBookingDatesInput.",(0,a.jsx)("b",{children:"start"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/scalars/date",children:(0,a.jsx)(t.code,{children:"Date!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Start date.\nFormat: YYYY-MM-DD.\nStart of date range"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"criteriabookingdatesinputenddate--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CriteriaBookingDatesInput.",(0,a.jsx)("b",{children:"end"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/scalars/date",children:(0,a.jsx)(t.code,{children:"Date!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"End date.\nFormat: YYYY-MM-DD.\nEnd of date range"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/inputs/hotel-criteria-booking-input",children:(0,a.jsx)(t.code,{children:"HotelCriteriaBookingInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},44808:(e,t,n)=>{var a=n(11504),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,s={},c=null,l=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,a)&&!o.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:l,props:s,_owner:d.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>d,M:()=>i});var a=n(11504);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);