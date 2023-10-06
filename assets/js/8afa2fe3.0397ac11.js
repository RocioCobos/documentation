"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,y=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78833:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(87462),o=n(67294),a=n(3905);const l={id:"gender-type",title:"GenderType",hide_table_of_contents:!1},i=void 0,p={unversionedId:"enums/gender-type",id:"enums/gender-type",title:"GenderType",description:"No description",source:"@site/api/enums/gender-type.mdx",sourceDirName:"enums",slug:"/enums/gender-type",permalink:"/api/enums/gender-type",draft:!1,tags:[],version:"current",frontMatter:{id:"gender-type",title:"GenderType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FolderTemplate",permalink:"/api/enums/folder-template"},next:{title:"GeneratedPaymentMethodType",permalink:"/api/enums/generated-payment-method-type"}},d={},c=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>GenderType.<b>MALE</b></code>",id:"code-style-fontweight-normal-gendertypebmalebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>GenderType.<b>FEMALE</b></code>",id:"code-style-fontweight-normal-gendertypebfemalebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>GenderType.<b>OTHERS</b></code>",id:"code-style-fontweight-normal-gendertypebothersbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[p,d]=(0,o.useState)(i);return(0,a.kt)("details",(0,r.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&l)},f={Bullet:c,SpecifiedBy:s,Badge:u,toc:m,Details:y},b="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum GenderType {\n  MALE\n  FEMALE\n  OTHERS\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-gendertypebmalebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GenderType.",(0,a.kt)("b",null,"MALE")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-gendertypebfemalebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GenderType.",(0,a.kt)("b",null,"FEMALE")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-gendertypebothersbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"GenderType.",(0,a.kt)("b",null,"OTHERS")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/objects/passenger-book"},(0,a.kt)("inlineCode",{parentName:"a"},"PassengerBook"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/inputs/passenger-book-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PassengerBookInput"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);