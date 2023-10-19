"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=d,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(b,r(r({ref:t},s),{},{components:a})):n.createElement(b,r({ref:t},s))}));function b(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:d,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72721:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),d=a(67294),o=a(3905);const r={id:"metadata-candidate",title:"MetadataCandidate",hide_table_of_contents:!1},l=void 0,i={unversionedId:"objects/metadata-candidate",id:"objects/metadata-candidate",title:"MetadataCandidate",description:"Guest restrictions for each candidate type in a room.",source:"@site/api/objects/metadata-candidate.mdx",sourceDirName:"objects",slug:"/objects/metadata-candidate",permalink:"/api/objects/metadata-candidate",draft:!1,tags:[],version:"current",frontMatter:{id:"metadata-candidate",title:"MetadataCandidate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MetadataCancel",permalink:"/api/objects/metadata-cancel"},next:{title:"MetadataConnection",permalink:"/api/objects/metadata-connection"}},c={},s=()=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(d.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataCandidate.<b>min</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-metadatacandidatebminbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataCandidate.<b>max</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-metadatacandidatebmaxbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataCandidate.<b>type</b></code><Bullet /><code>HotelPaxType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-metadatacandidatebtypebcodehotelpaxtype--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:l=!1}=e;const[i,c]=(0,d.useState)(l);return(0,o.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&r)},y={Bullet:s,SpecifiedBy:p,Badge:m,toc:u,Details:b},f="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Guest restrictions for each candidate type in a room."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type MetadataCandidate {\n  min: Int!\n  max: Int!\n  type: HotelPaxType!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-metadatacandidatebminbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MetadataCandidate.",(0,o.kt)("b",null,"min"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Minimum required number of guest of this type.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-metadatacandidatebmaxbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MetadataCandidate.",(0,o.kt)("b",null,"max"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Maximum number of guest of this type allowed.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-metadatacandidatebtypebcodehotelpaxtype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MetadataCandidate.",(0,o.kt)("b",null,"type"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/hotel-pax-type"},(0,o.kt)("inlineCode",{parentName:"a"},"HotelPaxType!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Candidate classification type.(Adult, Child, Infant)")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/reviwed-pax-type-range-in-room-candidates"},(0,o.kt)("inlineCode",{parentName:"a"},"ReviwedPaxTypeRangeInRoomCandidates"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);