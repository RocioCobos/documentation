"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,h=p["".concat(l,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},60856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2},i="Connectivity products",s={unversionedId:"get-started/connectivity-products",id:"get-started/connectivity-products",title:"Connectivity products",description:"At TravelgateX, partners can either be Buyers or Sellers. Depending on their role, they have the option to connect via a Pull or Push API or utilize our dedicated Apps for seamless integration.",source:"@site/docs/get-started/connectivity-products.md",sourceDirName:"get-started",slug:"/get-started/connectivity-products",permalink:"/docs/get-started/connectivity-products",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/get-started/connectivity-products.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/get-started/introduction"},next:{title:"Key concepts",permalink:"/docs/get-started/key-concepts"}},l={},c=[{value:"API Connections",id:"api-connections",level:3},{value:"APP Connections",id:"app-connections",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connectivity-products"},"Connectivity products"),(0,o.kt)("p",null,"At TravelgateX, partners can either be Buyers or Sellers. Depending on their role, they have the option to connect via a Pull or Push API or utilize our dedicated Apps for seamless integration."),(0,o.kt)("h3",{id:"api-connections"},"API Connections"),(0,o.kt)("p",null,"TravelgateX provides two main types of API connectivity for Buyers and Sellers, Pull APIs and Push APIs."),(0,o.kt)("p",null,"For Buyers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart"},"Hotel-X Pull Buyers API")," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/legacy-pull-buyers-api/overview"},"Legacy Pull Buyers API"),": Through Pull integration, Buyers send Availability requests to TravelgateX. Upon receiving the request, TravelgateX consults the Seller and gets an immediate response. This response also includes static data like Hotel Lists, Room Lists, etc., fetched from the Seller's API. Pull integrations emphasize real-time communication between Buyers and Sellers. They are relatively simple to develop but necessitate significant system resources due to potentially higher traffic, in contrast to Push integrations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/channel-x-push-buyers-api/quickstart"},"Channel-X Push Buyers API"),": Here, the Buyer configures the Hotel Setup on our Inventory Extranet. Subsequently, the Seller pushes the availability and pricing data to our System. This data is instantaneously processed and presented to the Buyer."))),(0,o.kt)("p",null,"For Sellers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/apis/for-sellers/hotel-pull-sellers-api/quickstart"},"Hotel Pull Sellers API"),": This works similarly to the Pull Buyers API, where the Seller receives real-time requests and sends back immediate responses.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/apis/for-sellers/hotel-push-sellers-api/quickstart"},"Hotel Push Sellers API"),": In the Push integration framework, Sellers transmit their product data to the TGX Database/System. Push integrations are characterized by reduced traffic demands and swifter response times. However, they don't support real-time interactions and demand more developmental effort."))),(0,o.kt)("h3",{id:"app-connections"},"APP Connections"),(0,o.kt)("p",null,"If an API isn't part of your tech stack, or you aren't integrated with any tech platform, worry not! TravelgateX has user-friendly APPs tailored for you."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../apps/inventory/overview"},"Inventory")," + ",(0,o.kt)("a",{parentName:"li",href:"../apps/distribution/overview"},"Distribution"),": This combined solution empowers Sellers to effortlessly market their products to an extensive array of TravelgateX Buyers. Sellers can straightforwardly establish their hotels on our Inventory Extranet and manually input data on availability and pricing. They also have the privilege of connecting with third-party vendors to broaden their product spectrum. Once everything's set up, Sellers can leverage our Distribution Extranet to engage with various Buyers and enforce bespoke business regulations. Although this mode of connectivity might demand more developmental and maintenance effort, it's a brilliant substitute for Sellers who don't have an API.")))}d.isMDXComponent=!0}}]);