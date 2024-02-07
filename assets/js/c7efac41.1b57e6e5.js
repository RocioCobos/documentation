/*! For license information please see c7efac41.1b57e6e5.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47624],{78172:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>o,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=r(17624),i=r(4552),a=r(11504);const s={id:"alert-update-price-relative-by-requests-input",title:"AlertUpdatePriceRelativeByRequestsInput"},l=void 0,c={id:"inputs/alert-update-price-relative-by-requests-input",title:"AlertUpdatePriceRelativeByRequestsInput",description:"No description",source:"@site/api/inputs/alert-update-price-relative-by-requests-input.mdx",sourceDirName:"inputs",slug:"/inputs/alert-update-price-relative-by-requests-input",permalink:"/api/inputs/alert-update-price-relative-by-requests-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-update-price-relative-by-requests-input",title:"AlertUpdatePriceRelativeByRequestsInput"},sidebar:"schemaSidebar",previous:{title:"AlertUpdatePriceInput",permalink:"/api/inputs/alert-update-price-input"},next:{title:"AlertUpdatePriceRelativeByTimeInput",permalink:"/api/inputs/alert-update-price-relative-by-time-input"}},d={},o=()=>{const e={span:"span",...(0,i.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,i.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,i.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertUpdatePriceRelativeByRequestsInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatepricerelativebyrequestsinputnamestring-",level:4},{value:'<code>AlertUpdatePriceRelativeByRequestsInput.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatepricerelativebyrequestsinputdescriptionstring-",level:4},{value:'<code>AlertUpdatePriceRelativeByRequestsInput.<b>configuration</b></code><Bullet></Bullet><code>AlertUpdatePriceRelativeConfigurationByRequestsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatepricerelativebyrequestsinputconfigurationalertupdatepricerelativeconfigurationbyrequestsinput-",level:4},{value:'<code>AlertUpdatePriceRelativeByRequestsInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"alertupdatepricerelativebyrequestsinputisactiveboolean-",level:4}],b=({dataOpen:e,dataClose:t,children:r,startOpen:s=!1})=>{const l={details:"details",summary:"summary",...(0,i.M)()},[c,d]=(0,a.useState)(s);return(0,n.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(l.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&r]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"No description"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"input AlertUpdatePriceRelativeByRequestsInput {\n  name: String\n  description: String\n  configuration: AlertUpdatePriceRelativeConfigurationByRequestsInput\n  isActive: Boolean\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdatepricerelativebyrequestsinputnamestring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdatePriceRelativeByRequestsInput.",(0,n.jsx)("b",{children:"name"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Name of the alert"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdatepricerelativebyrequestsinputdescriptionstring-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdatePriceRelativeByRequestsInput.",(0,n.jsx)("b",{children:"description"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/scalars/string",children:(0,n.jsx)(t.code,{children:"String"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Description of the alert"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdatepricerelativebyrequestsinputconfigurationalertupdatepricerelativeconfigurationbyrequestsinput-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdatePriceRelativeByRequestsInput.",(0,n.jsx)("b",{children:"configuration"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/inputs/alert-update-price-relative-configuration-by-requests-input",children:(0,n.jsx)(t.code,{children:"AlertUpdatePriceRelativeConfigurationByRequestsInput"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Configuration of the alert"}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"alertupdatepricerelativebyrequestsinputisactiveboolean-",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertUpdatePriceRelativeByRequestsInput.",(0,n.jsx)("b",{children:"isActive"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(t.a,{href:"/api/scalars/boolean",children:(0,n.jsx)(t.code,{children:"Boolean"})})," ",(0,n.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"To enable or desable the alert"}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},44808:(e,t,r)=>{var n=r(11504),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,a={},d=null,o=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(o=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:o,props:a,_owner:l.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},17624:(e,t,r)=>{e.exports=r(44808)},4552:(e,t,r)=>{r.d(t,{I:()=>l,M:()=>s});var n=r(11504);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);