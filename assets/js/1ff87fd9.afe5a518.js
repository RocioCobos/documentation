/*! For license information please see 1ff87fd9.afe5a518.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22072],{96940:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>b,Bullet:()=>o,Details:()=>g,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var d=a(17624),r=a(4552),t=a(11504);const n={id:"hub-user",title:"HubUser"},c=void 0,l={id:"objects/hub-user",title:"HubUser",description:"No description",source:"@site/api/objects/hub-user.mdx",sourceDirName:"objects",slug:"/objects/hub-user",permalink:"/api/objects/hub-user",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hub-user",title:"HubUser"},sidebar:"schemaSidebar",previous:{title:"HubUserData",permalink:"/api/objects/hub-user-data"},next:{title:"Individual",permalink:"/api/objects/individual"}},i={},o=()=>{const e={span:"span",...(0,r.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,r.M)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const s={span:"span",...(0,r.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>HubUser.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubusercodeid--",level:4},{value:'<code>HubUser.<b>hubUserData</b></code><Bullet></Bullet><code>HubUserData</code> <Badge class="badge badge--secondary"></Badge>',id:"hubuserhubuserdatahubuserdata-",level:4},{value:'<code>HubUser.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubuseradvisemessageadvisemessage--",level:4},{value:'<code>HubUser.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubuseradvisemessageleveladvisemessagelevel--",level:5},{value:'<code>HubUser.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubusercreatedatdatetime--",level:4},{value:'<code>HubUser.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hubuserupdatedatdatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="badge badge--secondary"></Badge>',id:"node-",level:4},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:s,children:a,startOpen:n=!1})=>{const c={details:"details",summary:"summary",...(0,r.M)()},[l,i]=(0,t.useState)(n);return(0,d.jsxs)(c.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(c.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&a]})};function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"No description"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type HubUser implements Node {\n  code: ID!\n  hubUserData: HubUserData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"hubusercodeid--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HubUser.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/scalars/id",children:(0,d.jsx)(s.code,{children:"ID!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"hubuserhubuserdatahubuserdata-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HubUser.",(0,d.jsx)("b",{children:"hubUserData"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/objects/hub-user-data",children:(0,d.jsx)(s.code,{children:"HubUserData"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"hubuseradvisemessageadvisemessage--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HubUser.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,d.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.h5,{id:"hubuseradvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HubUser.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,d.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"hubusercreatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HubUser.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"hubuserupdatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["HubUser.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsx)(s.h3,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(s.h4,{id:"node-",children:[(0,d.jsx)(s.a,{href:"/api/interfaces/node",children:(0,d.jsx)(s.code,{children:"Node"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"interface"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/api/objects/admin-mutation",children:(0,d.jsx)(s.code,{children:"AdminMutation"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/objects/admin-query",children:(0,d.jsx)(s.code,{children:"AdminQuery"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},44808:(e,s,a)=>{var d=a(11504),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,c=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,a){var d,t={},i=null,o=null;for(d in void 0!==a&&(i=""+a),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(o=s.ref),s)n.call(s,d)&&!l.hasOwnProperty(d)&&(t[d]=s[d]);if(e&&e.defaultProps)for(d in s=e.defaultProps)void 0===t[d]&&(t[d]=s[d]);return{$$typeof:r,type:e,key:i,ref:o,props:t,_owner:c.current}}s.Fragment=t,s.jsx=i,s.jsxs=i},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>c,M:()=>n});var d=a(11504);const r={},t=d.createContext(r);function n(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);