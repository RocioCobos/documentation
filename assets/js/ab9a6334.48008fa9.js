"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,u=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return n?o.createElement(u,c(c({ref:t},s),{},{components:n})):o.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:i,c[1]=r;for(var d=2;d<a;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65117:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var o=n(87462),i=n(67294),a=n(3905);const c={id:"traffic-optimization-connection-connection-where-input",title:"TrafficOptimizationConnectionConnectionWhereInput",hide_table_of_contents:!1},r=void 0,l={unversionedId:"inputs/traffic-optimization-connection-connection-where-input",id:"inputs/traffic-optimization-connection-connection-where-input",title:"TrafficOptimizationConnectionConnectionWhereInput",description:"No description",source:"@site/api/inputs/traffic-optimization-connection-connection-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/traffic-optimization-connection-connection-where-input",permalink:"/api/inputs/traffic-optimization-connection-connection-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-connection-connection-where-input",title:"TrafficOptimizationConnectionConnectionWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationAllAccessesRecommendationsWhereInput",permalink:"/api/inputs/traffic-optimization-all-accesses-recommendations-where-input"},next:{title:"TrafficOptimizationConnectionWhereInput",permalink:"/api/inputs/traffic-optimization-connection-where-input"}},d={},s=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnectionWhereInput.<b>code</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnectionWhereInput.<b>organizationBuyerCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputborganizationbuyercodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnectionWhereInput.<b>organizationSellerCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputborganizationsellercodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnectionWhereInput.<b>mode</b></code><Bullet /><code>ModeType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbmodebcodemodetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnectionWhereInput.<b>criterias</b></code><Bullet /><code>[TrafficOptimizationCriteriaType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbcriteriasbcodetrafficoptimizationcriteriatype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnectionWhereInput.<b>isActiveConnection</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbisactiveconnectionbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnectionWhereInput.<b>isActiveAccess</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbisactiveaccessbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationConnectionConnectionWhereInput.<b>accessCode_in</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbaccesscode_inbcodeid--",level:4}],u=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:r=!1}=e;const[l,d]=(0,i.useState)(r);return(0,a.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&c)},b={Bullet:s,SpecifiedBy:p,Badge:f,toc:m,Details:u},g="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input TrafficOptimizationConnectionConnectionWhereInput {\n  code: [ID!]\n  organizationBuyerCode: ID\n  organizationSellerCode: ID\n  mode: ModeType!\n  criterias: [TrafficOptimizationCriteriaType!]\n  isActiveConnection: Boolean\n  isActiveAccess: Boolean\n  accessCode_in: [ID!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbcodebcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnectionWhereInput.",(0,a.kt)("b",null,"code"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputborganizationbuyercodebcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnectionWhereInput.",(0,a.kt)("b",null,"organizationBuyerCode"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputborganizationsellercodebcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnectionWhereInput.",(0,a.kt)("b",null,"organizationSellerCode"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbmodebcodemodetype--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnectionWhereInput.",(0,a.kt)("b",null,"mode"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/mode-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ModeType!"))," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbcriteriasbcodetrafficoptimizationcriteriatype--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnectionWhereInput.",(0,a.kt)("b",null,"criterias"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/traffic-optimization-criteria-type"},(0,a.kt)("inlineCode",{parentName:"a"},"[TrafficOptimizationCriteriaType!]"))," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbisactiveconnectionbcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnectionWhereInput.",(0,a.kt)("b",null,"isActiveConnection"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbisactiveaccessbcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnectionWhereInput.",(0,a.kt)("b",null,"isActiveAccess"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationconnectionconnectionwhereinputbaccesscode_inbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationConnectionConnectionWhereInput.",(0,a.kt)("b",null,"accessCode_in"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}h.isMDXComponent=!0}}]);