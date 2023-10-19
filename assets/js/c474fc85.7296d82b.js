"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98017:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var r=n(87462),a=n(67294),o=n(3905);const l={id:"hotel-xapp-where-unique-input",title:"HotelXAppWhereUniqueInput",hide_table_of_contents:!1},i=void 0,p={unversionedId:"inputs/hotel-xapp-where-unique-input",id:"inputs/hotel-xapp-where-unique-input",title:"HotelXAppWhereUniqueInput",description:"No description",source:"@site/api/inputs/hotel-xapp-where-unique-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xapp-where-unique-input",permalink:"/api/inputs/hotel-xapp-where-unique-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xapp-where-unique-input",title:"HotelXAppWhereUniqueInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXAppInput",permalink:"/api/inputs/hotel-xapp-input"},next:{title:"HotelXBoardQueryInput",permalink:"/api/inputs/hotel-xboard-query-input"}},u={},c=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXAppWhereUniqueInput.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxappwhereuniqueinputbcodebcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[p,u]=(0,a.useState)(i);return(0,o.kt)("details",(0,r.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&l)},h={Bullet:c,SpecifiedBy:s,Badge:d,toc:f,Details:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXAppWhereUniqueInput {\n  code: ID!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-hotelxappwhereuniqueinputbcodebcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HotelXAppWhereUniqueInput.",(0,o.kt)("b",null,"code"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Code that identifies the app.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xapp-input"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelXAppInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);