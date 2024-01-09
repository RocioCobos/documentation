"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10929],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),s=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return l.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},b=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(a),b=n,g=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?l.createElement(g,r(r({ref:t},c),{},{components:a})):l.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=b;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:n,r[1]=d;for(var s=2;s<o;s++)r[s]=a[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}b.displayName="MDXCreateElement"},26740:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>b});var l=a(87462),n=a(67294),o=a(3905);const r={id:"supplier-data",title:"SupplierData",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/supplier-data",id:"objects/supplier-data",title:"SupplierData",description:"Extended Supplier information",source:"@site/api/objects/supplier-data.mdx",sourceDirName:"objects",slug:"/objects/supplier-data",permalink:"/api/objects/supplier-data",draft:!1,tags:[],version:"current",frontMatter:{id:"supplier-data",title:"SupplierData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupplierConnection",permalink:"/api/objects/supplier-connection"},next:{title:"SupplierEdge",permalink:"/api/objects/supplier-edge"}},s={},c=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatabidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatabnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatabisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>provider</b></code><Bullet /><code>ProviderData!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabproviderbcodeproviderdata--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>serviceApi</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatabserviceapibcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>api</b></code><Bullet /><code>APIName!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierdatabapibcodeapiname--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>owner</b></code><Bullet /><code>Organization</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabownerbcodeorganization-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>groupContent</b></code><Bullet /><code>GroupContent</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabgroupcontentbcodegroupcontent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>supplierGroup</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatabsuppliergroupbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>context</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatabcontextbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>sharedDefault</b></code><Bullet /><code>Access</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabshareddefaultbcodeaccess-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>groups</b></code><Bullet /><code>GroupConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabgroupsbcodegroupconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.groups.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatagroupsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.groups.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatagroupsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.groups.<b>after</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatagroupsbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>accesses</b></code><Bullet /><code>AccessConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabaccessesbcodeaccessconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.accesses.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdataaccessesblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.accesses.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdataaccessesbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.accesses.<b>after</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdataaccessesbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.accesses.<b>filter</b></code><Bullet /><code>AccessFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-supplierdataaccessesbfilterbcodeaccessfilter-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>clients</b></code><Bullet /><code>ClientConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabclientsbcodeclientconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.clients.<b>last</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdataclientsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.clients.<b>before</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdataclientsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.clients.<b>after</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdataclientsbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.clients.<b>filter</b></code><Bullet /><code>ClientFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-supplierdataclientsbfilterbcodeclientfilter-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>system</b></code><Bullet /><code>System!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabsystembcodesystem--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>audits</b></code><Bullet /><code>EntityAuditConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabauditsbcodeentityauditconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.audits.<b>orderBy</b></code><Bullet /><code>EntityAuditOrderByEnum</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierdataauditsborderbybcodeentityauditorderbyenum-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>serviceIntegrationData</b></code><Bullet /><code>ServiceIntegrationData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplierdatabserviceintegrationdatabcodeserviceintegrationdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierData.<b>isPublic</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierdatabispublicbcodeboolean--",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[i,s]=(0,n.useState)(d);return(0,o.kt)("details",(0,l.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},m={Bullet:c,SpecifiedBy:p,Badge:u,toc:b,Details:g},k="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Extended Supplier information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierData {\n  id: ID!\n  code: ID!\n  name: String!\n  isActive: Boolean!\n  provider: ProviderData!\n  serviceApi: Int!\n  api: APIName!\n  owner: Organization\n  groupContent: GroupContent\n  supplierGroup: ID\n  context: String\n  sharedDefault: Access\n  groups(first: Int, last: Int, before: String, after: String): GroupConnection\n  accesses(\n    first: Int\n    last: Int\n    before: String\n    after: String\n    filter: AccessFilter\n  ): AccessConnection\n  clients(\n    first: Int\n    last: Int\n    before: String\n    after: String\n    filter: ClientFilter\n  ): ClientConnection\n  system: System!\n  audits(\n    where: EntityAuditWhereInput\n    orderBy: EntityAuditOrderByEnum\n  ): EntityAuditConnection!\n  serviceIntegrationData: ServiceIntegrationData\n  isPublic: Boolean!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"id"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Supplier unique ID. Format: integer.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabcodebcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"code"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Supplier unique code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"name"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Supplier name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabisactivebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"isActive"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates whether a Supplier is active.\nThis is a calculated field, a specific supplier can be activated or deactivated,\nbut if its provider is deactivated, the value will be = false")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabproviderbcodeproviderdata--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"provider"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/provider-data"},(0,o.kt)("inlineCode",{parentName:"a"},"ProviderData!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Instance to which this supllier is connected")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabserviceapibcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"serviceApi"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ServiceAPI indicates the type of the connection"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"hotel"),(0,o.kt)("li",{parentName:"ol"},"transportation"),(0,o.kt)("li",{parentName:"ol"},"car"),(0,o.kt)("li",{parentName:"ol"},"transfers"),(0,o.kt)("li",{parentName:"ol"},"activities"),(0,o.kt)("li",{parentName:"ol"},"virtualaccount"),(0,o.kt)("li",{parentName:"ol"},"payment"),(0,o.kt)("li",{parentName:"ol"},"package"))),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabapibcodeapiname--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"api"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/apiname"},(0,o.kt)("inlineCode",{parentName:"a"},"APIName!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"API name for service API")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabownerbcodeorganization-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"owner"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/organization"},(0,o.kt)("inlineCode",{parentName:"a"},"Organization"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Organization that owns the Supplier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabgroupcontentbcodegroupcontent-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"groupContent"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/group-content"},(0,o.kt)("inlineCode",{parentName:"a"},"GroupContent"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Grouping of static content related to this Supplier.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabsuppliergroupbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"supplierGroup"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is a calculated field that responds to groupContent ",">"," code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabcontextbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"context"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is a calculated field that responds to groupContent ",">"," groupContentData ",">"," context ",">"," code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabshareddefaultbcodeaccess-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"sharedDefault"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/access"},(0,o.kt)("inlineCode",{parentName:"a"},"Access"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates if this supplier normally have a shared default access, means that the content is managed in one only site and this is because improve de efficiency")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabgroupsbcodegroupconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"groups"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/group-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"GroupConnection"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the groups where the Supplier belongs. A supplier can be assigned to several groups"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierdatagroupsbfirstbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.groups.",(0,o.kt)("b",null,"first"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdatagroupsblastbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.groups.",(0,o.kt)("b",null,"last"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdatagroupsbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.groups.",(0,o.kt)("b",null,"before"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdatagroupsbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.groups.",(0,o.kt)("b",null,"after"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabaccessesbcodeaccessconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"accesses"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/access-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"AccessConnection"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Accesses of this Supplier"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierdataaccessesbfirstbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.accesses.",(0,o.kt)("b",null,"first"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdataaccessesblastbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.accesses.",(0,o.kt)("b",null,"last"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdataaccessesbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.accesses.",(0,o.kt)("b",null,"before"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdataaccessesbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.accesses.",(0,o.kt)("b",null,"after"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdataaccessesbfilterbcodeaccessfilter-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.accesses.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/access-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"AccessFilter"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabclientsbcodeclientconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"clients"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/client-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"ClientConnection"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Clients that belongs to some of the groups of the Supplier\nUsed to find out which Clients are likely to have connected with this Supplier on some occasion."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierdataclientsbfirstbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.clients.",(0,o.kt)("b",null,"first"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdataclientsblastbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.clients.",(0,o.kt)("b",null,"last"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdataclientsbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.clients.",(0,o.kt)("b",null,"before"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdataclientsbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.clients.",(0,o.kt)("b",null,"after"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdataclientsbfilterbcodeclientfilter-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.clients.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/client-filter"},(0,o.kt)("inlineCode",{parentName:"a"},"ClientFilter"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabsystembcodesystem--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"system"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/system"},(0,o.kt)("inlineCode",{parentName:"a"},"System!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabauditsbcodeentityauditconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"audits"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/entity-audit-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"EntityAuditConnection!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Audits it shows the supplier's change history"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierdataauditsbwherebcodeentityauditwhereinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.audits.",(0,o.kt)("b",null,"where"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/entity-audit-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"EntityAuditWhereInput"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-supplierdataauditsborderbybcodeentityauditorderbyenum-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.audits.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/enums/entity-audit-order-by-enum"},(0,o.kt)("inlineCode",{parentName:"a"},"EntityAuditOrderByEnum"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabserviceintegrationdatabcodeserviceintegrationdata-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"serviceIntegrationData"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/service-integration-data"},(0,o.kt)("inlineCode",{parentName:"a"},"ServiceIntegrationData"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Service Integration Data")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierdatabispublicbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierData.",(0,o.kt)("b",null,"isPublic"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/generated-payment-info"},(0,o.kt)("inlineCode",{parentName:"a"},"GeneratedPaymentInfo"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/supplier"},(0,o.kt)("inlineCode",{parentName:"a"},"Supplier"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/unions/entity-data"},(0,o.kt)("inlineCode",{parentName:"a"},"EntityData"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);