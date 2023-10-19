"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2897:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905);const i={id:"organization-template",title:"OrganizationTemplate",hide_table_of_contents:!1},l=void 0,p={unversionedId:"enums/organization-template",id:"enums/organization-template",title:"OrganizationTemplate",description:"No description",source:"@site/api/enums/organization-template.mdx",sourceDirName:"enums",slug:"/enums/organization-template",permalink:"/api/enums/organization-template",draft:!1,tags:[],version:"current",frontMatter:{id:"organization-template",title:"OrganizationTemplate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OrganizationSearchByOptions",permalink:"/api/enums/organization-search-by-options"},next:{title:"OrganizationTypeInput",permalink:"/api/enums/organization-type-input"}},c={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>OrganizationTemplate.<b>ORGANIZATION_BUYER</b></code>",id:"code-style-fontweight-normal-organizationtemplateborganization_buyerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrganizationTemplate.<b>ORGANIZATION_SELLER</b></code>",id:"code-style-fontweight-normal-organizationtemplateborganization_sellerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrganizationTemplate.<b>ORGANIZATION_BUYER_SELLER</b></code>",id:"code-style-fontweight-normal-organizationtemplateborganization_buyer_sellerbcode",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[p,c]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&i)},f={Bullet:s,SpecifiedBy:u,Badge:m,toc:d,Details:g},b="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum OrganizationTemplate {\n  ORGANIZATION_BUYER\n  ORGANIZATION_SELLER\n  ORGANIZATION_BUYER_SELLER\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-organizationtemplateborganization_buyerbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrganizationTemplate.",(0,o.kt)("b",null,"ORGANIZATION_BUYER")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-organizationtemplateborganization_sellerbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrganizationTemplate.",(0,o.kt)("b",null,"ORGANIZATION_SELLER")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-organizationtemplateborganization_buyer_sellerbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrganizationTemplate.",(0,o.kt)("b",null,"ORGANIZATION_BUYER_SELLER")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/create-organization-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateOrganizationInput"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/suit-organization-input"},(0,o.kt)("inlineCode",{parentName:"a"},"SuitOrganizationInput"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);