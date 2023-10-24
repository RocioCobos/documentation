"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=d(a),c=r,g=l["".concat(u,".").concat(c)]||l[c]||h[c]||o;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30820:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>p,Details:()=>g,SpecifiedBy:()=>l,assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(87462),r=a(67294),o=a(3905);const s={id:"asset-update-many-through-updating-other-subentity",title:"AssetUpdateManyThroughUpdatingOtherSubentity",hide_table_of_contents:!1},i=void 0,u={unversionedId:"inputs/asset-update-many-through-updating-other-subentity",id:"inputs/asset-update-many-through-updating-other-subentity",title:"AssetUpdateManyThroughUpdatingOtherSubentity",description:"No description",source:"@site/api/inputs/asset-update-many-through-updating-other-subentity.mdx",sourceDirName:"inputs",slug:"/inputs/asset-update-many-through-updating-other-subentity",permalink:"/api/inputs/asset-update-many-through-updating-other-subentity",draft:!1,tags:[],version:"current",frontMatter:{id:"asset-update-many-through-updating-other-subentity",title:"AssetUpdateManyThroughUpdatingOtherSubentity",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AssetUpdateInput",permalink:"/api/inputs/asset-update-input"},next:{title:"AssetUpdateOneThroughUpdatingOTherSubentity",permalink:"/api/inputs/asset-update-one-through-updating-other-subentity"}},d={},p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AssetUpdateManyThroughUpdatingOtherSubentity.<b>create</b></code><Bullet /><code>[AssetCreateThroughCreatingOtherSubentity!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-assetupdatemanythroughupdatingothersubentitybcreatebcodeassetcreatethroughcreatingothersubentity--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AssetUpdateManyThroughUpdatingOtherSubentity.<b>delete</b></code><Bullet /><code>[AssetWhereUniqueInput!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-assetupdatemanythroughupdatingothersubentitybdeletebcodeassetwhereuniqueinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AssetUpdateManyThroughUpdatingOtherSubentity.<b>update</b></code><Bullet /><code>[AssetUpdateOneThroughUpdatingOTherSubentity!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-assetupdatemanythroughupdatingothersubentitybupdatebcodeassetupdateonethroughupdatingothersubentity--",level:4},{value:"Member of",id:"member-of",level:3}],g=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:i=!1}=e;const[u,d]=(0,r.useState)(i);return(0,o.kt)("details",(0,n.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},u?t:a),u&&s)},y={Bullet:p,SpecifiedBy:l,Badge:h,toc:c,Details:g},b="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input AssetUpdateManyThroughUpdatingOtherSubentity {\n  create: [AssetCreateThroughCreatingOtherSubentity!]\n  delete: [AssetWhereUniqueInput!]\n  update: [AssetUpdateOneThroughUpdatingOTherSubentity!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-assetupdatemanythroughupdatingothersubentitybcreatebcodeassetcreatethroughcreatingothersubentity--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AssetUpdateManyThroughUpdatingOtherSubentity.",(0,o.kt)("b",null,"create"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/asset-create-through-creating-other-subentity"},(0,o.kt)("inlineCode",{parentName:"a"},"[AssetCreateThroughCreatingOtherSubentity!]"))," ",(0,o.kt)(h,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-assetupdatemanythroughupdatingothersubentitybdeletebcodeassetwhereuniqueinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AssetUpdateManyThroughUpdatingOtherSubentity.",(0,o.kt)("b",null,"delete"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/asset-where-unique-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[AssetWhereUniqueInput!]"))," ",(0,o.kt)(h,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-assetupdatemanythroughupdatingothersubentitybupdatebcodeassetupdateonethroughupdatingothersubentity--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AssetUpdateManyThroughUpdatingOtherSubentity.",(0,o.kt)("b",null,"update"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/asset-update-one-through-updating-other-subentity"},(0,o.kt)("inlineCode",{parentName:"a"},"[AssetUpdateOneThroughUpdatingOTherSubentity!]"))," ",(0,o.kt)(h,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/profile-update-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ProfileUpdateInput"))," ",(0,o.kt)(h,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);