"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10604],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=r(87462),o=(r(67294),r(3905));const n={sidebar_position:1},i="Quickstart",s={unversionedId:"apis/for-sellers/hotel-push-sellers-api/quickstart",id:"apis/for-sellers/hotel-push-sellers-api/quickstart",title:"Quickstart",description:"Introduction",source:"@site/docs/apis/for-sellers/hotel-push-sellers-api/quickstart.mdx",sourceDirName:"apis/for-sellers/hotel-push-sellers-api",slug:"/apis/for-sellers/hotel-push-sellers-api/quickstart",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/quickstart",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-push-sellers-api/quickstart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Cancel",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/booking-management/cancel"},next:{title:"Endpoint",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/making-requests/endpoint"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Let&#39;s get started: How to make your first sale!",id:"lets-get-started-how-to-make-your-first-sale",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"API Endpoint",id:"api-endpoint",level:4},{value:"Request Headers",id:"request-headers",level:4},{value:"Supported Operations",id:"supported-operations",level:4},{value:"1. Push or retrieve the setup of the product (hotel, rate, room).",id:"1-push-or-retrieve-the-setup-of-the-product-hotel-rate-room",level:3},{value:"2. Push the availability",id:"2-push-the-availability",level:3},{value:"3. Push the rates",id:"3-push-the-rates",level:3},{value:"Next steps",id:"next-steps",level:2}],p={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"By combining Inventory tool and the Hotel Push Sellers API, Channel Managers and Hotel Product Distributors can ",(0,o.kt)("strong",{parentName:"p"},"push")," their products into a TravelgateX database, making them accessible to TravelgateX Buyers."),(0,o.kt)("p",null,"Inventory tool receives the data from the different channels and stores it in a common structure. Then, this product can be consumed in 3 different ways by TravelgateX Buyers: via Pull with our ",(0,o.kt)("a",{parentName:"p",href:"../../for-buyers/hotel-x-pull-buyers-api/quickstart"},"Hotel-X solution"),", via Push with our ",(0,o.kt)("a",{parentName:"p",href:"../../for-buyers/channel-x-push-buyers-api/quickstart"},"Channel-X solution")," or via a Flat File solution."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hotel Push Seller Overview",src:r(29618).Z,width:"960",height:"343"})),(0,o.kt)("h2",{id:"lets-get-started-how-to-make-your-first-sale"},"Let's get started: How to make your first sale!"),(0,o.kt)("p",null,"If you're a Channel Manager or Supplier seeking a push integration follow the next steps:"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h4",{id:"api-endpoint"},"API Endpoint"),(0,o.kt)("p",null,"Hotel Push Seller API, being a XML-based API, utilizes a single endpoint for all operations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"https://pushprovider.xmltravelgate.com/Service/Hotel/Provider/ProviderGEN.svc\n")),(0,o.kt)("h4",{id:"request-headers"},"Request Headers"),(0,o.kt)("h4",{id:"supported-operations"},"Supported Operations"),(0,o.kt)("h3",{id:"1-push-or-retrieve-the-setup-of-the-product-hotel-rate-room"},"1. Push or retrieve the setup of the product (hotel, rate, room)."),(0,o.kt)("h3",{id:"2-push-the-availability"},"2. Push the availability"),(0,o.kt)("h3",{id:"3-push-the-rates"},"3. Push the rates"),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Congratulations on completing this quickstart tutorial! \ud83c\udf89 You've successfully learned the basics of making your first sale. But there's a world of knowledge waiting for you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explore the ",(0,o.kt)("a",{parentName:"li",href:"../hotel-push-sellers-api/making-requests/endpoint"},"Making Requests")," section to dive deep into how a XML API works and maximize its performance."),(0,o.kt)("li",{parentName:"ul"},"Discover various methods/messages grouped by the following actions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./availability-rates-and-inventory/inventory"},"Inventory"),": Push the inventory setup (hotel, rate, room)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./availability-rates-and-inventory/availability"},"Availability")," and ",(0,o.kt)("a",{parentName:"li",href:"./availability-rates-and-inventory/rates"},"Rate"),": Push rate availability, allotment conditions and rate prices and supplements"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./booking-management/overview"},"Manage reservations"),": Get the hang of reservation management.")))),(0,o.kt)("p",null,"Our documentation is a treasure trove of additional features and functionalities to enhance your business. To uncover these valuable resources, explore our documentation further and make the most of these methods. Enjoy your journey!"))}h.isMDXComponent=!0},29618:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/push_seller_api-6f8a206a88eba03b9ad5afe96d9e3465.svg"}}]);