/*! For license information please see 40b59807.6a77cc70.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42680],{89983:(e,a,r)=>{r.r(a),r.d(a,{Badge:()=>b,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>s,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var d=r(74848),n=r(28453),t=r(96540);const c={id:"price-breakdown",title:"PriceBreakdown"},s=void 0,o={id:"types/objects/price-breakdown",title:"PriceBreakdown",description:"Information about daily price.",source:"@site/api/types/objects/price-breakdown.mdx",sourceDirName:"types/objects",slug:"/types/objects/price-breakdown",permalink:"/api/types/objects/price-breakdown",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"price-breakdown",title:"PriceBreakdown"},sidebar:"schemaSidebar",previous:{title:"PriceAdjust",permalink:"/api/types/objects/price-adjust"},next:{title:"PriceChange",permalink:"/api/types/objects/price-change"}},i={},l=()=>{const e={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,n.R)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const a={span:"span",...(0,n.R)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:a,children:r,startOpen:c=!1})=>{const s={details:"details",summary:"summary",...(0,n.R)()},[o,i]=(0,t.useState)(c);return(0,d.jsxs)(s.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(s.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:a}),o&&r]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PriceBreakdown.<b>effectiveDate</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricebreakdowneffectivedatedate---",level:4},{value:'<code>PriceBreakdown.<b>expireDate</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricebreakdownexpiredatedate---",level:4},{value:'<code>PriceBreakdown.<b>start</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricebreakdownstartdate--",level:4},{value:'<code>PriceBreakdown.<b>end</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricebreakdownenddate--",level:4},{value:'<code>PriceBreakdown.<b>price</b></code><Bullet></Bullet><code>Price!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricebreakdownpriceprice--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Information about daily price."}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-graphql",children:"type PriceBreakdown {\n  effectiveDate: Date! @deprecated\n  expireDate: Date! @deprecated\n  start: Date!\n  end: Date!\n  price: Price!\n}\n"})}),"\n",(0,d.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(a.h4,{id:"pricebreakdowneffectivedatedate---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PriceBreakdown.",(0,d.jsx)("b",{children:"effectiveDate"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date",children:(0,d.jsx)(a.code,{children:"Date!"})})," ",(0,d.jsx)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.admonition,{title:"DEPRECATED",type:"warning",children:(0,d.jsx)(a.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,d.jsx)(a.p,{children:"Start date in which the price becomes effective."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"pricebreakdownexpiredatedate---",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PriceBreakdown.",(0,d.jsx)("b",{children:"expireDate"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date",children:(0,d.jsx)(a.code,{children:"Date!"})})," ",(0,d.jsx)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.admonition,{title:"DEPRECATED",type:"warning",children:(0,d.jsx)(a.p,{children:"deprecated from 2018-02-28. Incorrect date format."})}),"\n",(0,d.jsx)(a.p,{children:"Expire date of price."}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"pricebreakdownstartdate--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PriceBreakdown.",(0,d.jsx)("b",{children:"start"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date",children:(0,d.jsx)(a.code,{children:"Date!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Start date in which the price becomes effective.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"pricebreakdownenddate--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PriceBreakdown.",(0,d.jsx)("b",{children:"end"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/scalars/date",children:(0,d.jsx)(a.code,{children:"Date!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Expire date of price.\nFormat: YYYY-MM-DD"}),"\n"]}),"\n",(0,d.jsxs)(a.h4,{id:"pricebreakdownpriceprice--",children:[(0,d.jsx)(a.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["PriceBreakdown.",(0,d.jsx)("b",{children:"price"})]})}),(0,d.jsx)(l,{}),(0,d.jsx)(a.a,{href:"/api/types/objects/price",children:(0,d.jsx)(a.code,{children:"Price!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(a.blockquote,{children:["\n",(0,d.jsx)(a.p,{children:"Specifies the daily price."}),"\n"]}),"\n",(0,d.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"/api/types/objects/room-price",children:(0,d.jsx)(a.code,{children:"RoomPrice"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},21020:(e,a,r)=>{var d=r(96540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,r){var d,t={},i=null,l=null;for(d in void 0!==r&&(i=""+r),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(l=a.ref),a)c.call(a,d)&&!o.hasOwnProperty(d)&&(t[d]=a[d]);if(e&&e.defaultProps)for(d in a=e.defaultProps)void 0===t[d]&&(t[d]=a[d]);return{$$typeof:n,type:e,key:i,ref:l,props:t,_owner:s.current}}a.Fragment=t,a.jsx=i,a.jsxs=i},74848:(e,a,r)=>{e.exports=r(21020)},28453:(e,a,r)=>{r.d(a,{R:()=>c,x:()=>s});var d=r(96540);const n={},t=d.createContext(n);function c(e){const a=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),d.createElement(t.Provider,{value:a},e.children)}}}]);