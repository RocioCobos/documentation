/*! For license information please see 2e5c8da2.fdf2df7a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78521],{98776:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>h,Bullet:()=>l,Details:()=>m,SpecifiedBy:()=>g,assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var t=n(74848),s=n(28453),d=n(96540);const o={id:"metadata-connection",title:"MetadataConnection",hide_table_of_contents:!1},c=void 0,i={id:"objects/metadata-connection",title:"MetadataConnection",description:"Metadata definition",source:"@site/api/objects/metadata-connection.mdx",sourceDirName:"objects",slug:"/objects/metadata-connection",permalink:"/api/objects/metadata-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"metadata-connection",title:"MetadataConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MetadataCandidate",permalink:"/api/objects/metadata-candidate"},next:{title:"MetadataContent",permalink:"/api/objects/metadata-content"}},r={},l=()=>{const e={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,s.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,s.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},m=({dataOpen:e,dataClose:a,children:n,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[i,r]=(0,d.useState)(o);return(0,t.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&n]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>MetadataConnection.<b>edges</b></code><Bullet></Bullet><code>[MetadataEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataconnectionedgesmetadataedge--",level:4},{value:'<code>MetadataConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataconnectionadvisemessageadvisemessage--",level:4},{value:'<code>MetadataConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>MetadataConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo</code> <Badge class="badge badge--deprecated badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadataconnectionpageinfopageinfo--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Metadata definition"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type MetadataConnection {\n  edges: [MetadataEdge]\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  pageInfo: PageInfo @deprecated\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"metadataconnectionedgesmetadataedge--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/metadata-edge",children:(0,t.jsx)(a.code,{children:"[MetadataEdge]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"contains informations of each metadata requested"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"metadataconnectionadvisemessageadvisemessage--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataConnection.",(0,t.jsx)("b",{children:"adviseMessage"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,t.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"List of messages, contain error message, such as invalid input, connection error"}),"\n",(0,t.jsxs)(a.h5,{id:"metadataconnectionadvisemessageleveladvisemessagelevel--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataConnection.adviseMessage.",(0,t.jsx)("b",{children:"level"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,t.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"metadataconnectionpageinfopageinfo--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(a.a,{href:"/api/objects/page-info",children:(0,t.jsx)(a.code,{children:"PageInfo"})})," ",(0,t.jsx)(h,{class:"badge badge--deprecated badge--secondary",text:"deprecated"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.admonition,{title:"DEPRECATED",type:"caution",children:(0,t.jsx)(a.p,{children:"This property is deprecated and is no longer recommended for use."})}),"\n",(0,t.jsx)(a.p,{children:"Indicates info about page"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/objects/hotel-xquery",children:(0,t.jsx)(a.code,{children:"HotelXQuery"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},21020:(e,a,n)=>{var t=n(96540),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function r(e,a,n){var t,d={},r=null,l=null;for(t in void 0!==n&&(r=""+n),void 0!==a.key&&(r=""+a.key),void 0!==a.ref&&(l=a.ref),a)o.call(a,t)&&!i.hasOwnProperty(t)&&(d[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===d[t]&&(d[t]=a[t]);return{$$typeof:s,type:e,key:r,ref:l,props:d,_owner:c.current}}a.Fragment=d,a.jsx=r,a.jsxs=r},74848:(e,a,n)=>{e.exports=n(21020)},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>c});var t=n(96540);const s={},d=t.createContext(s);function o(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);