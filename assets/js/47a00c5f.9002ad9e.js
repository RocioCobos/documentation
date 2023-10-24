"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21766],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,h=p["".concat(d,".").concat(u)]||p[u]||g[u]||o;return a?r.createElement(h,c(c({ref:t},i),{},{components:a})):r.createElement(h,c({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23151:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=a(87462),n=a(67294),o=a(3905);const c={id:"surcharge",title:"Surcharge",hide_table_of_contents:!1},l=void 0,d={unversionedId:"objects/surcharge",id:"objects/surcharge",title:"Surcharge",description:"Indicates all the necessary information of the surcharge, which can be already added to the option returned or may be addded later in the booking step.",source:"@site/api/objects/surcharge.mdx",sourceDirName:"objects",slug:"/objects/surcharge",permalink:"/api/objects/surcharge",draft:!1,tags:[],version:"current",frontMatter:{id:"surcharge",title:"Surcharge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Supplier",permalink:"/api/objects/supplier"},next:{title:"SystemConnection",permalink:"/api/objects/system-connection"}},s={},i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Surcharge.<b>code</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-surchargebcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Surcharge.<b>chargeType</b></code><Bullet /><code>ChargeType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-surchargebchargetypebcodechargetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Surcharge.<b>mandatory</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-surchargebmandatorybcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Surcharge.<b>price</b></code><Bullet /><code>Price!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-surchargebpricebcodeprice--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Surcharge.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-surchargebdescriptionbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],h=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:l=!1}=e;const[d,s]=(0,n.useState)(l);return(0,o.kt)("details",(0,r.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&c)},b={Bullet:i,SpecifiedBy:p,Badge:g,toc:u,Details:h},m="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Indicates all the necessary information of the surcharge, which can be already added to the option returned or may be addded later in the booking step."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Surcharge {\n  code: String\n  chargeType: ChargeType!\n  mandatory: Boolean!\n  price: Price!\n  description: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-surchargebcodebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Surcharge.",(0,o.kt)("b",null,"code"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the surcharge code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-surchargebchargetypebcodechargetype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Surcharge.",(0,o.kt)("b",null,"chargeType"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/charge-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ChargeType!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the charge type. We need to know whether the supplements have to be paid when the consumer gets to the hotel or beforehand.\nPossible charge types: INCLUDE or EXCLUDE.\nwhen INCLUDE : this surcharge is mandatory and included in the option s price\nwhen EXCLUDE : this surcharge is not included in the option s price")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-surchargebmandatorybcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Surcharge.",(0,o.kt)("b",null,"mandatory"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates if the surcharge is mandatory or not. If mandatory, this surcharge will be applied to this option.\nIf the chargeType is EXCLUDE the customer will have to pay it directly at the hotel.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-surchargebpricebcodeprice--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Surcharge.",(0,o.kt)("b",null,"price"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/price"},(0,o.kt)("inlineCode",{parentName:"a"},"Price!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the surcharge price.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-surchargebdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Surcharge.",(0,o.kt)("b",null,"description"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Specifies the surcharge description.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-option-quote"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelOptionQuote"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-option-search"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelOptionSearch"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/room"},(0,o.kt)("inlineCode",{parentName:"a"},"Room"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);