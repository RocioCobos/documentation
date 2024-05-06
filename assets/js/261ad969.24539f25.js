/*! For license information please see 261ad969.24539f25.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54959],{60124:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>y});var r=t(74848),s=t(28453),i=t(96540);const a={id:"three-domain-security-input",title:"ThreeDomainSecurityInput",hide_table_of_contents:!1},c=void 0,d={id:"inputs/three-domain-security-input",title:"ThreeDomainSecurityInput",description:"No description",source:"@site/api/inputs/three-domain-security-input.mdx",sourceDirName:"inputs",slug:"/inputs/three-domain-security-input",permalink:"/api/inputs/three-domain-security-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"three-domain-security-input",title:"ThreeDomainSecurityInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SystemFilter",permalink:"/api/inputs/system-filter"},next:{title:"TimeRangeInput",permalink:"/api/inputs/time-range-input"}},o={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:t,startOpen:a=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[d,o]=(0,i.useState)(a);return(0,r.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(c.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&t]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>ThreeDomainSecurityInput.<b>version</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputversionstring-",level:4},{value:'<code>ThreeDomainSecurityInput.<b>DSTransactionID</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputdstransactionidstring-",level:4},{value:'<code>ThreeDomainSecurityInput.<b>XID</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputxidstring-",level:4},{value:'<code>ThreeDomainSecurityInput.<b>ECI</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputecistring-",level:4},{value:'<code>ThreeDomainSecurityInput.<b>CAVV</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputcavvstring-",level:4},{value:'<code>ThreeDomainSecurityInput.<b>payerResponse</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputpayerresponsestring-",level:4},{value:'<code>ThreeDomainSecurityInput.<b>payerResponseStatus</b></code><Bullet></Bullet><code>PayerResponseStatusType</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputpayerresponsestatuspayerresponsestatustype-",level:4},{value:'<code>ThreeDomainSecurityInput.<b>cardEnrolledStatus</b></code><Bullet></Bullet><code>ThreeDSCardEnrolledStatusType</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputcardenrolledstatusthreedscardenrolledstatustype-",level:4},{value:'<code>ThreeDomainSecurityInput.<b>merchantName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputmerchantnamestring-",level:4},{value:'<code>ThreeDomainSecurityInput.<b>signatureStatus</b></code><Bullet></Bullet><code>ThreeDSSignatureStatusType</code> <Badge class="badge badge--secondary"></Badge>',id:"threedomainsecurityinputsignaturestatusthreedssignaturestatustype-",level:4},{value:"Member of",id:"member-of",level:3}];function g(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"No description"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-graphql",children:"input ThreeDomainSecurityInput {\n  version: String\n  DSTransactionID: String\n  XID: String\n  ECI: String\n  CAVV: String\n  payerResponse: String\n  payerResponseStatus: PayerResponseStatusType\n  cardEnrolledStatus: ThreeDSCardEnrolledStatusType\n  merchantName: String\n  signatureStatus: ThreeDSSignatureStatusType\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputversionstring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"version"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Three Domain Security Version"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputdstransactionidstring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"DSTransactionID"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Universally unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputxidstring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"XID"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Transaction identifier resulting from authentication processing. Uniquely identifies a 3D Secure check request."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputecistring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"ECI"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Electronic Commerce Indicator"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputcavvstring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"CAVV"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Cardholder Authentication Verification Value"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputpayerresponsestring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"payerResponse"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Payer Authentication Response. It is the response to the Payer Authentication Request. The Payer Authentication Response has an XML structure with the information from the response of the authentication, and it contains a digital certificate as a sign of authenticity."}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputpayerresponsestatuspayerresponsestatustype-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"payerResponseStatus"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/enums/payer-response-status-type",children:(0,r.jsx)(n.code,{children:"PayerResponseStatusType"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Payer Authentication Response status"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputcardenrolledstatusthreedscardenrolledstatustype-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"cardEnrolledStatus"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/enums/three-dscard-enrolled-status-type",children:(0,r.jsx)(n.code,{children:"ThreeDSCardEnrolledStatusType"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Result of enrollment status of the service request"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputmerchantnamestring-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"merchantName"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/scalars/string",children:(0,r.jsx)(n.code,{children:"String"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Merchant Name"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"threedomainsecurityinputsignaturestatusthreedssignaturestatustype-",children:[(0,r.jsx)(n.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["ThreeDomainSecurityInput.",(0,r.jsx)("b",{children:"signatureStatus"})]})}),(0,r.jsx)(l,{}),(0,r.jsx)(n.a,{href:"/api/enums/three-dssignature-status-type",children:(0,r.jsx)(n.code,{children:"ThreeDSSignatureStatusType"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Signature value"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/inputs/payment-card-input",children:(0,r.jsx)(n.code,{children:"PaymentCardInput"})})," ",(0,r.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,i={},o=null,l=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=o,n.jsxs=o},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);