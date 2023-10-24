"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92228],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:6},o="Add Parameter",l={unversionedId:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter",id:"apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter",title:"Add Parameter",description:"The add parameter plugin allows to add parameters to existing accesses in the configuration. The plugin can be used in all booking services, allowing you to dynamically add parameters during the request time.",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/plugins",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/add-parameter.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Commission",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/commision"},next:{title:"Currency Converter",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/currency-converter"}},p={},u=[{value:"1. Execute Add Parameter Plugin in your Query",id:"1-execute-add-parameter-plugin-in-your-query",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-parameter"},"Add Parameter"),(0,a.kt)("p",null,"The add parameter plugin allows to add parameters to existing accesses in the configuration. The plugin can be used in all booking services, allowing you to dynamically add parameters during the request time."),(0,a.kt)("p",null,"Additionally, you have the option to replace the value of an existing parameter by adding a parameter with the same key in the query. This allows you to add different parameters to multiple accesses and/or suppliers in the same query."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You don't need to create any files for this plugin. Just specify it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," field in your search query.")),(0,a.kt)("h2",{id:"1-execute-add-parameter-plugin-in-your-query"},"1. Execute Add Parameter Plugin in your Query"),(0,a.kt)("p",null,"To use the plugin add the following field to the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," node of your request. Note that add paramenter plugin can be executed in ",(0,a.kt)("inlineCode",{parentName:"p"},"search"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"quote"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"book"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"booking")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," requests. In order to successfully execute the add paramenter plugin, you will need to create the request with the following variables."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"step")),': "REQUEST_ACCESS"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"type")),': "PRE_STEP"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"name")),': "add_parameterX"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"parameters")),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"key")),': "JSONConfiguration"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"value")),": JSON structure with parameters that you add by access, supplier or parameter.")))),(0,a.kt)("p",null,'For example, for the supplier "HOTELTEST" you add the parameter with key "D" and value "4".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings" : {\n        "plugins" : [\n            {\n                "step" : "REQUEST_ACCESS",\n                "pluginsType" : [\n                    {\n                        "name" : "add_parameterX",\n                        "type" : "POST_STEP",\n                        "parameters" : [\n                            {\n                                "key" : "JSONConfiguration",\n                                "value" : "{ \\"suppliers\\": [{ \\"codes\\": [\\"HOTELTEST\\"], \\"parameters\\": [{ \\"key\\": \\"D\\", \\"value\\": \\"4\\" }] }] }"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}\n')))}c.isMDXComponent=!0}}]);