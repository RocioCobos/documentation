/*! For license information please see dda3bc4b.f92e297a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26024],{32479:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>h,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>o,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>x});var t=n(74848),r=n(28453),s=n(96540);const d={id:"partner-data",title:"PartnerData"},o=void 0,c={id:"types/objects/partner-data",title:"PartnerData",description:"No description",source:"@site/api/types/objects/partner-data.mdx",sourceDirName:"types/objects",slug:"/types/objects/partner-data",permalink:"/api/types/objects/partner-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"partner-data",title:"PartnerData"},sidebar:"schemaSidebar",previous:{title:"PartnerConnection",permalink:"/api/types/objects/partner-connection"},next:{title:"PartnerEdge",permalink:"/api/types/objects/partner-edge"}},l={},i=()=>{const e={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,r.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,r.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:a,children:n,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,r.R)()},[c,l]=(0,s.useState)(d);return(0,t.jsxs)(o.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>PartnerData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnerdatacodeid--",level:4},{value:'<code>PartnerData.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnerdatanamestring--",level:4},{value:'<code>PartnerData.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"partnerdataisactiveboolean-",level:4},{value:'<code>PartnerData.<b>friendlyName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"partnerdatafriendlynamestring-",level:4},{value:'<code>PartnerData.<b>organizations</b></code><Bullet></Bullet><code>OrganizationConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"partnerdataorganizationsorganizationconnection-",level:4},{value:'<code>PartnerData.<b>agents</b></code><Bullet></Bullet><code>[CustomerAgent!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"partnerdataagentscustomeragent--",level:4},{value:"Member Of",id:"member-of",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type PartnerData {\n  code: ID!\n  name: String!\n  isActive: Boolean\n  friendlyName: String\n  organizations: OrganizationConnection\n  agents: [CustomerAgent!]\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"partnerdatacodeid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerData.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"cusXYZ.."}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"partnerdatanamestring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerData.",(0,t.jsx)("b",{children:"name"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"partnerdataisactiveboolean-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerData.",(0,t.jsx)("b",{children:"isActive"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/boolean",children:(0,t.jsx)(a.code,{children:"Boolean"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"partnerdatafriendlynamestring-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerData.",(0,t.jsx)("b",{children:"friendlyName"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"partnerdataorganizationsorganizationconnection-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerData.",(0,t.jsx)("b",{children:"organizations"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/organization-connection",children:(0,t.jsx)(a.code,{children:"OrganizationConnection"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(a.h4,{id:"partnerdataagentscustomeragent--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PartnerData.",(0,t.jsx)("b",{children:"agents"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(a.a,{href:"/api/types/objects/customer-agent",children:(0,t.jsx)(a.code,{children:"[CustomerAgent!]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Differents agents from TravelgateX"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/types/objects/partner",children:(0,t.jsx)(a.code,{children:"Partner"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,a,n)=>{var t=n(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,n){var t,s={},l=null,i=null;for(t in void 0!==n&&(l=""+n),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)d.call(a,t)&&!c.hasOwnProperty(t)&&(s[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===s[t]&&(s[t]=a[t]);return{$$typeof:r,type:e,key:l,ref:i,props:s,_owner:o.current}}a.Fragment=s,a.jsx=l,a.jsxs=l},74848:(e,a,n)=>{e.exports=n(21020)},28453:(e,a,n)=>{n.d(a,{R:()=>d,x:()=>o});var t=n(96540);const r={},s=t.createContext(r);function d(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);