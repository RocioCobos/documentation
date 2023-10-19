"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46271],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(a),b=r,m=p["".concat(d,".").concat(b)]||p[b]||g[b]||o;return a?n.createElement(m,l(l({ref:t},i),{},{components:a})):n.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},36654:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>b});var n=a(87462),r=a(67294),o=a(3905);const l={id:"transport",title:"Transport",hide_table_of_contents:!1},s=void 0,d={unversionedId:"objects/transport",id:"objects/transport",title:"Transport",description:"No description",source:"@site/api/objects/transport.mdx",sourceDirName:"objects",slug:"/objects/transport",permalink:"/api/objects/transport",draft:!1,tags:[],version:"current",frontMatter:{id:"transport",title:"Transport",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TransportQuery",permalink:"/api/objects/transport-query"},next:{title:"TravellerBook",permalink:"/api/objects/traveller-book"}},c={},i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Transport.<b>baggageIncluded</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transportbbaggageincludedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transport.<b>baggageDescription</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transportbbaggagedescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transport.<b>ref</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transportbrefbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transport.<b>segments</b></code><Bullet /><code>[Segment!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-transportbsegmentsbcodesegment--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Transport.<b>transportType</b></code><Bullet /><code>TransportType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-transportbtransporttypebcodetransporttype-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:s=!1}=e;const[d,c]=(0,r.useState)(s);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&l)},u={Bullet:i,SpecifiedBy:p,Badge:g,toc:b,Details:m},y="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Transport {\n  baggageIncluded: Boolean!\n  baggageDescription: String\n  ref: String!\n  segments: [Segment!]\n  transportType: TransportType\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transportbbaggageincludedbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Transport.",(0,o.kt)("b",null,"baggageIncluded"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates if the baggage is included")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transportbbaggagedescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Transport.",(0,o.kt)("b",null,"baggageDescription"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Description of the baggage usually indicating limits to it")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transportbrefbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Transport.",(0,o.kt)("b",null,"ref"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ref to see where it belongs in the itinerary map (if necessary)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transportbsegmentsbcodesegment--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Transport.",(0,o.kt)("b",null,"segments"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/segment"},(0,o.kt)("inlineCode",{parentName:"a"},"[Segment!]"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"List of segments that the transport has")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-transportbtransporttypebcodetransporttype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Transport.",(0,o.kt)("b",null,"transportType"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/transport-type"},(0,o.kt)("inlineCode",{parentName:"a"},"TransportType"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates which type of transport it is (Flight, train)")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/booking-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"BookingPayload"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/book-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"BookPayload"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/quote-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"QuotePayload"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/search-option"},(0,o.kt)("inlineCode",{parentName:"a"},"SearchOption"))," ",(0,o.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);