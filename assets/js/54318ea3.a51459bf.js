/*! For license information please see 54318ea3.a51459bf.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43980],{14060:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var i=n(17624),a=n(4552),r=n(11504);const s={id:"alert-update-common-by-time-input",title:"AlertUpdateCommonByTimeInput"},o=void 0,d={id:"inputs/alert-update-common-by-time-input",title:"AlertUpdateCommonByTimeInput",description:"No description",source:"@site/api/inputs/alert-update-common-by-time-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-common-by-time-input",permalink:"/api/inputs/alert-update-common-by-time-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-update-common-by-time-input",title:"AlertUpdateCommonByTimeInput"},sidebar:"schemaSidebar",previous:{title:"AlertUpdateCommonByRequestsInput",permalink:"/api/inputs/alert-update-common-by-requests-input"},next:{title:"AlertUpdateCommonComparativeInput",permalink:"/api/inputs/alert-update-common-comparative-input"}},l={},c=()=>{const e={span:"span",...(0,a.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdateCommonByTimeInput.<b>periodicity</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonbytimeinputperiodicityint-",level:4},{value:'<code>AlertUpdateCommonByTimeInput.<b>window</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonbytimeinputwindowint-",level:4},{value:'<code>AlertUpdateCommonByTimeInput.<b>minNumberRequests</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonbytimeinputminnumberrequestsint-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,a.M)()},[d,l]=(0,r.useState)(s);return(0,i.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdateCommonByTimeInput {\n  periodicity: Int\n  window: Int\n  minNumberRequests: Int\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"alertupdatecommonbytimeinputperiodicityint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonByTimeInput.",(0,i.jsx)("b",{children:"periodicity"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/scalars/int",children:(0,i.jsx)(t.code,{children:"Int"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Frequency of time in minutes in which the alert will be reviewed"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"alertupdatecommonbytimeinputwindowint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonByTimeInput.",(0,i.jsx)("b",{children:"window"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/scalars/int",children:(0,i.jsx)(t.code,{children:"Int"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The time frame in minutes"}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"alertupdatecommonbytimeinputminnumberrequestsint-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonByTimeInput.",(0,i.jsx)("b",{children:"minNumberRequests"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/scalars/int",children:(0,i.jsx)(t.code,{children:"Int"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Minimum number of requests must be in window to check the alert"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-average-time-absolute-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-average-time-comparative-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateAverageTimeComparativeConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-average-time-relative-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateAverageTimeRelativeConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-business-metric-ratio-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateBusinessMetricRatioConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-error-rate-comparative-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateErrorRateComparativeConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-error-rate-relative-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdateErrorRateRelativeConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-peak-traffic-absolute-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-peak-traffic-comparative-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdatePeakTrafficComparativeConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-price-absolute-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdatePriceAbsoluteConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/inputs/alert-update-price-relative-configuration-by-time-input",children:(0,i.jsx)(t.code,{children:"AlertUpdatePriceRelativeConfigurationByTimeInput"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function b(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},44808:(e,t,n)=>{var i=n(11504),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,r={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,i)&&!d.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:a,type:e,key:l,ref:c,props:r,_owner:o.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>s});var i=n(11504);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);