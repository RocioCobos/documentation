"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=o.createContext({}),d=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(r.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),g=l,b=u["".concat(r,".").concat(g)]||u[g]||p[g]||a;return n?o.createElement(b,s(s({ref:t},c),{},{components:n})):o.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[u]="string"==typeof e?e:l,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37910:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>r,toc:()=>g});var o=n(87462),l=n(67294),a=n(3905);const s={id:"hotel-settings-input",title:"HotelSettingsInput",hide_table_of_contents:!1},i=void 0,r={unversionedId:"inputs/hotel-settings-input",id:"inputs/hotel-settings-input",title:"HotelSettingsInput",description:"Settings are the common configurations used to construct requests to the supplier/s. By default,",source:"@site/api/inputs/hotel-settings-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-settings-input",permalink:"/api/inputs/hotel-settings-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-settings-input",title:"HotelSettingsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelCriteriaSearchInput",permalink:"/api/inputs/hotel-criteria-search-input"},next:{title:"HotelXAccessInput",permalink:"/api/inputs/hotel-xaccess-input"}},d={},c=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>context</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelsettingsinputbcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>client</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelsettingsinputbclientbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>group</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelsettingsinputbgroupbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>timeout</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelsettingsinputbtimeoutbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>auditTransactions</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelsettingsinputbaudittransactionsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>businessRules</b></code><Bullet /><code>BusinessRulesInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelsettingsinputbbusinessrulesbcodebusinessrulesinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>suppliers</b></code><Bullet /><code>[HotelXSupplierInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelsettingsinputbsuppliersbcodehotelxsupplierinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>plugins</b></code><Bullet /><code>[PluginStepInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelsettingsinputbpluginsbcodepluginstepinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>testMode</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelsettingsinputbtestmodebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>clientTokens</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelsettingsinputbclienttokensbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelSettingsInput.<b>commitRequired</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-hotelsettingsinputbcommitrequiredbcodeboolean-",level:4}],b=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:i=!1}=e;const[r,d]=(0,l.useState)(i);return(0,a.kt)("details",(0,o.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},r?t:n),r&&s)},m={Bullet:c,SpecifiedBy:u,Badge:p,toc:g,Details:b},h="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default,\nwe apply the same configuration to all Hotel-X clients in our back system."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelSettingsInput {\n  context: String\n  client: ID\n  group: ID\n  timeout: Int\n  auditTransactions: Boolean\n  businessRules: BusinessRulesInput\n  suppliers: [HotelXSupplierInput!]\n  plugins: [PluginStepInput!]\n  testMode: Boolean\n  clientTokens: [String!]\n  commitRequired: Boolean\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbcontextbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"context"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Indicates the context of the I/O codes (hotel, board, room and rates)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbclientbcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"client"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Client name set in TGX, present only if the authorization header is of the JWT type. It is used to modify the user initially set in the preload.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbgroupbcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"group"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Group whose resources are to be used")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbtimeoutbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"timeout"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Timeout in milliseconds that will be applied to the connection with supplier/s. If more than one supplier is requested, timeout will be applied to all suppliers and cut the connection with those suppliers that exceed this timeout. Travelgate will not close the connection with the client if this timeout is exceeded.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbaudittransactionsbcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"auditTransactions"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Returns all the transactions exchanged with the supplier.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbbusinessrulesbcodebusinessrulesinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"businessRules"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/business-rules-input"},(0,a.kt)("inlineCode",{parentName:"a"},"BusinessRulesInput"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Business rules")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbsuppliersbcodehotelxsupplierinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"suppliers"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/hotel-xsupplier-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[HotelXSupplierInput!]"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Array of suppliers. Each one contains its own code, settings and accesses.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbpluginsbcodepluginstepinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"plugins"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/plugin-step-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[PluginStepInput!]"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Array of plugins to execute.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbtestmodebcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"testMode"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This flag is only allowed to be used for the access checked as 'TEST.' By default, it is set to 'LIVE.'")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbclienttokensbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"clientTokens"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Used to identify the origin of the request. This is solely used in plugins.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelsettingsinputbcommitrequiredbcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelSettingsInput.",(0,a.kt)("b",null,"commitRequired"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Indicates if the book will be confirmed in 1 or 2 steps. It only should be used in Book.")))}k.isMDXComponent=!0}}]);