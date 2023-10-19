"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75812],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>p});var a=l(67294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function d(e,t){if(null==e)return{};var l,a,o=function(e,t){if(null==e)return{};var l,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var l=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=c(l),f=o,p=b["".concat(i,".").concat(f)]||b[f]||u[f]||n;return l?a.createElement(p,r(r({ref:t},s),{},{components:l})):a.createElement(p,r({ref:t},s))}));function p(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=l.length,r=new Array(n);r[0]=f;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[b]="string"==typeof e?e:o,r[1]=d;for(var c=2;c<n;c++)r[c]=l[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}f.displayName="MDXCreateElement"},54237:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>f});var a=l(87462),o=l(67294),n=l(3905);const r={id:"nullable-float-filter",title:"NullableFloatFilter",hide_table_of_contents:!1},d=void 0,i={unversionedId:"inputs/nullable-float-filter",id:"inputs/nullable-float-filter",title:"NullableFloatFilter",description:"No description",source:"@site/api/inputs/nullable-float-filter.mdx",sourceDirName:"inputs",slug:"/inputs/nullable-float-filter",permalink:"/api/inputs/nullable-float-filter",draft:!1,tags:[],version:"current",frontMatter:{id:"nullable-float-filter",title:"NullableFloatFilter",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MembersWhereInput",permalink:"/api/inputs/members-where-input"},next:{title:"NullableIntFilter",permalink:"/api/inputs/nullable-int-filter"}},c={},s=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>NullableFloatFilter.<b>equals</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-nullablefloatfilterbequalsbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NullableFloatFilter.<b>gt</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-nullablefloatfilterbgtbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NullableFloatFilter.<b>gte</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-nullablefloatfilterbgtebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NullableFloatFilter.<b>in</b></code><Bullet /><code>[Float!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-nullablefloatfilterbinbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NullableFloatFilter.<b>lt</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-nullablefloatfilterbltbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NullableFloatFilter.<b>lte</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-nullablefloatfilterbltebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NullableFloatFilter.<b>not</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-nullablefloatfilterbnotbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NullableFloatFilter.<b>notIn</b></code><Bullet /><code>[Float!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-nullablefloatfilterbnotinbcodefloat--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:l,children:r,startOpen:d=!1}=e;const[i,c]=(0,o.useState)(d);return(0,n.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:l),i&&r)},m={Bullet:s,SpecifiedBy:b,Badge:u,toc:f,Details:p},g="wrapper";function y(e){let{components:t,...l}=e;return(0,n.kt)(g,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input NullableFloatFilter {\n  equals: Float\n  gt: Float\n  gte: Float\n  in: [Float!]\n  lt: Float\n  lte: Float\n  not: Float\n  notIn: [Float!]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nullablefloatfilterbequalsbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"NullableFloatFilter.",(0,n.kt)("b",null,"equals"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nullablefloatfilterbgtbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"NullableFloatFilter.",(0,n.kt)("b",null,"gt"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nullablefloatfilterbgtebcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"NullableFloatFilter.",(0,n.kt)("b",null,"gte"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nullablefloatfilterbinbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"NullableFloatFilter.",(0,n.kt)("b",null,"in"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"[Float!]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nullablefloatfilterbltbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"NullableFloatFilter.",(0,n.kt)("b",null,"lt"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nullablefloatfilterbltebcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"NullableFloatFilter.",(0,n.kt)("b",null,"lte"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nullablefloatfilterbnotbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"NullableFloatFilter.",(0,n.kt)("b",null,"not"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-nullablefloatfilterbnotinbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"NullableFloatFilter.",(0,n.kt)("b",null,"notIn"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"[Float!]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/inputs/asset-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"AssetWhereInput"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);