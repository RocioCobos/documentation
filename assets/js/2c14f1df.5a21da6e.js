"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(b,o(o({ref:t},i),{},{components:a})):n.createElement(b,o({ref:t},i))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17374:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(87462),r=a(67294),l=a(3905);const o={id:"markup",title:"Markup",hide_table_of_contents:!1},c=void 0,d={unversionedId:"objects/markup",id:"objects/markup",title:"Markup",description:"Informs markup applied over supplier price.",source:"@site/api/objects/markup.mdx",sourceDirName:"objects",slug:"/objects/markup",permalink:"/api/objects/markup",draft:!1,tags:[],version:"current",frontMatter:{id:"markup",title:"Markup",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Mapping",permalink:"/api/objects/mapping"},next:{title:"Media",permalink:"/api/objects/media"}},s={},i=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Markup.<b>channel</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-markupbchannelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Markup.<b>currency</b></code><Bullet /><code>Currency!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-markupbcurrencybcodecurrency--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Markup.<b>binding</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-markupbbindingbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Markup.<b>net</b></code><Bullet /><code>Float!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-markupbnetbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Markup.<b>gross</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-markupbgrossbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Markup.<b>exchange</b></code><Bullet /><code>Exchange!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-markupbexchangebcodeexchange--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Markup.<b>rules</b></code><Bullet /><code>[Rule!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-markupbrulesbcoderule--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Priceable</code> <Badge class="badge badge--secondary" text="interface"/>',id:"priceable-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[d,s]=(0,r.useState)(c);return(0,l.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&o)},g={Bullet:i,SpecifiedBy:p,Badge:u,toc:m,Details:b},k="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Informs markup applied over supplier price."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Markup implements Priceable {\n  channel: String\n  currency: Currency!\n  binding: Boolean!\n  net: Float!\n  gross: Float\n  exchange: Exchange!\n  rules: [Rule!]!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-markupbchannelbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Markup.",(0,l.kt)("b",null,"channel"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"channel of markup application.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-markupbcurrencybcodecurrency--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Markup.",(0,l.kt)("b",null,"currency"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/currency"},(0,l.kt)("inlineCode",{parentName:"a"},"Currency!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Currency code indicating which currency should be paid.\nThis information is mandatory.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-markupbbindingbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Markup.",(0,l.kt)("b",null,"binding"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"It indicates if the price indicated in the gross must be respected. In case minimumSellingPrice is not empty, the binding indicates instead that the minimumSellingPrice must be respected.\nThat is, the customer can not sell the room / option at a price lower than that established by the supplier.\nThis information is mandatory.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-markupbnetbcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Markup.",(0,l.kt)("b",null,"net"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates the net price that the customer must pay to the supplier plus the markup.\nThis information is mandatory.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-markupbgrossbcodefloat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Markup.",(0,l.kt)("b",null,"gross"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates the retail price that the supplier sells to the customer plus the markup.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-markupbexchangebcodeexchange--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Markup.",(0,l.kt)("b",null,"exchange"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/exchange"},(0,l.kt)("inlineCode",{parentName:"a"},"Exchange!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Informs about the currency of origin, and the rate applied over result.\nThis information is mandatory.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-markupbrulesbcoderule--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Markup.",(0,l.kt)("b",null,"rules"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/rule"},(0,l.kt)("inlineCode",{parentName:"a"},"[Rule!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Breakdown of the applied rules for a markup")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"priceable-"},(0,l.kt)("a",{parentName:"h4",href:"/api/interfaces/priceable"},(0,l.kt)("inlineCode",{parentName:"a"},"Priceable"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/price"},(0,l.kt)("inlineCode",{parentName:"a"},"Price"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);