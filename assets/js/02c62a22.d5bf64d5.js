"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15857],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(o),b=a,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||r;return o?n.createElement(m,l(l({ref:t},d),{},{components:o})):n.createElement(m,l({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},33818:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>b});var n=o(87462),a=o(67294),r=o(3905);const l={id:"hotel-option-rate",title:"HotelOptionRate",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/hotel-option-rate",id:"objects/hotel-option-rate",title:"HotelOptionRate",description:"No description",source:"@site/api/objects/hotel-option-rate.mdx",sourceDirName:"objects",slug:"/objects/hotel-option-rate",permalink:"/api/objects/hotel-option-rate",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-option-rate",title:"HotelOptionRate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelOptionRateRule",permalink:"/api/objects/hotel-option-rate-rule"},next:{title:"HotelOptionSearch",permalink:"/api/objects/hotel-option-search"}},s={},d=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionRate.<b>code</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionratebcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionRate.<b>supplierCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionratebsuppliercodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionRate.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionratebdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionRate.<b>restrictions</b></code><Bullet /><code>[HotelOptionRateRestriction!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionratebrestrictionsbcodehoteloptionraterestriction--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:o,children:l,startOpen:i=!1}=e;const[c,s]=(0,a.useState)(i);return(0,r.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:o),c&&l)},g={Bullet:d,SpecifiedBy:p,Badge:u,toc:b,Details:m},f="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelOptionRate {\n  code: String\n  supplierCode: String\n  description: String\n  restrictions: [HotelOptionRateRestriction!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionratebcodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionRate.",(0,r.kt)("b",null,"code"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"the code that identifies the rate in request s context (if it is mapped). Otherwise is equal that supplierCode.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionratebsuppliercodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionRate.",(0,r.kt)("b",null,"supplierCode"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"rate code in supplier context")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionratebdescriptionbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionRate.",(0,r.kt)("b",null,"description"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"rate description")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionratebrestrictionsbcodehoteloptionraterestriction--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionRate.",(0,r.kt)("b",null,"restrictions"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/hotel-option-rate-restriction"},(0,r.kt)("inlineCode",{parentName:"a"},"[HotelOptionRateRestriction!]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"restrictions applied to the rate")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-option-rate-rule"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelOptionRateRule"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);