"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(a),b=o,y=p["".concat(c,".").concat(b)]||p[b]||m[b]||r;return a?n.createElement(y,l(l({ref:t},s),{},{components:a})):n.createElement(y,l({ref:t},s))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=b;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:o,l[1]=d;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},40707:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>b});var n=a(87462),o=a(67294),r=a(3905);const l={id:"mandatory-fee",title:"MandatoryFee",hide_table_of_contents:!1},d=void 0,c={unversionedId:"objects/mandatory-fee",id:"objects/mandatory-fee",title:"MandatoryFee",description:"No description",source:"@site/api/objects/mandatory-fee.mdx",sourceDirName:"objects",slug:"/objects/mandatory-fee",permalink:"/api/objects/mandatory-fee",draft:!1,tags:[],version:"current",frontMatter:{id:"mandatory-fee",title:"MandatoryFee",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ManagedGroup",permalink:"/api/objects/managed-group"},next:{title:"Map",permalink:"/api/objects/map"}},i={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MandatoryFee.<b>duration</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mandatoryfeebdurationbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MandatoryFee.<b>mandatoryFeeCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mandatoryfeebmandatoryfeecodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MandatoryFee.<b>price</b></code><Bullet /><code>PriceStatic!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mandatoryfeebpricebcodepricestatic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MandatoryFee.<b>scope</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mandatoryfeebscopebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MandatoryFee.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mandatoryfeebnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MandatoryFee.<b>text</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mandatoryfeebtextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MandatoryFee.<b>included</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-mandatoryfeebincludedbcodeboolean--",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[c,i]=(0,o.useState)(d);return(0,r.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},g={Bullet:s,SpecifiedBy:p,Badge:m,toc:b,Details:y},u="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type MandatoryFee {\n  duration: String\n  mandatoryFeeCode: String!\n  price: PriceStatic!\n  scope: String\n  name: String\n  text: String\n  included: Boolean!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mandatoryfeebdurationbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MandatoryFee.",(0,r.kt)("b",null,"duration"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fee duration")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mandatoryfeebmandatoryfeecodebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MandatoryFee.",(0,r.kt)("b",null,"mandatoryFeeCode"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Native supplier Mandatry Fee")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mandatoryfeebpricebcodepricestatic--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MandatoryFee.",(0,r.kt)("b",null,"price"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/price-static"},(0,r.kt)("inlineCode",{parentName:"a"},"PriceStatic!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fee price")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mandatoryfeebscopebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MandatoryFee.",(0,r.kt)("b",null,"scope"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The scope of the fee")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mandatoryfeebnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MandatoryFee.",(0,r.kt)("b",null,"name"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"the name of the fee")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mandatoryfeebtextbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MandatoryFee.",(0,r.kt)("b",null,"text"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fee description")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-mandatoryfeebincludedbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"MandatoryFee.",(0,r.kt)("b",null,"included"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates if the fee is included in the price")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-data"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelData"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);