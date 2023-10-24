"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>p});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),f=c(r),u=o,p=f["".concat(s,".").concat(u)]||f[u]||y[u]||n;return r?a.createElement(p,l(l({ref:t},i),{},{components:r})):a.createElement(p,l({ref:t},i))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[f]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},18370:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=r(87462),o=r(67294),n=r(3905);const l={id:"ferry-quote-payload",title:"FerryQuotePayload",hide_table_of_contents:!1},d=void 0,s={unversionedId:"objects/ferry-quote-payload",id:"objects/ferry-quote-payload",title:"FerryQuotePayload",description:"No description",source:"@site/api/objects/ferry-quote-payload.mdx",sourceDirName:"objects",slug:"/objects/ferry-quote-payload",permalink:"/api/objects/ferry-quote-payload",draft:!1,tags:[],version:"current",frontMatter:{id:"ferry-quote-payload",title:"FerryQuotePayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FerryOrderPayload",permalink:"/api/objects/ferry-order-payload"},next:{title:"FerrySearchConnection",permalink:"/api/objects/ferry-search-connection"}},c={},i=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FerryQuotePayload.<b>adviseMessages</b></code><Bullet /><code>[AdviseMessage]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferryquotepayloadbadvisemessagesbcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryQuotePayload.<b>quoteToken</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferryquotepayloadbquotetokenbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryQuotePayload.<b>departureOffer</b></code><Bullet /><code>FerryOffer</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferryquotepayloadbdepartureofferbcodeferryoffer-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryQuotePayload.<b>returnOffer</b></code><Bullet /><code>FerryOffer</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferryquotepayloadbreturnofferbcodeferryoffer-",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:d=!1}=e;const[s,c]=(0,o.useState)(d);return(0,n.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&l)},b={Bullet:i,SpecifiedBy:f,Badge:y,toc:u,Details:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type FerryQuotePayload {\n  adviseMessages: [AdviseMessage]\n  quoteToken: String\n  departureOffer: FerryOffer\n  returnOffer: FerryOffer\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-ferryquotepayloadbadvisemessagesbcodeadvisemessage--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FerryQuotePayload.",(0,n.kt)("b",null,"adviseMessages"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,n.kt)("inlineCode",{parentName:"a"},"[AdviseMessage]"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-ferryquotepayloadbquotetokenbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FerryQuotePayload.",(0,n.kt)("b",null,"quoteToken"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Required to Book.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-ferryquotepayloadbdepartureofferbcodeferryoffer-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FerryQuotePayload.",(0,n.kt)("b",null,"departureOffer"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/ferry-offer"},(0,n.kt)("inlineCode",{parentName:"a"},"FerryOffer"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-ferryquotepayloadbreturnofferbcodeferryoffer-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"FerryQuotePayload.",(0,n.kt)("b",null,"returnOffer"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/ferry-offer"},(0,n.kt)("inlineCode",{parentName:"a"},"FerryOffer"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/transport-query"},(0,n.kt)("inlineCode",{parentName:"a"},"TransportQuery"))," ",(0,n.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);