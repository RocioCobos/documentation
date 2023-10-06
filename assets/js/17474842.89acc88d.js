"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=d(n),u=r,m=g["".concat(l,".").concat(u)]||g[u]||c[u]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99951:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=n(67294),a=n(3905);const i={id:"insights-query",title:"InsightsQuery",hide_table_of_contents:!1},s=void 0,l={unversionedId:"objects/insights-query",id:"objects/insights-query",title:"InsightsQuery",description:"No description",source:"@site/api/objects/insights-query.mdx",sourceDirName:"objects",slug:"/objects/insights-query",permalink:"/api/objects/insights-query",draft:!1,tags:[],version:"current",frontMatter:{id:"insights-query",title:"InsightsQuery",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InsightsCountry",permalink:"/api/objects/insights-country"},next:{title:"InsightsXBookingAggregationConnection",permalink:"/api/objects/insights-xbooking-aggregation-connection"}},d={},p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.<b>bookingsReport</b></code><Bullet /><code>InsightsXBookingReport</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-insightsquerybbookingsreportbcodeinsightsxbookingreport-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.bookingsReport.<b>orderBy</b></code><Bullet /><code>BookingsReportOrderByInput</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-insightsquerybookingsreportborderbybcodebookingsreportorderbyinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.bookingsReport.<b>groupBy</b></code><Bullet /><code>[BookingsReportGroupByInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-insightsquerybookingsreportbgroupbybcodebookingsreportgroupbyinput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.bookingsReport.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-insightsquerybookingsreportblimitbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.bookingsReport.<b>relay</b></code><Bullet /><code>RelayInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-insightsquerybookingsreportbrelaybcoderelayinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.<b>hotelXMappingReport</b></code><Bullet /><code>HotelXMappingReportResponse!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-insightsquerybhotelxmappingreportbcodehotelxmappingreportresponse--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.<b>getRecommendations</b></code><Bullet /><code>RecommendationsConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-insightsquerybgetrecommendationsbcoderecommendationsconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.getRecommendations.<b>groupBy</b></code><Bullet /><code>[RecommendationsGroupByInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-insightsquerygetrecommendationsbgroupbybcoderecommendationsgroupbyinput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.getRecommendations.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-insightsquerygetrecommendationsblimitbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>InsightsQuery.getRecommendations.<b>relay</b></code><Bullet /><code>RelayInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-insightsquerygetrecommendationsbrelaybcoderelayinput-",level:5},{value:"Returned by",id:"returned-by",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:s=!1}=e;const[l,d]=(0,r.useState)(s);return(0,a.kt)("details",(0,o.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&i)},y={Bullet:p,SpecifiedBy:g,Badge:c,toc:u,Details:m},b="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type InsightsQuery {\n  bookingsReport(\n    where: BookingsReportWhereInput\n    orderBy: BookingsReportOrderByInput\n    groupBy: [BookingsReportGroupByInput!]\n    limit: Int\n    relay: RelayInput\n  ): InsightsXBookingReport\n  hotelXMappingReport(\n    where: HotelXMappingReportWhereInput!\n  ): HotelXMappingReportResponse!\n  getRecommendations(\n    where: RecommendationsWhereInput!\n    groupBy: [RecommendationsGroupByInput!]!\n    limit: Int\n    relay: RelayInput\n  ): RecommendationsConnection\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-insightsquerybbookingsreportbcodeinsightsxbookingreport-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.",(0,a.kt)("b",null,"bookingsReport"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/objects/insights-xbooking-report"},(0,a.kt)("inlineCode",{parentName:"a"},"InsightsXBookingReport"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Retrieve Bookings Details and Summary"),(0,a.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-insightsquerybookingsreportbwherebcodebookingsreportwhereinput-"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.bookingsReport.",(0,a.kt)("b",null,"where"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/inputs/bookings-report-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"BookingsReportWhereInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,a.kt)("h5",{id:"code-style-fontweight-normal-insightsquerybookingsreportborderbybcodebookingsreportorderbyinput-"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.bookingsReport.",(0,a.kt)("b",null,"orderBy"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/enums/bookings-report-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"BookingsReportOrderByInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h5",{id:"code-style-fontweight-normal-insightsquerybookingsreportbgroupbybcodebookingsreportgroupbyinput--"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.bookingsReport.",(0,a.kt)("b",null,"groupBy"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/enums/bookings-report-group-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[BookingsReportGroupByInput!]"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h5",{id:"code-style-fontweight-normal-insightsquerybookingsreportblimitbcodeint-"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.bookingsReport.",(0,a.kt)("b",null,"limit"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h5",{id:"code-style-fontweight-normal-insightsquerybookingsreportbrelaybcoderelayinput-"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.bookingsReport.",(0,a.kt)("b",null,"relay"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/inputs/relay-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RelayInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-insightsquerybhotelxmappingreportbcodehotelxmappingreportresponse--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.",(0,a.kt)("b",null,"hotelXMappingReport"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/objects/hotel-xmapping-report-response"},(0,a.kt)("inlineCode",{parentName:"a"},"HotelXMappingReportResponse!"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Retrieve Mapping Report for HotelX"),(0,a.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-insightsqueryhotelxmappingreportbwherebcodehotelxmappingreportwhereinput--"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.hotelXMappingReport.",(0,a.kt)("b",null,"where"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/inputs/hotel-xmapping-report-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"HotelXMappingReportWhereInput!"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,a.kt)("h4",{id:"code-style-fontweight-normal-insightsquerybgetrecommendationsbcoderecommendationsconnection-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.",(0,a.kt)("b",null,"getRecommendations"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/objects/recommendations-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"RecommendationsConnection"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Retrieve new organizations to connect"),(0,a.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-insightsquerygetrecommendationsbwherebcoderecommendationswhereinput--"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.getRecommendations.",(0,a.kt)("b",null,"where"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/inputs/recommendations-where-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RecommendationsWhereInput!"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,a.kt)("h5",{id:"code-style-fontweight-normal-insightsquerygetrecommendationsbgroupbybcoderecommendationsgroupbyinput--"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.getRecommendations.",(0,a.kt)("b",null,"groupBy"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/enums/recommendations-group-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[RecommendationsGroupByInput!]!"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h5",{id:"code-style-fontweight-normal-insightsquerygetrecommendationsblimitbcodeint-"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.getRecommendations.",(0,a.kt)("b",null,"limit"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h5",{id:"code-style-fontweight-normal-insightsquerygetrecommendationsbrelaybcoderelayinput-"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InsightsQuery.getRecommendations.",(0,a.kt)("b",null,"relay"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h5",href:"/api/inputs/relay-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RelayInput"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/queries/insights"},(0,a.kt)("inlineCode",{parentName:"a"},"insights"))," ",(0,a.kt)(c,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);