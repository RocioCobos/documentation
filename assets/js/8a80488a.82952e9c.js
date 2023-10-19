"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35963],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(o),u=r,g=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return o?n.createElement(g,l(l({ref:t},s),{},{components:o})):n.createElement(g,l({ref:t},s))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,l[1]=c;for(var d=2;d<a;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},79613:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=o(87462),r=o(67294),a=o(3905);const l={id:"room-edge",title:"RoomEdge",hide_table_of_contents:!1},c=void 0,i={unversionedId:"objects/room-edge",id:"objects/room-edge",title:"RoomEdge",description:"RoomList Edge definition",source:"@site/api/objects/room-edge.mdx",sourceDirName:"objects",slug:"/objects/room-edge",permalink:"/api/objects/room-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"room-edge",title:"RoomEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RoomData",permalink:"/api/objects/room-data"},next:{title:"RoomOptionQuote",permalink:"/api/objects/room-option-quote"}},d={},s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RoomEdge.<b>node</b></code><Bullet /><code>RoomStatic</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomedgebnodebcoderoomstatic-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-roomedgebcursorbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:o,children:l,startOpen:c=!1}=e;const[i,d]=(0,r.useState)(c);return(0,a.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:o),i&&l)},b={Bullet:s,SpecifiedBy:m,Badge:p,toc:u,Details:g},f="wrapper";function y(e){let{components:t,...o}=e;return(0,a.kt)(f,(0,n.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RoomList Edge definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RoomEdge {\n  node: RoomStatic\n  cursor: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-roomedgebnodebcoderoomstatic-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RoomEdge.",(0,a.kt)("b",null,"node"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/objects/room-static"},(0,a.kt)("inlineCode",{parentName:"a"},"RoomStatic"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-roomedgebcursorbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RoomEdge.",(0,a.kt)("b",null,"cursor"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/objects/room-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"RoomConnection"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);