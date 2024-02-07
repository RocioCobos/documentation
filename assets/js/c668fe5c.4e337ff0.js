/*! For license information please see c668fe5c.4e337ff0.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73528],{83188:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>g,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>a,contentTitle:()=>i,default:()=>j,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var t=o(17624),c=o(4552),r=o(11504);const s={id:"connection-edge",title:"ConnectionEdge"},i=void 0,d={id:"objects/connection-edge",title:"ConnectionEdge",description:"Connection connection edge",source:"@site/api/objects/connection-edge.mdx",sourceDirName:"objects",slug:"/objects/connection-edge",permalink:"/api/objects/connection-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"connection-edge",title:"ConnectionEdge"},sidebar:"schemaSidebar",previous:{title:"ConnectionData",permalink:"/api/objects/connection-data"},next:{title:"Connection",permalink:"/api/objects/connection"}},a={},l=()=>{const e={span:"span",...(0,c.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,c.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,c.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>ConnectionEdge.<b>node</b></code><Bullet></Bullet><code>Connection</code> <Badge class="badge badge--secondary"></Badge>',id:"connectionedgenodeconnection-",level:4},{value:'<code>ConnectionEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"connectionedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:n,children:o,startOpen:s=!1})=>{const i={details:"details",summary:"summary",...(0,c.M)()},[d,a]=(0,r.useState)(s);return(0,t.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),a((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&o]})};function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Connection connection edge"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type ConnectionEdge {\n  node: Connection\n  cursor: String!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"connectionedgenodeconnection-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionEdge.",(0,t.jsx)("b",{children:"node"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/connection",children:(0,t.jsx)(n.code,{children:"Connection"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Connection item"}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"connectionedgecursorstring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["ConnectionEdge.",(0,t.jsx)("b",{children:"cursor"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Cursor to the next item"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/objects/connection-connection",children:(0,t.jsx)(n.code,{children:"ConnectionConnection"})})," ",(0,t.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},44808:(e,n,o)=>{var t=o(11504),c=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,o){var t,r={},a=null,l=null;for(t in void 0!==o&&(a=""+o),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!d.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:c,type:e,key:a,ref:l,props:r,_owner:i.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},17624:(e,n,o)=>{e.exports=o(44808)},4552:(e,n,o)=>{o.d(n,{I:()=>i,M:()=>s});var t=o(11504);const c={},r=t.createContext(c);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);