"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92413:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=r(87462),a=r(67294),i=r(3905);const o={id:"criteria-type",title:"CriteriaType",hide_table_of_contents:!1},l=void 0,c={unversionedId:"enums/criteria-type",id:"enums/criteria-type",title:"CriteriaType",description:"CriteriaType",source:"@site/api/enums/criteria-type.mdx",sourceDirName:"enums",slug:"/enums/criteria-type",permalink:"/api/enums/criteria-type",draft:!1,tags:[],version:"current",frontMatter:{id:"criteria-type",title:"CriteriaType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Contract",permalink:"/api/enums/contract"},next:{title:"CustomerAgentType",permalink:"/api/enums/customer-agent-type"}},s={},u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CriteriaType.<b>CurrentDestination_CurrentMarket</b></code>",id:"code-style-fontweight-normal-criteriatypebcurrentdestination_currentmarketbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CriteriaType.<b>CurrentDestination_NewMarket</b></code>",id:"code-style-fontweight-normal-criteriatypebcurrentdestination_newmarketbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CriteriaType.<b>NewDestination_CurrentMarket</b></code>",id:"code-style-fontweight-normal-criteriatypebnewdestination_currentmarketbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:l=!1}=e;const[c,s]=(0,a.useState)(l);return(0,i.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&o)},f={Bullet:u,SpecifiedBy:p,Badge:d,toc:m,Details:y},b="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(b,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CriteriaType"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CriteriaType {\n  CurrentDestination_CurrentMarket\n  CurrentDestination_NewMarket\n  NewDestination_CurrentMarket\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-criteriatypebcurrentdestination_currentmarketbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CriteriaType.",(0,i.kt)("b",null,"CurrentDestination_CurrentMarket")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-criteriatypebcurrentdestination_newmarketbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CriteriaType.",(0,i.kt)("b",null,"CurrentDestination_NewMarket")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-criteriatypebnewdestination_currentmarketbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CriteriaType.",(0,i.kt)("b",null,"NewDestination_CurrentMarket")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/recommendation-data"},(0,i.kt)("inlineCode",{parentName:"a"},"RecommendationData"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/recommendations-where-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RecommendationsWhereInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);