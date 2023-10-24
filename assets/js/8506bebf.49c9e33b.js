"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),g=r,b=u["".concat(d,".").concat(g)]||u[g]||p[g]||l;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},30057:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var n=a(87462),r=a(67294),l=a(3905);const i={id:"audit-details",title:"AuditDetails",hide_table_of_contents:!1},o=void 0,d={unversionedId:"objects/audit-details",id:"objects/audit-details",title:"AuditDetails",description:"No description",source:"@site/api/objects/audit-details.mdx",sourceDirName:"objects",slug:"/objects/audit-details",permalink:"/api/objects/audit-details",draft:!1,tags:[],version:"current",frontMatter:{id:"audit-details",title:"AuditDetails",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AuditData",permalink:"/api/objects/audit-data"},next:{title:"AuditRuleConnection",permalink:"/api/objects/audit-rule-connection"}},s={},c=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AuditDetails.<b>field</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-auditdetailsbfieldbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditDetails.<b>current</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-auditdetailsbcurrentbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AuditDetails.<b>previous</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-auditdetailsbpreviousbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[d,s]=(0,r.useState)(o);return(0,l.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&i)},m={Bullet:c,SpecifiedBy:u,Badge:p,toc:g,Details:b},f="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type AuditDetails {\n  field: String!\n  current: String!\n  previous: String!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-auditdetailsbfieldbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditDetails.",(0,l.kt)("b",null,"field"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-auditdetailsbcurrentbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditDetails.",(0,l.kt)("b",null,"current"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-auditdetailsbpreviousbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AuditDetails.",(0,l.kt)("b",null,"previous"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/entity-audit-data"},(0,l.kt)("inlineCode",{parentName:"a"},"EntityAuditData"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);