/*! For license information please see 8c9113a7.a74d7db5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43442],{50235:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>d,default:()=>b,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var c=n(74848),l=n(28453),s=n(96540);const t={id:"package-cancel-penalty",title:"PackageCancelPenalty"},d=void 0,r={id:"types/objects/package-cancel-penalty",title:"PackageCancelPenalty",description:"No description",source:"@site/api/types/objects/package-cancel-penalty.mdx",sourceDirName:"types/objects",slug:"/types/objects/package-cancel-penalty",permalink:"/api/types/objects/package-cancel-penalty",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"package-cancel-penalty",title:"PackageCancelPenalty"},sidebar:"schemaSidebar",previous:{title:"Organizations",permalink:"/api/types/objects/organizations"},next:{title:"PackageCancelPolicy",permalink:"/api/types/objects/package-cancel-policy"}},o={},i=()=>{const e={span:"span",...(0,l.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,l.R)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,l.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:a,children:n,startOpen:t=!1})=>{const d={details:"details",summary:"summary",...(0,l.R)()},[r,o]=(0,s.useState)(t);return(0,c.jsxs)(d.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&n]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PackageCancelPenalty.<b>currency</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagecancelpenaltycurrencystring--",level:4},{value:'<code>PackageCancelPenalty.<b>deadline</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagecancelpenaltydeadlinestring--",level:4},{value:'<code>PackageCancelPenalty.<b>startDate</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagecancelpenaltystartdatestring--",level:4},{value:'<code>PackageCancelPenalty.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"packagecancelpenaltydescriptionstring-",level:4},{value:'<code>PackageCancelPenalty.<b>hoursBefore</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagecancelpenaltyhoursbeforeint--",level:4},{value:'<code>PackageCancelPenalty.<b>penaltyType</b></code><Bullet></Bullet><code>PackagePenaltyType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagecancelpenaltypenaltytypepackagepenaltytype--",level:4},{value:'<code>PackageCancelPenalty.<b>value</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagecancelpenaltyvaluefloat--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.p,{children:"No description"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-graphql",children:"type PackageCancelPenalty {\n  currency: String!\n  deadline: String!\n  startDate: String!\n  description: String\n  hoursBefore: Int!\n  penaltyType: PackagePenaltyType!\n  value: Float!\n}\n"})}),"\n",(0,c.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(a.h4,{id:"packagecancelpenaltycurrencystring--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageCancelPenalty.",(0,c.jsx)("b",{children:"currency"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"Currency used for penalty received in standard ISO 4217"}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"packagecancelpenaltydeadlinestring--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageCancelPenalty.",(0,c.jsx)("b",{children:"deadline"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"End date where the penalty applies"}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"packagecancelpenaltystartdatestring--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageCancelPenalty.",(0,c.jsx)("b",{children:"startDate"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,c.jsx)(a.code,{children:"String!"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"Init date where the penalty applies"}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"packagecancelpenaltydescriptionstring-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageCancelPenalty.",(0,c.jsx)("b",{children:"description"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,c.jsx)(a.code,{children:"String"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"Description of the penalty"}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"packagecancelpenaltyhoursbeforeint--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageCancelPenalty.",(0,c.jsx)("b",{children:"hoursBefore"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/api/types/scalars/int",children:(0,c.jsx)(a.code,{children:"Int!"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"Hours before the penalty starts applying"}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"packagecancelpenaltypenaltytypepackagepenaltytype--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageCancelPenalty.",(0,c.jsx)("b",{children:"penaltyType"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/api/types/enums/package-penalty-type",children:(0,c.jsx)(a.code,{children:"PackagePenaltyType!"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"Type of penalty (amount, nights...)"}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"packagecancelpenaltyvaluefloat--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageCancelPenalty.",(0,c.jsx)("b",{children:"value"})]})}),(0,c.jsx)(i,{}),(0,c.jsx)(a.a,{href:"/api/types/scalars/float",children:(0,c.jsx)(a.code,{children:"Float!"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsx)(a.p,{children:"value of the penalty taking in account which type of penalty is"}),"\n"]}),"\n",(0,c.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.a,{href:"/api/types/objects/package-cancel-policy",children:(0,c.jsx)(a.code,{children:"PackageCancelPolicy"})})," ",(0,c.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},21020:(e,a,n)=>{var c=n(96540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function o(e,a,n){var c,s={},o=null,i=null;for(c in void 0!==n&&(o=""+n),void 0!==a.key&&(o=""+a.key),void 0!==a.ref&&(i=a.ref),a)t.call(a,c)&&!r.hasOwnProperty(c)&&(s[c]=a[c]);if(e&&e.defaultProps)for(c in a=e.defaultProps)void 0===s[c]&&(s[c]=a[c]);return{$$typeof:l,type:e,key:o,ref:i,props:s,_owner:d.current}}a.Fragment=s,a.jsx=o,a.jsxs=o},74848:(e,a,n)=>{e.exports=n(21020)},28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>d});var c=n(96540);const l={},s=c.createContext(l);function t(e){const a=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),c.createElement(s.Provider,{value:a},e.children)}}}]);