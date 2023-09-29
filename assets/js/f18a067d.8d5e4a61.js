"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75871],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:3},a="Mapping",p={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",title:"Mapping",description:"Mapping plugin serves to convert either the Supplier's native codes to the Buyer's codes or vice versa. This feature includes Hotel Map, Board Map, Room Map, Rate Map, Amenity Map, Promotion Map and Room Description Map categories.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Blacklist",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/blacklist"},next:{title:"Add Parameter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter"}},l={},u=[{value:"Create Mapping file",id:"create-mapping-file",level:3},{value:"Execute Mapping plugin",id:"execute-mapping-plugin",level:3}],s=(c="BrowserWindow",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const m={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"Mapping plugin serves to convert either the Supplier's native codes to the Buyer's codes or vice versa. This feature includes Hotel Map, Board Map, Room Map, Rate Map, Amenity Map, Promotion Map and Room Description Map categories."),(0,r.kt)("p",null,"In order for the blacklist plugin to work, you need to have the blacklist file in the FTP + add the plugin to the request. (ESCRIBIR ESTA PARTE PARA MAPPING)"),(0,r.kt)("h3",{id:"create-mapping-file"},"Create Mapping file"),(0,r.kt)(s,{mdxType:"BrowserWindow"},(0,r.kt)("p",null,"F","[Folder code]",(0,r.kt)("em",{parentName:"p"},"[Unique code]","\nHotelX"),"[Unique code]","\nMaps\nHotel\n","[Context Source]",(0,r.kt)("em",{parentName:"p"},"[Context Destination]","_hotel_map.csv\nBoard\n","[Context Source]"),"[Context Destination]",(0,r.kt)("em",{parentName:"p"},"board_map.csv\nRoom\n","[Context Source]"),"[Context Destination]",(0,r.kt)("em",{parentName:"p"},"room_map.csv\nRate\n","[Context Source]"),"[Context Destination]",(0,r.kt)("em",{parentName:"p"},"rate_map.csv\nAmenity\n","[Context Source]"),"[Context Destination]",(0,r.kt)("em",{parentName:"p"},"amenity_map.csv\nPromotion\n","[Context Source]"),"[Context Destination]",(0,r.kt)("em",{parentName:"p"},"promotion_map.csv\nRoom\n","[Context Source]"),"[Context Destination]","_roomdescription_map.csv")),(0,r.kt)("p",null,"Download the file, include your data following the example (delete the first line), save it in csv format, and upload it to your FTP following the example."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You need to create one file for each Supplier.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Learn how to change the format of the csv file in order to edit and save it"),(0,r.kt)("div",null,(0,r.kt)("div",null,"[A\xf1adir v\xeddeo]"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Check the definitions and file format if you have any doubts about the example"),(0,r.kt)("div",null,(0,r.kt)("div",null,"File Name: [Context Source]_[Context Destination]_[entity]_map.csv Directory: F[folder code][unique code]/HotelX[unique code]/Maps/[entity] Delimiter: Comma (\u201c,\u201d) Header Row: * Context Source: Client's context code * Context Destination: Supplier's context code"))),(0,r.kt)("h3",{id:"execute-mapping-plugin"},"Execute Mapping plugin"),(0,r.kt)("p",null,"ESCRIBIR ESTA PARTE"))}f.isMDXComponent=!0}}]);