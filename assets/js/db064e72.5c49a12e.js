"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29121],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(g,p(p({ref:t},s),{},{components:a})):n.createElement(g,p({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var d=2;d<i;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21097:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>p,metadata:()=>l,toc:()=>m});var n=a(87462),r=a(67294),i=a(3905);const p={id:"language",title:"Language",hide_table_of_contents:!1},o=void 0,l={unversionedId:"scalars/language",id:"scalars/language",title:"Language",description:"The Language type represents language values. A good example might be a Hotel Description Language.",source:"@site/api/scalars/language.mdx",sourceDirName:"scalars",slug:"/scalars/language",permalink:"/api/scalars/language",draft:!1,tags:[],version:"current",frontMatter:{id:"language",title:"Language",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"JWT",permalink:"/api/scalars/jwt"},next:{title:"LocationCode",permalink:"/api/scalars/location-code"}},d={},s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:p,startOpen:o=!1}=e;const[l,d]=(0,r.useState)(o);return(0,i.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&p)},k={Bullet:s,SpecifiedBy:u,Badge:c,toc:m,Details:g},y="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'The Language type represents language values. A good example might be a Hotel Description Language.\nIn queries or mutations, Language fields have to be specified in ISO 639-1 format with enclosing double quotes "en".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Language\n")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/criteria-search"},(0,i.kt)("inlineCode",{parentName:"a"},"CriteriaSearch"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-book-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelBookInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-cancel-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCancelInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-commit-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCommitInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-amend-board-quote-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaAmendBoardQuoteInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-amend-dates-quote-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaAmendDatesQuoteInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-amend-paxes-quote-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaAmendPaxesQuoteInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-amend-remarks-quote-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaAmendRemarksQuoteInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-amend-rooms-quote-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaAmendRoomsQuoteInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-booking-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaBookingInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-quote-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaQuoteInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-criteria-search-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelCriteriaSearchInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/hotel-xdefault-settings-data"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelXDefaultSettingsData"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xdefault-settings-data-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelXDefaultSettingsDataInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/search-criteria-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchCriteriaCreateInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/search-criteria-data"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchCriteriaData"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/search-criteria-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SearchCriteriaUpdateInput"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/text"},(0,i.kt)("inlineCode",{parentName:"a"},"Text"))," ",(0,i.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);