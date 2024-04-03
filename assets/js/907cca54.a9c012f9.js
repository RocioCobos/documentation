/*! For license information please see 907cca54.a9c012f9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15728],{61224:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>h,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>u});var r=a(17624),n=a(4552),o=a(11504);const t={id:"avail-offers-rs",title:"AvailOffersRs"},l=void 0,i={id:"objects/avail-offers-rs",title:"AvailOffersRs",description:"Represents the response data for offers availability operations.",source:"@site/api/objects/avail-offers-rs.mdx",sourceDirName:"objects",slug:"/objects/avail-offers-rs",permalink:"/api/objects/avail-offers-rs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"avail-offers-rs",title:"AvailOffersRs"},sidebar:"schemaSidebar",previous:{title:"AvailNoK",permalink:"/api/objects/avail-no-k"},next:{title:"AvailRatesRs",permalink:"/api/objects/avail-rates-rs"}},d={},c=()=>{const e={span:"span",...(0,n.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const s={a:"a",...(0,n.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,n.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>AvailOffersRs.<b>offers</b></code><Bullet></Bullet><code>[OffersAvailLoad]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availoffersrsoffersoffersavailload--",level:4},{value:'<code>AvailOffersRs.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availoffersrsadvisemessagesadvisemessage--",level:4},{value:'<code>AvailOffersRs.<b>success</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"availoffersrssuccessboolean--",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:s,children:a,startOpen:t=!1})=>{const l={details:"details",summary:"summary",...(0,n.M)()},[i,d]=(0,o.useState)(t);return(0,r.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})};function v(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Represents the response data for offers availability operations."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-graphql",children:"type AvailOffersRs {\n  offers: [OffersAvailLoad]\n  adviseMessages: [AdviseMessage]\n  success: Boolean!\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(s.h4,{id:"availoffersrsoffersoffersavailload--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailOffersRs.",(0,r.jsx)("b",{children:"offers"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/api/objects/offers-avail-load",children:(0,r.jsx)(s.code,{children:"[OffersAvailLoad]"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"List of offers availabilities. See OffersAvailLoad."}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"availoffersrsadvisemessagesadvisemessage--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailOffersRs.",(0,r.jsx)("b",{children:"adviseMessages"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,r.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"List of advise messages associated with the operation. See AdviseMessage."}),"\n"]}),"\n",(0,r.jsxs)(s.h4,{id:"availoffersrssuccessboolean--",children:[(0,r.jsx)(s.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AvailOffersRs.",(0,r.jsx)("b",{children:"success"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,r.jsx)(s.code,{children:"Boolean!"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Indicates whether the operation was successful."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/api/objects/inventory-mutation",children:(0,r.jsx)(s.code,{children:"InventoryMutation"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},44808:(e,s,a)=>{var r=a(11504),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,a){var r,o={},d=null,c=null;for(r in void 0!==a&&(d=""+a),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)t.call(s,r)&&!i.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:n,type:e,key:d,ref:c,props:o,_owner:l.current}}s.Fragment=o,s.jsx=d,s.jsxs=d},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>l,M:()=>t});var r=a(11504);const n={},o=r.createContext(n);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);