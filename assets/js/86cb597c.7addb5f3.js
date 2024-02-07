/*! For license information please see 86cb597c.7addb5f3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69516],{74496:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>b,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(17624),s=n(4552),a=n(11504);const l={id:"delete-member-input",title:"DeleteMemberInput",hide_table_of_contents:!1},d=void 0,o={id:"inputs/delete-member-input",title:"DeleteMemberInput",description:"No description",source:"@site/api/inputs/delete-member-input.mdx",sourceDirName:"inputs",slug:"/inputs/delete-member-input",permalink:"/api/inputs/delete-member-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"delete-member-input",title:"DeleteMemberInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DeleteGroupInput",permalink:"/api/inputs/delete-group-input"},next:{title:"DeleteOrganizationInput",permalink:"/api/inputs/delete-organization-input"}},i={},c=()=>{const e={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,s.M)()};return(0,r.jsxs)(r.Fragment,{children:["Specification",(0,r.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,s.M)()};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(t.span,{className:e.class,children:e.text})})},m=[{value:"Fields",id:"fields",level:3},{value:'<code>DeleteMemberInput.<b>member</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"deletememberinputmemberid--",level:4},{value:'<code>DeleteMemberInput.<b>group</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"deletememberinputgroupid--",level:4}],b=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const d={details:"details",summary:"summary",...(0,s.M)()},[o,i]=(0,a.useState)(l);return(0,r.jsxs)(d.details,{...o?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,r.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:o?e:t}),o&&n]})};function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"No description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"input DeleteMemberInput {\n  member: ID!\n  group: ID!\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(t.h4,{id:"deletememberinputmemberid--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["DeleteMemberInput.",(0,r.jsx)("b",{children:"member"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/scalars/id",children:(0,r.jsx)(t.code,{children:"ID!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"}),"\n",(0,r.jsxs)(t.h4,{id:"deletememberinputgroupid--",children:[(0,r.jsx)(t.a,{href:"#",children:(0,r.jsxs)("code",{style:{fontWeight:"normal"},children:["DeleteMemberInput.",(0,r.jsx)("b",{children:"group"})]})}),(0,r.jsx)(c,{}),(0,r.jsx)(t.a,{href:"/api/scalars/id",children:(0,r.jsx)(t.code,{children:"ID!"})})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,r.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,r.jsx)(t.blockquote,{children:"\n"})]})}function f(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},44808:(e,t,n)=>{var r=n(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,a={},i=null,c=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!o.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:i,ref:c,props:a,_owner:d.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>d,M:()=>l});var r=n(11504);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);