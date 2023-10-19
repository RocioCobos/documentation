"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},d=Object.keys(e);for(o=0;o<d.length;o++)a=d[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(o=0;o<d.length;o++)a=d[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,c=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,g=m["".concat(c,".").concat(p)]||m[p]||b[p]||d;return a?o.createElement(g,l(l({ref:t},i),{},{components:a})):o.createElement(g,l({ref:t},i))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,l=new Array(d);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[m]="string"==typeof e?e:n,l[1]=r;for(var s=2;s<d;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},29012:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=a(87462),n=a(67294),d=a(3905);const l={id:"room-data",title:"RoomData",hide_table_of_contents:!1},r=void 0,c={unversionedId:"objects/room-data",id:"objects/room-data",title:"RoomData",description:"Room data",source:"@site/api/objects/room-data.mdx",sourceDirName:"objects",slug:"/objects/room-data",permalink:"/api/objects/room-data",draft:!1,tags:[],version:"current",frontMatter:{id:"room-data",title:"RoomData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RoomCriteria",permalink:"/api/objects/room-criteria"},next:{title:"RoomEdge",permalink:"/api/objects/room-edge"}},s={},i=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-roomdatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>roomCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-roomdatabroomcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>texts</b></code><Bullet /><code>[Text!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomdatabtextsbcodetext--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>source</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-roomdatabsourcebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>occupancies</b></code><Bullet /><code>OccupancyStatic</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomdataboccupanciesbcodeoccupancystatic-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>amenities</b></code><Bullet /><code>[AmenityStatic!]</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomdatabamenitiesbcodeamenitystatic---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>views</b></code><Bullet /><code>[View!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomdatabviewsbcodeview--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>medias</b></code><Bullet /><code>[Media!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomdatabmediasbcodemedia--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>beds</b></code><Bullet /><code>[BedStatic!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomdatabbedsbcodebedstatic--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>area</b></code><Bullet /><code>Area</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-roomdatabareabcodearea-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RoomData.<b>allAmenities</b></code><Bullet /><code>HotelXAmenityConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-roomdataballamenitiesbcodehotelxamenityconnection-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:r=!1}=e;const[c,s]=(0,n.useState)(r);return(0,d.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&l)},u={Bullet:i,SpecifiedBy:m,Badge:b,toc:p,Details:g},k="wrapper";function y(e){let{components:t,...a}=e;return(0,d.kt)(k,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Room data"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type RoomData {\n  code: ID!\n  roomCode: String!\n  texts(languages: [Language!]): [Text!]\n  source: String\n  occupancies: OccupancyStatic\n  amenities: [AmenityStatic!] @deprecated\n  views: [View!]\n  medias: [Media!]\n  beds: [BedStatic!]\n  area: Area\n  allAmenities(mapOptions: [HotelXMapOptionInput!]): HotelXAmenityConnection\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdatabcodebcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"code"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Internal code for checking availability")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdatabroomcodebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"roomCode"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Code of the hotel in the Supplier selected")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdatabtextsbcodetext--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"texts"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/text"},(0,d.kt)("inlineCode",{parentName:"a"},"[Text!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Label"),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-roomdatatextsblanguagesbcodelanguage--"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.texts.",(0,d.kt)("b",null,"languages"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/api/scalars/language"},(0,d.kt)("inlineCode",{parentName:"a"},"[Language!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdatabsourcebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"source"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Room source")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdataboccupanciesbcodeoccupancystatic-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"occupancies"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/occupancy-static"},(0,d.kt)("inlineCode",{parentName:"a"},"OccupancyStatic"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Room occupancies")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdatabamenitiesbcodeamenitystatic---"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"amenities"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/amenity-static"},(0,d.kt)("inlineCode",{parentName:"a"},"[AmenityStatic!]"))," ",(0,d.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,d.kt)("p",{parentName:"admonition"},"deprecated from 2021-09-17. Please, use allAmenities")),(0,d.kt)("p",{parentName:"blockquote"},"Room amenities")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdatabviewsbcodeview--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"views"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/view"},(0,d.kt)("inlineCode",{parentName:"a"},"[View!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Room views")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdatabmediasbcodemedia--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"medias"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/media"},(0,d.kt)("inlineCode",{parentName:"a"},"[Media!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Room medias")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdatabbedsbcodebedstatic--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"beds"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/bed-static"},(0,d.kt)("inlineCode",{parentName:"a"},"[BedStatic!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Room beds")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdatabareabcodearea-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"area"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/area"},(0,d.kt)("inlineCode",{parentName:"a"},"Area"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Room area in square meters.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-roomdataballamenitiesbcodehotelxamenityconnection-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.",(0,d.kt)("b",null,"allAmenities"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/hotel-xamenity-connection"},(0,d.kt)("inlineCode",{parentName:"a"},"HotelXAmenityConnection"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Amenities with mapping"),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-roomdataallamenitiesbmapoptionsbcodehotelxmapoptioninput--"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"RoomData.allAmenities.",(0,d.kt)("b",null,"mapOptions"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/api/inputs/hotel-xmap-option-input"},(0,d.kt)("inlineCode",{parentName:"a"},"[HotelXMapOptionInput!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/objects/room-static"},(0,d.kt)("inlineCode",{parentName:"a"},"RoomStatic"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);