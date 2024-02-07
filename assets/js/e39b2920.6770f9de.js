/*! For license information please see e39b2920.6770f9de.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10032],{92160:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=t(17624),r=t(4552),i=t(11504);const o={id:"insights-country-type",title:"InsightsCountryType"},c=void 0,a={id:"enums/insights-country-type",title:"InsightsCountryType",description:"No description",source:"@site/api/enums/insights-country-type.mdx",sourceDirName:"enums",slug:"/enums/insights-country-type",permalink:"/api/enums/insights-country-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"insights-country-type",title:"InsightsCountryType"},sidebar:"schemaSidebar",previous:{title:"IATA_PTC_CodeType",permalink:"/api/enums/iata-ptc-code-type"},next:{title:"LifecycleStage",permalink:"/api/enums/lifecycle-stage"}},l={},d=()=>{const e={span:"span",...(0,r.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,r.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,r.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Values",id:"values",level:3},{value:"<code>InsightsCountryType.<b>ORIGIN_MARKET</b></code>",id:"insightscountrytypeorigin_market",level:4},{value:"<code>InsightsCountryType.<b>DESTINATION_COUNTRY</b></code>",id:"insightscountrytypedestination_country",level:4},{value:"Member Of",id:"member-of",level:3}],y=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,r.M)()},[a,l]=(0,i.useState)(o);return(0,s.jsxs)(c.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:a?e:n}),a&&t]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"enum InsightsCountryType {\n  ORIGIN_MARKET\n  DESTINATION_COUNTRY\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,s.jsx)(n.h4,{id:"insightscountrytypeorigin_market",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsCountryType.",(0,s.jsx)("b",{children:"ORIGIN_MARKET"})]})})}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h4,{id:"insightscountrytypedestination_country",children:(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsCountryType.",(0,s.jsx)("b",{children:"DESTINATION_COUNTRY"})]})})}),"\n",(0,s.jsx)(n.blockquote,{children:"\n"}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/inputs/insights-countries-input",children:(0,s.jsx)(n.code,{children:"InsightsCountriesInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/inputs/insights-countries-where-input",children:(0,s.jsx)(n.code,{children:"InsightsCountriesWhereInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/objects/insights-country",children:(0,s.jsx)(n.code,{children:"InsightsCountry"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},44808:(e,n,t)=>{var s=t(11504),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,i={},l=null,d=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!a.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:l,ref:d,props:i,_owner:c.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var s=t(11504);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);