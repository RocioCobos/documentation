"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68169],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var n=t(67294);function d(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){d(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,d=function(e,a){if(null==e)return{};var t,n,d={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(d[t]=e[t]);return d}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,d=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=s(t),y=d,b=i["".concat(c,".").concat(y)]||i[y]||m[y]||r;return t?n.createElement(b,o(o({ref:a},p),{},{components:t})):n.createElement(b,o({ref:a},p))}));function b(e,a){var t=arguments,d=a&&a.mdxType;if("string"==typeof e||d){var r=t.length,o=new Array(r);o[0]=y;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[i]="string"==typeof e?e:d,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},30509:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>m,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>i,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>y});var n=t(87462),d=t(67294),r=t(3905);const o={id:"payment-card-data",title:"PaymentCardData",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/payment-card-data",id:"objects/payment-card-data",title:"PaymentCardData",description:"Contains the information of the Payment Card",source:"@site/api/objects/payment-card-data.mdx",sourceDirName:"objects",slug:"/objects/payment-card-data",permalink:"/api/objects/payment-card-data",draft:!1,tags:[],version:"current",frontMatter:{id:"payment-card-data",title:"PaymentCardData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Paxes",permalink:"/api/objects/paxes"},next:{title:"PaymentCard",permalink:"/api/objects/payment-card"}},s={},p=()=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,r.kt)(d.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(d.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardData.<b>active</b></code><Bullet /><code>Date!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentcarddatabactivebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardData.<b>CVC</b></code><Bullet /><code>CVC!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentcarddatabcvcbcodecvc--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardData.<b>expire</b></code><Bullet /><code>Date!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentcarddatabexpirebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardData.<b>holder</b></code><Bullet /><code>Holder!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentcarddatabholderbcodeholder--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardData.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentcarddatabidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardData.<b>number</b></code><Bullet /><code>CardNumber!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentcarddatabnumberbcodecardnumber--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardData.<b>supplier</b></code><Bullet /><code>Supplier!</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentcarddatabsupplierbcodesupplier---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardData.<b>type</b></code><Bullet /><code>PaymentCardType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentcarddatabtypebcodepaymentcardtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentCardData.<b>status</b></code><Bullet /><code>PaymentCardStatus</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentcarddatabstatusbcodepaymentcardstatus-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:a,dataClose:t,children:o,startOpen:l=!1}=e;const[c,s]=(0,d.useState)(l);return(0,r.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?a:t),c&&o)},u={Bullet:p,SpecifiedBy:i,Badge:m,toc:y,Details:b},g="wrapper";function k(e){let{components:a,...t}=e;return(0,r.kt)(g,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contains the information of the Payment Card"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentCardData {\n  active: Date!\n  CVC: CVC!\n  expire: Date!\n  holder: Holder!\n  id: ID!\n  number: CardNumber!\n  supplier: Supplier! @deprecated\n  type: PaymentCardType!\n  status: PaymentCardStatus\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentcarddatabactivebcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardData.",(0,r.kt)("b",null,"active"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contains the payment card activation date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentcarddatabcvcbcodecvc--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardData.",(0,r.kt)("b",null,"CVC"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/cvc"},(0,r.kt)("inlineCode",{parentName:"a"},"CVC!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contains credit card CVC")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentcarddatabexpirebcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardData.",(0,r.kt)("b",null,"expire"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contains the payment card expiration date")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentcarddatabholderbcodeholder--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardData.",(0,r.kt)("b",null,"holder"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/holder"},(0,r.kt)("inlineCode",{parentName:"a"},"Holder!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contains owner s name")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentcarddatabidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardData.",(0,r.kt)("b",null,"id"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contains the generated card ID. It is provided by the third party supplier.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentcarddatabnumberbcodecardnumber--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardData.",(0,r.kt)("b",null,"number"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/card-number"},(0,r.kt)("inlineCode",{parentName:"a"},"CardNumber!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contains credit card number")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentcarddatabsupplierbcodesupplier---"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardData.",(0,r.kt)("b",null,"supplier"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/supplier"},(0,r.kt)("inlineCode",{parentName:"a"},"Supplier!"))," ",(0,r.kt)(m,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"deprecated from 2021-06-21.")),(0,r.kt)("p",{parentName:"blockquote"},"Indicates the supplier or third party, responsible of the payment card s creation")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentcarddatabtypebcodepaymentcardtype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardData.",(0,r.kt)("b",null,"type"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/payment-card-type"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentCardType!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates the supported card type")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentcarddatabstatusbcodepaymentcardstatus-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentCardData.",(0,r.kt)("b",null,"status"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/payment-card-status"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentCardStatus"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Indicates the credit card status")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/generated-payment-info"},(0,r.kt)("inlineCode",{parentName:"a"},"GeneratedPaymentInfo"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/payment-card"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentCard"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);