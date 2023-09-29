"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5720],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,f=p["".concat(u,".").concat(y)]||p[y]||d[y]||i;return t?n.createElement(f,l(l({ref:r},s),{},{components:t})):n.createElement(f,l({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=y;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},38731:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const i={sidebar_position:12},l="Currency Converter",a={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",title:"Currency Converter",description:"Currency converter plugin allows to apply currency conversion over all the prices in one option. This plugin receives an option + a currency and returns the same option with currency conversion applied over all the prices. It reads the information about rates from a file located in our ftp. Is mandatory that this file exists in the ftp and satisfies all the requirements below. Otherwise, an error will be returned.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Virtual Credit Card",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card"},next:{title:"Search by Destination",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination"}},u={},c=[{value:"Create Currency Converter file",id:"create-currency-converter-file",level:3},{value:"Execute Currency Converter plugin",id:"execute-currency-converter-plugin",level:3}],s=(p="BrowserWindow",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const d={toc:c},y="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(y,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"currency-converter"},"Currency Converter"),(0,o.kt)("p",null,"Currency converter plugin allows to apply currency conversion over all the prices in one option. This plugin receives an option + a currency and returns the same option with currency conversion applied over all the prices. It reads the information about rates from a file located in our ftp. Is mandatory that this file exists in the ftp and satisfies all the requirements below. Otherwise, an error will be returned."),(0,o.kt)("p",null,"In order for the currency converter plugin to work, you need to have the currency converter file in the FTP + add the plugin to the request."),(0,o.kt)("h3",{id:"create-currency-converter-file"},"Create Currency Converter file"),(0,o.kt)(s,{mdxType:"BrowserWindow"},(0,o.kt)("p",null,"F","[Folder code]",(0,o.kt)("em",{parentName:"p"},"[Unique code]","\nHotelX"),"[Unique code]","\nBusinessRules\ncurrency_map.csv")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The rate with value 1.00 is the base rate. Other rates are calculated from it.")),(0,o.kt)("p",null,"Download the file, include your data following the example (delete the first line), save it in csv format, and upload it to your FTP following the example."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Learn how to change the format of the csv file in order to edit and save it"),(0,o.kt)("div",null,(0,o.kt)("div",null,"[A\xf1adir v\xeddeo]"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Check the definitions and file format if you have any doubts about the example"),(0,o.kt)("div",null,(0,o.kt)("div",null,"File Name: currency_map.csv Directory: F[folder code][unique code]/HotelX[unique code]/BusinessRules Delimiter: Comma (\u201c,\u201d) Header Row: * Code * Rate * Decimal separator for rate must be point (\u201c.\u201d)"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Check some of the most common use cases"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Simple value field [A\xf1adir csv] Multivalue field [A\xf1adir csv]"))),(0,o.kt)("h3",{id:"execute-currency-converter-plugin"},"Execute Currency Converter plugin"),(0,o.kt)("p",null,"ESCRIBIR ESTA PARTE"))}f.isMDXComponent=!0}}]);