"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,y=d["".concat(s,".").concat(u)]||d[u]||f[u]||r;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:4},i="Offers",l={unversionedId:"apps/inventory/extranet/availability-and-rates/manual-load/offers",id:"apps/inventory/extranet/availability-and-rates/manual-load/offers",title:"Offers",description:"After selecting the client, the Channel Manager and the hotel you will be able to select in the Choose your Load field, the Offers option. Finally, indicate the base rate and the offer you want to update.",source:"@site/docs/apps/inventory/extranet/availability-and-rates/manual-load/offers.md",sourceDirName:"apps/inventory/extranet/availability-and-rates/manual-load",slug:"/apps/inventory/extranet/availability-and-rates/manual-load/offers",permalink:"/docs/apps/inventory/extranet/availability-and-rates/manual-load/offers",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/inventory/extranet/availability-and-rates/manual-load/offers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Derived Rate",permalink:"/docs/apps/inventory/extranet/availability-and-rates/manual-load/derived-rate"},next:{title:"Delete Product",permalink:"/docs/apps/inventory/extranet/availability-and-rates/manual-load/delete-product"}},s={},p=[{value:"How to load availability and supplements/discounts",id:"how-to-load-availability-and-supplementsdiscounts",level:2}],c={toc:p},d="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"offers"},"Offers"),(0,o.kt)("p",null,"After selecting the client, the Channel Manager and the hotel you will be able to select in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Choose your Load")," field, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Offers")," option. Finally, indicate the base rate and the offer you want to update."),(0,o.kt)("h2",{id:"how-to-load-availability-and-supplementsdiscounts"},"How to load availability and supplements/discounts"),(0,o.kt)("p",null,"In the following panel you will be able to load different stop sales for your offers. "),(0,o.kt)("p",null,"[IMAGEN]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"From - To:")," Date range when the conditions will be applied."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Close On Arrival:"),' Stop sales on arrival date: in the date range specified before is not possible to do a check-in with the offer. If you check "On" you will apply the close on arrival condition, if you check "Off" you will delete a close on arrival condition if it was previously load and if you check ',(0,o.kt)("em",{parentName:"li"},"unspecified")," you won't apply any change (on/off) in the close on arrival condition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Close On Departure:"),' Stop sales on departure date: in the date range specified before is not possible to do a check-out with the offer. If you check "On" you will apply the close on departure condition, if you check "Off" you will delete a close on departure condition if it was previously load and if you check ',(0,o.kt)("em",{parentName:"li"},"unspecified")," you won't apply any change (on/off) in the close on departure condition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Close Master:"),' Stop sales: in the date range specified before is not possible to stay with the offer, so the client will not receive availability with free night offers for any stay that include those days.  If you check "On" you will apply the close master condition, if you check "Off" you will delete a close master condition if it was previously load and if you check ',(0,o.kt)("em",{parentName:"li"},"unspecified")," you won't apply any change (on/off) in the close master condition.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please, remember that the offer availability days and min/max length of stay it can be updated in the ",(0,o.kt)("a",{parentName:"p",href:"#"},"SetUp section"),".")))}f.isMDXComponent=!0}}]);