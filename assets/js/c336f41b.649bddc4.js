/*! For license information please see c336f41b.649bddc4.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93585],{80219:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>a,default:()=>x,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var o=t(74848),r=t(28453),d=t(96540);const s={id:"recommendation-edge",title:"RecommendationEdge"},a=void 0,c={id:"types/objects/recommendation-edge",title:"RecommendationEdge",description:"Recommendation Edge",source:"@site/api/types/objects/recommendation-edge.mdx",sourceDirName:"types/objects",slug:"/types/objects/recommendation-edge",permalink:"/api/types/objects/recommendation-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"recommendation-edge",title:"RecommendationEdge"},sidebar:"schemaSidebar",previous:{title:"RecommendationData",permalink:"/api/types/objects/recommendation-data"},next:{title:"Recommendation",permalink:"/api/types/objects/recommendation"}},i={},l=()=>{const e={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,r.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const n={span:"span",...(0,r.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:n,children:t,startOpen:s=!1})=>{const a={details:"details",summary:"summary",...(0,r.R)()},[c,i]=(0,d.useState)(s);return(0,o.jsxs)(a.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(a.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&t]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>RecommendationEdge.<b>node</b></code><Bullet></Bullet><code>Recommendation</code> <Badge class="badge badge--secondary"></Badge>',id:"recommendationedgenoderecommendation-",level:4},{value:'<code>RecommendationEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Recommendation Edge"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type RecommendationEdge {\n  node: Recommendation\n  cursor: String!\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"recommendationedgenoderecommendation-",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationEdge.",(0,o.jsx)("b",{children:"node"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/recommendation",children:(0,o.jsx)(n.code,{children:"Recommendation"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"recommendationedgecursorstring--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationEdge.",(0,o.jsx)("b",{children:"cursor"})]})}),(0,o.jsx)(l,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/string",children:(0,o.jsx)(n.code,{children:"String!"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/objects/recommendations-connection",children:(0,o.jsx)(n.code,{children:"RecommendationsConnection"})})," ",(0,o.jsx)(p,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,n,t)=>{var o=t(96540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var o,d={},i=null,l=null;for(o in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,o)&&!c.hasOwnProperty(o)&&(d[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===d[o]&&(d[o]=n[o]);return{$$typeof:r,type:e,key:i,ref:l,props:d,_owner:a.current}}n.Fragment=d,n.jsx=i,n.jsxs=i},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const r={},d=o.createContext(r);function s(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);