"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55745],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),g=s(a),p=o,f=g["".concat(i,".").concat(p)]||g[p]||b[p]||n;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[g]="string"==typeof e?e:o,l[1]=d;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85730:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),o=a(67294),n=a(3905);const l={id:"user-profile-data",title:"UserProfileData",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/user-profile-data",id:"objects/user-profile-data",title:"UserProfileData",description:"No description",source:"@site/api/objects/user-profile-data.mdx",sourceDirName:"objects",slug:"/objects/user-profile-data",permalink:"/api/objects/user-profile-data",draft:!1,tags:[],version:"current",frontMatter:{id:"user-profile-data",title:"UserProfileData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserOnboardingData",permalink:"/api/objects/user-onboarding-data"},next:{title:"UserProfile",permalink:"/api/objects/user-profile"}},s={},c=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileData.<b>email</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofiledatabemailbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileData.<b>firstName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofiledatabfirstnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileData.<b>lastName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofiledatablastnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileData.<b>jobTitle</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofiledatabjobtitlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileData.<b>department</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofiledatabdepartmentbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileData.<b>headquarters</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofiledatabheadquartersbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileData.<b>favouritePartners</b></code><Bullet /><code>[OrganizationEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userprofiledatabfavouritepartnersbcodeorganizationedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileData.<b>onboardingProperties</b></code><Bullet /><code>UserOnboardingData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-userprofiledatabonboardingpropertiesbcodeuseronboardingdata-",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[i,s]=(0,o.useState)(d);return(0,n.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},u={Bullet:c,SpecifiedBy:g,Badge:b,toc:p,Details:f},m="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserProfileData {\n  email: ID!\n  firstName: String\n  lastName: String\n  jobTitle: String\n  department: String\n  headquarters: String\n  favouritePartners: [OrganizationEdge]\n  onboardingProperties: UserOnboardingData\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userprofiledatabemailbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UserProfileData.",(0,n.kt)("b",null,"email"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userprofiledatabfirstnamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UserProfileData.",(0,n.kt)("b",null,"firstName"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userprofiledatablastnamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UserProfileData.",(0,n.kt)("b",null,"lastName"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userprofiledatabjobtitlebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UserProfileData.",(0,n.kt)("b",null,"jobTitle"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userprofiledatabdepartmentbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UserProfileData.",(0,n.kt)("b",null,"department"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userprofiledatabheadquartersbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UserProfileData.",(0,n.kt)("b",null,"headquarters"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userprofiledatabfavouritepartnersbcodeorganizationedge--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UserProfileData.",(0,n.kt)("b",null,"favouritePartners"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/organization-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"[OrganizationEdge]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userprofiledatabonboardingpropertiesbcodeuseronboardingdata-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UserProfileData.",(0,n.kt)("b",null,"onboardingProperties"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/user-onboarding-data"},(0,n.kt)("inlineCode",{parentName:"a"},"UserOnboardingData"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/user-profile"},(0,n.kt)("inlineCode",{parentName:"a"},"UserProfile"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);