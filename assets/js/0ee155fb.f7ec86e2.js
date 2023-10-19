"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},d=Object.keys(e);for(o=0;o<d.length;o++)a=d[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)a=d[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),i=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,l=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=i(a),b=n,p=m["".concat(l,".").concat(b)]||m[b]||g[b]||d;return a?o.createElement(p,c(c({ref:t},s),{},{components:a})):o.createElement(p,c({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,c=new Array(d);c[0]=b;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:n,c[1]=r;for(var i=2;i<d;i++)c[i]=a[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},47965:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>b});var o=a(87462),n=a(67294),d=a(3905);const c={id:"accommodation",title:"Accommodation",hide_table_of_contents:!1},r=void 0,l={unversionedId:"objects/accommodation",id:"objects/accommodation",title:"Accommodation",description:"No description",source:"@site/api/objects/accommodation.mdx",sourceDirName:"objects",slug:"/objects/accommodation",permalink:"/api/objects/accommodation",draft:!1,tags:[],version:"current",frontMatter:{id:"accommodation",title:"Accommodation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Access",permalink:"/api/objects/access"},next:{title:"ActivationConnection",permalink:"/api/objects/activation-connection"}},i={},s=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Accommodation.<b>boardCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accommodationbboardcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Accommodation.<b>boardName</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accommodationbboardnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Accommodation.<b>cityCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accommodationbcitycodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Accommodation.<b>hotelCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accommodationbhotelcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Accommodation.<b>hotelName</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accommodationbhotelnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Accommodation.<b>ref</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accommodationbrefbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Accommodation.<b>roomCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accommodationbroomcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Accommodation.<b>roomName</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accommodationbroomnamebcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:r=!1}=e;const[l,i]=(0,n.useState)(r);return(0,d.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&c)},y={Bullet:s,SpecifiedBy:m,Badge:g,toc:b,Details:p},k="wrapper";function u(e){let{components:t,...a}=e;return(0,d.kt)(k,(0,o.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type Accommodation {\n  boardCode: String!\n  boardName: String!\n  cityCode: String\n  hotelCode: String!\n  hotelName: String!\n  ref: String!\n  roomCode: String!\n  roomName: String!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-accommodationbboardcodebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Accommodation.",(0,d.kt)("b",null,"boardCode"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Board code assigned to the accommodation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-accommodationbboardnamebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Accommodation.",(0,d.kt)("b",null,"boardName"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Board name assigned to the accommodation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-accommodationbcitycodebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Accommodation.",(0,d.kt)("b",null,"cityCode"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"City code where the accommodation belongs to")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-accommodationbhotelcodebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Accommodation.",(0,d.kt)("b",null,"hotelCode"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Code of the accommodation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-accommodationbhotelnamebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Accommodation.",(0,d.kt)("b",null,"hotelName"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"name of the accommodation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-accommodationbrefbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Accommodation.",(0,d.kt)("b",null,"ref"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"ref to see where it belongs in the itinerary map (if necessary)")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-accommodationbroomcodebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Accommodation.",(0,d.kt)("b",null,"roomCode"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Code of the room assigned to the accommodation")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-accommodationbroomnamebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Accommodation.",(0,d.kt)("b",null,"roomName"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"name of the room assigned to the accommodation")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/objects/booking-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"BookingPayload"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/book-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"BookPayload"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/quote-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"QuotePayload"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/search-option"},(0,d.kt)("inlineCode",{parentName:"a"},"SearchOption"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);