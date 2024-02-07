/*! For license information please see e30f7caf.9f25a15a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7784],{76148:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=t(17624),r=t(4552),i=t(11504);const o={id:"organization-where-unique-input",title:"OrganizationWhereUniqueInput"},s=void 0,c={id:"inputs/organization-where-unique-input",title:"OrganizationWhereUniqueInput",description:"Filter for unique organization query",source:"@site/api/inputs/organization-where-unique-input.mdx",sourceDirName:"inputs",slug:"/inputs/organization-where-unique-input",permalink:"/api/inputs/organization-where-unique-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"organization-where-unique-input",title:"OrganizationWhereUniqueInput"},sidebar:"schemaSidebar",previous:{title:"OneStepBookRoomInput",permalink:"/api/inputs/one-step-book-room-input"},next:{title:"OrganizationsWhereInput",permalink:"/api/inputs/organizations-where-input"}},l={},d=()=>{const e={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,r.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,r.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>OrganizationWhereUniqueInput.<b>search</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationwhereuniqueinputsearchid--",level:4},{value:'<code>OrganizationWhereUniqueInput.<b>searchBy</b></code><Bullet></Bullet><code>OrganizationSearchByOptions!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationwhereuniqueinputsearchbyorganizationsearchbyoptions--",level:4}],g=({dataOpen:e,dataClose:n,children:t,startOpen:o=!1})=>{const s={details:"details",summary:"summary",...(0,r.M)()},[c,l]=(0,i.useState)(o);return(0,a.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})};function f(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Filter for unique organization query"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"input OrganizationWhereUniqueInput {\n  search: ID!\n  searchBy: OrganizationSearchByOptions!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"organizationwhereuniqueinputsearchid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationWhereUniqueInput.",(0,a.jsx)("b",{children:"search"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"organizationwhereuniqueinputsearchbyorganizationsearchbyoptions--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationWhereUniqueInput.",(0,a.jsx)("b",{children:"searchBy"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(n.a,{href:"/api/enums/organization-search-by-options",children:(0,a.jsx)(n.code,{children:"OrganizationSearchByOptions!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"})]})}function x(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},44808:(e,n,t)=>{var a=t(11504),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,i={},l=null,d=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,a)&&!c.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:r,type:e,key:l,ref:d,props:i,_owner:s.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>o});var a=t(11504);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);