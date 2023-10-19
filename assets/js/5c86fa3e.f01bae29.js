"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,y=p["".concat(o,".").concat(h)]||p[h]||d[h]||c;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<c;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48068:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=n(87462),a=n(67294),c=n(3905);const s={id:"access-where-unique-input",title:"AccessWhereUniqueInput",hide_table_of_contents:!1},i=void 0,o={unversionedId:"inputs/access-where-unique-input",id:"inputs/access-where-unique-input",title:"AccessWhereUniqueInput",description:"AccessWhereUniqueInput input",source:"@site/api/inputs/access-where-unique-input.mdx",sourceDirName:"inputs",slug:"/inputs/access-where-unique-input",permalink:"/api/inputs/access-where-unique-input",draft:!1,tags:[],version:"current",frontMatter:{id:"access-where-unique-input",title:"AccessWhereUniqueInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccessWhereInput",permalink:"/api/inputs/access-where-input"},next:{title:"ActivationConnectInput",permalink:"/api/inputs/activation-connect-input"}},l={},u=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),h=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereUniqueInput.<b>search</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accesswhereuniqueinputbsearchbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessWhereUniqueInput.<b>searchBy</b></code><Bullet /><code>AccessSearchByOptions!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accesswhereuniqueinputbsearchbybcodeaccesssearchbyoptions--",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:i=!1}=e;const[o,l]=(0,a.useState)(i);return(0,c.kt)("details",(0,r.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&s)},m={Bullet:u,SpecifiedBy:p,Badge:d,toc:h,Details:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"AccessWhereUniqueInput input"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"input AccessWhereUniqueInput {\n  search: ID!\n  searchBy: AccessSearchByOptions!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accesswhereuniqueinputbsearchbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereUniqueInput.",(0,c.kt)("b",null,"search"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accesswhereuniqueinputbsearchbybcodeaccesssearchbyoptions--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessWhereUniqueInput.",(0,c.kt)("b",null,"searchBy"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/access-search-by-options"},(0,c.kt)("inlineCode",{parentName:"a"},"AccessSearchByOptions!"))," ",(0,c.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}b.isMDXComponent=!0}}]);