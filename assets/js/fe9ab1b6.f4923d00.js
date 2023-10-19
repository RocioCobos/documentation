"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93466],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),b=o,u=p["".concat(i,".").concat(b)]||p[b]||m[b]||r;return a?n.createElement(u,d(d({ref:t},s),{},{components:a})):n.createElement(u,d({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,d=new Array(r);d[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,d[1]=l;for(var c=2;c<r;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},30050:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>d,metadata:()=>i,toc:()=>b});var n=a(87462),o=a(67294),r=a(3905);const d={id:"reviewed-bool",title:"ReviewedBool",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/reviewed-bool",id:"objects/reviewed-bool",title:"ReviewedBool",description:"Contain bool value and review date",source:"@site/api/objects/reviewed-bool.mdx",sourceDirName:"objects",slug:"/objects/reviewed-bool",permalink:"/api/objects/reviewed-bool",draft:!1,tags:[],version:"current",frontMatter:{id:"reviewed-bool",title:"ReviewedBool",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ReviewedAgeRanges",permalink:"/api/objects/reviewed-age-ranges"},next:{title:"ReviewedInt",permalink:"/api/objects/reviewed-int"}},c={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ReviewedBool.<b>reviewDate</b></code><Bullet /><code>Date!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-reviewedboolbreviewdatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReviewedBool.<b>value</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-reviewedboolbvaluebcodeboolean--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[i,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&d)},g={Bullet:s,SpecifiedBy:p,Badge:m,toc:b,Details:u},k="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contain bool value and review date"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ReviewedBool {\n  reviewDate: Date!\n  value: Boolean!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-reviewedboolbreviewdatebcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ReviewedBool.",(0,r.kt)("b",null,"reviewDate"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Last reviewed date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-reviewedboolbvaluebcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ReviewedBool.",(0,r.kt)("b",null,"value"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-amend-board"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataAmendBoard"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-amend-dates"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataAmendDates"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-amend-paxes"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataAmendPaxes"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-amend-remarks"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataAmendRemarks"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-beds"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataBeds"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-book"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataBook"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-booking"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataBooking"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-cancel"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataCancel"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-quote"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataQuote"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-search"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataSearch"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/metadata-search-destinations"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataSearchDestinations"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/required-room-with-same-pax-configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"RequiredRoomWithSamePaxConfiguration"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);