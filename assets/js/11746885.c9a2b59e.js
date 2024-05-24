/*! For license information please see 11746885.c9a2b59e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14227],{45153:(e,t,s)=>{s.r(t),s.d(t,{Badge:()=>x,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=s(74848),a=s(28453),r=s(96540);const o={id:"view",title:"View",hide_table_of_contents:!1},d=void 0,i={id:"objects/view",title:"View",description:"No description",source:"@site/api/objects/view.mdx",sourceDirName:"objects",slug:"/objects/view",permalink:"/api/objects/view",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"view",title:"View",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"VehicleBook",permalink:"/api/objects/vehicle-book"},next:{title:"Warning",permalink:"/api/objects/warning"}},c={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const t={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const t={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:t,children:s,startOpen:o=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[i,c]=(0,r.useState)(o);return(0,n.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&s]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>View.<b>texts</b></code><Bullet></Bullet><code>[Text!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewtextstext--",level:4},{value:'<code>View.texts.<b>languages</b></code><Bullet></Bullet><code>[Language!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewtextslanguageslanguage--",level:5},{value:'<code>View.<b>viewCode</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"viewviewcodestring--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type View {\n  texts(languages: [Language!]): [Text!]\n  viewCode: String!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"viewtextstext--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["View.",(0,n.jsx)("b",{children:"texts"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/objects/text",children:(0,n.jsx)(t.code,{children:"[Text!]"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Contains the descriptive of view."}),"\n",(0,n.jsxs)(t.h5,{id:"viewtextslanguageslanguage--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["View.texts.",(0,n.jsx)("b",{children:"languages"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/scalars/language",children:(0,n.jsx)(t.code,{children:"[Language!]"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"viewviewcodestring--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["View.",(0,n.jsx)("b",{children:"viewCode"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/scalars/string",children:(0,n.jsx)(t.code,{children:"String!"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Containg the view code"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/room-data",children:(0,n.jsx)(t.code,{children:"RoomData"})})," ",(0,n.jsx)(x,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},21020:(e,t,s)=>{var n=s(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,r={},c=null,l=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!i.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:l,props:r,_owner:d.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},74848:(e,t,s)=>{e.exports=s(21020)},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var n=s(96540);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);