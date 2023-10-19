"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8601],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),p=s(a),g=n,h=p["".concat(c,".").concat(g)]||p[g]||b[g]||l;return a?o.createElement(h,d(d({ref:t},i),{},{components:a})):o.createElement(h,d({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,d=new Array(l);d[0]=g;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:n,d[1]=r;for(var s=2;s<l;s++)d[s]=a[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},28409:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>g});var o=a(87462),n=a(67294),l=a(3905);const d={id:"hotel-option-search",title:"HotelOptionSearch",hide_table_of_contents:!1},r=void 0,c={unversionedId:"objects/hotel-option-search",id:"objects/hotel-option-search",title:"HotelOptionSearch",description:"An option includes hotel information, meal plan, total price, conditions and room description",source:"@site/api/objects/hotel-option-search.mdx",sourceDirName:"objects",slug:"/objects/hotel-option-search",permalink:"/api/objects/hotel-option-search",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-option-search",title:"HotelOptionSearch",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelOptionRate",permalink:"/api/objects/hotel-option-rate"},next:{title:"HotelQuote",permalink:"/api/objects/hotel-quote"}},s={},i=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>supplierCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbsuppliercodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>accessCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbaccesscodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>market</b></code><Bullet /><code>String</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbmarketbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>markets</b></code><Bullet /><code>[String!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbmarketsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>hotelCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbhotelcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>hotelCodeSupplier</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbhotelcodesupplierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>hotelName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbhotelnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>boardCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbboardcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>boardCodeSupplier</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbboardcodesupplierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>paymentType</b></code><Bullet /><code>PaymentType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-hoteloptionsearchbpaymenttypebcodepaymenttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>status</b></code><Bullet /><code>StatusType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-hoteloptionsearchbstatusbcodestatustype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>occupancies</b></code><Bullet /><code>[Occupancy!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionsearchboccupanciesbcodeoccupancy--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>rooms</b></code><Bullet /><code>[Room!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionsearchbroomsbcoderoom--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>price</b></code><Bullet /><code>Price!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionsearchbpricebcodeprice--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>supplements</b></code><Bullet /><code>[Supplement!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionsearchbsupplementsbcodesupplement--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>surcharges</b></code><Bullet /><code>[Surcharge!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionsearchbsurchargesbcodesurcharge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>rateRules</b></code><Bullet /><code>[RateRulesType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-hoteloptionsearchbraterulesbcoderaterulestype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>cancelPolicy</b></code><Bullet /><code>CancelPolicy</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionsearchbcancelpolicybcodecancelpolicy-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>remarks</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbremarksbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>addOns</b></code><Bullet /><code>AddOns</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionsearchbaddonsbcodeaddons-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>token</b></code><Bullet /><code>String!</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbtokenbcodestring---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>id</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteloptionsearchbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>amenities</b></code><Bullet /><code>[Amenity!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionsearchbamenitiesbcodeamenity--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelOptionSearch.<b>rateRulesExtended</b></code><Bullet /><code>[HotelOptionRateRule!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteloptionsearchbraterulesextendedbcodehoteloptionraterule--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>BookableOptionSearch</code> <Badge class="badge badge--secondary" text="interface"/>',id:"bookableoptionsearch-",level:4},{value:"Member of",id:"member-of",level:3}],h=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:r=!1}=e;const[c,s]=(0,n.useState)(r);return(0,l.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&d)},m={Bullet:i,SpecifiedBy:p,Badge:b,toc:g,Details:h},u="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An option includes hotel information, meal plan, total price, conditions and room description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelOptionSearch implements BookableOptionSearch {\n  supplierCode: String!\n  accessCode: String!\n  market: String @deprecated\n  markets: [String!]!\n  hotelCode: String!\n  hotelCodeSupplier: String!\n  hotelName: String\n  boardCode: String!\n  boardCodeSupplier: String!\n  paymentType: PaymentType!\n  status: StatusType!\n  occupancies: [Occupancy!]!\n  rooms: [Room!]!\n  price: Price!\n  supplements: [Supplement!]\n  surcharges: [Surcharge!]\n  rateRules: [RateRulesType!]\n  cancelPolicy: CancelPolicy\n  remarks: String\n  addOns: AddOns\n  token: String! @deprecated\n  id: String!\n  amenities: [Amenity!]\n  rateRulesExtended: [HotelOptionRateRule!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbsuppliercodebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"supplierCode"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supplier that offers this option.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbaccesscodebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"accessCode"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Access code of this option.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbmarketbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"market"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"deprecated from 2019-12-11.")),(0,l.kt)("p",{parentName:"blockquote"},"Market of this option.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbmarketsbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"markets"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Markets of this option")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbhotelcodebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"hotelCode"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Code of the hotel in the context selected.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbhotelcodesupplierbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"hotelCodeSupplier"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supplier's hotel code.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbhotelnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"hotelName"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Name of the hotel.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbboardcodebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"boardCode"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Code of the board in the context selected.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbboardcodesupplierbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"boardCodeSupplier"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supplier's board code.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbpaymenttypebcodepaymenttype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"paymentType"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/payment-type"},(0,l.kt)("inlineCode",{parentName:"a"},"PaymentType!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates the payment type of the option returned. Possible options: MERCHANT, DIRECT, CARD_BOOKING, CARD_CHECK_IN and PAYX.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbstatusbcodestatustype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"status"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/status-type"},(0,l.kt)("inlineCode",{parentName:"a"},"StatusType!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The possible values in the response's status are Available (OK) or On Request (RQ).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchboccupanciesbcodeoccupancy--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"occupancies"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/occupancy"},(0,l.kt)("inlineCode",{parentName:"a"},"[Occupancy!]!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of occupancies for the request")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbroomsbcoderoom--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"rooms"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/room"},(0,l.kt)("inlineCode",{parentName:"a"},"[Room!]!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of rooms of the option returned.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbpricebcodeprice--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"price"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/price"},(0,l.kt)("inlineCode",{parentName:"a"},"Price!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies the prices (Gross, Net and Amount) of the option returned.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbsupplementsbcodesupplement--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"supplements"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/supplement"},(0,l.kt)("inlineCode",{parentName:"a"},"[Supplement!]"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of supplements of the option returned.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbsurchargesbcodesurcharge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"surcharges"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/surcharge"},(0,l.kt)("inlineCode",{parentName:"a"},"[Surcharge!]"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of surcharges of the option returned.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbraterulesbcoderaterulestype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"rateRules"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/rate-rules-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[RateRulesType!]"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies rate rules of the option returned. Note: If the option does not have any rate rule, then the option is NORMAL rate.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbcancelpolicybcodecancelpolicy-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"cancelPolicy"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/cancel-policy"},(0,l.kt)("inlineCode",{parentName:"a"},"CancelPolicy"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies cancel policies of the option returned.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbremarksbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"remarks"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Additional information about the option.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbaddonsbcodeaddons-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"addOns"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/add-ons"},(0,l.kt)("inlineCode",{parentName:"a"},"AddOns"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Additional information about the option. It is only available for the partners that uses our Distribution-X solution.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbtokenbcodestring---"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"token"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"deprecated from 2019-02-05.")),(0,l.kt)("p",{parentName:"blockquote"},"Token for Deep Link")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbidbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"id"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"OptionRefID is a unique identifier assigned to each option. It should not be modified and should not be used externally, as it is an internal TGX system identifier.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbamenitiesbcodeamenity--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"amenities"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/amenity"},(0,l.kt)("inlineCode",{parentName:"a"},"[Amenity!]"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Option-level amenities provide information about features intended to enhance comfort and enjoyment. Examples include swimming pools, shopping centers, etc.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hoteloptionsearchbraterulesextendedbcodehoteloptionraterule--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelOptionSearch.",(0,l.kt)("b",null,"rateRulesExtended"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/hotel-option-rate-rule"},(0,l.kt)("inlineCode",{parentName:"a"},"[HotelOptionRateRule!]"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"RateRules contains all the rules that will be applied to book the option.")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"bookableoptionsearch-"},(0,l.kt)("a",{parentName:"h4",href:"/api/interfaces/bookable-option-search"},(0,l.kt)("inlineCode",{parentName:"a"},"BookableOptionSearch"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/hotel-search"},(0,l.kt)("inlineCode",{parentName:"a"},"HotelSearch"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);