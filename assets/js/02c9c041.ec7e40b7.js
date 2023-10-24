"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var o=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=o.createContext({}),d=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),y=l,b=u["".concat(c,".").concat(y)]||u[y]||p[y]||n;return a?o.createElement(b,r(r({ref:t},s),{},{components:a})):o.createElement(b,r({ref:t},s))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<n;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}y.displayName="MDXCreateElement"},34734:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>y});var o=a(87462),l=a(67294),n=a(3905);const r={id:"social-query",title:"SocialQuery",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/social-query",id:"objects/social-query",title:"SocialQuery",description:"No description",source:"@site/api/objects/social-query.mdx",sourceDirName:"objects",slug:"/objects/social-query",permalink:"/api/objects/social-query",draft:!1,tags:[],version:"current",frontMatter:{id:"social-query",title:"SocialQuery",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SocialMutation",permalink:"/api/objects/social-mutation"},next:{title:"SocialSubCategoryConnection",permalink:"/api/objects/social-sub-category-connection"}},d={},s=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.<b>profile</b></code><Bullet /><code>ProfileV2!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-socialquerybprofilebcodeprofilev2--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.<b>allProfilesV2</b></code><Bullet /><code>ProfileConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-socialqueryballprofilesv2bcodeprofileconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.allProfilesV2.<b>orderBy</b></code><Bullet /><code>[ProfileOrderByInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-socialqueryallprofilesv2borderbybcodeprofileorderbyinput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.allProfilesV2.<b>skip</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-socialqueryallprofilesv2bskipbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.allProfilesV2.<b>take</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-socialqueryallprofilesv2btakebcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.allProfilesV2.<b>where</b></code><Bullet /><code>ProfileWhereInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-socialqueryallprofilesv2bwherebcodeprofilewhereinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.<b>category</b></code><Bullet /><code>SocialCategory!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-socialquerybcategorybcodesocialcategory--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.<b>allCategories</b></code><Bullet /><code>SocialCategoryConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-socialqueryballcategoriesbcodesocialcategoryconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.<b>userProfile</b></code><Bullet /><code>UserProfile!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-socialquerybuserprofilebcodeuserprofile--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SocialQuery.<b>invitations</b></code><Bullet /><code>InvitationConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-socialquerybinvitationsbcodeinvitationconnection--",level:4},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:i=!1}=e;const[c,d]=(0,l.useState)(i);return(0,n.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&r)},g={Bullet:s,SpecifiedBy:u,Badge:p,toc:y,Details:b},f="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,o.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type SocialQuery {\n  profile(where: ProfileWhereUniqueInput!): ProfileV2!\n  allProfilesV2(\n    cursor: ProfileWhereUniqueInput\n    orderBy: [ProfileOrderByInput!]\n    skip: Int\n    take: Int\n    where: ProfileWhereInput\n  ): ProfileConnection!\n  category(where: CategoryWhereUniqueInput!): SocialCategory!\n  allCategories(where: CategoryWhereInput): SocialCategoryConnection!\n  userProfile(where: UserProfileWhereUniqueInput): UserProfile!\n  invitations(where: InvitationWhereInput): InvitationConnection!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-socialquerybprofilebcodeprofilev2--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.",(0,n.kt)("b",null,"profile"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/profile-v2"},(0,n.kt)("inlineCode",{parentName:"a"},"ProfileV2!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-socialqueryprofilebwherebcodeprofilewhereuniqueinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.profile.",(0,n.kt)("b",null,"where"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/profile-where-unique-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ProfileWhereUniqueInput!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-socialqueryballprofilesv2bcodeprofileconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.",(0,n.kt)("b",null,"allProfilesV2"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/profile-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"ProfileConnection!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-socialqueryallprofilesv2bcursorbcodeprofilewhereuniqueinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.allProfilesV2.",(0,n.kt)("b",null,"cursor"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/profile-where-unique-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ProfileWhereUniqueInput"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h5",{id:"code-style-fontweight-normal-socialqueryallprofilesv2borderbybcodeprofileorderbyinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.allProfilesV2.",(0,n.kt)("b",null,"orderBy"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/profile-order-by-input"},(0,n.kt)("inlineCode",{parentName:"a"},"[ProfileOrderByInput!]"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h5",{id:"code-style-fontweight-normal-socialqueryallprofilesv2bskipbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.allProfilesV2.",(0,n.kt)("b",null,"skip"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h5",{id:"code-style-fontweight-normal-socialqueryallprofilesv2btakebcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.allProfilesV2.",(0,n.kt)("b",null,"take"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h5",{id:"code-style-fontweight-normal-socialqueryallprofilesv2bwherebcodeprofilewhereinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.allProfilesV2.",(0,n.kt)("b",null,"where"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/profile-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ProfileWhereInput"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-socialquerybcategorybcodesocialcategory--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.",(0,n.kt)("b",null,"category"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/social-category"},(0,n.kt)("inlineCode",{parentName:"a"},"SocialCategory!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-socialquerycategorybwherebcodecategorywhereuniqueinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.category.",(0,n.kt)("b",null,"where"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/category-where-unique-input"},(0,n.kt)("inlineCode",{parentName:"a"},"CategoryWhereUniqueInput!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-socialqueryballcategoriesbcodesocialcategoryconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.",(0,n.kt)("b",null,"allCategories"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/social-category-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"SocialCategoryConnection!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-socialqueryallcategoriesbwherebcodecategorywhereinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.allCategories.",(0,n.kt)("b",null,"where"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/category-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"CategoryWhereInput"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-socialquerybuserprofilebcodeuserprofile--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.",(0,n.kt)("b",null,"userProfile"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/user-profile"},(0,n.kt)("inlineCode",{parentName:"a"},"UserProfile!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-socialqueryuserprofilebwherebcodeuserprofilewhereuniqueinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.userProfile.",(0,n.kt)("b",null,"where"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/user-profile-where-unique-input"},(0,n.kt)("inlineCode",{parentName:"a"},"UserProfileWhereUniqueInput"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-socialquerybinvitationsbcodeinvitationconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.",(0,n.kt)("b",null,"invitations"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/invitation-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"InvitationConnection!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-socialqueryinvitationsbwherebcodeinvitationwhereinput-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SocialQuery.invitations.",(0,n.kt)("b",null,"where"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/invitation-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"InvitationWhereInput"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/queries/social"},(0,n.kt)("inlineCode",{parentName:"a"},"social"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);