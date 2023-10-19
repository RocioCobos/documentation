"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(a),m=o,b=s["".concat(d,".").concat(m)]||s[m]||p[m]||r;return a?n.createElement(b,l(l({ref:t},u),{},{components:a})):n.createElement(b,l({ref:t},u))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19842:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(87462),o=a(67294),r=a(3905);const l={id:"hotel-criteria-amend-board-quote-input",title:"HotelCriteriaAmendBoardQuoteInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"inputs/hotel-criteria-amend-board-quote-input",id:"inputs/hotel-criteria-amend-board-quote-input",title:"HotelCriteriaAmendBoardQuoteInput",description:"Criteria which contains basic information to amend the board into a booking.",source:"@site/api/inputs/hotel-criteria-amend-board-quote-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-criteria-amend-board-quote-input",permalink:"/api/inputs/hotel-criteria-amend-board-quote-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-criteria-amend-board-quote-input",title:"HotelCriteriaAmendBoardQuoteInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelCriteriaAmendBoardCommitInput",permalink:"/api/inputs/hotel-criteria-amend-board-commit-input"},next:{title:"HotelCriteriaAmendDatesCommitInput",permalink:"/api/inputs/hotel-criteria-amend-dates-commit-input"}},c={},u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendBoardQuoteInput.<b>accessCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbaccesscodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendBoardQuoteInput.<b>language</b></code><Bullet /><code>Language</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputblanguagebcodelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendBoardQuoteInput.<b>hotelCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbhotelcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendBoardQuoteInput.<b>reference</b></code><Bullet /><code>BookReferenceInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbreferencebcodebookreferenceinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendBoardQuoteInput.<b>bookingID</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbbookingidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendBoardQuoteInput.<b>board</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbboardbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendBoardQuoteInput.<b>boardName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbboardnamebcodestring-",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[d,c]=(0,o.useState)(i);return(0,r.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},g={Bullet:u,SpecifiedBy:s,Badge:p,toc:m,Details:b},k="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Criteria which contains basic information to amend the board into a booking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelCriteriaAmendBoardQuoteInput {\n  accessCode: String\n  language: Language\n  hotelCode: String\n  reference: BookReferenceInput\n  bookingID: String\n  board: String!\n  boardName: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbaccesscodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendBoardQuoteInput.",(0,r.kt)("b",null,"accessCode"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The name of the access to use in the request.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputblanguagebcodelanguage-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendBoardQuoteInput.",(0,r.kt)("b",null,"language"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/language"},(0,r.kt)("inlineCode",{parentName:"a"},"Language"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The language code.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbhotelcodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendBoardQuoteInput.",(0,r.kt)("b",null,"hotelCode"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The hotel code.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbreferencebcodebookreferenceinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendBoardQuoteInput.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/book-reference-input"},(0,r.kt)("inlineCode",{parentName:"a"},"BookReferenceInput"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contains the client reference and/or supplier reference.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbbookingidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendBoardQuoteInput.",(0,r.kt)("b",null,"bookingID"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HotelX's booking reference")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbboardbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendBoardQuoteInput.",(0,r.kt)("b",null,"board"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Board to amend into the booking")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendboardquoteinputbboardnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendBoardQuoteInput.",(0,r.kt)("b",null,"boardName"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Board name to amend into the booking")))}h.isMDXComponent=!0}}]);