"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65620:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>f});var r=n(87462),a=n(67294),l=n(3905);const i={id:"rate-rules-filter-input",title:"RateRulesFilterInput",hide_table_of_contents:!1},o=void 0,s={unversionedId:"inputs/rate-rules-filter-input",id:"inputs/rate-rules-filter-input",title:"RateRulesFilterInput",description:"If requested, only options with the specified rateRules will be returned",source:"@site/api/inputs/rate-rules-filter-input.mdx",sourceDirName:"inputs",slug:"/inputs/rate-rules-filter-input",permalink:"/api/inputs/rate-rules-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"rate-rules-filter-input",title:"RateRulesFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RangeFilter",permalink:"/api/inputs/range-filter"},next:{title:"RecommendationsWhereInput",permalink:"/api/inputs/recommendations-where-input"}},u={},p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RateRulesFilterInput.<b>includes</b></code><Bullet /><code>[RateRulesType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-raterulesfilterinputbincludesbcoderaterulestype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RateRulesFilterInput.<b>excludes</b></code><Bullet /><code>[RateRulesType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-raterulesfilterinputbexcludesbcoderaterulestype--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:o=!1}=e;const[s,u]=(0,a.useState)(o);return(0,l.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},y={Bullet:p,SpecifiedBy:d,Badge:c,toc:f,Details:m},b="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If requested, only options with the specified rateRules will be returned"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input RateRulesFilterInput {\n  includes: [RateRulesType!]\n  excludes: [RateRulesType!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-raterulesfilterinputbincludesbcoderaterulestype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RateRulesFilterInput.",(0,l.kt)("b",null,"includes"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/rate-rules-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[RateRulesType!]"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"if includes not nil: only options without rate rules and options with rate rules found in includes will be returned")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-raterulesfilterinputbexcludesbcoderaterulestype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RateRulesFilterInput.",(0,l.kt)("b",null,"excludes"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/rate-rules-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[RateRulesType!]"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"if excludes not nil: only options without rate rules and options with rate rules that haven t been sent in excludes will be returned")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/inputs/filter-input"},(0,l.kt)("inlineCode",{parentName:"a"},"FilterInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xfilter-search-input"},(0,l.kt)("inlineCode",{parentName:"a"},"HotelXFilterSearchInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);