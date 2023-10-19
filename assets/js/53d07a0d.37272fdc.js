"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25940],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>b});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,b=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return o?n.createElement(b,r(r({ref:t},s),{},{components:o})):n.createElement(b,r({ref:t},s))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},60593:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var n=o(87462),a=o(67294),l=o(3905);const r={id:"hotel-book-input",title:"HotelBookInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"inputs/hotel-book-input",id:"inputs/hotel-book-input",title:"HotelBookInput",description:"Offers versatility in book options, with certain fields marked as mandatory (optionRefId, clientReference, holder etc.) and others as optional (language, delta price, payment card etc.). This flexibility empowers you to create a personalized Book Multation, tailoring the requested fields to your specific needs.",source:"@site/api/inputs/hotel-book-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-book-input",permalink:"/api/inputs/hotel-book-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-book-input",title:"HotelBookInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelAmendRoomsCommitInput",permalink:"/api/inputs/hotel-amend-rooms-commit-input"},next:{title:"HotelCancelInput",permalink:"/api/inputs/hotel-cancel-input"}},c={},s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookInput.<b>optionRefId</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelbookinputboptionrefidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookInput.<b>language</b></code><Bullet /><code>Language</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelbookinputblanguagebcodelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookInput.<b>clientReference</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelbookinputbclientreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookInput.<b>deltaPrice</b></code><Bullet /><code>DeltaPriceInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelbookinputbdeltapricebcodedeltapriceinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookInput.<b>paymentCard</b></code><Bullet /><code>PaymentCardInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelbookinputbpaymentcardbcodepaymentcardinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookInput.<b>remarks</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelbookinputbremarksbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookInput.<b>holder</b></code><Bullet /><code>HolderInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelbookinputbholderbcodeholderinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelBookInput.<b>rooms</b></code><Bullet /><code>[BookRoomInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelbookinputbroomsbcodebookroominput--",level:4}],b=e=>{let{dataOpen:t,dataClose:o,children:r,startOpen:i=!1}=e;const[d,c]=(0,a.useState)(i);return(0,l.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:o),d&&r)},k={Bullet:s,SpecifiedBy:p,Badge:u,toc:m,Details:b},g="wrapper";function y(e){let{components:t,...o}=e;return(0,l.kt)(g,(0,n.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Offers versatility in book options, with certain fields marked as mandatory (optionRefId, clientReference, holder etc.) and others as optional (language, delta price, payment card etc.). This flexibility empowers you to create a personalized Book Multation, tailoring the requested fields to your specific needs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelBookInput {\n  optionRefId: String!\n  language: Language\n  clientReference: String!\n  deltaPrice: DeltaPriceInput\n  paymentCard: PaymentCardInput\n  remarks: String\n  holder: HolderInput!\n  rooms: [BookRoomInput!]!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookinputboptionrefidbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookInput.",(0,l.kt)("b",null,"optionRefId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"OptionRefID is a unique identifier assigned to each option.\nIt is important to note that this identifier should not be modified or used externally, as it is an internal system identifier.\nAdditionally, it is crucial to understand that the OptionRefID value should not be interpreted in any other way beyond its use within the system.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookinputblanguagebcodelanguage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookInput.",(0,l.kt)("b",null,"language"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/language"},(0,l.kt)("inlineCode",{parentName:"a"},"Language"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Language to be used in the request.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookinputbclientreferencebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookInput.",(0,l.kt)("b",null,"clientReference"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Booking ID in the client's system.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookinputbdeltapricebcodedeltapriceinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookInput.",(0,l.kt)("b",null,"deltaPrice"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/delta-price-input"},(0,l.kt)("inlineCode",{parentName:"a"},"DeltaPriceInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates price variation permitted by the client.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookinputbpaymentcardbcodepaymentcardinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookInput.",(0,l.kt)("b",null,"paymentCard"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/payment-card-input"},(0,l.kt)("inlineCode",{parentName:"a"},"PaymentCardInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If the payment is done by credit card, it's mandatory to specify the payment type and the credit card information.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookinputbremarksbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookInput.",(0,l.kt)("b",null,"remarks"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Any customer comments for the supplier to consider.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookinputbholderbcodeholderinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookInput.",(0,l.kt)("b",null,"holder"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/holder-input"},(0,l.kt)("inlineCode",{parentName:"a"},"HolderInput!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Holder's basic information.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-hotelbookinputbroomsbcodebookroominput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"HotelBookInput.",(0,l.kt)("b",null,"rooms"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/inputs/book-room-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[BookRoomInput!]!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Rooms within this option.")))}y.isMDXComponent=!0}}]);