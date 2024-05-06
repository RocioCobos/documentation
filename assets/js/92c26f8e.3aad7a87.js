/*! For license information please see 92c26f8e.3aad7a87.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42524],{53597:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>g,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var o=s(74848),a=s(28453),t=s(96540);const c={id:"recommendations-connection",title:"RecommendationsConnection"},d=void 0,i={id:"types/objects/recommendations-connection",title:"RecommendationsConnection",description:"Recommendations Connection",source:"@site/api/types/objects/recommendations-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/recommendations-connection",permalink:"/api/types/objects/recommendations-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"recommendations-connection",title:"RecommendationsConnection"},sidebar:"schemaSidebar",previous:{title:"Recommendation",permalink:"/api/types/objects/recommendation"},next:{title:"Reference",permalink:"/api/types/objects/reference"}},l={},r=()=>{const e={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},m=e=>{const n={a:"a",...(0,a.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const n={span:"span",...(0,a.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.span,{className:e.class,children:e.text})})},b=({dataOpen:e,dataClose:n,children:s,startOpen:c=!1})=>{const d={details:"details",summary:"summary",...(0,a.R)()},[i,l]=(0,t.useState)(c);return(0,o.jsxs)(d.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(d.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:i?e:n}),i&&s]})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>RecommendationsConnection.<b>edges</b></code><Bullet></Bullet><code>[RecommendationEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationsconnectionedgesrecommendationedge--",level:4},{value:'<code>RecommendationsConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationsconnectionpageinfopageinfo--",level:4},{value:'<code>RecommendationsConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationsconnectiontotalcountint--",level:4},{value:'<code>RecommendationsConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationsconnectionadvisemessageadvisemessage--",level:4},{value:'<code>RecommendationsConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"recommendationsconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Recommendations Connection"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"type RecommendationsConnection {\n  edges: [RecommendationEdge]\n  pageInfo: PageInfo!\n  totalCount: Int!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(n.h4,{id:"recommendationsconnectionedgesrecommendationedge--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/recommendation-edge",children:(0,o.jsx)(n.code,{children:"[RecommendationEdge]"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"recommendationsconnectionpageinfopageinfo--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/page-info",children:(0,o.jsx)(n.code,{children:"PageInfo!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"recommendationsconnectiontotalcountint--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsConnection.",(0,o.jsx)("b",{children:"totalCount"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/scalars/int",children:(0,o.jsx)(n.code,{children:"Int!"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(n.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(n.h4,{id:"recommendationsconnectionadvisemessageadvisemessage--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsConnection.",(0,o.jsx)("b",{children:"adviseMessage"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/objects/advise-message",children:(0,o.jsx)(n.code,{children:"[AdviseMessage!]"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.h5,{id:"recommendationsconnectionadvisemessageleveladvisemessagelevel--",children:[(0,o.jsx)(n.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["RecommendationsConnection.adviseMessage.",(0,o.jsx)("b",{children:"level"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(n.a,{href:"/api/types/enums/advise-message-level",children:(0,o.jsx)(n.code,{children:"[AdviseMessageLevel]"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/types/objects/insights-query",children:(0,o.jsx)(n.code,{children:"InsightsQuery"})})," ",(0,o.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},21020:(e,n,s)=>{var o=s(96540),a=Symbol.for("react.element"),t=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var o,t={},l=null,r=null;for(o in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(r=n.ref),n)c.call(n,o)&&!i.hasOwnProperty(o)&&(t[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===t[o]&&(t[o]=n[o]);return{$$typeof:a,type:e,key:l,ref:r,props:t,_owner:d.current}}n.Fragment=t,n.jsx=l,n.jsxs=l},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var o=s(96540);const a={},t=o.createContext(a);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);