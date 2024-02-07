/*! For license information please see b3be4d10.78c4865f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38744],{60384:(e,n,l)=>{l.r(n),l.d(n,{Badge:()=>u,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>g});var t=l(17624),i=l(4552),r=l(11504);const a={id:"client-filter",title:"ClientFilter"},s=void 0,c={id:"inputs/client-filter",title:"ClientFilter",description:'Deprecated "clients" query filter',source:"@site/api/inputs/client-filter.mdx",sourceDirName:"inputs",slug:"/inputs/client-filter",permalink:"/api/inputs/client-filter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"client-filter",title:"ClientFilter"},sidebar:"schemaSidebar",previous:{title:"ClientCreateInput",permalink:"/api/inputs/client-create-input"},next:{title:"ClientWhereInput",permalink:"/api/inputs/client-where-input"}},d={},o=()=>{const e={span:"span",...(0,i.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,i.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,i.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>ClientFilter.<b>clientID</b></code><Bullet></Bullet><code>[ID]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientfilterclientidid--",level:4},{value:'<code>ClientFilter.<b>name</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientfilternamestring--",level:4},{value:'<code>ClientFilter.<b>groupID</b></code><Bullet></Bullet><code>[ID]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientfiltergroupidid--",level:4},{value:'<code>ClientFilter.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"clientfilterisactiveboolean-",level:4},{value:'<code>ClientFilter.<b>owner</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"clientfilterownerid--",level:4},{value:'<code>ClientFilter.<b>includeArchived</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"clientfilterincludearchivedboolean-",level:4}],x=({dataOpen:e,dataClose:n,children:l,startOpen:a=!1})=>{const s={details:"details",summary:"summary",...(0,i.M)()},[c,d]=(0,r.useState)(a);return(0,t.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(s.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&l]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Deprecated "clients" query filter'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input ClientFilter {\n  clientID: [ID]\n  name: [String!]\n  groupID: [ID]\n  isActive: Boolean\n  owner: [ID!]\n  includeArchived: Boolean\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"clientfilterclientidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientFilter.",(0,t.jsx)("b",{children:"clientID"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/api/scalars/id",children:(0,t.jsx)(n.code,{children:"[ID]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"clientfilternamestring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientFilter.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/api/scalars/string",children:(0,t.jsx)(n.code,{children:"[String!]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"clientfiltergroupidid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientFilter.",(0,t.jsx)("b",{children:"groupID"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/api/scalars/id",children:(0,t.jsx)(n.code,{children:"[ID]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"clientfilterisactiveboolean-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientFilter.",(0,t.jsx)("b",{children:"isActive"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,t.jsx)(n.code,{children:"Boolean"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"clientfilterownerid--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientFilter.",(0,t.jsx)("b",{children:"owner"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/api/scalars/id",children:(0,t.jsx)(n.code,{children:"[ID!]"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"clientfilterincludearchivedboolean-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ClientFilter.",(0,t.jsx)("b",{children:"includeArchived"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,t.jsx)(n.code,{children:"Boolean"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},44808:(e,n,l)=>{var t=l(11504),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,l){var t,r={},d=null,o=null;for(t in void 0!==l&&(d=""+l),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:o,props:r,_owner:s.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},17624:(e,n,l)=>{e.exports=l(44808)},4552:(e,n,l)=>{l.d(n,{I:()=>s,M:()=>a});var t=l(11504);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);