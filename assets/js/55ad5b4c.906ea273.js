"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=c(a),u=o,g=b["".concat(i,".").concat(u)]||b[u]||p[u]||n;return a?r.createElement(g,l(l({ref:t},s),{},{components:a})):r.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[b]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29457:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(87462),o=a(67294),n=a(3905);const l={id:"hub-provider-data",title:"HubProviderData",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/hub-provider-data",id:"objects/hub-provider-data",title:"HubProviderData",description:"No description",source:"@site/api/objects/hub-provider-data.mdx",sourceDirName:"objects",slug:"/objects/hub-provider-data",permalink:"/api/objects/hub-provider-data",draft:!1,tags:[],version:"current",frontMatter:{id:"hub-provider-data",title:"HubProviderData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Hotel",permalink:"/api/objects/hotel"},next:{title:"HubProvider",permalink:"/api/objects/hub-provider"}},c={},s=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HubProviderData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubproviderdatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubProviderData.<b>inDevelopment</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubproviderdatabindevelopmentbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubProviderData.<b>giataType</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubproviderdatabgiatatypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubProviderData.<b>giataCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubproviderdatabgiatacodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HubProviderData.<b>isDirect</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hubproviderdatabisdirectbcodeboolean-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[i,c]=(0,o.useState)(d);return(0,n.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},m={Bullet:s,SpecifiedBy:b,Badge:p,toc:u,Details:g},f="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type HubProviderData {\n  code: ID!\n  inDevelopment: Boolean\n  giataType: String\n  giataCode: String\n  isDirect: Boolean\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hubproviderdatabcodebcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HubProviderData.",(0,n.kt)("b",null,"code"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hubproviderdatabindevelopmentbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HubProviderData.",(0,n.kt)("b",null,"inDevelopment"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hubproviderdatabgiatatypebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HubProviderData.",(0,n.kt)("b",null,"giataType"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hubproviderdatabgiatacodebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HubProviderData.",(0,n.kt)("b",null,"giataCode"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hubproviderdatabisdirectbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HubProviderData.",(0,n.kt)("b",null,"isDirect"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/hub-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"HubProvider"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);