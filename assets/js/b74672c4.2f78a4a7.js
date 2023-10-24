"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?a.createElement(m,c(c({ref:t},s),{},{components:r})):a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11061:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>f});var a=r(87462),n=r(67294),i=r(3905);const c={id:"package-search-criteria",title:"PackageSearchCriteria",hide_table_of_contents:!1},o=void 0,l={unversionedId:"inputs/package-search-criteria",id:"inputs/package-search-criteria",title:"PackageSearchCriteria",description:"No description",source:"@site/api/inputs/package-search-criteria.mdx",sourceDirName:"inputs",slug:"/inputs/package-search-criteria",permalink:"/api/inputs/package-search-criteria",draft:!1,tags:[],version:"current",frontMatter:{id:"package-search-criteria",title:"PackageSearchCriteria",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PackageRefresh",permalink:"/api/inputs/package-refresh"},next:{title:"ParameterInput",permalink:"/api/inputs/parameter-input"}},p={},s=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PackageSearchCriteria.<b>refresh</b></code><Bullet /><code>PackageRefresh</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-packagesearchcriteriabrefreshbcodepackagerefresh-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:r,children:c,startOpen:o=!1}=e;const[l,p]=(0,n.useState)(o);return(0,i.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},l?t:r),l&&c)},g={Bullet:s,SpecifiedBy:u,Badge:d,toc:f,Details:m},k="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(k,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PackageSearchCriteria {\n  refresh: PackageRefresh\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-packagesearchcriteriabrefreshbcodepackagerefresh-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PackageSearchCriteria.",(0,i.kt)("b",null,"refresh"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/package-refresh"},(0,i.kt)("inlineCode",{parentName:"a"},"PackageRefresh"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Node to specify optionID/Supplier package code to refresh those options")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/search-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchWhereInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);