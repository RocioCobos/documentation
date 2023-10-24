"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),i=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,u=p["".concat(d,".").concat(f)]||p[f]||b[f]||r;return n?o.createElement(u,c(c({ref:t},s),{},{components:n})):o.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<r;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72463:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var o=n(87462),a=n(67294),r=n(3905);const c={id:"board-connection",title:"BoardConnection",hide_table_of_contents:!1},l=void 0,d={unversionedId:"objects/board-connection",id:"objects/board-connection",title:"BoardConnection",description:"BoardList definition",source:"@site/api/objects/board-connection.mdx",sourceDirName:"objects",slug:"/objects/board-connection",permalink:"/api/objects/board-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"board-connection",title:"BoardConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Bed",permalink:"/api/objects/bed"},next:{title:"BoardData",permalink:"/api/objects/board-data"}},i={},s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>BoardConnection.<b>edges</b></code><Bullet /><code>[BoardEdge]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-boardconnectionbedgesbcodeboardedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BoardConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-boardconnectionbpageinfobcodepageinfo--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[d,i]=(0,a.useState)(l);return(0,r.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&c)},g={Bullet:s,SpecifiedBy:p,Badge:b,toc:f,Details:u},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"BoardList definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type BoardConnection {\n  edges: [BoardEdge]\n  pageInfo: PageInfo!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-boardconnectionbedgesbcodeboardedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BoardConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/board-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[BoardEdge]"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-boardconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BoardConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates info about page")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-xquery"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelXQuery"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);