"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=i(r),b=l,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||n;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,o=new Array(n);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:l,o[1]=c;for(var i=2;i<n;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},55415:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>b});var a=r(87462),l=r(67294),n=r(3905);const o={id:"urls",title:"Urls",hide_table_of_contents:!1},c=void 0,s={unversionedId:"objects/urls",id:"objects/urls",title:"Urls",description:"Url s",source:"@site/api/objects/urls.mdx",sourceDirName:"objects",slug:"/objects/urls",permalink:"/api/objects/urls",draft:!1,tags:[],version:"current",frontMatter:{id:"urls",title:"Urls",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TravellerBook",permalink:"/api/objects/traveller-book"},next:{title:"UserOnboardingData",permalink:"/api/objects/user-onboarding-data"}},i={},d=()=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(l.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(l.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Urls.<b>search</b></code><Bullet /><code>URI</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-urlsbsearchbcodeuri-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Urls.<b>quote</b></code><Bullet /><code>URI</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-urlsbquotebcodeuri-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Urls.<b>book</b></code><Bullet /><code>URI</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-urlsbbookbcodeuri-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Urls.<b>generic</b></code><Bullet /><code>URI</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-urlsbgenericbcodeuri-",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:c=!1}=e;const[s,i]=(0,l.useState)(c);return(0,n.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&o)},f={Bullet:d,SpecifiedBy:u,Badge:p,toc:b,Details:m},k="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(k,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Url s"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Urls {\n  search: URI\n  quote: URI\n  book: URI\n  generic: URI\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-urlsbsearchbcodeuri-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Urls.",(0,n.kt)("b",null,"search"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/uri"},(0,n.kt)("inlineCode",{parentName:"a"},"URI"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Specific URL for Availability method.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-urlsbquotebcodeuri-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Urls.",(0,n.kt)("b",null,"quote"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/uri"},(0,n.kt)("inlineCode",{parentName:"a"},"URI"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Specific URL for Reservation method.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-urlsbbookbcodeuri-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Urls.",(0,n.kt)("b",null,"book"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/uri"},(0,n.kt)("inlineCode",{parentName:"a"},"URI"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Specific URL for Valuation method.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-urlsbgenericbcodeuri-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Urls.",(0,n.kt)("b",null,"generic"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api/scalars/uri"},(0,n.kt)("inlineCode",{parentName:"a"},"URI"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Supplier URL used for multiple methods.")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/access-data"},(0,n.kt)("inlineCode",{parentName:"a"},"AccessData"))," ",(0,n.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);