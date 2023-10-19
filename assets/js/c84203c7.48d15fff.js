"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81986],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var d=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,d)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,d,r=function(e,t){if(null==e)return{};var a,d,r={},n=Object.keys(e);for(d=0;d<n.length;d++)a=n[d],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(d=0;d<n.length;d++)a=n[d],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=d.createContext({}),c=function(e){var t=d.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return d.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},y=d.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(a),y=r,b=m["".concat(s,".").concat(y)]||m[y]||p[y]||n;return a?d.createElement(b,o(o({ref:t},i),{},{components:a})):d.createElement(b,o({ref:t},i))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return d.createElement.apply(null,o)}return d.createElement.apply(null,a)}y.displayName="MDXCreateElement"},97893:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>y});var d=a(87462),r=a(67294),n=a(3905);const o={id:"payment-xstored-card",title:"PaymentXStoredCard",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/payment-xstored-card",id:"objects/payment-xstored-card",title:"PaymentXStoredCard",description:"No description",source:"@site/api/objects/payment-xstored-card.mdx",sourceDirName:"objects",slug:"/objects/payment-xstored-card",permalink:"/api/objects/payment-xstored-card",draft:!1,tags:[],version:"current",frontMatter:{id:"payment-xstored-card",title:"PaymentXStoredCard",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentXStoredCardEdge",permalink:"/api/objects/payment-xstored-card-edge"},next:{title:"Permission",permalink:"/api/objects/permission"}},c={},i=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCard.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCard.<b>storedCardData</b></code><Bullet /><code>PaymentXStoredCardData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentxstoredcardbstoredcarddatabcodepaymentxstoredcarddata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCard.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCard.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxstoredcardbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXStoredCard.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentxstoredcardbadvisemessagebcodeadvisemessage--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[s,c]=(0,r.useState)(l);return(0,n.kt)("details",(0,d.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&o)},g={Bullet:i,SpecifiedBy:m,Badge:p,toc:y,Details:b},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,d.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentXStoredCard implements Node {\n  code: ID!\n  storedCardData: PaymentXStoredCardData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardbcodebcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCard.",(0,n.kt)("b",null,"code"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Stored card ID")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardbstoredcarddatabcodepaymentxstoredcarddata-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCard.",(0,n.kt)("b",null,"storedCardData"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/payment-xstored-card-data"},(0,n.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCardData"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Stored card information")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardbcreatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCard.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Create date")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardbupdatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCard.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Update date")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-paymentxstoredcardbadvisemessagebcodeadvisemessage--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCard.",(0,n.kt)("b",null,"adviseMessage"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,n.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of messages"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-paymentxstoredcardadvisemessageblevelbcodeadvisemessagelevel--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"PaymentXStoredCard.adviseMessage.",(0,n.kt)("b",null,"level"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,n.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"node-"},(0,n.kt)("a",{parentName:"h4",href:"/api/interfaces/node"},(0,n.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/payment-xmutation"},(0,n.kt)("inlineCode",{parentName:"a"},"PaymentXMutation"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/api/objects/payment-xquery"},(0,n.kt)("inlineCode",{parentName:"a"},"PaymentXQuery"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/api/objects/payment-xstored-card-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCardEdge"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);