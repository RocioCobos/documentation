"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),y=a,b=p["".concat(i,".").concat(y)]||p[y]||g[y]||r;return n?o.createElement(b,c(c({ref:t},s),{},{components:n})):o.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var d=2;d<r;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},99206:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>y});var o=n(87462),a=n(67294),r=n(3905);const c={id:"category-connection",title:"CategoryConnection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/category-connection",id:"objects/category-connection",title:"CategoryConnection",description:"CategoryList definition",source:"@site/api/objects/category-connection.mdx",sourceDirName:"objects",slug:"/objects/category-connection",permalink:"/api/objects/category-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"category-connection",title:"CategoryConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelPolicy",permalink:"/api/objects/cancel-policy"},next:{title:"CategoryData",permalink:"/api/objects/category-data"}},d={},s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CategoryConnection.<b>edges</b></code><Bullet /><code>[CategoryEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-categoryconnectionbedgesbcodecategoryedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CategoryConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-categoryconnectionbpageinfobcodepageinfo--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[i,d]=(0,a.useState)(l);return(0,r.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},f={Bullet:s,SpecifiedBy:p,Badge:g,toc:y,Details:b},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CategoryList definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CategoryConnection {\n  edges: [CategoryEdge]\n  pageInfo: PageInfo @deprecated\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-categoryconnectionbedgesbcodecategoryedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CategoryConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/category-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[CategoryEdge]"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-categoryconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CategoryConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo"))," ",(0,r.kt)(g,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This property is deprecated and is no longer recommended for use.")),(0,r.kt)("p",{parentName:"blockquote"},"Indicates info about page")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-xquery"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelXQuery"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);