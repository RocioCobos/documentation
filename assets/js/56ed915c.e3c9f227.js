/*! For license information please see 56ed915c.e3c9f227.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72472],{98400:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>g,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var s=a(17624),c=a(4552),t=a(11504);const o={id:"check-information",title:"CheckInformation"},i=void 0,r={id:"objects/check-information",title:"CheckInformation",description:"No description",source:"@site/api/objects/check-information.mdx",sourceDirName:"objects",slug:"/objects/check-information",permalink:"/api/objects/check-information",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"check-information",title:"CheckInformation"},sidebar:"schemaSidebar",previous:{title:"Certification",permalink:"/api/objects/certification"},next:{title:"ClientConnection",permalink:"/api/objects/client-connection"}},l={},d=()=>{const e={span:"span",...(0,c.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,c.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,c.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>CheckInformation.<b>instructions</b></code><Bullet></Bullet><code>[Text!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkinformationinstructionstext--",level:4},{value:'<code>CheckInformation.instructions.<b>languages</b></code><Bullet></Bullet><code>[Language!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkinformationinstructionslanguageslanguage--",level:5},{value:'<code>CheckInformation.<b>specialInstructions</b></code><Bullet></Bullet><code>[Text!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkinformationspecialinstructionstext--",level:4},{value:'<code>CheckInformation.specialInstructions.<b>languages</b></code><Bullet></Bullet><code>[Language!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"checkinformationspecialinstructionslanguageslanguage--",level:5},{value:'<code>CheckInformation.<b>minAge</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"checkinformationminageint-",level:4},{value:'<code>CheckInformation.<b>schedule</b></code><Bullet></Bullet><code>TimeRange</code> <Badge class="badge badge--secondary"></Badge>',id:"checkinformationscheduletimerange-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:a,startOpen:o=!1})=>{const i={details:"details",summary:"summary",...(0,c.M)()},[r,l]=(0,t.useState)(o);return(0,s.jsxs)(i.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(i.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&a]})};function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"No description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type CheckInformation {\n  instructions(languages: [Language!]): [Text!]\n  specialInstructions(languages: [Language!]): [Text!]\n  minAge: Int\n  schedule: TimeRange\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"checkinformationinstructionstext--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckInformation.",(0,s.jsx)("b",{children:"instructions"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/objects/text",children:(0,s.jsx)(n.code,{children:"[Text!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"CheckIn instructions"}),"\n",(0,s.jsxs)(n.h5,{id:"checkinformationinstructionslanguageslanguage--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckInformation.instructions.",(0,s.jsx)("b",{children:"languages"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/scalars/language",children:(0,s.jsx)(n.code,{children:"[Language!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"checkinformationspecialinstructionstext--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckInformation.",(0,s.jsx)("b",{children:"specialInstructions"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/objects/text",children:(0,s.jsx)(n.code,{children:"[Text!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"CheckIn special instructions"}),"\n",(0,s.jsxs)(n.h5,{id:"checkinformationspecialinstructionslanguageslanguage--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckInformation.specialInstructions.",(0,s.jsx)("b",{children:"languages"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/scalars/language",children:(0,s.jsx)(n.code,{children:"[Language!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"checkinformationminageint-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckInformation.",(0,s.jsx)("b",{children:"minAge"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/scalars/int",children:(0,s.jsx)(n.code,{children:"Int"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Minimal age allowed for doing the checkin"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"checkinformationscheduletimerange-",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["CheckInformation.",(0,s.jsx)("b",{children:"schedule"})]})}),(0,s.jsx)(d,{}),(0,s.jsx)(n.a,{href:"/api/objects/time-range",children:(0,s.jsx)(n.code,{children:"TimeRange"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The schedule of checkIn"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/objects/hotel-data",children:(0,s.jsx)(n.code,{children:"HotelData"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},44808:(e,n,a)=>{var s=a(11504),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,a){var s,t={},l=null,d=null;for(s in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!r.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:c,type:e,key:l,ref:d,props:t,_owner:i.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},17624:(e,n,a)=>{e.exports=a(44808)},4552:(e,n,a)=>{a.d(n,{I:()=>i,M:()=>o});var s=a(11504);const c={},t=s.createContext(c);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);