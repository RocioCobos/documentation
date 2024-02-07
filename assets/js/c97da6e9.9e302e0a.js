/*! For license information please see c97da6e9.9e302e0a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28316],{88204:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(17624),r=n(4552),o=n(11504);const i={id:"alert-common-comparative-input",title:"AlertCommonComparativeInput"},s=void 0,l={id:"inputs/alert-common-comparative-input",title:"AlertCommonComparativeInput",description:"No description",source:"@site/api/inputs/alert-common-comparative-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-common-comparative-input",permalink:"/api/inputs/alert-common-comparative-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-common-comparative-input",title:"AlertCommonComparativeInput"},sidebar:"schemaSidebar",previous:{title:"AlertCommonByTimeInput",permalink:"/api/inputs/alert-common-by-time-input"},next:{title:"AlertCommonConfigurationInput",permalink:"/api/inputs/alert-common-configuration-input"}},c={},d=()=>{const e={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const t={a:"a",...(0,r.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertCommonComparativeInput.<b>historicalWindow</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommoncomparativeinputhistoricalwindowint--",level:4},{value:'<code>AlertCommonComparativeInput.<b>offset</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommoncomparativeinputoffsetint--",level:4},{value:'<code>AlertCommonComparativeInput.<b>variation</b></code><Bullet></Bullet><code>AlertVariation!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommoncomparativeinputvariationalertvariation--",level:4},{value:'<code>AlertCommonComparativeInput.<b>percentageToAlert</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommoncomparativeinputpercentagetoalertint--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,r.M)()},[l,c]=(0,o.useState)(i);return(0,a.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})};function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AlertCommonComparativeInput {\n  historicalWindow: Int!\n  offset: Int!\n  variation: AlertVariation!\n  percentageToAlert: Int!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommoncomparativeinputhistoricalwindowint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonComparativeInput.",(0,a.jsx)("b",{children:"historicalWindow"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The time frame in minutes to be used to compare with the window time frame"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommoncomparativeinputoffsetint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonComparativeInput.",(0,a.jsx)("b",{children:"offset"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Time frame in minutes to set the beginning of historicalWindow"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommoncomparativeinputvariationalertvariation--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonComparativeInput.",(0,a.jsx)("b",{children:"variation"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/enums/alert-variation",children:(0,a.jsx)(t.code,{children:"AlertVariation!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"According to percentageToAlert value"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommoncomparativeinputpercentagetoalertint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonComparativeInput.",(0,a.jsx)("b",{children:"percentageToAlert"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Percentage to be considered status ALERTING"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/inputs/alert-average-time-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertAverageTimeComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-error-rate-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertErrorRateComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-peak-traffic-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertPeakTrafficComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},44808:(e,t,n)=>{var a=n(11504),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,o={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>i});var a=n(11504);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);