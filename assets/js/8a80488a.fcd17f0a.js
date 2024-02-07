/*! For license information please see 8a80488a.fcd17f0a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35276],{71244:(e,o,t)=>{t.r(o),t.d(o,{Badge:()=>u,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>g});var n=t(17624),r=t(4552),s=t(11504);const a={id:"room-edge",title:"RoomEdge"},d=void 0,c={id:"objects/room-edge",title:"RoomEdge",description:"RoomList Edge definition",source:"@site/api/objects/room-edge.mdx",sourceDirName:"objects",slug:"/objects/room-edge",permalink:"/api/objects/room-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"room-edge",title:"RoomEdge"},sidebar:"schemaSidebar",previous:{title:"RoomData",permalink:"/api/objects/room-data"},next:{title:"RoomOptionQuote",permalink:"/api/objects/room-option-quote"}},i={},l=()=>{const e={span:"span",...(0,r.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const o={a:"a",...(0,r.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const o={span:"span",...(0,r.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>RoomEdge.<b>node</b></code><Bullet></Bullet><code>RoomStatic</code> <Badge class="badge badge--secondary"></Badge>',id:"roomedgenoderoomstatic-",level:4},{value:'<code>RoomEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"roomedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:o,children:t,startOpen:a=!1})=>{const d={details:"details",summary:"summary",...(0,r.M)()},[c,i]=(0,s.useState)(a);return(0,n.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(d.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:o}),c&&t]})};function h(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"RoomList Edge definition"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-graphql",children:"type RoomEdge {\n  node: RoomStatic\n  cursor: String!\n}\n"})}),"\n",(0,n.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(o.h4,{id:"roomedgenoderoomstatic-",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomEdge.",(0,n.jsx)("b",{children:"node"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(o.a,{href:"/api/objects/room-static",children:(0,n.jsx)(o.code,{children:"RoomStatic"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsx)(o.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(o.h4,{id:"roomedgecursorstring--",children:[(0,n.jsx)(o.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["RoomEdge.",(0,n.jsx)("b",{children:"cursor"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(o.a,{href:"/api/scalars/string",children:(0,n.jsx)(o.code,{children:"String!"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsx)(o.blockquote,{children:"\n"}),"\n",(0,n.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/api/objects/room-connection",children:(0,n.jsx)(o.code,{children:"RoomConnection"})})," ",(0,n.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},44808:(e,o,t)=>{var n=t(11504),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,o,t){var n,s={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(l=o.ref),o)a.call(o,n)&&!c.hasOwnProperty(n)&&(s[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===s[n]&&(s[n]=o[n]);return{$$typeof:r,type:e,key:i,ref:l,props:s,_owner:d.current}}o.Fragment=s,o.jsx=i,o.jsxs=i},17624:(e,o,t)=>{e.exports=t(44808)},4552:(e,o,t)=>{t.d(o,{I:()=>d,M:()=>a});var n=t(11504);const r={},s=n.createContext(r);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);