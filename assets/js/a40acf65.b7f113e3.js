"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95479],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,g=p["".concat(s,".").concat(b)]||p[b]||u[b]||l;return a?n.createElement(g,c(c({ref:t},i),{},{components:a})):n.createElement(g,c({ref:t},i))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var d=2;d<l;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},20202:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>b});var n=a(87462),r=a(67294),l=a(3905);const c={id:"access-where-input",title:"AccessWhereInput",hide_table_of_contents:!1},o=void 0,s={unversionedId:"inputs/access-where-input",id:"inputs/access-where-input",title:"AccessWhereInput",description:"No description",source:"@site/api/inputs/access-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/access-where-input",permalink:"/api/inputs/access-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"access-where-input",title:"AccessWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccessUpdateInput",permalink:"/api/inputs/access-update-input"},next:{title:"AccessWhereUniqueInput",permalink:"/api/inputs/access-where-unique-input"}},d={},i=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereInput.<b>code_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereinputbcode_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereInput.<b>name_in</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereinputbname_inbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereInput.<b>group_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereinputbgroup_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereInput.<b>owner_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereinputbowner_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereInput.<b>supplier_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereinputbsupplier_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereInput.<b>provider_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereinputbprovider_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereInput.<b>isActive</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereinputbisactivebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereInput.<b>isShared</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereinputbissharedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereInput.<b>includeArchived</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereinputbincludearchivedbcodeboolean-",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:o=!1}=e;const[s,d]=(0,r.useState)(o);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&c)},h={Bullet:i,SpecifiedBy:p,Badge:u,toc:b,Details:g},m="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input AccessWhereInput {\n  code_in: [ID!]\n  name_in: [String!]\n  group_in: [ID!]\n  owner_in: [ID!]\n  supplier_in: [ID!]\n  provider_in: [ID!]\n  isActive: Boolean\n  isShared: Boolean\n  includeArchived: Boolean\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accesswhereinputbcode_inbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereInput.",(0,l.kt)("b",null,"code_in"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accesswhereinputbname_inbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereInput.",(0,l.kt)("b",null,"name_in"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accesswhereinputbgroup_inbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereInput.",(0,l.kt)("b",null,"group_in"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accesswhereinputbowner_inbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereInput.",(0,l.kt)("b",null,"owner_in"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accesswhereinputbsupplier_inbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereInput.",(0,l.kt)("b",null,"supplier_in"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accesswhereinputbprovider_inbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereInput.",(0,l.kt)("b",null,"provider_in"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accesswhereinputbisactivebcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereInput.",(0,l.kt)("b",null,"isActive"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accesswhereinputbissharedbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereInput.",(0,l.kt)("b",null,"isShared"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-accesswhereinputbincludearchivedbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereInput.",(0,l.kt)("b",null,"includeArchived"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}y.isMDXComponent=!0}}]);