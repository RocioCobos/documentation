"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16493],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=d(o),b=n,m=u["".concat(c,".").concat(b)]||u[b]||p[b]||r;return o?a.createElement(m,l(l({ref:t},i),{},{components:o})):a.createElement(m,l({ref:t},i))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<r;d++)l[d]=o[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},85457:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>b});var a=o(87462),n=o(67294),r=o(3905);const l={id:"hotel-quote",title:"HotelQuote",hide_table_of_contents:!1},s=void 0,c={unversionedId:"objects/hotel-quote",id:"objects/hotel-quote",title:"HotelQuote",description:"No description",source:"@site/api/objects/hotel-quote.mdx",sourceDirName:"objects",slug:"/objects/hotel-quote",permalink:"/api/objects/hotel-quote",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-quote",title:"HotelQuote",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelOptionSearch",permalink:"/api/objects/hotel-option-search"},next:{title:"HotelRuntimeConfigurationData",permalink:"/api/objects/hotel-runtime-configuration-data"}},d={},i=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelQuote.<b>stats</b></code><Bullet /><code>StatsRequest</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelquotebstatsbcodestatsrequest-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelQuote.<b>auditData</b></code><Bullet /><code>AuditData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelquotebauditdatabcodeauditdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelQuote.<b>optionQuote</b></code><Bullet /><code>HotelOptionQuote</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelquoteboptionquotebcodehoteloptionquote-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelQuote.<b>errors</b></code><Bullet /><code>[Error!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelquoteberrorsbcodeerror--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelQuote.<b>warnings</b></code><Bullet /><code>[Warning!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelquotebwarningsbcodewarning--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Response</code> <Badge class="badge badge--secondary" text="interface"/>',id:"response-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:o,children:l,startOpen:s=!1}=e;const[c,d]=(0,n.useState)(s);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:o),c&&l)},g={Bullet:i,SpecifiedBy:u,Badge:p,toc:b,Details:m},f="wrapper";function k(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelQuote implements Response {\n  stats(token: String!): StatsRequest\n  auditData: AuditData\n  optionQuote: HotelOptionQuote\n  errors: [Error!]\n  warnings: [Warning!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelquotebstatsbcodestatsrequest-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelQuote.",(0,r.kt)("b",null,"stats"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/stats-request"},(0,r.kt)("inlineCode",{parentName:"a"},"StatsRequest"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Application stats in string format"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-hotelquotestatsbtokenbcodestring--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelQuote.stats.",(0,r.kt)("b",null,"token"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelquotebauditdatabcodeauditdata-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelQuote.",(0,r.kt)("b",null,"auditData"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/audit-data"},(0,r.kt)("inlineCode",{parentName:"a"},"AuditData"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Data sent and received in the supplier's native format.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelquoteboptionquotebcodehoteloptionquote-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelQuote.",(0,r.kt)("b",null,"optionQuote"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/hotel-option-quote"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelOptionQuote"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Information about quote response.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelquoteberrorsbcodeerror--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelQuote.",(0,r.kt)("b",null,"errors"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/error"},(0,r.kt)("inlineCode",{parentName:"a"},"[Error!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Errors that abort services")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelquotebwarningsbcodewarning--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelQuote.",(0,r.kt)("b",null,"warnings"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/warning"},(0,r.kt)("inlineCode",{parentName:"a"},"[Warning!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Potentially harmful situations or errors that won't force the service to abort.\nTo identify if it is blocked one, you can check our documentation regards this matter\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/"},"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/"))),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"response-"},(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/response"},(0,r.kt)("inlineCode",{parentName:"a"},"Response"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-xquery"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelXQuery"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);