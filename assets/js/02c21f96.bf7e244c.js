"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20596],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},34674:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),o=a(67294),r=a(3905);const i={id:"hotel-criteria-amend-paxes-quote-input",title:"HotelCriteriaAmendPaxesQuoteInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"inputs/hotel-criteria-amend-paxes-quote-input",id:"inputs/hotel-criteria-amend-paxes-quote-input",title:"HotelCriteriaAmendPaxesQuoteInput",description:"Criteria that contains basic information to amend the paxes into a reservation.",source:"@site/api/inputs/hotel-criteria-amend-paxes-quote-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-criteria-amend-paxes-quote-input",permalink:"/api/inputs/hotel-criteria-amend-paxes-quote-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-criteria-amend-paxes-quote-input",title:"HotelCriteriaAmendPaxesQuoteInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelCriteriaAmendPaxesCommitInput",permalink:"/api/inputs/hotel-criteria-amend-paxes-commit-input"},next:{title:"HotelCriteriaAmendRemarksCommitInput",permalink:"/api/inputs/hotel-criteria-amend-remarks-commit-input"}},d={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendPaxesQuoteInput.<b>accessCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbaccesscodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendPaxesQuoteInput.<b>language</b></code><Bullet /><code>Language</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputblanguagebcodelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendPaxesQuoteInput.<b>hotelCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbhotelcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendPaxesQuoteInput.<b>reference</b></code><Bullet /><code>BookReferenceInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbreferencebcodebookreferenceinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendPaxesQuoteInput.<b>bookingID</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbbookingidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendPaxesQuoteInput.<b>rooms</b></code><Bullet /><code>[BookRoomInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbroomsbcodebookroominput--",level:4}],g=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:l=!1}=e;const[c,d]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&i)},b={Bullet:s,SpecifiedBy:u,Badge:p,toc:m,Details:g},k="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Criteria that contains basic information to amend the paxes into a reservation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelCriteriaAmendPaxesQuoteInput {\n  accessCode: String\n  language: Language\n  hotelCode: String\n  reference: BookReferenceInput\n  bookingID: String\n  rooms: [BookRoomInput!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbaccesscodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendPaxesQuoteInput.",(0,r.kt)("b",null,"accessCode"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The name of the access to use in the request.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputblanguagebcodelanguage-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendPaxesQuoteInput.",(0,r.kt)("b",null,"language"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/language"},(0,r.kt)("inlineCode",{parentName:"a"},"Language"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The language code.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbhotelcodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendPaxesQuoteInput.",(0,r.kt)("b",null,"hotelCode"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The hotel code.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbreferencebcodebookreferenceinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendPaxesQuoteInput.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/book-reference-input"},(0,r.kt)("inlineCode",{parentName:"a"},"BookReferenceInput"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contains the client reference and/or supplier reference.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbbookingidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendPaxesQuoteInput.",(0,r.kt)("b",null,"bookingID"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HotelX's booking reference")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendpaxesquoteinputbroomsbcodebookroominput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendPaxesQuoteInput.",(0,r.kt)("b",null,"rooms"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/book-room-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[BookRoomInput!]!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"rooms to amend into the booking")))}f.isMDXComponent=!0}}]);