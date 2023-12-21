"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},i=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(r),k=a,g=p["".concat(c,".").concat(k)]||p[k]||b[k]||l;return r?o.createElement(g,n(n({ref:t},i),{},{components:r})):o.createElement(g,n({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,n=new Array(l);n[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,n[1]=s;for(var d=2;d<l;d++)n[d]=r[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},19266:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>c,toc:()=>k});var o=r(87462),a=r(67294),l=r(3905);const n={id:"traveller-book",title:"TravellerBook",hide_table_of_contents:!1},s=void 0,c={unversionedId:"objects/traveller-book",id:"objects/traveller-book",title:"TravellerBook",description:"No description",source:"@site/api/objects/traveller-book.mdx",sourceDirName:"objects",slug:"/objects/traveller-book",permalink:"/api/objects/traveller-book",draft:!1,tags:[],version:"current",frontMatter:{id:"traveller-book",title:"TravellerBook",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Transport",permalink:"/api/objects/transport"},next:{title:"Urls",permalink:"/api/objects/urls"}},d={},i=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TravellerBook.<b>passengers</b></code><Bullet /><code>[PassengerBook]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-travellerbookbpassengersbcodepassengerbook--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TravellerBook.<b>vehicles</b></code><Bullet /><code>[VehicleBook]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-travellerbookbvehiclesbcodevehiclebook--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TravellerBook.<b>pets</b></code><Bullet /><code>[Pet]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-travellerbookbpetsbcodepet--",level:4},{value:"Member Of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:r,children:n,startOpen:s=!1}=e;const[c,d]=(0,a.useState)(s);return(0,l.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&n)},u={Bullet:i,SpecifiedBy:p,Badge:b,toc:k,Details:g},m="wrapper";function f(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type TravellerBook {\n  passengers: [PassengerBook]\n  vehicles: [VehicleBook]\n  pets: [Pet]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-travellerbookbpassengersbcodepassengerbook--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TravellerBook.",(0,l.kt)("b",null,"passengers"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/passenger-book"},(0,l.kt)("inlineCode",{parentName:"a"},"[PassengerBook]"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-travellerbookbvehiclesbcodevehiclebook--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TravellerBook.",(0,l.kt)("b",null,"vehicles"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/vehicle-book"},(0,l.kt)("inlineCode",{parentName:"a"},"[VehicleBook]"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-travellerbookbpetsbcodepet--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"TravellerBook.",(0,l.kt)("b",null,"pets"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/pet"},(0,l.kt)("inlineCode",{parentName:"a"},"[Pet]"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/ferry-order-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"FerryOrderPayload"))," ",(0,l.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);