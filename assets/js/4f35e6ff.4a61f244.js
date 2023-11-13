"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(y,r(r({ref:t},d),{},{components:a})):n.createElement(y,r({ref:t},d))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:3},r="Derived Rate",l={unversionedId:"apps/inventory/extranet/availability-and-rates/manual-load/derived-rate",id:"apps/inventory/extranet/availability-and-rates/manual-load/derived-rate",title:"Derived Rate",description:"After selecting the client, the Channel Manager and the hotel you will be able to select in the Choose your Load field, the Derived Rates option. Finally, indicate the base rate and the derived rate you want to load or update.",source:"@site/docs/apps/inventory/extranet/availability-and-rates/manual-load/derived-rate.md",sourceDirName:"apps/inventory/extranet/availability-and-rates/manual-load",slug:"/apps/inventory/extranet/availability-and-rates/manual-load/derived-rate",permalink:"/docs/apps/inventory/extranet/availability-and-rates/manual-load/derived-rate",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/inventory/extranet/availability-and-rates/manual-load/derived-rate.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Availability and Price load",permalink:"/docs/apps/inventory/extranet/availability-and-rates/manual-load/availability-and-rate"},next:{title:"Offers",permalink:"/docs/apps/inventory/extranet/availability-and-rates/manual-load/offers"}},s={},p=[{value:"How to load availability and supplements/discounts",id:"how-to-load-availability-and-supplementsdiscounts",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"derived-rate"},"Derived Rate"),(0,o.kt)("p",null,"After selecting the client, the Channel Manager and the hotel you will be able to select in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Choose your Load")," field, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Derived Rates")," option. Finally, indicate the base rate and the derived rate you want to load or update."),(0,o.kt)("h2",{id:"how-to-load-availability-and-supplementsdiscounts"},"How to load availability and supplements/discounts"),(0,o.kt)("p",null,"In the following panel you will be able to load all conditions for your derived rates."),(0,o.kt)("p",null,"[IMAGEN]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"From - To:")," Date range when the conditions will be applied."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Applicable Days of Week:")," Days of week that will apply the condition in the previous date range."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Close On Arrival:"),' Stop sales on arrival date: in the date range specified before is not possible to do a check-in. If you check "On" you will apply the close on arrival condition, if you check "Off" you will delete a close on arrival condition if it was previously load and if you check ',(0,o.kt)("em",{parentName:"li"},"unspecified")," you won't apply any change (on/off) in the close on arrival condition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Close On Departure:"),' Stop sales on departure date: in the date range specified before is not possible to do a check-out. If you check "On" you will apply the close on departure condition, if you check "Off" you will delete a close on departure condition if it was previously load and if you check ',(0,o.kt)("em",{parentName:"li"},"unspecified")," you won't apply any change (on/off) in the close on departure condition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Close Master:"),' Stop sales: in the date range specified before is not possible to stay, so the client will not receive availability for any stay that include those days.  If you check "On" you will apply the close master condition, if you check "Off" you will delete a close master condition if it was previously load and if you check ',(0,o.kt)("em",{parentName:"li"},"unspecified")," you won't apply any change (on/off) in the close master condition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type adjust amount:")," You will be able to select a specific amount or percent to be a supplement or discount. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Adjust amount"),": Numeric amount. ",(0,o.kt)("em",{parentName:"li"},"This should have a minus symbol if the amount is a discount.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Min LOS on Stay:")," Minimum stay length of nights for this rate and rooms to be available. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Max LOS on Stay:")," Maximum stay length of nights for this rate and rooms to be available. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Min LOS on Arrival"),": Minimum stay length of nights for this rate and rooms to be available. Only depending on the arrival date."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Max LOS on Arrival"),": Maximum stay length of nights for this rate and rooms to be available. Only depending on the arrival date."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Min Release:")," Minimum number of days before the check-in date for which the product will be available to be booked."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Max Release:")," Maximum number of days before the check-in date for which the product will be available to be booked."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Meal Plan Supplements:")," Option to add multiple meal plan supplements by pax type (adult, child or baby). Select the pax type, the meal plan and the amount per pax that will be added.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please, remember that a Derived Rate shares the allotment with its base rate, that's why you can't load and specific allotment for a derived rate.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check our See ",(0,o.kt)("a",{parentName:"p",href:"#"},"FAQ")," for a complete example on how to create a full discount/supplement using Derived Rates.")))}u.isMDXComponent=!0}}]);