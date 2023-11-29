"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40857],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46637:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:4},o="Cancel",i={unversionedId:"apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel",id:"apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel",title:"Cancel",description:"The Cancel operation allows you to cancel a booking made via TravelgateX. The returned fields include: ProviderLocator, CancelId, TransactionStatus, Price etc.",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/booking-management",slug:"/apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel",draft:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/booking-management/cancel.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Reservation Read",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/booking-management/reservation-read"},next:{title:"Quickstart",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/quickstart"}},s={},u=[{value:"Cancel Request",id:"cancel-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"Cancel Response",id:"cancel-response",level:2},{value:"Success",id:"success",level:3},{value:"Success Response Data Breakdown",id:"success-response-data-breakdown",level:4},{value:"Error",id:"error",level:3}],p={toc:u},d="wrapper";function c(t){let{components:e,...n}=t;return(0,l.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cancel"},"Cancel"),(0,l.kt)("p",null,"The Cancel operation allows you to cancel a booking made via TravelgateX. The returned fields include: ",(0,l.kt)("inlineCode",{parentName:"p"},"ProviderLocator"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelId"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"TransactionStatus"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Price")," etc."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The amount of information returned might vary between Sellers.")),(0,l.kt)("h2",{id:"cancel-request"},"Cancel Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:Cancel>\n         <ns:cancelRQ>\n            <ns:timeoutMilliseconds>20000</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <CancelRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema" hotelCode = "">\n                      <timeoutMilliseconds>19700</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n                           <Parameter key = "Access" value = "22334"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                     <Locators>\n                        <Client>XXXXXXX</Client>\n                        <Provider>XXXXXXX</Provider>\n                     </Locators>\n                     <StartDate>28/11/2014</StartDate>\n                     <EndDate>28/11/2014</EndDate>\n                     <Holder title = "Miss" name = "Test11" surname = "TestAp11"/>\n                  </CancelRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:cancelRQ>\n      </ns:Cancel>\n   </soapenv:Body>\n</soapenv:Envelope>\n')),(0,l.kt)("h3",{id:"request-data-breakdown"},"Request Data Breakdown"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Check the values you need to add in the ",(0,l.kt)("a",{parentName:"p",href:"../making-requests/request-headers"},"header")," and ",(0,l.kt)("a",{parentName:"p",href:"../making-requests/common-elements"},"common elements"),".")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Element")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Number")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRQ"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Root node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@hotelCode"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Hotel code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRQ/Locators"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Locator Information (it's mandatory to indicate either the client or supplier's).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Locators/Client"),(0,l.kt)("td",{parentName:"tr",align:null},"0..1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Client locator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Locators/Provider"),(0,l.kt)("td",{parentName:"tr",align:null},"0..1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Supplier locator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRQ/StartDate"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Start date of booking.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRQ/EndDate"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"End date of booking.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRQ/Holder"),(0,l.kt)("td",{parentName:"tr",align:null},"0..1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Holder of the booking.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@title"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Holder\u2019s title. Possible values: Mr, Mrs, Miss, Ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@name"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Holder's name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@surname"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Holder's surname.")))),(0,l.kt)("h2",{id:"cancel-response"},"Cancel Response"),(0,l.kt)("p",null,"After each request, the Seller will process the data and provide you with a response. Upon receiving a ",(0,l.kt)("inlineCode",{parentName:"p"},"Cancel")," request, the Seller will send you a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"Cancel")," response. "),(0,l.kt)("p",null,"The response options include either ",(0,l.kt)("strong",{parentName:"p"},"success")," or an ",(0,l.kt)("strong",{parentName:"p"},"error"),". In the event of success, you will receive the transaction status."),(0,l.kt)("h3",{id:"success"},"Success"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<CancelRS>\n   <ProviderLocator>YYYYYYYY</ProviderLocator> \n   <CancelId>0000000</CancelId>\n   <TransactionStatus>\n      <ComunicationStatus>OK</ComunicationStatus>\n      <RSStatus>EXISTE</RSStatus>\n      <ResStatus>CN</ResStatus>\n   </TransactionStatus>\n   <Price  currency="EUR" amount="120.5" binding="false" commission="-1"/>\n</CancelRS>\n')),(0,l.kt)("h4",{id:"success-response-data-breakdown"},"Success Response Data Breakdown"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Rel"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRS"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Root node.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRS/ProviderLocator"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Supplier locator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRS/CancelId"),(0,l.kt)("td",{parentName:"tr",align:null},"0..1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Cancellation id.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRS/TransactionStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction Status.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TransactionStatus/ComunicationStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Status communication (OFFLINE, OK and KO).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TransactionStatus/RSStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("details",null,"     ",(0,l.kt)("summary",null,"Response Status"),"     ",(0,l.kt)("div",null,"         ",(0,l.kt)("div",null,"          ",(0,l.kt)("table",null,"  \t\t\t\t ",(0,l.kt)("thead",null,"  \t\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("th",null,"  \t\t\t\t\t\t\t ",(0,l.kt)("strong",null,"Status"),"  \t\t\t\t\t\t "),"  \t\t\t\t\t\t ",(0,l.kt)("th",null,"  \t\t\t\t\t\t\t ",(0,l.kt)("strong",null,"Description"),"  \t\t\t\t\t\t "),"  \t\t\t\t\t "),"  \t\t\t\t "),"  \t\t\t\t ",(0,l.kt)("tbody",null,"  \t\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"DESCONOCIDO"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"Unknown"),"  \t\t\t\t\t "),"  \t\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"EXISTE"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"Exists"),"  \t\t\t\t\t "),"           ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"EXISTECANCELADA"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"exists but it's cancelled"),"  \t\t\t\t\t "),"\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"NO_EXISTE"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"Does not exist"),"  \t\t\t\t\t "),"       "),"  \t\t\t"),"         "),"     ")," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TransactionStatus/ResStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("details",null,"     ",(0,l.kt)("summary",null,"Reservation Status"),"     ",(0,l.kt)("div",null,"         ",(0,l.kt)("div",null,"          ",(0,l.kt)("table",null,"  \t\t\t\t ",(0,l.kt)("thead",null,"  \t\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("th",null,"  \t\t\t\t\t\t\t ",(0,l.kt)("strong",null,"Status Code"),"  \t\t\t\t\t\t "),"  \t\t\t\t\t\t ",(0,l.kt)("th",null,"  \t\t\t\t\t\t\t ",(0,l.kt)("strong",null,"Description"),"  \t\t\t\t\t\t "),"  \t\t\t\t\t "),"  \t\t\t\t "),"  \t\t\t\t ",(0,l.kt)("tbody",null,"  \t\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"OK"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"The reservation was completed with no problems."),"  \t\t\t\t\t "),"  \t\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"RQ"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"The reservation was completed but the product is still not available, so the reservation goes into a waiting list (Request)."),"  \t\t\t\t\t "),"           ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"CN"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"The reservation was completed but due to a supplier error or a timeout the system will immediately cancel the reservation to prevent further possible errors."),"  \t\t\t\t\t "),"\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"UN"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"The reservation was completed but due to a supplier error or a timeout, the reservation status is unknown. It is the client\u2019s responsibility to check if the booking is OK."),"  \t\t\t\t\t "),"       "),"  \t\t\t"),"         "),"     ")," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CancelRS/Price"),(0,l.kt)("td",{parentName:"tr",align:null},"0..1"),(0,l.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"Fee for the cancellation. (see ",(0,l.kt)("a",{parentName:"td",href:"../content/meta-data/"},"MetaData")," in order to verify if supplier informs of it).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@currency"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Currency code (Our system uses a standard ISO - 3 for all suppliers).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@amount"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@binding"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"If binding is set as true, then the client can\u2019t sell the product for a lower price that the one set by the supplier. If it set as as false, the client can sell the product for a lower price.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"@commission"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("details",null,"     ",(0,l.kt)("summary",null,"Commission Scenarios"),"     ",(0,l.kt)("div",null,"         ",(0,l.kt)("div",null,"          ",(0,l.kt)("table",null,"  \t\t\t\t ",(0,l.kt)("thead",null,"  \t\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("th",null,"  \t\t\t\t\t\t\t ",(0,l.kt)("strong",null,"Commission"),"  \t\t\t\t\t\t "),"  \t\t\t\t\t\t ",(0,l.kt)("th",null,"  \t\t\t\t\t\t\t ",(0,l.kt)("strong",null,"Description"),"  \t\t\t\t\t\t "),"  \t\t\t\t\t "),"  \t\t\t\t "),"  \t\t\t\t ",(0,l.kt)("tbody",null,"  \t\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"0"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"The price returned is net."),"  \t\t\t\t\t "),"  \t\t\t\t\t ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"-1"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"The supplier has not supplied the sale price nor the commission. This information is in the commercial contract with the supplier."),"  \t\t\t\t\t "),"           ",(0,l.kt)("tr",null,"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"Greater than 0"),"  \t\t\t\t\t\t ",(0,l.kt)("td",null,"X = % of the commission applied to the amount."),"  \t\t\t\t\t "),"\t\t\t\t "),"  \t\t\t"),"         "),"     ")," "))))),(0,l.kt)("h3",{id:"error"},"Error"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<CancelRS>\n   <operationImplemented>true</operationImplemented>\n   <applicationError>\n      <code/>\n      <type>105</type>\n      <description>Communication Error.</description>\n      <httpStatusCode>0</httpStatusCode>\n   </applicationError>\n</CancelRS>\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Error codes that will be included in the response in the event of an error"),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("strong",null,"Error Code")),(0,l.kt)("th",null,(0,l.kt)("strong",null,"Error Description")))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"101"),(0,l.kt)("td",null,"System Exception (Exception not controlled or not classified as general exception).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"102"),(0,l.kt)("td",null,"Supplier Error.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"103"),(0,l.kt)("td",null,"Too many requests to the supplier.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"104"),(0,l.kt)("td",null,"Timeout (Timeout during the execution of an operation (look in the common attribute timeout )).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"105"),(0,l.kt)("td",null,"Communication Error.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"204"),(0,l.kt)("td",null,"Supplier returns 0 results in availability.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"205"),(0,l.kt)("td",null,"The Supplier doesn\u2019t accept the distribution RQ.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"206"),(0,l.kt)("td",null,"The Supplier doesn\u2019t accept the dates RQ.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"207"),(0,l.kt)("td",null,"The Supplier doesn\u2019t accept the request RQ.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"301"),(0,l.kt)("td",null,"Option not found in policies.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"302"),(0,l.kt)("td",null,"Hotel Not Found in DescriptiveInfo.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"303"),(0,l.kt)("td",null,"Booking not confirmed in the supplier\u2019s system."))))))))}c.isMDXComponent=!0}}]);