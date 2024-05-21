/*! For license information please see ad6b143f.3fe9a30f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46668],{22616:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>x,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>g});var s=n(74848),r=n(28453),l=n(96540);const o={id:"inventory-hotel-master",title:"InventoryHotelMaster"},a=void 0,d={id:"types/objects/inventory-hotel-master",title:"InventoryHotelMaster",description:"The Hotel class represents a hotel entity.",source:"@site/api/types/objects/inventory-hotel-master.mdx",sourceDirName:"types/objects",slug:"/types/objects/inventory-hotel-master",permalink:"/api/types/objects/inventory-hotel-master",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"inventory-hotel-master",title:"InventoryHotelMaster"},sidebar:"schemaSidebar",previous:{title:"InventoryContextsRs",permalink:"/api/types/objects/inventory-contexts-rs"},next:{title:"InventoryHotelSetup",permalink:"/api/types/objects/inventory-hotel-setup"}},c={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,r.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const t={span:"span",...(0,r.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},y=({dataOpen:e,dataClose:t,children:n,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,r.R)()},[d,c]=(0,l.useState)(o);return(0,s.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InventoryHotelMaster.<b>id</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasteridint--",level:4},{value:'<code>InventoryHotelMaster.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasternamestring-",level:4},{value:'<code>InventoryHotelMaster.<b>email</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasteremailstring-",level:4},{value:'<code>InventoryHotelMaster.<b>phones</b></code><Bullet></Bullet><code>[String]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterphonesstring--",level:4},{value:'<code>InventoryHotelMaster.<b>fax</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterfaxstring-",level:4},{value:'<code>InventoryHotelMaster.<b>address</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasteraddressstring-",level:4},{value:'<code>InventoryHotelMaster.<b>postalCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterpostalcodestring-",level:4},{value:'<code>InventoryHotelMaster.<b>latitude</b></code><Bullet></Bullet><code>Decimal</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterlatitudedecimal-",level:4},{value:'<code>InventoryHotelMaster.<b>longitude</b></code><Bullet></Bullet><code>Decimal</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterlongitudedecimal-",level:4},{value:'<code>InventoryHotelMaster.<b>externalCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterexternalcodestring-",level:4},{value:'<code>InventoryHotelMaster.<b>category</b></code><Bullet></Bullet><code>InventoryCategory</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmastercategoryinventorycategory-",level:4},{value:'<code>InventoryHotelMaster.<b>locality</b></code><Bullet></Bullet><code>InventoryLocality</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterlocalityinventorylocality-",level:4},{value:'<code>InventoryHotelMaster.<b>hotelCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmasterhotelcodestring-",level:4},{value:'<code>InventoryHotelMaster.<b>contextCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"inventoryhotelmastercontextcodestring-",level:4},{value:"Member Of",id:"member-of",level:3}];function j(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The Hotel class represents a hotel entity."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type InventoryHotelMaster {\n  id: Int!\n  name: String\n  email: String\n  phones: [String]\n  fax: String\n  address: String\n  postalCode: String\n  latitude: Decimal\n  longitude: Decimal\n  externalCode: String\n  category: InventoryCategory\n  locality: InventoryLocality\n  hotelCode: String\n  contextCode: String\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasteridint--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/int",children:(0,s.jsx)(t.code,{children:"Int!"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The unique identifier of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasternamestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"name"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The name of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasteremailstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"email"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The email address of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasterphonesstring--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"phones"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"[String]"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The list of phone numbers of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasterfaxstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"fax"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The fax number of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasteraddressstring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"address"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The physical address of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasterpostalcodestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"postalCode"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The postal code of the hotel's location."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasterlatitudedecimal-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"latitude"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/decimal",children:(0,s.jsx)(t.code,{children:"Decimal"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The latitude of the hotel's location."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasterlongitudedecimal-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"longitude"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/decimal",children:(0,s.jsx)(t.code,{children:"Decimal"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The longitude of the hotel's location."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasterexternalcodestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"externalCode"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The external code of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmastercategoryinventorycategory-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"category"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/inventory-category",children:(0,s.jsx)(t.code,{children:"InventoryCategory"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The category of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasterlocalityinventorylocality-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"locality"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/objects/inventory-locality",children:(0,s.jsx)(t.code,{children:"InventoryLocality"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The locality of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmasterhotelcodestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"hotelCode"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The code of the hotel."}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"inventoryhotelmastercontextcodestring-",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["InventoryHotelMaster.",(0,s.jsx)("b",{children:"contextCode"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(t.code,{children:"String"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The context code of the hotel."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/types/objects/hotels-rs",children:(0,s.jsx)(t.code,{children:"HotelsRs"})})," ",(0,s.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},21020:(e,t,n)=>{var s=n(96540),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,l={},c=null,i=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(i=t.ref),t)o.call(t,s)&&!d.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:i,props:l,_owner:a.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},l=s.createContext(r);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);