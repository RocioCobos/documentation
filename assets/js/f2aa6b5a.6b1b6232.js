"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84766],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=a.createContext({}),c=function(e){var t=a.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(f.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,f=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=c(r),p=o,b=s["".concat(f,".").concat(p)]||s[p]||y[p]||n;return r?a.createElement(b,l(l({ref:t},i),{},{components:r})):a.createElement(b,l({ref:t},i))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=p;var d={};for(var f in t)hasOwnProperty.call(t,f)&&(d[f]=t[f]);d.originalType=e,d[s]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},38035:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>f,toc:()=>p});var a=r(87462),o=r(67294),n=r(3905);const l={id:"ferry-offer",title:"FerryOffer",hide_table_of_contents:!1},d=void 0,f={unversionedId:"objects/ferry-offer",id:"objects/ferry-offer",title:"FerryOffer",description:"No description",source:"@site/api/objects/ferry-offer.mdx",sourceDirName:"objects",slug:"/objects/ferry-offer",permalink:"/api/objects/ferry-offer",draft:!1,tags:[],version:"current",frontMatter:{id:"ferry-offer",title:"FerryOffer",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FerryOfferData",permalink:"/api/objects/ferry-offer-data"},next:{title:"FerryOrderPayload",permalink:"/api/objects/ferry-order-payload"}},c={},i=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FerryOffer.<b>adviseMessage</b></code><Bullet /><code>AdviseMessage</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferryofferbadvisemessagebcodeadvisemessage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryOffer.<b>code</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferryofferbcodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryOffer.<b>ferryOfferData</b></code><Bullet /><code>FerryOfferData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferryofferbferryofferdatabcodeferryofferdata-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:d=!1}=e;const[f,c]=(0,o.useState)(d);return(0,n.kt)("details",(0,a.Z)({},f?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},f?t:r),f&&l)},m={Bullet:i,SpecifiedBy:s,Badge:y,toc:p,Details:b},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type FerryOffer {\n  adviseMessage: AdviseMessage\n  code: ID\n  ferryOfferData: FerryOfferData\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-ferryofferbadvisemessagebcodeadvisemessage-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FerryOffer.",(0,n.kt)("b",null,"adviseMessage"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,n.kt)("inlineCode",{parentName:"a"},"AdviseMessage"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-ferryofferbcodebcodeid-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FerryOffer.",(0,n.kt)("b",null,"code"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Unique Identifier. Required to validate availability.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-ferryofferbferryofferdatabcodeferryofferdata-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FerryOffer.",(0,n.kt)("b",null,"ferryOfferData"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/ferry-offer-data"},(0,n.kt)("inlineCode",{parentName:"a"},"FerryOfferData"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/ferry-quote-payload"},(0,n.kt)("inlineCode",{parentName:"a"},"FerryQuotePayload"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/api/objects/ferry-search-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"FerrySearchConnection"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/api/objects/ferry-search-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"FerrySearchEdge"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);