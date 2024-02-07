/*! For license information please see 71c9a7ab.d2b2a1dc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69156],{93016:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>j,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>x});var r=t(17624),a=t(4552),o=t(11504);const s={id:"holder",title:"Holder"},l=void 0,d={id:"objects/holder",title:"Holder",description:"Object that contains the booking's holder information.",source:"@site/api/objects/holder.mdx",sourceDirName:"objects",slug:"/objects/holder",permalink:"/api/objects/holder",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"holder",title:"Holder"},sidebar:"schemaSidebar",previous:{title:"Group",permalink:"/api/objects/group"},next:{title:"HotelBookPayload",permalink:"/api/objects/hotel-book-payload"}},c={},i=()=>{const e={span:"span",...(0,a.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,a.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const n={span:"span",...(0,a.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Holder.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"holdernamestring--",level:4},{value:'<code>Holder.<b>surname</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"holdersurnamestring--",level:4},{value:'<code>Holder.<b>title</b></code><Bullet></Bullet><code>PersonalTitleType</code> <Badge class="badge badge--secondary"></Badge>',id:"holdertitlepersonaltitletype-",level:4},{value:'<code>Holder.<b>contactInfo</b></code><Bullet></Bullet><code>ContactInfo</code> <Badge class="badge badge--secondary"></Badge>',id:"holdercontactinfocontactinfo-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,a.M)()},[d,c]=(0,o.useState)(s);return(0,r.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Object that contains the booking's holder information."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"type Holder {\n  name: String!\n  surname: String!\n  title: PersonalTitleType\n  contactInfo: ContactInfo\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"holdernamestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Holder.",(0,r.jsx)("b",{children:"name"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Holder's name."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"holdersurnamestring--",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Holder.",(0,r.jsx)("b",{children:"surname"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String!"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Holder's surname."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"holdertitlepersonaltitletype-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Holder.",(0,r.jsx)("b",{children:"title"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/enums/personal-title-type",children:(0,r.jsx)(n.code,{children:"PersonalTitleType"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Holder's title, if return."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"holdercontactinfocontactinfo-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["Holder.",(0,r.jsx)("b",{children:"contactInfo"})]})}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/objects/contact-info",children:(0,r.jsx)(n.code,{children:"ContactInfo"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Holder's contact information."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/objects/booking-detail",children:(0,r.jsx)(n.code,{children:"BookingDetail"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/objects/ferry-order-payload",children:(0,r.jsx)(n.code,{children:"FerryOrderPayload"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/objects/hotel-booking-detail",children:(0,r.jsx)(n.code,{children:"HotelBookingDetail"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/objects/payment-card-data",children:(0,r.jsx)(n.code,{children:"PaymentCardData"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(i,{}),(0,r.jsx)(n.a,{href:"/api/objects/payment-xstored-card-data",children:(0,r.jsx)(n.code,{children:"PaymentXStoredCardData"})})," ",(0,r.jsx)(j,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},44808:(e,n,t)=>{var r=t(11504),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,i=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(i=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:l.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>s});var r=t(11504);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);