"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:5},o="Geographic Destination Tree",s={unversionedId:"apis/for-buyers/legacy-pull-buyers-api/content/geographic-destination-tree",id:"apis/for-buyers/legacy-pull-buyers-api/content/geographic-destination-tree",title:"Geographic Destination Tree",description:"The Geographic Destination Tree method returns a comprehensive destination list from a supplier's access, granting you access to all the destinations configured by the Seller for a given set of credentials. The returned fields include: Destination code, Destiantion name etc.",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/content/geographic-destination-tree.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/content",slug:"/apis/for-buyers/legacy-pull-buyers-api/content/geographic-destination-tree",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/geographic-destination-tree",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/content/geographic-destination-tree.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Descriptive Info",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/descriptive-info"},next:{title:"Room List",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/room-list"}},l={},p=[{value:"GeographicDestinationTree Request",id:"geographicdestinationtree-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"GeographicDestinationTree Response",id:"geographicdestinationtree-response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3},{value:"Geographic Destination Tree Logic",id:"geographic-destination-tree-logic",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geographic-destination-tree"},"Geographic Destination Tree"),(0,r.kt)("p",null,"The Geographic Destination Tree method returns a comprehensive destination list from a supplier's access, granting you access to all the destinations configured by the Seller for a given set of credentials. The returned fields include: ",(0,r.kt)("inlineCode",{parentName:"p"},"Destination code"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Destiantion name")," etc."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The amount of information and content returned might vary between Sellers.")),(0,r.kt)("h2",{id:"geographicdestinationtree-request"},"GeographicDestinationTree Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:GeographicDestinationTree>\n         <ns:geographicDestinationTreeRQ>\n            <ns:timeoutMilliseconds>17900</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <GeographicDestinationTreeRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                    <timeoutMilliseconds>18000</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHoteles" value = "http://www.test.net/scr/searchxml/location.php?"></Parameter>\n                           <Parameter key = "UrlConsulta" value = "https://www.test.net/scr/xml/travelgate.php?"></Parameter>\n                           <Parameter key = "office" value = "55555"></Parameter>\n                           <Parameter key = "password" value = "XXXXXX"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                  </GeographicDestinationTreeRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:geographicDestinationTreeRQ>\n      </ns:GeographicDestinationTree>\n   </soapenv:Body>\n</soapenv:Envelope>\n')),(0,r.kt)("h3",{id:"request-data-breakdown"},"Request Data Breakdown"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Header y common elements")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GeographicDestinationTree")," request does not require any elements. "),(0,r.kt)("h2",{id:"geographicdestinationtree-response"},"GeographicDestinationTree Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<GeographicDestinationTreeRS>\n   <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>\n   <DestinationTree code = "ES" name = "Espa\xf1a" avail = "False">\n      <DestinationLeaf code = "BAL"/>\n      <DestinationLeaf code = "AST"/>\n      <DestinationLeaf code = "AND"/>\n   </DestinationTree>\n   <DestinationTree code= "IT" name = "Italia" avail = "False">\n      <DestinationLeaf code = "AA"/>\n      <DestinationLeaf code = "BB"/>\n   </DestinationTree>\n   <DestinationTree code = "EN" name = "England" avail = "False">\n   </DestinationTree>\n   <DestinationTree code = "BAL" name = "Baleares" avail = "True">\n      <DestinationLeaf code = "PAL0"/>\n      <DestinationLeaf code = "ALC0"/>\n   </DestinationTree>\n   <DestinationTree code = "AST" name = "Asturias" avail = "True"/>\n   <DestinationTree code = "AND" name = "Andalucia" avail = "True"/>\n   <DestinationTree code = "PAL0" name = "Palma de Mallorca" avail = " True"/>\n   <DestinationTree code = "ALC0" name = "Alcudia" avail = " True"/>\n</GeographicDestinationTreeRS>\n')),(0,r.kt)("h3",{id:"response-data-breakdown"},"Response Data Breakdown"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Rel"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GeographicDestinationTreeRS/UpgradeUTCDate"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"DateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the update date of the information in UTC format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GeographicDestinationTreeRS/DestinationTree"),(0,r.kt)("td",{parentName:"tr",align:null},"1..n"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Father node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@code"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@name"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@avail"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DestinationTree/DestinationLeaf"),(0,r.kt)("td",{parentName:"tr",align:null},"0..n"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Childs node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@code"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Sub-destination code")))),(0,r.kt)("h3",{id:"geographic-destination-tree-logic"},"Geographic Destination Tree Logic"),(0,r.kt)("p",null,"Once you run a Geograpich Destination Tree Request, you will receive the Seller's native geographic destination codes in the response. These codes can be classified into 2 categories:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Zone (DestinationTree code)"),(0,r.kt)("li",{parentName:"ol"},"City (DentinationLeaf code)")),(0,r.kt)("p",null,"Sellers build their own Geographic Destination Tree based on both nodes. Consequently, when you request their geographic destination list, you will receive a structured categorized response that can help you with the mapping process."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A parent can have zero to n children ( 0..n ) and a child can only one parent ( 1..1 ). "),(0,r.kt)("p",{parentName:"admonition"},"For example, the DestinationTree code = \u201cES\u201d is the parent of the DestinationLeaf code = \u201cBAL\u201d, \u201cAST\u201d and \u201cAND\u201d and at the same time DestinationTree code = \u201cBAL\u201d is also a the parent of the DestinationLeaf code = \u201cPAL0\u201d and \u201cALC0\u201d, and so on.")))}u.isMDXComponent=!0}}]);