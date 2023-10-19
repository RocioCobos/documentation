"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25191],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},g="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(a),m=o,p=g["".concat(d,".").concat(m)]||g[m]||b[m]||r;return a?n.createElement(p,i(i({ref:t},c),{},{components:a})):n.createElement(p,i({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9655:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>p,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(87462),o=a(67294),r=a(3905);const i={id:"organizations-data",title:"OrganizationsData",hide_table_of_contents:!1},l=void 0,d={unversionedId:"objects/organizations-data",id:"objects/organizations-data",title:"OrganizationsData",description:"Extended Organization information",source:"@site/api/objects/organizations-data.mdx",sourceDirName:"objects",slug:"/objects/organizations-data",permalink:"/api/objects/organizations-data",draft:!1,tags:[],version:"current",frontMatter:{id:"organizations-data",title:"OrganizationsData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OrganizationsConnection",permalink:"/api/objects/organizations-connection"},next:{title:"OrganizationsEdge",permalink:"/api/objects/organizations-edge"}},s={},c=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsData.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsdatabidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsdatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsData.<b>label</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsdatablabelbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsData.<b>owner</b></code><Bullet /><code>Organizations</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-organizationsdatabownerbcodeorganizations-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsData.<b>isTest</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsdatabistestbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrganizationsData.<b>members</b></code><Bullet /><code>[OrganizationMembers!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-organizationsdatabmembersbcodeorganizationmembers--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:l=!1}=e;const[d,s]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&i)},u={Bullet:c,SpecifiedBy:g,Badge:b,toc:m,Details:p},k="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Extended Organization information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrganizationsData {\n  id: ID!\n  code: ID!\n  label: String!\n  owner: Organizations\n  isTest: Boolean!\n  members: [OrganizationMembers!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsdatabidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsData.",(0,r.kt)("b",null,"id"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Organization unique ID. Format: integer.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsdatabcodebcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsData.",(0,r.kt)("b",null,"code"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Organization unique code")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsdatablabelbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsData.",(0,r.kt)("b",null,"label"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Organization name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsdatabownerbcodeorganizations-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsData.",(0,r.kt)("b",null,"owner"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/organizations"},(0,r.kt)("inlineCode",{parentName:"a"},"Organizations"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates the owner organization: NOT MEMBER")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsdatabistestbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsData.",(0,r.kt)("b",null,"isTest"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Inidcates if the organization is for testing purpose")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsdatabmembersbcodeorganizationmembers--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OrganizationsData.",(0,r.kt)("b",null,"members"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/organization-members"},(0,r.kt)("inlineCode",{parentName:"a"},"[OrganizationMembers!]"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All organization members")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/member-organizations"},(0,r.kt)("inlineCode",{parentName:"a"},"MemberOrganizations"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/organizations"},(0,r.kt)("inlineCode",{parentName:"a"},"Organizations"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);