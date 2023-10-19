"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||p;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44114:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>f,SpecifiedBy:()=>c,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(87462),r=a(67294),p=a(3905);const o={id:"hotel-xapp-data-input",title:"HotelXAppDataInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"inputs/hotel-xapp-data-input",id:"inputs/hotel-xapp-data-input",title:"HotelXAppDataInput",description:"No description",source:"@site/api/inputs/hotel-xapp-data-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xapp-data-input",permalink:"/api/inputs/hotel-xapp-data-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xapp-data-input",title:"HotelXAppDataInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXAccessInput",permalink:"/api/inputs/hotel-xaccess-input"},next:{title:"HotelXAppInput",permalink:"/api/inputs/hotel-xapp-input"}},s={},u=()=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,p.kt)(r.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXAppDataInput.<b>parameters</b></code><Bullet /><code>[ParameterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelxappdatainputbparametersbcodeparameterinput--",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[i,s]=(0,r.useState)(l);return(0,p.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,p.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},b={Bullet:u,SpecifiedBy:c,Badge:d,toc:m,Details:f},y="wrapper";function g(e){let{components:t,...a}=e;return(0,p.kt)(y,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXAppDataInput {\n  parameters: [ParameterInput!]\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-hotelxappdatainputbparametersbcodeparameterinput--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"HotelXAppDataInput.",(0,p.kt)("b",null,"parameters"))),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/api/inputs/parameter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"[ParameterInput!]"))," ",(0,p.kt)(d,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,p.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xapp-input"},(0,p.kt)("inlineCode",{parentName:"a"},"HotelXAppInput"))," ",(0,p.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);