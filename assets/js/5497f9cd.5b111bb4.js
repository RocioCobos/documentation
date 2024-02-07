/*! For license information please see 5497f9cd.5b111bb4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14864],{21764:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>x,Bullet:()=>o,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>j,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var l=t(17624),n=t(4552),s=t(11504);const a={id:"alerts-xquery",title:"AlertsXQuery"},i=void 0,c={id:"objects/alerts-xquery",title:"AlertsXQuery",description:"No description",source:"@site/api/objects/alerts-xquery.mdx",sourceDirName:"objects",slug:"/objects/alerts-xquery",permalink:"/api/objects/alerts-xquery",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alerts-xquery",title:"AlertsXQuery"},sidebar:"schemaSidebar",previous:{title:"AlertsXMutation",permalink:"/api/objects/alerts-xmutation"},next:{title:"AmenityStatic",permalink:"/api/objects/amenity-static"}},d={},o=()=>{const e={span:"span",...(0,n.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,n.M)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const r={span:"span",...(0,n.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(r.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertsXQuery.<b>alerts</b></code><Bullet></Bullet><code>AlertConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertsxqueryalertsalertconnection--",level:4},{value:'<code>AlertsXQuery.alerts.<b>relay</b></code><Bullet></Bullet><code>RelayInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertsxqueryalertsrelayrelayinput-",level:5},{value:'<code>AlertsXQuery.alerts.<b>filter</b></code><Bullet></Bullet><code>AlertFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertsxqueryalertsfilteralertfilterinput-",level:5},{value:'<code>AlertsXQuery.alerts.<b>criteria</b></code><Bullet></Bullet><code>AlertCriteriaInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertsxqueryalertscriteriaalertcriteriainput-",level:5},{value:"Returned by",id:"returned-by",level:3}],y=({dataOpen:e,dataClose:r,children:t,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,n.M)()},[c,d]=(0,s.useState)(a);return(0,l.jsxs)(i.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&t]})};function h(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.p,{children:"No description"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-graphql",children:"type AlertsXQuery {\n  alerts(\n    relay: RelayInput\n    filter: AlertFilterInput\n    criteria: AlertCriteriaInput\n  ): AlertConnection!\n}\n"})}),"\n",(0,l.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(r.h4,{id:"alertsxqueryalertsalertconnection--",children:[(0,l.jsx)(r.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertsXQuery.",(0,l.jsx)("b",{children:"alerts"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(r.a,{href:"/api/objects/alert-connection",children:(0,l.jsx)(r.code,{children:"AlertConnection!"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Query to obtain Alerts"}),"\n",(0,l.jsxs)(r.h5,{id:"alertsxqueryalertsrelayrelayinput-",children:[(0,l.jsx)(r.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertsXQuery.alerts.",(0,l.jsx)("b",{children:"relay"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(r.a,{href:"/api/inputs/relay-input",children:(0,l.jsx)(r.code,{children:"RelayInput"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,l.jsxs)(r.h5,{id:"alertsxqueryalertsfilteralertfilterinput-",children:[(0,l.jsx)(r.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertsXQuery.alerts.",(0,l.jsx)("b",{children:"filter"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(r.a,{href:"/api/inputs/alert-filter-input",children:(0,l.jsx)(r.code,{children:"AlertFilterInput"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsx)(r.blockquote,{children:"\n"}),"\n",(0,l.jsxs)(r.h5,{id:"alertsxqueryalertscriteriaalertcriteriainput-",children:[(0,l.jsx)(r.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertsXQuery.alerts.",(0,l.jsx)("b",{children:"criteria"})]})}),(0,l.jsx)(o,{}),(0,l.jsx)(r.a,{href:"/api/inputs/alert-criteria-input",children:(0,l.jsx)(r.code,{children:"AlertCriteriaInput"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsx)(r.blockquote,{children:"\n"}),"\n",(0,l.jsx)(r.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.a,{href:"/api/queries/alerts-x",children:(0,l.jsx)(r.code,{children:"alertsX"})})," ",(0,l.jsx)(x,{class:"badge badge--secondary",text:"query"})]})]})}function j(e={}){const{wrapper:r}={...(0,n.M)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},44808:(e,r,t)=>{var l=t(11504),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var l,s={},d=null,o=null;for(l in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(o=r.ref),r)a.call(r,l)&&!c.hasOwnProperty(l)&&(s[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===s[l]&&(s[l]=r[l]);return{$$typeof:n,type:e,key:d,ref:o,props:s,_owner:i.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},17624:(e,r,t)=>{e.exports=t(44808)},4552:(e,r,t)=>{t.d(r,{I:()=>i,M:()=>a});var l=t(11504);const n={},s=l.createContext(n);function a(e){const r=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),l.createElement(s.Provider,{value:r},e.children)}}}]);