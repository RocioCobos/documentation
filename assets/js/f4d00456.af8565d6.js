/*! For license information please see f4d00456.af8565d6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83637],{99828:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var d=t(17624),s=t(4552),a=t(11504);const r={id:"add-on",title:"AddOn"},o=void 0,l={id:"objects/add-on",title:"AddOn",description:"Additional information about the option",source:"@site/api/objects/add-on.mdx",sourceDirName:"objects",slug:"/objects/add-on",permalink:"/api/objects/add-on",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"add-on",title:"AddOn"},sidebar:"schemaSidebar",previous:{title:"Activity",permalink:"/api/objects/activity"},next:{title:"AddOns",permalink:"/api/objects/add-ons"}},c={},i=()=>{const e={span:"span",...(0,s.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.M)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,s.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AddOn.<b>key</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addonkeystring--",level:4},{value:'<code>AddOn.<b>value</b></code><Bullet></Bullet><code>JSON!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"addonvaluejson--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,s.M)()},[l,c]=(0,a.useState)(r);return(0,d.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Additional information about the option"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-graphql",children:"type AddOn {\n  key: String!\n  value: JSON!\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(n.h4,{id:"addonkeystring--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddOn.",(0,d.jsx)("b",{children:"key"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(n.a,{href:"/api/scalars/string",children:(0,d.jsx)(n.code,{children:"String!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Contains keyword/ID to identify the AddOn."}),"\n"]}),"\n",(0,d.jsxs)(n.h4,{id:"addonvaluejson--",children:[(0,d.jsx)(n.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["AddOn.",(0,d.jsx)("b",{children:"value"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(n.a,{href:"/api/scalars/json",children:(0,d.jsx)(n.code,{children:"JSON!"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Contains AddOn values."}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/api/objects/add-ons",children:(0,d.jsx)(n.code,{children:"AddOns"})})," ",(0,d.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(b,{...e})}):b(e)}},44808:(e,n,t)=>{var d=t(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var d,a={},c=null,i=null;for(d in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(i=n.ref),n)r.call(n,d)&&!l.hasOwnProperty(d)&&(a[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===a[d]&&(a[d]=n[d]);return{$$typeof:s,type:e,key:c,ref:i,props:a,_owner:o.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var d=t(11504);const s={},a=d.createContext(s);function r(e){const n=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);