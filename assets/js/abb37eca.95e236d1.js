"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34647],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(a),b=r,y=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return a?n.createElement(y,d(d({ref:t},i),{},{components:a})):n.createElement(y,d({ref:t},i))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,d[1]=l;for(var s=2;s<o;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},75056:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>y,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>b});var n=a(87462),r=a(67294),o=a(3905);const d={id:"payment-xstored-card-data",title:"PaymentXStoredCardData",hide_table_of_contents:!1},l=void 0,c={unversionedId:"objects/payment-xstored-card-data",id:"objects/payment-xstored-card-data",title:"PaymentXStoredCardData",description:"No description",source:"@site/api/objects/payment-xstored-card-data.mdx",sourceDirName:"objects",slug:"/objects/payment-xstored-card-data",permalink:"/api/objects/payment-xstored-card-data",draft:!1,tags:[],version:"current",frontMatter:{id:"payment-xstored-card-data",title:"PaymentXStoredCardData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentXStoredCardConnection",permalink:"/api/objects/payment-xstored-card-connection"},next:{title:"PaymentXStoredCardEdge",permalink:"/api/objects/payment-xstored-card-edge"}},s={},i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>instance</b></code><Bullet /><code>Group!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabinstancebcodegroup--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>pointOfSale</b></code><Bullet /><code>PointOfSale!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabpointofsalebcodepointofsale--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>bookingReference</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabbookingreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>checkOut</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabcheckoutbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>checkIn</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabcheckinbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>cardType</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabcardtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>holder</b></code><Bullet /><code>Holder</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabholderbcodeholder-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>number</b></code><Bullet /><code>CardNumber</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabnumberbcodecardnumber-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>CVC</b></code><Bullet /><code>CVC</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabcvcbcodecvc-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCardData.<b>expire</b></code><Bullet /><code>PaymentXExpireDate</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentxstoredcarddatabexpirebcodepaymentxexpiredate-",level:4},{value:"Member Of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[c,s]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&d)},g={Bullet:i,SpecifiedBy:m,Badge:p,toc:b,Details:y},k="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentXStoredCardData {\n  instance: Group!\n  pointOfSale: PointOfSale!\n  bookingReference: String!\n  checkOut: Date\n  checkIn: Date\n  cardType: String\n  holder: Holder\n  number: CardNumber\n  CVC: CVC\n  expire: PaymentXExpireDate\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabinstancebcodegroup--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"instance"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/group"},(0,o.kt)("inlineCode",{parentName:"a"},"Group!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Asigned instance of PaymentX of the booked property.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabpointofsalebcodepointofsale--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"pointOfSale"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/point-of-sale"},(0,o.kt)("inlineCode",{parentName:"a"},"PointOfSale!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Physical point of sale where the card was registered.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabbookingreferencebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"bookingReference"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the referece of the booking")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabcheckoutbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"checkOut"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Check-out, booking date Format: YYYY-MM-DD")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabcheckinbcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"checkIn"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Check-in, booking date Format: YYYY-MM-DD")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabcardtypebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"cardType"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the card type.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabholderbcodeholder-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"holder"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/holder"},(0,o.kt)("inlineCode",{parentName:"a"},"Holder"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Contains owner s name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabnumberbcodecardnumber-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"number"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/card-number"},(0,o.kt)("inlineCode",{parentName:"a"},"CardNumber"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Card Number (16 digits typically)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabcvcbcodecvc-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"CVC"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/cvc"},(0,o.kt)("inlineCode",{parentName:"a"},"CVC"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Contains credit card CVC")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcarddatabexpirebcodepaymentxexpiredate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCardData.",(0,o.kt)("b",null,"expire"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/payment-xexpire-date"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentXExpireDate"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Contains credit card expiration date")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/payment-xstored-card"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCard"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);