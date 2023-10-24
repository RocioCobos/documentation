"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52738],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(y,c(c({ref:t},s),{},{components:a})):r.createElement(y,c({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70252:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>d,assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(67294),i=a(3905);const c={id:"currency",title:"Currency",hide_table_of_contents:!1},l=void 0,p={unversionedId:"scalars/currency",id:"scalars/currency",title:"Currency",description:"The Currency type represents currency values. A good example might be a Rate Price Currency.",source:"@site/api/scalars/currency.mdx",sourceDirName:"scalars",slug:"/scalars/currency",permalink:"/api/scalars/currency",draft:!1,tags:[],version:"current",frontMatter:{id:"currency",title:"Currency",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Country",permalink:"/api/scalars/country"},next:{title:"CVC",permalink:"/api/scalars/cvc"}},o={},s=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:l=!1}=e;const[p,o]=(0,n.useState)(l);return(0,i.kt)("details",(0,r.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&c)},g={Bullet:s,SpecifiedBy:d,Badge:u,toc:m,Details:y},b="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(b,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'The Currency type represents currency values. A good example might be a Rate Price Currency.\nIn queries or mutations, Currency fields have to be specified in ISO 4217 format with enclosing double quotes "EUR".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Currency\n")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/cancel-penalty"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelPenalty"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/criteria-booking-references-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CriteriaBookingReferencesInput"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/criteria-search"},(0,i.kt)("inlineCode",{parentName:"a"},"CriteriaSearch"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/exchange"},(0,i.kt)("inlineCode",{parentName:"a"},"Exchange"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-search-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaSearchInput"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/hotel-xcommon-settings-data"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelXCommonSettingsData"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xcommon-settings-data-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelXCommonSettingsDataInput"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/hotel-xdefault-settings-data"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelXDefaultSettingsData"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xdefault-settings-data-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelXDefaultSettingsDataInput"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/markup"},(0,i.kt)("inlineCode",{parentName:"a"},"Markup"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/price"},(0,i.kt)("inlineCode",{parentName:"a"},"Price"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/priceable"},(0,i.kt)("inlineCode",{parentName:"a"},"Priceable"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/price-static"},(0,i.kt)("inlineCode",{parentName:"a"},"PriceStatic"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/settings-base-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SettingsBaseInput"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/virtual-credit-card-input"},(0,i.kt)("inlineCode",{parentName:"a"},"VirtualCreditCardInput"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);