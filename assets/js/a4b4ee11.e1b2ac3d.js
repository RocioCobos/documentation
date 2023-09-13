"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62651],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=o,m=u["".concat(i,".").concat(k)]||u[k]||s[k]||r;return a?n.createElement(m,c(c({ref:t},d),{},{components:a})):n.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<r;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},54598:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>k});var n=a(87462),o=a(67294),r=a(3905);const c={id:"package-mutation",title:"PackageMutation",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/package-mutation",id:"objects/package-mutation",title:"PackageMutation",description:"No description",source:"@site/api/objects/package-mutation.mdx",sourceDirName:"objects",slug:"/objects/package-mutation",permalink:"/api/objects/package-mutation",draft:!1,tags:[],version:"current",frontMatter:{id:"package-mutation",title:"PackageMutation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PackageLocations",permalink:"/api/objects/package-locations"},next:{title:"PackagePax",permalink:"/api/objects/package-pax"}},p={},d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PackageMutation.<b>book</b></code><Bullet /><code>BookPayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-packagemutationbbookbcodebookpayload-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PackageMutation.<b>cancel</b></code><Bullet /><code>CancelPayload</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-packagemutationbcancelbcodecancelpayload-",level:4},{value:"Returned by",id:"returned-by",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:l=!1}=e;const[i,p]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&c)},b={Bullet:d,SpecifiedBy:u,Badge:s,toc:k,Details:m},g="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type PackageMutation {\n  book(where: BookWhereInput): BookPayload\n  cancel(where: PackageCancelWhereInput): CancelPayload\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-packagemutationbbookbcodebookpayload-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PackageMutation.",(0,r.kt)("b",null,"book"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/book-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"BookPayload"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Mutation to confirm an option"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-packagemutationbookbwherebcodebookwhereinput-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PackageMutation.book.",(0,r.kt)("b",null,"where"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/inputs/book-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"BookWhereInput"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-packagemutationbcancelbcodecancelpayload-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PackageMutation.",(0,r.kt)("b",null,"cancel"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/cancel-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CancelPayload"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Mutation to cancel a confirmed booking"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-packagemutationcancelbwherebcodepackagecancelwhereinput-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PackageMutation.cancel.",(0,r.kt)("b",null,"where"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/inputs/package-cancel-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PackageCancelWhereInput"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/package"},(0,r.kt)("inlineCode",{parentName:"a"},"package"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);