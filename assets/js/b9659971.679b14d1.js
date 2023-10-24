"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,u=d["".concat(l,".").concat(m)]||d[m]||g[m]||p;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,r=new Array(p);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<p;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63909:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),i=n(67294),p=n(3905);const r={id:"mapping-mutation",title:"MappingMutation",hide_table_of_contents:!1},o=void 0,l={unversionedId:"objects/mapping-mutation",id:"objects/mapping-mutation",title:"MappingMutation",description:"No description",source:"@site/api/objects/mapping-mutation.mdx",sourceDirName:"objects",slug:"/objects/mapping-mutation",permalink:"/api/objects/mapping-mutation",draft:!1,tags:[],version:"current",frontMatter:{id:"mapping-mutation",title:"MappingMutation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MappingInscription",permalink:"/api/objects/mapping-inscription"},next:{title:"Mapping",permalink:"/api/objects/mapping"}},c={},s=()=>(0,p.kt)(i.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,p.kt)(i.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,p.kt)(i.Fragment,null,(0,p.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MappingMutation.<b>inscribeSetMapping</b></code><Bullet /><code>MappingInscription!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mappingmutationbinscribesetmappingbcodemappinginscription--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MappingMutation.<b>inscribeDeleteMapping</b></code><Bullet /><code>MappingInscription!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-mappingmutationbinscribedeletemappingbcodemappinginscription--",level:4},{value:"Returned by",id:"returned-by",level:3}],u=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:o=!1}=e;const[l,c]=(0,i.useState)(o);return(0,p.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,p.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&r)},b={Bullet:s,SpecifiedBy:d,Badge:g,toc:m,Details:u},y="wrapper";function f(e){let{components:t,...n}=e;return(0,p.kt)(y,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type MappingMutation {\n  inscribeSetMapping(data: InscribeSetMappingInput!): MappingInscription!\n  inscribeDeleteMapping(data: InscribeDeleteMappingInput!): MappingInscription!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-mappingmutationbinscribesetmappingbcodemappinginscription--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"MappingMutation.",(0,p.kt)("b",null,"inscribeSetMapping"))),(0,p.kt)(s,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/api/objects/mapping-inscription"},(0,p.kt)("inlineCode",{parentName:"a"},"MappingInscription!"))," ",(0,p.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Notifies to all TGX internal services that a list of mappings has to be added"),(0,p.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-mappingmutationinscribesetmappingbdatabcodeinscribesetmappinginput--"},(0,p.kt)("a",{parentName:"h5",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"MappingMutation.inscribeSetMapping.",(0,p.kt)("b",null,"data"))),(0,p.kt)(s,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h5",href:"/api/inputs/inscribe-set-mapping-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InscribeSetMappingInput!"))," ",(0,p.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(g,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,p.kt)("h4",{id:"code-style-fontweight-normal-mappingmutationbinscribedeletemappingbcodemappinginscription--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"MappingMutation.",(0,p.kt)("b",null,"inscribeDeleteMapping"))),(0,p.kt)(s,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/api/objects/mapping-inscription"},(0,p.kt)("inlineCode",{parentName:"a"},"MappingInscription!"))," ",(0,p.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(g,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Notifies to all TGX internal services that a list of mappings has to be deleted"),(0,p.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-mappingmutationinscribedeletemappingbdatabcodeinscribedeletemappinginput--"},(0,p.kt)("a",{parentName:"h5",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"MappingMutation.inscribeDeleteMapping.",(0,p.kt)("b",null,"data"))),(0,p.kt)(s,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h5",href:"/api/inputs/inscribe-delete-mapping-input"},(0,p.kt)("inlineCode",{parentName:"a"},"InscribeDeleteMappingInput!"))," ",(0,p.kt)(g,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(g,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,p.kt)("h3",{id:"returned-by"},"Returned by"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/mutations/mapping"},(0,p.kt)("inlineCode",{parentName:"a"},"mapping"))," ",(0,p.kt)(g,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);