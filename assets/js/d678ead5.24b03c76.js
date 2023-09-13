"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61034:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=n(87462),r=n(67294),l=n(3905);const o={id:"delta-price-input",title:"DeltaPriceInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"inputs/delta-price-input",id:"inputs/delta-price-input",title:"DeltaPriceInput",description:"Input delta price, indicates price variation permitted by the client",source:"@site/api/inputs/delta-price-input.mdx",sourceDirName:"inputs",slug:"/inputs/delta-price-input",permalink:"/api/inputs/delta-price-input",draft:!1,tags:[],version:"current",frontMatter:{id:"delta-price-input",title:"DeltaPriceInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DeleteSupplierMappingInput",permalink:"/api/inputs/delete-supplier-mapping-input"},next:{title:"EntityAuditWhereInput",permalink:"/api/inputs/entity-audit-where-input"}},p={},d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeltaPriceInput.<b>amount</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-deltapriceinputbamountbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeltaPriceInput.<b>percent</b></code><Bullet /><code>Float</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-deltapriceinputbpercentbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeltaPriceInput.<b>applyBoth</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-deltapriceinputbapplybothbcodeboolean--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[c,p]=(0,r.useState)(i);return(0,l.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},f={Bullet:d,SpecifiedBy:s,Badge:u,toc:m,Details:b},h="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Input delta price, indicates price variation permitted by the client\nAn error will be returned if the new price does not abide to DeltaPrice. If DeltaPrice is not sent and the integration implements it, we assume that the price range is 0 and the process will continue\n(price is lower or equal to the price showed in valuation).\nThis field is implemented if it\u2019s native to the supplier or if another availability/valuation request needs to be done in Reservation. In case the supplier blocks the option in valuation, reservation\nwill be done automatically in reservation method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input DeltaPriceInput {\n  amount: Float\n  percent: Float\n  applyBoth: Boolean!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deltapriceinputbamountbcodefloat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeltaPriceInput.",(0,l.kt)("b",null,"amount"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The amount in the currency returned by the option that will be accepted by the client to be higher than the valuation price.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deltapriceinputbpercentbcodefloat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeltaPriceInput.",(0,l.kt)("b",null,"percent"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The percentage accepted by the client to be higher than the valuation price.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deltapriceinputbapplybothbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeltaPriceInput.",(0,l.kt)("b",null,"applyBoth"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Depending on the value of applyBoth:\napplyBoth = false: Indicates that one of the conditions (amount or percentage) has to meet the criteria before reservation.\napplyBoth = true: Indicates that the new price cannot exceed the amount or percentage indicated by the client.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/inputs/hotel-book-input"},(0,l.kt)("inlineCode",{parentName:"a"},"HotelBookInput"))," ",(0,l.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);