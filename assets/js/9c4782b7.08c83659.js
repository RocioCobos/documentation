"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=p(n),s=a,m=y["".concat(c,".").concat(s)]||y[s]||d[s]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},81795:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>y,assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=n(67294),o=n(3905);const i={id:"buyer-integration-type",title:"BuyerIntegrationType",hide_table_of_contents:!1},l=void 0,c={unversionedId:"enums/buyer-integration-type",id:"enums/buyer-integration-type",title:"BuyerIntegrationType",description:"No description",source:"@site/api/enums/buyer-integration-type.mdx",sourceDirName:"enums",slug:"/enums/buyer-integration-type",permalink:"/api/enums/buyer-integration-type",draft:!1,tags:[],version:"current",frontMatter:{id:"buyer-integration-type",title:"BuyerIntegrationType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BuyerCompanyType",permalink:"/api/enums/buyer-company-type"},next:{title:"BuyerTechSolutionCompanyType",permalink:"/api/enums/buyer-tech-solution-company-type"}},p={},u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>BuyerIntegrationType.<b>LEGACY</b></code>",id:"code-style-fontweight-normal-buyerintegrationtypeblegacybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BuyerIntegrationType.<b>HOTELX</b></code>",id:"code-style-fontweight-normal-buyerintegrationtypebhotelxbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BuyerIntegrationType.<b>CHANNELX</b></code>",id:"code-style-fontweight-normal-buyerintegrationtypebchannelxbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BuyerIntegrationType.<b>B2B_VIRTUAL_AGENCY_TOOL</b></code>",id:"code-style-fontweight-normal-buyerintegrationtypebb2b_virtual_agency_toolbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BuyerIntegrationType.<b>EASY_CONNECT</b></code>",id:"code-style-fontweight-normal-buyerintegrationtypebeasy_connectbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:i,startOpen:l=!1}=e;const[c,p]=(0,a.useState)(l);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&i)},b={Bullet:u,SpecifiedBy:y,Badge:d,toc:s,Details:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum BuyerIntegrationType {\n  LEGACY\n  HOTELX\n  CHANNELX\n  B2B_VIRTUAL_AGENCY_TOOL\n  EASY_CONNECT\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-buyerintegrationtypeblegacybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BuyerIntegrationType.",(0,o.kt)("b",null,"LEGACY")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-buyerintegrationtypebhotelxbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BuyerIntegrationType.",(0,o.kt)("b",null,"HOTELX")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-buyerintegrationtypebchannelxbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BuyerIntegrationType.",(0,o.kt)("b",null,"CHANNELX")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-buyerintegrationtypebb2b_virtual_agency_toolbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BuyerIntegrationType.",(0,o.kt)("b",null,"B2B_VIRTUAL_AGENCY_TOOL")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-buyerintegrationtypebeasy_connectbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"BuyerIntegrationType.",(0,o.kt)("b",null,"EASY_CONNECT")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/profile"},(0,o.kt)("inlineCode",{parentName:"a"},"Profile"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/profile-create-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ProfileCreateInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/profile-data"},(0,o.kt)("inlineCode",{parentName:"a"},"ProfileData"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/profile-update-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ProfileUpdateInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/traffic-optimization-all-accesses-recommendations-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAllAccessesRecommendationsWhereInput"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/traffic-optimization-recommendation-all-accesses-data"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationRecommendationAllAccessesData"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);