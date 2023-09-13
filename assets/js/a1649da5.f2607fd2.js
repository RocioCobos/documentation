"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),b=i(a),g=l,u=b["".concat(c,".").concat(g)]||b[g]||p[g]||o;return a?n.createElement(u,r(r({ref:t},s),{},{components:a})):n.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=g;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[b]="string"==typeof e?e:l,r[1]=d;for(var i=2;i<o;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},43703:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>b,assets:()=>i,contentTitle:()=>d,default:()=>k,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var n=a(87462),l=a(67294),o=a(3905);const r={id:"alert-data",title:"AlertData",hide_table_of_contents:!1},d=void 0,c={unversionedId:"objects/alert-data",id:"objects/alert-data",title:"AlertData",description:"No description",source:"@site/api/objects/alert-data.mdx",sourceDirName:"objects",slug:"/objects/alert-data",permalink:"/api/objects/alert-data",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-data",title:"AlertData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertConnection",permalink:"/api/objects/alert-connection"},next:{title:"AlertEdge",permalink:"/api/objects/alert-edge"}},i={},s=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertdatabcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertdatabnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.<b>description</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertdatabdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.<b>configuration</b></code><Bullet /><code>AlertConfiguration!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-alertdatabconfigurationbcodealertconfiguration--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertdatabisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.<b>history</b></code><Bullet /><code>AlertConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-alertdatabhistorybcodealertconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.history.<b>filter</b></code><Bullet /><code>AlertFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertdatahistorybfilterbcodealertfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.<b>editor</b></code><Bullet /><code>Member!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-alertdatabeditorbcodemember--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.<b>events</b></code><Bullet /><code>AlertEventConnection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-alertdatabeventsbcodealerteventconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.events.<b>filter</b></code><Bullet /><code>AlertFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-alertdataeventsbfilterbcodealertfilterinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>AlertData.<b>group</b></code><Bullet /><code>Group!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-alertdatabgroupbcodegroup--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:d=!1}=e;const[c,i]=(0,l.useState)(d);return(0,o.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&r)},m={Bullet:s,SpecifiedBy:b,Badge:p,toc:g,Details:u},y="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AlertData {\n  code: ID!\n  name: String\n  description: String\n  configuration: AlertConfiguration!\n  isActive: Boolean!\n  history(relay: RelayInput, filter: AlertFilterInput): AlertConnection!\n  editor: Member!\n  events(relay: RelayInput, filter: AlertFilterInput): AlertEventConnection!\n  group: Group!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertdatabcodebcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.",(0,o.kt)("b",null,"code"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertdatabnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.",(0,o.kt)("b",null,"name"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Alert name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertdatabdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.",(0,o.kt)("b",null,"description"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Alert description")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertdatabconfigurationbcodealertconfiguration--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.",(0,o.kt)("b",null,"configuration"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/alert-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertConfiguration!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Alert configuration")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertdatabisactivebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.",(0,o.kt)("b",null,"isActive"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates if the alert is being checked by the service.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertdatabhistorybcodealertconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.",(0,o.kt)("b",null,"history"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/alert-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertConnection!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Records of each update made of the alert"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-alertdatahistorybrelaybcoderelayinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.history.",(0,o.kt)("b",null,"relay"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/relay-input"},(0,o.kt)("inlineCode",{parentName:"a"},"RelayInput"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-alertdatahistorybfilterbcodealertfilterinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.history.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/alert-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertFilterInput"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertdatabeditorbcodemember--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.",(0,o.kt)("b",null,"editor"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/member"},(0,o.kt)("inlineCode",{parentName:"a"},"Member!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Member has edit the actual alert data")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertdatabeventsbcodealerteventconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.",(0,o.kt)("b",null,"events"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/alert-event-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertEventConnection!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Records of the last 10 events triggered"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-alertdataeventsbrelaybcoderelayinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.events.",(0,o.kt)("b",null,"relay"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/relay-input"},(0,o.kt)("inlineCode",{parentName:"a"},"RelayInput"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-alertdataeventsbfilterbcodealertfilterinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.events.",(0,o.kt)("b",null,"filter"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/alert-filter-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertFilterInput"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertdatabgroupbcodegroup--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertData.",(0,o.kt)("b",null,"group"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/group"},(0,o.kt)("inlineCode",{parentName:"a"},"Group!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Group where the alert is saved")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/alert"},(0,o.kt)("inlineCode",{parentName:"a"},"Alert"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);