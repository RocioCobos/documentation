"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5720],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=o,y=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38731:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_position:7},i="Currency Converter",l={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",title:"Currency Converter",description:"The Currency Converter plugin enables the application of currency conversion to all the prices within a single option. This plugin takes an option and a currency as input and provides the same option with currency conversion applied to all the prices. It obtains rate information from a file located on our FTP server. It's important to note that the existence of this file on the FTP server and its compliance with specific requirements are mandatory. Otherwise, an error will be returned.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Add Parameter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter"},next:{title:"Preference",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/preference"}},u={},c=[{value:"1.Create and Upload your Currency Converter File",id:"1create-and-upload-your-currency-converter-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3},{value:"2. Execute Currency Converter Plugin in your Query",id:"2-execute-currency-converter-plugin-in-your-query",level:2}],p=(s="BrowserWindow",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var s;const d={toc:c},m="wrapper";function y(e){let{components:r,...a}=e;return(0,o.kt)(m,(0,n.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"currency-converter"},"Currency Converter"),(0,o.kt)("p",null,"The Currency Converter plugin enables the application of currency conversion to all the prices within a single option. This plugin takes an option and a currency as input and provides the same option with currency conversion applied to all the prices. It obtains rate information from a file located on our FTP server. It's important to note that the existence of this file on the FTP server and its compliance with specific requirements are mandatory. Otherwise, an error will be returned."),(0,o.kt)("p",null,"To get started with the Currency Converter plugin, follow these simple steps:"),(0,o.kt)("h2",{id:"1create-and-upload-your-currency-converter-file"},"1.Create and Upload your Currency Converter File"),(0,o.kt)("p",null,"To get started, create your currency converter file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,o.kt)(p,{mdxType:"BrowserWindow"},(0,o.kt)("p",null,"\ud83d\udcc1F0  _0000",(0,o.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_0000",(0,o.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1BusinessRules",(0,o.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,o.kt)("strong",{parentName:"p"},"\ud83d\udcc4",(0,o.kt)("a",{target:"_blank",href:t(93454).Z},"currency_map.csv")))),(0,o.kt)("h3",{id:"file-format-specification"},"File Format Specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"File Name:")," currency_map.csv"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Directory:")," F0_0000/HotelX0000/BusinessRules"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,o.kt)("inlineCode",{parentName:"li"},","),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Header Row:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Code"),(0,o.kt)("li",{parentName:"ul"},"Rate",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Decimal separator for rate must be point ",(0,o.kt)("inlineCode",{parentName:"li"},"."))))))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The rate with value 1.00 is the base currency. Other rates are calculated from it.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))),(0,o.kt)("h2",{id:"2-execute-currency-converter-plugin-in-your-query"},"2. Execute Currency Converter Plugin in your Query"),(0,o.kt)("p",null,"Once you've uploaded your currency converter file, to use the plugin add the following field to the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that currency converter plugin can just be executed in search query. In order to successfully execute the preference plugin, you will need to create the request with the following variables."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"step")),': "RESPONSE_OPTION"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"type")),': "PRE_STEP"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"name")),': "currency_exchange"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"parameters")),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"currency")),": The currency to which you want to convert, ISO 4217."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"exclude")),": True or false. Determinates if the options on which the currency change cannot be applied (no currency found in ftp) are excluded.")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "RESPONSE_OPTION",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "currency_exchange",\n                 "parameters": [\n                        {\n                            "key": "currency",\n                            "value": "EUR"\n                        },\n                        {\n                            "key": "exclude",\n                            "value": "true"\n                        }\n                    ]\n            }\n        }\n    ]\n}\n')))}y.isMDXComponent=!0},93454:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/files/currency_map-f7082ffa6f5a40f37ee34764165822c7.csv"}}]);