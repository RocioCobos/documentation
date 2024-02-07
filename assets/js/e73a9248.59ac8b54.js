/*! For license information please see e73a9248.59ac8b54.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50532],{92544:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>j});var t=n(17624),s=n(4552),o=n(11504);const a={id:"journey",title:"Journey"},c=void 0,d={id:"objects/journey",title:"Journey",description:"No description",source:"@site/api/objects/journey.mdx",sourceDirName:"objects",slug:"/objects/journey",permalink:"/api/objects/journey",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"journey",title:"Journey"},sidebar:"schemaSidebar",previous:{title:"ItineraryMap",permalink:"/api/objects/itinerary-map"},next:{title:"LegacyAccessConnection",permalink:"/api/objects/legacy-access-connection"}},l={},i=()=>{const e={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,s.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},j=[{value:"Fields",id:"fields",level:3},{value:'<code>Journey.<b>tripMode</b></code><Bullet></Bullet><code>TripMode!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"journeytripmodetripmode--",level:4},{value:'<code>Journey.<b>segments</b></code><Bullet></Bullet><code>[FerrySegment]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"journeysegmentsferrysegment--",level:4},{value:"Member Of",id:"member-of",level:3}],y=({dataOpen:e,dataClose:r,children:n,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,s.M)()},[d,l]=(0,o.useState)(a);return(0,t.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&n]})};function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"No description"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type Journey {\n  tripMode: TripMode!\n  segments: [FerrySegment]\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"journeytripmodetripmode--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Journey.",(0,t.jsx)("b",{children:"tripMode"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/enums/trip-mode",children:(0,t.jsx)(r.code,{children:"TripMode!"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"0 = Departure, 1 = Return"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"journeysegmentsferrysegment--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Journey.",(0,t.jsx)("b",{children:"segments"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/objects/ferry-segment",children:(0,t.jsx)(r.code,{children:"[FerrySegment]"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/objects/ferry-offer-book",children:(0,t.jsx)(r.code,{children:"FerryOfferBook"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/objects/ferry-offer-data",children:(0,t.jsx)(r.code,{children:"FerryOfferData"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},44808:(e,r,n)=>{var t=n(11504),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,o={},l=null,i=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:i,props:o,_owner:c.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},17624:(e,r,n)=>{e.exports=n(44808)},4552:(e,r,n)=>{n.d(r,{I:()=>c,M:()=>a});var t=n(11504);const s={},o=t.createContext(s);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);