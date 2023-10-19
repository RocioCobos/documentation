"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var r=n.createContext({}),s=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(r.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,i=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=d,b=u["".concat(r,".").concat(m)]||u[m]||y[m]||i;return a?n.createElement(b,l(l({ref:t},c),{},{components:a})):n.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[u]="string"==typeof e?e:d,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8945:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var n=a(87462),d=a(67294),i=a(3905);const l={id:"entity-audit",title:"EntityAudit",hide_table_of_contents:!1},o=void 0,r={unversionedId:"objects/entity-audit",id:"objects/entity-audit",title:"EntityAudit",description:"No description",source:"@site/api/objects/entity-audit.mdx",sourceDirName:"objects",slug:"/objects/entity-audit",permalink:"/api/objects/entity-audit",draft:!1,tags:[],version:"current",frontMatter:{id:"entity-audit",title:"EntityAudit",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"EntityAuditEdge",permalink:"/api/objects/entity-audit-edge"},next:{title:"EntityConnection",permalink:"/api/objects/entity-connection"}},s={},c=()=>(0,i.kt)(d.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(d.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(d.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EntityAudit.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-entityauditbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EntityAudit.<b>entityAuditData</b></code><Bullet /><code>EntityAuditData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-entityauditbentityauditdatabcodeentityauditdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EntityAudit.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-entityauditbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EntityAudit.<b>createdAt</b></code><Bullet /><code>Time!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-entityauditbcreatedatbcodetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EntityAudit.<b>updatedAt</b></code><Bullet /><code>Time!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-entityauditbupdatedatbcodetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EntityAudit.<b>deletedAt</b></code><Bullet /><code>Time</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-entityauditbdeletedatbcodetime-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:o=!1}=e;const[r,s]=(0,d.useState)(o);return(0,i.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},r?t:a),r&&l)},g={Bullet:c,SpecifiedBy:u,Badge:y,toc:m,Details:b},p="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type EntityAudit {\n  code: ID!\n  entityAuditData: EntityAuditData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: Time!\n  updatedAt: Time!\n  deletedAt: Time\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-entityauditbcodebcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EntityAudit.",(0,i.kt)("b",null,"code"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-entityauditbentityauditdatabcodeentityauditdata-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EntityAudit.",(0,i.kt)("b",null,"entityAuditData"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/entity-audit-data"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityAuditData"))," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-entityauditbadvisemessagebcodeadvisemessage--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EntityAudit.",(0,i.kt)("b",null,"adviseMessage"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-entityauditadvisemessageblevelbcodeadvisemessagelevel--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EntityAudit.adviseMessage.",(0,i.kt)("b",null,"level"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,i.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,i.kt)("h4",{id:"code-style-fontweight-normal-entityauditbcreatedatbcodetime--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EntityAudit.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/time"},(0,i.kt)("inlineCode",{parentName:"a"},"Time!"))," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-entityauditbupdatedatbcodetime--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EntityAudit.",(0,i.kt)("b",null,"updatedAt"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/time"},(0,i.kt)("inlineCode",{parentName:"a"},"Time!"))," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-entityauditbdeletedatbcodetime-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EntityAudit.",(0,i.kt)("b",null,"deletedAt"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/time"},(0,i.kt)("inlineCode",{parentName:"a"},"Time"))," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/entity-audit-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityAuditEdge"))," ",(0,i.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);