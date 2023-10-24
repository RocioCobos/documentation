"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),s=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(m,".").concat(u)]||d[u]||p[u]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23730:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var o=n(87462),r=n(67294),a=n(3905);const i={id:"hotel-amend-rooms-commit-input",title:"HotelAmendRoomsCommitInput",hide_table_of_contents:!1},l=void 0,m={unversionedId:"inputs/hotel-amend-rooms-commit-input",id:"inputs/hotel-amend-rooms-commit-input",title:"HotelAmendRoomsCommitInput",description:"No description",source:"@site/api/inputs/hotel-amend-rooms-commit-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-amend-rooms-commit-input",permalink:"/api/inputs/hotel-amend-rooms-commit-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-amend-rooms-commit-input",title:"HotelAmendRoomsCommitInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelAmendRoomInput",permalink:"/api/inputs/hotel-amend-room-input"},next:{title:"HotelBookInput",permalink:"/api/inputs/hotel-book-input"}},s={},c=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelAmendRoomsCommitInput.<b>amendmentID</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelamendroomscommitinputbamendmentidbcodestring--",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[m,s]=(0,r.useState)(l);return(0,a.kt)("details",(0,o.Z)({},m?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},m?t:n),m&&i)},g={Bullet:c,SpecifiedBy:d,Badge:p,toc:u,Details:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelAmendRoomsCommitInput {\n  amendmentID: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelamendroomscommitinputbamendmentidbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelAmendRoomsCommitInput.",(0,a.kt)("b",null,"amendmentID"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"HotelX's amend booking reference (received in AmendRoomQuote response)")))}b.isMDXComponent=!0}}]);