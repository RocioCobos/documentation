/*! For license information please see 3659960e.48df5ad0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86584],{24688:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>x});var a=s(17624),c=s(4552),d=s(11504);const t={id:"connection",title:"Connection"},o=void 0,i={id:"objects/connection",title:"Connection",description:"Connection identifies who is making the request and holds the configuration assigned to it.",source:"@site/api/objects/connection.mdx",sourceDirName:"objects",slug:"/objects/connection",permalink:"/api/objects/connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"connection",title:"Connection"},sidebar:"schemaSidebar",previous:{title:"ConnectionEdge",permalink:"/api/objects/connection-edge"},next:{title:"ContactInfo",permalink:"/api/objects/contact-info"}},l={},r=()=>{const e={span:"span",...(0,c.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const n={a:"a",...(0,c.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,c.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Connection.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectioncodeid--",level:4},{value:'<code>Connection.<b>connectionData</b></code><Bullet></Bullet><code>ConnectionData</code> <Badge class="badge badge--secondary"></Badge>',id:"connectionconnectiondataconnectiondata-",level:4},{value:'<code>Connection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectionadvisemessageadvisemessage--",level:4},{value:'<code>Connection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Connection.<b>createdAt</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectioncreatedattime--",level:4},{value:'<code>Connection.<b>updatedAt</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectionupdatedattime--",level:4},{value:'<code>Connection.<b>deletedAt</b></code><Bullet></Bullet><code>Time</code> <Badge class="badge badge--secondary"></Badge>',id:"connectiondeletedattime-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:n,children:s,startOpen:t=!1})=>{const o={details:"details",summary:"summary",...(0,c.M)()},[i,l]=(0,d.useState)(t);return(0,a.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})};function j(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Connection identifies who is making the request and holds the configuration assigned to it."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Connection {\n  code: ID!\n  connectionData: ConnectionData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: Time!\n  updatedAt: Time!\n  deletedAt: Time\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.h4,{id:"connectioncodeid--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Connection.",(0,a.jsx)("b",{children:"code"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/scalars/id",children:(0,a.jsx)(n.code,{children:"ID!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Connection unique code"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"connectionconnectiondataconnectiondata-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Connection.",(0,a.jsx)("b",{children:"connectionData"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/objects/connection-data",children:(0,a.jsx)(n.code,{children:"ConnectionData"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Extended Connection information"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"connectionadvisemessageadvisemessage--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Connection.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/objects/advise-message",children:(0,a.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"List of advise messages."}),"\n",(0,a.jsxs)(n.h5,{id:"connectionadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Connection.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/enums/advise-message-level",children:(0,a.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"connectioncreatedattime--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Connection.",(0,a.jsx)("b",{children:"createdAt"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/scalars/time",children:(0,a.jsx)(n.code,{children:"Time!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Connection creation date"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"connectionupdatedattime--",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Connection.",(0,a.jsx)("b",{children:"updatedAt"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/scalars/time",children:(0,a.jsx)(n.code,{children:"Time!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Connection last update date"}),"\n"]}),"\n",(0,a.jsxs)(n.h4,{id:"connectiondeletedattime-",children:[(0,a.jsx)(n.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["Connection.",(0,a.jsx)("b",{children:"deletedAt"})]})}),(0,a.jsx)(r,{}),(0,a.jsx)(n.a,{href:"/api/scalars/time",children:(0,a.jsx)(n.code,{children:"Time"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Connection deleted date"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/api/objects/connection-edge",children:(0,a.jsx)(n.code,{children:"ConnectionEdge"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},44808:(e,n,s)=>{var a=s(11504),c=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var a,d={},l=null,r=null;for(a in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(r=n.ref),n)t.call(n,a)&&!i.hasOwnProperty(a)&&(d[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===d[a]&&(d[a]=n[a]);return{$$typeof:c,type:e,key:l,ref:r,props:d,_owner:o.current}}n.Fragment=d,n.jsx=l,n.jsxs=l},17624:(e,n,s)=>{e.exports=s(44808)},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>t});var a=s(11504);const c={},d=a.createContext(c);function t(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);