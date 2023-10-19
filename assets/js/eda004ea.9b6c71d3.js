"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},p=Object.keys(e);for(l=0;l<p.length;l++)n=p[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)n=p[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,m=c["".concat(o,".").concat(g)]||c[g]||d[g]||p;return n?l.createElement(m,i(i({ref:t},s),{},{components:n})):l.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=g;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[c]="string"==typeof e?e:a,i[1]=r;for(var u=2;u<p;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58871:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var l=n(87462),a=n(67294),p=n(3905);const i={id:"plugin-step-input",title:"PluginStepInput",hide_table_of_contents:!1},r=void 0,o={unversionedId:"inputs/plugin-step-input",id:"inputs/plugin-step-input",title:"PluginStepInput",description:"Plugin to execute.",source:"@site/api/inputs/plugin-step-input.mdx",sourceDirName:"inputs",slug:"/inputs/plugin-step-input",permalink:"/api/inputs/plugin-step-input",draft:!1,tags:[],version:"current",frontMatter:{id:"plugin-step-input",title:"PluginStepInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PhoneInput",permalink:"/api/inputs/phone-input"},next:{title:"PluginsInput",permalink:"/api/inputs/plugins-input"}},u={},s=()=>(0,p.kt)(a.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,p.kt)(a.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,p.kt)(a.Fragment,null,(0,p.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PluginStepInput.<b>step</b></code><Bullet /><code>PluginStepType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-pluginstepinputbstepbcodepluginsteptype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PluginStepInput.<b>pluginsType</b></code><Bullet /><code>[PluginsInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-pluginstepinputbpluginstypebcodepluginsinput--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:r=!1}=e;const[o,u]=(0,a.useState)(r);return(0,p.kt)("details",(0,l.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,p.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&i)},y={Bullet:s,SpecifiedBy:c,Badge:d,toc:g,Details:m},f="wrapper";function b(e){let{components:t,...n}=e;return(0,p.kt)(f,(0,l.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Plugin to execute."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input PluginStepInput {\n  step: PluginStepType!\n  pluginsType: [PluginsInput!]\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-pluginstepinputbstepbcodepluginsteptype--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"PluginStepInput.",(0,p.kt)("b",null,"step"))),(0,p.kt)(s,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/api/enums/plugin-step-type"},(0,p.kt)("inlineCode",{parentName:"a"},"PluginStepType!"))," ",(0,p.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Indicates where the plugin will be executed.")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-pluginstepinputbpluginstypebcodepluginsinput--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"PluginStepInput.",(0,p.kt)("b",null,"pluginsType"))),(0,p.kt)(s,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/api/inputs/plugins-input"},(0,p.kt)("inlineCode",{parentName:"a"},"[PluginsInput!]"))," ",(0,p.kt)(d,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,p.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Indicates the plugin that will be executed.")),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/inputs/hotel-settings-input"},(0,p.kt)("inlineCode",{parentName:"a"},"HotelSettingsInput"))," ",(0,p.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);