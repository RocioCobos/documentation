/*! For license information please see affbc1d0.b38d27a8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27266],{48728:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>m});var r=t(74848),s=t(28453),o=t(96540);const a={id:"gender-type",title:"GenderType"},l=void 0,d={id:"types/enums/gender-type",title:"GenderType",description:"No description",source:"@site/api/types/enums/gender-type.mdx",sourceDirName:"types/enums",slug:"/types/enums/gender-type",permalink:"/api/types/enums/gender-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"gender-type",title:"GenderType"},sidebar:"schemaSidebar",previous:{title:"FolderTemplate",permalink:"/api/types/enums/folder-template"},next:{title:"GeneratedPaymentMethodType",permalink:"/api/types/enums/generated-payment-method-type"}},i={},c=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const l={details:"details",summary:"summary",...(0,s.R)()},[d,i]=(0,o.useState)(a);return(0,r.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},m=[{value:"Values",id:"values",level:3},{value:"<code>GenderType.<b>MALE</b></code>",id:"gendertypemale",level:4},{value:"<code>GenderType.<b>FEMALE</b></code>",id:"gendertypefemale",level:4},{value:"<code>GenderType.<b>OTHERS</b></code>",id:"gendertypeothers",level:4},{value:"Member Of",id:"member-of",level:3}];function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"enum GenderType {\n  MALE\n  FEMALE\n  OTHERS\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,r.jsx)(n.h4,{id:"gendertypemale",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GenderType.",(0,r.jsx)("b",{children:"MALE"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h4,{id:"gendertypefemale",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GenderType.",(0,r.jsx)("b",{children:"FEMALE"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h4,{id:"gendertypeothers",children:(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["GenderType.",(0,r.jsx)("b",{children:"OTHERS"})]})})}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/types/objects/passenger-book",children:(0,r.jsx)(n.code,{children:"PassengerBook"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"object"}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/types/inputs/passenger-book-input",children:(0,r.jsx)(n.code,{children:"PassengerBookInput"})})," ",(0,r.jsx)(u,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var r,o={},i=null,c=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!d.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:i,ref:c,props:o,_owner:l.current}}n.Fragment=o,n.jsx=i,n.jsxs=i},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);