"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85784:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905);const i={id:"hotel-xdestination-searcher-input",title:"HotelXDestinationSearcherInput",hide_table_of_contents:!1},l=void 0,s={unversionedId:"inputs/hotel-xdestination-searcher-input",id:"inputs/hotel-xdestination-searcher-input",title:"HotelXDestinationSearcherInput",description:"No description",source:"@site/api/inputs/hotel-xdestination-searcher-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xdestination-searcher-input",permalink:"/api/inputs/hotel-xdestination-searcher-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xdestination-searcher-input",title:"HotelXDestinationSearcherInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXDestinationListInput",permalink:"/api/inputs/hotel-xdestination-list-input"},next:{title:"HotelXFilterInput",permalink:"/api/inputs/hotel-xfilter-input"}},c={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXDestinationSearcherInput.<b>access</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxdestinationsearcherinputbaccessbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXDestinationSearcherInput.<b>text</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxdestinationsearcherinputbtextbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXDestinationSearcherInput.<b>maxSize</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxdestinationsearcherinputbmaxsizebcodeint-",level:4}],h=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[s,c]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},b={Bullet:d,SpecifiedBy:p,Badge:u,toc:m,Details:h},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXDestinationSearcherInput {\n  access: ID!\n  text: String!\n  maxSize: Int\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-hotelxdestinationsearcherinputbaccessbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HotelXDestinationSearcherInput.",(0,o.kt)("b",null,"access"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the access")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-hotelxdestinationsearcherinputbtextbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HotelXDestinationSearcherInput.",(0,o.kt)("b",null,"text"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Search by hotel name or destination name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-hotelxdestinationsearcherinputbmaxsizebcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HotelXDestinationSearcherInput.",(0,o.kt)("b",null,"maxSize"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Maxium number of items per type")))}g.isMDXComponent=!0}}]);