"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,g=u["".concat(d,".").concat(f)]||u[f]||c[f]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1622:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>f});var r=n(87462),a=n(67294),l=n(3905);const o={id:"user-profile-update-input",title:"UserProfileUpdateInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"inputs/user-profile-update-input",id:"inputs/user-profile-update-input",title:"UserProfileUpdateInput",description:"No description",source:"@site/api/inputs/user-profile-update-input.mdx",sourceDirName:"inputs",slug:"/inputs/user-profile-update-input",permalink:"/api/inputs/user-profile-update-input",draft:!1,tags:[],version:"current",frontMatter:{id:"user-profile-update-input",title:"UserProfileUpdateInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserProfileCreateInput",permalink:"/api/inputs/user-profile-create-input"},next:{title:"UserProfileWhereUniqueInput",permalink:"/api/inputs/user-profile-where-unique-input"}},p={},s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileUpdateInput.<b>email</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofileupdateinputbemailbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileUpdateInput.<b>firstName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofileupdateinputbfirstnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileUpdateInput.<b>lastName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofileupdateinputblastnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileUpdateInput.<b>jobTitle</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofileupdateinputbjobtitlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileUpdateInput.<b>department</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofileupdateinputbdepartmentbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileUpdateInput.<b>headquarters</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userprofileupdateinputbheadquartersbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileUpdateInput.<b>onboardingProperties</b></code><Bullet /><code>UserOnboardingUpdateInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userprofileupdateinputbonboardingpropertiesbcodeuseronboardingupdateinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UserProfileUpdateInput.<b>partnersIncludedInInput</b></code><Bullet /><code>PartnersIncludedInInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-userprofileupdateinputbpartnersincludedininputbcodepartnersincludedininput-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[d,p]=(0,a.useState)(i);return(0,l.kt)("details",(0,r.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&o)},b={Bullet:s,SpecifiedBy:u,Badge:c,toc:f,Details:g},m="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input UserProfileUpdateInput {\n  email: ID\n  firstName: String\n  lastName: String\n  jobTitle: String\n  department: String\n  headquarters: String\n  onboardingProperties: UserOnboardingUpdateInput\n  partnersIncludedInInput: PartnersIncludedInInput\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userprofileupdateinputbemailbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserProfileUpdateInput.",(0,l.kt)("b",null,"email"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userprofileupdateinputbfirstnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserProfileUpdateInput.",(0,l.kt)("b",null,"firstName"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userprofileupdateinputblastnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserProfileUpdateInput.",(0,l.kt)("b",null,"lastName"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userprofileupdateinputbjobtitlebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserProfileUpdateInput.",(0,l.kt)("b",null,"jobTitle"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userprofileupdateinputbdepartmentbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserProfileUpdateInput.",(0,l.kt)("b",null,"department"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userprofileupdateinputbheadquartersbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserProfileUpdateInput.",(0,l.kt)("b",null,"headquarters"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userprofileupdateinputbonboardingpropertiesbcodeuseronboardingupdateinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserProfileUpdateInput.",(0,l.kt)("b",null,"onboardingProperties"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/user-onboarding-update-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UserOnboardingUpdateInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-userprofileupdateinputbpartnersincludedininputbcodepartnersincludedininput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"UserProfileUpdateInput.",(0,l.kt)("b",null,"partnersIncludedInInput"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/partners-included-in-input"},(0,l.kt)("inlineCode",{parentName:"a"},"PartnersIncludedInInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}y.isMDXComponent=!0}}]);