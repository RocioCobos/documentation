/*! For license information please see dc948647.80d173cd.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13962],{25466:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>m,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>t,metadata:()=>o,toc:()=>x});var n=a(74848),r=a(28453),d=a(96540);const t={id:"members-data",title:"MembersData"},c=void 0,o={id:"types/objects/members-data",title:"MembersData",description:"Extended Members information",source:"@site/api/types/objects/members-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/members-data",permalink:"/api/types/objects/members-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"members-data",title:"MembersData"},sidebar:"schemaSidebar",previous:{title:"MembersConnection",permalink:"/api/types/objects/members-connection"},next:{title:"MembersEdge",permalink:"/api/types/objects/members-edge"}},l={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const s={a:"a",...(0,r.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const s={span:"span",...(0,r.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:s,children:a,startOpen:t=!1})=>{const c={details:"details",summary:"summary",...(0,r.R)()},[o,l]=(0,d.useState)(t);return(0,n.jsxs)(c.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:o?e:s}),o&&a]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>MembersData.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersdataidid--",level:4},{value:'<code>MembersData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersdatacodeid--",level:4},{value:'<code>MembersData.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersdatalabelstring--",level:4},{value:'<code>MembersData.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersdataisactiveboolean--",level:4},{value:'<code>MembersData.<b>type</b></code><Bullet></Bullet><code>MembersType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersdatatypememberstype--",level:4},{value:'<code>MembersData.<b>organizations</b></code><Bullet></Bullet><code>[MemberOrganizations!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersdataorganizationsmemberorganizations--",level:4},{value:'<code>MembersData.organizations.<b>orgCodes</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersdataorganizationsorgcodesstring--",level:5},{value:"Member Of",id:"member-of",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Extended Members information"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type MembersData {\n  id: ID!\n  code: ID!\n  label: String!\n  isActive: Boolean!\n  type: MembersType!\n  organizations(orgCodes: [String!]): [MemberOrganizations!]\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"membersdataidid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersData.",(0,n.jsx)("b",{children:"id"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Members unique ID. Format: integer."}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"membersdatacodeid--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersData.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,n.jsx)(s.code,{children:"ID!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Members unique code"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"membersdatalabelstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersData.",(0,n.jsx)("b",{children:"label"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"String!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Members name"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"membersdataisactiveboolean--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersData.",(0,n.jsx)("b",{children:"isActive"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,n.jsx)(s.code,{children:"Boolean!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Indicates whether a Members is active."}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"membersdatatypememberstype--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersData.",(0,n.jsx)("b",{children:"type"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/enums/members-type",children:(0,n.jsx)(s.code,{children:"MembersType!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Members type: User or Apikey"}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"membersdataorganizationsmemberorganizations--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersData.",(0,n.jsx)("b",{children:"organizations"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/objects/member-organizations",children:(0,n.jsx)(s.code,{children:"[MemberOrganizations!]"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Organization associated to the member"}),"\n",(0,n.jsxs)(s.h5,{id:"membersdataorganizationsorgcodesstring--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersData.organizations.",(0,n.jsx)("b",{children:"orgCodes"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,n.jsx)(s.code,{children:"[String!]"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/types/objects/members",children:(0,n.jsx)(s.code,{children:"Members"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(i,{}),(0,n.jsx)(s.a,{href:"/api/types/objects/organization-members",children:(0,n.jsx)(s.code,{children:"OrganizationMembers"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},21020:(e,s,a)=>{var n=a(96540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,a){var n,d={},l=null,i=null;for(n in void 0!==a&&(l=""+a),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(i=s.ref),s)t.call(s,n)&&!o.hasOwnProperty(n)&&(d[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===d[n]&&(d[n]=s[n]);return{$$typeof:r,type:e,key:l,ref:i,props:d,_owner:c.current}}s.Fragment=d,s.jsx=l,s.jsxs=l},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>c});var n=a(96540);const r={},d=n.createContext(r);function t(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);