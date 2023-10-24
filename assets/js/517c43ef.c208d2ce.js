"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16025],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=l(a),m=o,b=s["".concat(i,".").concat(m)]||s[m]||g[m]||c;return a?n.createElement(b,r(r({ref:t},p),{},{components:a})):n.createElement(b,r({ref:t},p))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=a.length,r=new Array(c);r[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:o,r[1]=d;for(var l=2;l<c;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40733:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(87462),o=a(67294),c=a(3905);const r={id:"page-info",title:"PageInfo",hide_table_of_contents:!1},d=void 0,i={unversionedId:"objects/page-info",id:"objects/page-info",title:"PageInfo",description:"No description",source:"@site/api/objects/page-info.mdx",sourceDirName:"objects",slug:"/objects/page-info",permalink:"/api/objects/page-info",draft:!1,tags:[],version:"current",frontMatter:{id:"page-info",title:"PageInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PackageSupplier",permalink:"/api/objects/package-supplier"},next:{title:"Parameter",permalink:"/api/objects/parameter"}},l={},p=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>hasNextPage</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobhasnextpagebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>hasPreviousPage</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobhaspreviouspagebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>startCursor</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobstartcursorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>endCursor</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobendcursorbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[i,l]=(0,o.useState)(d);return(0,c.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},k={Bullet:p,SpecifiedBy:s,Badge:g,toc:m,Details:b},y="wrapper";function u(e){let{components:t,...a}=e;return(0,c.kt)(y,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-pageinfobhasnextpagebcodeboolean--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,c.kt)("b",null,"hasNextPage"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-pageinfobhaspreviouspagebcodeboolean--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,c.kt)("b",null,"hasPreviousPage"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-pageinfobstartcursorbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,c.kt)("b",null,"startCursor"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-pageinfobendcursorbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,c.kt)("b",null,"endCursor"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/access-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccessConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/activation-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ActivationConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/alert-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AlertConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/alert-event-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AlertEventConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/apiconnection"},(0,c.kt)("inlineCode",{parentName:"a"},"APIConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/audit-rule-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AuditRuleConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/board-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"BoardConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/category-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"CategoryConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/client-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ClientConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/connection-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ConnectionConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/destination-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"DestinationConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/entity-audit-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"EntityAuditConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/ferry-search-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"FerrySearchConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/group-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"GroupConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/hotel-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"HotelConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/hotel-xamenity-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"HotelXAmenityConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/insights-xbooking-aggregation-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"InsightsXBookingAggregationConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/insights-xbooking-detail-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"InsightsXBookingDetailConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/invitation-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"InvitationConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/legacy-access-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"LegacyAccessConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/logging-legacy-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"LoggingLegacyConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/macro-permissions-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"MacroPermissionsConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/managed-group-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ManagedGroupConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/member-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"MemberConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/members-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"MembersConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/metadata-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"MetadataConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/operation-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"OperationConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/organization-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"OrganizationConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/organizations-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"OrganizationsConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/partner-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"PartnerConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/payment-xstored-card-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCardConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/product-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ProductConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/profile-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ProfileConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/recommendations-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"RecommendationsConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/resource-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ResourceConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/role-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"RoleConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/room-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"RoomConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/search-criteria-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"SearchCriteriaConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/social-category-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"SocialCategoryConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/social-sub-category-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"SocialSubCategoryConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/stats-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"StatsConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supplier-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupplierConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-hotel-blacklist-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationHotelBlacklistConnection"))," ",(0,c.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);