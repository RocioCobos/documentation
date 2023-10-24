"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8873:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(67294),i=n(3905);const o={id:"hotel-criteria-amend-dates-commit-input",title:"HotelCriteriaAmendDatesCommitInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"inputs/hotel-criteria-amend-dates-commit-input",id:"inputs/hotel-criteria-amend-dates-commit-input",title:"HotelCriteriaAmendDatesCommitInput",description:"Criteria that contains basic information to amend dates into a booking.",source:"@site/api/inputs/hotel-criteria-amend-dates-commit-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-criteria-amend-dates-commit-input",permalink:"/api/inputs/hotel-criteria-amend-dates-commit-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-criteria-amend-dates-commit-input",title:"HotelCriteriaAmendDatesCommitInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelCriteriaAmendBoardQuoteInput",permalink:"/api/inputs/hotel-criteria-amend-board-quote-input"},next:{title:"HotelCriteriaAmendDatesQuoteInput",permalink:"/api/inputs/hotel-criteria-amend-dates-quote-input"}},s={},d=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCriteriaAmendDatesCommitInput.<b>amendmentID</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelcriteriaamenddatescommitinputbamendmentidbcodestring--",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[c,s]=(0,a.useState)(l);return(0,i.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},b={Bullet:d,SpecifiedBy:m,Badge:p,toc:u,Details:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Criteria that contains basic information to amend dates into a booking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelCriteriaAmendDatesCommitInput {\n  amendmentID: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-hotelcriteriaamenddatescommitinputbamendmentidbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"HotelCriteriaAmendDatesCommitInput.",(0,i.kt)("b",null,"amendmentID"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"HotelX's amend booking reference (received in AmendDatesQuote response)")))}y.isMDXComponent=!0}}]);