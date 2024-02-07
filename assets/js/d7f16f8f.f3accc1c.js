/*! For license information please see d7f16f8f.f3accc1c.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64880],{77876:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var a=n(17624),o=n(4552),r=n(11504);const i={id:"alert-common-configuration-input",title:"AlertCommonConfigurationInput"},s=void 0,l={id:"inputs/alert-common-configuration-input",title:"AlertCommonConfigurationInput",description:"No description",source:"@site/api/inputs/alert-common-configuration-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-common-configuration-input",permalink:"/api/inputs/alert-common-configuration-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-common-configuration-input",title:"AlertCommonConfigurationInput"},sidebar:"schemaSidebar",previous:{title:"AlertCommonComparativeInput",permalink:"/api/inputs/alert-common-comparative-input"},next:{title:"AlertCommonRelativeInput",permalink:"/api/inputs/alert-common-relative-input"}},c={},d=()=>{const e={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,o.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertCommonConfigurationInput.<b>timesToAlert</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputtimestoalertint--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>timesToRecovery</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputtimestorecoveryint--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>noRecoveries</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputnorecoveriesboolean--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>stateChangesOnly</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputstatechangesonlyboolean--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>email</b></code><Bullet></Bullet><code>[AlertEmailInput]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputemailalertemailinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>notifications</b></code><Bullet></Bullet><code>AlertNotificationsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputnotificationsalertnotificationsinput-",level:4},{value:'<code>AlertCommonConfigurationInput.<b>hubStatus</b></code><Bullet></Bullet><code>[AlertHubStatusInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputhubstatusalerthubstatusinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>errorCode</b></code><Bullet></Bullet><code>[AlertErrorCodeInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputerrorcodealerterrorcodeinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>errorType</b></code><Bullet></Bullet><code>[AlertErrorTypeInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputerrortypealerterrortypeinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>supplier</b></code><Bullet></Bullet><code>[AlertObjectInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputsupplieralertobjectinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>client</b></code><Bullet></Bullet><code>[AlertObjectInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputclientalertobjectinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>group</b></code><Bullet></Bullet><code>[AlertGroupInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputgroupalertgroupinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>access</b></code><Bullet></Bullet><code>[AlertObjectInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputaccessalertobjectinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>operation</b></code><Bullet></Bullet><code>[AlertObjectInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputoperationalertobjectinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>api</b></code><Bullet></Bullet><code>[AlertObjectInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputapialertobjectinput--",level:4},{value:'<code>AlertCommonConfigurationInput.<b>groupBy</b></code><Bullet></Bullet><code>[AlertGroups!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertcommonconfigurationinputgroupbyalertgroups--",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const s={details:"details",summary:"summary",...(0,o.M)()},[l,c]=(0,r.useState)(i);return(0,a.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(s.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input AlertCommonConfigurationInput {\n  timesToAlert: Int!\n  timesToRecovery: Int!\n  noRecoveries: Boolean!\n  stateChangesOnly: Boolean!\n  email: [AlertEmailInput]\n  notifications: AlertNotificationsInput\n  hubStatus: [AlertHubStatusInput!]\n  errorCode: [AlertErrorCodeInput!]\n  errorType: [AlertErrorTypeInput!]\n  supplier: [AlertObjectInput!]\n  client: [AlertObjectInput!]\n  group: [AlertGroupInput!]\n  access: [AlertObjectInput!]\n  operation: [AlertObjectInput!]\n  api: [AlertObjectInput!]!\n  groupBy: [AlertGroups!]\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputtimestoalertint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"timesToAlert"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The number of times the alert must be triggered in order to notify"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputtimestorecoveryint--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"timesToRecovery"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/scalars/int",children:(0,a.jsx)(t.code,{children:"Int!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"The number of times the alert must be recovered in order to notify"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputnorecoveriesboolean--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"noRecoveries"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To allow recoveries notifications"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputstatechangesonlyboolean--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"stateChangesOnly"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(t.code,{children:"Boolean!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"To allow notifications only if the status change"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputemailalertemailinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"email"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-email-input",children:(0,a.jsx)(t.code,{children:"[AlertEmailInput]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Email addresses to send notifications"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputnotificationsalertnotificationsinput-",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"notifications"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-notifications-input",children:(0,a.jsx)(t.code,{children:"AlertNotificationsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Emails & slack to send notifications"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputhubstatusalerthubstatusinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"hubStatus"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-hub-status-input",children:(0,a.jsx)(t.code,{children:"[AlertHubStatusInput!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by hubStatus"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputerrorcodealerterrorcodeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"errorCode"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-error-code-input",children:(0,a.jsx)(t.code,{children:"[AlertErrorCodeInput!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by errorCodes"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputerrortypealerterrortypeinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"errorType"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-error-type-input",children:(0,a.jsx)(t.code,{children:"[AlertErrorTypeInput!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by errorTypes"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputsupplieralertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"supplier"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by suppliers"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputclientalertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"client"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by clients"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputgroupalertgroupinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"group"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-group-input",children:(0,a.jsx)(t.code,{children:"[AlertGroupInput!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Must filter traffic by group. Only PRODUCT group type is allowed"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputaccessalertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"access"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by accesses"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputoperationalertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"operation"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by operations"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputapialertobjectinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"api"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-object-input",children:(0,a.jsx)(t.code,{children:"[AlertObjectInput!]!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to filter traffic by apis"}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"alertcommonconfigurationinputgroupbyalertgroups--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertCommonConfigurationInput.",(0,a.jsx)("b",{children:"groupBy"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/enums/alert-groups",children:(0,a.jsx)(t.code,{children:"[AlertGroups!]"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Possibility to group by traffic and calculate its parameters separately"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/inputs/alert-average-time-absolute-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertAverageTimeAbsoluteConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-average-time-absolute-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertAverageTimeAbsoluteConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-average-time-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertAverageTimeComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-average-time-relative-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertAverageTimeRelativeConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-average-time-relative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertAverageTimeRelativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-business-metric-ratio-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertBusinessMetricRatioConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-error-rate-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertErrorRateComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-error-rate-relative-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertErrorRateRelativeConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-error-rate-relative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertErrorRateRelativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-peak-traffic-absolute-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertPeakTrafficAbsoluteConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-peak-traffic-comparative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertPeakTrafficComparativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-price-absolute-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertPriceAbsoluteConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-price-absolute-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertPriceAbsoluteConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-price-relative-configuration-by-requests-input",children:(0,a.jsx)(t.code,{children:"AlertPriceRelativeConfigurationByRequestsInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/alert-price-relative-configuration-by-time-input",children:(0,a.jsx)(t.code,{children:"AlertPriceRelativeConfigurationByTimeInput"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},44808:(e,t,n)=>{var a=n(11504),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,r={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:d,props:r,_owner:s.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>i});var a=n(11504);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);