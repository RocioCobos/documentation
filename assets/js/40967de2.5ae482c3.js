"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48503],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),b=i(o),k=n,g=b["".concat(s,".").concat(k)]||b[k]||p[k]||l;return o?a.createElement(g,r(r({ref:t},c),{},{components:o})):a.createElement(g,r({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,r=new Array(l);r[0]=k;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[b]="string"==typeof e?e:n,r[1]=d;for(var i=2;i<l;i++)r[i]=o[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}k.displayName="MDXCreateElement"},21451:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>b,assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>k});var a=o(87462),n=o(67294),l=o(3905);const r={id:"hotel-book-payload",title:"HotelBookPayload",hide_table_of_contents:!1},d=void 0,s={unversionedId:"objects/hotel-book-payload",id:"objects/hotel-book-payload",title:"HotelBookPayload",description:"No description",source:"@site/api/objects/hotel-book-payload.mdx",sourceDirName:"objects",slug:"/objects/hotel-book-payload",permalink:"/api/objects/hotel-book-payload",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-book-payload",title:"HotelBookPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Holder",permalink:"/api/objects/holder"},next:{title:"HotelBookingAmend",permalink:"/api/objects/hotel-booking-amend"}},i={},c=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookPayload.<b>stats</b></code><Bullet /><code>StatsRequest</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelbookpayloadbstatsbcodestatsrequest-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookPayload.<b>auditData</b></code><Bullet /><code>AuditData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelbookpayloadbauditdatabcodeauditdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookPayload.<b>booking</b></code><Bullet /><code>HotelBookingDetail</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelbookpayloadbbookingbcodehotelbookingdetail-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookPayload.<b>errors</b></code><Bullet /><code>[Error!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelbookpayloadberrorsbcodeerror--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookPayload.<b>warnings</b></code><Bullet /><code>[Warning!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelbookpayloadbwarningsbcodewarning--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Response</code> <Badge class="badge badge--secondary" text="interface"/>',id:"response-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:o,children:r,startOpen:d=!1}=e;const[s,i]=(0,n.useState)(d);return(0,l.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:o),s&&r)},u={Bullet:c,SpecifiedBy:b,Badge:p,toc:k,Details:g},y="wrapper";function m(e){let{components:t,...o}=e;return(0,l.kt)(y,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelBookPayload implements Response {\n  stats(token: String!): StatsRequest\n  auditData: AuditData\n  booking: HotelBookingDetail\n  errors: [Error!]\n  warnings: [Warning!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookpayloadbstatsbcodestatsrequest-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookPayload.",(0,l.kt)("b",null,"stats"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/stats-request"},(0,l.kt)("inlineCode",{parentName:"a"},"StatsRequest"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Application stats in string format"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-hotelbookpayloadstatsbtokenbcodestring--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookPayload.stats.",(0,l.kt)("b",null,"token"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookpayloadbauditdatabcodeauditdata-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookPayload.",(0,l.kt)("b",null,"auditData"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/audit-data"},(0,l.kt)("inlineCode",{parentName:"a"},"AuditData"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Data sent and received in the supplier's native format.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookpayloadbbookingbcodehotelbookingdetail-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookPayload.",(0,l.kt)("b",null,"booking"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/hotel-booking-detail"},(0,l.kt)("inlineCode",{parentName:"a"},"HotelBookingDetail"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information about booking")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookpayloadberrorsbcodeerror--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookPayload.",(0,l.kt)("b",null,"errors"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/error"},(0,l.kt)("inlineCode",{parentName:"a"},"[Error!]"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Errors that abort services")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookpayloadbwarningsbcodewarning--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookPayload.",(0,l.kt)("b",null,"warnings"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/warning"},(0,l.kt)("inlineCode",{parentName:"a"},"[Warning!]"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Potentially harmful situations or errors that won't force the service to abort.\nTo identify if it is blocked one, you can check our documentation regards this matter\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/"},"https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/concepts/advancedconcepts/errorwarning/"))),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"response-"},(0,l.kt)("a",{parentName:"h4",href:"/api/interfaces/response"},(0,l.kt)("inlineCode",{parentName:"a"},"Response"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/hotel-xmutation"},(0,l.kt)("inlineCode",{parentName:"a"},"HotelXMutation"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);