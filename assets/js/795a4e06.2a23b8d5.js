"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88779],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=d(a),m=i,p=f["".concat(l,".").concat(m)]||f[m]||b[m]||o;return a?n.createElement(p,r(r({ref:t},s),{},{components:a})):n.createElement(p,r({ref:t},s))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:i,r[1]=c;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16766:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),i=a(67294),o=a(3905);const r={id:"certification",title:"Certification",hide_table_of_contents:!1},c=void 0,l={unversionedId:"objects/certification",id:"objects/certification",title:"Certification",description:"No description",source:"@site/api/objects/certification.mdx",sourceDirName:"objects",slug:"/objects/certification",permalink:"/api/objects/certification",draft:!1,tags:[],version:"current",frontMatter:{id:"certification",title:"Certification",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CertificationResult",permalink:"/api/objects/certification-result"},next:{title:"CheckInformation",permalink:"/api/objects/check-information"}},d={},s=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Certification.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-certificationbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Certification.<b>certificationData</b></code><Bullet /><code>CertificationData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-certificationbcertificationdatabcodecertificationdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Certification.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-certificationbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Certification.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-certificationbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Certification.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-certificationbadvisemessagebcodeadvisemessage--",level:4},{value:"Member Of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:c=!1}=e;const[l,d]=(0,i.useState)(c);return(0,o.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&r)},g={Bullet:s,SpecifiedBy:f,Badge:b,toc:m,Details:p},u="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Certification {\n  code: ID!\n  certificationData: CertificationData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage: [AdviseMessage!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-certificationbcodebcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Certification.",(0,o.kt)("b",null,"code"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-certificationbcertificationdatabcodecertificationdata-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Certification.",(0,o.kt)("b",null,"certificationData"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/certification-data"},(0,o.kt)("inlineCode",{parentName:"a"},"CertificationData"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-certificationbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Certification.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-certificationbupdatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Certification.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-certificationbadvisemessagebcodeadvisemessage--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Certification.",(0,o.kt)("b",null,"adviseMessage"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,o.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/certification-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"CertificationEdge"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);