/*! For license information please see 3392d162.f5b30e43.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65349],{36839:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>h,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>x});var n=s(74848),i=s(28453),r=s(96540);const l={id:"hotel-xsupplier-input",title:"HotelXSupplierInput"},a=void 0,o={id:"types/inputs/hotel-xsupplier-input",title:"HotelXSupplierInput",description:"Supplier object. Contains its own settings, code and access.",source:"@site/api/types/inputs/hotel-xsupplier-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/hotel-xsupplier-input",permalink:"/api/types/inputs/hotel-xsupplier-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-xsupplier-input",title:"HotelXSupplierInput"},sidebar:"schemaSidebar",previous:{title:"HotelXRoomQueryInput",permalink:"/api/types/inputs/hotel-xroom-query-input"},next:{title:"HubProviderFilter",permalink:"/api/types/inputs/hub-provider-filter"}},c={},p=()=>{const e={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,i.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,i.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:s,startOpen:l=!1})=>{const a={details:"details",summary:"summary",...(0,i.R)()},[o,c]=(0,r.useState)(l);return(0,n.jsxs)(a.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&s]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXSupplierInput.<b>settings</b></code><Bullet></Bullet><code>SettingsBaseInput</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelxsupplierinputsettingssettingsbaseinput-",level:4},{value:'<code>HotelXSupplierInput.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxsupplierinputcodestring--",level:4},{value:'<code>HotelXSupplierInput.<b>accesses</b></code><Bullet></Bullet><code>[HotelXAccessInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxsupplierinputaccesseshotelxaccessinput--",level:4},{value:"Member Of",id:"member-of",level:3}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Supplier object. Contains its own settings, code and access."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input HotelXSupplierInput {\n  settings: SettingsBaseInput\n  code: String!\n  accesses: [HotelXAccessInput!]\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"hotelxsupplierinputsettingssettingsbaseinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXSupplierInput.",(0,n.jsx)("b",{children:"settings"})]})}),(0,n.jsx)(p,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/settings-base-input",children:(0,n.jsx)(t.code,{children:"SettingsBaseInput"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"You can configure an special settings for any supplier. This level overwrites the avail settings level but not the\naccess settings level."}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"hotelxsupplierinputcodestring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXSupplierInput.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(p,{}),(0,n.jsx)(t.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Code that represents a supplier in our system.\nThis information is mandatory."}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"hotelxsupplierinputaccesseshotelxaccessinput--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXSupplierInput.",(0,n.jsx)("b",{children:"accesses"})]})}),(0,n.jsx)(p,{}),(0,n.jsx)(t.a,{href:"/api/types/inputs/hotel-xaccess-input",children:(0,n.jsx)(t.code,{children:"[HotelXAccessInput!]"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Array of accesses that can overwrite an existing access information or include a new access for this avail."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/types/inputs/hotel-settings-input",children:(0,n.jsx)(t.code,{children:"HotelSettingsInput"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},21020:(e,t,s)=>{var n=s(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,r={},c=null,p=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)l.call(t,n)&&!o.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:p,props:r,_owner:a.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(96540);const i={},r=n.createContext(i);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);