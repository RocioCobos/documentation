"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34413],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=l,y=p["".concat(i,".").concat(u)]||p[u]||m[u]||n;return a?r.createElement(y,o(o({ref:t},c),{},{components:a})):r.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var d=2;d<n;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51006:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>y,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),l=a(67294),n=a(3905);const o={id:"system-filter",title:"SystemFilter",hide_table_of_contents:!1},s=void 0,i={unversionedId:"inputs/system-filter",id:"inputs/system-filter",title:"SystemFilter",description:'System filter for "systems" query',source:"@site/api/inputs/system-filter.mdx",sourceDirName:"inputs",slug:"/inputs/system-filter",permalink:"/api/inputs/system-filter",draft:!1,tags:[],version:"current",frontMatter:{id:"system-filter",title:"SystemFilter",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupplierWhereUniqueInput",permalink:"/api/inputs/supplier-where-unique-input"},next:{title:"ThreeDomainSecurityInput",permalink:"/api/inputs/three-domain-security-input"}},d={},c=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SystemFilter.<b>id</b></code><Bullet /><code>[ID]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-systemfilterbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SystemFilter.<b>supplier</b></code><Bullet /><code>[ID]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-systemfilterbsupplierbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SystemFilter.<b>group</b></code><Bullet /><code>[ID]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-systemfilterbgroupbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SystemFilter.<b>isActive</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-systemfilterbisactivebcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SystemFilter.<b>owner</b></code><Bullet /><code>[ID]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-systemfilterbownerbcodeid--",level:4}],y=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:s=!1}=e;const[i,d]=(0,l.useState)(s);return(0,n.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},b={Bullet:c,SpecifiedBy:p,Badge:m,toc:u,Details:y},f="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'System filter for "systems" query'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input SystemFilter {\n  id: [ID]\n  supplier: [ID]\n  group: [ID]\n  isActive: Boolean\n  owner: [ID]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-systemfilterbidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SystemFilter.",(0,n.kt)("b",null,"id"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"System ID")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-systemfilterbsupplierbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SystemFilter.",(0,n.kt)("b",null,"supplier"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Systems that contain at least one of the following supplier ids")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-systemfilterbgroupbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SystemFilter.",(0,n.kt)("b",null,"group"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Systems belonging to this GroupIDs")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-systemfilterbisactivebcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SystemFilter.",(0,n.kt)("b",null,"isActive"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"isActive filter")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-systemfilterbownerbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SystemFilter.",(0,n.kt)("b",null,"owner"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Systems Owner filter")))}g.isMDXComponent=!0}}]);