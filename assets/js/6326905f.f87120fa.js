"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),b=l,g=p["".concat(c,".").concat(b)]||p[b]||u[b]||r;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},68989:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>b});var a=n(87462),l=n(67294),r=n(3905);const o={id:"client-where-input",title:"ClientWhereInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"inputs/client-where-input",id:"inputs/client-where-input",title:"ClientWhereInput",description:"Client where input",source:"@site/api/inputs/client-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/client-where-input",permalink:"/api/inputs/client-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"client-where-input",title:"ClientWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ClientFilter",permalink:"/api/inputs/client-filter"},next:{title:"ClientWhereUniqueInput",permalink:"/api/inputs/client-where-unique-input"}},d={},s=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ClientWhereInput.<b>_search</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-clientwhereinputb_searchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientWhereInput.<b>code_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-clientwhereinputbcode_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientWhereInput.<b>group_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-clientwhereinputbgroup_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientWhereInput.<b>owner_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-clientwhereinputbowner_inbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientWhereInput.<b>name_in</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-clientwhereinputbname_inbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientWhereInput.<b>isActive</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-clientwhereinputbisactivebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ClientWhereInput.<b>includeArchived</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-clientwhereinputbincludearchivedbcodeboolean-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[c,d]=(0,l.useState)(i);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},h={Bullet:s,SpecifiedBy:p,Badge:u,toc:b,Details:g},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Client where input"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input ClientWhereInput {\n  _search: String\n  code_in: [ID!]\n  group_in: [ID!]\n  owner_in: [ID!]\n  name_in: [String!]\n  isActive: Boolean\n  includeArchived: Boolean\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-clientwhereinputb_searchbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ClientWhereInput.",(0,r.kt)("b",null,"_","search"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Generic search filter ","<","NOT IMPLEMENTED",">")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-clientwhereinputbcode_inbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ClientWhereInput.",(0,r.kt)("b",null,"code_in"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Filter by Client codes, format: "cliXXX"')),(0,r.kt)("h4",{id:"code-style-fontweight-normal-clientwhereinputbgroup_inbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ClientWhereInput.",(0,r.kt)("b",null,"group_in"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by IAM group codes")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-clientwhereinputbowner_inbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ClientWhereInput.",(0,r.kt)("b",null,"owner_in"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by owner codes (organization codes)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-clientwhereinputbname_inbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ClientWhereInput.",(0,r.kt)("b",null,"name_in"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by Client names")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-clientwhereinputbisactivebcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ClientWhereInput.",(0,r.kt)("b",null,"isActive"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter by Client status")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-clientwhereinputbincludearchivedbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ClientWhereInput.",(0,r.kt)("b",null,"includeArchived"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Include archived records")))}y.isMDXComponent=!0}}]);