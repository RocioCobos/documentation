"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61576],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),g=s(a),p=o,b=g["".concat(l,".").concat(p)]||g[p]||m[p]||r;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[g]="string"==typeof e?e:o,i[1]=d;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},94444:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=a(67294),r=a(3905);const i={id:"organizations",title:"Organizations",hide_table_of_contents:!1},d=void 0,l={unversionedId:"objects/organizations",id:"objects/organizations",title:"Organizations",description:"No description",source:"@site/api/objects/organizations.mdx",sourceDirName:"objects",slug:"/objects/organizations",permalink:"/api/objects/organizations",draft:!1,tags:[],version:"current",frontMatter:{id:"organizations",title:"Organizations",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OrganizationsEdge",permalink:"/api/objects/organizations-edge"},next:{title:"PackageCancelPenalty",permalink:"/api/objects/package-cancel-penalty"}},s={},c=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Organizations.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Organizations.<b>organizationsData</b></code><Bullet /><code>OrganizationsData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-organizationsborganizationsdatabcodeorganizationsdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Organizations.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-organizationsbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Organizations.<b>createdAt</b></code><Bullet /><code>Time!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsbcreatedatbcodetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Organizations.<b>updatedAt</b></code><Bullet /><code>Time!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsbupdatedatbcodetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Organizations.<b>deletedAt</b></code><Bullet /><code>Time</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationsbdeletedatbcodetime-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:d=!1}=e;const[l,s]=(0,o.useState)(d);return(0,r.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&i)},u={Bullet:c,SpecifiedBy:g,Badge:m,toc:p,Details:b},k="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Organizations {\n  code: ID!\n  organizationsData: OrganizationsData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: Time!\n  updatedAt: Time!\n  deletedAt: Time\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsbcodebcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Organizations.",(0,r.kt)("b",null,"code"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Organization unique code")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsborganizationsdatabcodeorganizationsdata-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Organizations.",(0,r.kt)("b",null,"organizationsData"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/organizations-data"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationsData"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Extended Organization information")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsbadvisemessagebcodeadvisemessage--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Organizations.",(0,r.kt)("b",null,"adviseMessage"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,r.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-organizationsadvisemessageblevelbcodeadvisemessagelevel--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Organizations.adviseMessage.",(0,r.kt)("b",null,"level"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,r.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsbcreatedatbcodetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Organizations.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/time"},(0,r.kt)("inlineCode",{parentName:"a"},"Time!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Organization creation date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsbupdatedatbcodetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Organizations.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/time"},(0,r.kt)("inlineCode",{parentName:"a"},"Time!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Organization last update date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-organizationsbdeletedatbcodetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Organizations.",(0,r.kt)("b",null,"deletedAt"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/time"},(0,r.kt)("inlineCode",{parentName:"a"},"Time"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Organization removal date")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/admin-mutation"},(0,r.kt)("inlineCode",{parentName:"a"},"AdminMutation"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,r.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/connection-data"},(0,r.kt)("inlineCode",{parentName:"a"},"ConnectionData"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/organizations-data"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationsData"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/organizations-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationsEdge"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);