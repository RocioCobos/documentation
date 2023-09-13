"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56371],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(n),d=o,y=u["".concat(l,".").concat(d)]||u[d]||g[d]||r;return n?a.createElement(y,i(i({ref:e},p),{},{components:n})):a.createElement(y,i({ref:e},p))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92653:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>g,Bullet:()=>p,Details:()=>y,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),o=n(67294),r=n(3905);const i={id:"stats-aggregation-connection-group-by-input",title:"StatsAggregationConnectionGroupByInput",hide_table_of_contents:!1},s=void 0,l={unversionedId:"inputs/stats-aggregation-connection-group-by-input",id:"inputs/stats-aggregation-connection-group-by-input",title:"StatsAggregationConnectionGroupByInput",description:"Data able to retrieve stats",source:"@site/api/inputs/stats-aggregation-connection-group-by-input.mdx",sourceDirName:"inputs",slug:"/inputs/stats-aggregation-connection-group-by-input",permalink:"/api/inputs/stats-aggregation-connection-group-by-input",draft:!1,tags:[],version:"current",frontMatter:{id:"stats-aggregation-connection-group-by-input",title:"StatsAggregationConnectionGroupByInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SpeedUpdateAllAccessesWhereInput",permalink:"/api/inputs/speed-update-all-accesses-where-input"},next:{title:"StatsAggregationConnectionWhereInput",permalink:"/api/inputs/stats-aggregation-connection-where-input"}},c={},p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=t=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),g=t=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:t.class},t.text)),d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StatsAggregationConnectionGroupByInput.<b>data</b></code><Bullet /><code>[StatsDataGroupBy!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-statsaggregationconnectiongroupbyinputbdatabcodestatsdatagroupby--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StatsAggregationConnectionGroupByInput.<b>time</b></code><Bullet /><code>StatsTimeGroupBy</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-statsaggregationconnectiongroupbyinputbtimebcodestatstimegroupby-",level:4}],y=t=>{let{dataOpen:e,dataClose:n,children:i,startOpen:s=!1}=t;const[l,c]=(0,o.useState)(s);return(0,r.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:t=>{t.preventDefault(),c((t=>!t))},style:{listStyle:"none"}},l?e:n),l&&i)},m={Bullet:p,SpecifiedBy:u,Badge:g,toc:d,Details:y},b="wrapper";function f(t){let{components:e,...n}=t;return(0,r.kt)(b,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Data able to retrieve stats"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input StatsAggregationConnectionGroupByInput {\n  data: [StatsDataGroupBy!]\n  time: StatsTimeGroupBy\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-statsaggregationconnectiongroupbyinputbdatabcodestatsdatagroupby--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StatsAggregationConnectionGroupByInput.",(0,r.kt)("b",null,"data"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/stats-data-group-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[StatsDataGroupBy!]"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To group by data")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-statsaggregationconnectiongroupbyinputbtimebcodestatstimegroupby-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"StatsAggregationConnectionGroupByInput.",(0,r.kt)("b",null,"time"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/stats-time-group-by"},(0,r.kt)("inlineCode",{parentName:"a"},"StatsTimeGroupBy"))," ",(0,r.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To group data by time")))}f.isMDXComponent=!0}}]);