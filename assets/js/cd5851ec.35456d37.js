/*! For license information please see cd5851ec.35456d37.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5243],{99846:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>g,SpecifiedBy:()=>c,assets:()=>r,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var s=n(74848),a=n(28453),d=n(96540);const i={id:"additional-guest-input",title:"AdditionalGuestInput"},o=void 0,l={id:"types/inputs/additional-guest-input",title:"AdditionalGuestInput",description:"Represents an additional guest for a room.",source:"@site/api/types/inputs/additional-guest-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/additional-guest-input",permalink:"/api/types/inputs/additional-guest-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"additional-guest-input",title:"AdditionalGuestInput"},sidebar:"schemaSidebar",previous:{title:"AddMemberToOrganizationInput",permalink:"/api/types/inputs/add-member-to-organization-input"},next:{title:"AdditionalGuestsSupplementsInput",permalink:"/api/types/inputs/additional-guests-supplements-input"}},r={},u=()=>{const e={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},c=e=>{const t={a:"a",...(0,a.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,a.R)()},[l,r]=(0,d.useState)(i);return(0,s.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AdditionalGuestInput.<b>additionalGuestType</b></code><Bullet></Bullet><code>AdditionalGuestType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"additionalguestinputadditionalguesttypeadditionalguesttype--",level:4},{value:'<code>AdditionalGuestInput.<b>guestPosition</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"additionalguestinputguestpositionint--",level:4},{value:'<code>AdditionalGuestInput.<b>amount</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"additionalguestinputamountfloat--",level:4},{value:'<code>AdditionalGuestInput.<b>type</b></code><Bullet></Bullet><code>AmountApplyType</code> <Badge class="badge badge--secondary"></Badge>',id:"additionalguestinputtypeamountapplytype-",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Represents an additional guest for a room."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"input AdditionalGuestInput {\n  additionalGuestType: AdditionalGuestType!\n  guestPosition: Int!\n  amount: Float!\n  type: AmountApplyType\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"additionalguestinputadditionalguesttypeadditionalguesttype--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AdditionalGuestInput.",(0,s.jsx)("b",{children:"additionalGuestType"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/api/types/enums/additional-guest-type",children:(0,s.jsx)(t.code,{children:"AdditionalGuestType!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Type of the additional guest. See AdditionalGuestType."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"additionalguestinputguestpositionint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AdditionalGuestInput.",(0,s.jsx)("b",{children:"guestPosition"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Position of the guest."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"additionalguestinputamountfloat--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AdditionalGuestInput.",(0,s.jsx)("b",{children:"amount"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/float",children:(0,s.jsx)(t.code,{children:"Float!"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Amount associated with the additional guest."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"additionalguestinputtypeamountapplytype-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["AdditionalGuestInput.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(u,{}),(0,s.jsx)(t.a,{href:"/api/types/enums/amount-apply-type",children:(0,s.jsx)(t.code,{children:"AmountApplyType"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Type of the amount application. See AmountApplyType."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/inputs/additional-guests-supplements-input",children:(0,s.jsx)(t.code,{children:"AdditionalGuestsSupplementsInput"})})," ",(0,s.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}},21020:(e,t,n)=>{var s=n(96540),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,t,n){var s,d={},r=null,u=null;for(s in void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(d[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===d[s]&&(d[s]=t[s]);return{$$typeof:a,type:e,key:r,ref:u,props:d,_owner:o.current}}t.Fragment=d,t.jsx=r,t.jsxs=r},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},d=s.createContext(a);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);