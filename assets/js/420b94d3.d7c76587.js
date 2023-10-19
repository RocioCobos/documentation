"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98568],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},i="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=c(a),p=r,g=i["".concat(s,".").concat(p)]||i[p]||b[p]||d;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,o=new Array(d);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<d;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63994:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>m,Details:()=>g,SpecifiedBy:()=>i,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=a(67294),d=a(3905);const o={id:"member",title:"Member",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/member",id:"objects/member",title:"Member",description:"You grant access to members which can be either:",source:"@site/api/objects/member.mdx",sourceDirName:"objects",slug:"/objects/member",permalink:"/api/objects/member",draft:!1,tags:[],version:"current",frontMatter:{id:"member",title:"Member",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MemberOrganizations",permalink:"/api/objects/member-organizations"},next:{title:"MembersConnection",permalink:"/api/objects/members-connection"}},c={},m=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Member.<b>code</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-memberbcodebcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Member.<b>memberData</b></code><Bullet /><code>MemberData</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-memberbmemberdatabcodememberdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Member.<b>adviseMessage</b></code><Bullet /><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-memberbadvisemessagebcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Member.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-memberbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Member.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-memberbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Member.<b>deletedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-memberbdeletedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary" text="interface"/>',id:"node-",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[s,c]=(0,r.useState)(l);return(0,d.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&o)},u={Bullet:m,SpecifiedBy:i,Badge:b,toc:p,Details:g},k="wrapper";function y(e){let{components:t,...a}=e;return(0,d.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"You grant access to members which can be either:\nUsers: A developer, administrator or any other person from your Organization who interacts with the TravelgateX Platform. An email address can be used as the identity of a User.\nService Accounts: An application (Client) instead of an individual User. If you prefer, you can create as many Service Accounts as needed to represent different logical components of your application."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type Member implements Node {\n  code: ID!\n  memberData: MemberData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  deletedAt: DateTime!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-memberbcodebcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Member.",(0,d.kt)("b",null,"code"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-memberbmemberdatabcodememberdata-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Member.",(0,d.kt)("b",null,"memberData"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/member-data"},(0,d.kt)("inlineCode",{parentName:"a"},"MemberData"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-memberbadvisemessagebcodeadvisemessage--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Member.",(0,d.kt)("b",null,"adviseMessage"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessage!]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"List of advise messages."),(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-memberadvisemessageblevelbcodeadvisemessagelevel--"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Member.adviseMessage.",(0,d.kt)("b",null,"level"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/api/enums/advise-message-level"},(0,d.kt)("inlineCode",{parentName:"a"},"[AdviseMessageLevel]"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"}))),(0,d.kt)("h4",{id:"code-style-fontweight-normal-memberbcreatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Member.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Date created")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-memberbupdatedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Member.",(0,d.kt)("b",null,"updatedAt"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Date updated")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-memberbdeletedatbcodedatetime--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Member.",(0,d.kt)("b",null,"deletedAt"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,d.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Date deleted. This value is used to include archived members.")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"node-"},(0,d.kt)("a",{parentName:"h4",href:"/api/interfaces/node"},(0,d.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/objects/admin-mutation"},(0,d.kt)("inlineCode",{parentName:"a"},"AdminMutation"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/admin-query"},(0,d.kt)("inlineCode",{parentName:"a"},"AdminQuery"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/alert-data"},(0,d.kt)("inlineCode",{parentName:"a"},"AlertData"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/customer-agent"},(0,d.kt)("inlineCode",{parentName:"a"},"CustomerAgent"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/interfaces/group-common-data"},(0,d.kt)("inlineCode",{parentName:"a"},"GroupCommonData"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/group-data"},(0,d.kt)("inlineCode",{parentName:"a"},"GroupData"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/member-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"MemberEdge"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/organization-contact"},(0,d.kt)("inlineCode",{parentName:"a"},"OrganizationContact"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api/objects/organization-data"},(0,d.kt)("inlineCode",{parentName:"a"},"OrganizationData"))," ",(0,d.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);