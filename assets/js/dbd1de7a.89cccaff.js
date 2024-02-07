/*! For license information please see dbd1de7a.89cccaff.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47828],{59900:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=n(17624),t=n(4552);const i={sidebar_position:10},o="Currency List",l={id:"apis/for-sellers/hotel-pull-sellers-api/content/currency-list",title:"Currency List",description:"The Currency List method returns a comprehensive currencies list a supplier's supports in Avail method. The returned fields include: Currency code, Currency name etc.",source:"@site/docs/apis/for-sellers/hotel-pull-sellers-api/content/currency-list.mdx",sourceDirName:"apis/for-sellers/hotel-pull-sellers-api/content",slug:"/apis/for-sellers/hotel-pull-sellers-api/content/currency-list",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/currency-list",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-sellers/hotel-pull-sellers-api/content/currency-list.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Market List",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/market-list"},next:{title:"Configuration",permalink:"/docs/apis/for-sellers/hotel-pull-sellers-api/content/configuration"}},c={},a=[{value:"CurrencyList Request",id:"currencylist-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"CurrencyList Response",id:"currencylist-response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}];function d(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"currency-list",children:"Currency List"}),"\n",(0,s.jsxs)(r.p,{children:["The Currency List method returns a comprehensive currencies list a supplier's supports in Avail method. The returned fields include: ",(0,s.jsx)(r.code,{children:"Currency code"}),", ",(0,s.jsx)(r.code,{children:"Currency name"})," etc."]}),"\n",(0,s.jsx)(r.h2,{id:"currencylist-request",children:"CurrencyList Request"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-xml",children:'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:CurrencyList>\n         <ns:currencyListRQ>\n            <ns:timeoutMilliseconds>20000</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <CurrencyListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                     <timeoutMilliseconds>19700</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n                           <Parameter key = "Access" value = "22334"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                  </CurrencyListRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:currencyListRQ>\n      </ns:CurrencyList>\n   </soapenv:Body>\n</soapenv:Envelope>\n'})}),"\n",(0,s.jsx)(r.h3,{id:"request-data-breakdown",children:"Request Data Breakdown"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"CurrencyList"})," request does not require any elements."]}),"\n",(0,s.jsx)(r.h2,{id:"currencylist-response",children:"CurrencyList Response"}),"\n",(0,s.jsxs)(r.p,{children:["After each request, you will have to process the data and provide a response. Upon receiving a ",(0,s.jsx)(r.code,{children:"CurrencyList"})," request, you will need to send a corresponding ",(0,s.jsx)(r.code,{children:"CurrencyList"})," response."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-xml",children:"<CurrencyListRS>\n   <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>\n   <Currencies>\n      <Currency>\n         <Code>EUR</Code>\n         <Name>Euro</Name>\n      </Currency>\n      <Currency>\n         <Code>USD</Code>\n         <Name>Dollar</Name>\n      </Currency>\n   </Currencies>\n</CurrencyListRS>\n"})}),"\n",(0,s.jsx)(r.h3,{id:"response-data-breakdown",children:"Response Data Breakdown"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Element"}),(0,s.jsx)(r.th,{children:"Rel"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CurrencyListRS/UpgradeUTCDate"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"DateTime"}),(0,s.jsx)(r.td,{children:"Indicates the update date of the information in UTC format."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CurrencyListRS/Currencies"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"Root node, list of currencies."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Currencies/Currency"}),(0,s.jsx)(r.td,{children:"0..n"}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"@code"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"String"}),(0,s.jsx)(r.td,{children:"ISO - 3 Code."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"@Name"}),(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"String"}),(0,s.jsx)(r.td,{children:"Name of the currency."})]})]})]})]})}function u(e={}){const{wrapper:r}={...(0,t.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},44808:(e,r,n)=>{var s=n(11504),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var s,i={},a=null,d=null;for(s in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:a,ref:d,props:i,_owner:l.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},17624:(e,r,n)=>{e.exports=n(44808)},4552:(e,r,n)=>{n.d(r,{I:()=>l,M:()=>o});var s=n(11504);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);