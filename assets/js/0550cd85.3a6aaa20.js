"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,y=u["".concat(i,".").concat(m)]||u[m]||s[m]||d;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,o=new Array(d);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<d;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},51560:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(87462),r=a(67294),d=a(3905);const o={id:"payment-card-input",title:"PaymentCardInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"inputs/payment-card-input",id:"inputs/payment-card-input",title:"PaymentCardInput",description:"Input PaymentCard, if the payment type is DIRECT, CARDBOOKING or CARDCHECK_IN, then is mandatory to specify the payment card information",source:"@site/api/inputs/payment-card-input.mdx",sourceDirName:"inputs",slug:"/inputs/payment-card-input",permalink:"/api/inputs/payment-card-input",draft:!1,tags:[],version:"current",frontMatter:{id:"payment-card-input",title:"PaymentCardInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaxInput",permalink:"/api/inputs/pax-input"},next:{title:"PaymentXStoredCardFilterInput",permalink:"/api/inputs/payment-xstored-card-filter-input"}},p={},c=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardInput.<b>cardType</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentcardinputbcardtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardInput.<b>type</b></code><Bullet /><code>PaymentCardType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentcardinputbtypebcodepaymentcardtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardInput.<b>holder</b></code><Bullet /><code>HolderInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-paymentcardinputbholderbcodeholderinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardInput.<b>number</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentcardinputbnumberbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardInput.<b>CVC</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentcardinputbcvcbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardInput.<b>expire</b></code><Bullet /><code>ExpireDateInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-paymentcardinputbexpirebcodeexpiredateinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardInput.<b>isVCC</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentcardinputbisvccbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardInput.<b>virtualCreditCard</b></code><Bullet /><code>VirtualCreditCardInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-paymentcardinputbvirtualcreditcardbcodevirtualcreditcardinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardInput.<b>threeDomainSecurity</b></code><Bullet /><code>ThreeDomainSecurityInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-paymentcardinputbthreedomainsecuritybcodethreedomainsecurityinput-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[i,p]=(0,r.useState)(l);return(0,d.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},b={Bullet:c,SpecifiedBy:u,Badge:s,toc:m,Details:y},g="wrapper";function k(e){let{components:t,...a}=e;return(0,d.kt)(g,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Input PaymentCard, if the payment type is DIRECT, CARD_BOOKING or CARD_CHECK_IN, then is mandatory to specify the payment card information"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input PaymentCardInput {\n  cardType: String\n  type: PaymentCardType\n  holder: HolderInput!\n  number: String!\n  CVC: String!\n  expire: ExpireDateInput!\n  isVCC: Boolean\n  virtualCreditCard: VirtualCreditCardInput\n  threeDomainSecurity: ThreeDomainSecurityInput\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentcardinputbcardtypebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardInput.",(0,d.kt)("b",null,"cardType"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},'Indicates the supported card type, the supported card for this option is shown in Quote step.\n@deprecated(reason: "deprecated from 2019-07-31. Please, use type")')),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentcardinputbtypebcodepaymentcardtype-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardInput.",(0,d.kt)("b",null,"type"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/enums/payment-card-type"},(0,d.kt)("inlineCode",{parentName:"a"},"PaymentCardType"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Indicates the supported card type, the supported card for this option is shown in Quote step.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentcardinputbholderbcodeholderinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardInput.",(0,d.kt)("b",null,"holder"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/inputs/holder-input"},(0,d.kt)("inlineCode",{parentName:"a"},"HolderInput!"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Contains owner s name")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentcardinputbnumberbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardInput.",(0,d.kt)("b",null,"number"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Contains credit card number")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentcardinputbcvcbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardInput.",(0,d.kt)("b",null,"CVC"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Contains credit card CVC")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentcardinputbexpirebcodeexpiredateinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardInput.",(0,d.kt)("b",null,"expire"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/inputs/expire-date-input"},(0,d.kt)("inlineCode",{parentName:"a"},"ExpireDateInput!"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Contains credit card expiration date")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentcardinputbisvccbcodeboolean-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardInput.",(0,d.kt)("b",null,"isVCC"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,d.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Is a virtual credit card")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentcardinputbvirtualcreditcardbcodevirtualcreditcardinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardInput.",(0,d.kt)("b",null,"virtualCreditCard"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/inputs/virtual-credit-card-input"},(0,d.kt)("inlineCode",{parentName:"a"},"VirtualCreditCardInput"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Virtual Credit Card data")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-paymentcardinputbthreedomainsecuritybcodethreedomainsecurityinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardInput.",(0,d.kt)("b",null,"threeDomainSecurity"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/inputs/three-domain-security-input"},(0,d.kt)("inlineCode",{parentName:"a"},"ThreeDomainSecurityInput"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Three Domain Security data")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/inputs/hotel-book-input"},(0,d.kt)("inlineCode",{parentName:"a"},"HotelBookInput"))," ",(0,d.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);