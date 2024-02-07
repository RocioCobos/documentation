/*! For license information please see 27ed74a2.5aab56a2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67048],{62624:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var l=t(17624),c=t(4552),o=t(11504);const a={id:"hotel-cancel-input",title:"HotelCancelInput"},s=void 0,r={id:"inputs/hotel-cancel-input",title:"HotelCancelInput",description:"Cancel criteria.",source:"@site/api/inputs/hotel-cancel-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-cancel-input",permalink:"/api/inputs/hotel-cancel-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-cancel-input",title:"HotelCancelInput"},sidebar:"schemaSidebar",previous:{title:"HotelBookInput",permalink:"/api/inputs/hotel-book-input"},next:{title:"HotelCommitInput",permalink:"/api/inputs/hotel-commit-input"}},i={},d=()=>{const e={span:"span",...(0,c.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.M)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,c.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelCancelInput.<b>accessCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelinputaccesscodestring-",level:4},{value:'<code>HotelCancelInput.<b>language</b></code><Bullet></Bullet><code>Language</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelinputlanguagelanguage-",level:4},{value:'<code>HotelCancelInput.<b>hotelCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelinputhotelcodestring-",level:4},{value:'<code>HotelCancelInput.<b>reference</b></code><Bullet></Bullet><code>BookReferenceInput</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelinputreferencebookreferenceinput-",level:4},{value:'<code>HotelCancelInput.<b>bookingID</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"hotelcancelinputbookingidstring-",level:4}],g=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const s={details:"details",summary:"summary",...(0,c.M)()},[r,i]=(0,o.useState)(a);return(0,l.jsxs)(s.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(s.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&t]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Cancel criteria."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"input HotelCancelInput {\n  accessCode: String\n  language: Language\n  hotelCode: String\n  reference: BookReferenceInput\n  bookingID: String\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(n.h4,{id:"hotelcancelinputaccesscodestring-",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelInput.",(0,l.jsx)("b",{children:"accessCode"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/scalars/string",children:(0,l.jsx)(n.code,{children:"String"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The name of the access to use in the request."}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"hotelcancelinputlanguagelanguage-",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelInput.",(0,l.jsx)("b",{children:"language"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/scalars/language",children:(0,l.jsx)(n.code,{children:"Language"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The language code."}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"hotelcancelinputhotelcodestring-",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelInput.",(0,l.jsx)("b",{children:"hotelCode"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/scalars/string",children:(0,l.jsx)(n.code,{children:"String"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"The hotel code, which is only used if you try to cancel with reference."}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"hotelcancelinputreferencebookreferenceinput-",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelInput.",(0,l.jsx)("b",{children:"reference"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/inputs/book-reference-input",children:(0,l.jsx)(n.code,{children:"BookReferenceInput"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"It contains reservation references. When using the reference object to cancel, hotelCode has to be send as well."}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"hotelcancelinputbookingidstring-",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelCancelInput.",(0,l.jsx)("b",{children:"bookingID"})]})}),(0,l.jsx)(d,{}),(0,l.jsx)(n.a,{href:"/api/scalars/string",children:(0,l.jsx)(n.code,{children:"String"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"HotelX's booking reference. If you cancel with bookingID nor hotelCode norany other reference needs to be send."}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},44808:(e,n,t)=>{var l=t(11504),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var l,o={},i=null,d=null;for(l in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,l)&&!r.hasOwnProperty(l)&&(o[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===o[l]&&(o[l]=n[l]);return{$$typeof:c,type:e,key:i,ref:d,props:o,_owner:s.current}}n.Fragment=o,n.jsx=i,n.jsxs=i},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>a});var l=t(11504);const c={},o=l.createContext(c);function a(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);