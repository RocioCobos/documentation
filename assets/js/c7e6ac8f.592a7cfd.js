/*! For license information please see c7e6ac8f.592a7cfd.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94304],{18244:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>r,metadata:()=>o,toc:()=>x});var s=t(17624),a=t(4552),i=t(11504);const r={id:"mapping-entity",title:"MappingEntity",hide_table_of_contents:!1},c=void 0,o={id:"objects/mapping-entity",title:"MappingEntity",description:"Mapping about client codes with the equivalence per supplier.",source:"@site/api/objects/mapping-entity.mdx",sourceDirName:"objects",slug:"/objects/mapping-entity",permalink:"/api/objects/mapping-entity",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"mapping-entity",title:"MappingEntity",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MappingContext",permalink:"/api/objects/mapping-context"},next:{title:"MappingInscription",permalink:"/api/objects/mapping-inscription"}},d={},l=()=>{const e={span:"span",...(0,a.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,a.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,a.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>MappingEntity.<b>code</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mappingentitycodestring--",level:4},{value:'<code>MappingEntity.<b>contexts</b></code><Bullet></Bullet><code>[Map!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mappingentitycontextsmap--",level:4},{value:'<code>MappingEntity.contexts.<b>codes</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"mappingentitycontextscodesstring--",level:5},{value:"Member of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:n,children:t,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,a.M)()},[o,d]=(0,i.useState)(r);return(0,s.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:o?e:n}),o&&t]})};function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'Mapping about client codes with the equivalence per supplier.\n@deprecated(reason: "deprecated from 2019-09-10. not operating or being used")'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"type MappingEntity {\n  code: String!\n  contexts(codes: [String!]): [Map!]\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"mappingentitycodestring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MappingEntity.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"String!"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Client code"}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"mappingentitycontextsmap--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MappingEntity.",(0,s.jsx)("b",{children:"contexts"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/objects/map",children:(0,s.jsx)(n.code,{children:"[Map!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"You can filter by output context."}),"\n",(0,s.jsxs)(n.h5,{id:"mappingentitycontextscodesstring--",children:[(0,s.jsx)(n.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["MappingEntity.contexts.",(0,s.jsx)("b",{children:"codes"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(n.a,{href:"/api/scalars/string",children:(0,s.jsx)(n.code,{children:"[String!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/api/objects/mapping-context",children:(0,s.jsx)(n.code,{children:"MappingContext"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function b(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},44808:(e,n,t)=>{var s=t(11504),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var s,i={},d=null,l=null;for(s in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)r.call(n,s)&&!o.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:a,type:e,key:d,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>r});var s=t(11504);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);