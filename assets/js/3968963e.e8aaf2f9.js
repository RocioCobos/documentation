/*! For license information please see 3968963e.e8aaf2f9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63048],{5832:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>h,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>v,assets:()=>c,contentTitle:()=>o,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>g});var n=t(17624),i=t(4552),s=t(11504);const d={id:"invitation",title:"Invitation",hide_table_of_contents:!1},o=void 0,l={id:"objects/invitation",title:"Invitation",description:"No description",source:"@site/api/objects/invitation.mdx",sourceDirName:"objects",slug:"/objects/invitation",permalink:"/api/objects/invitation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"invitation",title:"Invitation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InvitationEdge",permalink:"/api/objects/invitation-edge"},next:{title:"ItineraryMap",permalink:"/api/objects/itinerary-map"}},c={},r=()=>{const e={span:"span",...(0,i.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},v=e=>{const a={a:"a",...(0,i.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,i.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>Invitation.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"invitationcodeid--",level:4},{value:'<code>Invitation.<b>invitationData</b></code><Bullet></Bullet><code>InvitationData</code> <Badge class="badge badge--secondary"></Badge>',id:"invitationinvitationdatainvitationdata-",level:4},{value:'<code>Invitation.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"invitationadvisemessageadvisemessage--",level:4},{value:'<code>Invitation.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"invitationadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>Invitation.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"invitationcreatedatdatetime-",level:4},{value:'<code>Invitation.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"invitationupdatedatdatetime-",level:4},{value:"Member of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:a,children:t,startOpen:d=!1})=>{const o={details:"details",summary:"summary",...(0,i.M)()},[l,c]=(0,s.useState)(d);return(0,n.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&t]})};function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"No description"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"type Invitation {\n  code: ID!\n  invitationData: InvitationData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime\n  updatedAt: DateTime\n}\n"})}),"\n",(0,n.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.h4,{id:"invitationcodeid--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Invitation.",(0,n.jsx)("b",{children:"code"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/api/scalars/id",children:(0,n.jsx)(a.code,{children:"ID!"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(a.h4,{id:"invitationinvitationdatainvitationdata-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Invitation.",(0,n.jsx)("b",{children:"invitationData"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/api/objects/invitation-data",children:(0,n.jsx)(a.code,{children:"InvitationData"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(a.h4,{id:"invitationadvisemessageadvisemessage--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Invitation.",(0,n.jsx)("b",{children:"adviseMessage"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,n.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.h5,{id:"invitationadvisemessageleveladvisemessagelevel--",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Invitation.adviseMessage.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,n.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,n.jsxs)(a.h4,{id:"invitationcreatedatdatetime-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Invitation.",(0,n.jsx)("b",{children:"createdAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,n.jsx)(a.code,{children:"DateTime"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(a.h4,{id:"invitationupdatedatdatetime-",children:[(0,n.jsx)(a.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["Invitation.",(0,n.jsx)("b",{children:"updatedAt"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,n.jsx)(a.code,{children:"DateTime"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(a.blockquote,{children:"\n"}),"\n",(0,n.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"/api/objects/invitation-edge",children:(0,n.jsx)(a.code,{children:"InvitationEdge"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"}),(0,n.jsx)(r,{}),(0,n.jsx)(a.a,{href:"/api/objects/social-mutation",children:(0,n.jsx)(a.code,{children:"SocialMutation"})})," ",(0,n.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,i.M)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},44808:(e,a,t)=>{var n=t(11504),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var n,s={},c=null,r=null;for(n in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(r=a.ref),a)d.call(a,n)&&!l.hasOwnProperty(n)&&(s[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:i,type:e,key:c,ref:r,props:s,_owner:o.current}}a.Fragment=s,a.jsx=c,a.jsxs=c},17624:(e,a,t)=>{e.exports=t(44808)},4552:(e,a,t)=>{t.d(a,{I:()=>o,M:()=>d});var n=t(11504);const i={},s=n.createContext(i);function d(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);