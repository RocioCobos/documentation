"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59909:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var r=n(87462),a=n(67294),o=n(3905);const l={id:"ferry-cancel-input",title:"FerryCancelInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"inputs/ferry-cancel-input",id:"inputs/ferry-cancel-input",title:"FerryCancelInput",description:"No description",source:"@site/api/inputs/ferry-cancel-input.mdx",sourceDirName:"inputs",slug:"/inputs/ferry-cancel-input",permalink:"/api/inputs/ferry-cancel-input",draft:!1,tags:[],version:"current",frontMatter:{id:"ferry-cancel-input",title:"FerryCancelInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FerryBookInput",permalink:"/api/inputs/ferry-book-input"},next:{title:"FerryGetBookingWhereInput",permalink:"/api/inputs/ferry-get-booking-where-input"}},p={},s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FerryCancelInput.<b>locator</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferrycancelinputblocatorbcodestring-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[c,p]=(0,a.useState)(i);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&l)},m={Bullet:s,SpecifiedBy:u,Badge:d,toc:f,Details:y},g="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input FerryCancelInput {\n  locator: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrycancelinputblocatorbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerryCancelInput.",(0,o.kt)("b",null,"locator"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}b.isMDXComponent=!0}}]);