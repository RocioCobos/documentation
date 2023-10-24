"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=r.createContext({}),i=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(a),f=l,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return a?r.createElement(m,n(n({ref:t},c),{},{components:a})):r.createElement(m,n({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,n=new Array(o);n[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:l,n[1]=s;for(var i=2;i<o;i++)n[i]=a[i];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},91445:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>s,default:()=>y,frontMatter:()=>n,metadata:()=>d,toc:()=>f});var r=a(87462),l=a(67294),o=a(3905);const n={id:"user-profile",title:"UserProfile",hide_table_of_contents:!1},s=void 0,d={unversionedId:"objects/user-profile",id:"objects/user-profile",title:"UserProfile",description:"No description",source:"@site/api/objects/user-profile.mdx",sourceDirName:"objects",slug:"/objects/user-profile",permalink:"/api/objects/user-profile",draft:!1,tags:[],version:"current",frontMatter:{id:"user-profile",title:"UserProfile",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserProfileData",permalink:"/api/objects/user-profile-data"},next:{title:"VehicleAttributes",permalink:"/api/objects/vehicle-attributes"}},i={},c=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfile.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofilebcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfile.<b>userProfileData</b></code><Bullet /><code>UserProfileData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userprofilebuserprofiledatabcodeuserprofiledata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfile.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userprofilebadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfile.<b>createdAt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofilebcreatedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfile.<b>updatedAt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofilebupdatedatbcodedatetime-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:s=!1}=e;const[d,i]=(0,l.useState)(s);return(0,o.kt)("details",(0,r.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&n)},b={Bullet:c,SpecifiedBy:p,Badge:u,toc:f,Details:m},g="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserProfile {\n  code: ID!\n  userProfileData: UserProfileData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime\n  updatedAt: DateTime\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userprofilebcodebcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserProfile.",(0,o.kt)("b",null,"code"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userprofilebuserprofiledatabcodeuserprofiledata-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserProfile.",(0,o.kt)("b",null,"userProfileData"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/user-profile-data"},(0,o.kt)("inlineCode",{parentName:"a"},"UserProfileData"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userprofilebadvisemessagebcodeadvisemessage--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserProfile.",(0,o.kt)("b",null,"adviseMessage"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,o.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-userprofileadvisemessageblevelbcodeadvisemessagelevel--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserProfile.adviseMessage.",(0,o.kt)("b",null,"level"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,o.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userprofilebcreatedatbcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserProfile.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userprofilebupdatedatbcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserProfile.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/social-mutation"},(0,o.kt)("inlineCode",{parentName:"a"},"SocialMutation"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/social-query"},(0,o.kt)("inlineCode",{parentName:"a"},"SocialQuery"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);