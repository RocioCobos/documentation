"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=u(a),g=o,b=c["".concat(d,".").concat(g)]||c[g]||s[g]||r;return a?n.createElement(b,l(l({ref:t},i),{},{components:a})):n.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=g;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:o,l[1]=p;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},62629:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var n=a(87462),o=a(67294),r=a(3905);const l={id:"update-group-input",title:"UpdateGroupInput",hide_table_of_contents:!1},p=void 0,d={unversionedId:"inputs/update-group-input",id:"inputs/update-group-input",title:"UpdateGroupInput",description:"No description",source:"@site/api/inputs/update-group-input.mdx",sourceDirName:"inputs",slug:"/inputs/update-group-input",permalink:"/api/inputs/update-group-input",draft:!1,tags:[],version:"current",frontMatter:{id:"update-group-input",title:"UpdateGroupInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateGroupAPISInput",permalink:"/api/inputs/update-group-apisinput"},next:{title:"UpdateHubProviderInput",permalink:"/api/inputs/update-hub-provider-input"}},u={},i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupInput.<b>group</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updategroupinputbgroupbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupInput.<b>owner</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updategroupinputbownerbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupInput.<b>type</b></code><Bullet /><code>GroupTypeInput</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-updategroupinputbtypebcodegrouptypeinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupInput.<b>info</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updategroupinputbinfobcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupInput.<b>label</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updategroupinputblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupInput.<b>country</b></code><Bullet /><code>Country</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updategroupinputbcountrybcodecountry-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupInput.<b>isBuyer</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updategroupinputbisbuyerbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateGroupInput.<b>isSeller</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updategroupinputbissellerbcodeboolean-",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:p=!1}=e;const[d,u]=(0,o.useState)(p);return(0,r.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},y={Bullet:i,SpecifiedBy:c,Badge:s,toc:g,Details:b},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateGroupInput {\n  group: ID!\n  owner: ID\n  type: GroupTypeInput\n  info: String\n  label: String\n  country: Country\n  isBuyer: Boolean\n  isSeller: Boolean\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updategroupinputbgroupbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupInput.",(0,r.kt)("b",null,"group"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updategroupinputbownerbcodeid-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupInput.",(0,r.kt)("b",null,"owner"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updategroupinputbtypebcodegrouptypeinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupInput.",(0,r.kt)("b",null,"type"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/group-type-input"},(0,r.kt)("inlineCode",{parentName:"a"},"GroupTypeInput"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updategroupinputbinfobcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupInput.",(0,r.kt)("b",null,"info"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updategroupinputblabelbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupInput.",(0,r.kt)("b",null,"label"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updategroupinputbcountrybcodecountry-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupInput.",(0,r.kt)("b",null,"country"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/country"},(0,r.kt)("inlineCode",{parentName:"a"},"Country"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updategroupinputbisbuyerbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupInput.",(0,r.kt)("b",null,"isBuyer"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updategroupinputbissellerbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateGroupInput.",(0,r.kt)("b",null,"isSeller"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}f.isMDXComponent=!0}}]);