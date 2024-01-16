"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:13},i="Markets Group",l={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group",title:"Markets Group",description:"Markets Group plugin groups the input markets from Search depending on the agrupations you\u2019ve decided beforehand. In order to be able to use the plugin, you\u2019ll have to decide which markets to join for which supplier. This way the Search will only process as many transactions as groups have been formed by the plugin, since all of the markets of a same group would return the same options.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"docsSidebar",previous:{title:"Search by Destination",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination"},next:{title:"Overview",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/one-shot-booking-flow/overview"}},s={},p=[{value:"1. Create and Upload your Markets Group File",id:"1-create-and-upload-your-markets-group-file",level:2},{value:"File format specification",id:"file-format-specification",level:3},{value:"2. Execute Markets Group Plugin in your Query",id:"2-execute-markets-group-plugin-in-your-query",level:2}],u=(c="BrowserWindow",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const m={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"markets-group"},"Markets Group"),(0,n.kt)("p",null,"Markets Group plugin groups the input markets from Search depending on the agrupations you\u2019ve decided beforehand. In order to be able to use the plugin, you\u2019ll have to decide which markets to join for which supplier. This way the Search will only process as many transactions as groups have been formed by the plugin, since all of the markets of a same group would return the same options."),(0,n.kt)("p",null,"To get started with the Markets Group plugin, follow these simple steps:"),(0,n.kt)("h2",{id:"1-create-and-upload-your-markets-group-file"},"1. Create and Upload your Markets Group File"),(0,n.kt)("p",null,"To get started, create your markets markets_groups file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)("p",null,"\ud83d\udcc1F0  _0000",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_0000",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1BusinessRules",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("strong",{parentName:"p"},"\ud83d\udcc4",(0,n.kt)("a",{parentName:"strong",href:"https://storage.travelgate.com/docs/markets_group.csv"},"markets_groups.csv")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Keep in mind that this plugin is only available in Search step and the markets groups will not be recalculated after Search step. So if you take an option from Search that has been executed with market groups, those groups will remain the same through all the booking flow, even if you change those groups via ftp.")),(0,n.kt)("h3",{id:"file-format-specification"},"File format specification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"File Name:")," markets_group.csv"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Directory:")," F0_0000/HotelX0000/BusinessRules"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,n.kt)("inlineCode",{parentName:"li"},","),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Header Row:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supplier:")," Supplier code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Markets:")," List of groups of markets",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Each group will be separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";")," and each market will be separated by ",(0,n.kt)("inlineCode",{parentName:"li"},"#")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Other:")," Boolean value true/false",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"True:")," The Search input markets (",(0,n.kt)("inlineCode",{parentName:"li"},"HotelCriteriaSearchInput"),") not found in this configuration file, will be joined together and we will launch a query to the provider searching for options in these markets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"False:")," These markets will be discarded.")))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\ud83d\udcf9Learn how to change the format of the csv file in order to edit and save it"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))),(0,n.kt)("h2",{id:"2-execute-markets-group-plugin-in-your-query"},"2. Execute Markets Group Plugin in your Query"),(0,n.kt)("p",null,"Once you've uploaded your markets group file, to use the plugin add the following field to the ",(0,n.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that markets group plugin can just be executed in search query. In order to successfully execute the markets group plugin, you will need to create the request with the following variables."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"step")),': "REQUEST_ACCESS"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"type")),': "PRE_STEP"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"name")),': "markets_group"')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "REQUEST_ACCESS",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "markets_group"\n            }\n        }\n    ]\n}\n')))}h.isMDXComponent=!0}}]);