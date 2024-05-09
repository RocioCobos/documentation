/*! For license information please see 8211f2c3.5f830512.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70265],{85970:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>x,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=t(74848),s=t(28453),c=t(96540);const r={id:"package-pax",title:"PackagePax"},o=void 0,l={id:"types/objects/package-pax",title:"PackagePax",description:"No description",source:"@site/api/types/objects/package-pax.mdx",sourceDirName:"types/objects",slug:"/types/objects/package-pax",permalink:"/api/types/objects/package-pax",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"package-pax",title:"PackagePax"},sidebar:"schemaSidebar",previous:{title:"PackageMutation",permalink:"/api/types/objects/package-mutation"},next:{title:"PackagePrice",permalink:"/api/types/objects/package-price"}},d={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const a={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const a={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:a,children:t,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,s.R)()},[l,d]=(0,c.useState)(r);return(0,n.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&t]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>PackagePax.<b>type</b></code><Bullet></Bullet><code>PaxType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"packagepaxtypepaxtype--",level:4},{value:'<code>PackagePax.<b>age</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"packagepaxageint-",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type PackagePax {\n  type: PaxType!\n  age: Int\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"packagepaxtypepaxtype--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackagePax.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/types/enums/pax-type",children:(0,n.jsx)(a.code,{children:"PaxType!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Type of the passenger (ADT, CHD)"}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"packagepaxageint-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackagePax.",(0,n.jsx)("b",{children:"age"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/types/scalars/int",children:(0,n.jsx)(a.code,{children:"Int"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"Age of the passenger"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/types/objects/package-room",children:(0,n.jsx)(a.code,{children:"PackageRoom"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(i,{}),(0,n.jsx)(a.a,{href:"/api/types/objects/paxes",children:(0,n.jsx)(a.code,{children:"Paxes"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,a,t)=>{var n=t(96540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,t){var n,c={},d=null,i=null;for(n in void 0!==t&&(d=""+t),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(i=a.ref),a)r.call(a,n)&&!l.hasOwnProperty(n)&&(c[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===c[n]&&(c[n]=a[n]);return{$$typeof:s,type:e,key:d,ref:i,props:c,_owner:o.current}}a.Fragment=c,a.jsx=d,a.jsxs=d},74848:(e,a,t)=>{e.exports=t(21020)},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(96540);const s={},c=n.createContext(s);function r(e){const a=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(c.Provider,{value:a},e.children)}}}]);