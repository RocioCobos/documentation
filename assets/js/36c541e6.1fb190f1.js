/*! For license information please see 36c541e6.1fb190f1.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76256],{68632:(r,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=o(17624),n=o(4552);const s={sidebar_position:3},a="102 error - Provider error",i={id:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-provider",title:"102 error - Provider error",description:"What does a 102 error mean?\ud83d\udca1",source:"@site/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/102-error-provider.md",sourceDirName:"our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings",slug:"/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-provider",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-provider",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"kbSidebar",previous:{title:"101 error - System Exception",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/error-integration"},next:{title:"103 error - Too many requests to the supplier",permalink:"/kb/our-products/are-you-a-buyer/our-methods/lists-of-errors-and-warnings/too-many-requests"}},d={},u=[{value:"What does a 102 error mean?\ud83d\udca1",id:"what-does-a-102-error-mean",level:3},{value:"Example of a 102 error description: &quot;The start date must be a future date&quot;\ud83d\udd0e",id:"example-of-a-102-error-description-the-start-date-must-be-a-future-date",level:3},{value:"What can I do if I receive a 102 error in my response?\u2714\ufe0f",id:"what-can-i-do-if-i-receive-a-102-error-in-my-response\ufe0f",level:3}];function c(r){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.M)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"102-error---provider-error",children:"102 error - Provider error"}),"\n",(0,t.jsx)(e.h3,{id:"what-does-a-102-error-mean",children:"What does a 102 error mean?\ud83d\udca1"}),"\n",(0,t.jsxs)(e.p,{children:["The 102 error is classified as ",(0,t.jsx)(e.strong,{children:"provider error"})," and it occurs when a Seller returns a particular code/description for an error, which is then transmitted to you in our response."]}),"\n",(0,t.jsx)(e.p,{children:"If the Seller does not provide an error description, it will be typified as a 102 error type without description."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"<applicationErrors>\n    <code>provider_error_code</code>\n    <type>102</type>\n    <description>provider_error_description</description>\n    <httpStatusCode>0</httpStatusCode>\n</applicationErrors>\n\n"})}),"\n",(0,t.jsx)(e.h3,{id:"example-of-a-102-error-description-the-start-date-must-be-a-future-date",children:'Example of a 102 error description: "The start date must be a future date"\ud83d\udd0e'}),"\n",(0,t.jsx)(e.p,{children:'"The start date must be a future date" means that the Buyer is searching for a date in the past and the Seller cannot respond with any availability for past dates. The solution here is to adjust the search to reflect dates in the future.'}),"\n",(0,t.jsx)(e.h3,{id:"what-can-i-do-if-i-receive-a-102-error-in-my-response\ufe0f",children:"What can I do if I receive a 102 error in my response?\u2714\ufe0f"}),"\n",(0,t.jsxs)(e.p,{children:["We strongly recommend you ",(0,t.jsx)(e.strong,{children:"contact your Seller"})," directly if the 102 error description is not clear for you and for further information regarding the cause of the error."]})]})}function p(r={}){const{wrapper:e}={...(0,n.M)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(c,{...r})}):c(r)}},44808:(r,e,o)=>{var t=o(11504),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(r,e,o){var t,s={},u=null,c=null;for(t in void 0!==o&&(u=""+o),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(c=e.ref),e)a.call(e,t)&&!d.hasOwnProperty(t)&&(s[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps)void 0===s[t]&&(s[t]=e[t]);return{$$typeof:n,type:r,key:u,ref:c,props:s,_owner:i.current}}e.Fragment=s,e.jsx=u,e.jsxs=u},17624:(r,e,o)=>{r.exports=o(44808)},4552:(r,e,o)=>{o.d(e,{I:()=>i,M:()=>a});var t=o(11504);const n={},s=t.createContext(n);function a(r){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function i(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(n):r.components||n:a(r.components),t.createElement(s.Provider,{value:e},r.children)}}}]);