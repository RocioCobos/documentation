/*! For license information please see ef42b6f0.815ea8a1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35768],{39860:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>u,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>l,assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>h});var c=n(17624),t=n(4552),i=n(11504);const a={id:"prices-load-input",title:"PricesLoadInput"},s=void 0,p={id:"inputs/prices-load-input",title:"PricesLoadInput",description:"Represents prices to be loaded.",source:"@site/api/inputs/prices-load-input.mdx",sourceDirName:"inputs",slug:"/inputs/prices-load-input",permalink:"/api/inputs/prices-load-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"prices-load-input",title:"PricesLoadInput"},sidebar:"schemaSidebar",previous:{title:"PriceUnderStandardOccupancyInput",permalink:"/api/inputs/price-under-standard-occupancy-input"},next:{title:"PricesPerOccupancyInput",permalink:"/api/inputs/prices-per-occupancy-input"}},o={},d=()=>{const e={span:"span",...(0,t.M)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},l=e=>{const r={a:"a",...(0,t.M)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,t.M)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>PricesLoadInput.<b>pricePerRoom</b></code><Bullet></Bullet><code>PricePerRoomInput</code> <Badge class="badge badge--secondary"></Badge>',id:"pricesloadinputpriceperroompriceperroominput-",level:4},{value:'<code>PricesLoadInput.<b>pricePerStandardOccupancy</b></code><Bullet></Bullet><code>PricePerStandardOccupancyInput</code> <Badge class="badge badge--secondary"></Badge>',id:"pricesloadinputpriceperstandardoccupancypriceperstandardoccupancyinput-",level:4},{value:'<code>PricesLoadInput.<b>pricesPerOccupancy</b></code><Bullet></Bullet><code>PricesPerOccupancyInput</code> <Badge class="badge badge--secondary"></Badge>',id:"pricesloadinputpricesperoccupancypricesperoccupancyinput-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:r,children:n,startOpen:a=!1})=>{const s={details:"details",summary:"summary",...(0,t.M)()},[p,o]=(0,i.useState)(a);return(0,c.jsxs)(s.details,{...p?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(s.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:p?e:r}),p&&n]})};function y(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.p,{children:"Represents prices to be loaded."}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-graphql",children:"input PricesLoadInput {\n  pricePerRoom: PricePerRoomInput\n  pricePerStandardOccupancy: PricePerStandardOccupancyInput\n  pricesPerOccupancy: PricesPerOccupancyInput\n}\n"})}),"\n",(0,c.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(r.h4,{id:"pricesloadinputpriceperroompriceperroominput-",children:[(0,c.jsx)(r.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PricesLoadInput.",(0,c.jsx)("b",{children:"pricePerRoom"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(r.a,{href:"/api/inputs/price-per-room-input",children:(0,c.jsx)(r.code,{children:"PricePerRoomInput"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsxs)(r.blockquote,{children:["\n",(0,c.jsx)(r.p,{children:"Price per room. See PricePerRoom."}),"\n"]}),"\n",(0,c.jsxs)(r.h4,{id:"pricesloadinputpriceperstandardoccupancypriceperstandardoccupancyinput-",children:[(0,c.jsx)(r.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PricesLoadInput.",(0,c.jsx)("b",{children:"pricePerStandardOccupancy"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(r.a,{href:"/api/inputs/price-per-standard-occupancy-input",children:(0,c.jsx)(r.code,{children:"PricePerStandardOccupancyInput"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsxs)(r.blockquote,{children:["\n",(0,c.jsx)(r.p,{children:"Price per standard occupancy. See PricePerStandardOccupancy."}),"\n"]}),"\n",(0,c.jsxs)(r.h4,{id:"pricesloadinputpricesperoccupancypricesperoccupancyinput-",children:[(0,c.jsx)(r.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["PricesLoadInput.",(0,c.jsx)("b",{children:"pricesPerOccupancy"})]})}),(0,c.jsx)(d,{}),(0,c.jsx)(r.a,{href:"/api/inputs/prices-per-occupancy-input",children:(0,c.jsx)(r.code,{children:"PricesPerOccupancyInput"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsxs)(r.blockquote,{children:["\n",(0,c.jsx)(r.p,{children:"Prices per occupancy. See PricesPerOccupancy."}),"\n"]}),"\n",(0,c.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/api/inputs/rate-price-load-input",children:(0,c.jsx)(r.code,{children:"RatePriceLoadInput"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function m(e={}){const{wrapper:r}={...(0,t.M)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(y,{...e})}):y(e)}},44808:(e,r,n)=>{var c=n(11504),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var c,i={},o=null,d=null;for(c in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,c)&&!p.hasOwnProperty(c)&&(i[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===i[c]&&(i[c]=r[c]);return{$$typeof:t,type:e,key:o,ref:d,props:i,_owner:s.current}}r.Fragment=i,r.jsx=o,r.jsxs=o},17624:(e,r,n)=>{e.exports=n(44808)},4552:(e,r,n)=>{n.d(r,{I:()=>s,M:()=>a});var c=n(11504);const t={},i=c.createContext(t);function a(e){const r=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(i.Provider,{value:r},e.children)}}}]);