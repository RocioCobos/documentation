"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||u;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<u;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7329:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(87462),a=n(67294),u=n(3905);const l={id:"audit-rule-product-input",title:"AuditRuleProductInput",hide_table_of_contents:!1},o=void 0,i={unversionedId:"enums/audit-rule-product-input",id:"enums/audit-rule-product-input",title:"AuditRuleProductInput",description:"No description",source:"@site/api/enums/audit-rule-product-input.mdx",sourceDirName:"enums",slug:"/enums/audit-rule-product-input",permalink:"/api/enums/audit-rule-product-input",draft:!1,tags:[],version:"current",frontMatter:{id:"audit-rule-product-input",title:"AuditRuleProductInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AssetType",permalink:"/api/enums/asset-type"},next:{title:"AuditRuleStatus",permalink:"/api/enums/audit-rule-status"}},c={},p=()=>(0,u.kt)(a.Fragment,null,(0,u.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,u.kt)(a.Fragment,null,"Specification",(0,u.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,u.kt)(a.Fragment,null,(0,u.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AuditRuleProductInput.<b>legacy</b></code>",id:"code-style-fontweight-normal-auditruleproductinputblegacybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AuditRuleProductInput.<b>hotelX</b></code>",id:"code-style-fontweight-normal-auditruleproductinputbhotelxbcode",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:o=!1}=e;const[i,c]=(0,a.useState)(o);return(0,u.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,u.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},y={Bullet:p,SpecifiedBy:d,Badge:s,toc:m,Details:f},b="wrapper";function g(e){let{components:t,...n}=e;return(0,u.kt)(b,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"No description"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AuditRuleProductInput {\n  legacy\n  hotelX\n}\n")),(0,u.kt)("h3",{id:"values"},"Values"),(0,u.kt)("h4",{id:"code-style-fontweight-normal-auditruleproductinputblegacybcode"},(0,u.kt)("a",{parentName:"h4",href:"#"},(0,u.kt)("code",{style:{fontWeight:"normal"}},"AuditRuleProductInput.",(0,u.kt)("b",null,"legacy")))),(0,u.kt)("blockquote",null),(0,u.kt)("h4",{id:"code-style-fontweight-normal-auditruleproductinputbhotelxbcode"},(0,u.kt)("a",{parentName:"h4",href:"#"},(0,u.kt)("code",{style:{fontWeight:"normal"}},"AuditRuleProductInput.",(0,u.kt)("b",null,"hotelX")))),(0,u.kt)("blockquote",null),(0,u.kt)("h3",{id:"member-of"},"Member of"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"/api/inputs/audit-rule-connection-where-input"},(0,u.kt)("inlineCode",{parentName:"a"},"AuditRuleConnectionWhereInput"))," ",(0,u.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,u.kt)(p,{mdxType:"Bullet"}),(0,u.kt)("a",{parentName:"p",href:"/api/inputs/audit-rule-create-input"},(0,u.kt)("inlineCode",{parentName:"a"},"AuditRuleCreateInput"))," ",(0,u.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,u.kt)(p,{mdxType:"Bullet"}),(0,u.kt)("a",{parentName:"p",href:"/api/inputs/audit-rule-where-input"},(0,u.kt)("inlineCode",{parentName:"a"},"AuditRuleWhereInput"))," ",(0,u.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);