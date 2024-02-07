/*! For license information please see a9e4c4f0.9a1b55cb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36920],{59692:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var i=n(17624),a=n(4552),r=n(11504);const s={id:"invitation-update-input",title:"InvitationUpdateInput",hide_table_of_contents:!1},o=void 0,d={id:"inputs/invitation-update-input",title:"InvitationUpdateInput",description:"No description",source:"@site/api/inputs/invitation-update-input.mdx",sourceDirName:"inputs",slug:"/inputs/invitation-update-input",permalink:"/api/inputs/invitation-update-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"invitation-update-input",title:"InvitationUpdateInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InvitationCreateInput",permalink:"/api/inputs/invitation-create-input"},next:{title:"InvitationWhereInput",permalink:"/api/inputs/invitation-where-input"}},l={},c=()=>{const e={span:"span",...(0,a.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,a.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,a.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>InvitationUpdateInput.<b>invitedBy</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"invitationupdateinputinvitedbystring-",level:4},{value:'<code>InvitationUpdateInput.<b>orgCode</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"invitationupdateinputorgcodestring-",level:4},{value:'<code>InvitationUpdateInput.<b>role</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"invitationupdateinputrolestring-",level:4},{value:'<code>InvitationUpdateInput.<b>userEmail</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"invitationupdateinputuseremailstring-",level:4}],g=({dataOpen:e,dataClose:t,children:n,startOpen:s=!1})=>{const o={details:"details",summary:"summary",...(0,a.M)()},[d,l]=(0,r.useState)(s);return(0,i.jsxs)(o.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(o.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:t}),d&&n]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input InvitationUpdateInput {\n  invitedBy: String\n  orgCode: String\n  role: String\n  userEmail: String\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"invitationupdateinputinvitedbystring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvitationUpdateInput.",(0,i.jsx)("b",{children:"invitedBy"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"invitationupdateinputorgcodestring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvitationUpdateInput.",(0,i.jsx)("b",{children:"orgCode"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"invitationupdateinputrolestring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvitationUpdateInput.",(0,i.jsx)("b",{children:"role"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"invitationupdateinputuseremailstring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["InvitationUpdateInput.",(0,i.jsx)("b",{children:"userEmail"})]})}),(0,i.jsx)(c,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"})]})}function v(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},44808:(e,t,n)=>{var i=n(11504),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,r={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,i)&&!d.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:a,type:e,key:l,ref:c,props:r,_owner:o.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>s});var i=n(11504);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);