"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5378],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},52991:(e,t,o)=>{o.d(t,{Z:()=>h});var r=o(67294),n=o(86010),i=o(53438),a=o(39960),s=o(13919),l=o(95999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:o}=e;return r.createElement(a.Z,{href:t,className:(0,n.Z)("card padding--lg",c.cardContainer)},o)}function p(e){let{href:t,icon:o,title:i,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,n.Z)("text--truncate",c.cardTitle),title:i},o," ",i),a&&r.createElement("p",{className:(0,n.Z)("text--truncate",c.cardDescription),title:a},a))}function d(e){let{item:t}=e;const o=(0,i.Wl)(t);return o?r.createElement(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const o=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:o,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const o=(0,i.jA)();return r.createElement(h,{items:o.items,className:t})}function h(e){const{items:t,className:o}=e;if(!t)return r.createElement(y,e);const a=(0,i.MN)(t);return r.createElement("section",{className:(0,n.Z)("row",o)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},49734:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=o(87462),n=(o(67294),o(3905)),i=o(52991),a=o(53438);const s={sidebar_position:1},l="Overview",c={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/overview",id:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/overview",title:"Overview",description:"If you're a Buyer using our Channel-X Push Buyers API, it means you already have the availability information of hotels offered by your suppliers in your own system.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/overview.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/overview",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Markets Group",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group"},next:{title:"One Step Quote",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/onestepquote"}},u={},p=[],d={toc:p},m="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"If you're a Buyer using our ",(0,n.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/channel-x-push-buyers-api/quickstart"},"Channel-X Push Buyers API"),", it means you already have the availability information of hotels offered by your suppliers in your own system."),(0,n.kt)("p",null,"To complete a booking for one of these options, you need to be connected to TravelgateX using our Hotel-X Pull Buyers API. If you're already connected through the standard booking flow (search, quote, and book), you can continue using it. However, we recommend using some special calls that will avoid extra requests and streamline the flow in your system."),(0,n.kt)("p",null,"For this purpose, we've introduced the 'oneStepQuote' and 'oneStepBook' methods, allowing you to simplify your booking flow. Depending on your business behavior, you can use either call:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Direct Booking:"),"\nIf you want to directly book an option available in your system, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"oneStepBook")," mutation. Provide all the option details (rate, room, board, price), and we will handle the standard booking flow internally. This means with just one mutation from your end, we'll internally perform the search, quote, and book processes to ensure the option is still available and directly attempt to confirm it. We will only confirm the option if it matches the conditions you specified and if the price is either the same or lower than the one you provided in the input.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Quote and Confirm:"),"\nIf you prefer to first get a quote to evaluate your option and receive updated conditions, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"oneStepQuote")," query. With this query, we internally perform a search and a quote, returning the updated details of the option, such as price and cancellation policies. To confirm the option, then perform a standard ",(0,n.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-flow/book"},"book mutation")," with the optionID we provide in the 'oneStepQuote'."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To cancel or check the booking status, you can review the various operations in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/booking-management/overview"},"Booking Management section"),".")),(0,n.kt)(i.Z,{items:(0,a.jA)().items.filter(((e,t)=>t>0)),mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);