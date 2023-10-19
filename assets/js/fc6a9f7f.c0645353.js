"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=p(r),u=n,d=f["".concat(c,".").concat(u)]||f[u]||h[u]||i;return r?a.createElement(d,s(s({ref:t},l),{},{components:r})):a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:3},s="'Search Traffic Type'",o={unversionedId:"apps/monitoring-apps/stats/what-does-search-traffic-mean",id:"apps/monitoring-apps/stats/what-does-search-traffic-mean",title:"'Search Traffic Type'",description:'You might have noticed a handy feature in the Search tab known as the "Search Traffic Type" filter. This filter comes into play when you\'re using our Speed Cache APP. By default, traffic flows directly from the Buyer to the Seller systems, which we refer to as "Basic" traffic. However, when Speed is activated for a specific connection, the traffic is split into two types: the traffic that the Buyer sends and the Speed cache handles, and the traffic that Speed sends to the Seller system to fill its cache.',source:"@site/kb/apps/monitoring-apps/stats/what-does-search-traffic-mean.md",sourceDirName:"apps/monitoring-apps/stats",slug:"/apps/monitoring-apps/stats/what-does-search-traffic-mean",permalink:"/kb/apps/monitoring-apps/stats/what-does-search-traffic-mean",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"kbSidebar",previous:{title:"Interpreting Colors in Stats APP",permalink:"/kb/apps/monitoring-apps/stats/understanding-colors-in-stats"},next:{title:"Understanding Data Discrepancies",permalink:"/kb/apps/monitoring-apps/stats/understanding-data-discrepancies"}},c={},p=[],l={toc:p},f="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"search-traffic-type"},"'Search Traffic Type'"),(0,n.kt)("p",null,'You might have noticed a handy feature in the Search tab known as the "Search Traffic Type" filter. This filter comes into play when you\'re using our Speed Cache APP. By default, traffic flows directly from the Buyer to the Seller systems, which we refer to as "Basic" traffic. However, when Speed is activated for a specific connection, the traffic is split into two types: the traffic that the Buyer sends and the Speed cache handles, and the traffic that Speed sends to the Seller system to fill its cache.'),(0,n.kt)("p",null,"To help you visualize these different traffic types, we created the diagram below:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/kbase/stats_traffic_type_1.jpg",alt:"stats_traffic_type_1"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"BASIC")," (Blue): It is the standard transaction. A Buyer is connected to a Seller without any other solution to the connection.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SPEED")," (Green): It is the transaction sent by a Buyer when their connection uses Speed. Our cache solution blocks the request from reaching the Seller's system. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SCHEDULER"),' (Red): This kind of transaction only refers to static content (Hotel List, Hotel Information, etc). A transaction is tagged as "Scheduler" when the information requested is stored in TravelgateX Database (Offline).')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"OPTIMIZED")," (Gray): These are the requests sent by TravelgateX to feed our internal databases. There are two sources:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Speed"),": When the information requested by the Buyer in a Speed connection is not already stored in our DB. TravelgateX sends a request to the Seller to obtain it."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Scheduler"),": When the time it takes to get all the static information from a Seller is too high, TravelgateX downloads it asynchronously in order to return it to their Buyers in a shorter, more acceptable time frame."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"By default, Stats displays the combined traffic sent by the Buyer, regardless of whether it is handled by the Seller (Basic Traffic) or the Speed cache (Speed Traffic). However, if you're interested in viewing only the traffic that the Seller system actively manages, you can use the filter and select the 'Optimize' + 'Basic' options:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/kbase/stats_traffic_type_2.jpg",alt:"stats_traffic_type_2"})))))}h.isMDXComponent=!0}}]);