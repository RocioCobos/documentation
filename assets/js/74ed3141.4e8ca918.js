/*! For license information please see 74ed3141.4e8ca918.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14052],{60060:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>b,Bullet:()=>i,Details:()=>g,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=n(17624),s=n(4552),o=n(11504);const a={id:"member-edge",title:"MemberEdge"},d=void 0,c={id:"objects/member-edge",title:"MemberEdge",description:"No description",source:"@site/api/objects/member-edge.mdx",sourceDirName:"objects",slug:"/objects/member-edge",permalink:"/api/objects/member-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"member-edge",title:"MemberEdge"},sidebar:"schemaSidebar",previous:{title:"MemberData",permalink:"/api/objects/member-data"},next:{title:"MemberOrganizations",permalink:"/api/objects/member-organizations"}},l={},i=()=>{const e={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const r={a:"a",...(0,s.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const r={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>MemberEdge.<b>node</b></code><Bullet></Bullet><code>Member</code> <Badge class="badge badge--secondary"></Badge>',id:"memberedgenodemember-",level:4},{value:'<code>MemberEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}],g=({dataOpen:e,dataClose:r,children:n,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,s.M)()},[c,l]=(0,o.useState)(a);return(0,t.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:r}),c&&n]})};function p(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"No description"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type MemberEdge {\n  node: Member\n  cursor: String!\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"memberedgenodemember-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberEdge.",(0,t.jsx)("b",{children:"node"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/objects/member",children:(0,t.jsx)(r.code,{children:"Member"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(r.h4,{id:"memberedgecursorstring--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MemberEdge.",(0,t.jsx)("b",{children:"cursor"})]})}),(0,t.jsx)(i,{}),(0,t.jsx)(r.a,{href:"/api/scalars/string",children:(0,t.jsx)(r.code,{children:"String!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/objects/member-connection",children:(0,t.jsx)(r.code,{children:"MemberConnection"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function h(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},44808:(e,r,n)=>{var t=n(11504),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,o={},l=null,i=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)a.call(r,t)&&!c.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:i,props:o,_owner:d.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},17624:(e,r,n)=>{e.exports=n(44808)},4552:(e,r,n)=>{n.d(r,{I:()=>d,M:()=>a});var t=n(11504);const s={},o=t.createContext(s);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);