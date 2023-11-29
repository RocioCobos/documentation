"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:5},i="All about Mapping at TravelgateX",l={unversionedId:"connections/connections-content/all-about-mapping",id:"connections/connections-content/all-about-mapping",title:"All about Mapping at TravelgateX",description:"To maintain transparency, there are no TravelgateX hotel codes. Instead, we always provide the Seller native codes to ensure easy optimization of the mapping between Buyers and Sellers. This allows both parties to optimize the process without any interference from TravelgateX: Buyers are in charge of mapping each of their Sellers.",source:"@site/kb/connections/connections-content/all-about-mapping.md",sourceDirName:"connections/connections-content",slug:"/connections/connections-content/all-about-mapping",permalink:"/kb/connections/connections-content/all-about-mapping",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"kbSidebar",previous:{title:"Can I see the content of a Seller before activating them?",permalink:"/kb/connections/connections-content/can-i-see-content-of-a-seller-before-activation"},next:{title:"Stats: Real-time connectivity performance Dashboard",permalink:"/kb/apps/monitoring-apps/stats/stats-connectivity-dashboard"}},s={},c=[{value:"How many properties should I map?\ud83d\udca1",id:"how-many-properties-should-i-map",level:3},{value:"Can I obtain the total count of rooms, boards and categories at a hotel level?\ud83c\udfe8",id:"can-i-obtain-the-total-count-of-rooms-boards-and-categories-at-a-hotel-level",level:3},{value:"How can I use my own hotel codes?\ud83d\ude80",id:"how-can-i-use-my-own-hotel-codes",level:3},{value:"Can we use Universally Unique Identifier Codes (UUIDs) in our mapping?\u2611\ufe0f",id:"can-we-use-universally-unique-identifier-codes-uuids-in-our-mapping\ufe0f",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"all-about-mapping-at-travelgatex"},"All about Mapping at TravelgateX"),(0,a.kt)("p",null,"To maintain transparency, there are no TravelgateX hotel codes. Instead, we always provide the ",(0,a.kt)("strong",{parentName:"p"},"Seller native codes")," to ensure easy optimization of the mapping between Buyers and Sellers. This allows both parties to optimize the process without any interference from TravelgateX: Buyers are in charge of mapping each of their Sellers."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When a Seller returns the same hotel id for different properties, we ",(0,a.kt)("em",{parentName:"p"},"concatenate")," those hotel ids with their destination code in order to make them unique. That will be the only exception where we modify the Seller information. In that case, the hotelCode will be the one returned through our API (concatenated if needed) and the hotelCodeSupplier will be the native code of the supplier.",(0,a.kt)("br",{parentName:"p"}),"\n","You should always map the ",(0,a.kt)("strong",{parentName:"p"},'"hotelCode"')," since it will be the one used in TravelgateX methods.")),(0,a.kt)("h3",{id:"how-many-properties-should-i-map"},"How many properties should I map?\ud83d\udca1"),(0,a.kt)("p",null,"Please keep in mind that you have the flexibility to choose the number of hotels to be mapped. We recommend reaching out to the Seller directly to confirm which hotels should be mapped based on your specific business needs. This approach helps avoid unnecessary requests and reduces your L2B (Look-to-Book) ratio."),(0,a.kt)("h3",{id:"can-i-obtain-the-total-count-of-rooms-boards-and-categories-at-a-hotel-level"},"Can I obtain the total count of rooms, boards and categories at a hotel level?\ud83c\udfe8"),(0,a.kt)("p",null,"Unfortunately, this is not possible. Please note that content Queries provide static information from Sellers as a whole, rather than at a hotel level. This means that you will receive the total count of rooms, boards, destinations, and categories associated with your credentials for a specific Seller."),(0,a.kt)("h3",{id:"how-can-i-use-my-own-hotel-codes"},"How can I use my own hotel codes?\ud83d\ude80"),(0,a.kt)("p",null,"If you are a Buyer connected to our Hotel-X Buyers API, you have the option to upload your own mapping files to our FTP and use your own hotel codes. To access the necessary credentials, please reach out to our Customer Care team - you can find more detailed information on ",(0,a.kt)("strong",{parentName:"p"},"Hotel-X Mapping")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping"},"here"),"."),(0,a.kt)("h3",{id:"can-we-use-universally-unique-identifier-codes-uuids-in-our-mapping\ufe0f"},"Can we use Universally Unique Identifier Codes (UUIDs) in our mapping?\u2611\ufe0f"),(0,a.kt)("p",null,"Yes! We don't have any limitation on the amount (and type) of characters used to map the Seller's hotel codes."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"And don't forget to check our Hotels Query article for further details on the hotel content returned!")))}d.isMDXComponent=!0}}]);