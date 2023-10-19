"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,k=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91740:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>c,Details:()=>k,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>b});var r=n(87462),a=n(67294),o=n(3905);const l={id:"traveller-book-input",title:"TravellerBookInput",hide_table_of_contents:!1},i=void 0,p={unversionedId:"inputs/traveller-book-input",id:"inputs/traveller-book-input",title:"TravellerBookInput",description:"No description",source:"@site/api/inputs/traveller-book-input.mdx",sourceDirName:"inputs",slug:"/inputs/traveller-book-input",permalink:"/api/inputs/traveller-book-input",draft:!1,tags:[],version:"current",frontMatter:{id:"traveller-book-input",title:"TravellerBookInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrailerInput",permalink:"/api/inputs/trailer-input"},next:{title:"TravellerInput",permalink:"/api/inputs/traveller-input"}},s={},c=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TravellerBookInput.<b>passengers</b></code><Bullet /><code>[PassengerBookInput]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-travellerbookinputbpassengersbcodepassengerbookinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TravellerBookInput.<b>vehicles</b></code><Bullet /><code>[VehicleBookInput]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-travellerbookinputbvehiclesbcodevehiclebookinput--",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[p,s]=(0,a.useState)(i);return(0,o.kt)("details",(0,r.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&l)},m={Bullet:c,SpecifiedBy:u,Badge:d,toc:b,Details:k},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input TravellerBookInput {\n  passengers: [PassengerBookInput]\n  vehicles: [VehicleBookInput]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-travellerbookinputbpassengersbcodepassengerbookinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TravellerBookInput.",(0,o.kt)("b",null,"passengers"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/passenger-book-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[PassengerBookInput]"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-travellerbookinputbvehiclesbcodevehiclebookinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TravellerBookInput.",(0,o.kt)("b",null,"vehicles"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/vehicle-book-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[VehicleBookInput]"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/ferry-book-input"},(0,o.kt)("inlineCode",{parentName:"a"},"FerryBookInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);