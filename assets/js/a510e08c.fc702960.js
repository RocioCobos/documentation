"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9513],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=n.createContext({}),d=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(r.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,c=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(a),b=s,g=p["".concat(r,".").concat(b)]||p[b]||u[b]||c;return a?n.createElement(g,l(l({ref:t},i),{},{components:a})):n.createElement(g,l({ref:t},i))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var c=a.length,l=new Array(c);l[0]=b;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[p]="string"==typeof e?e:s,l[1]=o;for(var d=2;d<c;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},67348:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>b});var n=a(87462),s=a(67294),c=a(3905);const l={id:"access-input",title:"AccessInput",hide_table_of_contents:!1},o=void 0,r={unversionedId:"inputs/access-input",id:"inputs/access-input",title:"AccessInput",description:"Access input",source:"@site/api/inputs/access-input.mdx",sourceDirName:"inputs",slug:"/inputs/access-input",permalink:"/api/inputs/access-input",draft:!1,tags:[],version:"current",frontMatter:{id:"access-input",title:"AccessInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccessFilter",permalink:"/api/inputs/access-filter"},next:{title:"AccessUpdateInput",permalink:"/api/inputs/access-update-input"}},d={},i=()=>(0,c.kt)(s.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(s.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(s.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>isActive</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbisactivebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>code</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbcodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>supplier</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbsupplierbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>isTest</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbistestbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>user</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbuserbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>password</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbpasswordbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>urls</b></code><Bullet /><code>UrlsInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-accessinputburlsbcodeurlsinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>parameters</b></code><Bullet /><code>[ParameterInput]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-accessinputbparametersbcodeparameterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>descriptiveInfoLimit</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbdescriptiveinfolimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>markets</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbmarketsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>rateRules</b></code><Bullet /><code>[RateRulesType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accessinputbraterulesbcoderaterulestype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>shared</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbsharedbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>group</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbgroupbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>updateDescriptiveInfo</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbupdatedescriptiveinfobcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>updateList</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbupdatelistbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>updateDateRange</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbupdatedaterangebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>owner</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbownerbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>isSchedulerActive</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbisscheduleractivebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccessInput.<b>master</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accessinputbmasterbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:o=!1}=e;const[r,d]=(0,s.useState)(o);return(0,c.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&l)},m={Bullet:i,SpecifiedBy:p,Badge:u,toc:b,Details:g},k="wrapper";function h(e){let{components:t,...a}=e;return(0,c.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Access input"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"input AccessInput {\n  name: String\n  isActive: Boolean\n  code: ID\n  supplier: String\n  isTest: Boolean\n  user: String\n  password: String\n  urls: UrlsInput\n  parameters: [ParameterInput]\n  descriptiveInfoLimit: Int\n  markets: [String!]\n  rateRules: [RateRulesType!]\n  shared: String\n  group: ID\n  updateDescriptiveInfo: Int\n  updateList: Int\n  updateDateRange: String\n  owner: ID\n  isSchedulerActive: Boolean\n  master: ID\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbnamebcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"name"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Access descriptive unique name")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbisactivebcodeboolean-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"isActive"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Indicates if Access is active")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbcodebcodeid-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"code"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Access code.")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbsupplierbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"supplier"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Supplier for this Access")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbistestbcodeboolean-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"isTest"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Indicates if Access can be used for testing or not")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbuserbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"user"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"User code to connect to supplier")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbpasswordbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"password"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Password for the connection")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputburlsbcodeurlsinput-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"urls"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/inputs/urls-input"},(0,c.kt)("inlineCode",{parentName:"a"},"UrlsInput"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Specific URLs")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbparametersbcodeparameterinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"parameters"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/inputs/parameter-input"},(0,c.kt)("inlineCode",{parentName:"a"},"[ParameterInput]"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"List of parameters for additional information")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbdescriptiveinfolimitbcodeint-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"descriptiveInfoLimit"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Limit on DescriptiveInfo; 0 denotates no limit")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbmarketsbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"markets"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Markets allowed for the Access")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbraterulesbcoderaterulestype--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"rateRules"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/rate-rules-type"},(0,c.kt)("inlineCode",{parentName:"a"},"[RateRulesType!]"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Business rule types for the Access")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbsharedbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"shared"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Parent Access if Shared Access.")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbgroupbcodeid-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"group"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Default group where the access will be visible.")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbupdatedescriptiveinfobcodeint-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"updateDescriptiveInfo"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Refresh time to update Despriptive Info")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbupdatelistbcodeint-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"updateList"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Refresh time to update other batch lists")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbupdatedaterangebcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"updateDateRange"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Range on update date")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbownerbcodeid-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"owner"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Access owner")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbisscheduleractivebcodeboolean-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"isSchedulerActive"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"True if scheduler is active")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accessinputbmasterbcodeid-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccessInput.",(0,c.kt)("b",null,"master"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Set master Access if it it s not a master Access. Use Access-",">","code")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/inputs/activation-connect-input"},(0,c.kt)("inlineCode",{parentName:"a"},"ActivationConnectInput"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);