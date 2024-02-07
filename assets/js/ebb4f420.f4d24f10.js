/*! For license information please see ebb4f420.f4d24f10.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12592],{52268:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>c,Details:()=>x,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var r=t(17624),a=t(4552),i=t(11504);const s={id:"internal-extended-info-input",title:"InternalExtendedInfoInput"},d=void 0,l={id:"inputs/internal-extended-info-input",title:"InternalExtendedInfoInput",description:"No description",source:"@site/api/inputs/internal-extended-info-input.mdx",sourceDirName:"inputs",slug:"/inputs/internal-extended-info-input",permalink:"/api/inputs/internal-extended-info-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"internal-extended-info-input",title:"InternalExtendedInfoInput"},sidebar:"schemaSidebar",previous:{title:"IntFilter",permalink:"/api/inputs/int-filter"},next:{title:"InvitationCreateInput",permalink:"/api/inputs/invitation-create-input"}},o={},c=()=>{const e={span:"span",...(0,a.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,a.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,a.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},f=[{value:"Fields",id:"fields",level:3},{value:'<code>InternalExtendedInfoInput.<b>marketplaceManager</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"internalextendedinfoinputmarketplacemanagerid-",level:4},{value:'<code>InternalExtendedInfoInput.<b>customerEngineer</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"internalextendedinfoinputcustomerengineerid-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const d={details:"details",summary:"summary",...(0,a.M)()},[l,o]=(0,i.useState)(s);return(0,r.jsxs)(d.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&t]})};function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input InternalExtendedInfoInput {\n  marketplaceManager: ID\n  customerEngineer: ID\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"internalextendedinfoinputmarketplacemanagerid-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InternalExtendedInfoInput.",(0,r.jsx)("b",{children:"marketplaceManager"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/scalars/id",children:(0,r.jsx)(n.code,{children:"ID"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(n.h4,{id:"internalextendedinfoinputcustomerengineerid-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["InternalExtendedInfoInput.",(0,r.jsx)("b",{children:"customerEngineer"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(n.a,{href:"/api/scalars/id",children:(0,r.jsx)(n.code,{children:"ID"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(n.blockquote,{children:"\n"}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/inputs/profile-update-input",children:(0,r.jsx)(n.code,{children:"ProfileUpdateInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},44808:(e,n,t)=>{var r=t(11504),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,i={},o=null,c=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:o,ref:c,props:i,_owner:d.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>s});var r=t(11504);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);