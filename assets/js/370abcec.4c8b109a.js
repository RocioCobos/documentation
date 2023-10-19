"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),g=n,u=d["".concat(s,".").concat(g)]||d[g]||m[g]||a;return r?o.createElement(u,p(p({ref:t},c),{},{components:r})):o.createElement(u,p({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},20544:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>c,Details:()=>u,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>g});var o=r(87462),n=r(67294),a=r(3905);const p={id:"hotel-xmapping-report-response",title:"HotelXMappingReportResponse",hide_table_of_contents:!1},l=void 0,s={unversionedId:"objects/hotel-xmapping-report-response",id:"objects/hotel-xmapping-report-response",title:"HotelXMappingReportResponse",description:"HOTELX MAPPING REPORT // Response",source:"@site/api/objects/hotel-xmapping-report-response.mdx",sourceDirName:"objects",slug:"/objects/hotel-xmapping-report-response",permalink:"/api/objects/hotel-xmapping-report-response",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xmapping-report-response",title:"HotelXMappingReportResponse",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXMappedCode",permalink:"/api/objects/hotel-xmapped-code"},next:{title:"HotelXMutation",permalink:"/api/objects/hotel-xmutation"}},i={},c=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),g=[{value:"HOTELX MAPPING REPORT // Response",id:"hotelx-mapping-report--response",level:2},{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXMappingReportResponse.<b>data</b></code><Bullet /><code>RetrieveHotelXMappingReport</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelxmappingreportresponsebdatabcoderetrievehotelxmappingreport-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXMappingReportResponse.<b>error</b></code><Bullet /><code>[AdviseMessage]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-hotelxmappingreportresponseberrorbcodeadvisemessage--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:r,children:p,startOpen:l=!1}=e;const[s,i]=(0,n.useState)(l);return(0,a.kt)("details",(0,o.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&p)},b={Bullet:c,SpecifiedBy:d,Badge:m,toc:g,Details:u},f="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hotelx-mapping-report--response"},"HOTELX MAPPING REPORT // Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type HotelXMappingReportResponse {\n  data: RetrieveHotelXMappingReport\n  error: [AdviseMessage]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelxmappingreportresponsebdatabcoderetrievehotelxmappingreport-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelXMappingReportResponse.",(0,a.kt)("b",null,"data"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/objects/retrieve-hotel-xmapping-report"},(0,a.kt)("inlineCode",{parentName:"a"},"RetrieveHotelXMappingReport"))," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-hotelxmappingreportresponseberrorbcodeadvisemessage--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"HotelXMappingReportResponse.",(0,a.kt)("b",null,"error"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,a.kt)("inlineCode",{parentName:"a"},"[AdviseMessage]"))," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/objects/insights-query"},(0,a.kt)("inlineCode",{parentName:"a"},"InsightsQuery"))," ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);