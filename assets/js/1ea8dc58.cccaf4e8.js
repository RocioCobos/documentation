"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58484],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),p=s(a),b=o,m=p["".concat(c,".").concat(b)]||p[b]||g[b]||l;return a?n.createElement(m,d(d({ref:t},i),{},{components:a})):n.createElement(m,d({ref:t},i))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,d=new Array(l);d[0]=b;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:o,d[1]=r;for(var s=2;s<l;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},87647:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>b});var n=a(87462),o=a(67294),l=a(3905);const d={id:"content-payload",title:"ContentPayload",hide_table_of_contents:!1},r=void 0,c={unversionedId:"objects/content-payload",id:"objects/content-payload",title:"ContentPayload",description:"No description",source:"@site/api/objects/content-payload.mdx",sourceDirName:"objects",slug:"/objects/content-payload",permalink:"/api/objects/content-payload",draft:!1,tags:[],version:"current",frontMatter:{id:"content-payload",title:"ContentPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Contact",permalink:"/api/objects/contact"},next:{title:"ContextData",permalink:"/api/objects/context-data"}},s={},i=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>adviseMessages</b></code><Bullet /><code>[AdviseMessage]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-contentpayloadbadvisemessagesbcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>packageCode</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-contentpayloadbpackagecodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>type</b></code><Bullet /><code>ContentType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-contentpayloadbtypebcodecontenttype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>supplier</b></code><Bullet /><code>PackageSupplier</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-contentpayloadbsupplierbcodepackagesupplier-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>language</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-contentpayloadblanguagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-contentpayloadbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>destination</b></code><Bullet /><code>PackageDestination</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-contentpayloadbdestinationbcodepackagedestination-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-contentpayloadbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>media</b></code><Bullet /><code>[Medium!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-contentpayloadbmediabcodemedium--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ContentPayload.<b>remarks</b></code><Bullet /><code>[Remark!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-contentpayloadbremarksbcoderemark--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:r=!1}=e;const[c,s]=(0,o.useState)(r);return(0,l.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&d)},y={Bullet:i,SpecifiedBy:p,Badge:g,toc:b,Details:m},k="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ContentPayload {\n  adviseMessages: [AdviseMessage]\n  packageCode: String\n  type: ContentType\n  supplier: PackageSupplier\n  language: String\n  name: String\n  destination: PackageDestination\n  description: String\n  media: [Medium!]\n  remarks: [Remark!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadbadvisemessagesbcodeadvisemessage--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"adviseMessages"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,l.kt)("inlineCode",{parentName:"a"},"[AdviseMessage]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of errors")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadbpackagecodebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"packageCode"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Identifier code")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadbtypebcodecontenttype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"type"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/content-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ContentType"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Specifies if it's a package or a tour")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadbsupplierbcodepackagesupplier-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"supplier"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/package-supplier"},(0,l.kt)("inlineCode",{parentName:"a"},"PackageSupplier"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"supplier information")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadblanguagebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"language"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Language code (ISO 639-1)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"name"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Package name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadbdestinationbcodepackagedestination-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"destination"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/package-destination"},(0,l.kt)("inlineCode",{parentName:"a"},"PackageDestination"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Destination information")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadbdescriptionbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"description"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Package description")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadbmediabcodemedium--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"media"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/medium"},(0,l.kt)("inlineCode",{parentName:"a"},"[Medium!]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of available media")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-contentpayloadbremarksbcoderemark--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ContentPayload.",(0,l.kt)("b",null,"remarks"))),(0,l.kt)(i,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/remark"},(0,l.kt)("inlineCode",{parentName:"a"},"[Remark!]"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of remarks for the product")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/package-query"},(0,l.kt)("inlineCode",{parentName:"a"},"PackageQuery"))," ",(0,l.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);