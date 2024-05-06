/*! For license information please see 46fdeeb3.fd0e4bcb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94412],{57584:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>b,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=n(74848),o=n(28453),s=n(96540);const i={id:"alert-price-absolute-configuration-by-requests-input",title:"AlertPriceAbsoluteConfigurationByRequestsInput",hide_table_of_contents:!1},a=void 0,l={id:"inputs/alert-price-absolute-configuration-by-requests-input",title:"AlertPriceAbsoluteConfigurationByRequestsInput",description:"No description",source:"@site/api/inputs/alert-price-absolute-configuration-by-requests-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-price-absolute-configuration-by-requests-input",permalink:"/api/inputs/alert-price-absolute-configuration-by-requests-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-price-absolute-configuration-by-requests-input",title:"AlertPriceAbsoluteConfigurationByRequestsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertPriceAbsoluteByTimeInput",permalink:"/api/inputs/alert-price-absolute-by-time-input"},next:{title:"AlertPriceAbsoluteConfigurationByTimeInput",permalink:"/api/inputs/alert-price-absolute-configuration-by-time-input"}},c={},u=()=>{const e={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},d=e=>{const t={a:"a",...(0,o.R)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,o.R)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:t,children:n,startOpen:i=!1})=>{const a={details:"details",summary:"summary",...(0,o.R)()},[l,c]=(0,s.useState)(i);return(0,r.jsxs)(a.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(a.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:t}),l&&n]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertPriceAbsoluteConfigurationByRequestsInput.<b>price</b></code><Bullet></Bullet><code>AlertPriceInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpriceabsoluteconfigurationbyrequestsinputpricealertpriceinput--",level:4},{value:'<code>AlertPriceAbsoluteConfigurationByRequestsInput.<b>windowing</b></code><Bullet></Bullet><code>AlertCommonByRequestsInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpriceabsoluteconfigurationbyrequestsinputwindowingalertcommonbyrequestsinput--",level:4},{value:'<code>AlertPriceAbsoluteConfigurationByRequestsInput.<b>common</b></code><Bullet></Bullet><code>AlertCommonConfigurationInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertpriceabsoluteconfigurationbyrequestsinputcommonalertcommonconfigurationinput--",level:4},{value:"Member of",id:"member-of",level:3}];function m(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input AlertPriceAbsoluteConfigurationByRequestsInput {\n  price: AlertPriceInput!\n  windowing: AlertCommonByRequestsInput!\n  common: AlertCommonConfigurationInput!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"alertpriceabsoluteconfigurationbyrequestsinputpricealertpriceinput--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceAbsoluteConfigurationByRequestsInput.",(0,r.jsx)("b",{children:"price"})]})}),(0,r.jsx)(u,{}),(0,r.jsx)(t.a,{href:"/api/inputs/alert-price-input",children:(0,r.jsx)(t.code,{children:"AlertPriceInput!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Configuration of amount & commission values"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"alertpriceabsoluteconfigurationbyrequestsinputwindowingalertcommonbyrequestsinput--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceAbsoluteConfigurationByRequestsInput.",(0,r.jsx)("b",{children:"windowing"})]})}),(0,r.jsx)(u,{}),(0,r.jsx)(t.a,{href:"/api/inputs/alert-common-by-requests-input",children:(0,r.jsx)(t.code,{children:"AlertCommonByRequestsInput!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Common configuration for requests window type"}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"alertpriceabsoluteconfigurationbyrequestsinputcommonalertcommonconfigurationinput--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertPriceAbsoluteConfigurationByRequestsInput.",(0,r.jsx)("b",{children:"common"})]})}),(0,r.jsx)(u,{}),(0,r.jsx)(t.a,{href:"/api/inputs/alert-common-configuration-input",children:(0,r.jsx)(t.code,{children:"AlertCommonConfigurationInput!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Common configuration alert"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/inputs/alert-price-absolute-by-requests-input",children:(0,r.jsx)(t.code,{children:"AlertPriceAbsoluteByRequestsInput"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"input"})]})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},21020:(e,t,n)=>{var r=n(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:a.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);