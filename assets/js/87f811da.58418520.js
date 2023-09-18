"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,k=p["".concat(s,".").concat(d)]||p[d]||c[d]||l;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const l={sidebar_position:3},r="Amendments",i={unversionedId:"apis/hotel-x-pull-buyers-api/methods/booking-management/amendments",id:"apis/hotel-x-pull-buyers-api/methods/booking-management/amendments",title:"Amendments",description:"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:",source:"@site/docs/apis/hotel-x-pull-buyers-api/methods/booking-management/amendments.md",sourceDirName:"apis/hotel-x-pull-buyers-api/methods/booking-management",slug:"/apis/hotel-x-pull-buyers-api/methods/booking-management/amendments",permalink:"/docs/apis/hotel-x-pull-buyers-api/methods/booking-management/amendments",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/hotel-x-pull-buyers-api/methods/booking-management/amendments.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Booking list",permalink:"/docs/apis/hotel-x-pull-buyers-api/methods/booking-management/booking-list"},next:{title:"Cancellation",permalink:"/docs/apis/hotel-x-pull-buyers-api/methods/booking-management/cancellation"}},s={},u=[{value:"Criteria",id:"criteria",level:3},{value:"Settings",id:"settings",level:3}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"amendments"},"Amendments"),(0,o.kt)("p",null,"The Amendment operations allow you to amend different aspects of a booking. There are currently five amendment operations available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amend Dates: allows to amend the checkin and/or the checkout of a booking."),(0,o.kt)("li",{parentName:"ul"},"Amend Board: allows to amend the board of a booking."),(0,o.kt)("li",{parentName:"ul"},"Amend Room: allows to amend the room of a booking."),(0,o.kt)("li",{parentName:"ul"},"Amend Remarks: allows to add a special request (remark) on a booking."),(0,o.kt)("li",{parentName:"ul"},"Amend Paxes: allows to amend the paxes of a booking.")),(0,o.kt)("p",null,"Each amendment type must be performed in two steps: Query (simulates the amendment) and Mutation (commits the amendment). In both steps the returned fields include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The booking detail with the amendment applied"),(0,o.kt)("li",{parentName:"ul"},"Amendment fees if applicable"),(0,o.kt)("li",{parentName:"ul"},"AmendmentID (only returned in the query response)")),(0,o.kt)("h3",{id:"criteria"},"Criteria"),(0,o.kt)("p",null,"You can perform the query (simulation) of the amendment sending all the booking information (references, dates, hotel code)\nor sending the bookingID got in the booking flow:"),(0,o.kt)("p",null,"Booking information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"accessCode"),(0,o.kt)("li",{parentName:"ul"},"language"),(0,o.kt)("li",{parentName:"ul"},"hotelCode"),(0,o.kt)("li",{parentName:"ul"},"reference"),(0,o.kt)("li",{parentName:"ul"},"dates")),(0,o.kt)("p",null,"BookingID got in the booking flow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"bookingID")),(0,o.kt)("p",null,"You can perform the mutation (commit) of the amendment sending the amendmentID received in the previous response:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"amendmentID")),(0,o.kt)("h3",{id:"settings"},"Settings"),(0,o.kt)("p",null,"Settings are the common configurations used to construct requests to the supplier/s. By default, we apply the same configuration to all Hotel-X clients, and as a result, the following configuration will be sent to the Seller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"settings": {\n    "context": "",\n    "language": "en",\n    "currency": "EUR",\n    "nationality": "ES",\n    "market": "ES",\n    "timeout": {\n        "search": 25000,\n        "quote": 180000,\n        "book": 180000\n    },\n    "businessRules": {\n        "optionsQuota": 0,\n        "businessRulesType": "CHEAPER_AMOUNT"\n')),(0,o.kt)("p",null,"Mandatory Settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Context"),(0,o.kt)("li",{parentName:"ul"},"Timeout (Timeout in milliseconds for supplier connections. Applied to all suppliers; won't close client connection if exceeded)"),(0,o.kt)("li",{parentName:"ul"},"BusinessRules"),(0,o.kt)("li",{parentName:"ul"},"Language"),(0,o.kt)("li",{parentName:"ul"},"Currency"),(0,o.kt)("li",{parentName:"ul"},"Nationality"),(0,o.kt)("li",{parentName:"ul"},"Markets")),(0,o.kt)("p",null,"Optional Settings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Group"),(0,o.kt)("li",{parentName:"ul"},"AuditTransactions "),(0,o.kt)("li",{parentName:"ul"},"Suppliers (Each one contains its own code, settings and accesses)"),(0,o.kt)("li",{parentName:"ul"},"Plugins"),(0,o.kt)("li",{parentName:"ul"},"TestMode (This flag allows only the accesses checked as test)"),(0,o.kt)("li",{parentName:"ul"},"ClientTokens (Used to identify the origin of the request, this is only used in plugins)")),(0,o.kt)("p",null,"[ a\xf1adir ejemplo ]"))}c.isMDXComponent=!0}}]);