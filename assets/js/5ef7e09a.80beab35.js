"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3497],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),g=r,c=m["".concat(s,".").concat(g)]||m[g]||d[g]||l;return n?a.createElement(c,i(i({ref:e},u),{},{components:n})):a.createElement(c,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},21471:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:7},i="Meal Plan List",o={unversionedId:"apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list",id:"apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list",title:"Meal Plan List",description:"The Meal Plan List method returns a comprehensive meal planss list from a supplier's access that may include translations to other languages, granting you access to all the meal plans configured by the Seller for a given set of credentials. The returned fields include:",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/content",slug:"/apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Room List",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/room-list"},next:{title:"Metadata",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/meta-data"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"Response",id:"response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}],u={toc:p},m="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meal-plan-list"},"Meal Plan List"),(0,r.kt)("p",null,"The Meal Plan List method returns a comprehensive meal planss list from a supplier's access that may include translations to other languages, granting you access to all the meal plans configured by the Seller for a given set of credentials. The returned fields include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Name"))),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The maximum time permitted in our system before the connection is closed is 240000 milliseconds."),(0,r.kt)("p",{parentName:"admonition"},"If the supplier has over 100 meal plan codes or more than 20 codes for a single meal plan, the mapping for these codes will depend on the supplier.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n    <soapenv:Header>\n        <wsse:Security>\n            <wsse:UsernameToken>\n                <wsse:Username>username</wsse:Username>\n                <wsse:Password>password</wsse:Password>\n            </wsse:UsernameToken>\n        </wsse:Security>\n    </soapenv:Header>\n    <soapenv:Body>\n        <ns:MealPlanList>\n            <ns:mealPlanListRQ>\n                <ns:timeoutMilliseconds>180000</ns:timeoutMilliseconds>\n                <ns:version>1</ns:version>\n                <ns:providerRQ>\n                    <ns:code>code</ns:code>\n                    <ns:id>1</ns:id>\n                    <ns:rqXML>\n                        <RoomListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                            <timeoutMilliseconds>20000</timeoutMilliseconds>\n                            <source>\n                                <languageCode>en</languageCode>\n                            </source>\n                            <filterAuditData>\n                                <registerTransactions>false</registerTransactions>\n                            </filterAuditData>\n                            <optionsQuota>500</optionsQuota>\n                            <Configuration>\n                                <User>user</User>\n                                <Password>password</Password>\n                                <UrlGeneric>www.supplier.com</UrlGeneric>\n                                <Parameters>\n                                    <Parameter key = "SegundoPW" value = "PWXML"></Parameter>\n                                </Parameters>\n                            </Configuration>\n                        </MealPlanListRQ>\n                    </ns:rqXML>\n                </ns:providerRQ>\n            </ns:mealPlanListRQ>\n        </ns:MealPlanList>\n    </soapenv:Body>\n</soapenv:Envelope>\n')),(0,r.kt)("h3",{id:"request-data-breakdown"},"Request Data Breakdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Rel"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ/timeoutMilliseconds"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum time for a response from the supplier\u2019s system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RuntimeCOnfigurationRQ/source"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source/languageCode"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Language code (ISO 3166-1 alpha-2) format lowercase.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ/filterAuditData"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Activates transaction data sent & received in the supplier\u2019s native format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterAuditData/registerTransactions"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns all the transactions (XMLs) exchanged with the supplier.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"optionsQuota"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the max number of options by MealPlan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RuntimeConfigurationRQ/Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The info required to access the supplier\u2019s system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Configuration/User"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"User code to connect to supplier.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Configuration/Password"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for the connection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Configuration/UrlGeneric"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Supplier URL used for multiple methods.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Configuration/Parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"0..1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters for additional information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Parameters/Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"0..n"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@key"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the keyword/Id to identify a parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@value"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the parameter values.")))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<MealPlanListRS>\n    <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>\n    <MealPlans>\n        <MealPlan>\n            <Code>BB</Code>\n            <Name>Bed and breakfast</Name>\n        </MealPlan>\n        <MealPlan>\n            <Code>HB</Code>\n            <Name>Half board</Name>\n    </MealPlans>\n</MealPlanListRS>\n")),(0,r.kt)("h3",{id:"response-data-breakdown"},"Response Data Breakdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Rel"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlanListRS/UpgradeUTCDate"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the update date of the information in UTC format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlanListRS/MealPlans"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Root node, list of mealplans.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlans/MealPlan"),(0,r.kt)("td",{parentName:"tr",align:null},"1..n"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlan/Code"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Mealplan code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlan/Name"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Mealplan name")))))}d.isMDXComponent=!0}}]);