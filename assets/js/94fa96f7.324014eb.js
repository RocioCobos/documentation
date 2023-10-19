"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29282],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(o),p=a,g=u["".concat(d,".").concat(p)]||u[p]||m[p]||r;return o?n.createElement(g,l(l({ref:t},s),{},{components:o})):n.createElement(g,l({ref:t},s))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},86093:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=o(87462),a=o(67294),r=o(3905);const l={id:"hotel-criteria-amend-rooms-quote-input",title:"HotelCriteriaAmendRoomsQuoteInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"inputs/hotel-criteria-amend-rooms-quote-input",id:"inputs/hotel-criteria-amend-rooms-quote-input",title:"HotelCriteriaAmendRoomsQuoteInput",description:"Criteria that contains basic information to amend the rooms of a reservation.",source:"@site/api/inputs/hotel-criteria-amend-rooms-quote-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-criteria-amend-rooms-quote-input",permalink:"/api/inputs/hotel-criteria-amend-rooms-quote-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-criteria-amend-rooms-quote-input",title:"HotelCriteriaAmendRoomsQuoteInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelCriteriaAmendRemarksQuoteInput",permalink:"/api/inputs/hotel-criteria-amend-remarks-quote-input"},next:{title:"HotelCriteriaBookingInput",permalink:"/api/inputs/hotel-criteria-booking-input"}},c={},s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendRoomsQuoteInput.<b>accessCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbaccesscodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendRoomsQuoteInput.<b>language</b></code><Bullet /><code>Language</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputblanguagebcodelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendRoomsQuoteInput.<b>hotelCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbhotelcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendRoomsQuoteInput.<b>reference</b></code><Bullet /><code>BookReferenceInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbreferencebcodebookreferenceinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendRoomsQuoteInput.<b>bookingID</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbbookingidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendRoomsQuoteInput.<b>rooms</b></code><Bullet /><code>[HotelAmendRoomInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbroomsbcodehotelamendroominput--",level:4}],g=e=>{let{dataOpen:t,dataClose:o,children:l,startOpen:i=!1}=e;const[d,c]=(0,a.useState)(i);return(0,r.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:o),d&&l)},b={Bullet:s,SpecifiedBy:u,Badge:m,toc:p,Details:g},k="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(k,(0,n.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Criteria that contains basic information to amend the rooms of a reservation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelCriteriaAmendRoomsQuoteInput {\n  accessCode: String\n  language: Language\n  hotelCode: String\n  reference: BookReferenceInput\n  bookingID: String\n  rooms: [HotelAmendRoomInput!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbaccesscodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendRoomsQuoteInput.",(0,r.kt)("b",null,"accessCode"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The name of the access to use in the request.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputblanguagebcodelanguage-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendRoomsQuoteInput.",(0,r.kt)("b",null,"language"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/language"},(0,r.kt)("inlineCode",{parentName:"a"},"Language"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The language code.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbhotelcodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendRoomsQuoteInput.",(0,r.kt)("b",null,"hotelCode"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The hotel code.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbreferencebcodebookreferenceinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendRoomsQuoteInput.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/book-reference-input"},(0,r.kt)("inlineCode",{parentName:"a"},"BookReferenceInput"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contains the reservation references.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbbookingidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendRoomsQuoteInput.",(0,r.kt)("b",null,"bookingID"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HotelX's booking reference")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendroomsquoteinputbroomsbcodehotelamendroominput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendRoomsQuoteInput.",(0,r.kt)("b",null,"rooms"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/hotel-amend-room-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[HotelAmendRoomInput!]!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"New rooms")))}f.isMDXComponent=!0}}]);