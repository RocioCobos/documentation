"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5720],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return t?n.createElement(y,i(i({ref:r},s),{},{components:t})):n.createElement(y,i({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38731:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:12},i="Currency Converter",l={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",title:"Currency Converter",description:"Currency converter plugin allows to apply currency conversion over all the prices in one option. This plugin receives an option + a currency and returns the same option with currency conversion applied over all the prices. It reads the information about rates from a file located in our ftp. Is mandatory that this file exists in the ftp and satisfies all the requirements below. Otherwise, an error will be returned.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Virtual Credit Card",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card"},next:{title:"Search by Destination",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination"}},u={},c=[{value:"1.Create and upload your Currency Converter file",id:"1create-and-upload-your-currency-converter-file",level:2},{value:"File format specification",id:"file-format-specification",level:3},{value:"Check some of the most common use cases",id:"check-some-of-the-most-common-use-cases",level:3},{value:"2. Execute Currency Converter plugin in your query",id:"2-execute-currency-converter-plugin-in-your-query",level:3}],s=(p="BrowserWindow",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const m={toc:c},d="wrapper";function y(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"currency-converter"},"Currency Converter"),(0,a.kt)("p",null,"Currency converter plugin allows to apply currency conversion over all the prices in one option. This plugin receives an option + a currency and returns the same option with currency conversion applied over all the prices. It reads the information about rates from a file located in our ftp. Is mandatory that this file exists in the ftp and satisfies all the requirements below. Otherwise, an error will be returned."),(0,a.kt)("p",null,"To get started with the Currency Converter plugin, follow these simple steps:"),(0,a.kt)("h2",{id:"1create-and-upload-your-currency-converter-file"},"1.Create and upload your Currency Converter file"),(0,a.kt)("p",null,"First, create your currency converter file in the correct format and then upload it to your FTP account. To assist you with this process, you can download the template file below, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,a.kt)(s,{mdxType:"BrowserWindow"},(0,a.kt)("p",null,"\ud83d\udcc1F0","_","0000",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_0000",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1BusinessRules",(0,a.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4",(0,a.kt)("a",{parentName:"p",href:"#"},"currency_map.csv"))),(0,a.kt)("h3",{id:"file-format-specification"},"File format specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File Name:")," currency_map.csv"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Directory:")," F0_0000/HotelX0000/BusinessRules"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,a.kt)("inlineCode",{parentName:"li"},","),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Header Row:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Code"),(0,a.kt)("li",{parentName:"ul"},"Rate",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Decimal separator for rate must be point ",(0,a.kt)("inlineCode",{parentName:"li"},"."))))))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The rate with value 1.00 is the base currency. Other rates are calculated from it.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"),(0,a.kt)("div",null,(0,a.kt)("div",null,"[A\xf1adir v\xeddeo]"))),(0,a.kt)("h3",{id:"check-some-of-the-most-common-use-cases"},"Check some of the most common use cases"),(0,a.kt)("p",null,"Here are some common use cases for the Safety Margin plugin, along with the CSV template file to use:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,a.kt)("th",{parentName:"tr",align:null},"CSV Template file"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Simple value field"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udcc4",(0,a.kt)("a",{parentName:"td",href:"#"},"currency_map.csv"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Multi value field"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udcc4",(0,a.kt)("a",{parentName:"td",href:"#"},"currency_map.csv"))))),(0,a.kt)("h3",{id:"2-execute-currency-converter-plugin-in-your-query"},"2. Execute Currency Converter plugin in your query"),(0,a.kt)("p",null,"ESCRIBIR ESTA PARTE (TODO)"))}y.isMDXComponent=!0}}]);