"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:3},i="Mapping",p={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",title:"Mapping",description:"Mapping plugin serves to convert either the Supplier's native codes to the Buyer's codes or vice versa. This feature includes Hotel Map, Board Map, Room Map, Rate Map, Amenity Map, Promotion Map and Room Description Map categories.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Blacklist",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist"},next:{title:"Add Parameter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter"}},l={},u=[{value:"1. Create and upload your Mapping file",id:"1-create-and-upload-your-mapping-file",level:2},{value:"File format specification",id:"file-format-specification",level:3},{value:"2. Execute Mapping plugin in your query",id:"2-execute-mapping-plugin-in-your-query",level:2}],s=(m="BrowserWindow",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const c={toc:u},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"Mapping plugin serves to convert either the Supplier's native codes to the Buyer's codes or vice versa. This feature includes Hotel Map, Board Map, Room Map, Rate Map, Amenity Map, Promotion Map and Room Description Map categories."),(0,r.kt)("p",null,"To get started with the Mapping plugin, follow these simple steps:"),(0,r.kt)("h2",{id:"1-create-and-upload-your-mapping-file"},"1. Create and upload your Mapping file"),(0,r.kt)("p",null,"First, create your mapping file for the desired entity (hotel, board, room...) in the correct format and then upload it to your FTP account. To assist you with this process, you can download the template file below \u2b07\ufe0f, add your own rules, save it in CSV format, and then upload it to the corresponding folder in your FTP."),(0,r.kt)(s,{mdxType:"BrowserWindow"},(0,r.kt)("p",null,"\ud83d\udcc1F0","_","0000",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0"," \ud83d\udcc1HotelX","_","0000",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1Maps",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1Hotel",(0,r.kt)("br",{parentName:"p"}),"\n","","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4[/","[Buyer Context]","_","[Supplier Context]","_","hotel","_","map.csv](../../../../../static/files/hotel-x/","[Buyer Context]",(0,r.kt)("em",{parentName:"p"},"[Supplier Context]","_hotel_map.csv)",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1Board",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4[/","[Buyer Context]","_","[Supplier Context]","_","board","_","map.csv](../../../../../static/files/hotel-x/","[Buyer Context]"),"[Supplier Context]",(0,r.kt)("em",{parentName:"p"},"board_map.csv)",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1Room",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4[/","[Buyer Context]","_","[Supplier Context]","_","room","_","map.csv](../../../../../static/files/hotel-x/","[Buyer Context]"),"[Supplier Context]",(0,r.kt)("em",{parentName:"p"},"room_map.csv)",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1Rate",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4[/","[Buyer Context]","_","[Supplier Context]","_","rate","_","map.csv](../../../../../static/files/hotel-x/","[Buyer Context]"),"[Supplier Context]",(0,r.kt)("em",{parentName:"p"},"rate_map.csv)",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1Amenity",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4[/","[Buyer Context]","_","[Supplier Context]","_","amenity","_","map.csv](../../../../../static/files/hotel-x/","[Buyer Context]"),"[Supplier Context]",(0,r.kt)("em",{parentName:"p"},"amenity_map.csv)",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1Promotion",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4[/","[Buyer Context]","_","[Supplier Context]","_","promotion","_","map.csv](../../../../../static/files/hotel-x/","[Buyer Context]"),"[Supplier Context]",(0,r.kt)("em",{parentName:"p"},"promotion_map.csv)",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc1Room description",(0,r.kt)("br",{parentName:"em"}),"","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0"," \ud83d\udcc4[/","[Buyer Context]","_","[Supplier Context]","_","roomdescription","_","map.csv](../../../../../static/files/hotel-x/","[Buyer Context]"),"[Supplier Context]","_roomdescription_map.csv) ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You should create one file for each supplier that you want to map an entity.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you need assistance with requesting your credentials to access the FTP server, determining the endpoint and directory format, or learning how to upload, update, and delete FTP files, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../plugins/overview"},"overview")," section of Plugins.")),(0,r.kt)("h3",{id:"file-format-specification"},"File format specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"File Name:")," ","[Buyer Context]",(0,r.kt)("em",{parentName:"li"},"[Supplier Context]"),"[entity]","_map.csv"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Directory:")," F0","_","0000/HotelX","_","0000/Maps/","[entity]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delimiter:")," Comma (",(0,r.kt)("inlineCode",{parentName:"li"},","),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Header Row:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Buyer Context: Buyer's context code"),(0,r.kt)("li",{parentName:"ul"},"Supplier Context: Supplier's (Seller's) context code. This code can be found in the ",(0,r.kt)("a",{parentName:"li",href:"https://app.travelgatex.com/connections/myconnections"},"My Connections")," section on the TravelgateX website.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\ud83d\udcf9 Learn how to change the format of the csv file in order to edit and save it"),(0,r.kt)("div",null,(0,r.kt)("div",null,"[A\xf1adir v\xeddeo]"))),(0,r.kt)("h2",{id:"2-execute-mapping-plugin-in-your-query"},"2. Execute Mapping plugin in your query"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In the case of mapping, it will not be necessary to indicate the plugin at the request level for all mappings, only for amenities_map and promotions_map. In the remaining cases, hotel_map, board_map, room_map, etc., you just need to upload the file to the FTP.")),(0,r.kt)("p",null,"Once you've uploaded your mapping file, to use the plugin add the following field to the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that mapping plugin can just be executed in search query. In order to successfully execute the mapping plugin, you will need to create the request with the following variables, taking into account the type of mapping you want to execute."),(0,r.kt)("p",null,"For amenity_map:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"step"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"RESPONSE_OPTION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PRE_STEP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"amenity_map"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "RESPONSE_OPTION",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "amenity_map"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"For promotion_map:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"step"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"RESPONSE_OPTION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"PRE_STEP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"promotion_map"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "RESPONSE_OPTION",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "promotion_map"\n            }\n        }\n    ]\n}\n')))}y.isMDXComponent=!0}}]);