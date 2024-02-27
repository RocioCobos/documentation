/*! For license information please see ae79b173.d7035b02.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33736],{12416:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var a=t(17624),l=t(4552),c=t(11504);const s={id:"cancel-policy-input",title:"CancelPolicyInput"},o=void 0,i={id:"inputs/cancel-policy-input",title:"CancelPolicyInput",description:"No description",source:"@site/api/inputs/cancel-policy-input.mdx",sourceDirName:"inputs",slug:"/inputs/cancel-policy-input",permalink:"/api/inputs/cancel-policy-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"cancel-policy-input",title:"CancelPolicyInput"},sidebar:"schemaSidebar",previous:{title:"CancelPoliciesUpdateInput",permalink:"/api/inputs/cancel-policies-update-input"},next:{title:"CategoryCreateInput",permalink:"/api/inputs/category-create-input"}},r={},d=()=>{const e={span:"span",...(0,l.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,l.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,l.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>CancelPolicyInput.<b>refundable</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cancelpolicyinputrefundableboolean--",level:4},{value:'<code>CancelPolicyInput.<b>cancelPenalties</b></code><Bullet></Bullet><code>[CancelPenaltyInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"cancelpolicyinputcancelpenaltiescancelpenaltyinput--",level:4},{value:"Member Of",id:"member-of",level:3}],y=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,l.M)()},[i,r]=(0,c.useState)(s);return(0,a.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input CancelPolicyInput {\n  refundable: Boolean!\n  cancelPenalties: [CancelPenaltyInput!]\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"cancelpolicyinputrefundableboolean--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPolicyInput.",(0,a.jsx)("b",{children:"refundable"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(n.code,{children:"Boolean!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"cancelpolicyinputcancelpenaltiescancelpenaltyinput--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CancelPolicyInput.",(0,a.jsx)("b",{children:"cancelPenalties"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/inputs/cancel-penalty-input",children:(0,a.jsx)(n.code,{children:"[CancelPenaltyInput!]"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/inputs/hotel-one-step-book-input",children:(0,a.jsx)(n.code,{children:"HotelOneStepBookInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/inputs/hotel-one-step-quote-input",children:(0,a.jsx)(n.code,{children:"HotelOneStepQuoteInput"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},44808:(e,n,t)=>{var a=t(11504),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,t){var a,c={},r=null,d=null;for(a in void 0!==t&&(r=""+t),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,a)&&!i.hasOwnProperty(a)&&(c[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===c[a]&&(c[a]=n[a]);return{$$typeof:l,type:e,key:r,ref:d,props:c,_owner:o.current}}n.Fragment=c,n.jsx=r,n.jsxs=r},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>s});var a=t(11504);const l={},c=a.createContext(l);function s(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);