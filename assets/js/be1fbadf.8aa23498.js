"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3645:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var a=r(87462),n=r(67294),o=r(3905);const l={id:"transport-arrival",title:"TransportArrival",hide_table_of_contents:!1},i=void 0,c={unversionedId:"objects/transport-arrival",id:"objects/transport-arrival",title:"TransportArrival",description:"The action or process of arriving of a transport vehicle in any place or location.",source:"@site/api/objects/transport-arrival.mdx",sourceDirName:"objects",slug:"/objects/transport-arrival",permalink:"/api/objects/transport-arrival",draft:!1,tags:[],version:"current",frontMatter:{id:"transport-arrival",title:"TransportArrival",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Transactions",permalink:"/api/objects/transactions"},next:{title:"TransportDeparture",permalink:"/api/objects/transport-departure"}},s={},p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TransportArrival.<b>location</b></code><Bullet /><code>LocationCode</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transportarrivalblocationbcodelocationcode-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[c,s]=(0,n.useState)(i);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},c?t:r),c&&l)},b={Bullet:p,SpecifiedBy:d,Badge:u,toc:f,Details:m},y="wrapper";function v(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The action or process of arriving of a transport vehicle in any place or location."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TransportArrival {\n  location: LocationCode\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transportarrivalblocationbcodelocationcode-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TransportArrival.",(0,o.kt)("b",null,"location"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/location-code"},(0,o.kt)("inlineCode",{parentName:"a"},"LocationCode"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/flight-segment"},(0,o.kt)("inlineCode",{parentName:"a"},"FlightSegment"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);