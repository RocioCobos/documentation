/*! For license information please see 02c9c041.2d663b90.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96481],{85908:(e,r,l)=>{l.r(r),l.d(r,{Badge:()=>h,Bullet:()=>t,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>n,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>y});var a=l(74848),o=l(28453),i=l(96540);const s={id:"social-query",title:"SocialQuery",hide_table_of_contents:!1},n=void 0,c={id:"objects/social-query",title:"SocialQuery",description:"No description",source:"@site/api/objects/social-query.mdx",sourceDirName:"objects",slug:"/objects/social-query",permalink:"/api/objects/social-query",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"social-query",title:"SocialQuery",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SocialMutation",permalink:"/api/objects/social-mutation"},next:{title:"SocialSubCategoryConnection",permalink:"/api/objects/social-sub-category-connection"}},d={},t=()=>{const e={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,o.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const r={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:r,children:l,startOpen:s=!1})=>{const n={details:"details",summary:"summary",...(0,o.R)()},[c,d]=(0,i.useState)(s);return(0,a.jsxs)(n.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(n.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&l]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>SocialQuery.<b>profile</b></code><Bullet></Bullet><code>ProfileV2!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryprofileprofilev2--",level:4},{value:'<code>SocialQuery.profile.<b>where</b></code><Bullet></Bullet><code>ProfileWhereUniqueInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryprofilewhereprofilewhereuniqueinput--",level:5},{value:'<code>SocialQuery.<b>allProfilesV2</b></code><Bullet></Bullet><code>ProfileConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryallprofilesv2profileconnection--",level:4},{value:'<code>SocialQuery.allProfilesV2.<b>cursor</b></code><Bullet></Bullet><code>ProfileWhereUniqueInput</code> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryallprofilesv2cursorprofilewhereuniqueinput-",level:5},{value:'<code>SocialQuery.allProfilesV2.<b>orderBy</b></code><Bullet></Bullet><code>[ProfileOrderByInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryallprofilesv2orderbyprofileorderbyinput--",level:5},{value:'<code>SocialQuery.allProfilesV2.<b>skip</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryallprofilesv2skipint-",level:5},{value:'<code>SocialQuery.allProfilesV2.<b>take</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryallprofilesv2takeint-",level:5},{value:'<code>SocialQuery.allProfilesV2.<b>where</b></code><Bullet></Bullet><code>ProfileWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryallprofilesv2whereprofilewhereinput-",level:5},{value:'<code>SocialQuery.<b>category</b></code><Bullet></Bullet><code>SocialCategory!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialquerycategorysocialcategory--",level:4},{value:'<code>SocialQuery.category.<b>where</b></code><Bullet></Bullet><code>CategoryWhereUniqueInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialquerycategorywherecategorywhereuniqueinput--",level:5},{value:'<code>SocialQuery.<b>allCategories</b></code><Bullet></Bullet><code>SocialCategoryConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryallcategoriessocialcategoryconnection--",level:4},{value:'<code>SocialQuery.allCategories.<b>where</b></code><Bullet></Bullet><code>CategoryWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryallcategorieswherecategorywhereinput-",level:5},{value:'<code>SocialQuery.<b>userProfile</b></code><Bullet></Bullet><code>UserProfile!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryuserprofileuserprofile--",level:4},{value:'<code>SocialQuery.userProfile.<b>where</b></code><Bullet></Bullet><code>UserProfileWhereUniqueInput</code> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryuserprofilewhereuserprofilewhereuniqueinput-",level:5},{value:'<code>SocialQuery.<b>invitations</b></code><Bullet></Bullet><code>InvitationConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryinvitationsinvitationconnection--",level:4},{value:'<code>SocialQuery.invitations.<b>where</b></code><Bullet></Bullet><code>InvitationWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"socialqueryinvitationswhereinvitationwhereinput-",level:5},{value:"Returned by",id:"returned-by",level:3}];function b(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"No description"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-graphql",children:"type SocialQuery {\n  profile(where: ProfileWhereUniqueInput!): ProfileV2!\n  allProfilesV2(\n    cursor: ProfileWhereUniqueInput\n    orderBy: [ProfileOrderByInput!]\n    skip: Int\n    take: Int\n    where: ProfileWhereInput\n  ): ProfileConnection!\n  category(where: CategoryWhereUniqueInput!): SocialCategory!\n  allCategories(where: CategoryWhereInput): SocialCategoryConnection!\n  userProfile(where: UserProfileWhereUniqueInput): UserProfile!\n  invitations(where: InvitationWhereInput): InvitationConnection!\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(r.h4,{id:"socialqueryprofileprofilev2--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.",(0,a.jsx)("b",{children:"profile"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/objects/profile-v2",children:(0,a.jsx)(r.code,{children:"ProfileV2!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.h5,{id:"socialqueryprofilewhereprofilewhereuniqueinput--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.profile.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/inputs/profile-where-unique-input",children:(0,a.jsx)(r.code,{children:"ProfileWhereUniqueInput!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(r.h4,{id:"socialqueryallprofilesv2profileconnection--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.",(0,a.jsx)("b",{children:"allProfilesV2"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/objects/profile-connection",children:(0,a.jsx)(r.code,{children:"ProfileConnection!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.h5,{id:"socialqueryallprofilesv2cursorprofilewhereuniqueinput-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.allProfilesV2.",(0,a.jsx)("b",{children:"cursor"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/inputs/profile-where-unique-input",children:(0,a.jsx)(r.code,{children:"ProfileWhereUniqueInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(r.h5,{id:"socialqueryallprofilesv2orderbyprofileorderbyinput--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.allProfilesV2.",(0,a.jsx)("b",{children:"orderBy"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/inputs/profile-order-by-input",children:(0,a.jsx)(r.code,{children:"[ProfileOrderByInput!]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(r.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(r.h5,{id:"socialqueryallprofilesv2skipint-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.allProfilesV2.",(0,a.jsx)("b",{children:"skip"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/scalars/int",children:(0,a.jsx)(r.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(r.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(r.h5,{id:"socialqueryallprofilesv2takeint-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.allProfilesV2.",(0,a.jsx)("b",{children:"take"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/scalars/int",children:(0,a.jsx)(r.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(r.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(r.h5,{id:"socialqueryallprofilesv2whereprofilewhereinput-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.allProfilesV2.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/inputs/profile-where-input",children:(0,a.jsx)(r.code,{children:"ProfileWhereInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsx)(r.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(r.h4,{id:"socialquerycategorysocialcategory--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.",(0,a.jsx)("b",{children:"category"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/objects/social-category",children:(0,a.jsx)(r.code,{children:"SocialCategory!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.h5,{id:"socialquerycategorywherecategorywhereuniqueinput--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.category.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/inputs/category-where-unique-input",children:(0,a.jsx)(r.code,{children:"CategoryWhereUniqueInput!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(r.h4,{id:"socialqueryallcategoriessocialcategoryconnection--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.",(0,a.jsx)("b",{children:"allCategories"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/objects/social-category-connection",children:(0,a.jsx)(r.code,{children:"SocialCategoryConnection!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.h5,{id:"socialqueryallcategorieswherecategorywhereinput-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.allCategories.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/inputs/category-where-input",children:(0,a.jsx)(r.code,{children:"CategoryWhereInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(r.h4,{id:"socialqueryuserprofileuserprofile--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.",(0,a.jsx)("b",{children:"userProfile"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/objects/user-profile",children:(0,a.jsx)(r.code,{children:"UserProfile!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.h5,{id:"socialqueryuserprofilewhereuserprofilewhereuniqueinput-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.userProfile.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/inputs/user-profile-where-unique-input",children:(0,a.jsx)(r.code,{children:"UserProfileWhereUniqueInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsxs)(r.h4,{id:"socialqueryinvitationsinvitationconnection--",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.",(0,a.jsx)("b",{children:"invitations"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/objects/invitation-connection",children:(0,a.jsx)(r.code,{children:"InvitationConnection!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.h5,{id:"socialqueryinvitationswhereinvitationwhereinput-",children:[(0,a.jsx)(r.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialQuery.invitations.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(t,{}),(0,a.jsx)(r.a,{href:"/api/inputs/invitation-where-input",children:(0,a.jsx)(r.code,{children:"InvitationWhereInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/api/queries/social",children:(0,a.jsx)(r.code,{children:"social"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"query"})]})]})}function x(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},21020:(e,r,l)=>{var a=l(96540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,l){var a,i={},d=null,t=null;for(a in void 0!==l&&(d=""+l),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(t=r.ref),r)s.call(r,a)&&!c.hasOwnProperty(a)&&(i[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===i[a]&&(i[a]=r[a]);return{$$typeof:o,type:e,key:d,ref:t,props:i,_owner:n.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},74848:(e,r,l)=>{e.exports=l(21020)},28453:(e,r,l)=>{l.d(r,{R:()=>s,x:()=>n});var a=l(96540);const o={},i=a.createContext(o);function s(e){const r=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);