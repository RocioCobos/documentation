"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),i=c(a),u=l,b=i["".concat(p,".").concat(u)]||i[u]||m[u]||o;return a?n.createElement(b,d(d({ref:t},s),{},{components:a})):n.createElement(b,d({ref:t},s))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,d=new Array(o);d[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[i]="string"==typeof e?e:l,d[1]=r;for(var c=2;c<o;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43050:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>i,assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var n=a(87462),l=a(67294),o=a(3905);const d={id:"supplement",title:"Supplement",hide_table_of_contents:!1},r=void 0,p={unversionedId:"objects/supplement",id:"objects/supplement",title:"Supplement",description:"Supplement that it can be or its already added to the option returned. Contains all the information about the supplement.",source:"@site/api/objects/supplement.mdx",sourceDirName:"objects",slug:"/objects/supplement",permalink:"/api/objects/supplement",draft:!1,tags:[],version:"current",frontMatter:{id:"supplement",title:"Supplement",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Stats",permalink:"/api/objects/stats"},next:{title:"SupplierConnection",permalink:"/api/objects/supplier-connection"}},c={},s=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>code</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplementbcodebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplementbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplementbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>supplementType</b></code><Bullet /><code>SupplementType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-supplementbsupplementtypebcodesupplementtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>chargeType</b></code><Bullet /><code>ChargeType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-supplementbchargetypebcodechargetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>mandatory</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplementbmandatorybcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>durationType</b></code><Bullet /><code>DurationType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-supplementbdurationtypebcodedurationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>quantity</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplementbquantitybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>unit</b></code><Bullet /><code>UnitTimeType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-supplementbunitbcodeunittimetype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>effectiveDate</b></code><Bullet /><code>Date</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplementbeffectivedatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>expireDate</b></code><Bullet /><code>Date</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplementbexpiredatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>start</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplementbstartbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>end</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplementbendbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>resort</b></code><Bullet /><code>Resort</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplementbresortbcoderesort-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Supplement.<b>price</b></code><Bullet /><code>Price</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supplementbpricebcodeprice-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:r=!1}=e;const[p,c]=(0,l.useState)(r);return(0,o.kt)("details",(0,n.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},p?t:a),p&&d)},g={Bullet:s,SpecifiedBy:i,Badge:m,toc:u,Details:b},y="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Supplement that it can be or its already added to the option returned. Contains all the information about the supplement."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Supplement {\n  code: String!\n  name: String\n  description: String\n  supplementType: SupplementType!\n  chargeType: ChargeType!\n  mandatory: Boolean!\n  durationType: DurationType\n  quantity: Int\n  unit: UnitTimeType\n  effectiveDate: Date @deprecated\n  expireDate: Date @deprecated\n  start: Date\n  end: Date\n  resort: Resort\n  price: Price\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbcodebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"code"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Specifies the supplement code.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"name"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Specifies the supplement name.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"description"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Specifies the supplement description.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbsupplementtypebcodesupplementtype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"supplementType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/supplement-type"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplementType!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the supplement type. Possible types: Fee, Ski_pass, Lessons, Meals, Equipment, Ticket, Transfers, Gla, Activity or Null.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbchargetypebcodechargetype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"chargeType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/charge-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ChargeType!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the charge types. We need to know whether the supplements have to be paid when the consumer gets to the hotel or beforehand.\nPossible charge types: INCLUDE or EXCLUDE.\nwhen INCLUDE : this supplement is mandatory and included in the option s price\nwhen EXCLUDE : this supplement is not included in the option s price")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbmandatorybcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"mandatory"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates if the supplement is mandatory or not. If mandatory, this supplement will be applied to this option.\nIf the chargeType is EXCLUDE the customer will have to pay it directly at the hotel")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbdurationtypebcodedurationtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"durationType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/duration-type"},(0,o.kt)("inlineCode",{parentName:"a"},"DurationType"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Specifies the duration type. Possible duration types: Range (specified dates) or Open. This field is mandatory for PDI.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbquantitybcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"quantity"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Indicates the quantity of field in the element "unit".')),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbunitbcodeunittimetype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"unit"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/unit-time-type"},(0,o.kt)("inlineCode",{parentName:"a"},"UnitTimeType"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the unit type. Possible unit types: Day or Hour.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbeffectivedatebcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"effectiveDate"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(m,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"deprecated from 2018-02-28. Incorrect date format.")),(0,o.kt)("p",{parentName:"blockquote"},"Indicates the effective date of the supplement.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbexpiredatebcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"expireDate"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(m,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"deprecated from 2018-02-28. Incorrect date format.")),(0,o.kt)("p",{parentName:"blockquote"},"Indicates the expire date of the supplement.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbstartbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"start"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the effective date of the supplement.\nFormat: YYYY-MM-DD")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbendbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"end"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the expire date of the supplement.\nFormat: YYYY-MM-DD")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbresortbcoderesort-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"resort"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/resort"},(0,o.kt)("inlineCode",{parentName:"a"},"Resort"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Contains information about the resort")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplementbpricebcodeprice-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Supplement.",(0,o.kt)("b",null,"price"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/price"},(0,o.kt)("inlineCode",{parentName:"a"},"Price"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the supplement price.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-option-search"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelOptionSearch"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);