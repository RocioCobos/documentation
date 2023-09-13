"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23232],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,d=function(e,t){if(null==e)return{};var a,r,d={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,d=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=d,g=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return a?r.createElement(g,n(n({ref:t},c),{},{components:a})):r.createElement(g,n({ref:t},c))}));function g(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var o=a.length,n=new Array(o);n[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:d,n[1]=l;for(var s=2;s<o;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90388:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var r=a(87462),d=a(67294),o=a(3905);const n={id:"provider",title:"Provider",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/provider",id:"objects/provider",title:"Provider",description:"A Provider is the link with the associated integration (also known as DLL)",source:"@site/api/objects/provider.mdx",sourceDirName:"objects",slug:"/objects/provider",permalink:"/api/objects/provider",draft:!1,tags:[],version:"current",frontMatter:{id:"provider",title:"Provider",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProviderData",permalink:"/api/objects/provider-data"},next:{title:"QuotePayload",permalink:"/api/objects/quote-payload"}},s={},c=()=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(d.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Provider.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-providerbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Provider.<b>providerData</b></code><Bullet /><code>ProviderData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-providerbproviderdatabcodeproviderdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Provider.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-providerbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Provider.<b>error</b></code><Bullet /><code>[Error!]</code> <Badge class="badge badge--deprecated badge--secondary" text="deprecated"/> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-providerberrorbcodeerror---",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Provider.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-providerbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Provider.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-providerbupdatedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:l=!1}=e;const[i,s]=(0,d.useState)(l);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&n)},u={Bullet:c,SpecifiedBy:p,Badge:b,toc:m,Details:g},k="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Provider is the link with the associated integration (also known as DLL)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Provider implements Node {\n  code: ID!\n  providerData: ProviderData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  error: [Error!] @deprecated\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-providerbcodebcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Provider.",(0,o.kt)("b",null,"code"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Provider unique code")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-providerbproviderdatabcodeproviderdata-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Provider.",(0,o.kt)("b",null,"providerData"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/provider-data"},(0,o.kt)("inlineCode",{parentName:"a"},"ProviderData"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Extended Provider information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-providerbadvisemessagebcodeadvisemessage--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Provider.",(0,o.kt)("b",null,"adviseMessage"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,o.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-provideradvisemessageblevelbcodeadvisemessagelevel--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Provider.adviseMessage.",(0,o.kt)("b",null,"level"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,o.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,o.kt)("h4",{id:"code-style-fontweight-normal-providerberrorbcodeerror---"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Provider.",(0,o.kt)("b",null,"error"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/error"},(0,o.kt)("inlineCode",{parentName:"a"},"[Error!]"))," ",(0,o.kt)(b,{class:"badge badge--deprecated badge--secondary",text:"deprecated",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("admonition",{parentName:"blockquote",title:"DEPRECATED",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"deprecated from 2019-01-01. Use AdviseMessage instead"))),(0,o.kt)("h4",{id:"code-style-fontweight-normal-providerbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Provider.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Provider creation date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-providerbupdatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Provider.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Provider last update date")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"node-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/admin-mutation"},(0,o.kt)("inlineCode",{parentName:"a"},"AdminMutation"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,o.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);