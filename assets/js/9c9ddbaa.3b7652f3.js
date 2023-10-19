"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65754:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>f});var a=n(87462),r=n(67294),l=n(3905);const i={id:"status-filter-input",title:"StatusFilterInput",hide_table_of_contents:!1},s=void 0,o={unversionedId:"inputs/status-filter-input",id:"inputs/status-filter-input",title:"StatusFilterInput",description:"If requested, only options with the specified status will be returned. By default, it will return options with status OK and filter the RQ options.",source:"@site/api/inputs/status-filter-input.mdx",sourceDirName:"inputs",slug:"/inputs/status-filter-input",permalink:"/api/inputs/status-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"status-filter-input",title:"StatusFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatsRealTimeRangeWhereInput",permalink:"/api/inputs/stats-real-time-range-where-input"},next:{title:"StringFilter",permalink:"/api/inputs/string-filter"}},u={},p=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatusFilterInput.<b>includes</b></code><Bullet /><code>[StatusType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-statusfilterinputbincludesbcodestatustype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatusFilterInput.<b>excludes</b></code><Bullet /><code>[StatusType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-statusfilterinputbexcludesbcodestatustype--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:s=!1}=e;const[o,u]=(0,r.useState)(s);return(0,l.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&i)},y={Bullet:p,SpecifiedBy:d,Badge:c,toc:f,Details:m},b="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If requested, only options with the specified status will be returned. By default, it will return options with status OK and filter the RQ options."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input StatusFilterInput {\n  includes: [StatusType!]\n  excludes: [StatusType!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statusfilterinputbincludesbcodestatustype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StatusFilterInput.",(0,l.kt)("b",null,"includes"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/status-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[StatusType!]"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When is not nil: only options with status found in includes will be returned")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-statusfilterinputbexcludesbcodestatustype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"StatusFilterInput.",(0,l.kt)("b",null,"excludes"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/status-type"},(0,l.kt)("inlineCode",{parentName:"a"},"[StatusType!]"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When is not nil: only options without status found in includes will be returned")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xfilter-search-input"},(0,l.kt)("inlineCode",{parentName:"a"},"HotelXFilterSearchInput"))," ",(0,l.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);