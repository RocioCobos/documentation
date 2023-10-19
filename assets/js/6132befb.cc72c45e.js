"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),g=d(n),f=r,b=g["".concat(s,".").concat(f)]||g[f]||y[f]||o;return n?a.createElement(b,c(c({ref:t},i),{},{components:n})):a.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,c[1]=l;for(var d=2;d<o;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35652:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>f});var a=n(87462),r=n(67294),o=n(3905);const c={id:"ferry-search-connection",title:"FerrySearchConnection",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/ferry-search-connection",id:"objects/ferry-search-connection",title:"FerrySearchConnection",description:"A connection to a list of items.",source:"@site/api/objects/ferry-search-connection.mdx",sourceDirName:"objects",slug:"/objects/ferry-search-connection",permalink:"/api/objects/ferry-search-connection",draft:!1,tags:[],version:"current",frontMatter:{id:"ferry-search-connection",title:"FerrySearchConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FerryQuotePayload",permalink:"/api/objects/ferry-quote-payload"},next:{title:"FerrySearchEdge",permalink:"/api/objects/ferry-search-edge"}},d={},i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FerrySearchConnection.<b>adviseMessages</b></code><Bullet /><code>[AdviseMessage]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferrysearchconnectionbadvisemessagesbcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerrySearchConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferrysearchconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerrySearchConnection.<b>edges</b></code><Bullet /><code>[FerrySearchEdge!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferrysearchconnectionbedgesbcodeferrysearchedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerrySearchConnection.<b>nodes</b></code><Bullet /><code>[FerryOffer]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferrysearchconnectionbnodesbcodeferryoffer--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerrySearchConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferrysearchconnectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerrySearchConnection.<b>searchToken</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferrysearchconnectionbsearchtokenbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[s,d]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&c)},p={Bullet:i,SpecifiedBy:g,Badge:y,toc:f,Details:b},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A connection to a list of items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type FerrySearchConnection {\n  adviseMessages: [AdviseMessage]\n  pageInfo: PageInfo!\n  edges: [FerrySearchEdge!]\n  nodes: [FerryOffer]\n  totalCount: Int!\n  searchToken: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrysearchconnectionbadvisemessagesbcodeadvisemessage--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerrySearchConnection.",(0,o.kt)("b",null,"adviseMessages"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,o.kt)("inlineCode",{parentName:"a"},"[AdviseMessage]"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrysearchconnectionbpageinfobcodepageinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerrySearchConnection.",(0,o.kt)("b",null,"pageInfo"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrysearchconnectionbedgesbcodeferrysearchedge--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerrySearchConnection.",(0,o.kt)("b",null,"edges"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/ferry-search-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[FerrySearchEdge!]"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A list of edges.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrysearchconnectionbnodesbcodeferryoffer--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerrySearchConnection.",(0,o.kt)("b",null,"nodes"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/ferry-offer"},(0,o.kt)("inlineCode",{parentName:"a"},"[FerryOffer]"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A flattened list of the nodes.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrysearchconnectionbtotalcountbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerrySearchConnection.",(0,o.kt)("b",null,"totalCount"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Identifies the total count of items in the connection.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrysearchconnectionbsearchtokenbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerrySearchConnection.",(0,o.kt)("b",null,"searchToken"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/transport-query"},(0,o.kt)("inlineCode",{parentName:"a"},"TransportQuery"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);