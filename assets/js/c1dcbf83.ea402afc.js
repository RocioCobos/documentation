"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=o,m=p["".concat(s,".").concat(c)]||p[c]||h[c]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:2},r="HotelRatePlanInventoryNotif",l={unversionedId:"apis/for-buyers/channel-x-push-buyers-api/set-up/hotelrateplaninventorynotif",id:"apis/for-buyers/channel-x-push-buyers-api/set-up/hotelrateplaninventorynotif",title:"HotelRatePlanInventoryNotif",description:"The HotelRatePlanInventoryNotif message contains information about the inventory setup information that should be followed by the structure: Hotel > Rate > Room.",source:"@site/docs/apis/for-buyers/channel-x-push-buyers-api/set-up/hotelrateplaninventorynotif.mdx",sourceDirName:"apis/for-buyers/channel-x-push-buyers-api/set-up",slug:"/apis/for-buyers/channel-x-push-buyers-api/set-up/hotelrateplaninventorynotif",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/set-up/hotelrateplaninventorynotif",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/channel-x-push-buyers-api/set-up/hotelrateplaninventorynotif.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/set-up/overview"},next:{title:"Overview",permalink:"/docs/apis/for-buyers/channel-x-push-buyers-api/availability-and-rate/overview"}},s={},u=[{value:"Frequently asked questions",id:"frequently-asked-questions",level:2}],d={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hotelrateplaninventorynotif"},"HotelRatePlanInventoryNotif"),(0,o.kt)("p",null,"The HotelRatePlanInventoryNotif message contains information about the inventory setup information that should be followed by the structure: Hotel > Rate > Room."),(0,o.kt)("p",null,"Each element can have one of these three states: ",(0,o.kt)("inlineCode",{parentName:"p"},"New"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Delta"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Remove"),", each one will be indicated in its correspondent tag."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"New"),": it means the element was not added before. You should add the element in your system with the information provided.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Delta")," (Edit): it means the element was created before but it has been edited. The element should be already created in your system and you should change the information of it with the new one. "))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You will get all the information of the element, as we need to provide it, but it is not extrictly necessary that all of this info has changed, it could only change a part of it. You can override all the information already loaded for that specific element and reload it with the new one or have control of what has changed.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Remove"),": it means the element has been removed. You should delete the element in your system and all its dependences. ")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When deleting an element (Hotel, rate, derived rate or room), all the information you will receive about the element in the request is the code. If this happens, you should remove from your system all the elements that are depending on the one to delete.")),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I know whether it is a `Delta` or a `Full Copy`?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"ESCRIBIR"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What happens if a rate is deleted, does Travelgate inform us of this in the `Full Copy`?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Not in `Full Copy`. When a `Full Copy` is run after a rate has been deleted, you will only receive the information that is currently loaded in the system. You will be notified of a rate being removed by a `Delta` instead of a `Full Copy` after its removal."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What does the `RatePlanNotifType` (`New`, `Delta` and `Remove`) stand for?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Rates can be created/deleted/modified. The status `New` means that it\u2019s a rate that has been created (a new rate), the status `Delta` is for a rate that has been modified and the status `Removed` is for a deleted rate."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What does `CancelPenalty` `Start` and `End dates` represent?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Start and End dates in this instance show the range of dates in which these cancellation policies are going to be applied. The start and end days are included in the cancellation policy range."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What does the `RatePlan Duration` atribute in mean?"),(0,o.kt)("div",null,(0,o.kt)("div",null,"BORRO ESTA PREGUNTA?"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Can be set `RatePlanStatusType` = `Deactivated` for specific periods? It also contains a start and end for rate plan attribute as well"),(0,o.kt)("div",null,(0,o.kt)("div",null,"This is used to deactivate a rate. The deactivation can either be for an indefinite amount of time, of a specific time frame, and the date range (start and end) indicates this range."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,'If RatePlanInventory ARI provided `MealsIncluded` `MealPlanCodes` = `"??"/`, then the Supplement attribute will be present, is this correct? And, is it possible for it to show up when Mealplancode is \u2018Room Only\u2019?'),(0,o.kt)("div",null,(0,o.kt)("div",null,"The RatePlanInventory informs of what the base MealPlan for this rate is (Room only, Bed and Breakfast, All Inclusive, etc). A base rate cannot have more than one MealPlan. The Supplement is not indicated here, it is indicated in the RatePlanNotif. The MealPlanCode displayed in MealsIncluded is the push system code for the meal plans which can be found in the code list in the static infomration."))))}h.isMDXComponent=!0}}]);