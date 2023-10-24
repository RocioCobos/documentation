"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78366],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),y=c(a),p=r,m=y["".concat(s,".").concat(p)]||y[p]||u[p]||o;return a?n.createElement(m,d(d({ref:t},i),{},{components:a})):n.createElement(m,d({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:r,d[1]=l;for(var c=2;c<o;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},14962:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>y,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905);const d={id:"payment-xquery",title:"PaymentXQuery",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/payment-xquery",id:"objects/payment-xquery",title:"PaymentXQuery",description:"No description",source:"@site/api/objects/payment-xquery.mdx",sourceDirName:"objects",slug:"/objects/payment-xquery",permalink:"/api/objects/payment-xquery",draft:!1,tags:[],version:"current",frontMatter:{id:"payment-xquery",title:"PaymentXQuery",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentXMutation",permalink:"/api/objects/payment-xmutation"},next:{title:"PaymentXStoredCardConnection",permalink:"/api/objects/payment-xstored-card-connection"}},c={},i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXQuery.<b>vaultStatusService</b></code><Bullet /><code>AdviseMessage!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentxquerybvaultstatusservicebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXQuery.<b>allStoredCards</b></code><Bullet /><code>PaymentXStoredCardConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentxqueryballstoredcardsbcodepaymentxstoredcardconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXQuery.allStoredCards.<b>instanceCode</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentxqueryallstoredcardsbinstancecodebcodestring--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentXQuery.<b>storedCard</b></code><Bullet /><code>PaymentXStoredCard!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-paymentxquerybstoredcardbcodepaymentxstoredcard--",level:4},{value:"Returned by",id:"returned-by",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:l=!1}=e;const[s,c]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&d)},b={Bullet:i,SpecifiedBy:y,Badge:u,toc:p,Details:m},g="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentXQuery {\n  vaultStatusService: AdviseMessage!\n  allStoredCards(\n    filter: PaymentXStoredCardFilterInput!\n    instanceCode: String!\n  ): PaymentXStoredCardConnection!\n  storedCard(criteria: PaymentXStoredCardIDInput!): PaymentXStoredCard!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxquerybvaultstatusservicebcodeadvisemessage--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXQuery.",(0,o.kt)("b",null,"vaultStatusService"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,o.kt)("inlineCode",{parentName:"a"},"AdviseMessage!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns status of the vault service.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxqueryballstoredcardsbcodepaymentxstoredcardconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXQuery.",(0,o.kt)("b",null,"allStoredCards"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/payment-xstored-card-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCardConnection!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns the stored card list. For security, this query never will return clear card information."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-paymentxqueryallstoredcardsbfilterbcodepaymentxstoredcardfilterinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXQuery.allStoredCards.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/payment-xstored-card-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCardFilterInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-paymentxqueryallstoredcardsbinstancecodebcodestring--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXQuery.allStoredCards.",(0,o.kt)("b",null,"instanceCode"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentxquerybstoredcardbcodepaymentxstoredcard--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXQuery.",(0,o.kt)("b",null,"storedCard"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/payment-xstored-card"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCard!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns a stored card information."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-paymentxquerystoredcardbcriteriabcodepaymentxstoredcardidinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentXQuery.storedCard.",(0,o.kt)("b",null,"criteria"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/payment-xstored-card-idinput"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentXStoredCardIDInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/queries/payment-x"},(0,o.kt)("inlineCode",{parentName:"a"},"paymentX"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"query",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);