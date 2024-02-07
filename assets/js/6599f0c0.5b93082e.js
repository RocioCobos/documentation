/*! For license information please see 6599f0c0.5b93082e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25028],{36188:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>b,Bullet:()=>r,Details:()=>x,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var n=t(17624),a=t(4552),o=t(11504);const d={id:"stats-connection",title:"StatsConnection"},c=void 0,i={id:"objects/stats-connection",title:"StatsConnection",description:"No description",source:"@site/api/objects/stats-connection.mdx",sourceDirName:"objects",slug:"/objects/stats-connection",permalink:"/api/objects/stats-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"stats-connection",title:"StatsConnection"},sidebar:"schemaSidebar",previous:{title:"StatsAsset",permalink:"/api/objects/stats-asset"},next:{title:"StatsData",permalink:"/api/objects/stats-data"}},l={},r=()=>{const e={span:"span",...(0,a.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,a.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const s={span:"span",...(0,a.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>StatsConnection.<b>edges</b></code><Bullet></Bullet><code>[StatsEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsconnectionedgesstatsedge--",level:4},{value:'<code>StatsConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsconnectionpageinfopageinfo--",level:4},{value:'<code>StatsConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsconnectionadvisemessageadvisemessage--",level:4},{value:'<code>StatsConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"statsconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:t,startOpen:d=!1})=>{const c={details:"details",summary:"summary",...(0,a.M)()},[i,l]=(0,o.useState)(d);return(0,n.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&t]})};function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"No description"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-graphql",children:"type StatsConnection {\n  edges: [StatsEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.h4,{id:"statsconnectionedgesstatsedge--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsConnection.",(0,n.jsx)("b",{children:"edges"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/api/objects/stats-edge",children:(0,n.jsx)(s.code,{children:"[StatsEdge]"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"statsconnectionpageinfopageinfo--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsConnection.",(0,n.jsx)("b",{children:"pageInfo"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/api/objects/page-info",children:(0,n.jsx)(s.code,{children:"PageInfo!"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(s.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(s.h4,{id:"statsconnectionadvisemessageadvisemessage--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsConnection.",(0,n.jsx)("b",{children:"adviseMessage"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,n.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"List of advise messages."}),"\n",(0,n.jsxs)(s.h5,{id:"statsconnectionadvisemessageleveladvisemessagelevel--",children:[(0,n.jsx)(s.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["StatsConnection.adviseMessage.",(0,n.jsx)("b",{children:"level"})]})}),(0,n.jsx)(r,{}),(0,n.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,n.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/api/objects/stats-query",children:(0,n.jsx)(s.code,{children:"StatsQuery"})})," ",(0,n.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:s}={...(0,a.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},44808:(e,s,t)=>{var n=t(11504),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,t){var n,o={},l=null,r=null;for(n in void 0!==t&&(l=""+t),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(r=s.ref),s)d.call(s,n)&&!i.hasOwnProperty(n)&&(o[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:a,type:e,key:l,ref:r,props:o,_owner:c.current}}s.Fragment=o,s.jsx=l,s.jsxs=l},17624:(e,s,t)=>{e.exports=t(44808)},4552:(e,s,t)=>{t.d(s,{I:()=>c,M:()=>d});var n=t(11504);const a={},o=n.createContext(a);function d(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);