"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11836:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var a=n(87462),i=n(67294),r=n(3905);const o={id:"alert-notifications-input",title:"AlertNotificationsInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"inputs/alert-notifications-input",id:"inputs/alert-notifications-input",title:"AlertNotificationsInput",description:"No description",source:"@site/api/inputs/alert-notifications-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-notifications-input",permalink:"/api/inputs/alert-notifications-input",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-notifications-input",title:"AlertNotificationsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertHubStatusInput",permalink:"/api/inputs/alert-hub-status-input"},next:{title:"AlertObjectInput",permalink:"/api/inputs/alert-object-input"}},s={},p=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertNotificationsInput.<b>emails</b></code><Bullet /><code>AlertEmailsInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertnotificationsinputbemailsbcodealertemailsinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertNotificationsInput.<b>slack</b></code><Bullet /><code>AlertSlackInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertnotificationsinputbslackbcodealertslackinput-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:l=!1}=e;const[c,s]=(0,i.useState)(l);return(0,r.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&o)},b={Bullet:p,SpecifiedBy:u,Badge:d,toc:f,Details:m},k="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input AlertNotificationsInput {\n  emails: AlertEmailsInput\n  slack: AlertSlackInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertnotificationsinputbemailsbcodealertemailsinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertNotificationsInput.",(0,r.kt)("b",null,"emails"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/alert-emails-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertEmailsInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Emails to send notifications")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-alertnotificationsinputbslackbcodealertslackinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AlertNotificationsInput.",(0,r.kt)("b",null,"slack"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/alert-slack-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertSlackInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Slack to send notificarions")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/alert-common-configuration-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AlertCommonConfigurationInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);