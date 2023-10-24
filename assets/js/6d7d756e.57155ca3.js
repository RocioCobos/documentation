"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?l.createElement(k,r(r({ref:t},u),{},{components:a})):l.createElement(k,r({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56999:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));const i={sidebar_position:3},r="Blacklist",o={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist",title:"Blacklist",description:"The Blacklist plugin lets you easily exclude specific hotel codes when executing a search. This means that hotels on your blacklist won't be requested from the supplier, helping you streamline your results and improve query efficiency. You can even exclude entire suppliers using customizable rules.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Mapping",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping"},next:{title:"Cheapest Price",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/cheapest-price"}},s={},p=[{value:"1. Create and Upload your Blacklist File",id:"1-create-and-upload-your-blacklist-file",level:2},{value:"File Format Specification",id:"file-format-specification",level:3},{value:"Check Some of the Most Common Use Cases",id:"check-some-of-the-most-common-use-cases",level:3},{value:"2. Execute Blacklist Plugin in your Query",id:"2-execute-blacklist-plugin-in-your-query",level:2}],u=(c="BrowserWindow",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const d={toc:p},m="wrapper";function k(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,l.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"blacklist"},"Blacklist"),(0,n.kt)("p",null,"The Blacklist plugin lets you easily exclude specific hotel codes when executing a search. This means that hotels on your blacklist won't be requested from the supplier, helping you streamline your results and improve query efficiency. You can even exclude entire suppliers using customizable rules."),(0,n.kt)("p",null,"To get started with the Blacklist plugin, follow these simple steps:"),(0,n.kt)("h2",{id:"1-create-and-upload-your-blacklist-file"},"1. Create and Upload your Blacklist File"),(0,n.kt)("p",null,"To get started, create your blacklist file in the correct format and then upload it to your FTP account. We've provided a template file below \u2b07\ufe0f to help you with this process. Just click on the file name, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)("p",null,"\ud83d\udcc1F0  _0000",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX_0000",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1BusinessRules",(0,n.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("strong",{parentName:"p"},"\ud83d\udcc4",(0,n.kt)("a",{target:"_blank",href:a(87313).Z},"blacklist_access_hotels.csv")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you need assistance with requesting your credentials to access the FTP server, determining the endpoint and directory format, or learning how to upload, update, and delete FTP files, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"../plugins/overview"},"overview")," section of Plugins.")),(0,n.kt)("h3",{id:"file-format-specification"},"File Format Specification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"File Name:")," blacklist_access_hotels.csv"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Directory:")," F0_0000/HotelX_0000/BusinessRules"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,n.kt)("inlineCode",{parentName:"li"},","),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Header Row:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IdRule:")," Unique identifier of the rule. You can assign one with the identifier that suits you better."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ClientToken:")," List of the client tokens you want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". This is a dynamic parameter that you can include in your query request if you wish to enforce particular rules from the blacklist."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NoClientToken:")," List of the client tokens you don't want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Client:")," List of the specific clients you want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NoClient:")," List of the specific clients you don't want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supplier:")," List of the supplier codes you want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NoSupplier:")," List of the supplier codes you don't want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Access:")," List of the access codes you want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NoAccess:")," List of the access codes you don't want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Context:")," List of the Buyer context codes you want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NoContext:")," List of the Buyer context codes you don't want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ContextSup:")," List of the Supplier context codes you want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NoContextSup:")," List of the Supplier context codes you don't want the rule to be applied to, separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Values:")," Values can be 'blacklist' or 'whitelist' with hotel codes grouped by context. The format is as follows:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All values should have two blocks separated by the characters ",(0,n.kt)("inlineCode",{parentName:"li"},"||"),"."),(0,n.kt)("li",{parentName:"ul"},"The first block identifies the ",(0,n.kt)("inlineCode",{parentName:"li"},"context")," and the second block identifies the list of ",(0,n.kt)("inlineCode",{parentName:"li"},"hotel codes")," separated by ",(0,n.kt)("inlineCode",{parentName:"li"},";"),". "),(0,n.kt)("li",{parentName:"ul"},"Values in the whitelist or blacklist are separated by the characters ",(0,n.kt)("inlineCode",{parentName:"li"},"|@|"),"."),(0,n.kt)("li",{parentName:"ul"},"Use 'all' as a keyword when you want to choose all contexts or all hotels."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Format examples:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Blacklist: ",(0,n.kt)("inlineCode",{parentName:"li"},"bk:(CTX1||A;B;C|@|CTX2||C;B;D;)")),(0,n.kt)("li",{parentName:"ul"},"Whitelist: ",(0,n.kt)("inlineCode",{parentName:"li"},"wl:(CTX1||A;B;C|@|CTX2||all)")),(0,n.kt)("li",{parentName:"ul"},"Blacklist and Whitelist (if blacklist and whitelist are used at same time, then the CONTEXT must be exclusive): ",(0,n.kt)("inlineCode",{parentName:"li"},"bk:(CTX1||A;B;C), wl:(CTX2||A;B;C)"))))))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Keep in mind that this file contains a collection of rules, and the system will choose ",(0,n.kt)("strong",{parentName:"p"},"the first rule that matches the criteria sent in the query"),". You must specify the most restrictive rules at the top of the file. If there's no value for any rule criteria row, it means that any value in the request matches this row. Indicate the contexts used in values on the rule criteria to improve rule matching.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\ud83d\udcf9 Learn how to change the format of the csv file in order to edit and save it"),(0,n.kt)("div",null,(0,n.kt)("div",null,(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XkOk3SkZ0Sg?si=TYhN1QfMwYE1fusw&controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})))),(0,n.kt)("h3",{id:"check-some-of-the-most-common-use-cases"},"Check Some of the Most Common Use Cases"),(0,n.kt)("p",null,"Here are some common use cases for the Blacklist plugin, along with the CSV template file to use:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,n.kt)("th",{parentName:"tr",align:null},"CSV Template file"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Block all hotels of two accesses"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udcc4",(0,n.kt)("a",{target:"_blank",href:a(47271).Z},"blacklist  _access  _hotels.csv"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Block all hotels of two suppliers"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udcc4",(0,n.kt)("a",{target:"_blank",href:a(41170).Z},"blacklist  _access  _hotels.csv"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Block all hotels except \u201cA\u201d and \u201cB\u201d of two suppliers"),(0,n.kt)("td",{parentName:"tr",align:null},"\ud83d\udcc4",(0,n.kt)("a",{target:"_blank",href:a(87928).Z},"blacklist  _access  _hotels.csv"))))),(0,n.kt)("h2",{id:"2-execute-blacklist-plugin-in-your-query"},"2. Execute Blacklist Plugin in your Query"),(0,n.kt)("p",null,"Once you've uploaded your blacklist file, to use the plugin add the following field to the ",(0,n.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that blacklist plugin can just be executed in search query. In order to successfully execute the blacklist plugin, you will need to create the request with the following variables."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"step")),': "REQUEST_ACCESS"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"type")),': "PRE_STEP"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"name")),': "blacklist"')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "REQUEST_ACCESS",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "blacklist"\n            }\n        }\n    ]\n}\n')),(0,n.kt)("p",null,"To apply a specific rule in a query, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"clientTokens")," field to the ",(0,n.kt)("inlineCode",{parentName:"p"},"settings")," node of your request:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'    "settings": {\n        "clientTokens": [\n            "testToken"\n        ],\n        "plugins": [\n            {\n                "step": "REQUEST_ACCESS",\n                "pluginsType": {\n                    "type": "PRE_STEP",\n                    "name": "blacklist"\n                }\n            }\n        ]\n    }\n')))}k.isMDXComponent=!0},47271:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/files/blacklist_access_hotels-1-e570db2a8b287b55410cb6cc2f824ae9.csv"},41170:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/files/blacklist_access_hotels-2-f4979a2d4cd25e7062cff60a5a38214a.csv"},87928:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/files/blacklist_access_hotels-3-1a6cdec3f33e3740c611420c51c8961d.csv"},87313:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/files/blacklist_access_hotels-7fab104e9fd58e2fbb9c63e0ff31ad0d.csv"}}]);