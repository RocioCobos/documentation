"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12583],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=l,k=m["".concat(i,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(k,d(d({ref:t},s),{},{components:a})):n.createElement(k,d({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,d=new Array(r);d[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:l,d[1]=o;for(var c=2;c<r;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66518:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>k,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>d,metadata:()=>i,toc:()=>u});var n=a(87462),l=a(67294),r=a(3905);const d={id:"payment-xstored-card-filter-input",title:"PaymentXStoredCardFilterInput",hide_table_of_contents:!1},o=void 0,i={unversionedId:"inputs/payment-xstored-card-filter-input",id:"inputs/payment-xstored-card-filter-input",title:"PaymentXStoredCardFilterInput",description:"No description",source:"@site/api/inputs/payment-xstored-card-filter-input.mdx",sourceDirName:"inputs",slug:"/inputs/payment-xstored-card-filter-input",permalink:"/api/inputs/payment-xstored-card-filter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"payment-xstored-card-filter-input",title:"PaymentXStoredCardFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentCardInput",permalink:"/api/inputs/payment-card-input"},next:{title:"PaymentXStoredCardIDInput",permalink:"/api/inputs/payment-xstored-card-idinput"}},c={},s=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>AND</b></code><Bullet /><code>[PaymentXStoredCardFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbandbcodepaymentxstoredcardfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>OR</b></code><Bullet /><code>[PaymentXStoredCardFilterInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputborbcodepaymentxstoredcardfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkIn_in</b></code><Bullet /><code>[DateTime!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_inbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkIn_not_in</b></code><Bullet /><code>[DateTime!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_not_inbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkIn_lt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_ltbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkIn_lte</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_ltebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkIn_gt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_gtbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkIn_gte</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_gtebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkOut_in</b></code><Bullet /><code>[DateTime!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_inbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkOut_not_in</b></code><Bullet /><code>[DateTime!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_not_inbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkOut_lt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_ltbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkOut_lte</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_ltebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkOut_gt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_gtbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>checkOut_gte</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_gtebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardFilterInput.<b>holder_like</b></code><Bullet /><code>HolderInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbholder_likebcodeholderinput-",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:o=!1}=e;const[i,c]=(0,l.useState)(o);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&d)},y={Bullet:s,SpecifiedBy:m,Badge:p,toc:u,Details:k},g="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input PaymentXStoredCardFilterInput {\n  AND: [PaymentXStoredCardFilterInput!]\n  OR: [PaymentXStoredCardFilterInput!]\n  checkIn_in: [DateTime!]\n  checkIn_not_in: [DateTime!]\n  checkIn_lt: DateTime\n  checkIn_lte: DateTime\n  checkIn_gt: DateTime\n  checkIn_gte: DateTime\n  checkOut_in: [DateTime!]\n  checkOut_not_in: [DateTime!]\n  checkOut_lt: DateTime\n  checkOut_lte: DateTime\n  checkOut_gt: DateTime\n  checkOut_gte: DateTime\n  holder_like: HolderInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbandbcodepaymentxstoredcardfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"AND"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/payment-xstored-card-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[PaymentXStoredCardFilterInput!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Logical AND on all given filters.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputborbcodepaymentxstoredcardfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"OR"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/payment-xstored-card-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[PaymentXStoredCardFilterInput!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Logical OR on all given filters.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_inbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkIn_in"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"[DateTime!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values that are contained in given list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_not_inbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkIn_not_in"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"[DateTime!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values that are not contained in given list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_ltbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkIn_lt"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values less than the given value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_ltebcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkIn_lte"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values less than or equal the given value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_gtbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkIn_gt"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values greater than the given value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckin_gtebcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkIn_gte"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values greater than or equal the given value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_inbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkOut_in"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"[DateTime!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values that are contained in given list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_not_inbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkOut_not_in"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"[DateTime!]"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values that are not contained in given list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_ltbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkOut_lt"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values less than the given value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_ltebcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkOut_lte"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values less than or equal the given value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_gtbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkOut_gt"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values greater than the given value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbcheckout_gtebcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"checkOut_gte"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values greater than or equal the given value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardfilterinputbholder_likebcodeholderinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardFilterInput.",(0,r.kt)("b",null,"holder_like"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/holder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"HolderInput"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All values with holder like the given value.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/payment-xstored-card-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCardFilterInput"))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);