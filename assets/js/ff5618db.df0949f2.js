"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43692],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),y=d(a),u=n,m=y["".concat(s,".").concat(u)]||y[u]||p[u]||o;return a?r.createElement(m,l(l({ref:t},i),{},{components:a})):r.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[y]="string"==typeof e?e:n,l[1]=c;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22124:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>y,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(87462),n=a(67294),o=a(3905);const l={id:"ferry-cancel-payload",title:"FerryCancelPayload",hide_table_of_contents:!1},c=void 0,s={unversionedId:"objects/ferry-cancel-payload",id:"objects/ferry-cancel-payload",title:"FerryCancelPayload",description:"No description",source:"@site/api/objects/ferry-cancel-payload.mdx",sourceDirName:"objects",slug:"/objects/ferry-cancel-payload",permalink:"/api/objects/ferry-cancel-payload",draft:!1,tags:[],version:"current",frontMatter:{id:"ferry-cancel-payload",title:"FerryCancelPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FerryAccommodation",permalink:"/api/objects/ferry-accommodation"},next:{title:"FerryLocation",permalink:"/api/objects/ferry-location"}},d={},i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FerryCancelPayload.<b>adviseMessages</b></code><Bullet /><code>[AdviseMessage]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-ferrycancelpayloadbadvisemessagesbcodeadvisemessage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryCancelPayload.<b>locator</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-ferrycancelpayloadblocatorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FerryCancelPayload.<b>status</b></code><Bullet /><code>CancelStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-ferrycancelpayloadbstatusbcodecancelstatus--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[s,d]=(0,n.useState)(c);return(0,o.kt)("details",(0,r.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&l)},f={Bullet:i,SpecifiedBy:y,Badge:p,toc:u,Details:m},b="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type FerryCancelPayload {\n  adviseMessages: [AdviseMessage]\n  locator: String\n  status: CancelStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrycancelpayloadbadvisemessagesbcodeadvisemessage--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerryCancelPayload.",(0,o.kt)("b",null,"adviseMessages"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/advise-message"},(0,o.kt)("inlineCode",{parentName:"a"},"[AdviseMessage]"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrycancelpayloadblocatorbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerryCancelPayload.",(0,o.kt)("b",null,"locator"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ferrycancelpayloadbstatusbcodecancelstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FerryCancelPayload.",(0,o.kt)("b",null,"status"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/cancel-status"},(0,o.kt)("inlineCode",{parentName:"a"},"CancelStatus!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/transport-mutation"},(0,o.kt)("inlineCode",{parentName:"a"},"TransportMutation"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);