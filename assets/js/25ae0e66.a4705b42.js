"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},90913:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var a=n(87462),r=n(67294),l=n(3905);const o={id:"alert-hub-status-input",title:"AlertHubStatusInput",hide_table_of_contents:!1},u=void 0,i={unversionedId:"inputs/alert-hub-status-input",id:"inputs/alert-hub-status-input",title:"AlertHubStatusInput",description:"No description",source:"@site/api/inputs/alert-hub-status-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-hub-status-input",permalink:"/api/inputs/alert-hub-status-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-hub-status-input",title:"AlertHubStatusInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertGroupInput",permalink:"/api/inputs/alert-group-input"},next:{title:"AlertNotificationsInput",permalink:"/api/inputs/alert-notifications-input"}},s={},c=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertHubStatusInput.<b>code</b></code><Bullet /><code>HubStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-alerthubstatusinputbcodebcodehubstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertHubStatusInput.<b>isInclusive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alerthubstatusinputbisinclusivebcodeboolean--",level:4},{value:"Member Of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:u=!1}=e;const[i,s]=(0,r.useState)(u);return(0,l.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},f={Bullet:c,SpecifiedBy:p,Badge:d,toc:b,Details:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertHubStatusInput {\n  code: HubStatus!\n  isInclusive: Boolean!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alerthubstatusinputbcodebcodehubstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertHubStatusInput.",(0,l.kt)("b",null,"code"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/hub-status"},(0,l.kt)("inlineCode",{parentName:"a"},"HubStatus!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Hub status code")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-alerthubstatusinputbisinclusivebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AlertHubStatusInput.",(0,l.kt)("b",null,"isInclusive"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Can be filtered traffic setting as inclusive or excludent")),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/inputs/alert-common-configuration-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertCommonConfigurationInput"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/inputs/alert-update-common-configuration-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AlertUpdateCommonConfigurationInput"))," ",(0,l.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);