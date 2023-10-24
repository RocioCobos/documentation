"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89644],{3905:(e,t,a)=>{a.d(t,{Zo:()=>y,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},y=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=c(e,["components","mdxType","originalType","parentName"]),s=i(a),d=r,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||l;return a?n.createElement(m,o(o({ref:t},y),{},{components:a})):n.createElement(m,o({ref:t},y))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17061:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>y,Details:()=>m,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(87462),r=a(67294),l=a(3905);const o={id:"package-penalty-type",title:"PackagePenaltyType",hide_table_of_contents:!1},c=void 0,p={unversionedId:"enums/package-penalty-type",id:"enums/package-penalty-type",title:"PackagePenaltyType",description:"No description",source:"@site/api/enums/package-penalty-type.mdx",sourceDirName:"enums",slug:"/enums/package-penalty-type",permalink:"/api/enums/package-penalty-type",draft:!1,tags:[],version:"current",frontMatter:{id:"package-penalty-type",title:"PackagePenaltyType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PackageDocumentType",permalink:"/api/enums/package-document-type"},next:{title:"PackagePersonalTitleType",permalink:"/api/enums/package-personal-title-type"}},i={},y=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PackagePenaltyType.<b>AMOUNT</b></code>",id:"code-style-fontweight-normal-packagepenaltytypebamountbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PackagePenaltyType.<b>NIGHTS</b></code>",id:"code-style-fontweight-normal-packagepenaltytypebnightsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PackagePenaltyType.<b>PERCENTAGE</b></code>",id:"code-style-fontweight-normal-packagepenaltytypebpercentagebcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[p,i]=(0,r.useState)(c);return(0,l.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&o)},g={Bullet:y,SpecifiedBy:s,Badge:u,toc:d,Details:m},k="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PackagePenaltyType {\n  AMOUNT\n  NIGHTS\n  PERCENTAGE\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-packagepenaltytypebamountbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PackagePenaltyType.",(0,l.kt)("b",null,"AMOUNT")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-packagepenaltytypebnightsbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PackagePenaltyType.",(0,l.kt)("b",null,"NIGHTS")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-packagepenaltytypebpercentagebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PackagePenaltyType.",(0,l.kt)("b",null,"PERCENTAGE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/ferry-cancel-penalty"},(0,l.kt)("inlineCode",{parentName:"a"},"FerryCancelPenalty"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(y,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/package-cancel-penalty"},(0,l.kt)("inlineCode",{parentName:"a"},"PackageCancelPenalty"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);