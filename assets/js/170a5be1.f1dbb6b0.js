"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),p=i,y=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={sidebar_position:4},a="Currencies",s={unversionedId:"apps/distribution/extranet/general-settings/configuration/currencies",id:"apps/distribution/extranet/general-settings/configuration/currencies",title:"Currencies",description:"Distribution allows you to make a currency exchange from the currency your suppliers provide you to the currency that your buyers are requesting you. The currency exchange used by default in Distribution is updated every day from the European Central Bank. However, you can customize your own currency exchange using the currency exchange master file to indicate your own base currencye and the exchanges you prefer.",source:"@site/docs/apps/distribution/extranet/general-settings/configuration/currencies.mdx",sourceDirName:"apps/distribution/extranet/general-settings/configuration",slug:"/apps/distribution/extranet/general-settings/configuration/currencies",permalink:"/docs/apps/distribution/extranet/general-settings/configuration/currencies",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/extranet/general-settings/configuration/currencies.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Modifiers",permalink:"/docs/apps/distribution/extranet/general-settings/configuration/modifiers"},next:{title:"Others",permalink:"/docs/apps/distribution/extranet/general-settings/configuration/others"}},c={},l=[{value:"Block currencies by country",id:"block-currencies-by-country",level:2},{value:"Force Requested Currency",id:"force-requested-currency",level:2},{value:"Allowed Currencies",id:"allowed-currencies",level:2},{value:"Allow Currency Exchange",id:"allow-currency-exchange",level:2}],u={toc:l},h="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"currencies"},"Currencies"),(0,i.kt)("p",null,"Distribution allows you to make a currency exchange from the currency your suppliers provide you to the currency that your buyers are requesting you. The currency exchange used by default in Distribution is updated every day from the European Central Bank. However, you can customize your own currency exchange using the ",(0,i.kt)("a",{parentName:"p",href:"#"},"currency exchange master file")," to indicate your own base currencye and the exchanges you prefer."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The number of currencies offered by the European Central Bank (ECB) is ",(0,i.kt)("a",{parentName:"p",href:"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"},"limited"),", so in case you need a currency that is not supported by ECB, we can set up an additional exchange supplier offering more than 150 currencies. This option could be also used meanwhile you use ECB exchange for your main currencies. As this is a customized option, we are at your disposal through our ticketing service in order to assist you with your currencies customization in Distribution.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Is possible to check the exact currency exchange that Distribution is using in that moment in the ",(0,i.kt)("a",{parentName:"p",href:"#"},"Searches panel")," at the extranet.")),(0,i.kt)("h2",{id:"block-currencies-by-country"},"Block currencies by country"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/distribution_configuration-currencies1.jpg",alt:"Distribution Currencies"})),(0,i.kt)("p",null,"With this rule a default currency and a list of not admitted currencies can be set for a concrete country. When applying this rule to a selling it must be used the definition for the country of the selling's hotel. If a selling is received from the supplier with a currency included on the not admitted ones (for the hotel's country definition) then this currency must be exchanged to the default currency: if it cannot be exchanged then the selling will be discarded. If this rule is not set for the country of a selling's hotel then the previous condition will not be applied."),(0,i.kt)("p",null,"This rule will be applied together with the rest of the rules that affect the currencies: the most restrictive rules have priority over the others. Be careful when setting various currency rules as they can create a conflict and some sellings can be discarded unwittingly."),(0,i.kt)("p",null,"By default there are no blocked currencies for any country."),(0,i.kt)("p",null,"This rule can only be set by ",(0,i.kt)("inlineCode",{parentName:"p"},"organization")," on general settings (the same behaviour for all agencies)."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If this rule is used together with the ",(0,i.kt)("em",{parentName:"p"},"Allow Currency Exchange")," rule (by agency) then there may be conflicts as both rules share behaviour on currencies. It is strongly recomended to use only the 'Allow Currency Exchange' rule if possible.")),(0,i.kt)("h2",{id:"force-requested-currency"},"Force Requested Currency"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/distribution_configuration-currencies2.jpg",alt:"Distribution Currencies"})),(0,i.kt)("p",null,"If the requested currency is forced to be returned then all the sellings of the response have to be returned with the currency received on the request (without exception). If a selling is not received from the supplier with the correct currency then it must be exchanged to it: if it cannot be exchanged then the selling will be discarded. If the requested currency is not forced to be returned then the previous condition will not be applied."),(0,i.kt)("p",null,"This rule will be applied together with the rest of the rules that affect the currencies: the most restrictive rules have priority over the others. Be careful when setting various currency rules as they can create a conflict and some sellings can be discarded unwittingly."),(0,i.kt)("p",null,"By default the requested currency is not forced."),(0,i.kt)("p",null,"This rule can only be set by ",(0,i.kt)("inlineCode",{parentName:"p"},"agency"),"."),(0,i.kt)("h2",{id:"allowed-currencies"},"Allowed Currencies"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/distribution_configuration-currencies3.jpg",alt:"Distribution Currencies"})),(0,i.kt)("p",null,"With this rule it can be set a default currency and a list of currencies and so force all the sellings of the response to be returned with any of these currencies. If a selling is not received from the supplier for a currency of the list then it will be exchanged to the default currency: if it cannot be exchanged then the selling will be discarded. If the rule is not set for any currency then the previous condition will not be applied."),(0,i.kt)("p",null,"This rule will be applied together with the rest of the rules that affect the currencies: the most restrictive rules have priority over the others. Be careful when setting various currency rules as they can create a conflict and some sellings can be discarded unwittingly."),(0,i.kt)("p",null,"By default this rule is not set for any currency."),(0,i.kt)("p",null,"This rule can only be set by ",(0,i.kt)("inlineCode",{parentName:"p"},"agency"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If this rule is used together with the ",(0,i.kt)("em",{parentName:"p"},"Allow Currency Exchange")," rule (by agency) then there may be conflicts as both rules share behaviour on currencies. It is strongly recomended to use only the 'Allow Currency Exchange' rule if possible.")),(0,i.kt)("h2",{id:"allow-currency-exchange"},"Allow Currency Exchange"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.travelgate.com/docs/distribution_configuration-currencies4.jpg",alt:"Distribution Currencies"})),(0,i.kt)("p",null,"This rule has two modes of operation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Do not allow exchange and apply filters:")," with this mode it can be set in general and for a concrete country a list of currencies and so force all the sellings of the response to be returned with any of these currencies. When applying this rule to a selling it must be used the definition for the country of the selling's hotel and if it is not set for that country then the general definition will be used. If a selling is received from the supplier with a currency not included on the admitted ones then it will be discarded. There cannot be done any currency exchange."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Allow only custom exchange:")," with this mode it can be set in general and for a concrete country a default currency and a list of admitted currencies. When applying this rule to a selling the definition for the country of the selling's hotel must be used and if it is not set for that country then the general definition will be used. If a selling is received from the supplier with a currency not included on the admitted ones (for the hotel's country definition) then this currency must be exchanged to the default currency: if it cannot be exchanged then the selling will be discarded.")),(0,i.kt)("p",null,"If the rule is not set in none of the two modes then the previous conditions will not be applied. This rule will be applied together with the rest of the rules that affect the currencies: the most restrictive rules have priority over the others. Be careful when setting various currency rules as they can create a conflict and some sellings can be discarded unwittingly."),(0,i.kt)("p",null,"By default this rule is not set for none of the modes."),(0,i.kt)("p",null,"This rule can only be set by ",(0,i.kt)("inlineCode",{parentName:"p"},"agency"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If this rule is used together with the 'Allowed Currencies' rule (by agency) or the ",(0,i.kt)("em",{parentName:"p"},"Block currencies by country")," rule (general settings) then there may be conflicts as all these rules share behaviour on currencies. It is strongly recomended to use only the ",(0,i.kt)("em",{parentName:"p"},"Allow Currency Exchange")," rule if possible.")))}d.isMDXComponent=!0}}]);