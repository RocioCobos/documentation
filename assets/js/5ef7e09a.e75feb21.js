"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:7},s="Meal Plan List",o={unversionedId:"apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list",id:"apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list",title:"Meal Plan List",description:"The Meal Plan List method returns a comprehensive meal planss list from a supplier's access that may include translations to other languages, granting you access to all the meal plans configured by the Seller for a given set of credentials. The returned fields include: MealPlan code,MealPlan name etc.",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/content",slug:"/apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Room List",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/room-list"},next:{title:"Metadata",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/meta-data"}},i={},p=[{value:"MealPlanList Request",id:"mealplanlist-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"MealPlanList Response",id:"mealplanlist-response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meal-plan-list"},"Meal Plan List"),(0,r.kt)("p",null,"The Meal Plan List method returns a comprehensive meal planss list from a supplier's access that may include translations to other languages, granting you access to all the meal plans configured by the Seller for a given set of credentials. The returned fields include: ",(0,r.kt)("inlineCode",{parentName:"p"},"MealPlan code"),",",(0,r.kt)("inlineCode",{parentName:"p"},"MealPlan name")," etc."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The amount of information and content returned might vary between Sellers.")),(0,r.kt)("h2",{id:"mealplanlist-request"},"MealPlanList Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:MealPlanList>\n         <ns:mealPlanListRQ>\n            <ns:timeoutMilliseconds>17900</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <MealPlanListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                     <timeoutMilliseconds>18000</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>\n                           <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>\n                           <Parameter key = "office" value = "55555"></Parameter>\n                           <Parameter key = "password" value = "XXXXXX"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                  </MealPlanListRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:mealPlanListRQ>\n      </ns:MealPlanList>\n   </soapenv:Body>\n</soapenv:Envelope>\n')),(0,r.kt)("h3",{id:"request-data-breakdown"},"Request Data Breakdown"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Header y common elements")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MealPlanList")," request does not require any elements. "),(0,r.kt)("h2",{id:"mealplanlist-response"},"MealPlanList Response"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the supplier has over 100 meal plan codes or more than 20 codes for a single meal plan, the mapping for these codes will depend on the supplier.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<MealPlanListRS>\n   <UpgradeUTCDate>2023-10-18T13:18:03+02:00</UpgradeUTCDate>\n   <MealPlans>\n      <MealPlan>\n         <Code>BB</Code>\n         <Name>Bed and breakfast</Name>\n      </MealPlan>\n      <MealPlan>\n         <Code>HB</Code>\n         <Name>Half board</Name>\n      </MealPlan>\n    </MealPlans>\n</MealPlanListRS>\n")),(0,r.kt)("h3",{id:"response-data-breakdown"},"Response Data Breakdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Rel"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlanListRS/UpgradeUTCDate"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the update date of the information in UTC format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlanListRS/MealPlans"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Root node, list of mealplans.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlans/MealPlan"),(0,r.kt)("td",{parentName:"tr",align:null},"1..n"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlan/Code"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Mealplan code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MealPlan/Name"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Mealplan name")))))}d.isMDXComponent=!0}}]);