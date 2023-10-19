"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},f=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,p=s["".concat(c,".").concat(m)]||s[m]||g[m]||l;return a?r.createElement(p,o(o({ref:t},f),{},{components:a})):r.createElement(p,o({ref:t},f))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27207:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>f,Details:()=>p,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=a(87462),n=a(67294),l=a(3905);const o={id:"flight-offer-item-data",title:"FlightOfferItemData",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/flight-offer-item-data",id:"objects/flight-offer-item-data",title:"FlightOfferItemData",description:"No description",source:"@site/api/objects/flight-offer-item-data.mdx",sourceDirName:"objects",slug:"/objects/flight-offer-item-data",permalink:"/api/objects/flight-offer-item-data",draft:!1,tags:[],version:"current",frontMatter:{id:"flight-offer-item-data",title:"FlightOfferItemData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightOfferData",permalink:"/api/objects/flight-offer-data"},next:{title:"FlightOfferItem",permalink:"/api/objects/flight-offer-item"}},d={},f=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FlightOfferItemData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-flightofferitemdatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FlightOfferItemData.<b>price</b></code><Bullet /><code>FlightPrice!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-flightofferitemdatabpricebcodeflightprice--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FlightOfferItemData.<b>service</b></code><Bullet /><code>FlightService!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-flightofferitemdatabservicebcodeflightservice--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[c,d]=(0,n.useState)(i);return(0,l.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},b={Bullet:f,SpecifiedBy:s,Badge:g,toc:m,Details:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type FlightOfferItemData {\n  code: ID!\n  price: FlightPrice!\n  service: FlightService!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-flightofferitemdatabcodebcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"FlightOfferItemData.",(0,l.kt)("b",null,"code"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-flightofferitemdatabpricebcodeflightprice--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"FlightOfferItemData.",(0,l.kt)("b",null,"price"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/flight-price"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightPrice!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"offerItemID:ID!")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-flightofferitemdatabservicebcodeflightservice--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"FlightOfferItemData.",(0,l.kt)("b",null,"service"))),(0,l.kt)(f,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/flight-service"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightService!"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/flight-offer-item"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightOfferItem"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);