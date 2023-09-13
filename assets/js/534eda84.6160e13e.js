"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55692],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(a),y=r,f=s["".concat(i,".").concat(y)]||s[y]||m[y]||o;return a?n.createElement(f,d(d({ref:t},p),{},{components:a})):n.createElement(f,d({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,d[1]=l;for(var c=2;c<o;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},66665:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>i,toc:()=>y});var n=a(87462),r=a(67294),o=a(3905);const d={id:"generated-payment-info",title:"GeneratedPaymentInfo",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/generated-payment-info",id:"objects/generated-payment-info",title:"GeneratedPaymentInfo",description:"Information amout the generated payment at Book step",source:"@site/api/objects/generated-payment-info.mdx",sourceDirName:"objects",slug:"/objects/generated-payment-info",permalink:"/api/objects/generated-payment-info",draft:!1,tags:[],version:"current",frontMatter:{id:"generated-payment-info",title:"GeneratedPaymentInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightTicket",permalink:"/api/objects/flight-ticket"},next:{title:"GeonameData",permalink:"/api/objects/geoname-data"}},c={},p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>GeneratedPaymentInfo.<b>generatedCard</b></code><Bullet /><code>PaymentCardData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-generatedpaymentinfobgeneratedcardbcodepaymentcarddata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GeneratedPaymentInfo.<b>id</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-generatedpaymentinfobidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GeneratedPaymentInfo.<b>method</b></code><Bullet /><code>GeneratedPaymentMethodType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-generatedpaymentinfobmethodbcodegeneratedpaymentmethodtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GeneratedPaymentInfo.<b>supplier</b></code><Bullet /><code>SupplierData!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-generatedpaymentinfobsupplierbcodesupplierdata--",level:4},{value:"Member of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[i,c]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&d)},g={Bullet:p,SpecifiedBy:s,Badge:m,toc:y,Details:f},u="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Information amout the generated payment at Book step"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type GeneratedPaymentInfo {\n  generatedCard: PaymentCardData\n  id: String!\n  method: GeneratedPaymentMethodType\n  supplier: SupplierData!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-generatedpaymentinfobgeneratedcardbcodepaymentcarddata-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"GeneratedPaymentInfo.",(0,o.kt)("b",null,"generatedCard"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/payment-card-data"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentCardData"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Specifies the information of the payment card, and the source of it, that has been generated at Book step")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-generatedpaymentinfobidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"GeneratedPaymentInfo.",(0,o.kt)("b",null,"id"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payment identification generated by the payment supplier.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-generatedpaymentinfobmethodbcodegeneratedpaymentmethodtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"GeneratedPaymentInfo.",(0,o.kt)("b",null,"method"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/generated-payment-method-type"},(0,o.kt)("inlineCode",{parentName:"a"},"GeneratedPaymentMethodType"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the payment method used. It depends of the configurated payments supplier.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-generatedpaymentinfobsupplierbcodesupplierdata--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"GeneratedPaymentInfo.",(0,o.kt)("b",null,"supplier"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/supplier-data"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplierData!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the supplier information responsible of the payment card s creation")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-booking-detail"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelBookingDetail"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/hotel-cancel-detail"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelCancelDetail"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);