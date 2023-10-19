"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,g=p["".concat(c,".").concat(m)]||p[m]||b[m]||l;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:r,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29287:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=a(87462),r=a(67294),l=a(3905);const o={id:"rate-plan",title:"RatePlan",hide_table_of_contents:!1},d=void 0,c={unversionedId:"objects/rate-plan",id:"objects/rate-plan",title:"RatePlan",description:"Information about the rate of the option returned.",source:"@site/api/objects/rate-plan.mdx",sourceDirName:"objects",slug:"/objects/rate-plan",permalink:"/api/objects/rate-plan",draft:!1,tags:[],version:"current",frontMatter:{id:"rate-plan",title:"RatePlan",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"QuotePayload",permalink:"/api/objects/quote-payload"},next:{title:"Rate",permalink:"/api/objects/rate"}},i={},s=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RatePlan.<b>code</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-rateplanbcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RatePlan.<b>supplierCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-rateplanbsuppliercodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RatePlan.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-rateplanbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RatePlan.<b>effectiveDate</b></code><Bullet /><code>Date</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-rateplanbeffectivedatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RatePlan.<b>expireDate</b></code><Bullet /><code>Date</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-rateplanbexpiredatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RatePlan.<b>start</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-rateplanbstartbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RatePlan.<b>end</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-rateplanbendbcodedate-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:d=!1}=e;const[c,i]=(0,r.useState)(d);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&o)},u={Bullet:s,SpecifiedBy:p,Badge:b,toc:m,Details:g},f="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Information about the rate of the option returned."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type RatePlan {\n  code: String!\n  supplierCode: String!\n  name: String\n  effectiveDate: Date @deprecated\n  expireDate: Date @deprecated\n  start: Date\n  end: Date\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-rateplanbcodebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RatePlan.",(0,l.kt)("b",null,"code"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies the rate code.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-rateplanbsuppliercodebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RatePlan.",(0,l.kt)("b",null,"supplierCode"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supplier s rate code.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-rateplanbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RatePlan.",(0,l.kt)("b",null,"name"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies the rate name.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-rateplanbeffectivedatebcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RatePlan.",(0,l.kt)("b",null,"effectiveDate"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"deprecated from 2018-02-28. Incorrect date format.")),(0,l.kt)("p",{parentName:"blockquote"},"Start date in which the rate becomes effective.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-rateplanbexpiredatebcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RatePlan.",(0,l.kt)("b",null,"expireDate"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"deprecated from 2018-02-28. Incorrect date format.")),(0,l.kt)("p",{parentName:"blockquote"},"Expire date of the rate.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-rateplanbstartbcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RatePlan.",(0,l.kt)("b",null,"start"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Start date in which the rate becomes effective.\nFormat: YYYY-MM-DD")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-rateplanbendbcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"RatePlan.",(0,l.kt)("b",null,"end"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Expire date of the rate.\nFormat: YYYY-MM-DD")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/room"},(0,l.kt)("inlineCode",{parentName:"a"},"Room"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);