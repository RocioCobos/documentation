/*! For license information please see ff29e9bc.6165290f.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23988],{88472:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>k,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=t(17624),o=t(4552),s=t(11504);const c={id:"package-book-status",title:"PackageBookStatus"},r=void 0,l={id:"enums/package-book-status",title:"PackageBookStatus",description:"No description",source:"@site/api/enums/package-book-status.mdx",sourceDirName:"enums",slug:"/enums/package-book-status",permalink:"/api/enums/package-book-status",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"package-book-status",title:"PackageBookStatus"},sidebar:"schemaSidebar",previous:{title:"OrganizationsOrderByEnum",permalink:"/api/enums/organizations-order-by-enum"},next:{title:"PackageDestinationType",permalink:"/api/enums/package-destination-type"}},i={},d=()=>{const e={span:"span",...(0,o.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,o.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},k=e=>{const a={span:"span",...(0,o.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},p=[{value:"Values",id:"values",level:3},{value:"<code>PackageBookStatus.<b>CANCELLED</b></code>",id:"packagebookstatuscancelled",level:4},{value:"<code>PackageBookStatus.<b>OK</b></code>",id:"packagebookstatusok",level:4},{value:"<code>PackageBookStatus.<b>ON_REQUEST</b></code>",id:"packagebookstatuson_request",level:4},{value:"<code>PackageBookStatus.<b>PENDING_COMMIT</b></code>",id:"packagebookstatuspending_commit",level:4},{value:"<code>PackageBookStatus.<b>UNKNOWN</b></code>",id:"packagebookstatusunknown",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:a,children:t,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,o.M)()},[l,i]=(0,s.useState)(c);return(0,n.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&t]})};function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"enum PackageBookStatus {\n  CANCELLED\n  OK\n  ON_REQUEST\n  PENDING_COMMIT\n  UNKNOWN\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"values",children:"Values"}),"\n",(0,n.jsx)(a.h4,{id:"packagebookstatuscancelled",children:(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageBookStatus.",(0,n.jsx)("b",{children:"CANCELLED"})]})})}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h4,{id:"packagebookstatusok",children:(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageBookStatus.",(0,n.jsx)("b",{children:"OK"})]})})}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h4,{id:"packagebookstatuson_request",children:(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageBookStatus.",(0,n.jsx)("b",{children:"ON_REQUEST"})]})})}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h4,{id:"packagebookstatuspending_commit",children:(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageBookStatus.",(0,n.jsx)("b",{children:"PENDING_COMMIT"})]})})}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h4,{id:"packagebookstatusunknown",children:(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageBookStatus.",(0,n.jsx)("b",{children:"UNKNOWN"})]})})}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/objects/booking-payload",children:(0,n.jsx)(a.code,{children:"BookingPayload"})})," ",(0,n.jsx)(k,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(d,{}),(0,n.jsx)(a.a,{href:"/api/objects/book-payload",children:(0,n.jsx)(a.code,{children:"BookPayload"})})," ",(0,n.jsx)(k,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(d,{}),(0,n.jsx)(a.a,{href:"/api/objects/cancel-payload",children:(0,n.jsx)(a.code,{children:"CancelPayload"})})," ",(0,n.jsx)(k,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,o.M)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},44808:(e,a,t)=>{var n=t(11504),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,t){var n,s={},i=null,d=null;for(n in void 0!==t&&(i=""+t),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(d=a.ref),a)c.call(a,n)&&!l.hasOwnProperty(n)&&(s[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:o,type:e,key:i,ref:d,props:s,_owner:r.current}}a.Fragment=s,a.jsx=i,a.jsxs=i},17624:(e,a,t)=>{e.exports=t(44808)},4552:(e,a,t)=>{t.d(a,{I:()=>r,M:()=>c});var n=t(11504);const o={},s=n.createContext(o);function c(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);