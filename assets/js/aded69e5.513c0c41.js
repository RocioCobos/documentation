"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,m=s["".concat(p,".").concat(d)]||s[d]||y[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98698:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(87462),o=n(67294),a=n(3905);const i={id:"organization-type-input",title:"OrganizationTypeInput",hide_table_of_contents:!1},l=void 0,p={unversionedId:"enums/organization-type-input",id:"enums/organization-type-input",title:"OrganizationTypeInput",description:"Type of organizations to filter",source:"@site/api/enums/organization-type-input.mdx",sourceDirName:"enums",slug:"/enums/organization-type-input",permalink:"/api/enums/organization-type-input",draft:!1,tags:[],version:"current",frontMatter:{id:"organization-type-input",title:"OrganizationTypeInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OrganizationTemplate",permalink:"/api/enums/organization-template"},next:{title:"OrganizationsOrderByEnum",permalink:"/api/enums/organizations-order-by-enum"}},u={},c=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>OrganizationTypeInput.<b>BUYER</b></code>",id:"code-style-fontweight-normal-organizationtypeinputbbuyerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrganizationTypeInput.<b>SELLER</b></code>",id:"code-style-fontweight-normal-organizationtypeinputbsellerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrganizationTypeInput.<b>BOTH</b></code>",id:"code-style-fontweight-normal-organizationtypeinputbbothbcode",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[p,u]=(0,o.useState)(l);return(0,a.kt)("details",(0,r.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&i)},f={Bullet:c,SpecifiedBy:s,Badge:y,toc:d,Details:m},g="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Type of organizations to filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum OrganizationTypeInput {\n  BUYER\n  SELLER\n  BOTH\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-organizationtypeinputbbuyerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrganizationTypeInput.",(0,a.kt)("b",null,"BUYER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-organizationtypeinputbsellerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrganizationTypeInput.",(0,a.kt)("b",null,"SELLER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-organizationtypeinputbbothbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OrganizationTypeInput.",(0,a.kt)("b",null,"BOTH")))),(0,a.kt)("blockquote",null))}b.isMDXComponent=!0}}]);