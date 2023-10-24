"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),y=i,h=c["".concat(l,".").concat(y)]||c[y]||d[y]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},18356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:12},o="Search by Destination",s={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination",title:"Search by Destination",description:"The Search by Destination plugin enables to search by destinations codes in the Search query. Destination codes will be converted to hotel codes, then merged with the hotel codes sent in criteria if any, and finally the request will be sent to the supplier. In order to achieve the destination to hotel conversion, a source must be specified in a plugin.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/search-by-destination.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"docsSidebar",previous:{title:"Virtual Credit Card",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/virtual-credit-card"},next:{title:"Markets Group",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/markets-group"}},l={},u=[{value:"1. Execute Search by Destination Plugin in your Query",id:"1-execute-search-by-destination-plugin-in-your-query",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"search-by-destination"},"Search by Destination"),(0,i.kt)("p",null,"The Search by Destination plugin enables to search by destinations codes in the Search query. Destination codes will be converted to hotel codes, then merged with the hotel codes sent in criteria if any, and finally the request will be sent to the supplier. In order to achieve the destination to hotel conversion, a source must be specified in a plugin."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You don't need to create any files for this plugin. Just specify it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," field in your search query.")),(0,i.kt)("h2",{id:"1-execute-search-by-destination-plugin-in-your-query"},"1. Execute Search by Destination Plugin in your Query"),(0,i.kt)("p",null,"To use the plugin add the following field to the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that search by destination plugin can just be executed in search query. In order to successfully execute the search by destination plugin, you will need to create the request with the following variables."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"step")),': "REQUEST"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"type")),': "PRE_STEP"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"name")),': "search_by_destination"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"parameters")),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"key")),': "accessID"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"value")),": The access used to convert destinations to hotel from its hotel list, which means that the hotel codes obtained are in the same context as the access.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"settings": {\n    "plugins": [\n        {\n            "step": "REQUEST",\n            "pluginsType": {\n                "type": "PRE_STEP",\n                "name": "search_by_destination",\n                "parameters": [\n                    {\n                        "key": "accessID",\n                        "value": "0000"\n                    }\n                ]\n            }\n        }\n    ]\n}\n')),(0,i.kt)("admonition",{title:"Remember",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When you're setting up your ",(0,i.kt)("a",{parentName:"p",href:"../booking-flow/search"},"search")," query, be sure to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"destinations")," field in the criteria, not ",(0,i.kt)("inlineCode",{parentName:"p"},"hotels"),". This is where you can specify your destination codes."),(0,i.kt)("p",{parentName:"admonition"},"To discover the destination codes accessible for your access, just refer to the ",(0,i.kt)("a",{parentName:"p",href:"../content/destinations"},"destinations")," content query.")))}d.isMDXComponent=!0}}]);