"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53961:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var r=n(87462),o=n(67294),l=n(3905);const a={id:"personal-title-type",title:"PersonalTitleType",hide_table_of_contents:!1},i=void 0,p={unversionedId:"enums/personal-title-type",id:"enums/personal-title-type",title:"PersonalTitleType",description:"Constraint supplementary to a individual name.",source:"@site/api/enums/personal-title-type.mdx",sourceDirName:"enums",slug:"/enums/personal-title-type",permalink:"/api/enums/personal-title-type",draft:!1,tags:[],version:"current",frontMatter:{id:"personal-title-type",title:"PersonalTitleType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentType",permalink:"/api/enums/payment-type"},next:{title:"PlaceType",permalink:"/api/enums/place-type"}},s={},c=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PersonalTitleType.<b>MR</b></code>",id:"code-style-fontweight-normal-personaltitletypebmrbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PersonalTitleType.<b>MRS</b></code>",id:"code-style-fontweight-normal-personaltitletypebmrsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PersonalTitleType.<b>MISS</b></code>",id:"code-style-fontweight-normal-personaltitletypebmissbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PersonalTitleType.<b>MS</b></code>",id:"code-style-fontweight-normal-personaltitletypebmsbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:i=!1}=e;const[p,s]=(0,o.useState)(i);return(0,l.kt)("details",(0,r.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&a)},f={Bullet:c,SpecifiedBy:u,Badge:m,toc:d,Details:y},b="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Constraint supplementary to a individual name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PersonalTitleType {\n  MR\n  MRS\n  MISS\n  MS\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-personaltitletypebmrbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PersonalTitleType.",(0,l.kt)("b",null,"MR")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To refer to a man. Is not possible know if it is married or single.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-personaltitletypebmrsbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PersonalTitleType.",(0,l.kt)("b",null,"MRS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To refer to a married woman")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-personaltitletypebmissbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PersonalTitleType.",(0,l.kt)("b",null,"MISS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To refer to a single woman")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-personaltitletypebmsbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PersonalTitleType.",(0,l.kt)("b",null,"MS")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To refer to a woman. Is not possible know if it is married or single.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/inputs/book-pax-input"},(0,l.kt)("inlineCode",{parentName:"a"},"BookPaxInput"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/inputs/holder-input"},(0,l.kt)("inlineCode",{parentName:"a"},"HolderInput"))," ",(0,l.kt)(m,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);