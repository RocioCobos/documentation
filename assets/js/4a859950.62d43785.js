/*! For license information please see 4a859950.62d43785.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19292],{15956:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=s(17624),r=s(4552);const o={sidebar_position:3},a="Category List",i={id:"apis/for-buyers/legacy-pull-buyers-api/content/category-list",title:"Category List",description:"The Category List method returns a comprehensive hotel categories list from a supplier's access that may include translations to other languages, granting you access to all the categories configured by the Seller for a given set of credentials. The returned fields include: Category code, Category name etc.",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/content/category-list.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/content",slug:"/apis/for-buyers/legacy-pull-buyers-api/content/category-list",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/category-list",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/content/category-list.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Hotel List",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/hotel-list"},next:{title:"Descriptive Info",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/descriptive-info"}},l={},d=[{value:"CategoryList Request",id:"categorylist-request",level:2},{value:"Request Data Breakdown",id:"request-data-breakdown",level:3},{value:"CategoryList Response",id:"categorylist-response",level:2},{value:"Response Data Breakdown",id:"response-data-breakdown",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"category-list",children:"Category List"}),"\n",(0,n.jsxs)(t.p,{children:["The Category List method returns a comprehensive hotel categories list from a supplier's access that may include translations to other languages, granting you access to all the categories configured by the Seller for a given set of credentials. The returned fields include: ",(0,n.jsx)(t.code,{children:"Category code"}),", ",(0,n.jsx)(t.code,{children:"Category name"})," etc."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"The amount of information and content returned might vary between Sellers."})}),"\n",(0,n.jsx)(t.h2,{id:"categorylist-request",children:"CategoryList Request"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<soapenv:Envelope xmlns:soapenv = "http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns = "http://schemas.xmltravelgate.com/hub/2012/06" xmlns:wsse = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">\n   <soapenv:Header>\n      <wsse:Security>\n         <wsse:UsernameToken>\n            <wsse:Username>username</wsse:Username>\n            <wsse:Password>password</wsse:Password>\n         </wsse:UsernameToken>\n      </wsse:Security>\n   </soapenv:Header>\n   <soapenv:Body>\n      <ns:CategoryList>\n         <ns:categoryListRQ>\n            <ns:timeoutMilliseconds>20000</ns:timeoutMilliseconds>\n            <ns:version>1</ns:version>\n            <ns:providerRQ>\n               <ns:code>suppliercode</ns:code>\n               <ns:id>1</ns:id>\n               <ns:rqXML>\n                  <CategoryListRQ xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd = "http://www.w3.org/2001/XMLSchema">\n                     <timeoutMilliseconds>19700</timeoutMilliseconds>\n                     <source>\n                        <languageCode>en</languageCode>\n                     </source>\n                     <filterAuditData>\n                        <registerTransactions>true</registerTransactions>\n                     </filterAuditData>\n                     <Configuration>\n                        <User>user</User>\n                        <Password>password</Password>\n                        <UrlAvail>www.supplier.com/avail</UrlAvail>\n                        <UrlReservation>www.supplier.com/reservation</UrlReservation>\n                        <UrlValuation>www.supplier.com/valuation</UrlValuation>\n                        <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n                        <Parameters>\n                           <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n                           <Parameter key = "Access" value = "22334"></Parameter>\n                        </Parameters>\n                     </Configuration>\n                  </CategoryListRQ>\n               </ns:rqXML>\n            </ns:providerRQ>\n         </ns:categoryListRQ>\n      </ns:CategoryList>\n   </soapenv:Body>\n</soapenv:Envelope>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"request-data-breakdown",children:"Request Data Breakdown"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Check the values you need to add in the ",(0,n.jsx)(t.a,{href:"../making-requests/request-headers",children:"header"})," and ",(0,n.jsx)(t.a,{href:"../making-requests/common-elements",children:"common elements"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"CategoryList"})," request does not require any elements."]}),"\n",(0,n.jsx)(t.h2,{id:"categorylist-response",children:"CategoryList Response"}),"\n",(0,n.jsxs)(t.p,{children:["After each request, the Seller will have to process the data and provide a response. Upon receiving a ",(0,n.jsx)(t.code,{children:"CategoryList"})," request, the Seller will send you a corresponding ",(0,n.jsx)(t.code,{children:"CategoryList"})," response."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<CategoryListRS>\n   <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>\n   <Categories>\n      <Category>\n         <Code>3*</Code>\n         <Name>3 stars</Name>\n      </Category>\n      <Category>\n         <Code>3L</Code>\n         <Name>3 keys</Name>\n      </Category>\n   </Categories>\n</CategoryListRS>\n"})}),"\n",(0,n.jsx)(t.h3,{id:"response-data-breakdown",children:"Response Data Breakdown"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Element"}),(0,n.jsx)(t.th,{children:"Rel"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CategoryListRS/UpgradeUTCDate"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"DateTime"}),(0,n.jsx)(t.td,{children:"Indicates the update date of the information in UTC format."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CategoryListRS/Categories"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Root node, list of categories."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Categorues/Category"}),(0,n.jsx)(t.td,{children:"1..n"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Category/Code"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Category code"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Category/Name"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Category name"})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},44808:(e,t,s)=>{var n=s(11504),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,o={},d=null,c=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:d,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},17624:(e,t,s)=>{e.exports=s(44808)},4552:(e,t,s)=>{s.d(t,{I:()=>i,M:()=>a});var n=s(11504);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);