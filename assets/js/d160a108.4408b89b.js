"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75040],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=r.createContext({}),l=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(o),m=n,d=c["".concat(a,".").concat(m)]||c[m]||h[m]||i;return o?r.createElement(d,s(s({ref:t},p),{},{components:o})):r.createElement(d,s({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[c]="string"==typeof e?e:n,s[1]=u;for(var l=2;l<i;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},12461:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={sidebar_position:4},s="How to limit and filter options through Business Rules",u={unversionedId:"our-products/are-you-a-buyer/our-methods/booking-flow/search/how-to-limit-and-filter-options-through-business-rules",id:"our-products/are-you-a-buyer/our-methods/booking-flow/search/how-to-limit-and-filter-options-through-business-rules",title:"How to limit and filter options through Business Rules",description:"Business Rules for Efficient Option Filtering",source:"@site/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-to-limit-and-filter-options-through-business-rules.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/booking-flow/search",slug:"/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-to-limit-and-filter-options-through-business-rules",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-to-limit-and-filter-options-through-business-rules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"kbSidebar",previous:{title:"How to filter Hotel-X Search requests",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/how-to-filter-hotel-x-search-requests"},next:{title:"Hotel-X Search: Everything You Need to Know About Rooms",permalink:"/kb/our-products/are-you-a-buyer/our-methods/booking-flow/search/hotel-x-search-everything-you-need-to-know-about-rooms"}},a={},l=[{value:"Business Rules for Efficient Option Filtering",id:"business-rules-for-efficient-option-filtering",level:2},{value:"What are the business rules that I can incorporate into my requests?\ud83d\udca1",id:"what-are-the-business-rules-that-i-can-incorporate-into-my-requests",level:3},{value:"How can I set up business rules in my requests?\ud83d\udee0\ufe0f",id:"how-can-i-set-up-business-rules-in-my-requests\ufe0f",level:3},{value:"Additional considerations on Business Rules\u2714\ufe0f",id:"additional-considerations-on-business-rules\ufe0f",level:3}],p={toc:l},c="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-limit-and-filter-options-through-business-rules"},"How to limit and filter options through Business Rules"),(0,n.kt)("h2",{id:"business-rules-for-efficient-option-filtering"},"Business Rules for Efficient Option Filtering"),(0,n.kt)("h3",{id:"what-are-the-business-rules-that-i-can-incorporate-into-my-requests"},"What are the business rules that I can incorporate into my requests?\ud83d\udca1"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"CHEAPER_AMOUNT"),": The cheapest options is returned without exceeding the optionsQuota limit."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"ROOM_TYPE"),": It groups the option by room type without exceeding the optionsQuota limit.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"image\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("strong",{parentName:"p"},"optionsQuota")," makes reference to the maximum number of options per mealplan returned in search response.")),(0,n.kt)("h3",{id:"how-can-i-set-up-business-rules-in-my-requests\ufe0f"},"How can I set up business rules in my requests?\ud83d\udee0\ufe0f"),(0,n.kt)("p",null,"To configure business rules in your Search Query, simply include the ",(0,n.kt)("strong",{parentName:"p"},"BusinessRulesInput")," in your request settings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"image\n")),(0,n.kt)("h3",{id:"additional-considerations-on-business-rules\ufe0f"},"Additional considerations on Business Rules\u2714\ufe0f"),(0,n.kt)("p",null,"Please note that we filter options by utilizing a limited combination of room types:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Initially, we group ",(0,n.kt)("strong",{parentName:"li"},"options with the same room type/classification")," together. For instance, you may receive options like Standard-Standard-Standard-Standard or Junior-Junior-Junior-Junior."),(0,n.kt)("li",{parentName:"ol"},"Subsequently, we ",(0,n.kt)("strong",{parentName:"li"},"combine the cheapest rooms with the remaining ones"),", ensuring that duplicates are checked and the options do not exceed the specified optionsQuota limit.\nIf a Buyer specifies a businessRules value, it will be implemented when the number of returned options surpasses the optionsQuota. However, if the Buyer does not provide any businessRules values, the default businessRules of CheaperAmount will be applied.")),(0,n.kt)("blockquote",null,(0,n.kt)("ins",null,"**TIP:**"),"You can also configure your own Business Rules implementing our [Aggregation plugin](https://docs.travelgatex.com/connectiontypesbuyers/hotel-x/plugins/aggregation/).  More information on Business Rules on our [API Schema Documentation](https://api.travelgatex.com/playground). **Have any doubts or questions?** Don't hesitate to get in touch with our amazing Customer Care team via [Tickets](https://app.travelgatex.com/tickets) and they'll be happy to assist you\u2b50\ud83d\ude80"))}h.isMDXComponent=!0}}]);