/*! For license information please see 0cf9fe3b.19ed3ec8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37767],{47519:(e,c,s)=>{s.r(c),s.d(c,{Badge:()=>b,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>j});var a=s(74848),r=s(28453),n=s(96540);const d={id:"price",title:"Price",hide_table_of_contents:!1},l=void 0,t={id:"objects/price",title:"Price",description:"Price indicates the value of the room/option.",source:"@site/api/objects/price.mdx",sourceDirName:"objects",slug:"/objects/price",permalink:"/api/objects/price",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"price",title:"Price",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PriceStatic",permalink:"/api/objects/price-static"},next:{title:"ProductConnection",permalink:"/api/objects/product-connection"}},o={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const c={a:"a",...(0,r.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(c.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const c={span:"span",...(0,r.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:c,children:s,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,r.R)()},[t,o]=(0,n.useState)(d);return(0,a.jsxs)(l.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:t?e:c}),t&&s]})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Price.<b>currency</b></code><Bullet></Bullet><code>Currency!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricecurrencycurrency--",level:4},{value:'<code>Price.<b>binding</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricebindingboolean--",level:4},{value:'<code>Price.<b>net</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricenetfloat--",level:4},{value:'<code>Price.<b>gross</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricegrossfloat--",level:4},{value:'<code>Price.<b>exchange</b></code><Bullet></Bullet><code>Exchange!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"priceexchangeexchange--",level:4},{value:'<code>Price.<b>markups</b></code><Bullet></Bullet><code>[Markup!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"pricemarkupsmarkup--",level:4},{value:'<code>Price.<b>minimumSellingPrice</b></code><Bullet></Bullet><code>Float</code> <Badge class="badge badge--secondary"></Badge>',id:"priceminimumsellingpricefloat-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Priceable</code> <Badge class="badge badge--secondary"></Badge>',id:"priceable-",level:4},{value:"Member of",id:"member-of",level:3}];function g(e){const c={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.p,{children:"Price indicates the value of the room/option.\nSupplements and/or surcharges can be included into the price and will be verified with nodes supplements/surcharges."}),"\n",(0,a.jsx)(c.pre,{children:(0,a.jsx)(c.code,{className:"language-graphql",children:"type Price implements Priceable {\n  currency: Currency!\n  binding: Boolean!\n  net: Float!\n  gross: Float!\n  exchange: Exchange!\n  markups: [Markup!]\n  minimumSellingPrice: Float\n}\n"})}),"\n",(0,a.jsx)(c.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(c.h4,{id:"pricecurrencycurrency--",children:[(0,a.jsx)(c.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Price.",(0,a.jsx)("b",{children:"currency"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/scalars/currency",children:(0,a.jsx)(c.code,{children:"Currency!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(c.blockquote,{children:["\n",(0,a.jsx)(c.p,{children:"Currency code indicating which currency should be paid."}),"\n"]}),"\n",(0,a.jsxs)(c.h4,{id:"pricebindingboolean--",children:[(0,a.jsx)(c.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Price.",(0,a.jsx)("b",{children:"binding"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(c.code,{children:"Boolean!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(c.blockquote,{children:["\n",(0,a.jsx)(c.p,{children:"It indicates whether the gross price must be honored, meaning the customer cannot sell the room/option at a price lower than the supplier's established rate."}),"\n"]}),"\n",(0,a.jsxs)(c.h4,{id:"pricenetfloat--",children:[(0,a.jsx)(c.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Price.",(0,a.jsx)("b",{children:"net"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/scalars/float",children:(0,a.jsx)(c.code,{children:"Float!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(c.blockquote,{children:["\n",(0,a.jsx)(c.p,{children:"It indicates the net price that the customer must pay to the supplier.\nThe net price is calculated by substrating the included surcharges from the gross price. (For calculation purposes only)"}),"\n"]}),"\n",(0,a.jsxs)(c.h4,{id:"pricegrossfloat--",children:[(0,a.jsx)(c.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Price.",(0,a.jsx)("b",{children:"gross"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/scalars/float",children:(0,a.jsx)(c.code,{children:"Float!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(c.blockquote,{children:["\n",(0,a.jsx)(c.p,{children:"Indicates the retail price that the supplier sells to the customer."}),"\n"]}),"\n",(0,a.jsxs)(c.h4,{id:"priceexchangeexchange--",children:[(0,a.jsx)(c.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Price.",(0,a.jsx)("b",{children:"exchange"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/exchange",children:(0,a.jsx)(c.code,{children:"Exchange!"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(c.blockquote,{children:["\n",(0,a.jsx)(c.p,{children:"Provides currency information and the applicable rate for the results returned by the Supplier"}),"\n"]}),"\n",(0,a.jsxs)(c.h4,{id:"pricemarkupsmarkup--",children:[(0,a.jsx)(c.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Price.",(0,a.jsx)("b",{children:"markups"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/markup",children:(0,a.jsx)(c.code,{children:"[Markup!]"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(c.blockquote,{children:["\n",(0,a.jsx)(c.p,{children:"Informs markup applied over supplier price."}),"\n"]}),"\n",(0,a.jsxs)(c.h4,{id:"priceminimumsellingpricefloat-",children:[(0,a.jsx)(c.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Price.",(0,a.jsx)("b",{children:"minimumSellingPrice"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/scalars/float",children:(0,a.jsx)(c.code,{children:"Float"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(c.blockquote,{children:["\n",(0,a.jsx)(c.p,{children:"Indicates the minimum selling price it can be sold (determined by the Seller). Is is specified (not null), that field takes preference to Gross and Binding."}),"\n"]}),"\n",(0,a.jsx)(c.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(c.h4,{id:"priceable-",children:[(0,a.jsx)(c.a,{href:"/api/interfaces/priceable",children:(0,a.jsx)(c.code,{children:"Priceable"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,a.jsx)(c.blockquote,{children:"\n"}),"\n",(0,a.jsx)(c.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(c.p,{children:[(0,a.jsx)(c.a,{href:"/api/objects/booking-detail",children:(0,a.jsx)(c.code,{children:"BookingDetail"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/booking-room",children:(0,a.jsx)(c.code,{children:"BookingRoom"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/ferry-offer-data",children:(0,a.jsx)(c.code,{children:"FerryOfferData"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/ferry-order-payload",children:(0,a.jsx)(c.code,{children:"FerryOrderPayload"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/hotel-booking-amend",children:(0,a.jsx)(c.code,{children:"HotelBookingAmend"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/hotel-booking-detail",children:(0,a.jsx)(c.code,{children:"HotelBookingDetail"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/hotel-cancel-detail",children:(0,a.jsx)(c.code,{children:"HotelCancelDetail"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/hotel-option-quote",children:(0,a.jsx)(c.code,{children:"HotelOptionQuote"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/hotel-option-search",children:(0,a.jsx)(c.code,{children:"HotelOptionSearch"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/price-breakdown",children:(0,a.jsx)(c.code,{children:"PriceBreakdown"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/room-price",children:(0,a.jsx)(c.code,{children:"RoomPrice"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/supplement",children:(0,a.jsx)(c.code,{children:"Supplement"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(i,{}),(0,a.jsx)(c.a,{href:"/api/objects/surcharge",children:(0,a.jsx)(c.code,{children:"Surcharge"})})," ",(0,a.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:c}={...(0,r.R)(),...e.components};return c?(0,a.jsx)(c,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},21020:(e,c,s)=>{var a=s(96540),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function o(e,c,s){var a,n={},o=null,i=null;for(a in void 0!==s&&(o=""+s),void 0!==c.key&&(o=""+c.key),void 0!==c.ref&&(i=c.ref),c)d.call(c,a)&&!t.hasOwnProperty(a)&&(n[a]=c[a]);if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===n[a]&&(n[a]=c[a]);return{$$typeof:r,type:e,key:o,ref:i,props:n,_owner:l.current}}c.Fragment=n,c.jsx=o,c.jsxs=o},74848:(e,c,s)=>{e.exports=s(21020)},28453:(e,c,s)=>{s.d(c,{R:()=>d,x:()=>l});var a=s(96540);const r={},n=a.createContext(r);function d(e){const c=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function l(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(n.Provider,{value:c},e.children)}}}]);