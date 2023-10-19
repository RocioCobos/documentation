"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,b=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54607:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var a=n(87462),r=n(67294),o=n(3905);const i={id:"organizations-where-input",title:"OrganizationsWhereInput",hide_table_of_contents:!1},l=void 0,s={unversionedId:"inputs/organizations-where-input",id:"inputs/organizations-where-input",title:"OrganizationsWhereInput",description:"Organization where input. Filters are additive (AND)",source:"@site/api/inputs/organizations-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/organizations-where-input",permalink:"/api/inputs/organizations-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"organizations-where-input",title:"OrganizationsWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OrganizationWhereUniqueInput",permalink:"/api/inputs/organization-where-unique-input"},next:{title:"PackageBookReference",permalink:"/api/inputs/package-book-reference"}},c={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsWhereInput.<b>code_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationswhereinputbcode_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsWhereInput.<b>label</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationswhereinputblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsWhereInput.<b>owner_in</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationswhereinputbowner_inbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsWhereInput.<b>isTest</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationswhereinputbistestbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsWhereInput.<b>includeArchived</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationswhereinputbincludearchivedbcodeboolean-",level:4}],b=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[s,c]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},h={Bullet:d,SpecifiedBy:p,Badge:u,toc:g,Details:b},m="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Organization where input. Filters are additive (AND)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input OrganizationsWhereInput {\n  code_in: [ID!]\n  label: String\n  owner_in: [String!]\n  isTest: Boolean\n  includeArchived: Boolean\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-organizationswhereinputbcode_inbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsWhereInput.",(0,o.kt)("b",null,"code_in"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by Organization Code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-organizationswhereinputblabelbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsWhereInput.",(0,o.kt)("b",null,"label"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by Organization Name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-organizationswhereinputbowner_inbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsWhereInput.",(0,o.kt)("b",null,"owner_in"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by Owner organization")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-organizationswhereinputbistestbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsWhereInput.",(0,o.kt)("b",null,"isTest"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by include test organizations")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-organizationswhereinputbincludearchivedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsWhereInput.",(0,o.kt)("b",null,"includeArchived"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Filter by include archived")))}y.isMDXComponent=!0}}]);