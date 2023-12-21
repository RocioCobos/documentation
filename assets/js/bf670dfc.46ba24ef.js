"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),y=s(n),f=r,b=y["".concat(i,".").concat(f)]||y[f]||p[f]||l;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[y]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88840:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>y,assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>f});var a=n(87462),r=n(67294),l=n(3905);const o={id:"ferry-cancel-policy",title:"FerryCancelPolicy",hide_table_of_contents:!1},c=void 0,i={unversionedId:"objects/ferry-cancel-policy",id:"objects/ferry-cancel-policy",title:"FerryCancelPolicy",description:"Information about a policy cancellation.",source:"@site/api/objects/ferry-cancel-policy.mdx",sourceDirName:"objects",slug:"/objects/ferry-cancel-policy",permalink:"/api/objects/ferry-cancel-policy",draft:!1,tags:[],version:"current",frontMatter:{id:"ferry-cancel-policy",title:"FerryCancelPolicy",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FerryCancelPenalty",permalink:"/api/objects/ferry-cancel-penalty"},next:{title:"FerryLocation",permalink:"/api/objects/ferry-location"}},s={},d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FerryCancelPolicy.<b>refundable</b></code><Bullet /><code>Boolean!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferrycancelpolicybrefundablebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryCancelPolicy.<b>cancelPenalties</b></code><Bullet /><code>[FerryCancelPenalty!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferrycancelpolicybcancelpenaltiesbcodeferrycancelpenalty--",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:c=!1}=e;const[i,s]=(0,r.useState)(c);return(0,l.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},u={Bullet:d,SpecifiedBy:y,Badge:p,toc:f,Details:b},m="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Information about a policy cancellation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type FerryCancelPolicy {\n  refundable: Boolean!\n  cancelPenalties: [FerryCancelPenalty!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ferrycancelpolicybrefundablebcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"FerryCancelPolicy.",(0,l.kt)("b",null,"refundable"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates if the option is refundable or non-refundable")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ferrycancelpolicybcancelpenaltiesbcodeferrycancelpenalty--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"FerryCancelPolicy.",(0,l.kt)("b",null,"cancelPenalties"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/ferry-cancel-penalty"},(0,l.kt)("inlineCode",{parentName:"a"},"[FerryCancelPenalty!]"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of cancellation penalties")),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/ferry-offer-data"},(0,l.kt)("inlineCode",{parentName:"a"},"FerryOfferData"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);