"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),b=s,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},36346:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>b});var a=n(87462),s=n(67294),r=n(3905);const o={id:"settings-base-input",title:"SettingsBaseInput",hide_table_of_contents:!1},i=void 0,l={unversionedId:"inputs/settings-base-input",id:"inputs/settings-base-input",title:"SettingsBaseInput",description:"Contains the timeout and business rules of a supplier or an access.",source:"@site/api/inputs/settings-base-input.mdx",sourceDirName:"inputs",slug:"/inputs/settings-base-input",permalink:"/api/inputs/settings-base-input",draft:!1,tags:[],version:"current",frontMatter:{id:"settings-base-input",title:"SettingsBaseInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SetSupplierMappingInput",permalink:"/api/inputs/set-supplier-mapping-input"},next:{title:"SpeedAccessCollectionWhereInput",permalink:"/api/inputs/speed-access-collection-where-input"}},c={},u=()=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(s.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SettingsBaseInput.<b>timeout</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-settingsbaseinputbtimeoutbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SettingsBaseInput.<b>auditTransactions</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-settingsbaseinputbaudittransactionsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SettingsBaseInput.<b>businessRules</b></code><Bullet /><code>BusinessRulesInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-settingsbaseinputbbusinessrulesbcodebusinessrulesinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SettingsBaseInput.<b>currency</b></code><Bullet /><code>Currency</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-settingsbaseinputbcurrencybcodecurrency-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SettingsBaseInput.<b>commitRequired</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-settingsbaseinputbcommitrequiredbcodeboolean-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[l,c]=(0,s.useState)(i);return(0,r.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&o)},g={Bullet:u,SpecifiedBy:p,Badge:d,toc:b,Details:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contains the timeout and business rules of a supplier or an access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input SettingsBaseInput {\n  timeout: Int\n  auditTransactions: Boolean\n  businessRules: BusinessRulesInput\n  currency: Currency\n  commitRequired: Boolean\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-settingsbaseinputbtimeoutbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SettingsBaseInput.",(0,r.kt)("b",null,"timeout"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Milliseconds before the connection is closed.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-settingsbaseinputbaudittransactionsbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SettingsBaseInput.",(0,r.kt)("b",null,"auditTransactions"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Specifies if the exachanged transactions with the supplier have to be logged or not.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-settingsbaseinputbbusinessrulesbcodebusinessrulesinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SettingsBaseInput.",(0,r.kt)("b",null,"businessRules"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/business-rules-input"},(0,r.kt)("inlineCode",{parentName:"a"},"BusinessRulesInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Business rules")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-settingsbaseinputbcurrencybcodecurrency-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SettingsBaseInput.",(0,r.kt)("b",null,"currency"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/currency"},(0,r.kt)("inlineCode",{parentName:"a"},"Currency"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Currency in ISO 4217 standard")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-settingsbaseinputbcommitrequiredbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SettingsBaseInput.",(0,r.kt)("b",null,"commitRequired"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates if the book will be confirmed in 1 or 2 steps")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xaccess-input"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelXAccessInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xsupplier-input"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelXSupplierInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);