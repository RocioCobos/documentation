"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||l;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13249:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>f});var o=n(87462),a=n(67294),l=n(3905);const r={id:"flight-ticket-status-code",title:"FlightTicketStatusCode",hide_table_of_contents:!1},i=void 0,c={unversionedId:"enums/flight-ticket-status-code",id:"enums/flight-ticket-status-code",title:"FlightTicketStatusCode",description:"iso ND2113",source:"@site/api/enums/flight-ticket-status-code.mdx",sourceDirName:"enums",slug:"/enums/flight-ticket-status-code",permalink:"/api/enums/flight-ticket-status-code",draft:!1,tags:[],version:"current",frontMatter:{id:"flight-ticket-status-code",title:"FlightTicketStatusCode",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FlightSegmentOrderByInput",permalink:"/api/enums/flight-segment-order-by-input"},next:{title:"FolderTemplate",permalink:"/api/enums/folder-template"}},s={},d=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>FlightTicketStatusCode.<b>OPEN</b></code>",id:"code-style-fontweight-normal-flightticketstatuscodebopenbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>FlightTicketStatusCode.<b>CHECKED_IN</b></code>",id:"code-style-fontweight-normal-flightticketstatuscodebchecked_inbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>FlightTicketStatusCode.<b>VOID</b></code>",id:"code-style-fontweight-normal-flightticketstatuscodebvoidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>FlightTicketStatusCode.<b>REFUNDED</b></code>",id:"code-style-fontweight-normal-flightticketstatuscodebrefundedbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:i=!1}=e;const[c,s]=(0,a.useState)(i);return(0,l.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},k={Bullet:d,SpecifiedBy:u,Badge:p,toc:f,Details:m},g="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"iso ND2113"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum FlightTicketStatusCode {\n  OPEN\n  CHECKED_IN\n  VOID\n  REFUNDED\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-flightticketstatuscodebopenbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"FlightTicketStatusCode.",(0,l.kt)("b",null,"OPEN")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"open for use (O)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-flightticketstatuscodebchecked_inbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"FlightTicketStatusCode.",(0,l.kt)("b",null,"CHECKED_IN")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"checked in (C)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-flightticketstatuscodebvoidbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"FlightTicketStatusCode.",(0,l.kt)("b",null,"VOID")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"void (V)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-flightticketstatuscodebrefundedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"FlightTicketStatusCode.",(0,l.kt)("b",null,"REFUNDED")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"refunded (R)")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/flight-order-data"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightOrderData"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/flight-ticket"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightTicket"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);