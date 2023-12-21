"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=o,u=m["".concat(i,".").concat(p)]||m[p]||g[p]||r;return n?a.createElement(u,c(c({ref:t},d),{},{components:n})):a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26098:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>d,Details:()=>u,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=n(87462),o=n(67294),r=n(3905);const c={id:"check-information",title:"CheckInformation",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/check-information",id:"objects/check-information",title:"CheckInformation",description:"No description",source:"@site/api/objects/check-information.mdx",sourceDirName:"objects",slug:"/objects/check-information",permalink:"/api/objects/check-information",draft:!1,tags:[],version:"current",frontMatter:{id:"check-information",title:"CheckInformation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Category",permalink:"/api/objects/category"},next:{title:"ClientConnection",permalink:"/api/objects/client-connection"}},s={},d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CheckInformation.<b>instructions</b></code><Bullet /><code>[Text!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-checkinformationbinstructionsbcodetext--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckInformation.<b>specialInstructions</b></code><Bullet /><code>[Text!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-checkinformationbspecialinstructionsbcodetext--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckInformation.<b>minAge</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkinformationbminagebcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckInformation.<b>schedule</b></code><Bullet /><code>TimeRange</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-checkinformationbschedulebcodetimerange-",level:4},{value:"Member Of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[i,s]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&c)},k={Bullet:d,SpecifiedBy:m,Badge:g,toc:p,Details:u},b="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CheckInformation {\n  instructions(languages: [Language!]): [Text!]\n  specialInstructions(languages: [Language!]): [Text!]\n  minAge: Int\n  schedule: TimeRange\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-checkinformationbinstructionsbcodetext--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CheckInformation.",(0,r.kt)("b",null,"instructions"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/text"},(0,r.kt)("inlineCode",{parentName:"a"},"[Text!]"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CheckIn instructions"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-checkinformationinstructionsblanguagesbcodelanguage--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CheckInformation.instructions.",(0,r.kt)("b",null,"languages"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/scalars/language"},(0,r.kt)("inlineCode",{parentName:"a"},"[Language!]"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-checkinformationbspecialinstructionsbcodetext--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CheckInformation.",(0,r.kt)("b",null,"specialInstructions"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/text"},(0,r.kt)("inlineCode",{parentName:"a"},"[Text!]"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CheckIn special instructions"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-checkinformationspecialinstructionsblanguagesbcodelanguage--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CheckInformation.specialInstructions.",(0,r.kt)("b",null,"languages"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/scalars/language"},(0,r.kt)("inlineCode",{parentName:"a"},"[Language!]"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-checkinformationbminagebcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CheckInformation.",(0,r.kt)("b",null,"minAge"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Minimal age allowed for doing the checkin")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-checkinformationbschedulebcodetimerange-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CheckInformation.",(0,r.kt)("b",null,"schedule"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/time-range"},(0,r.kt)("inlineCode",{parentName:"a"},"TimeRange"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The schedule of checkIn")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-data"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelData"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);