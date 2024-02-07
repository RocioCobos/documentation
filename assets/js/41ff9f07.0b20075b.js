/*! For license information please see 41ff9f07.0b20075b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13084],{89332:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>p,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>g});var n=t(17624),a=t(4552),l=t(11504);const s={id:"profile-create-input",title:"ProfileCreateInput"},i=void 0,d={id:"inputs/profile-create-input",title:"ProfileCreateInput",description:"TODO: add ProfileData input",source:"@site/api/inputs/profile-create-input.mdx",sourceDirName:"inputs",slug:"/inputs/profile-create-input",permalink:"/api/inputs/profile-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"profile-create-input",title:"ProfileCreateInput"},sidebar:"schemaSidebar",previous:{title:"PriceInput",permalink:"/api/inputs/price-input"},next:{title:"ProfileCreateOrUpdateClassificationsInput",permalink:"/api/inputs/profile-create-or-update-classifications-input"}},c={},o=()=>{const e={span:"span",...(0,a.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,a.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const r={span:"span",...(0,a.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>ProfileCreateInput.<b>groupCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputgroupcodeid-",level:4},{value:'<code>ProfileCreateInput.<b>ownerCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputownercodeid-",level:4},{value:'<code>ProfileCreateInput.<b>Asset</b></code><Bullet></Bullet><code>AssetCreateManyAsSubEntityInput</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputassetassetcreatemanyassubentityinput-",level:4},{value:'<code>ProfileCreateInput.<b>classifications</b></code><Bullet></Bullet><code>ProfileCreateOrUpdateClassificationsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputclassificationsprofilecreateorupdateclassificationsinput-",level:4},{value:'<code>ProfileCreateInput.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputdescriptionstring-",level:4},{value:'<code>ProfileCreateInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputnamestring-",level:4},{value:'<code>ProfileCreateInput.<b>order</b></code><Bullet></Bullet><code>Float</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputorderfloat-",level:4},{value:'<code>ProfileCreateInput.<b>slug</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputslugstring-",level:4},{value:'<code>ProfileCreateInput.<b>status</b></code><Bullet></Bullet><code>Status</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputstatusstatus-",level:4},{value:'<code>ProfileCreateInput.<b>websiteUrl</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputwebsiteurlstring-",level:4},{value:'<code>ProfileCreateInput.<b>buyerPartnerStatus</b></code><Bullet></Bullet><code>PartnerStatusType</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputbuyerpartnerstatuspartnerstatustype-",level:4},{value:'<code>ProfileCreateInput.<b>sellerPartnerStatus</b></code><Bullet></Bullet><code>PartnerStatusType</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputsellerpartnerstatuspartnerstatustype-",level:4},{value:'<code>ProfileCreateInput.<b>buyerOnboardingStart</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputbuyeronboardingstartdate-",level:4},{value:'<code>ProfileCreateInput.<b>buyerOnboardingEnd</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputbuyeronboardingenddate-",level:4},{value:'<code>ProfileCreateInput.<b>sellerIntegrationType</b></code><Bullet></Bullet><code>[SellerIntegrationType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputsellerintegrationtypesellerintegrationtype--",level:4},{value:'<code>ProfileCreateInput.<b>buyerIntegrationType</b></code><Bullet></Bullet><code>[BuyerIntegrationType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputbuyerintegrationtypebuyerintegrationtype--",level:4},{value:'<code>ProfileCreateInput.<b>buyerOrgType</b></code><Bullet></Bullet><code>BuyerCompanyType</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputbuyerorgtypebuyercompanytype-",level:4},{value:'<code>ProfileCreateInput.<b>sellerOrgType</b></code><Bullet></Bullet><code>SellerCompanyType</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputsellerorgtypesellercompanytype-",level:4},{value:'<code>ProfileCreateInput.<b>buyerTechPlatformOrgType</b></code><Bullet></Bullet><code>BuyerTechSolutionCompanyType</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputbuyertechplatformorgtypebuyertechsolutioncompanytype-",level:4},{value:'<code>ProfileCreateInput.<b>sellerTechPlatformOrgType</b></code><Bullet></Bullet><code>SellerTechSolutionCompanyType</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputsellertechplatformorgtypesellertechsolutioncompanytype-",level:4},{value:'<code>ProfileCreateInput.<b>buyerTechBridge</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputbuyertechbridgestring-",level:4},{value:'<code>ProfileCreateInput.<b>sellerTechBridge</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputsellertechbridgestring-",level:4},{value:'<code>ProfileCreateInput.<b>country</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputcountrystring-",level:4},{value:'<code>ProfileCreateInput.<b>crmId</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputcrmidstring--",level:4},{value:'<code>ProfileCreateInput.<b>mainMarkets</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputmainmarketsstring--",level:4},{value:'<code>ProfileCreateInput.<b>buyerCategoryPropertiesInput</b></code><Bullet></Bullet><code>BuyerCategoryPropertiesInput</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputbuyercategorypropertiesinputbuyercategorypropertiesinput-",level:4},{value:'<code>ProfileCreateInput.<b>sellerCategoryPropertiesInput</b></code><Bullet></Bullet><code>SellerCategoryPropertiesInput</code> <Badge class="badge badge--secondary"></Badge>',id:"profilecreateinputsellercategorypropertiesinputsellercategorypropertiesinput-",level:4}],h=({dataOpen:e,dataClose:r,children:t,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,a.M)()},[d,c]=(0,l.useState)(s);return(0,n.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&t]})};function b(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"TODO: add ProfileData input"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"input ProfileCreateInput {\n  groupCode: ID\n  ownerCode: ID\n  Asset: AssetCreateManyAsSubEntityInput\n  classifications: ProfileCreateOrUpdateClassificationsInput\n  description: String\n  name: String\n  order: Float\n  slug: String\n  status: Status\n  websiteUrl: String\n  buyerPartnerStatus: PartnerStatusType\n  sellerPartnerStatus: PartnerStatusType\n  buyerOnboardingStart: Date\n  buyerOnboardingEnd: Date\n  sellerIntegrationType: [SellerIntegrationType!]\n  buyerIntegrationType: [BuyerIntegrationType!]\n  buyerOrgType: BuyerCompanyType\n  sellerOrgType: SellerCompanyType\n  buyerTechPlatformOrgType: BuyerTechSolutionCompanyType\n  sellerTechPlatformOrgType: SellerTechSolutionCompanyType\n  buyerTechBridge: String\n  sellerTechBridge: String\n  country: String\n  crmId: String!\n  mainMarkets: [String!]\n  buyerCategoryPropertiesInput: BuyerCategoryPropertiesInput\n  sellerCategoryPropertiesInput: SellerCategoryPropertiesInput\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputgroupcodeid-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"groupCode"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/id",children:(0,n.jsx)(r.code,{children:"ID"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputownercodeid-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"ownerCode"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/id",children:(0,n.jsx)(r.code,{children:"ID"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputassetassetcreatemanyassubentityinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"Asset"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/inputs/asset-create-many-as-sub-entity-input",children:(0,n.jsx)(r.code,{children:"AssetCreateManyAsSubEntityInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputclassificationsprofilecreateorupdateclassificationsinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"classifications"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/inputs/profile-create-or-update-classifications-input",children:(0,n.jsx)(r.code,{children:"ProfileCreateOrUpdateClassificationsInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputdescriptionstring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"description"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputnamestring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputorderfloat-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"order"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/float",children:(0,n.jsx)(r.code,{children:"Float"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputslugstring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"slug"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputstatusstatus-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"status"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/status",children:(0,n.jsx)(r.code,{children:"Status"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputwebsiteurlstring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"websiteUrl"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputbuyerpartnerstatuspartnerstatustype-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"buyerPartnerStatus"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/partner-status-type",children:(0,n.jsx)(r.code,{children:"PartnerStatusType"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputsellerpartnerstatuspartnerstatustype-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"sellerPartnerStatus"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/partner-status-type",children:(0,n.jsx)(r.code,{children:"PartnerStatusType"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputbuyeronboardingstartdate-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"buyerOnboardingStart"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/date",children:(0,n.jsx)(r.code,{children:"Date"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputbuyeronboardingenddate-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"buyerOnboardingEnd"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/date",children:(0,n.jsx)(r.code,{children:"Date"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputsellerintegrationtypesellerintegrationtype--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"sellerIntegrationType"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/seller-integration-type",children:(0,n.jsx)(r.code,{children:"[SellerIntegrationType!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputbuyerintegrationtypebuyerintegrationtype--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"buyerIntegrationType"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/buyer-integration-type",children:(0,n.jsx)(r.code,{children:"[BuyerIntegrationType!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputbuyerorgtypebuyercompanytype-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"buyerOrgType"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/buyer-company-type",children:(0,n.jsx)(r.code,{children:"BuyerCompanyType"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputsellerorgtypesellercompanytype-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"sellerOrgType"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/seller-company-type",children:(0,n.jsx)(r.code,{children:"SellerCompanyType"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputbuyertechplatformorgtypebuyertechsolutioncompanytype-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"buyerTechPlatformOrgType"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/buyer-tech-solution-company-type",children:(0,n.jsx)(r.code,{children:"BuyerTechSolutionCompanyType"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputsellertechplatformorgtypesellertechsolutioncompanytype-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"sellerTechPlatformOrgType"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/seller-tech-solution-company-type",children:(0,n.jsx)(r.code,{children:"SellerTechSolutionCompanyType"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputbuyertechbridgestring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"buyerTechBridge"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputsellertechbridgestring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"sellerTechBridge"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputcountrystring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"country"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputcrmidstring--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"crmId"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String!"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputmainmarketsstring--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"mainMarkets"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"[String!]"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputbuyercategorypropertiesinputbuyercategorypropertiesinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"buyerCategoryPropertiesInput"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/inputs/buyer-category-properties-input",children:(0,n.jsx)(r.code,{children:"BuyerCategoryPropertiesInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h4,{id:"profilecreateinputsellercategorypropertiesinputsellercategorypropertiesinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileCreateInput.",(0,n.jsx)("b",{children:"sellerCategoryPropertiesInput"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/inputs/seller-category-properties-input",children:(0,n.jsx)(r.code,{children:"SellerCategoryPropertiesInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"})]})}function y(e={}){const{wrapper:r}={...(0,a.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},44808:(e,r,t)=>{var n=t(11504),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,l={},c=null,o=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(o=r.ref),r)s.call(r,n)&&!d.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===l[n]&&(l[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:o,props:l,_owner:i.current}}r.Fragment=l,r.jsx=c,r.jsxs=c},17624:(e,r,t)=>{e.exports=t(44808)},4552:(e,r,t)=>{t.d(r,{I:()=>i,M:()=>s});var n=t(11504);const a={},l=n.createContext(a);function s(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);