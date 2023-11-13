"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,y=c["".concat(d,".").concat(f)]||c[f]||p[f]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64549:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>y,SpecifiedBy:()=>c,assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>f});var n=r(87462),a=r(67294),o=r(3905);const l={id:"ferry-quote-where-input",title:"FerryQuoteWhereInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"inputs/ferry-quote-where-input",id:"inputs/ferry-quote-where-input",title:"FerryQuoteWhereInput",description:"No description",source:"@site/api/inputs/ferry-quote-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/ferry-quote-where-input",permalink:"/api/inputs/ferry-quote-where-input",draft:!1,tags:[],version:"current",frontMatter:{id:"ferry-quote-where-input",title:"FerryQuoteWhereInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FerryInputSettings",permalink:"/api/inputs/ferry-input-settings"},next:{title:"FerrySearchGroupByInput",permalink:"/api/inputs/ferry-search-group-by-input"}},s={},u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FerryQuoteWhereInput.<b>searchToken</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferryquotewhereinputbsearchtokenbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryQuoteWhereInput.<b>isResident</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferryquotewhereinputbisresidentbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryQuoteWhereInput.<b>departureOfferCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferryquotewhereinputbdepartureoffercodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryQuoteWhereInput.<b>returnOfferCode</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferryquotewhereinputbreturnoffercodebcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryQuoteWhereInput.<b>inputSettings</b></code><Bullet /><code>FerryInputSettings!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-ferryquotewhereinputbinputsettingsbcodeferryinputsettings--",level:4}],y=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[d,s]=(0,a.useState)(i);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:r),d&&l)},g={Bullet:u,SpecifiedBy:c,Badge:p,toc:f,Details:y},b="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(b,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input FerryQuoteWhereInput {\n  searchToken: String\n  isResident: Boolean!\n  departureOfferCode: ID\n  returnOfferCode: ID\n  inputSettings: FerryInputSettings!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferryquotewhereinputbsearchtokenbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerryQuoteWhereInput.",(0,o.kt)("b",null,"searchToken"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Is the SearchToken returned in search response.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferryquotewhereinputbisresidentbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerryQuoteWhereInput.",(0,o.kt)("b",null,"isResident"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To get resident rates.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferryquotewhereinputbdepartureoffercodebcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerryQuoteWhereInput.",(0,o.kt)("b",null,"departureOfferCode"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferryquotewhereinputbreturnoffercodebcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerryQuoteWhereInput.",(0,o.kt)("b",null,"returnOfferCode"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferryquotewhereinputbinputsettingsbcodeferryinputsettings--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerryQuoteWhereInput.",(0,o.kt)("b",null,"inputSettings"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/ferry-input-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"FerryInputSettings!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Node that represents the configuration for an specified request")))}h.isMDXComponent=!0}}]);