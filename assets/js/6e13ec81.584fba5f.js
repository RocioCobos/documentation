"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},39714:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var a=n(87462),r=n(67294),o=n(3905);const i={id:"configuration-input",title:"ConfigurationInput",hide_table_of_contents:!1},l=void 0,s={unversionedId:"inputs/configuration-input",id:"inputs/configuration-input",title:"ConfigurationInput",description:"The information and credentials required to access the supplier\u2019s system.",source:"@site/api/inputs/configuration-input.mdx",sourceDirName:"inputs",slug:"/inputs/configuration-input",permalink:"/api/inputs/configuration-input",draft:!1,tags:[],version:"current",frontMatter:{id:"configuration-input",title:"ConfigurationInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CompanyCrmDataInput",permalink:"/api/inputs/company-crm-data-input"},next:{title:"ConnectionWhereInput",permalink:"/api/inputs/connection-where-input"}},u={},c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ConfigurationInput.<b>username</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-configurationinputbusernamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConfigurationInput.<b>password</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-configurationinputbpasswordbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConfigurationInput.<b>urls</b></code><Bullet /><code>UrlsInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-configurationinputburlsbcodeurlsinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConfigurationInput.<b>parameters</b></code><Bullet /><code>[ParameterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-configurationinputbparametersbcodeparameterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConfigurationInput.<b>markets</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-configurationinputbmarketsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConfigurationInput.<b>rateRules</b></code><Bullet /><code>[RateRulesType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-configurationinputbraterulesbcoderaterulestype--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[s,u]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},f={Bullet:c,SpecifiedBy:d,Badge:p,toc:g,Details:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The information and credentials required to access the supplier\u2019s system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input ConfigurationInput {\n  username: String\n  password: String\n  urls: UrlsInput!\n  parameters: [ParameterInput!]\n  markets: [String!]\n  rateRules: [RateRulesType!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-configurationinputbusernamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ConfigurationInput.",(0,o.kt)("b",null,"username"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"User name for the connection.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-configurationinputbpasswordbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ConfigurationInput.",(0,o.kt)("b",null,"password"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Password for the connection")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-configurationinputburlsbcodeurlsinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ConfigurationInput.",(0,o.kt)("b",null,"urls"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/urls-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UrlsInput!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"URL or endpoint for the connection.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-configurationinputbparametersbcodeparameterinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ConfigurationInput.",(0,o.kt)("b",null,"parameters"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/parameter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[ParameterInput!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"List of parameters with additional required information.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-configurationinputbmarketsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ConfigurationInput.",(0,o.kt)("b",null,"markets"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Source Markets allowed for the Access")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-configurationinputbraterulesbcoderaterulestype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ConfigurationInput.",(0,o.kt)("b",null,"rateRules"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/rate-rules-type"},(0,o.kt)("inlineCode",{parentName:"a"},"[RateRulesType!]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"RateRules allowed for the access.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/hotel-xaccess-input"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelXAccessInput"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);