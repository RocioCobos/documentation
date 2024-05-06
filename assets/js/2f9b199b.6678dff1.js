/*! For license information please see 2f9b199b.6678dff1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75213],{75096:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=n(74848),r=n(28453);const d={sidebar_position:2,title:"Hotel List"},i="Hotel List",l={id:"apis/for-buyers/legacy-pull-buyers-api/content/hotel-list",title:"Hotel List",description:"The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the Hotel-X Buyers API in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace.",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/content/hotel-list.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/content",slug:"/apis/for-buyers/legacy-pull-buyers-api/content/hotel-list",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/hotel-list",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/content/hotel-list.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Hotel List"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/overview"},next:{title:"Category List",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/category-list"}},o={},c=[{value:"HotelList Request",id:"hotellist-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"How to Paginate Responses",id:"how-to-paginate-responses",level:3},{value:"HotelList Response",id:"hotellist-response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}];function a(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{title:"Deprecated API",type:"danger",children:(0,s.jsxs)(e.p,{children:["The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the ",(0,s.jsx)(e.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"Hotel-X Buyers API"})," in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace."]})}),"\n",(0,s.jsx)(e.h1,{id:"hotel-list",children:"Hotel List"}),"\n",(0,s.jsxs)(e.p,{children:["The Hotel List method returns a comprehensive hotel list from a supplier's access to the Buyer, granting access to all the properties configured by the Seller for a given set of credentials. The returned fields include: ",(0,s.jsx)(e.code,{children:"Hotel Code"}),", ",(0,s.jsx)(e.code,{children:"GiataId"}),", ",(0,s.jsx)(e.code,{children:"Name"}),", ",(0,s.jsx)(e.code,{children:"Address"}),", ",(0,s.jsx)(e.code,{children:"ZipCode"}),", ",(0,s.jsx)(e.code,{children:"Contact"}),", ",(0,s.jsx)(e.code,{children:"CategoryCode"})," etc."]}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsx)(e.p,{children:"The amount of information and content returned might vary between Sellers."})}),"\n",(0,s.jsx)(e.h2,{id:"hotellist-request",children:"HotelList Request"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:HotelList>\n         <ns:hotelListRQ>\n            <ns:timeoutMilliseconds>20000</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <HotelListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                     <timeoutMilliseconds>19700</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n                           <Parameter key = "Access" value = "22334"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                  </HotelListRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:hotelListRQ>\n      </ns:HotelList>\n   </soapenv:Body>\n</soapenv:Envelope>\n'})}),"\n",(0,s.jsx)(e.h3,{id:"request-data-breakdown",children:"Request Data Breakdown"}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["Check the values you need to add in the ",(0,s.jsx)(e.a,{href:"../making-requests/request-headers",children:"header"})," and ",(0,s.jsx)(e.a,{href:"../making-requests/common-elements",children:"common elements"}),"."]})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"HotelList"})," request does not require any elements."]}),"\n",(0,s.jsx)(e.h3,{id:"how-to-paginate-responses",children:"How to Paginate Responses"}),"\n",(0,s.jsxs)(e.p,{children:["The Legacy Pull Buyers API provides paginated responses to handle cases where the number of hotels from the selected supplier exceeds 200.000. The default response page contains a maximum of 200.000 hotels, but you can specify the number of objects returned per page using the ",(0,s.jsx)(e.code,{children:"ContinuationToken"})," and the attribute ",(0,s.jsx)(e.code,{children:"expectedRange"})," fields in the request."]}),"\n",(0,s.jsx)(e.p,{children:"To include the ContinuationToken in your request, all you need to do is:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Add the ContinuationToken and expectedRange fields to the request."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"After receiving a response, you will only receive a portion of the full list. To access the next page, simply copy the ContinuationToken tag from the response and include it in your next request. This will allow you to obtain a new set of objects in the following response."}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Repeat these steps until the token is no longer included in the response."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"If the client requests 1000 hotels, the response may contain a range between 1000 to 1999 hotels."})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"1. Indicate the ContinuationToken and expectedRange in the Request"})}),"\n",(0,s.jsxs)(e.p,{children:["First, in your hotel list request you will add ",(0,s.jsx)(e.code,{children:"ContinuationTokentoken"})," field and specify in ",(0,s.jsx)(e.code,{children:"expectedRange"})," field the number of hotels expected to receive in the response:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<HotelListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">                \n  <ContinuationToken expectedRange = "1000"></ContinuationToken>\n</HotelListRQ>\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"2. You will recieve the Response"})}),"\n",(0,s.jsx)(e.p,{children:"You will obtain a response with 1000 hotels per page:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<HotelListRS xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">                \n  <ContinuationToken expectedRange = "1000">&lt;?xml version="1.0" encoding="utf-16"?&gt;&lt;ContinuationToken&gt;&lt;ContinuationToken&gt;&lt;Version&gt;2.0&lt;/Version&gt;&lt;Type&gt;Table&lt;/Type&gt;&lt;NextPartitionKey&gt;1!24!bG93Y29zdGhvbGlkYXlfWk1U&lt;/NextPartitionKey&gt;&lt;NextRowKey&gt;1!40!bG93Y29zdGhvbGlkYXlfWk1UXzBoNFIlMjNvcXBr&lt;/NextRowKey&gt;&lt;TargetLocation&gt;Primary&lt;/TargetLocation&gt;&lt;/ContinuationToken&gt;&lt;/ContinuationToken&gt;</ContinuationToken>\n</HotelListRS>\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"3. Add the Token in the Request"})}),"\n",(0,s.jsxs)(e.p,{children:["This token should be used as input in your next hotel list request, inside the ",(0,s.jsx)(e.code,{children:"ContinuationToken"})," field:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<HotelListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">                \n  <ContinuationToken>&lt;?xml version="1.0" encoding="utf-16"?&gt;&lt;ContinuationToken&gt;&lt;ContinuationToken&gt;&lt;Version&gt;2.0&lt;/Version&gt;&lt;Type&gt;Table&lt;/Type&gt;&lt;NextPartitionKey&gt;1!24!bG93Y29zdGhvbGlkYXlfWk1U&lt;/NextPartitionKey&gt;&lt;NextRowKey&gt;1!40!bG93Y29zdGhvbGlkYXlfWk1UXzBoNFIlMjNvcXBr&lt;/NextRowKey&gt;&lt;TargetLocation&gt;Primary&lt;/TargetLocation&gt;&lt;/ContinuationToken&gt;&lt;/ContinuationToken&gt;</ContinuationToken>\n</HotelListRQ>\n'})}),"\n",(0,s.jsx)(e.h2,{id:"hotellist-response",children:"HotelList Response"}),"\n",(0,s.jsxs)(e.p,{children:["After each request, the Seller will have to process the data and provide a response. Upon receiving a ",(0,s.jsx)(e.code,{children:"HotelList"})," request, the Seller will send you a corresponding ",(0,s.jsx)(e.code,{children:"HotelList"})," response."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<HotelListRS xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n   <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>\n   <Hotels>\n      <Hotel>\n         <Code>5</Code>  \n         <ProviderCode>27</ProviderCode>                          \n         <GiataId source = "http://urlGiata">1200</GiataId>\n         <Name>BADAJOZ</Name>\n         <Address>CTRA.NACIONAL V, KM 393</Address>\n         <Airports>\n            <Airport>\n               <IATACode>BJZ</IATACode>\n            </Airport>\n         </Airports>\n         <Town>BADAJOZ</Town>\n         <ZipCode>06002</ZipCode>\n         <CountryISOCode>ES</CountryISOCode>\n         <AvailDestination code = "06" name = "BADAJOZ"/>\n         <GeographicDestination code = "06" name = "BADAJOZ" avail = "true"/>\n         <Latitude>38.893839</Latitude>\n         <Longitude>-7.014112</Longitude>\n         <Contact>\n            <Email>badajoz@xxx.com</Email>\n            <Telephone>91425891</Telephone>\n            <Fax>910200200</Fax>\n         </Contact>\n         <CategoryCode>4 Estrellas</CategoryCode>\n         <PaymentOptions cash="false" bankAcct="false">\n            <Cards>\n               <Card code="VI"/>\n               <Card code="AX"/>\n               <Card code="CA"/>  \n            </Cards> \n         </PaymentOptions>               \n         <ExclusiveDeal>true</ExclusiveDeal>     \n         <PropertyCategory>\n            <Code>1</Code>\n            <Name>Hotel</Name>             \n         </PropertyCategory>                 \n      </Hotel>\n   </Hotels>\n</HotelListRS>\n'})}),"\n",(0,s.jsx)(e.h3,{id:"response-data-breakdown",children:"Response Data Breakdown"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Element"}),(0,s.jsx)(e.th,{children:"Rel"}),(0,s.jsx)(e.th,{children:"Type"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"HotelListRS/UpgradeUTCDate"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"DateTime"}),(0,s.jsx)(e.td,{children:"Indicates the update date of the information in UTC format."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"HotelListRS/Hotels"}),(0,s.jsx)(e.td,{children:"0..n"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotels/Hotel"}),(0,s.jsx)(e.td,{children:"0..n"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/Code"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Internal code to perform availability and/or supplier code."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/ProviderCode"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Internal code established by the supplier (see MetaData)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/GiataId"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Giata code"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@source"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Giata url"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/Name"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Hotel name"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/Address"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Hotel address"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/Airports"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Airports/Airport"}),(0,s.jsx)(e.td,{children:"1..n"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Airport/IATACode"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"IATA airport Code (airport near the hotel)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/Town"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Town"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/ZipCode"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"ZipCode"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/CountryISOCode"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"CountryISOCode"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/AvailDestination"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@code"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Avail destination code (lowest destination level)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@name"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Avail destination name (lowest destination level)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/GeographicDestination"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@code"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Geographic Destination code (lowest destination level)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@name"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Geographic Destination name (lowest destination level)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@avail"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"Indicates if it is allowed in availability."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/Latitude"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Latitude. Format is Decimal Degrees (e.g. 37.207295)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/Longitude"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Longitude. Format is Decimal Degrees (e.g. -7.23768)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/Contact"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Contact/Email"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Contact email"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Contact/Telephone"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Contact telephone"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Contact/Fax"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Contact fax"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/CategoryCode"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Hotel category code."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/Type"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)("details",{children:["     ",(0,s.jsx)("summary",{children:"Hotel Type codes"}),"     ",(0,s.jsxs)("div",{children:["         ",(0,s.jsxs)("div",{children:["          ",(0,s.jsxs)("table",{children:["   \t\t\t\t  ",(0,s.jsxs)("thead",{children:["   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsxs)("th",{children:["   \t\t\t\t\t\t\t  ",(0,s.jsx)("strong",{children:"Code"}),"   \t\t\t\t\t\t  "]}),"   \t\t\t\t\t\t  ",(0,s.jsxs)("th",{children:["   \t\t\t\t\t\t\t  ",(0,s.jsx)("strong",{children:"Name"}),"   \t\t\t\t\t\t  "]}),"   \t\t\t\t\t  "]}),"   \t\t\t\t  "]}),"   \t\t\t\t  ",(0,s.jsxs)("tbody",{children:["   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"H"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Hotel"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"A"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Apartment"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"AH"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Apartment Hotel"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"C"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Club"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"AT"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Agrotourism"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"HS"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Hostel"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"CA"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"House"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"V"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Ville"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"B"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Bungalows"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"D"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Disco Club"}),"   \t\t\t\t\t  "]}),"\t\t\t \t\t\t\t   "]}),"   \t\t\t"]}),"         "]}),"     "]})," "]})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/PaymentOptions"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Type of cards allowed by the supplier. This tag is only mandatory if payment type is different than MerchantPay."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@cash"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"Cash indicates whether payment will be made in cash (true) or by card (false)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@bankAcct"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"BankAcct specifies whether payment will be made via bank transfer (true) or not (false)."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"PaymentOptions/Cards"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Cards/Card"}),(0,s.jsx)(e.td,{children:"1..n"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Type of card allowed."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"@code"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:(0,s.jsxs)("details",{children:["     ",(0,s.jsx)("summary",{children:"Credit Card codes"}),"     ",(0,s.jsxs)("div",{children:["         ",(0,s.jsxs)("div",{children:["          ",(0,s.jsxs)("table",{children:["   \t\t\t\t  ",(0,s.jsxs)("thead",{children:["   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsxs)("th",{children:["   \t\t\t\t\t\t\t  ",(0,s.jsx)("strong",{children:"Code"}),"   \t\t\t\t\t\t  "]}),"   \t\t\t\t\t\t  ",(0,s.jsxs)("th",{children:["   \t\t\t\t\t\t\t  ",(0,s.jsx)("strong",{children:"Name"}),"   \t\t\t\t\t\t  "]}),"   \t\t\t\t\t  "]}),"   \t\t\t\t  "]}),"   \t\t\t\t  ",(0,s.jsxs)("tbody",{children:["   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"VI"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Visa"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"AX"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"American Express"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"BC"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"BC Card"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"CA"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"MasterCard"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"CB"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Carte Blanche"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"CU"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"China Union Pay"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"DS"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Discover"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t\t  ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"DC"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Diners Club"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"T"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Carta Si"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"R"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Carte Bleue"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"N"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Dankort"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"L"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Delta"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"E"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Electron"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"JC"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Japan Credit Bureau"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"TO"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Maestro"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"S"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Switch"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"EC"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Electronic Cash"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"EU"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"EuroCard"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"TP"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Universal air travel card"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"OP"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"optima"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"ER"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"Air Canada/RnRoute"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"XS"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"access"}),"   \t\t\t\t\t  "]}),"                     ",(0,s.jsxs)("tr",{children:["   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"O"}),"   \t\t\t\t\t\t  ",(0,s.jsx)("td",{children:"others"}),"   \t\t\t\t\t  "]}),"   \t\t\t\t  "]}),"   \t\t\t"]}),"         "]}),"     "]})," "]})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/ExclusiveDeal"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:"Indicates that the Hotel has an Exclusive Deal."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hotel/PropertyCategory"}),(0,s.jsx)(e.td,{children:"0..1"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Hotels property type. Similar to Type, but on supplier\u2019s side."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"PropertyCategory/Code"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Supplier\u2019s property code."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"PropertyCategory/Name"}),(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{children:"Supplier\u2019s property name."})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(a,{...t})}):a(t)}},21020:(t,e,n)=>{var s=n(96540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,n){var s,d={},c=null,a=null;for(s in void 0!==n&&(c=""+n),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(a=e.ref),e)i.call(e,s)&&!o.hasOwnProperty(s)&&(d[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps)void 0===d[s]&&(d[s]=e[s]);return{$$typeof:r,type:t,key:c,ref:a,props:d,_owner:l.current}}e.Fragment=d,e.jsx=c,e.jsxs=c},74848:(t,e,n)=>{t.exports=n(21020)},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>l});var s=n(96540);const r={},d=s.createContext(r);function i(t){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),s.createElement(d.Provider,{value:e},t.children)}}}]);