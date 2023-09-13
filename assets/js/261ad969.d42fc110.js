"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85163:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905);const i={id:"three-domain-security-input",title:"ThreeDomainSecurityInput",hide_table_of_contents:!1},l=void 0,s={unversionedId:"inputs/three-domain-security-input",id:"inputs/three-domain-security-input",title:"ThreeDomainSecurityInput",description:"No description",source:"@site/api/inputs/three-domain-security-input.mdx",sourceDirName:"inputs",slug:"/inputs/three-domain-security-input",permalink:"/api/inputs/three-domain-security-input",draft:!1,tags:[],version:"current",frontMatter:{id:"three-domain-security-input",title:"ThreeDomainSecurityInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SystemFilter",permalink:"/api/inputs/system-filter"},next:{title:"TimeRangeInput",permalink:"/api/inputs/time-range-input"}},c={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>version</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbversionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>DSTransactionID</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbdstransactionidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>XID</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbxidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>ECI</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbecibcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>CAVV</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbcavvbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>payerResponse</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbpayerresponsebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>payerResponseStatus</b></code><Bullet /><code>PayerResponseStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbpayerresponsestatusbcodepayerresponsestatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>cardEnrolledStatus</b></code><Bullet /><code>ThreeDSCardEnrolledStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbcardenrolledstatusbcodethreedscardenrolledstatustype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>merchantName</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbmerchantnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ThreeDomainSecurityInput.<b>signatureStatus</b></code><Bullet /><code>ThreeDSSignatureStatusType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-threedomainsecurityinputbsignaturestatusbcodethreedssignaturestatustype-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[s,c]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&i)},h={Bullet:d,SpecifiedBy:u,Badge:p,toc:m,Details:y},g="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input ThreeDomainSecurityInput {\n  version: String\n  DSTransactionID: String\n  XID: String\n  ECI: String\n  CAVV: String\n  payerResponse: String\n  payerResponseStatus: PayerResponseStatusType\n  cardEnrolledStatus: ThreeDSCardEnrolledStatusType\n  merchantName: String\n  signatureStatus: ThreeDSSignatureStatusType\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbversionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"version"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Three Domain Security Version")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbdstransactionidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"DSTransactionID"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Universally unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbxidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"XID"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Transaction identifier resulting from authentication processing. Uniquely identifies a 3D Secure check request.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbecibcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"ECI"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Electronic Commerce Indicator")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbcavvbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"CAVV"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Cardholder Authentication Verification Value")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbpayerresponsebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"payerResponse"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payer Authentication Response. It is the response to the Payer Authentication Request. The Payer Authentication Response has an XML structure with the information from the response of the authentication, and it contains a digital certificate as a sign of authenticity.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbpayerresponsestatusbcodepayerresponsestatustype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"payerResponseStatus"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/payer-response-status-type"},(0,o.kt)("inlineCode",{parentName:"a"},"PayerResponseStatusType"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Payer Authentication Response status")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbcardenrolledstatusbcodethreedscardenrolledstatustype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"cardEnrolledStatus"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/three-dscard-enrolled-status-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreeDSCardEnrolledStatusType"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Result of enrollment status of the service request")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbmerchantnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"merchantName"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Merchant Name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-threedomainsecurityinputbsignaturestatusbcodethreedssignaturestatustype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ThreeDomainSecurityInput.",(0,o.kt)("b",null,"signatureStatus"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/three-dssignature-status-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ThreeDSSignatureStatusType"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Signature value")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/payment-card-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentCardInput"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);