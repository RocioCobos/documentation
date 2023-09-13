"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=l,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return a?n.createElement(b,r(r({ref:t},c),{},{components:a})):n.createElement(b,r({ref:t},c))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16845:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(87462),l=a(67294),s=a(3905);const r={id:"stats-filter-input",title:"StatsFilterInput",hide_table_of_contents:!1},o=void 0,i={unversionedId:"inputs/stats-filter-input",id:"inputs/stats-filter-input",title:"StatsFilterInput",description:"Filters needed to do a search.",source:"@site/api/inputs/stats-filter-input.mdx",sourceDirName:"inputs",slug:"/inputs/stats-filter-input",permalink:"/api/inputs/stats-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"stats-filter-input",title:"StatsFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StatsAggregationConnectionWhereInput",permalink:"/api/inputs/stats-aggregation-connection-where-input"},next:{title:"StatusFilterInput",permalink:"/api/inputs/status-filter-input"}},d={},c=()=>(0,s.kt)(l.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(l.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(l.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>owners</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsfilterinputbownersbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>groups</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsfilterinputbgroupsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>accesses</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsfilterinputbaccessesbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>suppliers</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsfilterinputbsuppliersbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>clients</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsfilterinputbclientsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>mode</b></code><Bullet /><code>ModeType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-statsfilterinputbmodebcodemodetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>serviceApis</b></code><Bullet /><code>[ServiceApiType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-statsfilterinputbserviceapisbcodeserviceapitype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>operation</b></code><Bullet /><code>[ServiceOperationType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-statsfilterinputboperationbcodeserviceoperationtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>serviceOperations</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsfilterinputbserviceoperationsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>trafficType</b></code><Bullet /><code>[TrafficType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-statsfilterinputbtraffictypebcodetraffictype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>from</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsfilterinputbfrombcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>to</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsfilterinputbtobcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>timeRange</b></code><Bullet /><code>TimeRangeInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-statsfilterinputbtimerangebcodetimerangeinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsFilterInput.<b>retrieveAssets</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-statsfilterinputbretrieveassetsbcodeboolean-",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:o=!1}=e;const[i,d]=(0,l.useState)(o);return(0,s.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},g={Bullet:c,SpecifiedBy:p,Badge:u,toc:m,Details:b},f="wrapper";function y(e){let{components:t,...a}=e;return(0,s.kt)(f,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Filters needed to do a search.\nUsers (List of users), Suppliers (List of suppliers), ServiceApis (List of service apis), From (Start date of search - YYYY-MM-DD HH:mm:ss), To (End date of search - YYYY-MM-DD HH:mm:ss)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input StatsFilterInput {\n  owners: [ID!]\n  groups: [ID!]\n  accesses: [ID!]\n  suppliers: [ID!]\n  clients: [ID!]\n  mode: ModeType!\n  serviceApis: [ServiceApiType!]\n  operation: [ServiceOperationType!]\n  serviceOperations: [ID!]\n  trafficType: [TrafficType!]\n  from: DateTime\n  to: DateTime\n  timeRange: TimeRangeInput\n  retrieveAssets: Boolean\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbownersbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"owners"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"List of owners")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbgroupsbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"groups"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Groups codes list")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbaccessesbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"accesses"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"List of accesses")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbsuppliersbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"suppliers"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"List of suppliers")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbclientsbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"clients"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"List of clients")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbmodebcodemodetype--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"mode"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/enums/mode-type"},(0,s.kt)("inlineCode",{parentName:"a"},"ModeType!"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},'Buyer or Seller\n@deprecated(reason: "deprecated from 2019-04-11. Superfluous field.")')),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbserviceapisbcodeserviceapitype--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"serviceApis"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/enums/service-api-type"},(0,s.kt)("inlineCode",{parentName:"a"},"[ServiceApiType!]"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"List of services apis")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputboperationbcodeserviceoperationtype--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"operation"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/enums/service-operation-type"},(0,s.kt)("inlineCode",{parentName:"a"},"[ServiceOperationType!]"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"List of services operations")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbserviceoperationsbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"serviceOperations"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbtraffictypebcodetraffictype--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"trafficType"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/enums/traffic-type"},(0,s.kt)("inlineCode",{parentName:"a"},"[TrafficType!]"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"List of traffic types")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbfrombcodedatetime-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"from"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,s.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},'From date of search\n@deprecated(reason: "deprecated from 2019-07-19. Added new field timeRange.")')),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbtobcodedatetime-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"to"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,s.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},'To date of search\n@deprecated(reason: "deprecated from 2019-07-19. Added new field timeRange.")')),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbtimerangebcodetimerangeinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"timeRange"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/inputs/time-range-input"},(0,s.kt)("inlineCode",{parentName:"a"},"TimeRangeInput"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Input time")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-statsfilterinputbretrieveassetsbcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StatsFilterInput.",(0,s.kt)("b",null,"retrieveAssets"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If true assets will be retrieved.")))}y.isMDXComponent=!0}}]);