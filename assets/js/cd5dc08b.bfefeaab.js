"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),i=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(n),u=a,y=m["".concat(d,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55163:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(87462),a=n(67294),o=n(3905);const l={id:"generated-payment-method-type",title:"GeneratedPaymentMethodType",hide_table_of_contents:!1},p=void 0,d={unversionedId:"enums/generated-payment-method-type",id:"enums/generated-payment-method-type",title:"GeneratedPaymentMethodType",description:"Indicates the payment method used, which depends on the configured payment supplier.",source:"@site/api/enums/generated-payment-method-type.mdx",sourceDirName:"enums",slug:"/enums/generated-payment-method-type",permalink:"/api/enums/generated-payment-method-type",draft:!1,tags:[],version:"current",frontMatter:{id:"generated-payment-method-type",title:"GeneratedPaymentMethodType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"GenderType",permalink:"/api/enums/gender-type"},next:{title:"GroupTypeInput",permalink:"/api/enums/group-type-input"}},i={},c=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>GeneratedPaymentMethodType.<b>VIRTUAL_CARD</b></code>",id:"code-style-fontweight-normal-generatedpaymentmethodtypebvirtual_cardbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>GeneratedPaymentMethodType.<b>WALLET</b></code>",id:"code-style-fontweight-normal-generatedpaymentmethodtypebwalletbcode",level:4},{value:"Member Of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:p=!1}=e;const[d,i]=(0,a.useState)(p);return(0,o.kt)("details",(0,r.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&l)},f={Bullet:c,SpecifiedBy:m,Badge:s,toc:u,Details:y},h="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Indicates the payment method used, which depends on the configured payment supplier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum GeneratedPaymentMethodType {\n  VIRTUAL_CARD\n  WALLET\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-generatedpaymentmethodtypebvirtual_cardbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"GeneratedPaymentMethodType.",(0,o.kt)("b",null,"VIRTUAL_CARD")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The payment method is a generation of a virtual credit card to send to the supplier.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-generatedpaymentmethodtypebwalletbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"GeneratedPaymentMethodType.",(0,o.kt)("b",null,"WALLET")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The payment method is a wallet transaction.")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/generated-payment-info"},(0,o.kt)("inlineCode",{parentName:"a"},"GeneratedPaymentInfo"))," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);