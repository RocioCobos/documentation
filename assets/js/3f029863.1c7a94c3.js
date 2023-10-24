"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||s;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93369:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>f});var a=n(87462),o=n(67294),s=n(3905);const r={id:"hotel-xaccess-input",title:"HotelXAccessInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"inputs/hotel-xaccess-input",id:"inputs/hotel-xaccess-input",title:"HotelXAccessInput",description:"AccessInput overwrites an existent access in our Back Office or creates a new",source:"@site/api/inputs/hotel-xaccess-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xaccess-input",permalink:"/api/inputs/hotel-xaccess-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xaccess-input",title:"HotelXAccessInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelSettingsInput",permalink:"/api/inputs/hotel-settings-input"},next:{title:"HotelXAppDataInput",permalink:"/api/inputs/hotel-xapp-data-input"}},l={},p=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXAccessInput.<b>accessId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelxaccessinputbaccessidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXAccessInput.<b>configuration</b></code><Bullet /><code>ConfigurationInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelxaccessinputbconfigurationbcodeconfigurationinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXAccessInput.<b>settings</b></code><Bullet /><code>SettingsBaseInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelxaccessinputbsettingsbcodesettingsbaseinput-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:i=!1}=e;const[c,l]=(0,o.useState)(i);return(0,s.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},m={Bullet:p,SpecifiedBy:u,Badge:d,toc:f,Details:g},b="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"AccessInput overwrites an existent access in our Back Office or creates a new\none to be used in this search query only. An access object contains its own code, configuration and settings."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXAccessInput {\n  accessId: ID!\n  configuration: ConfigurationInput\n  settings: SettingsBaseInput\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-hotelxaccessinputbaccessidbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"HotelXAccessInput.",(0,s.kt)("b",null,"accessId"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The accessID used to identify the existing access in our Back Office in order to\noverwrite it. Acts as an identifier in this search. It can either exist or not.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-hotelxaccessinputbconfigurationbcodeconfigurationinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"HotelXAccessInput.",(0,s.kt)("b",null,"configuration"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/inputs/configuration-input"},(0,s.kt)("inlineCode",{parentName:"a"},"ConfigurationInput"))," ",(0,s.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Information required to access the supplier s system.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-hotelxaccessinputbsettingsbcodesettingsbaseinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"HotelXAccessInput.",(0,s.kt)("b",null,"settings"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/inputs/settings-base-input"},(0,s.kt)("inlineCode",{parentName:"a"},"SettingsBaseInput"))," ",(0,s.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"You can configure an special settings for any access. This level overwrites the search and supplier settings levels.")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xsupplier-input"},(0,s.kt)("inlineCode",{parentName:"a"},"HotelXSupplierInput"))," ",(0,s.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);