"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81737],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(a),p=i,b=u["".concat(d,".").concat(p)]||u[p]||h[p]||n;return a?r.createElement(b,c(c({ref:t},s),{},{components:a})):r.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,c=new Array(n);c[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:i,c[1]=o;for(var l=2;l<n;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},76363:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=a(87462),i=a(67294),n=a(3905);const c={id:"search-criteria-mutation",title:"SearchCriteriaMutation",hide_table_of_contents:!1},o=void 0,d={unversionedId:"objects/search-criteria-mutation",id:"objects/search-criteria-mutation",title:"SearchCriteriaMutation",description:"No description",source:"@site/api/objects/search-criteria-mutation.mdx",sourceDirName:"objects",slug:"/objects/search-criteria-mutation",permalink:"/api/objects/search-criteria-mutation",draft:!1,tags:[],version:"current",frontMatter:{id:"search-criteria-mutation",title:"SearchCriteriaMutation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SearchCriteriaEdge",permalink:"/api/objects/search-criteria-edge"},next:{title:"SearchCriteriaQuery",permalink:"/api/objects/search-criteria-query"}},l={},s=()=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(i.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,n.kt)(i.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteriaMutation.<b>createSearchCriteria</b></code><Bullet /><code>SearchCriteriaConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-searchcriteriamutationbcreatesearchcriteriabcodesearchcriteriaconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteriaMutation.createSearchCriteria.<b>data</b></code><Bullet /><code>[SearchCriteriaCreateInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchcriteriamutationcreatesearchcriteriabdatabcodesearchcriteriacreateinput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteriaMutation.<b>updateSearchCriteria</b></code><Bullet /><code>SearchCriteria!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-searchcriteriamutationbupdatesearchcriteriabcodesearchcriteria--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteriaMutation.updateSearchCriteria.<b>data</b></code><Bullet /><code>SearchCriteriaUpdateInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-searchcriteriamutationupdatesearchcriteriabdatabcodesearchcriteriaupdateinput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SearchCriteriaMutation.<b>deleteSearchCriteria</b></code><Bullet /><code>SearchCriteriaConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-searchcriteriamutationbdeletesearchcriteriabcodesearchcriteriaconnection--",level:4},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:o=!1}=e;const[d,l]=(0,i.useState)(o);return(0,n.kt)("details",(0,r.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&c)},m={Bullet:s,SpecifiedBy:u,Badge:h,toc:p,Details:b},g="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type SearchCriteriaMutation {\n  createSearchCriteria(\n    where: SupplierWhereUniqueInput!\n    data: [SearchCriteriaCreateInput!]!\n  ): SearchCriteriaConnection!\n  updateSearchCriteria(\n    where: SearchCriteriaCodeWhereUniqueInput!\n    data: SearchCriteriaUpdateInput!\n  ): SearchCriteria!\n  deleteSearchCriteria(\n    where: SearchCriteriaCodeWhereInput!\n  ): SearchCriteriaConnection!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriamutationbcreatesearchcriteriabcodesearchcriteriaconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaMutation.",(0,n.kt)("b",null,"createSearchCriteria"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/search-criteria-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchCriteriaConnection!"))," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-searchcriteriamutationcreatesearchcriteriabwherebcodesupplierwhereuniqueinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaMutation.createSearchCriteria.",(0,n.kt)("b",null,"where"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/supplier-where-unique-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierWhereUniqueInput!"))," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h5",{id:"code-style-fontweight-normal-searchcriteriamutationcreatesearchcriteriabdatabcodesearchcriteriacreateinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaMutation.createSearchCriteria.",(0,n.kt)("b",null,"data"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/search-criteria-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"[SearchCriteriaCreateInput!]!"))," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriamutationbupdatesearchcriteriabcodesearchcriteria--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaMutation.",(0,n.kt)("b",null,"updateSearchCriteria"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/search-criteria"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchCriteria!"))," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-searchcriteriamutationupdatesearchcriteriabwherebcodesearchcriteriacodewhereuniqueinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaMutation.updateSearchCriteria.",(0,n.kt)("b",null,"where"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/search-criteria-code-where-unique-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchCriteriaCodeWhereUniqueInput!"))," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h5",{id:"code-style-fontweight-normal-searchcriteriamutationupdatesearchcriteriabdatabcodesearchcriteriaupdateinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaMutation.updateSearchCriteria.",(0,n.kt)("b",null,"data"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/search-criteria-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchCriteriaUpdateInput!"))," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-searchcriteriamutationbdeletesearchcriteriabcodesearchcriteriaconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaMutation.",(0,n.kt)("b",null,"deleteSearchCriteria"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/search-criteria-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchCriteriaConnection!"))," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-searchcriteriamutationdeletesearchcriteriabwherebcodesearchcriteriacodewhereinput--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SearchCriteriaMutation.deleteSearchCriteria.",(0,n.kt)("b",null,"where"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/inputs/search-criteria-code-where-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SearchCriteriaCodeWhereInput!"))," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/mutations/search-criteria"},(0,n.kt)("inlineCode",{parentName:"a"},"searchCriteria"))," ",(0,n.kt)(h,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);