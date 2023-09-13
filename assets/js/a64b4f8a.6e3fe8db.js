"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||s[m]||u;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<u;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3783:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=n(67294),u=n(3905);const l={id:"audit-rule-where-input",title:"AuditRuleWhereInput",hide_table_of_contents:!1},i=void 0,o={unversionedId:"inputs/audit-rule-where-input",id:"inputs/audit-rule-where-input",title:"AuditRuleWhereInput",description:"No description",source:"@site/api/inputs/audit-rule-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/audit-rule-where-input",permalink:"/api/inputs/audit-rule-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"audit-rule-where-input",title:"AuditRuleWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AuditRuleCreateInput",permalink:"/api/inputs/audit-rule-create-input"},next:{title:"AuditRuleWhereUniqueInput",permalink:"/api/inputs/audit-rule-where-unique-input"}},d={},c=()=>(0,u.kt)(a.Fragment,null,(0,u.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,u.kt)(a.Fragment,null,"Specification",(0,u.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,u.kt)(a.Fragment,null,(0,u.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AuditRuleWhereInput.<b>product</b></code><Bullet /><code>AuditRuleProductInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-auditrulewhereinputbproductbcodeauditruleproductinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditRuleWhereInput.<b>auditStatus</b></code><Bullet /><code>AuditRuleStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-auditrulewhereinputbauditstatusbcodeauditrulestatus--",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[o,d]=(0,a.useState)(i);return(0,u.kt)("details",(0,r.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,u.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&l)},b={Bullet:c,SpecifiedBy:p,Badge:s,toc:m,Details:f},y="wrapper";function g(e){let{components:t,...n}=e;return(0,u.kt)(y,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"No description"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-graphql"},"input AuditRuleWhereInput {\n  product: AuditRuleProductInput!\n  auditStatus: AuditRuleStatus!\n}\n")),(0,u.kt)("h3",{id:"fields"},"Fields"),(0,u.kt)("h4",{id:"code-style-fontweight-normal-auditrulewhereinputbproductbcodeauditruleproductinput--"},(0,u.kt)("a",{parentName:"h4",href:"#"},(0,u.kt)("code",{style:{fontWeight:"normal"}},"AuditRuleWhereInput.",(0,u.kt)("b",null,"product"))),(0,u.kt)(c,{mdxType:"Bullet"}),(0,u.kt)("a",{parentName:"h4",href:"/api/enums/audit-rule-product-input"},(0,u.kt)("inlineCode",{parentName:"a"},"AuditRuleProductInput!"))," ",(0,u.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,u.kt)(s,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,u.kt)("blockquote",null),(0,u.kt)("h4",{id:"code-style-fontweight-normal-auditrulewhereinputbauditstatusbcodeauditrulestatus--"},(0,u.kt)("a",{parentName:"h4",href:"#"},(0,u.kt)("code",{style:{fontWeight:"normal"}},"AuditRuleWhereInput.",(0,u.kt)("b",null,"auditStatus"))),(0,u.kt)(c,{mdxType:"Bullet"}),(0,u.kt)("a",{parentName:"h4",href:"/api/enums/audit-rule-status"},(0,u.kt)("inlineCode",{parentName:"a"},"AuditRuleStatus!"))," ",(0,u.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,u.kt)(s,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,u.kt)("blockquote",null))}g.isMDXComponent=!0}}]);