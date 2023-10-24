"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9772],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68265:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>s,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>f});var n=r(87462),a=r(67294),o=r(3905);const i={id:"favourite-partner-where-unique-input",title:"FavouritePartnerWhereUniqueInput",hide_table_of_contents:!1},l=void 0,u={unversionedId:"inputs/favourite-partner-where-unique-input",id:"inputs/favourite-partner-where-unique-input",title:"FavouritePartnerWhereUniqueInput",description:"No description",source:"@site/api/inputs/favourite-partner-where-unique-input.mdx",sourceDirName:"inputs",slug:"/inputs/favourite-partner-where-unique-input",permalink:"/api/inputs/favourite-partner-where-unique-input",draft:!1,tags:[],version:"current",frontMatter:{id:"favourite-partner-where-unique-input",title:"FavouritePartnerWhereUniqueInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FavouritePartnerCreateInput",permalink:"/api/inputs/favourite-partner-create-input"},next:{title:"FerryBookInput",permalink:"/api/inputs/ferry-book-input"}},p={},c=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FavouritePartnerWhereUniqueInput.<b>email</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-favouritepartnerwhereuniqueinputbemailbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FavouritePartnerWhereUniqueInput.<b>partnerCode</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-favouritepartnerwhereuniqueinputbpartnercodebcodeid--",level:4}],m=e=>{let{dataOpen:t,dataClose:r,children:i,startOpen:l=!1}=e;const[u,p]=(0,a.useState)(l);return(0,o.kt)("details",(0,n.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},u?t:r),u&&i)},b={Bullet:c,SpecifiedBy:d,Badge:s,toc:f,Details:m},y="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input FavouritePartnerWhereUniqueInput {\n  email: ID!\n  partnerCode: ID!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-favouritepartnerwhereuniqueinputbemailbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FavouritePartnerWhereUniqueInput.",(0,o.kt)("b",null,"email"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-favouritepartnerwhereuniqueinputbpartnercodebcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FavouritePartnerWhereUniqueInput.",(0,o.kt)("b",null,"partnerCode"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}g.isMDXComponent=!0}}]);