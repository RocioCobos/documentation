"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65609],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,u=p["".concat(i,".").concat(b)]||p[b]||g[b]||o;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},23549:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>b});var n=a(87462),r=a(67294),o=a(3905);const l={id:"price-change",title:"PriceChange",hide_table_of_contents:!1},c=void 0,i={unversionedId:"objects/price-change",id:"objects/price-change",title:"PriceChange",description:"Contains the price of the previous operation, returned only if it has changed from the previous call. If not, this field will be returned as Null.",source:"@site/api/objects/price-change.mdx",sourceDirName:"objects",slug:"/objects/price-change",permalink:"/api/objects/price-change",draft:!1,tags:[],version:"current",frontMatter:{id:"price-change",title:"PriceChange",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PriceBreakdown",permalink:"/api/objects/price-breakdown"},next:{title:"PriceStatic",permalink:"/api/objects/price-static"}},d={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PriceChange.<b>currency</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pricechangebcurrencybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PriceChange.<b>net</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pricechangebnetbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PriceChange.<b>gross</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pricechangebgrossbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PriceChange.<b>binding</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pricechangebbindingbcodeboolean--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[i,d]=(0,r.useState)(c);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},f={Bullet:s,SpecifiedBy:p,Badge:g,toc:b,Details:u},m="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Contains the price of the previous operation, returned only if it has changed from the previous call. If not, this field will be returned as Null."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PriceChange {\n  currency: String!\n  net: Float!\n  gross: Float!\n  binding: Boolean!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pricechangebcurrencybcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PriceChange.",(0,o.kt)("b",null,"currency"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The currency of previous option.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pricechangebnetbcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PriceChange.",(0,o.kt)("b",null,"net"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The net value of previous option.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pricechangebgrossbcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PriceChange.",(0,o.kt)("b",null,"gross"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The gross value of previous option.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pricechangebbindingbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PriceChange.",(0,o.kt)("b",null,"binding"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates if previous option price was binding or not")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-booking-detail"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelBookingDetail"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-option-quote"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelOptionQuote"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);