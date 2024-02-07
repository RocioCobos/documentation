/*! For license information please see 3cfb8553.2dad1220.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40856],{33460:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=a(17624),d=a(4552),r=a(11504);const s={id:"payment-xmutation",title:"PaymentXMutation"},o=void 0,c={id:"objects/payment-xmutation",title:"PaymentXMutation",description:"No description",source:"@site/api/objects/payment-xmutation.mdx",sourceDirName:"objects",slug:"/objects/payment-xmutation",permalink:"/api/objects/payment-xmutation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payment-xmutation",title:"PaymentXMutation"},sidebar:"schemaSidebar",previous:{title:"PaymentXExpireDate",permalink:"/api/objects/payment-xexpire-date"},next:{title:"PaymentXQuery",permalink:"/api/objects/payment-xquery"}},i={},l=()=>{const e={span:"span",...(0,d.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,d.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,d.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>PaymentXMutation.<b>storeCard</b></code><Bullet></Bullet><code>PaymentXStoredCard!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxmutationstorecardpaymentxstoredcard--",level:4},{value:'<code>PaymentXMutation.storeCard.<b>input</b></code><Bullet></Bullet><code>PaymentXStoredCardInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxmutationstorecardinputpaymentxstoredcardinput--",level:5},{value:'<code>PaymentXMutation.<b>deleteStoredCard</b></code><Bullet></Bullet><code>PaymentXStoredCard!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxmutationdeletestoredcardpaymentxstoredcard--",level:4},{value:'<code>PaymentXMutation.deleteStoredCard.<b>criteria</b></code><Bullet></Bullet><code>PaymentXStoredCardIDInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxmutationdeletestoredcardcriteriapaymentxstoredcardidinput--",level:5},{value:"Returned by",id:"returned-by",level:3}],x=({dataOpen:e,dataClose:t,children:a,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,d.M)()},[c,i]=(0,r.useState)(s);return(0,n.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&a]})};function y(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,d.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type PaymentXMutation {\n  storeCard(input: PaymentXStoredCardInput!): PaymentXStoredCard!\n  deleteStoredCard(criteria: PaymentXStoredCardIDInput!): PaymentXStoredCard!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"paymentxmutationstorecardpaymentxstoredcard--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXMutation.",(0,n.jsx)("b",{children:"storeCard"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/objects/payment-xstored-card",children:(0,n.jsx)(t.code,{children:"PaymentXStoredCard!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Store Card"}),"\n",(0,n.jsxs)(t.h5,{id:"paymentxmutationstorecardinputpaymentxstoredcardinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXMutation.storeCard.",(0,n.jsx)("b",{children:"input"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/payment-xstored-card-input",children:(0,n.jsx)(t.code,{children:"PaymentXStoredCardInput!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"paymentxmutationdeletestoredcardpaymentxstoredcard--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXMutation.",(0,n.jsx)("b",{children:"deleteStoredCard"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/objects/payment-xstored-card",children:(0,n.jsx)(t.code,{children:"PaymentXStoredCard!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Delete Card"}),"\n",(0,n.jsxs)(t.h5,{id:"paymentxmutationdeletestoredcardcriteriapaymentxstoredcardidinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXMutation.deleteStoredCard.",(0,n.jsx)("b",{children:"criteria"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/inputs/payment-xstored-card-idinput",children:(0,n.jsx)(t.code,{children:"PaymentXStoredCardIDInput!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/mutations/payment-x",children:(0,n.jsx)(t.code,{children:"paymentX"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function h(e={}){const{wrapper:t}={...(0,d.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},44808:(e,t,a)=>{var n=a(11504),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,a){var n,r={},i=null,l=null;for(n in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:d,type:e,key:i,ref:l,props:r,_owner:o.current}}t.Fragment=r,t.jsx=i,t.jsxs=i},17624:(e,t,a)=>{e.exports=a(44808)},4552:(e,t,a)=>{a.d(t,{I:()=>o,M:()=>s});var n=a(11504);const d={},r=n.createContext(d);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);