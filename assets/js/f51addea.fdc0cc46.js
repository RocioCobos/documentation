"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35355],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),b=c(a),g=o,p=b["".concat(r,".").concat(g)]||b[g]||u[g]||s;return a?n.createElement(p,l(l({ref:t},i),{},{components:a})):n.createElement(p,l({ref:t},i))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,l=new Array(s);l[0]=g;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[b]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},14808:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>r,toc:()=>g});var n=a(87462),o=a(67294),s=a(3905);const l={id:"stats-request",title:"StatsRequest",hide_table_of_contents:!1},d=void 0,r={unversionedId:"objects/stats-request",id:"objects/stats-request",title:"StatsRequest",description:"Contains internal information.",source:"@site/api/objects/stats-request.mdx",sourceDirName:"objects",slug:"/objects/stats-request",permalink:"/api/objects/stats-request",draft:!1,tags:[],version:"current",frontMatter:{id:"stats-request",title:"StatsRequest",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatsRealTimeRange",permalink:"/api/objects/stats-real-time-range"},next:{title:"Stats",permalink:"/api/objects/stats"}},c={},i=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>total</b></code><Bullet /><code>Stat!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsrequestbtotalbcodestat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>validation</b></code><Bullet /><code>Stat!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsrequestbvalidationbcodestat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>process</b></code><Bullet /><code>Stat!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsrequestbprocessbcodestat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>configuration</b></code><Bullet /><code>Stat!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsrequestbconfigurationbcodestat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>request</b></code><Bullet /><code>Stat!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsrequestbrequestbcodestat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>response</b></code><Bullet /><code>Stat!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsrequestbresponsebcodestat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>requestPlugin</b></code><Bullet /><code>StatPlugin</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsrequestbrequestpluginbcodestatplugin-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>responsePlugin</b></code><Bullet /><code>StatPlugin</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsrequestbresponsepluginbcodestatplugin-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>hotels</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsrequestbhotelsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>zones</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsrequestbzonesbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>cities</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsrequestbcitiesbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>dockerID</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsrequestbdockeridbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsRequest.<b>Accesses</b></code><Bullet /><code>[StatAccess!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-statsrequestbaccessesbcodestataccess--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[r,c]=(0,o.useState)(d);return(0,s.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&l)},m={Bullet:i,SpecifiedBy:b,Badge:u,toc:g,Details:p},k="wrapper";function y(e){let{components:t,...a}=e;return(0,s.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Contains internal information."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type StatsRequest {\n  total: Stat!\n  validation: Stat!\n  process: Stat!\n  configuration: Stat!\n  request: Stat!\n  response: Stat!\n  requestPlugin: StatPlugin\n  responsePlugin: StatPlugin\n  hotels: Int!\n  zones: Int!\n  cities: Int!\n  dockerID: String!\n  Accesses: [StatAccess!]!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbtotalbcodestat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"total"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stat"},(0,s.kt)("inlineCode",{parentName:"a"},"Stat!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Total transaction time")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbvalidationbcodestat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"validation"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stat"},(0,s.kt)("inlineCode",{parentName:"a"},"Stat!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Request validation time")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbprocessbcodestat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"process"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stat"},(0,s.kt)("inlineCode",{parentName:"a"},"Stat!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Process time. Contains communication time, parse time and plugin time.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbconfigurationbcodestat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"configuration"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stat"},(0,s.kt)("inlineCode",{parentName:"a"},"Stat!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Build access time")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbrequestbcodestat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"request"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stat"},(0,s.kt)("inlineCode",{parentName:"a"},"Stat!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Request time")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbresponsebcodestat--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"response"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stat"},(0,s.kt)("inlineCode",{parentName:"a"},"Stat!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Response time")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbrequestpluginbcodestatplugin-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"requestPlugin"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stat-plugin"},(0,s.kt)("inlineCode",{parentName:"a"},"StatPlugin"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Plugin execution time")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbresponsepluginbcodestatplugin-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"responsePlugin"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stat-plugin"},(0,s.kt)("inlineCode",{parentName:"a"},"StatPlugin"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Plugin execution time")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbhotelsbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"hotels"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Number of hotels")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbzonesbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"zones"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Number of zones")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbcitiesbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"cities"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Number of cities")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbdockeridbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"dockerID"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Docker Id")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsrequestbaccessesbcodestataccess--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsRequest.",(0,s.kt)("b",null,"Accesses"))),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/objects/stat-access"},(0,s.kt)("inlineCode",{parentName:"a"},"[StatAccess!]!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Detail access time")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api/objects/hotel-booking"},(0,s.kt)("inlineCode",{parentName:"a"},"HotelBooking"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/hotel-book-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"HotelBookPayload"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/hotel-cancel-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"HotelCancelPayload"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/hotel-commit-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"HotelCommitPayload"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/hotel-quote"},(0,s.kt)("inlineCode",{parentName:"a"},"HotelQuote"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/hotel-search"},(0,s.kt)("inlineCode",{parentName:"a"},"HotelSearch"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(i,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/interfaces/response"},(0,s.kt)("inlineCode",{parentName:"a"},"Response"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);