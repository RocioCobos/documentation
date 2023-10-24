"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=u(n),f=l,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96196:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>f});var r=n(87462),l=n(67294),i=n(3905);const o={id:"hotel-xfilter-input",title:"HotelXFilterInput",hide_table_of_contents:!1},a=void 0,p={unversionedId:"inputs/hotel-xfilter-input",id:"inputs/hotel-xfilter-input",title:"HotelXFilterInput",description:"No description",source:"@site/api/inputs/hotel-xfilter-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xfilter-input",permalink:"/api/inputs/hotel-xfilter-input",draft:!1,tags:[],version:"current",frontMatter:{id:"hotel-xfilter-input",title:"HotelXFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"HotelXDestinationSearcherInput",permalink:"/api/inputs/hotel-xdestination-searcher-input"},next:{title:"HotelXFilterPluginTypeInput",permalink:"/api/inputs/hotel-xfilter-plugin-type-input"}},u={},c=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>HotelXFilterInput.<b>plugin</b></code><Bullet /><code>HotelXPluginFilterInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-hotelxfilterinputbpluginbcodehotelxpluginfilterinput-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:a=!1}=e;const[p,u]=(0,l.useState)(a);return(0,i.kt)("details",(0,r.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&o)},g={Bullet:c,SpecifiedBy:s,Badge:d,toc:f,Details:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input HotelXFilterInput {\n  plugin: HotelXPluginFilterInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-hotelxfilterinputbpluginbcodehotelxpluginfilterinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"HotelXFilterInput.",(0,i.kt)("b",null,"plugin"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/hotel-xplugin-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"HotelXPluginFilterInput"))," ",(0,i.kt)(d,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only is possible to specify one of this filters, it allows to filter which plugins have to be executed or excluded")))}b.isMDXComponent=!0}}]);