/*! For license information please see f9f4be92.4f8b57e2.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24640],{52905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(74848),s=n(28453);const i={title:"Common Elements",sidebar_position:4},o="Legacy Buyers Common Elements",d={id:"apis/for-buyers/legacy-pull-buyers-api/making-requests/common-elements",title:"Common Elements",description:"The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the Hotel-X Buyers API in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace.",source:"@site/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/common-elements.mdx",sourceDirName:"apis/for-buyers/legacy-pull-buyers-api/making-requests",slug:"/apis/for-buyers/legacy-pull-buyers-api/making-requests/common-elements",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/common-elements",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/common-elements.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Common Elements",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"XML API",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/making-requests/xml-api"},next:{title:"Overview",permalink:"/docs/apis/for-buyers/legacy-pull-buyers-api/content/overview"}},l={},a=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"Deprecated API",type:"danger",children:(0,r.jsxs)(t.p,{children:["The Legacy Pull Buyers API, our initial Buyers API launched in 2012, is now deprecated and should not be further developed. Instead, we introduced the ",(0,r.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/quickstart",children:"Hotel-X Buyers API"})," in 2017, which serves as the sole API for new Buyers looking to integrate and participate in our Marketplace."]})}),"\n",(0,r.jsx)(t.h1,{id:"legacy-buyers-common-elements",children:"Legacy Buyers Common Elements"}),"\n",(0,r.jsxs)(t.p,{children:["There are certain elements that need to be included in every request, namely common elements. These common elements include ",(0,r.jsx)(t.code,{children:"timeoutMilliseconds"}),", ",(0,r.jsx)(t.code,{children:"languageCode"}),", ",(0,r.jsx)(t.code,{children:"registerTransactions"}),", and the supplier's ",(0,r.jsx)(t.code,{children:"Configuration"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<echoToken>TEST</echoToken>\n<timeoutMilliseconds>18000</timeoutMilliseconds>\n<source>\n   <languageCode>en</languageCode>\n</source>\n<filterAuditData>\n   <registerTransactions>true</registerTransactions>\n</filterAuditData>\n<ContinuationToken expectedRange = "1000"></ContinuationToken>\n<optionsQuota>300</optionsQuota>\n<Configuration>\n   <User>user</User>\n   <Password>password</Password>\n   <UrlAvail>www.supplier.com/avail</UrlAvail>\n   <UrlReservation>www.supplier.com/reservation</UrlReservation>\n   <UrlValuation>www.supplier.com/valuation</UrlValuation>\n   <UrlGeneric>www.supplier.com/generic</UrlGeneric>\n   <Parameters>\n      <Parameter key = "UrlListHotels" value = "http://www.supplier.com/ListHotels"></Parameter>\n      <Parameter key = "Access" value = "22334"></Parameter>\n   </Parameters>\n</Configuration>\n'})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element"}),(0,r.jsx)(t.th,{children:"Rel"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"echoToken"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Echo token to be returned in response (used for test purposes only)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeoutMilliseconds"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"Maximum time for a response from the supplier\u2019s system."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"source"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"source/languageCode"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Language code (ISO 3166-1 alpha-2) format lowercase."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filterAuditData"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Activates transaction data sent & received in the supplier\u2019s native format."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filterAuditData/registerTransactions"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"Returns all the transactions (XMLs) exchanged with the supplier."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ContinuationToken"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsxs)(t.td,{children:["To paginate the response of ",(0,r.jsx)(t.a,{href:"../content/hotel-list#how-to-paginate-responses",children:"HotelList"})," and ",(0,r.jsx)(t.a,{href:"../content/room-list#how-to-paginate-responses",children:"RoomList"})," content calls."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"@expectedRange"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsxs)(t.td,{children:["To paginate the response of ",(0,r.jsx)(t.a,{href:"../content/hotel-list#how-to-paginate-responses",children:"HotelList"})," and ",(0,r.jsx)(t.a,{href:"../content/room-list#how-to-paginate-responses",children:"RoomList"})," content calls."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"optionsQuota"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsxs)(t.td,{children:["To set the max number of options by MealPlan in ",(0,r.jsx)(t.a,{href:"../booking-flow/avail#how-to-set-options-returned-by-mealplan",children:"Avail method"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Configuration"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"The info required to access the supplier\u2019s system. You will be able to see this information when connecting with the Seller."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Configuration/User"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"User code to connect to supplier."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Configuration/Password"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Password for the connection."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Configuration/UrlAvail"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Specific Url for Avail method."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Configuration/UrlReservation"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Specific Url for Reservation method."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Configuration/UrlValuation"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Specific Url for Valuation method."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Configuration/UrlGeneric"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Supplier Url used for multiple methods."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Configuration/Parameters"}),(0,r.jsx)(t.td,{children:"0..1"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Parameters for additional information."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters/Parameter"}),(0,r.jsx)(t.td,{children:"0..n"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"@key"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Contains the keyword to identify a parameter."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"@value"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Contains the parameter values."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,c=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:c,props:i,_owner:d.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);