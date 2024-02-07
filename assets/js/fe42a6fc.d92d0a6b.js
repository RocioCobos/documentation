/*! For license information please see fe42a6fc.d92d0a6b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39340],{79196:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>b,assets:()=>i,contentTitle:()=>c,default:()=>j,frontMatter:()=>t,metadata:()=>r,toc:()=>m});var a=s(17624),o=s(4552),d=s(11504);const t={id:"member-connection",title:"MemberConnection"},c=void 0,r={id:"objects/member-connection",title:"MemberConnection",description:"No description",source:"@site/api/objects/member-connection.mdx",sourceDirName:"objects",slug:"/objects/member-connection",permalink:"/api/objects/member-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"member-connection",title:"MemberConnection"},sidebar:"schemaSidebar",previous:{title:"Medium",permalink:"/api/objects/medium"},next:{title:"MemberData",permalink:"/api/objects/member-data"}},i={},l=()=>{const e={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const n={a:"a",...(0,o.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>MemberConnection.<b>edges</b></code><Bullet></Bullet><code>[MemberEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberconnectionedgesmemberedge--",level:4},{value:'<code>MemberConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberconnectionpageinfopageinfo--",level:4},{value:'<code>MemberConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberconnectionadvisemessageadvisemessage--",level:4},{value:'<code>MemberConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>MemberConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:s,startOpen:t=!1})=>{const c={details:"details",summary:"summary",...(0,o.M)()},[r,i]=(0,d.useState)(t);return(0,a.jsxs)(c.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:n}),r&&s]})};function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"No description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type MemberConnection {\n  edges: [MemberEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  totalCount: Int!\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"memberconnectionedgesmemberedge--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberConnection.",(0,a.jsx)("b",{children:"edges"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/objects/member-edge",children:(0,a.jsx)(n.code,{children:"[MemberEdge]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"memberconnectionpageinfopageinfo--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberConnection.",(0,a.jsx)("b",{children:"pageInfo"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/objects/page-info",children:(0,a.jsx)(n.code,{children:"PageInfo!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsx)(n.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(n.h4,{id:"memberconnectionadvisemessageadvisemessage--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberConnection.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/objects/advise-message",children:(0,a.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"List of advise messages."}),"\n",(0,a.jsxs)(n.h5,{id:"memberconnectionadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberConnection.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/enums/advise-message-level",children:(0,a.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"memberconnectiontotalcountint--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberConnection.",(0,a.jsx)("b",{children:"totalCount"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/scalars/int",children:(0,a.jsx)(n.code,{children:"Int!"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Identifies the total count of items in the connection."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/objects/admin-query",children:(0,a.jsx)(n.code,{children:"AdminQuery"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/interfaces/group-common-data",children:(0,a.jsx)(n.code,{children:"GroupCommonData"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"interface"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/objects/group-data",children:(0,a.jsx)(n.code,{children:"GroupData"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,a.jsx)(l,{}),(0,a.jsx)(n.a,{href:"/api/objects/organization-data",children:(0,a.jsx)(n.code,{children:"OrganizationData"})})," ",(0,a.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},44808:(e,n,s)=>{var a=s(11504),o=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,s){var a,d={},i=null,l=null;for(a in void 0!==s&&(i=""+s),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)t.call(n,a)&&!r.hasOwnProperty(a)&&(d[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===d[a]&&(d[a]=n[a]);return{$$typeof:o,type:e,key:i,ref:l,props:d,_owner:c.current}}n.Fragment=d,n.jsx=i,n.jsxs=i},17624:(e,n,s)=>{e.exports=s(44808)},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>t});var a=s(11504);const o={},d=a.createContext(o);function t(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);