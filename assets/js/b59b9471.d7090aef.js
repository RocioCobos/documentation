"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69349],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>b});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(l),h=r,b=u["".concat(d,".").concat(h)]||u[h]||c[h]||a;return l?n.createElement(b,o(o({ref:t},s),{},{components:l})):n.createElement(b,o({ref:t},s))}));function b(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}h.displayName="MDXCreateElement"},10744:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>c,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=l(87462),r=l(67294),a=l(3905);const o={id:"profile-where-input",title:"ProfileWhereInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"inputs/profile-where-input",id:"inputs/profile-where-input",title:"ProfileWhereInput",description:"No description",source:"@site/api/inputs/profile-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/profile-where-input",permalink:"/api/inputs/profile-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"profile-where-input",title:"ProfileWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProfileUpdateInput",permalink:"/api/inputs/profile-update-input"},next:{title:"ProfileWhereUniqueInput",permalink:"/api/inputs/profile-where-unique-input"}},p={},s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),h=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>AND</b></code><Bullet /><code>[ProfileWhereInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbandbcodeprofilewhereinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>Asset</b></code><Bullet /><code>AssetFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbassetbcodeassetfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>NOT</b></code><Bullet /><code>[ProfileWhereInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbnotbcodeprofilewhereinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>OR</b></code><Bullet /><code>[ProfileWhereInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputborbcodeprofilewhereinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>code</b></code><Bullet /><code>StringFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbcodebcodestringfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>createdAt</b></code><Bullet /><code>DateTimeFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbcreatedatbcodedatetimefilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>description</b></code><Bullet /><code>NullableStringFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbdescriptionbcodenullablestringfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>groupCode</b></code><Bullet /><code>NullableStringFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbgroupcodebcodenullablestringfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>id</b></code><Bullet /><code>IntFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbidbcodeintfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>name</b></code><Bullet /><code>StringFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbnamebcodestringfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>order</b></code><Bullet /><code>FloatFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputborderbcodefloatfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>ownerCode</b></code><Bullet /><code>NullableStringFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbownercodebcodenullablestringfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>slug</b></code><Bullet /><code>StringFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbslugbcodestringfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>status</b></code><Bullet /><code>Status</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilewhereinputbstatusbcodestatus-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>buyerTechPlatformOrgType</b></code><Bullet /><code>BuyerTechSolutionCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilewhereinputbbuyertechplatformorgtypebcodebuyertechsolutioncompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>sellerTechPlatformOrgType</b></code><Bullet /><code>SellerTechSolutionCompanyType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilewhereinputbsellertechplatformorgtypebcodesellertechsolutioncompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>updatedAt</b></code><Bullet /><code>DateTimeFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbupdatedatbcodedatetimefilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>websiteUrl</b></code><Bullet /><code>NullableStringFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbwebsiteurlbcodenullablestringfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>buyerCategory</b></code><Bullet /><code>NullableStringFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbbuyercategorybcodenullablestringfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>sellerCategory</b></code><Bullet /><code>NullableStringFilter</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbsellercategorybcodenullablestringfilter-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>isDemandBridge</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilewhereinputbisdemandbridgebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>isSupplyBridge</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilewhereinputbissupplybridgebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>buyerPartnerStatus</b></code><Bullet /><code>PartnerStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilewhereinputbbuyerpartnerstatusbcodepartnerstatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>sellerPartnerStatus</b></code><Bullet /><code>PartnerStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-profilewhereinputbsellerpartnerstatusbcodepartnerstatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>buyerInsightsCountriesInput</b></code><Bullet /><code>InsightsCountriesWhereInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbbuyerinsightscountriesinputbcodeinsightscountrieswhereinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileWhereInput.<b>sellerInsightsCountriesInput</b></code><Bullet /><code>InsightsCountriesWhereInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-profilewhereinputbsellerinsightscountriesinputbcodeinsightscountrieswhereinput-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:l,children:o,startOpen:i=!1}=e;const[d,p]=(0,r.useState)(i);return(0,a.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},d?t:l),d&&o)},g={Bullet:s,SpecifiedBy:u,Badge:c,toc:h,Details:b},f="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(f,(0,n.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input ProfileWhereInput {\n  AND: [ProfileWhereInput!]\n  Asset: AssetFilter\n  NOT: [ProfileWhereInput!]\n  OR: [ProfileWhereInput!]\n  code: StringFilter\n  createdAt: DateTimeFilter\n  description: NullableStringFilter\n  groupCode: NullableStringFilter\n  id: IntFilter\n  name: StringFilter\n  order: FloatFilter\n  ownerCode: NullableStringFilter\n  slug: StringFilter\n  status: Status\n  buyerTechPlatformOrgType: BuyerTechSolutionCompanyType\n  sellerTechPlatformOrgType: SellerTechSolutionCompanyType\n  updatedAt: DateTimeFilter\n  websiteUrl: NullableStringFilter\n  buyerCategory: NullableStringFilter\n  sellerCategory: NullableStringFilter\n  isDemandBridge: Boolean\n  isSupplyBridge: Boolean\n  buyerPartnerStatus: PartnerStatusType\n  sellerPartnerStatus: PartnerStatusType\n  buyerInsightsCountriesInput: InsightsCountriesWhereInput\n  sellerInsightsCountriesInput: InsightsCountriesWhereInput\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbandbcodeprofilewhereinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"AND"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/profile-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[ProfileWhereInput!]"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbassetbcodeassetfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"Asset"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/asset-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"AssetFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbnotbcodeprofilewhereinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"NOT"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/profile-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[ProfileWhereInput!]"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputborbcodeprofilewhereinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"OR"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/profile-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[ProfileWhereInput!]"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbcodebcodestringfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"code"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/string-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"StringFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbcreatedatbcodedatetimefilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"createdAt"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/date-time-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTimeFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbdescriptionbcodenullablestringfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"description"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/nullable-string-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"NullableStringFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbgroupcodebcodenullablestringfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"groupCode"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/nullable-string-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"NullableStringFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbidbcodeintfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"id"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/int-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"IntFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbnamebcodestringfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"name"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/string-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"StringFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputborderbcodefloatfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"order"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/float-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"FloatFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbownercodebcodenullablestringfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"ownerCode"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/nullable-string-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"NullableStringFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbslugbcodestringfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"slug"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/string-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"StringFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbstatusbcodestatus-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"status"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/status"},(0,a.kt)("inlineCode",{parentName:"a"},"Status"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbbuyertechplatformorgtypebcodebuyertechsolutioncompanytype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"buyerTechPlatformOrgType"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/buyer-tech-solution-company-type"},(0,a.kt)("inlineCode",{parentName:"a"},"BuyerTechSolutionCompanyType"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbsellertechplatformorgtypebcodesellertechsolutioncompanytype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"sellerTechPlatformOrgType"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/seller-tech-solution-company-type"},(0,a.kt)("inlineCode",{parentName:"a"},"SellerTechSolutionCompanyType"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbupdatedatbcodedatetimefilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"updatedAt"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/date-time-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTimeFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbwebsiteurlbcodenullablestringfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"websiteUrl"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/nullable-string-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"NullableStringFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbbuyercategorybcodenullablestringfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"buyerCategory"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/nullable-string-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"NullableStringFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbsellercategorybcodenullablestringfilter-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"sellerCategory"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/nullable-string-filter"},(0,a.kt)("inlineCode",{parentName:"a"},"NullableStringFilter"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbisdemandbridgebcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"isDemandBridge"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbissupplybridgebcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"isSupplyBridge"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbbuyerpartnerstatusbcodepartnerstatustype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"buyerPartnerStatus"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/partner-status-type"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerStatusType"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbsellerpartnerstatusbcodepartnerstatustype-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"sellerPartnerStatus"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/partner-status-type"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerStatusType"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbbuyerinsightscountriesinputbcodeinsightscountrieswhereinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"buyerInsightsCountriesInput"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/insights-countries-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"InsightsCountriesWhereInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-profilewhereinputbsellerinsightscountriesinputbcodeinsightscountrieswhereinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProfileWhereInput.",(0,a.kt)("b",null,"sellerInsightsCountriesInput"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/inputs/insights-countries-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"InsightsCountriesWhereInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/asset-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"AssetWhereInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/inputs/profile-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ProfileWhereInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);