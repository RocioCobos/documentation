"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49422],{3905:(t,a,e)=>{e.d(a,{Zo:()=>l,kt:()=>u});var i=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function r(t,a){if(null==t)return{};var e,i,n=function(t,a){if(null==t)return{};var e,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)e=o[i],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var s=i.createContext({}),f=function(t){var a=i.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):c(c({},a),t)),e},l=function(t){var a=f(t.components);return i.createElement(s.Provider,{value:a},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(t,a){var e=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,l=r(t,["components","mdxType","originalType","parentName"]),p=f(e),m=n,u=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return e?i.createElement(u,c(c({ref:a},l),{},{components:e})):i.createElement(u,c({ref:a},l))}));function u(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var o=e.length,c=new Array(o);c[0]=m;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=t,r[p]="string"==typeof t?t:n,c[1]=r;for(var f=2;f<o;f++)c[f]=e[f];return i.createElement.apply(null,c)}return i.createElement.apply(null,e)}m.displayName="MDXCreateElement"},91517:(t,a,e)=>{e.r(a),e.d(a,{Badge:()=>d,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>p,assets:()=>f,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>m});var i=e(87462),n=e(67294),o=e(3905);const c={id:"traffic-optimization-mutation",title:"TrafficOptimizationMutation",hide_table_of_contents:!1},r=void 0,s={unversionedId:"objects/traffic-optimization-mutation",id:"objects/traffic-optimization-mutation",title:"TrafficOptimizationMutation",description:"No description",source:"@site/api/objects/traffic-optimization-mutation.mdx",sourceDirName:"objects",slug:"/objects/traffic-optimization-mutation",permalink:"/api/objects/traffic-optimization-mutation",draft:!1,tags:[],version:"current",frontMatter:{id:"traffic-optimization-mutation",title:"TrafficOptimizationMutation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TrafficOptimizationImprovements",permalink:"/api/objects/traffic-optimization-improvements"},next:{title:"TrafficOptimizationOrganization",permalink:"/api/objects/traffic-optimization-organization"}},f={},l=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=t=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),d=t=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:t.class},t.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.<b>createTrafficOptimizationAccess</b></code><Bullet /><code>TrafficOptimizationAccess</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationbcreatetrafficoptimizationaccessbcodetrafficoptimizationaccess-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.<b>activateTrafficOptimizationAccess</b></code><Bullet /><code>TrafficOptimizationAccess</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationbactivatetrafficoptimizationaccessbcodetrafficoptimizationaccess-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.activateTrafficOptimizationAccess.<b>data</b></code><Bullet /><code>TrafficOptimizationUpdateAccessDataInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationactivatetrafficoptimizationaccessbdatabcodetrafficoptimizationupdateaccessdatainput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.<b>deactivateTrafficOptimizationAccess</b></code><Bullet /><code>TrafficOptimizationAccess</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationbdeactivatetrafficoptimizationaccessbcodetrafficoptimizationaccess-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.deactivateTrafficOptimizationAccess.<b>data</b></code><Bullet /><code>TrafficOptimizationUpdateAccessDataInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationdeactivatetrafficoptimizationaccessbdatabcodetrafficoptimizationupdateaccessdatainput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.<b>updateTrafficOptimizationAccessCriteria</b></code><Bullet /><code>TrafficOptimizationAccess</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationbupdatetrafficoptimizationaccesscriteriabcodetrafficoptimizationaccess-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.updateTrafficOptimizationAccessCriteria.<b>data</b></code><Bullet /><code>TrafficOptimizationUpdateAccessCriteriaDataInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationupdatetrafficoptimizationaccesscriteriabdatabcodetrafficoptimizationupdateaccesscriteriadatainput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.<b>createTrafficOptimizationAllAccesses</b></code><Bullet /><code>TrafficOptimizationConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationbcreatetrafficoptimizationallaccessesbcodetrafficoptimizationconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.<b>activateTrafficOptimizationAllAccesses</b></code><Bullet /><code>TrafficOptimizationConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationbactivatetrafficoptimizationallaccessesbcodetrafficoptimizationconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.activateTrafficOptimizationAllAccesses.<b>data</b></code><Bullet /><code>TrafficOptimizationUpdateAllAccessesDataInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationactivatetrafficoptimizationallaccessesbdatabcodetrafficoptimizationupdateallaccessesdatainput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.<b>deactivateTrafficOptimizationAllAccesses</b></code><Bullet /><code>TrafficOptimizationConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationbdeactivatetrafficoptimizationallaccessesbcodetrafficoptimizationconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.deactivateTrafficOptimizationAllAccesses.<b>data</b></code><Bullet /><code>TrafficOptimizationUpdateAllAccessesDataInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationdeactivatetrafficoptimizationallaccessesbdatabcodetrafficoptimizationupdateallaccessesdatainput--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.<b>updateTrafficOptimizationAllAccessesCriteria</b></code><Bullet /><code>TrafficOptimizationConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationbupdatetrafficoptimizationallaccessescriteriabcodetrafficoptimizationconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TrafficOptimizationMutation.updateTrafficOptimizationAllAccessesCriteria.<b>data</b></code><Bullet /><code>TrafficOptimizationUpdateAllAccessesCriteriaDataInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-trafficoptimizationmutationupdatetrafficoptimizationallaccessescriteriabdatabcodetrafficoptimizationupdateallaccessescriteriadatainput--",level:5},{value:"Returned by",id:"returned-by",level:3}],u=t=>{let{dataOpen:a,dataClose:e,children:c,startOpen:r=!1}=t;const[s,f]=(0,n.useState)(r);return(0,o.kt)("details",(0,i.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:t=>{t.preventDefault(),f((t=>!t))},style:{listStyle:"none"}},s?a:e),s&&c)},b={Bullet:l,SpecifiedBy:p,Badge:d,toc:m,Details:u},z="wrapper";function g(t){let{components:a,...e}=t;return(0,o.kt)(z,(0,i.Z)({},b,e,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TrafficOptimizationMutation {\n  createTrafficOptimizationAccess(\n    data: TrafficOptimizationCreateAccessInput!\n  ): TrafficOptimizationAccess\n  activateTrafficOptimizationAccess(\n    where: TrafficOptimizationUpdateAccessWhereInput!\n    data: TrafficOptimizationUpdateAccessDataInput!\n  ): TrafficOptimizationAccess\n  deactivateTrafficOptimizationAccess(\n    where: TrafficOptimizationUpdateAccessWhereInput!\n    data: TrafficOptimizationUpdateAccessDataInput!\n  ): TrafficOptimizationAccess\n  updateTrafficOptimizationAccessCriteria(\n    where: TrafficOptimizationUpdateAccessWhereInput!\n    data: TrafficOptimizationUpdateAccessCriteriaDataInput!\n  ): TrafficOptimizationAccess\n  createTrafficOptimizationAllAccesses(\n    data: TrafficOptimizationCreateAllAccessesInput!\n  ): TrafficOptimizationConnection\n  activateTrafficOptimizationAllAccesses(\n    where: TrafficOptimizationUpdateAllAccessesWhereInput!\n    data: TrafficOptimizationUpdateAllAccessesDataInput!\n  ): TrafficOptimizationConnection\n  deactivateTrafficOptimizationAllAccesses(\n    where: TrafficOptimizationUpdateAllAccessesWhereInput!\n    data: TrafficOptimizationUpdateAllAccessesDataInput!\n  ): TrafficOptimizationConnection\n  updateTrafficOptimizationAllAccessesCriteria(\n    where: TrafficOptimizationUpdateAllAccessesWhereInput!\n    data: TrafficOptimizationUpdateAllAccessesCriteriaDataInput!\n  ): TrafficOptimizationConnection\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationmutationbcreatetrafficoptimizationaccessbcodetrafficoptimizationaccess-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.",(0,o.kt)("b",null,"createTrafficOptimizationAccess"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-access"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAccess"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Creates a new Traffic Optimization configuration for a given access"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationmutationcreatetrafficoptimizationaccessbdatabcodetrafficoptimizationcreateaccessinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.createTrafficOptimizationAccess.",(0,o.kt)("b",null,"data"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-create-access-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationCreateAccessInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationmutationbactivatetrafficoptimizationaccessbcodetrafficoptimizationaccess-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.",(0,o.kt)("b",null,"activateTrafficOptimizationAccess"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-access"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAccess"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Activates the Traffic Optimization Tool for a given access"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationmutationactivatetrafficoptimizationaccessbwherebcodetrafficoptimizationupdateaccesswhereinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.activateTrafficOptimizationAccess.",(0,o.kt)("b",null,"where"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-access-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAccessWhereInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationmutationactivatetrafficoptimizationaccessbdatabcodetrafficoptimizationupdateaccessdatainput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.activateTrafficOptimizationAccess.",(0,o.kt)("b",null,"data"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-access-data-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAccessDataInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationmutationbdeactivatetrafficoptimizationaccessbcodetrafficoptimizationaccess-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.",(0,o.kt)("b",null,"deactivateTrafficOptimizationAccess"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-access"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAccess"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Deactivates the Traffic Optimization Tool for a given access"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationmutationdeactivatetrafficoptimizationaccessbwherebcodetrafficoptimizationupdateaccesswhereinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.deactivateTrafficOptimizationAccess.",(0,o.kt)("b",null,"where"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-access-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAccessWhereInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationmutationdeactivatetrafficoptimizationaccessbdatabcodetrafficoptimizationupdateaccessdatainput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.deactivateTrafficOptimizationAccess.",(0,o.kt)("b",null,"data"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-access-data-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAccessDataInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationmutationbupdatetrafficoptimizationaccesscriteriabcodetrafficoptimizationaccess-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.",(0,o.kt)("b",null,"updateTrafficOptimizationAccessCriteria"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-access"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationAccess"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Updates the Traffic Optimization criteria field for a given access"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationmutationupdatetrafficoptimizationaccesscriteriabwherebcodetrafficoptimizationupdateaccesswhereinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.updateTrafficOptimizationAccessCriteria.",(0,o.kt)("b",null,"where"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-access-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAccessWhereInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationmutationupdatetrafficoptimizationaccesscriteriabdatabcodetrafficoptimizationupdateaccesscriteriadatainput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.updateTrafficOptimizationAccessCriteria.",(0,o.kt)("b",null,"data"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-access-criteria-data-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAccessCriteriaDataInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationmutationbcreatetrafficoptimizationallaccessesbcodetrafficoptimizationconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.",(0,o.kt)("b",null,"createTrafficOptimizationAllAccesses"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConnection"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Creates a new Traffic Optimization configuration for all of the accesses of a given connection"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationmutationcreatetrafficoptimizationallaccessesbdatabcodetrafficoptimizationcreateallaccessesinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.createTrafficOptimizationAllAccesses.",(0,o.kt)("b",null,"data"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-create-all-accesses-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationCreateAllAccessesInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationmutationbactivatetrafficoptimizationallaccessesbcodetrafficoptimizationconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.",(0,o.kt)("b",null,"activateTrafficOptimizationAllAccesses"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConnection"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Activates the Traffic Optimization Tool for all of the accesses of a given connection"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationmutationactivatetrafficoptimizationallaccessesbwherebcodetrafficoptimizationupdateallaccesseswhereinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.activateTrafficOptimizationAllAccesses.",(0,o.kt)("b",null,"where"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-all-accesses-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAllAccessesWhereInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationmutationactivatetrafficoptimizationallaccessesbdatabcodetrafficoptimizationupdateallaccessesdatainput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.activateTrafficOptimizationAllAccesses.",(0,o.kt)("b",null,"data"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-all-accesses-data-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAllAccessesDataInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationmutationbdeactivatetrafficoptimizationallaccessesbcodetrafficoptimizationconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.",(0,o.kt)("b",null,"deactivateTrafficOptimizationAllAccesses"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConnection"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Deactivates the Traffic Optimization Tool for all of the accesses of a given connection"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationmutationdeactivatetrafficoptimizationallaccessesbwherebcodetrafficoptimizationupdateallaccesseswhereinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.deactivateTrafficOptimizationAllAccesses.",(0,o.kt)("b",null,"where"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-all-accesses-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAllAccessesWhereInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationmutationdeactivatetrafficoptimizationallaccessesbdatabcodetrafficoptimizationupdateallaccessesdatainput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.deactivateTrafficOptimizationAllAccesses.",(0,o.kt)("b",null,"data"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-all-accesses-data-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAllAccessesDataInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-trafficoptimizationmutationbupdatetrafficoptimizationallaccessescriteriabcodetrafficoptimizationconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.",(0,o.kt)("b",null,"updateTrafficOptimizationAllAccessesCriteria"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/traffic-optimization-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationConnection"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Updates the Traffic Optimization criteria field for all of the accesses of a given connection"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-trafficoptimizationmutationupdatetrafficoptimizationallaccessescriteriabwherebcodetrafficoptimizationupdateallaccesseswhereinput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.updateTrafficOptimizationAllAccessesCriteria.",(0,o.kt)("b",null,"where"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-all-accesses-where-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAllAccessesWhereInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,o.kt)("h5",{id:"code-style-fontweight-normal-trafficoptimizationmutationupdatetrafficoptimizationallaccessescriteriabdatabcodetrafficoptimizationupdateallaccessescriteriadatainput--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TrafficOptimizationMutation.updateTrafficOptimizationAllAccessesCriteria.",(0,o.kt)("b",null,"data"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api/inputs/traffic-optimization-update-all-accesses-criteria-data-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TrafficOptimizationUpdateAllAccessesCriteriaDataInput!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/mutations/traffic-optimization"},(0,o.kt)("inlineCode",{parentName:"a"},"trafficOptimization"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);