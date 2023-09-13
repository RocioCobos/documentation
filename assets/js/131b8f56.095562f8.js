"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90335],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=d(a),y=l,m=p["".concat(i,".").concat(y)]||p[y]||b[y]||o;return a?n.createElement(m,c(c({ref:t},s),{},{components:a})):n.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,c=new Array(o);c[0]=y;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[p]="string"==typeof e?e:l,c[1]=r;for(var d=2;d<o;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},60746:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>y});var n=a(87462),l=a(67294),o=a(3905);const c={id:"cancel-policy",title:"CancelPolicy",hide_table_of_contents:!1},r=void 0,i={unversionedId:"objects/cancel-policy",id:"objects/cancel-policy",title:"CancelPolicy",description:"Information about a policy cancellation.",source:"@site/api/objects/cancel-policy.mdx",sourceDirName:"objects",slug:"/objects/cancel-policy",permalink:"/api/objects/cancel-policy",draft:!1,tags:[],version:"current",frontMatter:{id:"cancel-policy",title:"CancelPolicy",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CancelPenalty",permalink:"/api/objects/cancel-penalty"},next:{title:"CategoryConnection",permalink:"/api/objects/category-connection"}},d={},s=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelPolicy.<b>refundable</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cancelpolicybrefundablebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CancelPolicy.<b>cancelPenalties</b></code><Bullet /><code>[CancelPenalty!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-cancelpolicybcancelpenaltiesbcodecancelpenalty--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CancelPolicy.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cancelpolicybdescriptionbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:r=!1}=e;const[i,d]=(0,l.useState)(r);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&c)},u={Bullet:s,SpecifiedBy:p,Badge:b,toc:y,Details:m},f="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Information about a policy cancellation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelPolicy {\n  refundable: Boolean!\n  cancelPenalties: [CancelPenalty!]\n  description: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cancelpolicybrefundablebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CancelPolicy.",(0,o.kt)("b",null,"refundable"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates if the option is refundable or non-refundable")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cancelpolicybcancelpenaltiesbcodecancelpenalty--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CancelPolicy.",(0,o.kt)("b",null,"cancelPenalties"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/cancel-penalty"},(0,o.kt)("inlineCode",{parentName:"a"},"[CancelPenalty!]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"List of cancellation penalties")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cancelpolicybdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CancelPolicy.",(0,o.kt)("b",null,"description"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/booking-detail"},(0,o.kt)("inlineCode",{parentName:"a"},"BookingDetail"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/ferry-offer-data"},(0,o.kt)("inlineCode",{parentName:"a"},"FerryOfferData"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/ferry-order-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"FerryOrderPayload"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-booking-detail"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelBookingDetail"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-option-quote"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelOptionQuote"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-option-search"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelOptionSearch"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);