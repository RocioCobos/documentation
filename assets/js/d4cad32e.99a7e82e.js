/*! For license information please see d4cad32e.99a7e82e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96967],{8333:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>x});var n=t(74848),s=t(28453),o=t(96540);const a={id:"resort",title:"Resort",hide_table_of_contents:!1},c=void 0,i={id:"objects/resort",title:"Resort",description:"Contains information about the Resort.",source:"@site/api/objects/resort.mdx",sourceDirName:"objects",slug:"/objects/resort",permalink:"/api/objects/resort",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"resort",title:"Resort",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RequiredRoomWithSamePaxConfiguration",permalink:"/api/objects/required-room-with-same-pax-configuration"},next:{title:"ResourceConnection",permalink:"/api/objects/resource-connection"}},d={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const r={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:r,children:t,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[i,d]=(0,o.useState)(a);return(0,n.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:i?e:r}),i&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Resort.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"resortcodestring--",level:4},{value:'<code>Resort.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"resortnamestring-",level:4},{value:'<code>Resort.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"resortdescriptionstring-",level:4},{value:"Member of",id:"member-of",level:3}];function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Contains information about the Resort."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type Resort {\n  code: String!\n  name: String\n  description: String\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"resortcodestring--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Resort.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Specifies the resort code."}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"resortnamestring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Resort.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Specifies the resort name."}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"resortdescriptionstring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Resort.",(0,n.jsx)("b",{children:"description"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Specifies the resort description."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/objects/supplement",children:(0,n.jsx)(r.code,{children:"Supplement"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,o={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:l,props:o,_owner:c.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);