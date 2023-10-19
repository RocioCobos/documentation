"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67322],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(o),b=a,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||r;return o?n.createElement(m,l(l({ref:t},s),{},{components:o})):n.createElement(m,l({ref:t},s))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},50031:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>b});var n=o(87462),a=o(67294),r=o(3905);const l={id:"hotel-option-rate-rule",title:"HotelOptionRateRule",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/hotel-option-rate-rule",id:"objects/hotel-option-rate-rule",title:"HotelOptionRateRule",description:"No description",source:"@site/api/objects/hotel-option-rate-rule.mdx",sourceDirName:"objects",slug:"/objects/hotel-option-rate-rule",permalink:"/api/objects/hotel-option-rate-rule",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-option-rate-rule",title:"HotelOptionRateRule",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelOptionRateRestriction",permalink:"/api/objects/hotel-option-rate-restriction"},next:{title:"HotelOptionRate",permalink:"/api/objects/hotel-option-rate"}},p={},s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionRateRule.<b>type</b></code><Bullet /><code>RateRulesType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-hoteloptionraterulebtypebcoderaterulestype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionRateRule.<b>rates</b></code><Bullet /><code>[HotelOptionRate!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionraterulebratesbcodehoteloptionrate--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:o,children:l,startOpen:i=!1}=e;const[c,p]=(0,a.useState)(i);return(0,r.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:o),c&&l)},y={Bullet:s,SpecifiedBy:d,Badge:u,toc:b,Details:m},f="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(f,(0,n.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelOptionRateRule {\n  type: RateRulesType!\n  rates: [HotelOptionRate!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionraterulebtypebcoderaterulestype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionRateRule.",(0,r.kt)("b",null,"type"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/rate-rules-type"},(0,r.kt)("inlineCode",{parentName:"a"},"RateRulesType!"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rate rule type")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionraterulebratesbcodehoteloptionrate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionRateRule.",(0,r.kt)("b",null,"rates"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/hotel-option-rate"},(0,r.kt)("inlineCode",{parentName:"a"},"[HotelOptionRate!]"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rates applied to the option")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-option-search"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelOptionSearch"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);