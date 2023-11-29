"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49328],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(a),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=f;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},27133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const s={sidebar_position:6},o="Specific Stop Sales",r={unversionedId:"apps/distribution/extranet/general-settings/specific-stop-sales",id:"apps/distribution/extranet/general-settings/specific-stop-sales",title:"Specific Stop Sales",description:"Specific stop sales rules let you create a specific set of conditions for a product to be excluded from sale at the organization or agency (buyer) level.",source:"@site/docs/apps/distribution/extranet/general-settings/specific-stop-sales.mdx",sourceDirName:"apps/distribution/extranet/general-settings",slug:"/apps/distribution/extranet/general-settings/specific-stop-sales",permalink:"/docs/apps/distribution/extranet/general-settings/specific-stop-sales",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/extranet/general-settings/specific-stop-sales.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"General Stop Sales",permalink:"/docs/apps/distribution/extranet/general-settings/general-stop-sales"},next:{title:"Overview",permalink:"/docs/apps/distribution/extranet/tools/overview"}},l={},c=[{value:"Create and configurate a new rule",id:"create-and-configurate-a-new-rule",level:2},{value:"Outdated Rules",id:"outdated-rules",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"specific-stop-sales"},"Specific Stop Sales"),(0,i.kt)("p",null,"Specific stop sales rules let you create a specific set of conditions for a product to be excluded from sale at the organization or agency (buyer) level."),(0,i.kt)("p",null,"On this page, you will find a table with all the configured stop sales rules. The table shows the conditions on which each rule applies, such as: agencies, hotels, markets, refundable, check-in dates, and so on."),(0,i.kt)("p",null,"The first and second columns show the rule code and name. The third column shows the applied pricing. The Actions column contains buttons that you can use to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Information: View the last update and rule comments."),(0,i.kt)("li",{parentName:"ul"},"Edit: Edit the rule."),(0,i.kt)("li",{parentName:"ul"},"Delete: Delete the rule.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If in one of the columns you have a button, it means that you have configurated a list of values, and the condition will be fulfilled if it has at least one of those values. To see the values that are applied, you can click the button and a modal will be displayed showing them.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/distribution_specific-stop-sales1.jpg",alt:"Distribution Specific Stop Sales"})),(0,i.kt)("h2",{id:"create-and-configurate-a-new-rule"},"Create and configurate a new rule"),(0,i.kt)("p",null,"To create a specific selling pricing rule in this section, we have to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Create New Rule")," button and a modal similar to the following image will be displayed:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/distribution_specific-stop-sales2.jpg",alt:"Distribution Specific Stop Sales"})),(0,i.kt)("p",null,"In the ",(0,i.kt)("em",{parentName:"p"},"Basic")," tab you should add basic information about the stop sales as the name to identify it and rate conditions as ",(0,i.kt)("em",{parentName:"p"},"package"),", ",(0,i.kt)("em",{parentName:"p"},"refundable")," or its ",(0,i.kt)("em",{parentName:"p"},"price type"),". You can also select from this tab if the stop sale should be applied to all agencies and providers or indicate an specific list of each group. A comment is mandatory to create the stop sale."),(0,i.kt)("p",null,"In the ",(0,i.kt)("em",{parentName:"p"},"Advanced")," tab you can choose some additional settings that the system will consider to apply the stop sale, such as a specific list of mealplans, markets, check-in dates or booking dates."),(0,i.kt)("p",null,"In the ",(0,i.kt)("em",{parentName:"p"},"Hotels")," tab, you can select a list of hotels, hotel country or city, chains and destinations to decide to which this rule applies."),(0,i.kt)("h2",{id:"outdated-rules"},"Outdated Rules"),(0,i.kt)("p",null,"There are some stop sales that can only be applied to certain dates, for example, if you have created a specific stop sale applying to check-in dates in December. These stop sales must be gradually eliminated so that inactive rules do not accumulate and in order to streamline operations."),(0,i.kt)("p",null,"When you have expired stop sales, its rows will be displayed in red and the following message will be displayed in the extranet:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/distribution_specific-stop-sales3.jpg",alt:"Distribution Specific Stop Sales"})),(0,i.kt)("p",null,"If you select the trash button, all the stop sales rules whose date has already passed will be eliminated."))}d.isMDXComponent=!0}}]);