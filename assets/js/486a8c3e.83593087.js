"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53007],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var l=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=l.createContext({}),c=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=c(e.components);return l.createElement(d.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},b=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(a),b=o,u=f["".concat(d,".").concat(b)]||f[b]||p[b]||n;return a?l.createElement(u,r(r({ref:t},s),{},{components:a})):l.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[f]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<n;c++)r[c]=a[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}b.displayName="MDXCreateElement"},57958:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>b});var l=a(87462),o=a(67294),n=a(3905);const r={id:"float-filter",title:"FloatFilter",hide_table_of_contents:!1},i=void 0,d={unversionedId:"inputs/float-filter",id:"inputs/float-filter",title:"FloatFilter",description:"No description",source:"@site/api/inputs/float-filter.mdx",sourceDirName:"inputs",slug:"/inputs/float-filter",permalink:"/api/inputs/float-filter",draft:!1,tags:[],version:"current",frontMatter:{id:"float-filter",title:"FloatFilter",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightSegmentWhereInput",permalink:"/api/inputs/flight-segment-where-input"},next:{title:"GrantMacroPermissionInput",permalink:"/api/inputs/grant-macro-permission-input"}},c={},s=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FloatFilter.<b>equals</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-floatfilterbequalsbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FloatFilter.<b>gt</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-floatfilterbgtbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FloatFilter.<b>gte</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-floatfilterbgtebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FloatFilter.<b>in</b></code><Bullet /><code>[Float!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-floatfilterbinbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FloatFilter.<b>lt</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-floatfilterbltbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FloatFilter.<b>lte</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-floatfilterbltebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FloatFilter.<b>not</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-floatfilterbnotbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FloatFilter.<b>notIn</b></code><Bullet /><code>[Float!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-floatfilterbnotinbcodefloat--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:i=!1}=e;const[d,c]=(0,o.useState)(i);return(0,n.kt)("details",(0,l.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&r)},g={Bullet:s,SpecifiedBy:f,Badge:p,toc:b,Details:u},m="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input FloatFilter {\n  equals: Float\n  gt: Float\n  gte: Float\n  in: [Float!]\n  lt: Float\n  lte: Float\n  not: Float\n  notIn: [Float!]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-floatfilterbequalsbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FloatFilter.",(0,n.kt)("b",null,"equals"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-floatfilterbgtbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FloatFilter.",(0,n.kt)("b",null,"gt"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-floatfilterbgtebcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FloatFilter.",(0,n.kt)("b",null,"gte"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-floatfilterbinbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FloatFilter.",(0,n.kt)("b",null,"in"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"[Float!]"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-floatfilterbltbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FloatFilter.",(0,n.kt)("b",null,"lt"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-floatfilterbltebcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FloatFilter.",(0,n.kt)("b",null,"lte"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-floatfilterbnotbcodefloat-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FloatFilter.",(0,n.kt)("b",null,"not"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-floatfilterbnotinbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FloatFilter.",(0,n.kt)("b",null,"notIn"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"[Float!]"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/inputs/profile-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"ProfileWhereInput"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);