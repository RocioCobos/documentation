/*! For license information please see b4d5277d.17d5c6ed.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43828],{21942:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>h,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>b});var o=a(17624),s=a(4552),t=a(11504);const r={id:"bookable-option-search",title:"BookableOptionSearch"},c=void 0,i={id:"interfaces/bookable-option-search",title:"BookableOptionSearch",description:"No description",source:"@site/api/interfaces/bookable-option-search.mdx",sourceDirName:"interfaces",slug:"/interfaces/bookable-option-search",permalink:"/api/interfaces/bookable-option-search",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"bookable-option-search",title:"BookableOptionSearch"},sidebar:"schemaSidebar",previous:{title:"VirtualCreditCardInput",permalink:"/api/inputs/virtual-credit-card-input"},next:{title:"GroupCommonData",permalink:"/api/interfaces/group-common-data"}},l={},d=()=>{const e={span:"span",...(0,s.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.M)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,s.M)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>BookableOptionSearch.<b>supplierCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearchsuppliercodestring--",level:4},{value:'<code>BookableOptionSearch.<b>accessCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearchaccesscodestring--",level:4},{value:'<code>BookableOptionSearch.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookableoptionsearchidstring--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],u=({dataOpen:e,dataClose:n,children:a,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,s.M)()},[i,l]=(0,t.useState)(r);return(0,o.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&a]})};function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"interface BookableOptionSearch {\n  supplierCode: String!\n  accessCode: String!\n  id: String!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"bookableoptionsearchsuppliercodestring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["BookableOptionSearch.",(0,o.jsx)("b",{children:"supplierCode"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/api/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Supplier that offers this option."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"bookableoptionsearchaccesscodestring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["BookableOptionSearch.",(0,o.jsx)("b",{children:"accessCode"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/api/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Access code of this option."}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"bookableoptionsearchidstring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["BookableOptionSearch.",(0,o.jsx)("b",{children:"id"})]})}),(0,o.jsx)(d,{}),(0,o.jsx)(n.a,{href:"/api/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Indicates the id to be used on Quote as key"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/objects/hotel-option-search",children:(0,o.jsx)(n.code,{children:"HotelOptionSearch"})})," ",(0,o.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},44808:(e,n,a)=>{var o=a(11504),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,a){var o,t={},l=null,d=null;for(o in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,o)&&!i.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:s,type:e,key:l,ref:d,props:t,_owner:c.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},17624:(e,n,a)=>{e.exports=a(44808)},4552:(e,n,a)=>{a.d(n,{I:()=>c,M:()=>r});var o=a(11504);const s={},t=o.createContext(s);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);