/*! For license information please see 3bae4d5f.d5f66a18.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46731],{53348:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=n(74848),o=n(28453),s=n(96540);const c={id:"fee",title:"Fee",hide_table_of_contents:!1},a=void 0,d={id:"objects/fee",title:"Fee",description:"Amount added on to a charge for a specific product, purpose, or service.",source:"@site/api/objects/fee.mdx",sourceDirName:"objects",slug:"/objects/fee",permalink:"/api/objects/fee",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"fee",title:"Fee",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Feature",permalink:"/api/objects/feature"},next:{title:"FerryAccommodation",permalink:"/api/objects/ferry-accommodation"}},l={},i=()=>{const e={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,o.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const a={details:"details",summary:"summary",...(0,o.R)()},[d,l]=(0,s.useState)(c);return(0,r.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>Fee.<b>amount</b></code><Bullet></Bullet><code>AmountType</code> <Badge class="badge badge--secondary"></Badge>',id:"feeamountamounttype-",level:4},{value:'<code>Fee.<b>descText</b></code><Bullet></Bullet><code>TextType</code> <Badge class="badge badge--secondary"></Badge>',id:"feedesctexttexttype-",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Amount added on to a charge for a specific product, purpose, or service."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"type Fee {\n  amount: AmountType\n  descText: TextType\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"feeamountamounttype-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Fee.",(0,r.jsx)("b",{children:"amount"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/objects/amount-type",children:(0,r.jsx)(t.code,{children:"AmountType"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(t.h4,{id:"feedesctexttexttype-",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Fee.",(0,r.jsx)("b",{children:"descText"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/objects/text-type",children:(0,r.jsx)(t.code,{children:"TextType"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/objects/flight-price",children:(0,r.jsx)(t.code,{children:"FlightPrice"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(i,{}),(0,r.jsx)(t.a,{href:"/api/objects/flight-surcharge",children:(0,r.jsx)(t.code,{children:"FlightSurcharge"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var r=n(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,i=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(i=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:i,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);