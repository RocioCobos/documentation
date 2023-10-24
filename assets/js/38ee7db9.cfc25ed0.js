"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,y=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return n?l.createElement(y,o(o({ref:t},s),{},{components:n})):l.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},17061:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>g});var l=n(87462),r=n(67294),a=n(3905);const o={id:"hotel-xfilter-plugin-type-input",title:"HotelXFilterPluginTypeInput",hide_table_of_contents:!1},i=void 0,p={unversionedId:"inputs/hotel-xfilter-plugin-type-input",id:"inputs/hotel-xfilter-plugin-type-input",title:"HotelXFilterPluginTypeInput",description:'@deprecated(reason: "deprecated from 2018-10-21. Please, use PluginStepInput")',source:"@site/api/inputs/hotel-xfilter-plugin-type-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xfilter-plugin-type-input",permalink:"/api/inputs/hotel-xfilter-plugin-type-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xfilter-plugin-type-input",title:"HotelXFilterPluginTypeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXFilterInput",permalink:"/api/inputs/hotel-xfilter-input"},next:{title:"HotelXFilterSearchInput",permalink:"/api/inputs/hotel-xfilter-search-input"}},u={},s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXFilterPluginTypeInput.<b>step</b></code><Bullet /><code>PluginStepType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-hotelxfilterplugintypeinputbstepbcodepluginsteptype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXFilterPluginTypeInput.<b>type</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxfilterplugintypeinputbtypebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXFilterPluginTypeInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxfilterplugintypeinputbnamebcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[p,u]=(0,r.useState)(i);return(0,a.kt)("details",(0,l.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&o)},f={Bullet:s,SpecifiedBy:d,Badge:c,toc:g,Details:y},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'@deprecated(reason: "deprecated from 2018-10-21. Please, use PluginStepInput")'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXFilterPluginTypeInput {\n  step: PluginStepType!\n  type: String!\n  name: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelxfilterplugintypeinputbstepbcodepluginsteptype--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelXFilterPluginTypeInput.",(0,a.kt)("b",null,"step"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/plugin-step-type"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginStepType!"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Step of the plugin to filter")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelxfilterplugintypeinputbtypebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelXFilterPluginTypeInput.",(0,a.kt)("b",null,"type"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Type of the plugin to filter")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelxfilterplugintypeinputbnamebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelXFilterPluginTypeInput.",(0,a.kt)("b",null,"name"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Name of the plugin to filter")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xplugin-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"HotelXPluginFilterInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);