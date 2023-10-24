"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74402],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(a),g=l,b=u["".concat(i,".").concat(g)]||u[g]||c[g]||o;return a?n.createElement(b,r(r({ref:t},s),{},{components:a})):n.createElement(b,r({ref:t},s))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=g;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[u]="string"==typeof e?e:l,r[1]=d;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},33147:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var n=a(87462),l=a(67294),o=a(3905);const r={id:"profile-update-input",title:"ProfileUpdateInput",hide_table_of_contents:!1},d=void 0,i={unversionedId:"inputs/profile-update-input",id:"inputs/profile-update-input",title:"ProfileUpdateInput",description:"ToDo: Add ProfileData to input",source:"@site/api/inputs/profile-update-input.mdx",sourceDirName:"inputs",slug:"/inputs/profile-update-input",permalink:"/api/inputs/profile-update-input",draft:!1,tags:[],version:"current",frontMatter:{id:"profile-update-input",title:"ProfileUpdateInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProfileOrderByInput",permalink:"/api/inputs/profile-order-by-input"},next:{title:"ProfileWhereInput",permalink:"/api/inputs/profile-where-input"}},p={},s=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>Asset</b></code><Bullet /><code>AssetUpdateManyThroughUpdatingOtherSubentity</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profileupdateinputbassetbcodeassetupdatemanythroughupdatingothersubentity-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>classifications</b></code><Bullet /><code>ProfileCreateOrUpdateClassificationsInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profileupdateinputbclassificationsbcodeprofilecreateorupdateclassificationsinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>groupCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbgroupcodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>order</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputborderbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>ownerCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbownercodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>slug</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbslugbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>status</b></code><Bullet /><code>Status</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profileupdateinputbstatusbcodestatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>websiteUrl</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbwebsiteurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerPartnerStatus</b></code><Bullet /><code>PartnerStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyerpartnerstatusbcodepartnerstatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerPartnerStatus</b></code><Bullet /><code>PartnerStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profileupdateinputbsellerpartnerstatusbcodepartnerstatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerOnboardingStart</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyeronboardingstartbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerOnboardingEnd</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyeronboardingendbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerOnboardingStart</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbselleronboardingstartbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerOnboardingEnd</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbselleronboardingendbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerFirstBooking</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyerfirstbookingbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerLastBooking</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyerlastbookingbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerFirstBooking</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbsellerfirstbookingbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerLastBooking</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbsellerlastbookingbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerIntegrationType</b></code><Bullet /><code>[SellerIntegrationType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profileupdateinputbsellerintegrationtypebcodesellerintegrationtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerIntegrationType</b></code><Bullet /><code>[BuyerIntegrationType!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyerintegrationtypebcodebuyerintegrationtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerTechPlatformOrgType</b></code><Bullet /><code>BuyerTechSolutionCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyertechplatformorgtypebcodebuyertechsolutioncompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerTechBridge</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyertechbridgebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerTechBridge</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbsellertechbridgebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>country</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbcountrybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>crmId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbcrmidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>mainMarkets</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbmainmarketsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerOrgType</b></code><Bullet /><code>BuyerCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyerorgtypebcodebuyercompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerOrgType</b></code><Bullet /><code>SellerCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profileupdateinputbsellerorgtypebcodesellercompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerTechPlatformOrgType</b></code><Bullet /><code>SellerTechSolutionCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profileupdateinputbsellertechplatformorgtypebcodesellertechsolutioncompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerCategoryPropertiesInput</b></code><Bullet /><code>BuyerCategoryPropertiesInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyercategorypropertiesinputbcodebuyercategorypropertiesinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerCategoryPropertiesInput</b></code><Bullet /><code>SellerCategoryPropertiesInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profileupdateinputbsellercategorypropertiesinputbcodesellercategorypropertiesinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>isDemandBridge</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbisdemandbridgebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>isSupplyBridge</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profileupdateinputbissupplybridgebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>internalExtendedInfoInput</b></code><Bullet /><code>InternalExtendedInfoInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profileupdateinputbinternalextendedinfoinputbcodeinternalextendedinfoinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>buyerInsightsCountriesInput</b></code><Bullet /><code>[InsightsCountriesInput]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profileupdateinputbbuyerinsightscountriesinputbcodeinsightscountriesinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileUpdateInput.<b>sellerInsightsCountriesInput</b></code><Bullet /><code>[InsightsCountriesInput]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profileupdateinputbsellerinsightscountriesinputbcodeinsightscountriesinput--",level:4}],b=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[i,p]=(0,l.useState)(d);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},y={Bullet:s,SpecifiedBy:u,Badge:c,toc:g,Details:b},f="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ToDo: Add ProfileData to input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input ProfileUpdateInput {\n  Asset: AssetUpdateManyThroughUpdatingOtherSubentity\n  classifications: ProfileCreateOrUpdateClassificationsInput\n  description: String\n  groupCode: ID\n  name: String\n  order: Float\n  ownerCode: ID\n  slug: String\n  status: Status\n  websiteUrl: String\n  buyerPartnerStatus: PartnerStatusType\n  sellerPartnerStatus: PartnerStatusType\n  buyerOnboardingStart: Date\n  buyerOnboardingEnd: Date\n  sellerOnboardingStart: Date\n  sellerOnboardingEnd: Date\n  buyerFirstBooking: Date\n  buyerLastBooking: Date\n  sellerFirstBooking: Date\n  sellerLastBooking: Date\n  sellerIntegrationType: [SellerIntegrationType!]\n  buyerIntegrationType: [BuyerIntegrationType!]\n  buyerTechPlatformOrgType: BuyerTechSolutionCompanyType\n  buyerTechBridge: String\n  sellerTechBridge: String\n  country: String\n  crmId: String\n  mainMarkets: [String!]\n  buyerOrgType: BuyerCompanyType\n  sellerOrgType: SellerCompanyType\n  sellerTechPlatformOrgType: SellerTechSolutionCompanyType\n  buyerCategoryPropertiesInput: BuyerCategoryPropertiesInput\n  sellerCategoryPropertiesInput: SellerCategoryPropertiesInput\n  isDemandBridge: Boolean\n  isSupplyBridge: Boolean\n  internalExtendedInfoInput: InternalExtendedInfoInput\n  buyerInsightsCountriesInput: [InsightsCountriesInput]\n  sellerInsightsCountriesInput: [InsightsCountriesInput]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbassetbcodeassetupdatemanythroughupdatingothersubentity-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"Asset"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/asset-update-many-through-updating-other-subentity"},(0,o.kt)("inlineCode",{parentName:"a"},"AssetUpdateManyThroughUpdatingOtherSubentity"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbclassificationsbcodeprofilecreateorupdateclassificationsinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"classifications"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/profile-create-or-update-classifications-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ProfileCreateOrUpdateClassificationsInput"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"description"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbgroupcodebcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"groupCode"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputborderbcodefloat-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"order"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbownercodebcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"ownerCode"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbslugbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"slug"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbstatusbcodestatus-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"status"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/status"},(0,o.kt)("inlineCode",{parentName:"a"},"Status"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbwebsiteurlbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"websiteUrl"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyerpartnerstatusbcodepartnerstatustype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerPartnerStatus"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/partner-status-type"},(0,o.kt)("inlineCode",{parentName:"a"},"PartnerStatusType"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbsellerpartnerstatusbcodepartnerstatustype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerPartnerStatus"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/partner-status-type"},(0,o.kt)("inlineCode",{parentName:"a"},"PartnerStatusType"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyeronboardingstartbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerOnboardingStart"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyeronboardingendbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerOnboardingEnd"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbselleronboardingstartbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerOnboardingStart"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbselleronboardingendbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerOnboardingEnd"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyerfirstbookingbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerFirstBooking"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyerlastbookingbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerLastBooking"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbsellerfirstbookingbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerFirstBooking"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbsellerlastbookingbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerLastBooking"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbsellerintegrationtypebcodesellerintegrationtype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerIntegrationType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/seller-integration-type"},(0,o.kt)("inlineCode",{parentName:"a"},"[SellerIntegrationType!]"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyerintegrationtypebcodebuyerintegrationtype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerIntegrationType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/buyer-integration-type"},(0,o.kt)("inlineCode",{parentName:"a"},"[BuyerIntegrationType!]"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyertechplatformorgtypebcodebuyertechsolutioncompanytype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerTechPlatformOrgType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/buyer-tech-solution-company-type"},(0,o.kt)("inlineCode",{parentName:"a"},"BuyerTechSolutionCompanyType"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyertechbridgebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerTechBridge"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbsellertechbridgebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerTechBridge"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbcountrybcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"country"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbcrmidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"crmId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbmainmarketsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"mainMarkets"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyerorgtypebcodebuyercompanytype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerOrgType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/buyer-company-type"},(0,o.kt)("inlineCode",{parentName:"a"},"BuyerCompanyType"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbsellerorgtypebcodesellercompanytype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerOrgType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/seller-company-type"},(0,o.kt)("inlineCode",{parentName:"a"},"SellerCompanyType"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbsellertechplatformorgtypebcodesellertechsolutioncompanytype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerTechPlatformOrgType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/seller-tech-solution-company-type"},(0,o.kt)("inlineCode",{parentName:"a"},"SellerTechSolutionCompanyType"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyercategorypropertiesinputbcodebuyercategorypropertiesinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerCategoryPropertiesInput"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/buyer-category-properties-input"},(0,o.kt)("inlineCode",{parentName:"a"},"BuyerCategoryPropertiesInput"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbsellercategorypropertiesinputbcodesellercategorypropertiesinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerCategoryPropertiesInput"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/seller-category-properties-input"},(0,o.kt)("inlineCode",{parentName:"a"},"SellerCategoryPropertiesInput"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbisdemandbridgebcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"isDemandBridge"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbissupplybridgebcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"isSupplyBridge"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbinternalextendedinfoinputbcodeinternalextendedinfoinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"internalExtendedInfoInput"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/internal-extended-info-input"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalExtendedInfoInput"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbbuyerinsightscountriesinputbcodeinsightscountriesinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"buyerInsightsCountriesInput"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/insights-countries-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[InsightsCountriesInput]"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profileupdateinputbsellerinsightscountriesinputbcodeinsightscountriesinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileUpdateInput.",(0,o.kt)("b",null,"sellerInsightsCountriesInput"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/insights-countries-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[InsightsCountriesInput]"))," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}m.isMDXComponent=!0}}]);