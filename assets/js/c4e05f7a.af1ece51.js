"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26243],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=i(a),u=n,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:n,l[1]=d;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85662:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(87462),n=a(67294),o=a(3905);const l={id:"metadata-amend-remarks",title:"MetadataAmendRemarks",hide_table_of_contents:!1},d=void 0,s={unversionedId:"objects/metadata-amend-remarks",id:"objects/metadata-amend-remarks",title:"MetadataAmendRemarks",description:"No description",source:"@site/api/objects/metadata-amend-remarks.mdx",sourceDirName:"objects",slug:"/objects/metadata-amend-remarks",permalink:"/api/objects/metadata-amend-remarks",draft:!1,tags:[],version:"current",frontMatter:{id:"metadata-amend-remarks",title:"MetadataAmendRemarks",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MetadataAmendPaxes",permalink:"/api/objects/metadata-amend-paxes"},next:{title:"MetadataBeds",permalink:"/api/objects/metadata-beds"}},i={},c=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MetadataAmendRemarks.<b>allowsAmendRemarks</b></code><Bullet /><code>ReviewedBool!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-metadataamendremarksballowsamendremarksbcodereviewedbool--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:d=!1}=e;const[s,i]=(0,n.useState)(d);return(0,o.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},f={Bullet:c,SpecifiedBy:m,Badge:p,toc:u,Details:b},k="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(k,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type MetadataAmendRemarks {\n  allowsAmendRemarks: ReviewedBool!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-metadataamendremarksballowsamendremarksbcodereviewedbool--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MetadataAmendRemarks.",(0,o.kt)("b",null,"allowsAmendRemarks"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/reviewed-bool"},(0,o.kt)("inlineCode",{parentName:"a"},"ReviewedBool!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/metadata-data"},(0,o.kt)("inlineCode",{parentName:"a"},"MetadataData"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);