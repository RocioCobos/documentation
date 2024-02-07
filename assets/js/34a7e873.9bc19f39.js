/*! For license information please see 34a7e873.9bc19f39.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46040],{82932:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>u,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>h,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>g});var i=a(17624),r=a(4552),t=a(11504);const s={id:"organizations-where-input",title:"OrganizationsWhereInput"},o=void 0,l={id:"inputs/organizations-where-input",title:"OrganizationsWhereInput",description:"Organization where input. Filters are additive (AND)",source:"@site/api/inputs/organizations-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/organizations-where-input",permalink:"/api/inputs/organizations-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"organizations-where-input",title:"OrganizationsWhereInput"},sidebar:"schemaSidebar",previous:{title:"OrganizationWhereUniqueInput",permalink:"/api/inputs/organization-where-unique-input"},next:{title:"PackageBookReference",permalink:"/api/inputs/package-book-reference"}},d={},c=()=>{const e={span:"span",...(0,r.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const n={a:"a",...(0,r.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const n={span:"span",...(0,r.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>OrganizationsWhereInput.<b>code_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationswhereinputcode_inid--",level:4},{value:'<code>OrganizationsWhereInput.<b>label</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"organizationswhereinputlabelstring-",level:4},{value:'<code>OrganizationsWhereInput.<b>owner_in</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationswhereinputowner_instring--",level:4},{value:'<code>OrganizationsWhereInput.<b>isTest</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"organizationswhereinputistestboolean-",level:4},{value:'<code>OrganizationsWhereInput.<b>includeArchived</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"organizationswhereinputincludearchivedboolean-",level:4}],p=({dataOpen:e,dataClose:n,children:a,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,r.M)()},[l,d]=(0,t.useState)(s);return(0,i.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:n}),l&&a]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Organization where input. Filters are additive (AND)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"input OrganizationsWhereInput {\n  code_in: [ID!]\n  label: String\n  owner_in: [String!]\n  isTest: Boolean\n  includeArchived: Boolean\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.h4,{id:"organizationswhereinputcode_inid--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsWhereInput.",(0,i.jsx)("b",{children:"code_in"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/api/scalars/id",children:(0,i.jsx)(n.code,{children:"[ID!]"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Filter by Organization Code"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"organizationswhereinputlabelstring-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsWhereInput.",(0,i.jsx)("b",{children:"label"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/api/scalars/string",children:(0,i.jsx)(n.code,{children:"String"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Filter by Organization Name"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"organizationswhereinputowner_instring--",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsWhereInput.",(0,i.jsx)("b",{children:"owner_in"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/api/scalars/string",children:(0,i.jsx)(n.code,{children:"[String!]"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"list"})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Filter by Owner organization"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"organizationswhereinputistestboolean-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsWhereInput.",(0,i.jsx)("b",{children:"isTest"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,i.jsx)(n.code,{children:"Boolean"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Filter by include test organizations"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"organizationswhereinputincludearchivedboolean-",children:[(0,i.jsx)(n.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsWhereInput.",(0,i.jsx)("b",{children:"includeArchived"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(n.a,{href:"/api/scalars/boolean",children:(0,i.jsx)(n.code,{children:"Boolean"})})," ",(0,i.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Filter by include archived"}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},44808:(e,n,a)=>{var i=a(11504),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,a){var i,t={},d=null,c=null;for(i in void 0!==a&&(d=""+a),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,i)&&!l.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:c,props:t,_owner:o.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},17624:(e,n,a)=>{e.exports=a(44808)},4552:(e,n,a)=>{a.d(n,{I:()=>o,M:()=>s});var i=a(11504);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);