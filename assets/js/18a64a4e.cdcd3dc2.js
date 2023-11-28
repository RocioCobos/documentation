"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,y=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3},i="Delete Product",l={unversionedId:"apps/inventory/extranet/availability-and-rates/delete-product",id:"apps/inventory/extranet/availability-and-rates/delete-product",title:"Delete Product",description:"In order to delete the availability conditions and prices loaded in Inventory-X for a specific hotel, you will need to go to the Product tab and then select the Delete Product option in the Inventory-X extranet.",source:"@site/docs/apps/inventory/extranet/availability-and-rates/delete-product.mdx",sourceDirName:"apps/inventory/extranet/availability-and-rates",slug:"/apps/inventory/extranet/availability-and-rates/delete-product",permalink:"/docs/apps/inventory/extranet/availability-and-rates/delete-product",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/inventory/extranet/availability-and-rates/delete-product.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Offers",permalink:"/docs/apps/inventory/extranet/availability-and-rates/manual-load/offers"},next:{title:"Calendar and Availability Simulator",permalink:"/docs/apps/inventory/extranet/availability-and-rates/calendar-and-availability"}},p={},c=[],d={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delete-product"},"Delete Product"),(0,a.kt)("p",null,"In order to delete the availability conditions and prices loaded in Inventory-X for a specific hotel, you will need to go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," tab and then select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete Product")," option in the Inventory-X extranet."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/inventory_delete-product1.png",alt:"Inventory Delete Product"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This feature is available for administrator users. Please contact your administrator in order to remove any data. ")),(0,a.kt)("admonition",{title:"Important",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This feature allows removing real product from our system. Remove the incorrect product may involve future product discrepancies and incorrect bookings. In order to avoid it, please make responsible use of this feature.")),(0,a.kt)("p",null,"First step will be to indicate the desired Client-Provider connection and then the hotel to delete information. After that, you will be able to select the rates or derived rates as well as the load type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Availability:")," With this option you will be able to delete, by date range, availability conditions like \u2018",(0,a.kt)("em",{parentName:"li"},"booking limit (allotment)"),"\u2019, \u2018",(0,a.kt)("em",{parentName:"li"},"minimum or maximum length of stay"),"\u2019, \u2018",(0,a.kt)("em",{parentName:"li"},"minimum or maximum length of stay on arrival"),"\u2019 and \u2018",(0,a.kt)("em",{parentName:"li"},"minimum or maximum release"),"\u2019.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/inventory_delete-product2.png",alt:"Inventory Delete Product"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Price:")," With this option you will be able to delete, by date range, all kinds of prices (price per room, prices per pax and price per occupancy) and occupancy and meal plan supplements. Bear in mind that the meal plan supplements will be deleted for all types of passengers (Adult, child and baby).")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/inventory_delete-product3.png",alt:"Inventory Delete Product"})))}u.isMDXComponent=!0}}]);