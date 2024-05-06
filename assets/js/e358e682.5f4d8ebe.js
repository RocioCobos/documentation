/*! For license information please see e358e682.5f4d8ebe.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13855],{46913:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(74848),r=t(28453);const o={sidebar_position:1},s="Overview",a={id:"apps/distribution/api/distribution-reservation-api/overview",title:"Overview",description:"The Distribution Reservation API allows Distribution clients to consult their reservation using an API in JSON format.",source:"@site/docs/apps/distribution/api/distribution-reservation-api/overview.mdx",sourceDirName:"apps/distribution/api/distribution-reservation-api",slug:"/apps/distribution/api/distribution-reservation-api/overview",permalink:"/docs/apps/distribution/api/distribution-reservation-api/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apps/distribution/api/distribution-reservation-api/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Specific Stop Sales",permalink:"/docs/apps/distribution/files/rules-files/specific-stop-sales"},next:{title:"Search",permalink:"/docs/apps/distribution/api/distribution-reservation-api/search"}},d={},c=[{value:"Distribution API Endpoint",id:"distribution-api-endpoint",level:2},{value:"Distribution API Headers",id:"distribution-api-headers",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(i.p,{children:"The Distribution Reservation API allows Distribution clients to consult their reservation using an API in JSON format."}),"\n",(0,n.jsx)(i.h2,{id:"distribution-api-endpoint",children:"Distribution API Endpoint"}),"\n",(0,n.jsx)(i.p,{children:"You can access the Distribution Reservation API methods using this endpoint:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"https://distribution-reservationsapi.xmltravelgate.com/api/search\n"})}),"\n",(0,n.jsx)(i.h2,{id:"distribution-api-headers",children:"Distribution API Headers"}),"\n",(0,n.jsx)(i.p,{children:"In order to call any operation, it would be necessary the following data:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"AccesToken (encrypted data)"}),"\n",(0,n.jsx)(i.li,{children:"Password"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"If you intend to make these calls at agency level (one specific Buyer), you will also need to include the following data in the call:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"User (Agency ID)"}),"\n"]}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsxs)(i.p,{children:["In the event that you have not received the AccessToken and Password or wish to commence using the API, kindly reach out to the onboarding team via email at ",(0,n.jsx)(i.a,{href:"mailto:client-onboarding@travelgate.com",children:"client-onboarding@travelgate.com"}),"."]})})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},21020:(e,i,t)=>{var n=t(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,i,t){var n,o={},c=null,l=null;for(n in void 0!==t&&(c=""+t),void 0!==i.key&&(c=""+i.key),void 0!==i.ref&&(l=i.ref),i)s.call(i,n)&&!d.hasOwnProperty(n)&&(o[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:r,type:e,key:c,ref:l,props:o,_owner:a.current}}i.Fragment=o,i.jsx=c,i.jsxs=c},74848:(e,i,t)=>{e.exports=t(21020)},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var n=t(96540);const r={},o=n.createContext(r);function s(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);