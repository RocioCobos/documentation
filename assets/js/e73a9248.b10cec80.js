/*! For license information please see e73a9248.b10cec80.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84430],{77320:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>p,Bullet:()=>i,Details:()=>j,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>f});var t=r(74848),s=r(28453),o=r(96540);const a={id:"journey",title:"Journey",hide_table_of_contents:!1},c=void 0,d={id:"objects/journey",title:"Journey",description:"No description",source:"@site/api/objects/journey.mdx",sourceDirName:"objects",slug:"/objects/journey",permalink:"/api/objects/journey",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"journey",title:"Journey",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ItineraryMap",permalink:"/api/objects/itinerary-map"},next:{title:"LegacyAccessConnection",permalink:"/api/objects/legacy-access-connection"}},l={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},j=({dataOpen:e,dataClose:n,children:r,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[d,l]=(0,o.useState)(a);return(0,t.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&r]})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>Journey.<b>tripMode</b></code><Bullet></Bullet><code>TripMode!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"journeytripmodetripmode--",level:4},{value:'<code>Journey.<b>segments</b></code><Bullet></Bullet><code>[FerrySegment]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"journeysegmentsferrysegment--",level:4},{value:"Member of",id:"member-of",level:3}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type Journey {\n  tripMode: TripMode!\n  segments: [FerrySegment]\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"journeytripmodetripmode--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Journey.",(0,t.jsx)("b",{children:"tripMode"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/api/enums/trip-mode",children:(0,t.jsx)(n.code,{children:"TripMode!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"0 = Departure, 1 = Return"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"journeysegmentsferrysegment--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Journey.",(0,t.jsx)("b",{children:"segments"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/api/objects/ferry-segment",children:(0,t.jsx)(n.code,{children:"[FerrySegment]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/objects/ferry-offer-book",children:(0,t.jsx)(n.code,{children:"FerryOfferBook"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(n.a,{href:"/api/objects/ferry-offer-data",children:(0,t.jsx)(n.code,{children:"FerryOfferData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}},21020:(e,n,r)=>{var t=r(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,i=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(i=n.ref),n)a.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:i,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);