"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24564],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>b});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(o),u=n,b=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return o?a.createElement(b,l(l({ref:t},d),{},{components:o})):a.createElement(b,l({ref:t},d))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},19329:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=o(87462),n=o(67294),r=o(3905);const l={id:"hotel-commit-details",title:"HotelCommitDetails",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/hotel-commit-details",id:"objects/hotel-commit-details",title:"HotelCommitDetails",description:"No description",source:"@site/api/objects/hotel-commit-details.mdx",sourceDirName:"objects",slug:"/objects/hotel-commit-details",permalink:"/api/objects/hotel-commit-details",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-commit-details",title:"HotelCommitDetails",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelCancelPayload",permalink:"/api/objects/hotel-cancel-payload"},next:{title:"HotelCommitPayload",permalink:"/api/objects/hotel-commit-payload"}},s={},d=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCommitDetails.<b>reference</b></code><Bullet /><code>Reference!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelcommitdetailsbreferencebcodereference--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelCommitDetails.<b>status</b></code><Bullet /><code>BookStatusType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-hotelcommitdetailsbstatusbcodebookstatustype--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:o,children:l,startOpen:i=!1}=e;const[c,s]=(0,n.useState)(i);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:o),c&&l)},f={Bullet:d,SpecifiedBy:m,Badge:p,toc:u,Details:b},y="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(y,(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelCommitDetails {\n  reference: Reference!\n  status: BookStatusType!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcommitdetailsbreferencebcodereference--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCommitDetails.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/reference"},(0,r.kt)("inlineCode",{parentName:"a"},"Reference!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Booking identificators in client and provider systems")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelcommitdetailsbstatusbcodebookstatustype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelCommitDetails.",(0,r.kt)("b",null,"status"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/book-status-type"},(0,r.kt)("inlineCode",{parentName:"a"},"BookStatusType!"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Booking Status.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-commit-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelCommitPayload"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);