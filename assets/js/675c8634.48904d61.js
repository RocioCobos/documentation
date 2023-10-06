"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},b=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),b=r,m=c["".concat(l,".").concat(b)]||c[b]||d[b]||a;return n?s.createElement(m,i(i({ref:t},p),{},{components:n})):s.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}b.displayName="MDXCreateElement"},48764:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>b});var s=n(87462),r=n(67294),a=n(3905);const i={id:"business-rules-input",title:"BusinessRulesInput",hide_table_of_contents:!1},o=void 0,l={unversionedId:"inputs/business-rules-input",id:"inputs/business-rules-input",title:"BusinessRulesInput",description:"List of business rules to use as filter on the options.",source:"@site/api/inputs/business-rules-input.mdx",sourceDirName:"inputs",slug:"/inputs/business-rules-input",permalink:"/api/inputs/business-rules-input",draft:!1,tags:[],version:"current",frontMatter:{id:"business-rules-input",title:"BusinessRulesInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BookingsReportWhereInput",permalink:"/api/inputs/bookings-report-where-input"},next:{title:"BuyerCategoryPropertiesInput",permalink:"/api/inputs/buyer-category-properties-input"}},u={},p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>BusinessRulesInput.<b>optionsQuota</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-businessrulesinputboptionsquotabcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>BusinessRulesInput.<b>businessRulesType</b></code><Bullet /><code>BusinessRulesType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-businessrulesinputbbusinessrulestypebcodebusinessrulestype-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:o=!1}=e;const[l,u]=(0,r.useState)(o);return(0,a.kt)("details",(0,s.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&i)},f={Bullet:p,SpecifiedBy:c,Badge:d,toc:b,Details:m},y="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,s.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"List of business rules to use as filter on the options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input BusinessRulesInput {\n  optionsQuota: Int\n  businessRulesType: BusinessRulesType\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-businessrulesinputboptionsquotabcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"BusinessRulesInput.",(0,a.kt)("b",null,"optionsQuota"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Options quota per search. Maximum numbers of options to be returned by the search query.\n@deprecated(reason: "deprecated from 2019-12-04. This option will be only configurable by settings.")')),(0,a.kt)("h4",{id:"code-style-fontweight-normal-businessrulesinputbbusinessrulestypebcodebusinessrulestype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"BusinessRulesInput.",(0,a.kt)("b",null,"businessRulesType"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/business-rules-type"},(0,a.kt)("inlineCode",{parentName:"a"},"BusinessRulesType"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Different business rules to filter the returned options.")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/hotel-settings-input"},(0,a.kt)("inlineCode",{parentName:"a"},"HotelSettingsInput"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/inputs/settings-base-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SettingsBaseInput"))," ",(0,a.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);