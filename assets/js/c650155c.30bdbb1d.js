/*! For license information please see c650155c.30bdbb1d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58789],{7812:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=s(74848),r=s(28453);const a={sidebar_position:1},o="Quickstart",i={id:"apis/for-sellers/hotel-push-sellers-api/quickstart",title:"Quickstart",description:"Introduction",source:"@site/docs/apis/for-sellers/hotel-push-sellers-api/quickstart.mdx",sourceDirName:"apis/for-sellers/hotel-push-sellers-api",slug:"/apis/for-sellers/hotel-push-sellers-api/quickstart",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-push-sellers-api/quickstart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Cancel",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/booking-management/cancel"},next:{title:"Endpoint",permalink:"/docs/apis/for-sellers/hotel-push-sellers-api/making-requests/endpoint"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Let&#39;s Get Started: How to Make your First Sale!",id:"lets-get-started-how-to-make-your-first-sale",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"API Endpoint",id:"api-endpoint",level:4},{value:"Request Headers",id:"request-headers",level:4},{value:"Supported Operations",id:"supported-operations",level:4},{value:"1. Retrieve the setup of the product (Hotel, Rate Plan, Room).",id:"1-retrieve-the-setup-of-the-product-hotel-rate-plan-room",level:3},{value:"2. Push the availability",id:"2-push-the-availability",level:3},{value:"3. Push the rates",id:"3-push-the-rates",level:3},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["By combining the Hotel Push Sellers API and ",(0,t.jsx)(n.a,{href:"/docs/apps/inventory/extranet/overview",children:"Inventory Tool"}),", Channel Managers and Hotel Distributors can effectively ",(0,t.jsx)(n.strong,{children:"push"})," their products into a Travelgate database, thereby making them accessible to Travelgate Buyers."]}),"\n",(0,t.jsxs)(n.p,{children:["As a standard practice, Buyers usually configure the setup (hotels, rate plans, and rooms) within the ",(0,t.jsx)(n.a,{href:"https://inventory.xmltravelgate.com/Account/Login?ReturnUrl=%2f",children:"Inventory Extranet"}),". Subsequently, Sellers push both availability and rates. Consequently, Travelgate Buyers gain access to these products through three distinct methods: either through Pull, using our ",(0,t.jsx)(n.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"Hotel-X solution"}),"; through Push, utilizing our ",(0,t.jsx)(n.a,{href:"/docs/apis/for-buyers/inventory-buyers/channel-x-push-buyers-api/quickstart",children:"Channel-X solution"}),"; or via a Flat File solution."]}),"\n",(0,t.jsxs)(n.p,{children:["\xa0\n",(0,t.jsx)(n.img,{src:"https://storage.travelgate.com/docs/push_seller_api.svg",alt:"Hotel Push Seller Overview"})]}),"\n",(0,t.jsx)(n.h2,{id:"lets-get-started-how-to-make-your-first-sale",children:"Let's Get Started: How to Make your First Sale!"}),"\n",(0,t.jsx)(n.p,{children:"The Hotel Push Sellers API provides a robust XML-based API that will enable you to push all your products to our Inventory Tool, making them accessible for Buyers. If you're a Channel Manager or Supplier seeking a push integration, please follow the next steps."}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.h4,{id:"api-endpoint",children:"API Endpoint"}),"\n",(0,t.jsx)(n.p,{children:"Hotel Push Seller API, being a XML-based API, utilizes a single endpoint for all operations:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"https://pushprovider.xmltravelgate.com/Service/Hotel/Provider/ProviderGEN.svc\n"})}),"\n",(0,t.jsx)(n.h4,{id:"request-headers",children:"Request Headers"}),"\n",(0,t.jsx)(n.p,{children:'To interact with the API, you\'ll need to include the Authentication request header, which employs two levels of authentication, namely "Security" and "POS":'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Security Level: User and password of our Inventory Tool System."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"POS Level: It comprises two fields: RequestorID, which represents the Seller code assigned to initiate the request, and CompanyName, which signifies the buyer code assigned to receive the updates."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<SOAP-ENV:Envelope xmlns:SOAP-ENV = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1 = "http://www.opentravel.org/OTA/2003/05" xmlns:ns2 = "http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:ns3 = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n <SOAP-ENV:Header>\n     <ns3:Security SOAP-ENV:mustUnderstand = "1">\n         <ns3:UsernameToken>\n             <ns3:Username>username</ns3:Username>\n             <ns3:Password>password</ns3:Password>\n         </ns3:UsernameToken>\n     </ns3:Security>\n </SOAP-ENV:Header>\n <SOAP-ENV:Body>\n     <ns:HotelRatePlanNotif>\x3c!--Your request, ex: HotelAvailNotif, HotelRatePlanInventoryRetrieve ...--\x3e\n         <ns:request>\n             <ns1:POS>\n                 <ns1:Source>\n                     <ns1:RequestorID ID="Seller Code"/>\n                     <ns1:BookingChannel>\n                         <ns1:CompanyName Code="Buyer Code"/>\n                     </ns1:BookingChannel>\n                 </ns1:Source>\n             </ns1:POS>\n             ...\n             ...\n         </ns:request>\n   </ns:HotelRatePlanNotif>\n </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"During the onboarding process, your username and password will be provided. After each connection is established, you'll receive an email with  RequestorID (Seller Code) and CompanyName (Buyer Code) values."})}),"\n",(0,t.jsx)(n.h4,{id:"supported-operations",children:"Supported Operations"}),"\n",(0,t.jsxs)(n.p,{children:["In the context of the Hotel Push Sellers API, you can both push and retrieve information about ",(0,t.jsx)(n.strong,{children:"Availability"}),", ",(0,t.jsx)(n.strong,{children:"Rates"}),", and ",(0,t.jsx)(n.strong,{children:"Inventory"})," (ARI)."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When you ",(0,t.jsx)(n.strong,{children:"push data"}),", you'll need to submit a request to Travelgate's system with all the necessary information about inventory, availability or rate. If everything goes smoothly, you'll receive a successful response and the data will be stored in a Travelgate database; otherwise, you'll receive an error message."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the other hand, when you ",(0,t.jsx)(n.strong,{children:"retrieve data"}),", you'll need to send a request to Travelgate's system to get the information you're looking for. If everything goes well, we'll send you the data that was previously stored in our system as a response; otherwise, we'll notify you of an error."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"But now, this quickstart guide will focus on the basics of using the Hotel Push Sellers API to push the ARI (Availability, Rates, and Inventory) to Travelgate's system and begin making the first sales, so let's dive in and get started!"}),"\n",(0,t.jsx)(n.h3,{id:"1-retrieve-the-setup-of-the-product-hotel-rate-plan-room",children:"1. Retrieve the setup of the product (Hotel, Rate Plan, Room)."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"HotelRatePlanInventory"})," message is where the adventure starts! The aim of this step is to setup (hotel, rate plans, and rooms) your inventory. This step is typically performed by the Buyer; who usually accesses our ",(0,t.jsx)(n.a,{href:"https://inventory.xmltravelgate.com/Account/Login?ReturnUrl=%2f",children:"Inventory Extranet"})," to complete the setup there. Consequently, the Seller only needs to retrieve the data to map it into their system and subsequently push the availability and rates."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If the Seller prefers to take charge of the inventory setup, it is also possible through ",(0,t.jsx)(n.a,{href:"availability-rates-and-inventory/inventory/inventory-push",children:"inventory push"})," method."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://schemas.xmlsoap.org/soap/envelope/">\n   <Header>\n      <o:Security xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n         <o:UsernameToken Id="xnExysS120i8nwXu90DOToFTjoyuWpFe">\n            <o:Username>username</o:Username>\n            <o:Password>password</o:Password>\n         </o:UsernameToken>\n      </o:Security>\n   </Header>\n   <Body>\n      <HotelRatePlanInventoryRetrieve xmlns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10">\n         <request Version="0">\n            <POS xmlns="http://www.opentravel.org/OTA/2003/05">\n               <Source>\n                  <RequestorID ID="Seller Code"/>\n                  <BookingChannel>\n                     <CompanyName Code="Buyer Code"/>\n                  </BookingChannel>\n               </Source>\n            </POS>\n            <RatePlans xmlns="http://www.opentravel.org/OTA/2003/05">\n               <RatePlan>\n                  <HotelRef HotelCode="2"/>\n               </RatePlan>\n            </RatePlans>\n         </request>\n      </HotelRatePlanInventoryRetrieve>\n   </Body>\n</Envelope>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"2-push-the-availability",children:"2. Push the availability"}),"\n",(0,t.jsx)(n.p,{children:"After a careful review of all the inventory setup retrieved in the previous step, it's time to proceed and push availability to the product."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://www.opentravel.org/OTA/2003/05" xmlns:ns2="http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:ns3="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <SOAP-ENV:Header>\n      <ns3:Security SOAP-ENV:mustUnderstand="1">\n         <ns3:UsernameToken>\n            <ns3:Username>username</ns3:Username>\n            <ns3:Password>password</ns3:Password>\n         </ns3:UsernameToken>\n      </ns3:Security>\n   </SOAP-ENV:Header>\n   <SOAP-ENV:Body>\n      <ns2:HotelAvailNotif>\n         <ns2:request>\n            <ns1:POS>\n               <ns1:Source>\n                  <ns1:RequestorID ID="Seller Code"/>\n                  <ns1:BookingChannel>\n                     <ns1:CompanyName Code="Buyer Code"/>\n                  </ns1:BookingChannel>\n               </ns1:Source>\n            </ns1:POS>\n            <ns1:AvailStatusMessages HotelCode="2">\n               <ns1:AvailStatusMessage BookingLimit="13">\n                  <ns1:StatusApplicationControl Start="2023-12-20" End="2023-12-22" PromotionCode = "25" RatePlanCode="BAR" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true"/>\n               </ns1:AvailStatusMessage>\n               <ns1:AvailStatusMessage>\n                  <ns1:StatusApplicationControl Start="2023-12-20" End="2023-12-22" RatePlanCode="BAR" InvCode="STD3" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true"/>\n                  <ns1:LengthsOfStay>\n                     <ns1:LengthOfStay Time="1" TimeUnit="Day" MinMaxMessageType="MinLOS"/>\n                     <ns1:LengthOfStay Time="28" TimeUnit="Day" MinMaxMessageType="MaxLOS"/>\n                  </ns1:LengthsOfStay>\n                  <ns1:RestrictionStatus Restriction="Master" Status="Open"/>\n               </ns1:AvailStatusMessage>\n               <ns1:AvailStatusMessage>\n                  <ns1:StatusApplicationControl Start="2023-12-20" End="2023-12-22" RatePlanCode="BAR" InvCode="STD3" Mon="true" Tue="true" Weds="true" Thur="true" Fri="true" Sat="true" Sun="true"/>\n                  <ns1:RestrictionStatus Restriction="Arrival" Status="Open"/>\n               </ns1:AvailStatusMessage>\n            </ns1:AvailStatusMessages>\n         </ns2:request>\n      </ns2:HotelAvailNotif>\n   </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-push-the-rates",children:"3. Push the rates"}),"\n",(0,t.jsx)(n.p,{children:"You're almost there! After pushing the availability, it's time to finish the process by pushing the rates. Once this is done, all the information will be in our database, and Buyers will be able to start making their first reservations."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://schemas.xmltravelgate.com/hubpush/provider/2012/10" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:ns1="http://www.opentravel.org/OTA/2003/05">\n   <s:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </s:Header>\n   <s:Body>\n      <ns:HotelRatePlanNotif>\n         <ns:request>\n            <ns1:POS>\n               <ns1:Source>\n                  <ns1:RequestorID ID="Seller Code"/>\n                  <ns1:BookingChannel>\n                     <ns1:CompanyName Code="Buyer Code"/>\n                  </ns1:BookingChannel>\n               </ns1:Source>\n            </ns1:POS>\n            <ns1:RatePlans HotelCode="2">\n                <RatePlan CurrencyCode="EUR" RatePlanCode="BAR" RateReturn="false" FreeChild="false" FreeBaby="false" RatePlanStatusType="Active">\n                    <Rates>\n                        <Rate Start="2024-01-01" End="2024-01-01">\n                            <BaseByGuestAmts>\n                                <BaseByGuestAmt AmountAfterTax="100" Type="25" />\n                            </BaseByGuestAmts>\n                        </Rate>\n                    </Rates>\n                    <SellableProducts>\n                        <SellableProduct InvCode="SNG" InvType="ROOM" />\n                    </SellableProducts>\n                </RatePlan>\n                <RatePlan CurrencyCode="EUR" RatePlanCode="BAR" RateReturn="false" FreeChild="false" FreeBaby="false" RatePlanStatusType="Active">\n                    <Rates>\n                        <Rate Start="2024-01-02" End="2024-01-02">\n                            <BaseByGuestAmts>\n                                <BaseByGuestAmt AmountAfterTax="100" Type="25" />\n                            </BaseByGuestAmts>\n                        </Rate>\n                    </Rates>\n                    <Supplements>\n                        <Supplement AgeQualifyingCode="10" Amount="10" Start="2024-01-02" End="2024-01-02" SupplementType="Board" InvCode="19" />\n                        <Supplement AgeQualifyingCode="8" Amount="5" Start="2024-01-02" End="2024-01-02" SupplementType="Board" InvCode="19" />\n                        <Supplement AgeQualifyingCode="7" Amount="0" Start="2024-01-02" End="2024-01-02" SupplementType="Board" InvCode="19" />\n                    </Supplements>\n                    <SellableProducts>\n                        <SellableProduct InvCode="SNG" InvType="ROOM" />\n                    </SellableProducts>\n                </RatePlan>\n            </RatePlans>\n         </request>\n      </HotelRatePlanNotif>\n  </s:Body>\n</s:Envelope>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(n.p,{children:"Congratulations on completing this quickstart tutorial! \ud83c\udf89 You've successfully learned the basics of making your first sale. But there's a world of knowledge waiting for you:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Explore the ",(0,t.jsx)(n.a,{href:"./making-requests/endpoint",children:"Making Requests"})," section to dive deep into how a XML API works and maximize its performance."]}),"\n",(0,t.jsxs)(n.li,{children:["Discover various methods/messages grouped by the following actions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./availability-rates-and-inventory/inventory/inventory-push",children:"Inventory"}),": Push the inventory setup (hotel, rate, room)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./availability-rates-and-inventory/availability/availability-push",children:"Availability"})," and ",(0,t.jsx)(n.a,{href:"./availability-rates-and-inventory/rates/rates-push",children:"Rate"}),": Push rate availability, allotment conditions and rate prices and supplements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./booking-management/overview",children:"Manage reservations"}),": Get the hang of reservation management."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Our documentation is a treasure trove of additional features and functionalities to enhance your business. To uncover these valuable resources, explore our documentation further and make the most of these methods. Enjoy your journey!"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,n,s)=>{var t=s(96540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,s){var t,a={},u=null,d=null;for(t in void 0!==s&&(u=""+s),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:r,type:e,key:u,ref:d,props:a,_owner:i.current}}n.Fragment=a,n.jsx=u,n.jsxs=u},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var t=s(96540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);