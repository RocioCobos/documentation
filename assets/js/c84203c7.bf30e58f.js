/*! For license information please see c84203c7.bf30e58f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81524],{64572:(e,a,d)=>{d.r(a),d.d(a,{Badge:()=>m,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>x,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>n,metadata:()=>o,toc:()=>g});var s=d(17624),t=d(4552),r=d(11504);const n={id:"payment-xstored-card",title:"PaymentXStoredCard"},c=void 0,o={id:"objects/payment-xstored-card",title:"PaymentXStoredCard",description:"No description",source:"@site/api/objects/payment-xstored-card.mdx",sourceDirName:"objects",slug:"/objects/payment-xstored-card",permalink:"/api/objects/payment-xstored-card",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"payment-xstored-card",title:"PaymentXStoredCard"},sidebar:"schemaSidebar",previous:{title:"PaymentXStoredCardEdge",permalink:"/api/objects/payment-xstored-card-edge"},next:{title:"Permission",permalink:"/api/objects/permission"}},l={},i=()=>{const e={span:"span",...(0,t.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},x=e=>{const a={a:"a",...(0,t.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const a={span:"span",...(0,t.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>PaymentXStoredCard.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxstoredcardcodeid--",level:4},{value:'<code>PaymentXStoredCard.<b>storedCardData</b></code><Bullet></Bullet><code>PaymentXStoredCardData</code> <Badge class="badge badge--secondary"></Badge>',id:"paymentxstoredcardstoredcarddatapaymentxstoredcarddata-",level:4},{value:'<code>PaymentXStoredCard.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxstoredcardcreatedatdatetime--",level:4},{value:'<code>PaymentXStoredCard.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxstoredcardupdatedatdatetime--",level:4},{value:'<code>PaymentXStoredCard.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxstoredcardadvisemessageadvisemessage--",level:4},{value:'<code>PaymentXStoredCard.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"paymentxstoredcardadvisemessageleveladvisemessagelevel--",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:a,children:d,startOpen:n=!1})=>{const c={details:"details",summary:"summary",...(0,t.M)()},[o,l]=(0,r.useState)(n);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&d]})};function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type PaymentXStoredCard implements Node {\n  code: ID!\n  storedCardData: PaymentXStoredCardData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"paymentxstoredcardcodeid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXStoredCard.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Stored card ID"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"paymentxstoredcardstoredcarddatapaymentxstoredcarddata-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXStoredCard.",(0,s.jsx)("b",{children:"storedCardData"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/payment-xstored-card-data",children:(0,s.jsx)(a.code,{children:"PaymentXStoredCardData"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Stored card information"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"paymentxstoredcardcreatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXStoredCard.",(0,s.jsx)("b",{children:"createdAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Create date"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"paymentxstoredcardupdatedatdatetime--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXStoredCard.",(0,s.jsx)("b",{children:"updatedAt"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,s.jsx)(a.code,{children:"DateTime!"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Update date"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"paymentxstoredcardadvisemessageadvisemessage--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXStoredCard.",(0,s.jsx)("b",{children:"adviseMessage"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,s.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"List of messages"}),"\n",(0,s.jsxs)(a.h5,{id:"paymentxstoredcardadvisemessageleveladvisemessagelevel--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["PaymentXStoredCard.adviseMessage.",(0,s.jsx)("b",{children:"level"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,s.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(a.h4,{id:"node-",children:[(0,s.jsx)(a.a,{href:"/api/interfaces/node",children:(0,s.jsx)(a.code,{children:"Node"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/objects/payment-xmutation",children:(0,s.jsx)(a.code,{children:"PaymentXMutation"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/payment-xquery",children:(0,s.jsx)(a.code,{children:"PaymentXQuery"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/payment-xstored-card-edge",children:(0,s.jsx)(a.code,{children:"PaymentXStoredCardEdge"})})," ",(0,s.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},44808:(e,a,d)=>{var s=d(11504),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,d){var s,r={},l=null,i=null;for(s in void 0!==d&&(l=""+d),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)n.call(a,s)&&!o.hasOwnProperty(s)&&(r[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===r[s]&&(r[s]=a[s]);return{$$typeof:t,type:e,key:l,ref:i,props:r,_owner:c.current}}a.Fragment=r,a.jsx=l,a.jsxs=l},17624:(e,a,d)=>{e.exports=d(44808)},4552:(e,a,d)=>{d.d(a,{I:()=>c,M:()=>n});var s=d(11504);const t={},r=s.createContext(t);function n(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);