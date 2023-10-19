"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(m,".").concat(u)]||d[u]||p[u]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68404:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var r=n(87462),a=n(67294),i=n(3905);const o={id:"hotel-criteria-amend-remarks-commit-input",title:"HotelCriteriaAmendRemarksCommitInput",hide_table_of_contents:!1},l=void 0,m={unversionedId:"inputs/hotel-criteria-amend-remarks-commit-input",id:"inputs/hotel-criteria-amend-remarks-commit-input",title:"HotelCriteriaAmendRemarksCommitInput",description:"Criteria that contains basic information to add remarks into a booking.",source:"@site/api/inputs/hotel-criteria-amend-remarks-commit-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-criteria-amend-remarks-commit-input",permalink:"/api/inputs/hotel-criteria-amend-remarks-commit-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-criteria-amend-remarks-commit-input",title:"HotelCriteriaAmendRemarksCommitInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelCriteriaAmendPaxesQuoteInput",permalink:"/api/inputs/hotel-criteria-amend-paxes-quote-input"},next:{title:"HotelCriteriaAmendRemarksQuoteInput",permalink:"/api/inputs/hotel-criteria-amend-remarks-quote-input"}},c={},s=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendRemarksCommitInput.<b>amendmentID</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamendremarkscommitinputbamendmentidbcodestring--",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[m,c]=(0,a.useState)(l);return(0,i.kt)("details",(0,r.Z)({},m?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},m?t:n),m&&o)},k={Bullet:s,SpecifiedBy:d,Badge:p,toc:u,Details:f},b="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Criteria that contains basic information to add remarks into a booking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelCriteriaAmendRemarksCommitInput {\n  amendmentID: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamendremarkscommitinputbamendmentidbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendRemarksCommitInput.",(0,i.kt)("b",null,"amendmentID"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"HotelX's amend booking reference (received in AmendRemarksQuote response)")))}g.isMDXComponent=!0}}]);