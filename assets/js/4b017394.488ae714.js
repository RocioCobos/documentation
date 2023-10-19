"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:r,l[1]=d;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25956:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905);const l={id:"holder-input",title:"HolderInput",hide_table_of_contents:!1},d=void 0,i={unversionedId:"inputs/holder-input",id:"inputs/holder-input",title:"HolderInput",description:"Holder object that contains the occupant s (pax s) name and surname.",source:"@site/api/inputs/holder-input.mdx",sourceDirName:"inputs",slug:"/inputs/holder-input",permalink:"/api/inputs/holder-input",draft:!1,tags:[],version:"current",frontMatter:{id:"holder-input",title:"HolderInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"GroupContentWhereInput",permalink:"/api/inputs/group-content-where-input"},next:{title:"HotelAmendRoomInput",permalink:"/api/inputs/hotel-amend-room-input"}},p={},c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HolderInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-holderinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HolderInput.<b>surname</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-holderinputbsurnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HolderInput.<b>title</b></code><Bullet /><code>PersonalTitleType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-holderinputbtitlebcodepersonaltitletype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HolderInput.<b>contactInfo</b></code><Bullet /><code>ContactInfoInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-holderinputbcontactinfobcodecontactinfoinput-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:d=!1}=e;const[i,p]=(0,r.useState)(d);return(0,o.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},g={Bullet:c,SpecifiedBy:s,Badge:u,toc:m,Details:b},y="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Holder object that contains the occupant s (pax s) name and surname."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input HolderInput {\n  name: String!\n  surname: String!\n  title: PersonalTitleType\n  contactInfo: ContactInfoInput\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-holderinputbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HolderInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The card holder's name.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-holderinputbsurnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HolderInput.",(0,o.kt)("b",null,"surname"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The card holder's surname.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-holderinputbtitlebcodepersonaltitletype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HolderInput.",(0,o.kt)("b",null,"title"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/personal-title-type"},(0,o.kt)("inlineCode",{parentName:"a"},"PersonalTitleType"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Holder\u2019s title.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-holderinputbcontactinfobcodecontactinfoinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"HolderInput.",(0,o.kt)("b",null,"contactInfo"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/contact-info-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ContactInfoInput"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Holder's contact info.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/ferry-book-input"},(0,o.kt)("inlineCode",{parentName:"a"},"FerryBookInput"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/hotel-book-input"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelBookInput"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/payment-card-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentCardInput"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/payment-xstored-card-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCardFilterInput"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/payment-xstored-card-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCardInput"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);