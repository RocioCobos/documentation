"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,b=d["".concat(i,".").concat(p)]||d[p]||u[p]||r;return n?o.createElement(b,l(l({ref:t},m),{},{components:n})):o.createElement(b,l({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43314:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,Details:()=>b,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(87462),a=n(67294),r=n(3905);const l={id:"hotel-xcommon-settings-data",title:"HotelXCommonSettingsData",hide_table_of_contents:!1},s=void 0,i={unversionedId:"objects/hotel-xcommon-settings-data",id:"objects/hotel-xcommon-settings-data",title:"HotelXCommonSettingsData",description:"No description",source:"@site/api/objects/hotel-xcommon-settings-data.mdx",sourceDirName:"objects",slug:"/objects/hotel-xcommon-settings-data",permalink:"/api/objects/hotel-xcommon-settings-data",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xcommon-settings-data",title:"HotelXCommonSettingsData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXAmenity",permalink:"/api/objects/hotel-xamenity"},next:{title:"HotelXCommonSettings",permalink:"/api/objects/hotel-xcommon-settings"}},c={},m=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXCommonSettingsData.<b>currency</b></code><Bullet /><code>Currency</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxcommonsettingsdatabcurrencybcodecurrency-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXCommonSettingsData.<b>businessRules</b></code><Bullet /><code>BusinessRules</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelxcommonsettingsdatabbusinessrulesbcodebusinessrules-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXCommonSettingsData.<b>timeout</b></code><Bullet /><code>Timeout</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelxcommonsettingsdatabtimeoutbcodetimeout-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:s=!1}=e;const[i,c]=(0,a.useState)(s);return(0,r.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},g={Bullet:m,SpecifiedBy:d,Badge:u,toc:p,Details:b},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelXCommonSettingsData {\n  currency: Currency\n  businessRules: BusinessRules\n  timeout: Timeout\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelxcommonsettingsdatabcurrencybcodecurrency-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelXCommonSettingsData.",(0,r.kt)("b",null,"currency"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/currency"},(0,r.kt)("inlineCode",{parentName:"a"},"Currency"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelxcommonsettingsdatabbusinessrulesbcodebusinessrules-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelXCommonSettingsData.",(0,r.kt)("b",null,"businessRules"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/business-rules"},(0,r.kt)("inlineCode",{parentName:"a"},"BusinessRules"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-hotelxcommonsettingsdatabtimeoutbcodetimeout-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"HotelXCommonSettingsData.",(0,r.kt)("b",null,"timeout"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/timeout"},(0,r.kt)("inlineCode",{parentName:"a"},"Timeout"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-xcommon-settings"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelXCommonSettings"))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);