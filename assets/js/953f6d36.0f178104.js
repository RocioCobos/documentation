/*! For license information please see 953f6d36.0f178104.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21576],{3580:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>x,Bullet:()=>l,Details:()=>g,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>j});var a=n(17624),o=n(4552),s=n(11504);const c={id:"location",title:"Location"},d=void 0,i={id:"objects/location",title:"Location",description:"Indicates the location of the hotel",source:"@site/api/objects/location.mdx",sourceDirName:"objects",slug:"/objects/location",permalink:"/api/objects/location",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"location",title:"Location"},sidebar:"schemaSidebar",previous:{title:"LocalitiesRs",permalink:"/api/objects/localities-rs"},next:{title:"LoggingData",permalink:"/api/objects/logging-data"}},r={},l=()=>{const e={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,o.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const t={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Location.<b>address</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"locationaddressstring-",level:4},{value:'<code>Location.<b>city</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"locationcitystring-",level:4},{value:'<code>Location.<b>zipCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"locationzipcodestring-",level:4},{value:'<code>Location.<b>country</b></code><Bullet></Bullet><code>Country</code> <Badge class="badge badge--secondary"></Badge>',id:"locationcountrycountry-",level:4},{value:'<code>Location.<b>coordinates</b></code><Bullet></Bullet><code>Coordinates</code> <Badge class="badge badge--secondary"></Badge>',id:"locationcoordinatescoordinates-",level:4},{value:'<code>Location.<b>closestDestination</b></code><Bullet></Bullet><code>DestinationData</code> <Badge class="badge badge--secondary"></Badge>',id:"locationclosestdestinationdestinationdata-",level:4},{value:'<code>Location.<b>airports</b></code><Bullet></Bullet><code>[Airport!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"locationairportsairport--",level:4},{value:'<code>Location.<b>geoNames</b></code><Bullet></Bullet><code>[Geoname!]!</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"locationgeonamesgeoname---",level:4},{value:'<code>Location.<b>state</b></code><Bullet></Bullet><code>State</code> <Badge class="badge badge--secondary"></Badge>',id:"locationstatestate-",level:4},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,o.M)()},[i,r]=(0,s.useState)(c);return(0,a.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(d.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&n]})};function b(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Indicates the location of the hotel"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type Location {\n  address: String\n  city: String\n  zipCode: String\n  country: Country\n  coordinates: Coordinates\n  closestDestination: DestinationData\n  airports: [Airport!]\n  geoNames: [Geoname!]! @deprecated\n  state: State\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"locationaddressstring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Location.",(0,a.jsx)("b",{children:"address"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Contains Hotel Address"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"locationcitystring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Location.",(0,a.jsx)("b",{children:"city"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Contains the city"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"locationzipcodestring-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Location.",(0,a.jsx)("b",{children:"zipCode"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/scalars/string",children:(0,a.jsx)(t.code,{children:"String"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Contains the zipCode."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"locationcountrycountry-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Location.",(0,a.jsx)("b",{children:"country"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/scalars/country",children:(0,a.jsx)(t.code,{children:"Country"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Country where is the Hotel."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"locationcoordinatescoordinates-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Location.",(0,a.jsx)("b",{children:"coordinates"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/objects/coordinates",children:(0,a.jsx)(t.code,{children:"Coordinates"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Geographical coordinates corresponding to a location."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"locationclosestdestinationdestinationdata-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Location.",(0,a.jsx)("b",{children:"closestDestination"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/objects/destination-data",children:(0,a.jsx)(t.code,{children:"DestinationData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Closest destination"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"locationairportsairport--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Location.",(0,a.jsx)("b",{children:"airports"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/objects/airport",children:(0,a.jsx)(t.code,{children:"[Airport!]"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Airports"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"locationgeonamesgeoname---",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Location.",(0,a.jsx)("b",{children:"geoNames"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/objects/geoname",children:(0,a.jsx)(t.code,{children:"[Geoname!]!"})})," ",(0,a.jsx)(x,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.admonition,{title:"DEPRECATED",type:"warning",children:(0,a.jsx)(t.p,{children:"Deprecated from 2023-04-18"})}),"\n",(0,a.jsx)(t.p,{children:"Detailed information about the destinations geonames"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"locationstatestate-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Location.",(0,a.jsx)("b",{children:"state"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/scalars/state",children:(0,a.jsx)(t.code,{children:"State"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"the state/province of the property"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/objects/airport-data",children:(0,a.jsx)(t.code,{children:"AirportData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/objects/hotel-data",children:(0,a.jsx)(t.code,{children:"HotelData"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},44808:(e,t,n)=>{var a=n(11504),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function r(e,t,n){var a,s={},r=null,l=null;for(a in void 0!==n&&(r=""+n),void 0!==t.key&&(r=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,a)&&!i.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:o,type:e,key:r,ref:l,props:s,_owner:d.current}}t.Fragment=s,t.jsx=r,t.jsxs=r},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>d,M:()=>c});var a=n(11504);const o={},s=a.createContext(o);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);