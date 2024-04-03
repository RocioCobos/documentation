/*! For license information please see 587e2c8b.7baa2895.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62136],{1788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(17624),s=t(4552);const i={sidebar_position:6,title:"Room List"},r="Room List",a={id:"apis/for-buyers/legacy-pull-buyers-api/content/room-list",title:"Room List",description:"The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the Hotel-X Buyers API in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace.",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/content/room-list.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/content",slug:"/apis/for-buyers/legacy-pull-buyers-api/content/room-list",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/room-list",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/content/room-list.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Room List"},sidebar:"docsSidebar",previous:{title:"Geographic Destination Tree",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/geographic-destination-tree"},next:{title:"Meal Plan List",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/meal-plan-list"}},l={},d=[{value:"RoomList Request",id:"roomlist-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"How to Paginate Responses",id:"how-to-paginate-responses",level:3},{value:"RoomList Response",id:"roomlist-response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Deprecated API",type:"danger",children:(0,o.jsxs)(n.p,{children:["The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the ",(0,o.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"Hotel-X Buyers API"})," in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace."]})}),"\n",(0,o.jsx)(n.h1,{id:"room-list",children:"Room List"}),"\n",(0,o.jsxs)(n.p,{children:["The Room List method returns a comprehensive room list from a supplier's access that may include translations to other languages, granting you access to all the rooms configured by the Seller for a given set of credentials. The returned fields include: ",(0,o.jsx)(n.code,{children:"Room code"}),", ",(0,o.jsx)(n.code,{children:"Room name"})," etc."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"The amount of information and content returned might vary between Sellers."})}),"\n",(0,o.jsx)(n.h2,{id:"roomlist-request",children:"RoomList Request"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:RoomList>\n         <ns:roomListRQ>\n            <ns:timeoutMilliseconds>20000</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <RoomListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                     <timeoutMilliseconds>19700</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n                           <Parameter key = "Access" value = "22334"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                  </RoomListRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:roomListRQ>\n      </ns:RoomList>\n   </soapenv:Body>\n</soapenv:Envelope>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"request-data-breakdown",children:"Request Data Breakdown"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Check the values you need to add in the ",(0,o.jsx)(n.a,{href:"../making-requests/request-headers",children:"header"})," and ",(0,o.jsx)(n.a,{href:"../making-requests/common-elements",children:"common elements"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"RoomList"})," request does not require any elements."]}),"\n",(0,o.jsx)(n.h3,{id:"how-to-paginate-responses",children:"How to Paginate Responses"}),"\n",(0,o.jsxs)(n.p,{children:["The Legacy Pull Buyers API provides paginated responses to handle cases where the number of rooms from the selected supplier exceeds 200.000. The default response page contains a maximum of 200.000 rooms, but you can specify the number of objects returned per page using the ",(0,o.jsx)(n.code,{children:"ContinuationToken"})," and the attribute ",(0,o.jsx)(n.code,{children:"expectedRange"})," fields in the request."]}),"\n",(0,o.jsx)(n.p,{children:"To include the ContinuationToken in your request, all you need to do is:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add the ContinuationToken and expectedRange fields to the request."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"After receiving a response, you will only receive a portion of the full list. To access the next page, simply copy the ContinuationToken tag from the response and include it in your next request. This will allow you to obtain a new set of objects in the following response."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Repeat these steps until the token is no longer included in the response."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If the client requests 1000 rooms, the response may contain a range between 1000 to 1999 rooms."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. Indicate the ContinuationToken and expectedRange in the Request"})}),"\n",(0,o.jsxs)(n.p,{children:["First, in your room list request you will add ",(0,o.jsx)(n.code,{children:"ContinuationTokentoken"})," field and specify in ",(0,o.jsx)(n.code,{children:"expectedRange"})," field the number of rooms expected to receive in the response:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<RoomListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">                \n  <ContinuationToken expectedRange = "1000"></ContinuationToken>\n</RoomListRQ>\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. You will recieve the Response"})}),"\n",(0,o.jsx)(n.p,{children:"You will obtain a response with 1000 rooms per page:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<RoomListRS xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">                \n  <ContinuationToken expectedRange = "1000">&lt;?xml version="1.0" encoding="utf-16"?&gt;&lt;ContinuationToken&gt;&lt;ContinuationToken&gt;&lt;Version&gt;2.0&lt;/Version&gt;&lt;Type&gt;Table&lt;/Type&gt;&lt;NextPartitionKey&gt;1!24!bG93Y29zdGhvbGlkYXlfWk1U&lt;/NextPartitionKey&gt;&lt;NextRowKey&gt;1!40!bG93Y29zdGhvbGlkYXlfWk1UXzBoNFIlMjNvcXBr&lt;/NextRowKey&gt;&lt;TargetLocation&gt;Primary&lt;/TargetLocation&gt;&lt;/ContinuationToken&gt;&lt;/ContinuationToken&gt;</ContinuationToken>\n</RoomListRS>\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3. Add the Token in the Request"})}),"\n",(0,o.jsxs)(n.p,{children:["This token should be used as input in your next rooms list request, inside the ",(0,o.jsx)(n.code,{children:"ContinuationToken"})," field:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<RoomListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">                \n  <ContinuationToken>&lt;?xml version="1.0" encoding="utf-16"?&gt;&lt;ContinuationToken&gt;&lt;ContinuationToken&gt;&lt;Version&gt;2.0&lt;/Version&gt;&lt;Type&gt;Table&lt;/Type&gt;&lt;NextPartitionKey&gt;1!24!bG93Y29zdGhvbGlkYXlfWk1U&lt;/NextPartitionKey&gt;&lt;NextRowKey&gt;1!40!bG93Y29zdGhvbGlkYXlfWk1UXzBoNFIlMjNvcXBr&lt;/NextRowKey&gt;&lt;TargetLocation&gt;Primary&lt;/TargetLocation&gt;&lt;/ContinuationToken&gt;&lt;/ContinuationToken&gt;</ContinuationToken>\n</RoomListRQ>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"roomlist-response",children:"RoomList Response"}),"\n",(0,o.jsxs)(n.p,{children:["After each request, the Seller will have to process the data and provide a response. Upon receiving a ",(0,o.jsx)(n.code,{children:"RoomList"})," request, the Seller will send you a corresponding ",(0,o.jsx)(n.code,{children:"RoomList"})," response."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<RoomListRS>\n   <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>\n   <RoomsInfo>\n      <RoomInfo>\n         <Code>STD</Code>\n         <Name>Standard</Name>\n      </RoomInfo>\n      <RoomInfo>\n         <Code>ST</Code>\n         <Name>Suite</Name>\n      </RoomInfo>\n   </RoomsInfo>\n</RoomListRS>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"response-data-breakdown",children:"Response Data Breakdown"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Element"}),(0,o.jsx)(n.th,{children:"Rel"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RoomListRS/UpgradeUTCDate"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"DateTime"}),(0,o.jsx)(n.td,{children:"Indicates the update date of the information in UTC format."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RoomListRS/RoomsInfo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"Root node, list of rooms"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RoomsInfo/RoomInfo"}),(0,o.jsx)(n.td,{children:"1..n"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RoomInfo/Code"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"Room code"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RoomInfo/Name"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"String"}),(0,o.jsx)(n.td,{children:"Room name"})]})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"In AvailRQ (Common Elements), you have the option to specify the language for the room description you want to receive. You can choose any language supported by the supplier; otherwise, the default language, typically English, will be used. The standard language options include English and Spanish."})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},44808:(e,n,t)=>{var o=t(11504),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,i={},d=null,c=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,o)&&!l.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:s,type:e,key:d,ref:c,props:i,_owner:a.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},17624:(e,n,t)=>{e.exports=t(44808)},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var o=t(11504);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);