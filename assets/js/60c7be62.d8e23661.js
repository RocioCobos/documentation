"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45320],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>b});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=d(a),m=o,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(b,r(r({ref:e},s),{},{components:a})):n.createElement(b,r({ref:e},s))}));function b(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[u]="string"==typeof t?t:o,r[1]=c;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11389:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>p,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),o=a(67294),i=a(3905);const r={id:"activation-mutation",title:"ActivationMutation",hide_table_of_contents:!1},c=void 0,l={unversionedId:"objects/activation-mutation",id:"objects/activation-mutation",title:"ActivationMutation",description:"No description",source:"@site/api/objects/activation-mutation.mdx",sourceDirName:"objects",slug:"/objects/activation-mutation",permalink:"/api/objects/activation-mutation",draft:!1,tags:[],version:"current",frontMatter:{id:"activation-mutation",title:"ActivationMutation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ActivationEdge",permalink:"/api/objects/activation-edge"},next:{title:"ActivationQuery",permalink:"/api/objects/activation-query"}},d={},s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=t=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),p=t=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:t.class},t.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivationMutation.<b>connect</b></code><Bullet /><code>Activation!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activationmutationbconnectbcodeactivation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivationMutation.<b>validate</b></code><Bullet /><code>Activation</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-activationmutationbvalidatebcodeactivation-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=t=>{let{dataOpen:e,dataClose:a,children:r,startOpen:c=!1}=t;const[l,d]=(0,o.useState)(c);return(0,i.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:t=>{t.preventDefault(),d((t=>!t))},style:{listStyle:"none"}},l?e:a),l&&r)},v={Bullet:s,SpecifiedBy:u,Badge:p,toc:m,Details:b},y="wrapper";function f(t){let{components:e,...a}=t;return(0,i.kt)(y,(0,n.Z)({},v,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivationMutation {\n  connect(data: ActivationConnectInput!): Activation!\n  validate(data: ActivationValidateInput!): Activation\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activationmutationbconnectbcodeactivation--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivationMutation.",(0,i.kt)("b",null,"connect"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/activation"},(0,i.kt)("inlineCode",{parentName:"a"},"Activation!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-activationmutationconnectbdatabcodeactivationconnectinput--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivationMutation.connect.",(0,i.kt)("b",null,"data"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api/inputs/activation-connect-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ActivationConnectInput!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activationmutationbvalidatebcodeactivation-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivationMutation.",(0,i.kt)("b",null,"validate"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/objects/activation"},(0,i.kt)("inlineCode",{parentName:"a"},"Activation"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-activationmutationvalidatebdatabcodeactivationvalidateinput--"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivationMutation.validate.",(0,i.kt)("b",null,"data"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h5",href:"/api/inputs/activation-validate-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ActivationValidateInput!"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}))),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/mutations/activation"},(0,i.kt)("inlineCode",{parentName:"a"},"activation"))," ",(0,i.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);