"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),o=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=o(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(n),f=r,b=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return n?s.createElement(b,a(a({ref:t},p),{},{components:n})):s.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:r,a[1]=u;for(var o=2;o<i;o++)a[o]=n[o];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71635:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>c,assets:()=>o,contentTitle:()=>u,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>f});var s=n(87462),r=n(67294),i=n(3905);const a={id:"business-rules-input",title:"BusinessRulesInput",hide_table_of_contents:!1},u=void 0,l={unversionedId:"inputs/business-rules-input",id:"inputs/business-rules-input",title:"BusinessRulesInput",description:"List of business rules to use as filter on the options.",source:"@site/api/inputs/business-rules-input.mdx",sourceDirName:"inputs",slug:"/inputs/business-rules-input",permalink:"/api/inputs/business-rules-input",draft:!1,tags:[],version:"current",frontMatter:{id:"business-rules-input",title:"BusinessRulesInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BookingsReportWhereInput",permalink:"/api/inputs/bookings-report-where-input"},next:{title:"BuyerCategoryPropertiesInput",permalink:"/api/inputs/buyer-category-properties-input"}},o={},p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>BusinessRulesInput.<b>businessRulesType</b></code><Bullet /><code>BusinessRulesType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-businessrulesinputbbusinessrulestypebcodebusinessrulestype-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:u=!1}=e;const[l,o]=(0,r.useState)(u);return(0,i.kt)("details",(0,s.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&a)},m={Bullet:p,SpecifiedBy:c,Badge:d,toc:f,Details:b},y="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List of business rules to use as filter on the options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input BusinessRulesInput {\n  businessRulesType: BusinessRulesType\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-businessrulesinputbbusinessrulestypebcodebusinessrulestype-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"BusinessRulesInput.",(0,i.kt)("b",null,"businessRulesType"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/enums/business-rules-type"},(0,i.kt)("inlineCode",{parentName:"a"},"BusinessRulesType"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Different business rules to filter the returned options.")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/inputs/hotel-settings-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelSettingsInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/inputs/settings-base-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SettingsBaseInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);