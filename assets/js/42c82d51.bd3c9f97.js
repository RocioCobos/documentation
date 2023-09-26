"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,y=s["".concat(i,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(67546);const l={},c="Props global",i={unversionedId:"test",id:"test",title:"Props global",description:"Here is an example of hotel list query",source:"@site/api/test.mdx",sourceDirName:".",slug:"/test",permalink:"/api/test",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"schemaSidebar",previous:{title:"EntityData",permalink:"/api/unions/entity-data"}},u={},p=[],s={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"props-global"},"Props global"),(0,o.kt)("p",null,"Here is an example of hotel list query"),(0,o.kt)(a.Z,{mdxType:"GraphqlSample"}))}f.isMDXComponent=!0},67546:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),o=n(10748),a=n(31291),l=n(7233),c=n(51048),i=n(36136),u=n(23264);let p=null;p=i.Z.canUseDOM?(0,a.n)({url:"https://api.travelgatex.com/"}):null;const s=(0,u.Z)((e=>{let{token:t}=e;const n=(0,c.Z)();return r.createElement(r.Fragment,null,n&&p&&r.createElement(o.Z,{fallback:r.createElement("div",null,"Loading...")},(()=>r.createElement(r.Fragment,null,r.createElement(l.yB,{fetcher:p,headers:`{"Authorization": "Bearer ${t??""}"}`,query:"\n    query {\n      hotelX {\n        hotels(criteria: {access: 7245}, relay: {}) {\n          edges {\n            node {\n              hotelData {\n                hotelName\n                hotelCode\n                categoryCode\n                location {\n                  city\n                  country\n                  coordinates {\n                    latitude\n                    longitude\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n"},r.createElement(l.yB.Logo,null,r.createElement(r.Fragment,null)))))))}))}}]);