/*! For license information please see 7a45799f.661f02ec.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52356],{6776:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>j,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>x});var t=s(17624),n=s(4552),d=s(11504);const i={id:"organization",title:"Organization"},o=void 0,c={id:"objects/organization",title:"Organization",description:"Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders.",source:"@site/api/objects/organization.mdx",sourceDirName:"objects",slug:"/objects/organization",permalink:"/api/objects/organization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"organization",title:"Organization"},sidebar:"schemaSidebar",previous:{title:"OrganizationMembers",permalink:"/api/objects/organization-members"},next:{title:"OrganizationsConnection",permalink:"/api/objects/organizations-connection"}},r={},l=()=>{const e={span:"span",...(0,n.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,n.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const a={span:"span",...(0,n.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Organization.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationcodeid--",level:4},{value:'<code>Organization.<b>organizationData</b></code><Bullet></Bullet><code>OrganizationData</code> <Badge class="badge badge--secondary"></Badge>',id:"organizationorganizationdataorganizationdata-",level:4},{value:'<code>Organization.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationadvisemessageadvisemessage--",level:4},{value:'<code>Organization.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Organization.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationcreatedatdatetime--",level:4},{value:'<code>Organization.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"organizationupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:a,children:s,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,n.M)()},[c,r]=(0,d.useState)(i);return(0,t.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&s]})};function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Organization node is the root node in the hierarachy, the folders are the children of the organization and the products are the children of the folders."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type Organization implements Node {\n  code: ID!\n  organizationData: OrganizationData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"organizationcodeid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Organization.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"organizationorganizationdataorganizationdata-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Organization.",(0,t.jsx)("b",{children:"organizationData"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/organization-data",children:(0,t.jsx)(a.code,{children:"OrganizationData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"organizationadvisemessageadvisemessage--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Organization.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,t.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"List of advise messages."}),"\n",(0,t.jsxs)(a.h5,{id:"organizationadvisemessageleveladvisemessagelevel--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Organization.adviseMessage.",(0,t.jsx)("b",{children:"level"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,t.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"organizationcreatedatdatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Organization.",(0,t.jsx)("b",{children:"createdAt"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Date created"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"organizationupdatedatdatetime--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["Organization.",(0,t.jsx)("b",{children:"updatedAt"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,t.jsx)(a.code,{children:"DateTime!"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Date updated"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,t.jsxs)(a.h4,{id:"node-",children:[(0,t.jsx)(a.a,{href:"/api/interfaces/node",children:(0,t.jsx)(a.code,{children:"Node"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/objects/access-data",children:(0,t.jsx)(a.code,{children:"AccessData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/admin-mutation",children:(0,t.jsx)(a.code,{children:"AdminMutation"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/audit-rule-data",children:(0,t.jsx)(a.code,{children:"AuditRuleData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/client-data",children:(0,t.jsx)(a.code,{children:"ClientData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/domain-data",children:(0,t.jsx)(a.code,{children:"DomainData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/hub-user-data",children:(0,t.jsx)(a.code,{children:"HubUserData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/organization-data",children:(0,t.jsx)(a.code,{children:"OrganizationData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/organization-edge",children:(0,t.jsx)(a.code,{children:"OrganizationEdge"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/organization-member-role",children:(0,t.jsx)(a.code,{children:"OrganizationMemberRole"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/partner-included-in-properties",children:(0,t.jsx)(a.code,{children:"PartnerIncludedInProperties"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/point-of-sale-data",children:(0,t.jsx)(a.code,{children:"PointOfSaleData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/profile",children:(0,t.jsx)(a.code,{children:"Profile"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/profile-data",children:(0,t.jsx)(a.code,{children:"ProfileData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/recommendation-data",children:(0,t.jsx)(a.code,{children:"RecommendationData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/social-mutation",children:(0,t.jsx)(a.code,{children:"SocialMutation"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/speed-organization",children:(0,t.jsx)(a.code,{children:"SpeedOrganization"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/stats-aggregation-data",children:(0,t.jsx)(a.code,{children:"StatsAggregationData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/supplier-data",children:(0,t.jsx)(a.code,{children:"SupplierData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/system-data",children:(0,t.jsx)(a.code,{children:"SystemData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/traffic-optimization-hotel-stats-aggregation-data",children:(0,t.jsx)(a.code,{children:"TrafficOptimizationHotelStatsAggregationData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/traffic-optimization-organization",children:(0,t.jsx)(a.code,{children:"TrafficOptimizationOrganization"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/traffic-optimization-stats-aggregation-data",children:(0,t.jsx)(a.code,{children:"TrafficOptimizationStatsAggregationData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/traffic-optimization-stats-hotel-blacklist",children:(0,t.jsx)(a.code,{children:"TrafficOptimizationStatsHotelBlacklist"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:a}={...(0,n.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},44808:(e,a,s)=>{var t=s(11504),n=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function r(e,a,s){var t,d={},r=null,l=null;for(t in void 0!==s&&(r=""+s),void 0!==a.key&&(r=""+a.key),void 0!==a.ref&&(l=a.ref),a)i.call(a,t)&&!c.hasOwnProperty(t)&&(d[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===d[t]&&(d[t]=a[t]);return{$$typeof:n,type:e,key:r,ref:l,props:d,_owner:o.current}}a.Fragment=d,a.jsx=r,a.jsxs=r},17624:(e,a,s)=>{e.exports=s(44808)},4552:(e,a,s)=>{s.d(a,{I:()=>o,M:()=>i});var t=s(11504);const n={},d=t.createContext(n);function i(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);