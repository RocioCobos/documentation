"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,y=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:10},o="Safety Margin",l={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin",title:"Safety Margin",description:"Safety Margin plugin allows discarding options that have a commission lower than expected. Only options that have a commission over gross, equal or lower than those reported in the file will be returned.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/safety-margin.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Preference",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/preference"},next:{title:"Virtual Credit Card",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card"}},s={},p=[{value:"1.Create and Upload your Safety Margin File",id:"1create-and-upload-your-safety-margin-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3},{value:"2. Execute Safety Margin Plugin in your Query",id:"2-execute-safety-margin-plugin-in-your-query",level:2}],u=(m="BrowserWindow",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const d={toc:p},c="wrapper";function y(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"safety-margin"},"Safety Margin"),(0,r.kt)("p",null,"Safety Margin plugin allows discarding options that have a commission lower than expected. Only options that have a commission over gross, equal or lower than those reported in the file will be returned. "),(0,r.kt)("p",null,"The expected commission has to be loaded in a safety-margin file. Sequentially, the rules will be evaluated until a match is found, upon finding it, the process will be stopped and the commission will be evaluated. In the same way, if the rule is not found, the option will be validated."),(0,r.kt)("p",null,"The matching process uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"clientTokens")," field, which identify the provided by the client and it is used to filter which business rules can be applied in the request sent."),(0,r.kt)("p",null,"To get started with the Preference plugin, follow these simple steps:"),(0,r.kt)("h2",{id:"1create-and-upload-your-safety-margin-file"},"1.Create and Upload your Safety Margin File"),(0,r.kt)("p",null,"To get started, create your safety margin file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)("p",null,"\ud83d\udcc1F0  _0000",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_0000",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1BusinessRules",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("strong",{parentName:"p"},"\ud83d\udcc4",(0,r.kt)("a",{target:"_blank",href:a(83297).Z},"BuyerContext_sequential_safetymargin.csv")))),(0,r.kt)("h3",{id:"file-format-specification"},"File Format Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"File Name:")," BuyerContext_sequential_safetymargin.csv"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Directory:")," F0_0000/HotelX0000/BusinessRules"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,r.kt)("inlineCode",{parentName:"li"},","),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Header Row:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RuleId (mandatory):")," Rule identifier"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ClientTokens (mandatory):"),"  Identifier provided by the client that is used to filter which business rules can be applied for the sent request",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SupplierCodes (mandatory):")," Supplier codes you want the rule to be applied to.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NotSupplierCodes (mandatory):")," Supplier codes you don't want the rule to be applied to.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CreationDateFrom:")," Start creation date (yyyy-mm-dd)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CreationDateTo:")," End creation date (yyyy-mm-dd)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CheckInFrom:")," Check in from date (yyyy-mm-dd)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CheckInTo:")," Check in to date (yyyy-mm-dd)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HotelCodes:")," Hotel codes you want the rule to be applied to.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NothotelCodes:")," Hotel codes you don't want the rule to be applied to.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ChainsCodes:")," Chain codes you want the rule to be applied to.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NotChainCodes:")," Chain codes you don't want the rule to be applied to.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DestinationCodes:")," Destination codes you want the rule to be applied to.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NotDestinationCodes:")," Destination codes you don't want the rule to be applied to.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Separator for multiples codes in the same row: Semicolon ",(0,r.kt)("inlineCode",{parentName:"li"},";")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Percentage (mandatory):")," Commission value, decimal separator must be point ",(0,r.kt)("inlineCode",{parentName:"li"},"."))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"),(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))),(0,r.kt)("h2",{id:"2-execute-safety-margin-plugin-in-your-query"},"2. Execute Safety Margin Plugin in your Query"),(0,r.kt)("p",null,"Once you've uploaded your safety margin file, to use the plugin add the following field to the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that safety margin plugin can just be executed in search query. In order to successfully execute the safety margin plugin, you will need to create the request with the following variables."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"step")),': "RESPONSE_OPTION"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"type")),': "PRE_STEP"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"name")),': "safety_margin"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "RESPONSE_OPTION",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "safety_margin"\n            }\n        }\n    ]\n}\n')))}y.isMDXComponent=!0},83297:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/BuyerContext_sequential_safetymargin-392b7b1a60009c39cb50ecca20342ab9.csv"}}]);