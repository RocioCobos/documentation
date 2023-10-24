"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87027],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),k=a,b=u["".concat(i,".").concat(k)]||u[k]||d[k]||r;return o?n.createElement(b,l(l({ref:t},p),{},{components:o})):n.createElement(b,l({ref:t},p))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},30371:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var n=o(87462),a=o(67294),r=o(3905);const l={id:"book-status-type",title:"BookStatusType",hide_table_of_contents:!1},s=void 0,i={unversionedId:"enums/book-status-type",id:"enums/book-status-type",title:"BookStatusType",description:"Book status",source:"@site/api/enums/book-status-type.mdx",sourceDirName:"enums",slug:"/enums/book-status-type",permalink:"/api/enums/book-status-type",draft:!1,tags:[],version:"current",frontMatter:{id:"book-status-type",title:"BookStatusType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"BlacklistType",permalink:"/api/enums/blacklist-type"},next:{title:"BookingCriteriaType",permalink:"/api/enums/booking-criteria-type"}},c={},p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),k=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>BookStatusType.<b>OK</b></code>",id:"code-style-fontweight-normal-bookstatustypebokbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BookStatusType.<b>KO</b></code>",id:"code-style-fontweight-normal-bookstatustypebkobcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BookStatusType.<b>ON_REQUEST</b></code>",id:"code-style-fontweight-normal-bookstatustypebon_requestbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BookStatusType.<b>CANCELLED</b></code>",id:"code-style-fontweight-normal-bookstatustypebcancelledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BookStatusType.<b>UNKNOWN</b></code>",id:"code-style-fontweight-normal-bookstatustypebunknownbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>BookStatusType.<b>PENDING_COMMIT</b></code>",id:"code-style-fontweight-normal-bookstatustypebpending_commitbcode",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:o,children:l,startOpen:s=!1}=e;const[i,c]=(0,a.useState)(s);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:o),i&&l)},m={Bullet:p,SpecifiedBy:u,Badge:d,toc:k,Details:b},y="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(y,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Book status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum BookStatusType {\n  OK\n  KO\n  ON_REQUEST\n  CANCELLED\n  UNKNOWN\n  PENDING_COMMIT\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-bookstatustypebokbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BookStatusType.",(0,r.kt)("b",null,"OK")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The reservation was completed sucessfully.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-bookstatustypebkobcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BookStatusType.",(0,r.kt)("b",null,"KO")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-bookstatustypebon_requestbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BookStatusType.",(0,r.kt)("b",null,"ON_REQUEST")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The reservation was successfully completed; however, the product is currently unavailable, placing the reservation on a waiting list.\nIt is the client's responsibility to confirm the status of the booking.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-bookstatustypebcancelledbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BookStatusType.",(0,r.kt)("b",null,"CANCELLED")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The status of the booking is cancelled.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-bookstatustypebunknownbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BookStatusType.",(0,r.kt)("b",null,"UNKNOWN")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The reservation process itself may encounter problems, leading to an unknown reservation status.\nIt is the client's responsibility to verify the booking's status.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-bookstatustypebpending_commitbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"BookStatusType.",(0,r.kt)("b",null,"PENDING_COMMIT")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The payment has been confirmed in provider s side, but is necessary make a commit in order to confirm the reservation.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/booking-aggregation"},(0,r.kt)("inlineCode",{parentName:"a"},"BookingAggregation"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/booking-detail"},(0,r.kt)("inlineCode",{parentName:"a"},"BookingDetail"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/bookings-report-where-input"},(0,r.kt)("inlineCode",{parentName:"a"},"BookingsReportWhereInput"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-booking-detail"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelBookingDetail"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-cancel-detail"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelCancelDetail"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/hotel-commit-details"},(0,r.kt)("inlineCode",{parentName:"a"},"HotelCommitDetails"))," ",(0,r.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);