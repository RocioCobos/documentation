"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94428],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,d=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,b=p["".concat(l,".").concat(m)]||p[m]||g[m]||d;return t?n.createElement(b,r(r({ref:a},c),{},{components:t})):n.createElement(b,r({ref:a},c))}));function b(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var d=t.length,r=new Array(d);r[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var s=2;s<d;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36675:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>g,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=t(87462),o=t(67294),d=t(3905);const r={id:"organization",title:"Organization",hide_table_of_contents:!1},i=void 0,l={unversionedId:"objects/organization",id:"objects/organization",title:"Organization",description:"Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.",source:"@site/api/objects/organization.mdx",sourceDirName:"objects",slug:"/objects/organization",permalink:"/api/objects/organization",draft:!1,tags:[],version:"current",frontMatter:{id:"organization",title:"Organization",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OrganizationMembers",permalink:"/api/objects/organization-members"},next:{title:"OrganizationsConnection",permalink:"/api/objects/organizations-connection"}},s={},c=()=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(o.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,d.kt)(o.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Organization.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Organization.<b>organizationData</b></code><Bullet /><code>OrganizationData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-organizationborganizationdatabcodeorganizationdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Organization.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-organizationbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Organization.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Organization.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-organizationbupdatedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:a,dataClose:t,children:r,startOpen:i=!1}=e;const[l,s]=(0,o.useState)(i);return(0,d.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?a:t),l&&r)},k={Bullet:c,SpecifiedBy:p,Badge:g,toc:m,Details:b},y="wrapper";function u(e){let{components:a,...t}=e;return(0,d.kt)(y,(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type Organization implements Node {\n  code: ID!\n  organizationData: OrganizationData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-organizationbcodebcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Organization.",(0,d.kt)("b",null,"code"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-organizationborganizationdatabcodeorganizationdata-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Organization.",(0,d.kt)("b",null,"organizationData"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/organization-data"},(0,d.kt)("inlineCode",{parentName:"a"},"OrganizationData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-organizationbadvisemessagebcodeadvisemessage--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Organization.",(0,d.kt)("b",null,"adviseMessage"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-organizationadvisemessageblevelbcodeadvisemessagelevel--"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Organization.adviseMessage.",(0,d.kt)("b",null,"level"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,d.kt)("h4",{id:"code-style-fontweight-normal-organizationbcreatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Organization.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Date created")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-organizationbupdatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Organization.",(0,d.kt)("b",null,"updatedAt"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Date updated")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"node-"},(0,d.kt)("a",{parentName:"h4",href:"/api/interfaces/node"},(0,d.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/objects/access-data"},(0,d.kt)("inlineCode",{parentName:"a"},"AccessData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/admin-mutation"},(0,d.kt)("inlineCode",{parentName:"a"},"AdminMutation"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/audit-rule-data"},(0,d.kt)("inlineCode",{parentName:"a"},"AuditRuleData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/client-data"},(0,d.kt)("inlineCode",{parentName:"a"},"ClientData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/domain-data"},(0,d.kt)("inlineCode",{parentName:"a"},"DomainData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/hub-user-data"},(0,d.kt)("inlineCode",{parentName:"a"},"HubUserData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/organization-data"},(0,d.kt)("inlineCode",{parentName:"a"},"OrganizationData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/organization-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"OrganizationEdge"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/organization-member-role"},(0,d.kt)("inlineCode",{parentName:"a"},"OrganizationMemberRole"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/point-of-sale-data"},(0,d.kt)("inlineCode",{parentName:"a"},"PointOfSaleData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/profile"},(0,d.kt)("inlineCode",{parentName:"a"},"Profile"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/profile-data"},(0,d.kt)("inlineCode",{parentName:"a"},"ProfileData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/recommendation-data"},(0,d.kt)("inlineCode",{parentName:"a"},"RecommendationData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/social-mutation"},(0,d.kt)("inlineCode",{parentName:"a"},"SocialMutation"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/speed-organization"},(0,d.kt)("inlineCode",{parentName:"a"},"SpeedOrganization"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/stats-aggregation-data"},(0,d.kt)("inlineCode",{parentName:"a"},"StatsAggregationData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/supplier-data"},(0,d.kt)("inlineCode",{parentName:"a"},"SupplierData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/system-data"},(0,d.kt)("inlineCode",{parentName:"a"},"SystemData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-hotel-stats-aggregation-data"},(0,d.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelStatsAggregationData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-organization"},(0,d.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationOrganization"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-stats-aggregation-data"},(0,d.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsAggregationData"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-stats-hotel-blacklist"},(0,d.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationStatsHotelBlacklist"))," ",(0,d.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);