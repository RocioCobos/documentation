/*! For license information please see 38b24a3a.bb824e62.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98872],{91132:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>b,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>l,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>g});var d=a(17624),r=a(4552),t=a(11504);const n={id:"members",title:"Members"},l=void 0,c={id:"objects/members",title:"Members",description:"No description",source:"@site/api/objects/members.mdx",sourceDirName:"objects",slug:"/objects/members",permalink:"/api/objects/members",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"members",title:"Members"},sidebar:"schemaSidebar",previous:{title:"MembersEdge",permalink:"/api/objects/members-edge"},next:{title:"MetadataAmendBoard",permalink:"/api/objects/metadata-amend-board"}},i={},o=()=>{const e={span:"span",...(0,r.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const s={a:"a",...(0,r.M)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const s={span:"span",...(0,r.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>Members.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberscodeid--",level:4},{value:'<code>Members.<b>membersData</b></code><Bullet></Bullet><code>MembersData</code> <Badge class="badge badge--secondary"></Badge>',id:"membersmembersdatamembersdata-",level:4},{value:'<code>Members.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersadvisemessageadvisemessage--",level:4},{value:'<code>Members.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Members.<b>createdAt</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberscreatedattime--",level:4},{value:'<code>Members.<b>updatedAt</b></code><Bullet></Bullet><code>Time!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"membersupdatedattime--",level:4},{value:'<code>Members.<b>deletedAt</b></code><Bullet></Bullet><code>Time</code> <Badge class="badge badge--secondary"></Badge>',id:"membersdeletedattime-",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:a,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,r.M)()},[c,i]=(0,t.useState)(n);return(0,d.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&a]})};function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"No description"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type Members {\n  code: ID!\n  membersData: MembersData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: Time!\n  updatedAt: Time!\n  deletedAt: Time\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"memberscodeid--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Members.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/scalars/id",children:(0,d.jsx)(s.code,{children:"ID!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Members unique code"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"membersmembersdatamembersdata-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Members.",(0,d.jsx)("b",{children:"membersData"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/objects/members-data",children:(0,d.jsx)(s.code,{children:"MembersData"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Extended Members information"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"membersadvisemessageadvisemessage--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Members.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,d.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"List of advise messages."}),"\n",(0,d.jsxs)(s.h5,{id:"membersadvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Members.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,d.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"memberscreatedattime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Members.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/scalars/time",children:(0,d.jsx)(s.code,{children:"Time!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Members creation date"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"membersupdatedattime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Members.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/scalars/time",children:(0,d.jsx)(s.code,{children:"Time!"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Members last update date"}),"\n"]}),"\n",(0,d.jsxs)(s.h4,{id:"membersdeletedattime-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["Members.",(0,d.jsx)("b",{children:"deletedAt"})]})}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/scalars/time",children:(0,d.jsx)(s.code,{children:"Time"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsx)(s.p,{children:"Members removal date"}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/api/objects/admin-mutation",children:(0,d.jsx)(s.code,{children:"AdminMutation"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/objects/admin-query",children:(0,d.jsx)(s.code,{children:"AdminQuery"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(o,{}),(0,d.jsx)(s.a,{href:"/api/objects/members-edge",children:(0,d.jsx)(s.code,{children:"MembersEdge"})})," ",(0,d.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},44808:(e,s,a)=>{var d=a(11504),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,a){var d,t={},i=null,o=null;for(d in void 0!==a&&(i=""+a),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(o=s.ref),s)n.call(s,d)&&!c.hasOwnProperty(d)&&(t[d]=s[d]);if(e&&e.defaultProps)for(d in s=e.defaultProps)void 0===t[d]&&(t[d]=s[d]);return{$$typeof:r,type:e,key:i,ref:o,props:t,_owner:l.current}}s.Fragment=t,s.jsx=i,s.jsxs=i},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>l,M:()=>n});var d=a(11504);const r={},t=d.createContext(r);function n(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);