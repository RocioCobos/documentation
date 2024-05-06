/*! For license information please see 2a4988f0.0b826e47.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27087],{51175:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>x});var t=r(74848),i=r(28453),s=r(96540);const o={id:"provider-input",title:"ProviderInput",hide_table_of_contents:!1},a=void 0,d={id:"inputs/provider-input",title:"ProviderInput",description:"No description",source:"@site/api/inputs/provider-input.mdx",sourceDirName:"inputs",slug:"/inputs/provider-input",permalink:"/api/inputs/provider-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"provider-input",title:"ProviderInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProviderCreateInput",permalink:"/api/inputs/provider-create-input"},next:{title:"ProviderWhereInput",permalink:"/api/inputs/provider-where-input"}},l={},c=()=>{const e={span:"span",...(0,i.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,i.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:n,children:r,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,i.R)()},[d,l]=(0,s.useState)(o);return(0,t.jsxs)(a.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(a.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&r]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ProviderInput.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"providerinputcodestring--",level:4},{value:'<code>ProviderInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"providerinputnamestring-",level:4},{value:'<code>ProviderInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"providerinputisactiveboolean-",level:4},{value:'<code>ProviderInput.<b>isPublic</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"providerinputispublicboolean-",level:4}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input ProviderInput {\n  code: String!\n  name: String\n  isActive: Boolean\n  isPublic: Boolean\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"providerinputcodestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderInput.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"providerinputnamestring-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderInput.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/scalars/string",children:(0,t.jsx)(n.code,{children:"String"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"providerinputisactiveboolean-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderInput.",(0,t.jsx)("b",{children:"isActive"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,t.jsx)(n.code,{children:"Boolean"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"providerinputispublicboolean-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ProviderInput.",(0,t.jsx)("b",{children:"isPublic"})]})}),(0,t.jsx)(c,{}),(0,t.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,t.jsx)(n.code,{children:"Boolean"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,n,r)=>{var t=r(96540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,c=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:c,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);