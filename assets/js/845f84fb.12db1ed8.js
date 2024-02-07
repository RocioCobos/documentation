/*! For license information please see 845f84fb.12db1ed8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21788],{48376:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>x,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(17624),r=t(4552),s=t(11504);const l={id:"pax-type",title:"PaxType"},o=void 0,c={id:"enums/pax-type",title:"PaxType",description:"enum PackageType",source:"@site/api/enums/pax-type.mdx",sourceDirName:"enums",slug:"/enums/pax-type",permalink:"/api/enums/pax-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pax-type",title:"PaxType"},sidebar:"schemaSidebar",previous:{title:"PaxTypeType",permalink:"/api/enums/pax-type-type"},next:{title:"PayerResponseStatusType",permalink:"/api/enums/payer-response-status-type"}},i={},d=()=>{const e={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,r.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const n={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},u=[{value:"Values",id:"values",level:3},{value:"<code>PaxType.<b>ADT</b></code>",id:"paxtypeadt",level:4},{value:"<code>PaxType.<b>CHD</b></code>",id:"paxtypechd",level:4},{value:"<code>PaxType.<b>INF</b></code>",id:"paxtypeinf",level:4},{value:"<code>PaxType.<b>SEN</b></code>",id:"paxtypesen",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:n,children:t,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,r.M)()},[c,i]=(0,s.useState)(l);return(0,a.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})};function y(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"enum PackageType\n{\nCIRCUIT\nTOUR\n}"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"enum PaxType {\n  ADT\n  CHD\n  INF\n  SEN\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"values",children:"Values"}),"\n",(0,a.jsx)(n.h4,{id:"paxtypeadt",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaxType.",(0,a.jsx)("b",{children:"ADT"})]})})}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h4,{id:"paxtypechd",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaxType.",(0,a.jsx)("b",{children:"CHD"})]})})}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h4,{id:"paxtypeinf",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaxType.",(0,a.jsx)("b",{children:"INF"})]})})}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h4,{id:"paxtypesen",children:(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["PaxType.",(0,a.jsx)("b",{children:"SEN"})]})})}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/objects/package-pax",children:(0,a.jsx)(n.code,{children:"PackagePax"})})," ",(0,a.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},44808:(e,n,t)=>{var a=t(11504),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var a,s={},i=null,d=null;for(a in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,a)&&!c.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:r,type:e,key:i,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=i,n.jsxs=i},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>l});var a=t(11504);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);