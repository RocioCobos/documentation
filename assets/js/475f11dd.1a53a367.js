"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23014],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,y=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return a?n.createElement(y,l(l({ref:t},d),{},{components:a})):n.createElement(y,l({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1420:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=a(67294),o=a(3905);const l={id:"amount-type",title:"AmountType",hide_table_of_contents:!1},c=void 0,i={unversionedId:"objects/amount-type",id:"objects/amount-type",title:"AmountType",description:"An amount is a number of monetary units specified in a currency.",source:"@site/api/objects/amount-type.mdx",sourceDirName:"objects",slug:"/objects/amount-type",permalink:"/api/objects/amount-type",draft:!1,tags:[],version:"current",frontMatter:{id:"amount-type",title:"AmountType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AmountCancelPenalty",permalink:"/api/objects/amount-cancel-penalty"},next:{title:"API",permalink:"/api/objects/api"}},p={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AmountType.<b>amount</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-amounttypebamountbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AmountType.<b>curCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-amounttypebcurcodebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[i,p]=(0,r.useState)(c);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},f={Bullet:d,SpecifiedBy:s,Badge:m,toc:u,Details:y},b="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An amount is a number of monetary units specified in a currency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AmountType {\n  amount: Float\n  curCode: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-amounttypebamountbcodefloat-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AmountType.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-amounttypebcurcodebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AmountType.",(0,o.kt)("b",null,"curCode"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/fee"},(0,o.kt)("inlineCode",{parentName:"a"},"Fee"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/flight-offer-data"},(0,o.kt)("inlineCode",{parentName:"a"},"FlightOfferData"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/flight-price"},(0,o.kt)("inlineCode",{parentName:"a"},"FlightPrice"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/flight-surcharge"},(0,o.kt)("inlineCode",{parentName:"a"},"FlightSurcharge"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/tax-summary-type"},(0,o.kt)("inlineCode",{parentName:"a"},"TaxSummaryType"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/tax-type"},(0,o.kt)("inlineCode",{parentName:"a"},"TaxType"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);