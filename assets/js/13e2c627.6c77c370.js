/*! For license information please see 13e2c627.6c77c370.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14172],{67484:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=t(17624),s=t(4552),r=t(11504);const o={id:"map",title:"Map"},c=void 0,d={id:"objects/map",title:"Map",description:"Map codes.",source:"@site/api/objects/map.mdx",sourceDirName:"objects",slug:"/objects/map",permalink:"/api/objects/map",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"map",title:"Map"},sidebar:"schemaSidebar",previous:{title:"MandatoryFee",permalink:"/api/objects/mandatory-fee"},next:{title:"MappingContext",permalink:"/api/objects/mapping-context"}},l={},i=()=>{const e={span:"span",...(0,s.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,s.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const n={span:"span",...(0,s.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>Map.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mapcodestring--",level:4},{value:'<code>Map.<b>maps</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mapmapsstring--",level:4},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.M)()},[d,l]=(0,r.useState)(o);return(0,a.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:'Map codes.\n@deprecated (reason: "deprecated from 2019-09-10. Not operating or being used")'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Map {\n  code: String!\n  maps: [String!]\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"mapcodestring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Map.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/api/scalars/string",children:(0,a.jsx)(n.code,{children:"String!"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Context code."}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"mapmapsstring--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Map.",(0,a.jsx)("b",{children:"maps"})]})}),(0,a.jsx)(i,{}),(0,a.jsx)(n.a,{href:"/api/scalars/string",children:(0,a.jsx)(n.code,{children:"[String!]"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Equivalences of the supplier for the client code."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/objects/mapping-entity",children:(0,a.jsx)(n.code,{children:"MappingEntity"})})," ",(0,a.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},44808:(e,n,t)=>{var a=t(11504),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,r={},l=null,i=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(i=n.ref),n)o.call(n,a)&&!d.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===r[a]&&(r[a]=n[a]);return{$$typeof:s,type:e,key:l,ref:i,props:r,_owner:c.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var a=t(11504);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);