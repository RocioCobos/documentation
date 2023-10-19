"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=s(a),g=o,u=b["".concat(c,".").concat(g)]||b[g]||p[g]||r;return a?n.createElement(u,d(d({ref:t},i),{},{components:a})):n.createElement(u,d({ref:t},i))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,d=new Array(r);d[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[b]="string"==typeof e?e:o,d[1]=l;for(var s=2;s<r;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},24649:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>b,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>g});var n=a(87462),o=a(67294),r=a(3905);const d={id:"board-data",title:"BoardData",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/board-data",id:"objects/board-data",title:"BoardData",description:"Board data",source:"@site/api/objects/board-data.mdx",sourceDirName:"objects",slug:"/objects/board-data",permalink:"/api/objects/board-data",draft:!1,tags:[],version:"current",frontMatter:{id:"board-data",title:"BoardData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BoardConnection",permalink:"/api/objects/board-connection"},next:{title:"BoardEdge",permalink:"/api/objects/board-edge"}},s={},i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>BoardData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-boarddatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BoardData.<b>boardCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-boarddatabboardcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BoardData.<b>texts</b></code><Bullet /><code>[Text!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-boarddatabtextsbcodetext--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[c,s]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&d)},m={Bullet:i,SpecifiedBy:b,Badge:p,toc:g,Details:u},f="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Board data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type BoardData {\n  code: ID!\n  boardCode: String!\n  texts(languages: [Language!]): [Text!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-boarddatabcodebcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BoardData.",(0,r.kt)("b",null,"code"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Internal code for checking availability")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-boarddatabboardcodebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BoardData.",(0,r.kt)("b",null,"boardCode"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Code of the hotel in the Supplier selected")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-boarddatabtextsbcodetext--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BoardData.",(0,r.kt)("b",null,"texts"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/text"},(0,r.kt)("inlineCode",{parentName:"a"},"[Text!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Label"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-boarddatatextsblanguagesbcodelanguage--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BoardData.texts.",(0,r.kt)("b",null,"languages"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/scalars/language"},(0,r.kt)("inlineCode",{parentName:"a"},"[Language!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/board"},(0,r.kt)("inlineCode",{parentName:"a"},"Board"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);