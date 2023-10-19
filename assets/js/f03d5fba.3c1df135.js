"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57349],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(a),g=r,b=p["".concat(c,".").concat(g)]||p[g]||u[g]||o;return a?n.createElement(b,s(s({ref:t},i),{},{components:a})):n.createElement(b,s({ref:t},i))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},40932:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var n=a(87462),r=a(67294),o=a(3905);const s={id:"stats-edge",title:"StatsEdge",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/stats-edge",id:"objects/stats-edge",title:"StatsEdge",description:"No description",source:"@site/api/objects/stats-edge.mdx",sourceDirName:"objects",slug:"/objects/stats-edge",permalink:"/api/objects/stats-edge",draft:!1,tags:[],version:"current",frontMatter:{id:"stats-edge",title:"StatsEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatsData",permalink:"/api/objects/stats-data"},next:{title:"StatsInfo",permalink:"/api/objects/stats-info"}},d={},i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatsEdge.<b>node</b></code><Bullet /><code>Stats</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsedgebnodebcodestats-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsedgebcursorbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:l=!1}=e;const[c,d]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&s)},f={Bullet:i,SpecifiedBy:p,Badge:u,toc:g,Details:b},m="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StatsEdge {\n  node: Stats\n  cursor: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statsedgebnodebcodestats-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/stats"},(0,o.kt)("inlineCode",{parentName:"a"},"Stats"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statsedgebcursorbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatsEdge.",(0,o.kt)("b",null,"cursor"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/stats-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"StatsConnection"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);