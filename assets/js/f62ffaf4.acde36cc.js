/*! For license information please see f62ffaf4.acde36cc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58828],{65716:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=n(17624),r=n(4552),l=n(11504);const s={id:"inventory-localities-search-filter-input",title:"InventoryLocalitiesSearchFilterInput"},a=void 0,o={id:"inputs/inventory-localities-search-filter-input",title:"InventoryLocalitiesSearchFilterInput",description:"Localities filter input.",source:"@site/api/inputs/inventory-localities-search-filter-input.mdx",sourceDirName:"inputs",slug:"/inputs/inventory-localities-search-filter-input",permalink:"/api/inputs/inventory-localities-search-filter-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-localities-search-filter-input",title:"InventoryLocalitiesSearchFilterInput"},sidebar:"schemaSidebar",previous:{title:"InventoryLocalitiesFilterInput",permalink:"/api/inputs/inventory-localities-filter-input"},next:{title:"InventoryMarketsInput",permalink:"/api/inputs/inventory-markets-input"}},c={},d=()=>{const e={span:"span",...(0,r.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,r.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryLocalitiesSearchFilterInput.<b>countryCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventorylocalitiessearchfilterinputcountrycodestring-",level:4},{value:'<code>InventoryLocalitiesSearchFilterInput.<b>localityName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventorylocalitiessearchfilterinputlocalitynamestring-",level:4}],f=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,r.M)()},[o,c]=(0,l.useState)(s);return(0,i.jsxs)(a.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function y(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Localities filter input."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input InventoryLocalitiesSearchFilterInput {\n  countryCode: String\n  localityName: String\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"inventorylocalitiessearchfilterinputcountrycodestring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryLocalitiesSearchFilterInput.",(0,i.jsx)("b",{children:"countryCode"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Country code of the localities to retrieve. ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2",children:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"inventorylocalitiessearchfilterinputlocalitynamestring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryLocalitiesSearchFilterInput.",(0,i.jsx)("b",{children:"localityName"})]})}),(0,i.jsx)(d,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Locality name"}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}},44808:(e,t,n)=>{var i=n(11504),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,l={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!o.hasOwnProperty(i)&&(l[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===l[i]&&(l[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:d,props:l,_owner:a.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var i=n(11504);const r={},l=i.createContext(r);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);