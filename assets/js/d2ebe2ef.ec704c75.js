/*! For license information please see d2ebe2ef.ec704c75.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23304],{85436:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>p,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>n,metadata:()=>d,toc:()=>u});var o=s(17624),t=s(4552),r=s(11504);const n={id:"offer-avail-load",title:"OfferAvailLoad"},l=void 0,d={id:"objects/offer-avail-load",title:"OfferAvailLoad",description:"Represents an offer to load.",source:"@site/api/objects/offer-avail-load.mdx",sourceDirName:"objects",slug:"/objects/offer-avail-load",permalink:"/api/objects/offer-avail-load",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"offer-avail-load",title:"OfferAvailLoad"},sidebar:"schemaSidebar",previous:{title:"Occupancy",permalink:"/api/objects/occupancy"},next:{title:"OfferDto",permalink:"/api/objects/offer-dto"}},c={},i=()=>{const e={span:"span",...(0,t.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const a={a:"a",...(0,t.M)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,t.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>OfferAvailLoad.<b>code</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"offeravailloadcodestring-",level:4},{value:'<code>OfferAvailLoad.<b>stopSales</b></code><Bullet></Bullet><code>StopSales</code> <Badge class="badge badge--secondary"></Badge>',id:"offeravailloadstopsalesstopsales-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:a,children:s,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,t.M)()},[d,c]=(0,r.useState)(n);return(0,o.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&s]})};function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"Represents an offer to load."}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-graphql",children:"type OfferAvailLoad {\n  code: String\n  stopSales: StopSales\n}\n"})}),"\n",(0,o.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(a.h4,{id:"offeravailloadcodestring-",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["OfferAvailLoad.",(0,o.jsx)("b",{children:"code"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/scalars/string",children:(0,o.jsx)(a.code,{children:"String"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Code associated with the offer."}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"offeravailloadstopsalesstopsales-",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["OfferAvailLoad.",(0,o.jsx)("b",{children:"stopSales"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/objects/stop-sales",children:(0,o.jsx)(a.code,{children:"StopSales"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Stop sales associated with the offer. See StopSales."}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/api/objects/offers-avail-load",children:(0,o.jsx)(a.code,{children:"OffersAvailLoad"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},44808:(e,a,s)=>{var o=s(11504),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,s){var o,r={},c=null,i=null;for(o in void 0!==s&&(c=""+s),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(i=a.ref),a)n.call(a,o)&&!d.hasOwnProperty(o)&&(r[o]=a[o]);if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===r[o]&&(r[o]=a[o]);return{$$typeof:t,type:e,key:c,ref:i,props:r,_owner:l.current}}a.Fragment=r,a.jsx=c,a.jsxs=c},17624:(e,a,s)=>{e.exports=s(44808)},4552:(e,a,s)=>{s.d(a,{I:()=>l,M:()=>n});var o=s(11504);const t={},r=o.createContext(t);function n(e){const a=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);