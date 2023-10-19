"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84795],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var o=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=o.createContext({}),s=function(e){var t=o.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=s(e.components);return o.createElement(r.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,r=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(a),g=l,m=p["".concat(r,".").concat(g)]||p[g]||b[g]||n;return a?o.createElement(m,d(d({ref:t},i),{},{components:a})):o.createElement(m,d({ref:t},i))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,d=new Array(n);d[0]=g;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c[p]="string"==typeof e?e:l,d[1]=c;for(var s=2;s<n;s++)d[s]=a[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},39203:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>g});var o=a(87462),l=a(67294),n=a(3905);const d={id:"hotel-data",title:"HotelData",hide_table_of_contents:!1},c=void 0,r={unversionedId:"objects/hotel-data",id:"objects/hotel-data",title:"HotelData",description:"Hotel data",source:"@site/api/objects/hotel-data.mdx",sourceDirName:"objects",slug:"/objects/hotel-data",permalink:"/api/objects/hotel-data",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-data",title:"HotelData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelConnection",permalink:"/api/objects/hotel-connection"},next:{title:"HotelEdge",permalink:"/api/objects/hotel-edge"}},s={},i=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteldatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>hotelCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteldatabhotelcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>hotelCodeSupplier</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteldatabhotelcodesupplierbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>giataData</b></code><Bullet /><code>GiataData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabgiatadatabcodegiatadata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>hotelName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteldatabhotelnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>categoryCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteldatabcategorycodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>property</b></code><Bullet /><code>Property</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabpropertybcodeproperty--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>chainCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteldatabchaincodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>exclusiveDeal</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteldatabexclusivedealbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>location</b></code><Bullet /><code>Location!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatablocationbcodelocation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>contact</b></code><Bullet /><code>Contact</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabcontactbcodecontact-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>rank</b></code><Bullet /><code>[Int!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteldatabrankbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>cardTypes</b></code><Bullet /><code>[PaymentCardType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-hoteldatabcardtypesbcodepaymentcardtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>amenities</b></code><Bullet /><code>[AmenityStatic!]</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabamenitiesbcodeamenitystatic---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>medias</b></code><Bullet /><code>[Media!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabmediasbcodemedia--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>descriptions</b></code><Bullet /><code>[Description!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabdescriptionsbcodedescription--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.descriptions.<b>languages</b></code><Bullet /><code>[Language!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hoteldatadescriptionsblanguagesbcodelanguage--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>rooms</b></code><Bullet /><code>RoomConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabroomsbcoderoomconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>propertyType</b></code><Bullet /><code>PropertyType</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabpropertytypebcodepropertytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>mandatoryFees</b></code><Bullet /><code>[MandatoryFee!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabmandatoryfeesbcodemandatoryfee--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>checkIn</b></code><Bullet /><code>CheckInformation</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabcheckinbcodecheckinformation-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>checkOut</b></code><Bullet /><code>CheckInformation</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabcheckoutbcodecheckinformation-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>allAmenities</b></code><Bullet /><code>HotelXAmenityConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldataballamenitiesbcodehotelxamenityconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelData.<b>mappings</b></code><Bullet /><code>[HotelXMappedCode!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hoteldatabmappingsbcodehotelxmappedcode--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:c=!1}=e;const[r,s]=(0,l.useState)(c);return(0,n.kt)("details",(0,o.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&d)},y={Bullet:i,SpecifiedBy:p,Badge:b,toc:g,Details:m},k="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,o.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hotel data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelData {\n  code: ID!\n  hotelCode: String!\n  hotelCodeSupplier: String\n  giataData: GiataData\n  hotelName: String\n  categoryCode: String\n  property: Property @deprecated\n  chainCode: String\n  exclusiveDeal: Boolean!\n  location: Location!\n  contact: Contact\n  rank: [Int!]!\n  cardTypes: [PaymentCardType!]\n  amenities: [AmenityStatic!] @deprecated\n  medias: [Media!]\n  descriptions(\n    types: [DescriptionType!]\n    languages: [Language!]\n  ): [Description!]\n  rooms: RoomConnection\n  propertyType: PropertyType\n  mandatoryFees: [MandatoryFee!]\n  checkIn: CheckInformation\n  checkOut: CheckInformation\n  allAmenities(mapOptions: [HotelXMapOptionInput!]): HotelXAmenityConnection\n  mappings(contexts: [String!]): [HotelXMappedCode!]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabcodebcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"code"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Internal code.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabhotelcodebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"hotelCode"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Code to perform availability.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabhotelcodesupplierbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"hotelCodeSupplier"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Native supplier hotel code.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabgiatadatabcodegiatadata-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"giataData"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/giata-data"},(0,n.kt)("inlineCode",{parentName:"a"},"GiataData"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Giata data stored in giata.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabhotelnamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"hotelName"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Name of the hotel in the Supplier selected.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabcategorycodebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"categoryCode"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Hotel category (for example number of stars).")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabpropertybcodeproperty--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"property"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/property"},(0,n.kt)("inlineCode",{parentName:"a"},"Property"))," ",(0,n.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Deprecated from 2019-10-16. Redundant information")),(0,n.kt)("p",{parentName:"blockquote"},"Indicates property type")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabchaincodebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"chainCode"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Hotel chain code")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabexclusivedealbcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"exclusiveDeal"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Indicates that the Hotel has an Exclusive Deal.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatablocationbcodelocation--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"location"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/location"},(0,n.kt)("inlineCode",{parentName:"a"},"Location!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Indicates the location of the hotel")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabcontactbcodecontact-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"contact"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/contact"},(0,n.kt)("inlineCode",{parentName:"a"},"Contact"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Contact contains information about hotel contact.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabrankbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"rank"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"[Int!]!"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rank indicates the supplier categorization.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabcardtypesbcodepaymentcardtype--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"cardTypes"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/enums/payment-card-type"},(0,n.kt)("inlineCode",{parentName:"a"},"[PaymentCardType!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of credit cards")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabamenitiesbcodeamenitystatic---"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"amenities"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/amenity-static"},(0,n.kt)("inlineCode",{parentName:"a"},"[AmenityStatic!]"))," ",(0,n.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"deprecated from 2021-09-17. Please, use allAmenities")),(0,n.kt)("p",{parentName:"blockquote"},"Amenities")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabmediasbcodemedia--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"medias"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/media"},(0,n.kt)("inlineCode",{parentName:"a"},"[Media!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Medias")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabdescriptionsbcodedescription--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"descriptions"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/description"},(0,n.kt)("inlineCode",{parentName:"a"},"[Description!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Descriptions"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-hoteldatadescriptionsbtypesbcodedescriptiontype--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.descriptions.",(0,n.kt)("b",null,"types"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/enums/description-type"},(0,n.kt)("inlineCode",{parentName:"a"},"[DescriptionType!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,n.kt)("h5",{id:"code-style-fontweight-normal-hoteldatadescriptionsblanguagesbcodelanguage--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.descriptions.",(0,n.kt)("b",null,"languages"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/scalars/language"},(0,n.kt)("inlineCode",{parentName:"a"},"[Language!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabroomsbcoderoomconnection-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"rooms"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/room-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"RoomConnection"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rooms")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabpropertytypebcodepropertytype-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"propertyType"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/property-type"},(0,n.kt)("inlineCode",{parentName:"a"},"PropertyType"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Indicates property type.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabmandatoryfeesbcodemandatoryfee--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"mandatoryFees"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/mandatory-fee"},(0,n.kt)("inlineCode",{parentName:"a"},"[MandatoryFee!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Mandatory fees of property")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabcheckinbcodecheckinformation-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"checkIn"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/check-information"},(0,n.kt)("inlineCode",{parentName:"a"},"CheckInformation"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"CheckIn information")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabcheckoutbcodecheckinformation-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"checkOut"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/check-information"},(0,n.kt)("inlineCode",{parentName:"a"},"CheckInformation"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"CheckOut information")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldataballamenitiesbcodehotelxamenityconnection-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"allAmenities"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/hotel-xamenity-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"HotelXAmenityConnection"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Amenities with mapping"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-hoteldataallamenitiesbmapoptionsbcodehotelxmapoptioninput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.allAmenities.",(0,n.kt)("b",null,"mapOptions"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/hotel-xmap-option-input"},(0,n.kt)("inlineCode",{parentName:"a"},"[HotelXMapOptionInput!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-hoteldatabmappingsbcodehotelxmappedcode--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.",(0,n.kt)("b",null,"mappings"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/hotel-xmapped-code"},(0,n.kt)("inlineCode",{parentName:"a"},"[HotelXMappedCode!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Mapping codes for this property in various contexts, e.g.: TGX, GIATA,..."),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-hoteldatamappingsbcontextsbcodestring--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"HotelData.mappings.",(0,n.kt)("b",null,"contexts"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/hotel"},(0,n.kt)("inlineCode",{parentName:"a"},"Hotel"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/unions/destination-search-result"},(0,n.kt)("inlineCode",{parentName:"a"},"DestinationSearchResult"))," ",(0,n.kt)(b,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);