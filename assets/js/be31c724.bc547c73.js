/*! For license information please see be31c724.bc547c73.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97700],{70807:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>b});var a=n(74848),o=n(28453),r=n(96540);const i={id:"alert-update-common-configuration-input",title:"AlertUpdateCommonConfigurationInput",hide_table_of_contents:!1},s=void 0,l={id:"inputs/alert-update-common-configuration-input",title:"AlertUpdateCommonConfigurationInput",description:"No description",source:"@site/api/inputs/alert-update-common-configuration-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-common-configuration-input",permalink:"/api/inputs/alert-update-common-configuration-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-update-common-configuration-input",title:"AlertUpdateCommonConfigurationInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertUpdateCommonComparativeInput",permalink:"/api/inputs/alert-update-common-comparative-input"},next:{title:"AlertUpdateCommonRelativeInput",permalink:"/api/inputs/alert-update-common-relative-input"}},d={},c=()=>{const e={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,o.R)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,o.R)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,o.R)()},[l,d]=(0,r.useState)(i);return(0,a.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdateCommonConfigurationInput.<b>timesToAlert</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputtimestoalertint-",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>timesToRecovery</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputtimestorecoveryint-",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>noRecoveries</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputnorecoveriesboolean-",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>stateChangesOnly</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputstatechangesonlyboolean-",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>email</b></code><Bullet></Bullet><code>[AlertEmailInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputemailalertemailinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>notifications</b></code><Bullet></Bullet><code>AlertUpdateNotificationsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputnotificationsalertupdatenotificationsinput-",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>hubStatus</b></code><Bullet></Bullet><code>[AlertHubStatusInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputhubstatusalerthubstatusinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>errorCode</b></code><Bullet></Bullet><code>[AlertErrorCodeInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputerrorcodealerterrorcodeinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>errorType</b></code><Bullet></Bullet><code>[AlertErrorTypeInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputerrortypealerterrortypeinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>supplier</b></code><Bullet></Bullet><code>[AlertObjectInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputsupplieralertobjectinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>client</b></code><Bullet></Bullet><code>[AlertObjectInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputclientalertobjectinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>group</b></code><Bullet></Bullet><code>[AlertGroupInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputgroupalertgroupinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>access</b></code><Bullet></Bullet><code>[AlertObjectInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputaccessalertobjectinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>operation</b></code><Bullet></Bullet><code>[AlertObjectInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputoperationalertobjectinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>api</b></code><Bullet></Bullet><code>[AlertObjectInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputapialertobjectinput--",level:4},{value:'<code>AlertUpdateCommonConfigurationInput.<b>groupBy</b></code><Bullet></Bullet><code>[AlertGroups]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatecommonconfigurationinputgroupbyalertgroups--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdateCommonConfigurationInput {\n  timesToAlert: Int\n  timesToRecovery: Int\n  noRecoveries: Boolean\n  stateChangesOnly: Boolean\n  email: [AlertEmailInput]\n  notifications: AlertUpdateNotificationsInput\n  hubStatus: [AlertHubStatusInput]\n  errorCode: [AlertErrorCodeInput]\n  errorType: [AlertErrorTypeInput]\n  supplier: [AlertObjectInput]\n  client: [AlertObjectInput]\n  group: [AlertGroupInput]\n  access: [AlertObjectInput]\n  operation: [AlertObjectInput]\n  api: [AlertObjectInput!]\n  groupBy: [AlertGroups]\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputtimestoalertint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"timesToAlert"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The number of times the alert must be triggered in order to notify"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputtimestorecoveryint-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"timesToRecovery"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The number of times the alert must be recovered in order to notify"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputnorecoveriesboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"noRecoveries"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To allow recoveries notifications"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputstatechangesonlyboolean-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"stateChangesOnly"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To allow notifications only if the status change"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputemailalertemailinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"email"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-email-input",children:(0,a.jsx)(t.code,{children:"[AlertEmailInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Email addresses to send notifications"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputnotificationsalertupdatenotificationsinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"notifications"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-notifications-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateNotificationsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Emails & slack to send notifications"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputhubstatusalerthubstatusinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"hubStatus"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-hub-status-input",children:(0,a.jsx)(t.code,{children:"[AlertHubStatusInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by hubStatus"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputerrorcodealerterrorcodeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"errorCode"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-error-code-input",children:(0,a.jsx)(t.code,{children:"[AlertErrorCodeInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by errorCodes"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputerrortypealerterrortypeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"errorType"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-error-type-input",children:(0,a.jsx)(t.code,{children:"[AlertErrorTypeInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by errorTypes"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputsupplieralertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"supplier"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by suppliers"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputclientalertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"client"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by clients"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputgroupalertgroupinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"group"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-group-input",children:(0,a.jsx)(t.code,{children:"[AlertGroupInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Must filter traffic by group. Only PRODUCT group type is allowed"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputaccessalertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"access"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by accesses"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputoperationalertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"operation"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by operations"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputapialertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"api"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by apis"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertupdatecommonconfigurationinputgroupbyalertgroups--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdateCommonConfigurationInput.",(0,a.jsx)("b",{children:"groupBy"})]})}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/enums/alert-groups",children:(0,a.jsx)(t.code,{children:"[AlertGroups]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to group by traffic and calculate its parameters separately"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-average-time-absolute-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateAverageTimeAbsoluteConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-average-time-absolute-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateAverageTimeAbsoluteConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-average-time-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateAverageTimeComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-average-time-relative-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateAverageTimeRelativeConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-average-time-relative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateAverageTimeRelativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-business-metric-ratio-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateBusinessMetricRatioConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-error-rate-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateErrorRateComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-error-rate-relative-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateErrorRateRelativeConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-error-rate-relative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdateErrorRateRelativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-peak-traffic-absolute-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdatePeakTrafficAbsoluteConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-peak-traffic-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdatePeakTrafficComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-price-absolute-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertUpdatePriceAbsoluteConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-price-absolute-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdatePriceAbsoluteConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-price-relative-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertUpdatePriceRelativeConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(c,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-update-price-relative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertUpdatePriceRelativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},21020:(e,t,n)=>{var a=n(96540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,r={},d=null,c=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:o,type:e,key:d,ref:c,props:r,_owner:s.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(96540);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);