/*! For license information please see 5fd811e7.f7d54ebe.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98324],{90864:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>f,Bullet:()=>r,Details:()=>p,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>b});var o=s(74848),a=s(28453),t=s(96540);const l={id:"profile-connection",title:"ProfileConnection"},c=void 0,d={id:"types/objects/profile-connection",title:"ProfileConnection",description:"No description",source:"@site/api/types/objects/profile-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/profile-connection",permalink:"/api/types/objects/profile-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"profile-connection",title:"ProfileConnection"},sidebar:"schemaSidebar",previous:{title:"Product",permalink:"/api/types/objects/product"},next:{title:"ProfileData",permalink:"/api/types/objects/profile-data"}},i={},r=()=>{const e={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,a.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const n={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:s,startOpen:l=!1})=>{const c={details:"details",summary:"summary",...(0,a.R)()},[d,i]=(0,t.useState)(l);return(0,o.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&s]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>ProfileConnection.<b>edges</b></code><Bullet></Bullet><code>[ProfileEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profileconnectionedgesprofileedge--",level:4},{value:'<code>ProfileConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profileconnectionpageinfopageinfo--",level:4},{value:'<code>ProfileConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profileconnectionadvisemessageadvisemessage--",level:4},{value:'<code>ProfileConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profileconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>ProfileConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"profileconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"No description"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type ProfileConnection {\n  edges: [ProfileEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage]\n  totalCount: Int!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"profileconnectionedgesprofileedge--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/profile-edge",children:(0,o.jsx)(n.code,{children:"[ProfileEdge]"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"profileconnectionpageinfopageinfo--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,o.jsx)(n.code,{children:"PageInfo!"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"profileconnectionadvisemessageadvisemessage--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileConnection.",(0,o.jsx)("b",{children:"adviseMessage"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/advise-message",children:(0,o.jsx)(n.code,{children:"[AdviseMessage]"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.h5,{id:"profileconnectionadvisemessageleveladvisemessagelevel--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileConnection.adviseMessage.",(0,o.jsx)("b",{children:"level"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/enums/advise-message-level",children:(0,o.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"profileconnectiontotalcountint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["ProfileConnection.",(0,o.jsx)("b",{children:"totalCount"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/objects/social-query",children:(0,o.jsx)(n.code,{children:"SocialQuery"})})," ",(0,o.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,n,s)=>{var o=s(96540),a=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,s){var o,t={},i=null,r=null;for(o in void 0!==s&&(i=""+s),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(r=n.ref),n)l.call(n,o)&&!d.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:a,type:e,key:i,ref:r,props:t,_owner:c.current}}n.Fragment=t,n.jsx=i,n.jsxs=i},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var o=s(96540);const a={},t=o.createContext(a);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);