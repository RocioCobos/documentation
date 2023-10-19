"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(o,".").concat(f)]||p[f]||s[f]||i;return n?r.createElement(m,u(u({ref:t},d),{},{components:n})):r.createElement(m,u({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1671:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>u,metadata:()=>o,toc:()=>f});var r=n(87462),a=n(67294),i=n(3905);const u={id:"audit-rule-where-unique-input",title:"AuditRuleWhereUniqueInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"inputs/audit-rule-where-unique-input",id:"inputs/audit-rule-where-unique-input",title:"AuditRuleWhereUniqueInput",description:"No description",source:"@site/api/inputs/audit-rule-where-unique-input.mdx",sourceDirName:"inputs",slug:"/inputs/audit-rule-where-unique-input",permalink:"/api/inputs/audit-rule-where-unique-input",draft:!1,tags:[],version:"current",frontMatter:{id:"audit-rule-where-unique-input",title:"AuditRuleWhereUniqueInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AuditRuleWhereInput",permalink:"/api/inputs/audit-rule-where-input"},next:{title:"BookPaxInput",permalink:"/api/inputs/book-pax-input"}},c={},d=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AuditRuleWhereUniqueInput.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-auditrulewhereuniqueinputbcodebcodeid--",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:u,startOpen:l=!1}=e;const[o,c]=(0,a.useState)(l);return(0,i.kt)("details",(0,r.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&u)},y={Bullet:d,SpecifiedBy:p,Badge:s,toc:f,Details:m},b="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input AuditRuleWhereUniqueInput {\n  code: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-auditrulewhereuniqueinputbcodebcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AuditRuleWhereUniqueInput.",(0,i.kt)("b",null,"code"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}g.isMDXComponent=!0}}]);