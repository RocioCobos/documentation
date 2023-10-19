"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,b=p["".concat(i,".").concat(m)]||p[m]||y[m]||o;return a?n.createElement(b,l(l({ref:t},s),{},{components:a})):n.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:r,l[1]=d;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64558:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905);const l={id:"itinerary-map",title:"ItineraryMap",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/itinerary-map",id:"objects/itinerary-map",title:"ItineraryMap",description:"No description",source:"@site/api/objects/itinerary-map.mdx",sourceDirName:"objects",slug:"/objects/itinerary-map",permalink:"/api/objects/itinerary-map",draft:!1,tags:[],version:"current",frontMatter:{id:"itinerary-map",title:"ItineraryMap",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Invitation",permalink:"/api/objects/invitation"},next:{title:"Journey",permalink:"/api/objects/journey"}},c={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ItineraryMap.<b>order</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-itinerarymapborderbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ItineraryMap.<b>productToken</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-itinerarymapbproducttokenbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ItineraryMap.<b>productType</b></code><Bullet /><code>ProductType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-itinerarymapbproducttypebcodeproducttype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ItineraryMap.<b>ref</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-itinerarymapbrefbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ItineraryMap.<b>startDay</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-itinerarymapbstartdaybcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[i,c]=(0,r.useState)(d);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},u={Bullet:s,SpecifiedBy:p,Badge:y,toc:m,Details:b},g="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ItineraryMap {\n  order: Int!\n  productToken: String!\n  productType: ProductType\n  ref: String!\n  startDay: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-itinerarymapborderbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ItineraryMap.",(0,o.kt)("b",null,"order"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates de chronological order of each entry")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-itinerarymapbproducttokenbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ItineraryMap.",(0,o.kt)("b",null,"productToken"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Product token that will be used in Book (may not be received in search)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-itinerarymapbproducttypebcodeproducttype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ItineraryMap.",(0,o.kt)("b",null,"productType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/product-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductType"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Type of the product (Transport, accomodation...)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-itinerarymapbrefbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ItineraryMap.",(0,o.kt)("b",null,"ref"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ref to identify the entry in it's specified List (Accommodations, Transports...)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-itinerarymapbstartdaybcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ItineraryMap.",(0,o.kt)("b",null,"startDay"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Day where activity will take place")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/booking-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"BookingPayload"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/book-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"BookPayload"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/quote-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"QuotePayload"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/search-option"},(0,o.kt)("inlineCode",{parentName:"a"},"SearchOption"))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);