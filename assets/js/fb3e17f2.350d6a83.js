"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37436:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(67294),o=n(3905);const i={id:"payment-x",title:"paymentX",hide_table_of_contents:!1},l=void 0,c={unversionedId:"mutations/payment-x",id:"mutations/payment-x",title:"paymentX",description:"No description",source:"@site/api/mutations/payment-x.mdx",sourceDirName:"mutations",slug:"/mutations/payment-x",permalink:"/api/mutations/payment-x",draft:!1,tags:[],version:"current",frontMatter:{id:"payment-x",title:"paymentX",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"package",permalink:"/api/mutations/package"},next:{title:"searchCriteria",permalink:"/api/mutations/search-criteria"}},p={},s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),d=[{value:"Type",id:"type",level:3},{value:'<code>PaymentXMutation</code> <Badge class="badge badge--secondary" text="object"/>',id:"paymentxmutation-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[c,p]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},f={Bullet:s,SpecifiedBy:u,Badge:m,toc:d,Details:y},b="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"paymentX: PaymentXMutation\n")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"paymentxmutation-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/payment-xmutation"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentXMutation"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}g.isMDXComponent=!0}}]);