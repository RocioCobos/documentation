"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,g=p["".concat(d,".").concat(u)]||p[u]||f[u]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66683:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(87462),r=n(67294),l=n(3905);const o={id:"point-of-sale-filter",title:"PointOfSaleFilter",hide_table_of_contents:!1},i=void 0,d={unversionedId:"inputs/point-of-sale-filter",id:"inputs/point-of-sale-filter",title:"PointOfSaleFilter",description:"No description",source:"@site/api/inputs/point-of-sale-filter.mdx",sourceDirName:"inputs",slug:"/inputs/point-of-sale-filter",permalink:"/api/inputs/point-of-sale-filter",draft:!1,tags:[],version:"current",frontMatter:{id:"point-of-sale-filter",title:"PointOfSaleFilter",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PluginsInput",permalink:"/api/inputs/plugins-input"},next:{title:"PriceInput",permalink:"/api/inputs/price-input"}},s={},c=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PointOfSaleFilter.<b>code</b></code><Bullet /><code>[ID]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pointofsalefilterbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PointOfSaleFilter.<b>groupID</b></code><Bullet /><code>[ID]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pointofsalefilterbgroupidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PointOfSaleFilter.<b>owner</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pointofsalefilterbownerbcodeid--",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[d,s]=(0,r.useState)(i);return(0,l.kt)("details",(0,a.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&o)},b={Bullet:c,SpecifiedBy:p,Badge:f,toc:u,Details:g},m="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input PointOfSaleFilter {\n  code: [ID]\n  groupID: [ID]\n  owner: [ID!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-pointofsalefilterbcodebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PointOfSaleFilter.",(0,l.kt)("b",null,"code"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-pointofsalefilterbgroupidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PointOfSaleFilter.",(0,l.kt)("b",null,"groupID"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-pointofsalefilterbownerbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PointOfSaleFilter.",(0,l.kt)("b",null,"owner"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}y.isMDXComponent=!0}}]);