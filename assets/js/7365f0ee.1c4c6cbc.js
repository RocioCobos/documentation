/*! For license information please see 7365f0ee.1c4c6cbc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52846],{80153:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>h,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>r,toc:()=>x});var o=n(74848),t=n(28453),s=n(96540);const d={id:"geoname-data",title:"GeonameData",hide_table_of_contents:!1},c=void 0,r={id:"objects/geoname-data",title:"GeonameData",description:"Geoname data, which contain a reference to his parent location",source:"@site/api/objects/geoname-data.mdx",sourceDirName:"objects",slug:"/objects/geoname-data",permalink:"/api/objects/geoname-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"geoname-data",title:"GeonameData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"GeneratedPaymentInfo",permalink:"/api/objects/generated-payment-info"},next:{title:"Geoname",permalink:"/api/objects/geoname"}},l={},i=()=>{const e={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,t.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,t.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:a,children:n,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,t.R)()},[r,l]=(0,s.useState)(d);return(0,o.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>GeonameData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"geonamedatacodeid--",level:4},{value:'<code>GeonameData.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"geonamedatanamestring--",level:4},{value:'<code>GeonameData.<b>parent</b></code><Bullet></Bullet><code>Geoname!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"geonamedataparentgeoname--",level:4},{value:'<code>GeonameData.<b>country</b></code><Bullet></Bullet><code>Country</code> <Badge class="badge badge--secondary"></Badge>',id:"geonamedatacountrycountry-",level:4},{value:'<code>GeonameData.<b>type</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"geonamedatatypestring--",level:4},{value:'<code>GeonameData.<b>coordinates</b></code><Bullet></Bullet><code>Coordinates!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"geonamedatacoordinatescoordinates--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"Geoname data, which contain a reference to his parent location"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-graphql",children:"type GeonameData {\n  code: ID!\n  name: String!\n  parent: Geoname!\n  country: Country\n  type: String!\n  coordinates: Coordinates!\n}\n"})}),"\n",(0,o.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(a.h4,{id:"geonamedatacodeid--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["GeonameData.",(0,o.jsx)("b",{children:"code"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/scalars/id",children:(0,o.jsx)(a.code,{children:"ID!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"location code"}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"geonamedatanamestring--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["GeonameData.",(0,o.jsx)("b",{children:"name"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/scalars/string",children:(0,o.jsx)(a.code,{children:"String!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"name of location"}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"geonamedataparentgeoname--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["GeonameData.",(0,o.jsx)("b",{children:"parent"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/objects/geoname",children:(0,o.jsx)(a.code,{children:"Geoname!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Parent location, the top location is itself"}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"geonamedatacountrycountry-",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["GeonameData.",(0,o.jsx)("b",{children:"country"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/scalars/country",children:(0,o.jsx)(a.code,{children:"Country"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:'ISO 3166-1 alpha-2 format country code with enclosing double quotes "ES"'}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"geonamedatatypestring--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["GeonameData.",(0,o.jsx)("b",{children:"type"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/scalars/string",children:(0,o.jsx)(a.code,{children:"String!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Hierarchy returned by geonames service. It might change depending on the hotel and its location."}),"\n"]}),"\n",(0,o.jsxs)(a.h4,{id:"geonamedatacoordinatescoordinates--",children:[(0,o.jsx)(a.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["GeonameData.",(0,o.jsx)("b",{children:"coordinates"})]})}),(0,o.jsx)(i,{}),(0,o.jsx)(a.a,{href:"/api/objects/coordinates",children:(0,o.jsx)(a.code,{children:"Coordinates!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(a.blockquote,{children:["\n",(0,o.jsx)(a.p,{children:"Geographical coordinates corresponding to a location."}),"\n"]}),"\n",(0,o.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"/api/objects/geoname",children:(0,o.jsx)(a.code,{children:"Geoname"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},21020:(e,a,n)=>{var o=n(96540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,n){var o,s={},l=null,i=null;for(o in void 0!==n&&(l=""+n),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)d.call(a,o)&&!r.hasOwnProperty(o)&&(s[o]=a[o]);if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===s[o]&&(s[o]=a[o]);return{$$typeof:t,type:e,key:l,ref:i,props:s,_owner:c.current}}a.Fragment=s,a.jsx=l,a.jsxs=l},74848:(e,a,n)=>{e.exports=n(21020)},28453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>c});var o=n(96540);const t={},s=o.createContext(t);function d(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);