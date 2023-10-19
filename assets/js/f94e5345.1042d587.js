"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6674],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>g});var o=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,o,a=function(e,t){if(null==e)return{};var l,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)l=n[o],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)l=n[o],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},c=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(l),b=a,g=p["".concat(i,".").concat(b)]||p[b]||u[b]||n;return l?o.createElement(g,r(r({ref:t},c),{},{components:l})):o.createElement(g,r({ref:t},c))}));function g(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,r=new Array(n);r[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<n;d++)r[d]=l[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,l)}b.displayName="MDXCreateElement"},20134:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>b});var o=l(87462),a=l(67294),n=l(3905);const r={id:"hotel-xhotel-list-input",title:"HotelXHotelListInput",hide_table_of_contents:!1},s=void 0,i={unversionedId:"inputs/hotel-xhotel-list-input",id:"inputs/hotel-xhotel-list-input",title:"HotelXHotelListInput",description:"No description",source:"@site/api/inputs/hotel-xhotel-list-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xhotel-list-input",permalink:"/api/inputs/hotel-xhotel-list-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xhotel-list-input",title:"HotelXHotelListInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXHotelFilterInput",permalink:"/api/inputs/hotel-xhotel-filter-input"},next:{title:"HotelXMapOptionInput",permalink:"/api/inputs/hotel-xmap-option-input"}},d={},c=()=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(a.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>access</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbaccessbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>hotelCodes</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbhotelcodesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>supplierHotelCodes</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbsupplierhotelcodesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>hotelName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbhotelnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>destinationCodes</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbdestinationcodesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>countries</b></code><Bullet /><code>[Country!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbcountriesbcodecountry--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>ranks</b></code><Bullet /><code>[Int!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbranksbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>maxSize</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbmaxsizebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>group</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbgroupbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXHotelListInput.<b>supplierCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxhotellistinputbsuppliercodebcodeid-",level:4}],g=e=>{let{dataOpen:t,dataClose:l,children:r,startOpen:s=!1}=e;const[i,d]=(0,a.useState)(s);return(0,n.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:l),i&&r)},h={Bullet:c,SpecifiedBy:p,Badge:u,toc:b,Details:g},m="wrapper";function k(e){let{components:t,...l}=e;return(0,n.kt)(m,(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXHotelListInput {\n  access: ID\n  hotelCodes: [String!]\n  supplierHotelCodes: [String!]\n  hotelName: String\n  destinationCodes: [String!]\n  countries: [Country!]\n  ranks: [Int!]\n  maxSize: Int\n  group: ID\n  supplierCode: ID\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbaccessbcodeid-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"access"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Indicates the access")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbhotelcodesbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"hotelCodes"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search by hotel codes. These hotel codes are used to perform search.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbsupplierhotelcodesbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"supplierHotelCodes"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search by hotel codes in supplier s context.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbhotelnamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"hotelName"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search by hotel name")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbdestinationcodesbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"destinationCodes"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Search by destination codes, only search by minimal destinations")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbcountriesbcodecountry--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"countries"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/country"},(0,n.kt)("inlineCode",{parentName:"a"},"[Country!]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by country")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbranksbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"ranks"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int!]"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by supplier rank")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbmaxsizebcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"maxSize"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Maxium number of items per page")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbgroupbcodeid-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"group"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The supplier s group. Only available if all permissions allowed")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hotelxhotellistinputbsuppliercodebcodeid-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelXHotelListInput.",(0,n.kt)("b",null,"supplierCode"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The supplier s unique code")))}k.isMDXComponent=!0}}]);