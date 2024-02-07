/*! For license information please see f5f9fbe6.a3f7feac.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54176],{48656:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var r=t(17624),s=t(4552),o=t(11504);const l={id:"traveller-book-input",title:"TravellerBookInput"},a=void 0,i={id:"inputs/traveller-book-input",title:"TravellerBookInput",description:"No description",source:"@site/api/inputs/traveller-book-input.mdx",sourceDirName:"inputs",slug:"/inputs/traveller-book-input",permalink:"/api/inputs/traveller-book-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"traveller-book-input",title:"TravellerBookInput"},sidebar:"schemaSidebar",previous:{title:"TrailerInput",permalink:"/api/inputs/trailer-input"},next:{title:"TravellerInput",permalink:"/api/inputs/traveller-input"}},c={},d=()=>{const e={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>TravellerBookInput.<b>passengers</b></code><Bullet></Bullet><code>[PassengerBookInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"travellerbookinputpassengerspassengerbookinput--",level:4},{value:'<code>TravellerBookInput.<b>vehicles</b></code><Bullet></Bullet><code>[VehicleBookInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"travellerbookinputvehiclesvehiclebookinput--",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:t,startOpen:l=!1})=>{const a={details:"details",summary:"summary",...(0,s.M)()},[i,c]=(0,o.useState)(l);return(0,r.jsxs)(a.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&t]})};function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input TravellerBookInput {\n  passengers: [PassengerBookInput]\n  vehicles: [VehicleBookInput]\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"travellerbookinputpassengerspassengerbookinput--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TravellerBookInput.",(0,r.jsx)("b",{children:"passengers"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/inputs/passenger-book-input",children:(0,r.jsx)(n.code,{children:"[PassengerBookInput]"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(n.h4,{id:"travellerbookinputvehiclesvehiclebookinput--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["TravellerBookInput.",(0,r.jsx)("b",{children:"vehicles"})]})}),(0,r.jsx)(d,{}),(0,r.jsx)(n.a,{href:"/api/inputs/vehicle-book-input",children:(0,r.jsx)(n.code,{children:"[VehicleBookInput]"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/inputs/ferry-book-input",children:(0,r.jsx)(n.code,{children:"FerryBookInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},44808:(e,n,t)=>{var r=t(11504),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!i.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>l});var r=t(11504);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);