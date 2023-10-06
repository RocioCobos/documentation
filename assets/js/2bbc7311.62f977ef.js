"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27073:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,Details:()=>f,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(67294),o=n(3905);const i={id:"domain-name",title:"DomainName",hide_table_of_contents:!1},l=void 0,c={unversionedId:"scalars/domain-name",id:"scalars/domain-name",title:"DomainName",description:"Scalar for type Domain",source:"@site/api/scalars/domain-name.mdx",sourceDirName:"scalars",slug:"/scalars/domain-name",permalink:"/api/scalars/domain-name",draft:!1,tags:[],version:"current",frontMatter:{id:"domain-name",title:"DomainName",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DialingCountryCode",permalink:"/api/scalars/dialing-country-code"},next:{title:"Duration",permalink:"/api/scalars/duration"}},s={},m=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),d=[{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[c,s]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},y={Bullet:m,SpecifiedBy:p,Badge:u,toc:d,Details:f},b="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Scalar for type Domain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar DomainName\n")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/domain-data"},(0,o.kt)("inlineCode",{parentName:"a"},"DomainData"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);