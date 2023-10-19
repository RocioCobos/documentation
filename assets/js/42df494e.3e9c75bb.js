"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18063],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return a?n.createElement(m,d(d({ref:t},s),{},{components:a})):n.createElement(m,d({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,d=new Array(r);d[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,d[1]=l;for(var c=2;c<r;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},84304:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>i,toc:()=>u});var n=a(87462),o=a(67294),r=a(3905);const d={id:"provider-data",title:"ProviderData",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/provider-data",id:"objects/provider-data",title:"ProviderData",description:"Extended Provider information",source:"@site/api/objects/provider-data.mdx",sourceDirName:"objects",slug:"/objects/provider-data",permalink:"/api/objects/provider-data",draft:!1,tags:[],version:"current",frontMatter:{id:"provider-data",title:"ProviderData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Property",permalink:"/api/objects/property"},next:{title:"Provider",permalink:"/api/objects/provider"}},c={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProviderData.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-providerdatabidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProviderData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-providerdatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProviderData.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-providerdatabnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProviderData.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-providerdatabisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProviderData.<b>isPublic</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-providerdatabispublicbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProviderData.<b>audits</b></code><Bullet /><code>EntityAuditConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-providerdatabauditsbcodeentityauditconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProviderData.audits.<b>orderBy</b></code><Bullet /><code>EntityAuditOrderByEnum</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-providerdataauditsborderbybcodeentityauditorderbyenum-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>ProviderData.<b>connectionType</b></code><Bullet /><code>ProviderConnectionType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-providerdatabconnectiontypebcodeproviderconnectiontype--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[i,c]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&d)},y={Bullet:s,SpecifiedBy:p,Badge:b,toc:u,Details:m},g="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Extended Provider information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProviderData {\n  id: ID!\n  code: ID!\n  name: String!\n  isActive: Boolean!\n  isPublic: Boolean @deprecated\n  audits(\n    where: EntityAuditWhereInput\n    orderBy: EntityAuditOrderByEnum\n  ): EntityAuditConnection!\n  connectionType: ProviderConnectionType!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-providerdatabidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProviderData.",(0,r.kt)("b",null,"id"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Provider unique ID. Format: integer.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-providerdatabcodebcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProviderData.",(0,r.kt)("b",null,"code"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Provider unique code")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-providerdatabnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProviderData.",(0,r.kt)("b",null,"name"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Provider name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-providerdatabisactivebcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProviderData.",(0,r.kt)("b",null,"isActive"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates whether a Provider is active.\nIf the Provider is deactivated, all its Suppliers will be deactivated")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-providerdatabispublicbcodeboolean--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProviderData.",(0,r.kt)("b",null,"isPublic"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"deprecated from 2019-01-01. Not used"))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-providerdatabauditsbcodeentityauditconnection--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProviderData.",(0,r.kt)("b",null,"audits"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/entity-audit-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityAuditConnection!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Audits it shows the provider's change history"),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-providerdataauditsbwherebcodeentityauditwhereinput-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProviderData.audits.",(0,r.kt)("b",null,"where"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/inputs/entity-audit-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityAuditWhereInput"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,r.kt)("h5",{id:"code-style-fontweight-normal-providerdataauditsborderbybcodeentityauditorderbyenum-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProviderData.audits.",(0,r.kt)("b",null,"orderBy"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/enums/entity-audit-order-by-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityAuditOrderByEnum"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-providerdatabconnectiontypebcodeproviderconnectiontype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProviderData.",(0,r.kt)("b",null,"connectionType"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/provider-connection-type"},(0,r.kt)("inlineCode",{parentName:"a"},"ProviderConnectionType!"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates connection type of Supplier")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/provider"},(0,r.kt)("inlineCode",{parentName:"a"},"Provider"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/supplier-data"},(0,r.kt)("inlineCode",{parentName:"a"},"SupplierData"))," ",(0,r.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);