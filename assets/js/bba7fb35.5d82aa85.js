/*! For license information please see bba7fb35.5d82aa85.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64959],{53352:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>x});var n=t(74848),a=t(28453),i=t(96540);const s={id:"search-criteria-code-where-input",title:"SearchCriteriaCodeWhereInput"},c=void 0,d={id:"types/inputs/search-criteria-code-where-input",title:"SearchCriteriaCodeWhereInput",description:"No description",source:"@site/api/types/inputs/search-criteria-code-where-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/search-criteria-code-where-input",permalink:"/api/types/inputs/search-criteria-code-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"search-criteria-code-where-input",title:"SearchCriteriaCodeWhereInput"},sidebar:"schemaSidebar",previous:{title:"RoomSetUpUpdateInput",permalink:"/api/types/inputs/room-set-up-update-input"},next:{title:"SearchCriteriaCodeWhereUniqueInput",permalink:"/api/types/inputs/search-criteria-code-where-unique-input"}},o={},l=()=>{const e={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const r={a:"a",...(0,a.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,a.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:r,children:t,startOpen:s=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[d,o]=(0,i.useState)(s);return(0,n.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&t]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>SearchCriteriaCodeWhereInput.<b>code_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriacodewhereinputcode_inid--",level:4},{value:'<code>SearchCriteriaCodeWhereInput.<b>supplier_in</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriacodewhereinputsupplier_inid--",level:4}];function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"No description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"input SearchCriteriaCodeWhereInput {\n  code_in: [ID!]\n  supplier_in: ID!\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"searchcriteriacodewhereinputcode_inid--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaCodeWhereInput.",(0,n.jsx)("b",{children:"code_in"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(r.code,{children:"[ID!]"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"searchcriteriacodewhereinputsupplier_inid--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaCodeWhereInput.",(0,n.jsx)("b",{children:"supplier_in"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(r.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(r.code,{children:"ID!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"})]})}function m(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,r,t)=>{var n=t(96540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,i={},o=null,l=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!d.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:a,type:e,key:o,ref:l,props:i,_owner:c.current}}r.Fragment=i,r.jsx=o,r.jsxs=o},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var n=t(96540);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);