/*! For license information please see 68f71bfd.57a09346.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48068],{49940:(e,s,t)=>{t.r(s),t.d(s,{Badge:()=>f,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var a=t(17624),i=t(4552),n=t(11504);const r={id:"certification-result",title:"CertificationResult"},l=void 0,c={id:"objects/certification-result",title:"CertificationResult",description:"No description",source:"@site/api/objects/certification-result.mdx",sourceDirName:"objects",slug:"/objects/certification-result",permalink:"/api/objects/certification-result",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"certification-result",title:"CertificationResult"},sidebar:"schemaSidebar",previous:{title:"CertificationEdge",permalink:"/api/objects/certification-edge"},next:{title:"Certification",permalink:"/api/objects/certification"}},o={},d=()=>{const e={span:"span",...(0,i.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,i.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},f=e=>{const s={span:"span",...(0,i.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>CertificationResult.<b>written</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationresultwrittenboolean--",level:4},{value:'<code>CertificationResult.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationresultadvisemessageadvisemessage--",level:4},{value:'<code>CertificationResult.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"certificationresultadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:s,children:t,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,i.M)()},[c,o]=(0,n.useState)(r);return(0,a.jsxs)(l.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:s}),c&&t]})};function b(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"type CertificationResult {\n  written: Boolean!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"certificationresultwrittenboolean--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationResult.",(0,a.jsx)("b",{children:"written"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean!"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"certificationresultadvisemessageadvisemessage--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationResult.",(0,a.jsx)("b",{children:"adviseMessage"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,a.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.h5,{id:"certificationresultadvisemessageleveladvisemessagelevel--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["CertificationResult.adviseMessage.",(0,a.jsx)("b",{children:"level"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,a.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/api/objects/hotel-xmutation",children:(0,a.jsx)(s.code,{children:"HotelXMutation"})})," ",(0,a.jsx)(f,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},44808:(e,s,t)=>{var a=t(11504),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,t){var a,n={},o=null,d=null;for(a in void 0!==t&&(o=""+t),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(d=s.ref),s)r.call(s,a)&&!c.hasOwnProperty(a)&&(n[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===n[a]&&(n[a]=s[a]);return{$$typeof:i,type:e,key:o,ref:d,props:n,_owner:l.current}}s.Fragment=n,s.jsx=o,s.jsxs=o},17624:(e,s,t)=>{e.exports=t(44808)},4552:(e,s,t)=>{t.d(s,{I:()=>l,M:()=>r});var a=t(11504);const i={},n=a.createContext(i);function r(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);