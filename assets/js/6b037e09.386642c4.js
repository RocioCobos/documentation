"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94128],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(a),b=l,m=p["".concat(d,".").concat(b)]||p[b]||k[b]||o;return a?n.createElement(m,r(r({ref:t},i),{},{components:a})):n.createElement(m,r({ref:t},i))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[p]="string"==typeof e?e:l,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},34092:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>b});var n=a(87462),l=a(67294),o=a(3905);const r={id:"alert-slack-advanced-options",title:"AlertSlackAdvancedOptions",hide_table_of_contents:!1},c=void 0,d={unversionedId:"objects/alert-slack-advanced-options",id:"objects/alert-slack-advanced-options",title:"AlertSlackAdvancedOptions",description:"No description",source:"@site/api/objects/alert-slack-advanced-options.mdx",sourceDirName:"objects",slug:"/objects/alert-slack-advanced-options",permalink:"/api/objects/alert-slack-advanced-options",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-slack-advanced-options",title:"AlertSlackAdvancedOptions",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertRatios",permalink:"/api/objects/alert-ratios"},next:{title:"AlertSlackTitles",permalink:"/api/objects/alert-slack-titles"}},s={},i=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertSlackAdvancedOptions.<b>titles</b></code><Bullet /><code>AlertSlackTitles</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-alertslackadvancedoptionsbtitlesbcodealertslacktitles-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertSlackAdvancedOptions.<b>short</b></code><Bullet /><code>Boolean</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertslackadvancedoptionsbshortbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertSlackAdvancedOptions.<b>icon</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertslackadvancedoptionsbiconbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertSlackAdvancedOptions.<b>username</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertslackadvancedoptionsbusernamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertSlackAdvancedOptions.<b>channel</b></code><Bullet /><code>[ID!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertslackadvancedoptionsbchannelbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:c=!1}=e;const[d,s]=(0,l.useState)(c);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&r)},u={Bullet:i,SpecifiedBy:p,Badge:k,toc:b,Details:m},g="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AlertSlackAdvancedOptions {\n  titles: AlertSlackTitles\n  short: Boolean\n  icon: String\n  username: String\n  channel: [ID!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertslackadvancedoptionsbtitlesbcodealertslacktitles-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertSlackAdvancedOptions.",(0,o.kt)("b",null,"titles"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/alert-slack-titles"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertSlackTitles"))," ",(0,o.kt)(k,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertslackadvancedoptionsbshortbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertSlackAdvancedOptions.",(0,o.kt)("b",null,"short"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertslackadvancedoptionsbiconbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertSlackAdvancedOptions.",(0,o.kt)("b",null,"icon"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertslackadvancedoptionsbusernamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertSlackAdvancedOptions.",(0,o.kt)("b",null,"username"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertslackadvancedoptionsbchannelbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertSlackAdvancedOptions.",(0,o.kt)("b",null,"channel"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(k,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/alert-slack"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertSlack"))," ",(0,o.kt)(k,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);