/*! For license information please see f2aa6b5a.e02bde01.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49064],{28604:(e,r,s)=>{s.r(r),s.d(r,{Badge:()=>y,Bullet:()=>i,Details:()=>j,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=s(17624),t=s(4552),n=s(11504);const o={id:"ferry-offer",title:"FerryOffer"},d=void 0,c={id:"objects/ferry-offer",title:"FerryOffer",description:"No description",source:"@site/api/objects/ferry-offer.mdx",sourceDirName:"objects",slug:"/objects/ferry-offer",permalink:"/api/objects/ferry-offer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ferry-offer",title:"FerryOffer"},sidebar:"schemaSidebar",previous:{title:"FerryOfferData",permalink:"/api/objects/ferry-offer-data"},next:{title:"FerryOrderPayload",permalink:"/api/objects/ferry-order-payload"}},l={},i=()=>{const e={span:"span",...(0,t.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},f=e=>{const r={a:"a",...(0,t.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const r={span:"span",...(0,t.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>FerryOffer.<b>adviseMessage</b></code><Bullet></Bullet><code>AdviseMessage</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryofferadvisemessageadvisemessage-",level:4},{value:'<code>FerryOffer.<b>code</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryoffercodeid-",level:4},{value:'<code>FerryOffer.<b>ferryOfferData</b></code><Bullet></Bullet><code>FerryOfferData</code> <Badge class="badge badge--secondary"></Badge>',id:"ferryofferferryofferdataferryofferdata-",level:4},{value:"Member Of",id:"member-of",level:3}],j=({dataOpen:e,dataClose:r,children:s,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,t.M)()},[c,l]=(0,n.useState)(o);return(0,a.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&s]})};function x(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"No description"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-graphql",children:"type FerryOffer {\n  adviseMessage: AdviseMessage\n  code: ID\n  ferryOfferData: FerryOfferData\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(r.h4,{id:"ferryofferadvisemessageadvisemessage-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOffer.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(r.a,{href:"/api/objects/advise-message",children:(0,a.jsx)(r.code,{children:"AdviseMessage"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(r.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(r.h4,{id:"ferryoffercodeid-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOffer.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(r.a,{href:"/api/scalars/id",children:(0,a.jsx)(r.code,{children:"ID"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Unique Identifier. Required to validate availability."}),"\n"]}),"\n",(0,a.jsxs)(r.h4,{id:"ferryofferferryofferdataferryofferdata-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["FerryOffer.",(0,a.jsx)("b",{children:"ferryOfferData"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(r.a,{href:"/api/objects/ferry-offer-data",children:(0,a.jsx)(r.code,{children:"FerryOfferData"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(r.blockquote,{children:"\n"}),"\n",(0,a.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/api/objects/ferry-quote-payload",children:(0,a.jsx)(r.code,{children:"FerryQuotePayload"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(r.a,{href:"/api/objects/ferry-search-connection",children:(0,a.jsx)(r.code,{children:"FerrySearchConnection"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(r.a,{href:"/api/objects/ferry-search-edge",children:(0,a.jsx)(r.code,{children:"FerrySearchEdge"})})," ",(0,a.jsx)(y,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:r}={...(0,t.M)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},44808:(e,r,s)=>{var a=s(11504),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var a,n={},l=null,i=null;for(a in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)o.call(r,a)&&!c.hasOwnProperty(a)&&(n[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===n[a]&&(n[a]=r[a]);return{$$typeof:t,type:e,key:l,ref:i,props:n,_owner:d.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},17624:(e,r,s)=>{e.exports=s(44808)},4552:(e,r,s)=>{s.d(r,{I:()=>d,M:()=>o});var a=s(11504);const t={},n=a.createContext(t);function o(e){const r=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(n.Provider,{value:r},e.children)}}}]);