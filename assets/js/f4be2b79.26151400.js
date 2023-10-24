"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},62505:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var a=n(87462),r=n(67294),l=n(3905);const i={id:"plugins-input",title:"PluginsInput",hide_table_of_contents:!1},o=void 0,p={unversionedId:"inputs/plugins-input",id:"inputs/plugins-input",title:"PluginsInput",description:"Plugin to execute.",source:"@site/api/inputs/plugins-input.mdx",sourceDirName:"inputs",slug:"/inputs/plugins-input",permalink:"/api/inputs/plugins-input",draft:!1,tags:[],version:"current",frontMatter:{id:"plugins-input",title:"PluginsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PluginStepInput",permalink:"/api/inputs/plugin-step-input"},next:{title:"PointOfSaleFilter",permalink:"/api/inputs/point-of-sale-filter"}},u={},s=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PluginsInput.<b>type</b></code><Bullet /><code>PluginType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-pluginsinputbtypebcodeplugintype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PluginsInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pluginsinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PluginsInput.<b>parameters</b></code><Bullet /><code>[ParameterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-pluginsinputbparametersbcodeparameterinput--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:o=!1}=e;const[p,u]=(0,r.useState)(o);return(0,l.kt)("details",(0,a.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&i)},b={Bullet:s,SpecifiedBy:c,Badge:d,toc:g,Details:m},y="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Plugin to execute."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input PluginsInput {\n  type: PluginType!\n  name: String!\n  parameters: [ParameterInput!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-pluginsinputbtypebcodeplugintype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PluginsInput.",(0,l.kt)("b",null,"type"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/plugin-type"},(0,l.kt)("inlineCode",{parentName:"a"},"PluginType!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Type of the plugin to execute")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-pluginsinputbnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PluginsInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Name of the plugin to execute")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-pluginsinputbparametersbcodeparameterinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PluginsInput.",(0,l.kt)("b",null,"parameters"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/parameter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[ParameterInput!]"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters of the plugin")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/inputs/plugin-step-input"},(0,l.kt)("inlineCode",{parentName:"a"},"PluginStepInput"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);