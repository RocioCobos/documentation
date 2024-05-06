/*! For license information please see 9f95544b.0e7ed00b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17677],{92915:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>b,Bullet:()=>c,Details:()=>h,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>x});var s=n(74848),t=n(28453),o=n(96540);const i={id:"organizations-data",title:"OrganizationsData",hide_table_of_contents:!1},r=void 0,d={id:"objects/organizations-data",title:"OrganizationsData",description:"Extended Organization information",source:"@site/api/objects/organizations-data.mdx",sourceDirName:"objects",slug:"/objects/organizations-data",permalink:"/api/objects/organizations-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"organizations-data",title:"OrganizationsData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OrganizationsConnection",permalink:"/api/objects/organizations-connection"},next:{title:"OrganizationsEdge",permalink:"/api/objects/organizations-edge"}},l={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const a={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:n,startOpen:i=!1})=>{const r={details:"details",summary:"summary",...(0,t.R)()},[d,l]=(0,o.useState)(i);return(0,s.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:a}),d&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>OrganizationsData.<b>id</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationsdataidid--",level:4},{value:'<code>OrganizationsData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationsdatacodeid--",level:4},{value:'<code>OrganizationsData.<b>label</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationsdatalabelstring--",level:4},{value:'<code>OrganizationsData.<b>owner</b></code><Bullet></Bullet><code>Organizations</code> <Badge class="badge badge--secondary"></Badge>',id:"organizationsdataownerorganizations-",level:4},{value:'<code>OrganizationsData.<b>isTest</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationsdataistestboolean--",level:4},{value:'<code>OrganizationsData.<b>members</b></code><Bullet></Bullet><code>[OrganizationMembers!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationsdatamembersorganizationmembers--",level:4},{value:"Member of",id:"member-of",level:3}];function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Extended Organization information"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type OrganizationsData {\n  id: ID!\n  code: ID!\n  label: String!\n  owner: Organizations\n  isTest: Boolean!\n  members: [OrganizationMembers!]\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"organizationsdataidid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsData.",(0,s.jsx)("b",{children:"id"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Organization unique ID. Format: integer."}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"organizationsdatacodeid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsData.",(0,s.jsx)("b",{children:"code"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Organization unique code"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"organizationsdatalabelstring--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsData.",(0,s.jsx)("b",{children:"label"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/string",children:(0,s.jsx)(a.code,{children:"String!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Organization name"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"organizationsdataownerorganizations-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsData.",(0,s.jsx)("b",{children:"owner"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/objects/organizations",children:(0,s.jsx)(a.code,{children:"Organizations"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Indicates the owner organization: NOT MEMBER"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"organizationsdataistestboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsData.",(0,s.jsx)("b",{children:"isTest"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Inidcates if the organization is for testing purpose"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"organizationsdatamembersorganizationmembers--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["OrganizationsData.",(0,s.jsx)("b",{children:"members"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/objects/organization-members",children:(0,s.jsx)(a.code,{children:"[OrganizationMembers!]"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"All organization members"}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/objects/member-organizations",children:(0,s.jsx)(a.code,{children:"MemberOrganizations"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/objects/organizations",children:(0,s.jsx)(a.code,{children:"Organizations"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},21020:(e,a,n)=>{var s=n(96540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,n){var s,o={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(c=a.ref),a)i.call(a,s)&&!d.hasOwnProperty(s)&&(o[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===o[s]&&(o[s]=a[s]);return{$$typeof:t,type:e,key:l,ref:c,props:o,_owner:r.current}}a.Fragment=o,a.jsx=l,a.jsxs=l},74848:(e,a,n)=>{e.exports=n(21020)},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>r});var s=n(96540);const t={},o=s.createContext(t);function i(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);