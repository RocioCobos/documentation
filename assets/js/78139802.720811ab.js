"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81038],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var o=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)i=l[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)i=l[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(i),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return i?o.createElement(m,r(r({ref:t},c),{},{components:i})):o.createElement(m,r({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,r=new Array(l);r[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:n,r[1]=a;for(var u=2;u<l;u++)r[u]=i[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},48993:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var o=i(87462),n=(i(67294),i(3905));const l={sidebar_position:2},r="Search",a={unversionedId:"apis/hotel-x-pull-buyers-api/methods/booking-flow/search",id:"apis/hotel-x-pull-buyers-api/methods/booking-flow/search",title:"Search",description:"Search serves as the initial step in our booking flow, with the objective of verifying availability within the specified date range and for the requested number of guests, either for specific hotels or for hotels in the desired destination. It provides a comprehensive list of available options based on your search criteria. The returned fields include:",source:"@site/docs/apis/hotel-x-pull-buyers-api/methods/booking-flow/search.md",sourceDirName:"apis/hotel-x-pull-buyers-api/methods/booking-flow",slug:"/apis/hotel-x-pull-buyers-api/methods/booking-flow/search",permalink:"/docs/apis/hotel-x-pull-buyers-api/methods/booking-flow/search",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/hotel-x-pull-buyers-api/methods/booking-flow/search.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/apis/hotel-x-pull-buyers-api/methods/booking-flow/overview"},next:{title:"Quote",permalink:"/docs/apis/hotel-x-pull-buyers-api/methods/booking-flow/quote"}},s={},u=[{value:"Criteria",id:"criteria",level:3},{value:"Filter",id:"filter",level:3},{value:"Search Single Mode or Multi Mode",id:"search-single-mode-or-multi-mode",level:3},{value:"Single Mode",id:"single-mode",level:4},{value:"Multimode Search",id:"multimode-search",level:4},{value:"Settings",id:"settings",level:3},{value:"Key Recommendations",id:"key-recommendations",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"search"},"Search"),(0,n.kt)("p",null,"Search serves as the initial step in our booking flow, with the objective of verifying availability within the specified date range and for the requested number of guests, either for specific hotels or for hotels in the desired destination. It provides a comprehensive list of available options based on your search criteria. The returned fields include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"}),(0,n.kt)("li",{parentName:"ul"}),(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("p",null,"You have the flexibility to filter your Search by access or opt not to set any access at all (resulting in requests for all available accesses). In the latter case, ensure you utilize your own context code to prevent mapping errors. Please note that your context code must be linked to the mapping files previously uploaded on your side to the FTP. By doing so, you will receive results from all your Sellers with your own Hotel Codes, ensuring a smooth and seamless process."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"This query offers versatility in search options, with certain fields marked as mandatory (checkIn, checkOut, hotels etc.) and others as optional (language, currency, nationality etc.). This flexibility empowers you to create a personalized Search Query, tailoring the requested fields to your specific needs. "),(0,n.kt)("p",null,"Mandatory criteria"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"checkIn (Format: YYYY-MM-DD)"),(0,n.kt)("li",{parentName:"ul"},"checkOut (Format: YYYY-MM-DD)"),(0,n.kt)("li",{parentName:"ul"},"hotels (We recommend a maximum of 200 hotel codes per request)"),(0,n.kt)("li",{parentName:"ul"},"destinations"),(0,n.kt)("li",{parentName:"ul"},"occupancies (For multi-room bookings, this array will contain multiple elements, rooms. You will need to detail the occupancy for each room requested.)")),(0,n.kt)("p",null,"Optional criteria"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"language"),(0,n.kt)("li",{parentName:"ul"},"currency"),(0,n.kt)("li",{parentName:"ul"},"nationality"),(0,n.kt)("li",{parentName:"ul"},"markets")),(0,n.kt)("h3",{id:"filter"},"Filter"),(0,n.kt)("p",null,"Filters allow you to precisely tailor the response according to your preferences. The available filters are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Plugin: You can filter and specify which plugins need to be included or excluded.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"RateRules: This filter enables you to narrow down the options returned by the suppliers based on the desired rate rules you want to include or exclude.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Status: Use this filter to determine which status (OK and RQ) will be included or excluded in the response.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Access: By using the access filter, our system will exclusively include or exclude options from the selected accesses:"))),(0,n.kt)("h3",{id:"search-single-mode-or-multi-mode"},"Search Single Mode or Multi Mode"),(0,n.kt)("p",null,"You have the possibility to chose between searching in a single mode vs searching in a multi mode."),(0,n.kt)("h4",{id:"single-mode"},"Single Mode"),(0,n.kt)("p",null,"The default mode in Hotel-X allows our Partners to perform one search per Seller connected to their account at a time. When running your Search, you should add the Seller's access code you would like to query."),(0,n.kt)("p",null,"[ a\xf1adir ejemplo ]"),(0,n.kt)("h4",{id:"multimode-search"},"Multimode Search"),(0,n.kt)("p",null,"The multimode query allows our Partners to search multiple Sellers at the same time in just one request. To search in multimode, start by uploading your hotel mapping files to your FTP. Once the files are processed, you'll have the ability to search multiple Sellers simultaneously by using your own context and hotel codes."),(0,n.kt)("p",null,"Specifying the access codes in the filter node: the query will only be sent to the accesses specified."),(0,n.kt)("p",null,"[ a\xf1adir ejemplo ]"),(0,n.kt)("p",null,'Not specifying any accesses: The query will be sent to all the accesses connected to your account (only the ones belonging to the Sellers where the mapping file has been uploaded). This query will also check the value of the "testMode" tag in order to request only the test or production accesses, accordingly.'),(0,n.kt)("p",null,"[ a\xf1adir ejemplo ]"),(0,n.kt)("h3",{id:"settings"},"Settings"),(0,n.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients, and as a result, the following configuration will be sent to the Seller:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"settings": {\n    "context": "",\n    "language": "en",\n    "currency": "EUR",\n    "nationality": "ES",\n    "market": "ES",\n    "timeout": {\n        "search": 25000,\n        "quote": 180000,\n        "book": 180000\n    },\n    "businessRules": {\n        "optionsQuota": 0,\n        "businessRulesType": "CHEAPER_AMOUNT"\n')),(0,n.kt)("p",null,"Mandatory Settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Context"),(0,n.kt)("li",{parentName:"ul"},"Timeout (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,n.kt)("li",{parentName:"ul"},"BusinessRules"),(0,n.kt)("li",{parentName:"ul"},"Language"),(0,n.kt)("li",{parentName:"ul"},"Currency"),(0,n.kt)("li",{parentName:"ul"},"Nationality"),(0,n.kt)("li",{parentName:"ul"},"Markets")),(0,n.kt)("p",null,"Optional Settings:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Group"),(0,n.kt)("li",{parentName:"ul"},"AuditTransactions "),(0,n.kt)("li",{parentName:"ul"},"Suppliers (Each one contains its own code, settings and accesses)"),(0,n.kt)("li",{parentName:"ul"},"Plugins"),(0,n.kt)("li",{parentName:"ul"},"TestMode (This flag allows only the accesses checked as test)"),(0,n.kt)("li",{parentName:"ul"},"ClientTokens (Used to identify the origin of the request, this is only used in plugins)")),(0,n.kt)("p",null,"[ a\xf1adir ejemplo ]"),(0,n.kt)("h3",{id:"key-recommendations"},"Key Recommendations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Customize the timeout according to your needs, taking into consideration the maximum values in Search is 25,000ms.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Set the audit transaction to "false" in "Search" for better performance.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Search id remains valid for 24 hours, but transitioning quickly to the Quote phase is highly recommended for a smoother booking process."))))}d.isMDXComponent=!0}}]);