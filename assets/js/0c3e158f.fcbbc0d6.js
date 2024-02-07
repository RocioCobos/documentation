/*! For license information please see 0c3e158f.fcbbc0d6.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7570],{82504:(e,n,a)=>{a.r(n),a.d(n,{Badge:()=>j,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var t=a(17624),o=a(4552),s=a(11504);const c={id:"apiconnection",title:"APIConnection"},r=void 0,d={id:"objects/apiconnection",title:"APIConnection",description:"No description",source:"@site/api/objects/apiconnection.mdx",sourceDirName:"objects",slug:"/objects/apiconnection",permalink:"/api/objects/apiconnection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"apiconnection",title:"APIConnection"},sidebar:"schemaSidebar",previous:{title:"API",permalink:"/api/objects/api"},next:{title:"APIData",permalink:"/api/objects/apidata"}},i={},l=()=>{const e={span:"span",...(0,o.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const n={a:"a",...(0,o.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},j=e=>{const n={span:"span",...(0,o.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>APIConnection.<b>edges</b></code><Bullet></Bullet><code>[APIEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apiconnectionedgesapiedge--",level:4},{value:'<code>APIConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"apiconnectionpageinfopageinfo--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:n,children:a,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,o.M)()},[d,i]=(0,s.useState)(c);return(0,t.jsxs)(r.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:n}),d&&a]})};function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"type APIConnection {\n  edges: [APIEdge]\n  pageInfo: PageInfo!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"apiconnectionedgesapiedge--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["APIConnection.",(0,t.jsx)("b",{children:"edges"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/apiedge",children:(0,t.jsx)(n.code,{children:"[APIEdge]"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"apiconnectionpageinfopageinfo--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["APIConnection.",(0,t.jsx)("b",{children:"pageInfo"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/page-info",children:(0,t.jsx)(n.code,{children:"PageInfo!"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/objects/admin-query",children:(0,t.jsx)(n.code,{children:"AdminQuery"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/interfaces/group-common-data",children:(0,t.jsx)(n.code,{children:"GroupCommonData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"interface"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/group-data",children:(0,t.jsx)(n.code,{children:"GroupData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/organization-data",children:(0,t.jsx)(n.code,{children:"OrganizationData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/product-data",children:(0,t.jsx)(n.code,{children:"ProductData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/objects/resource-data",children:(0,t.jsx)(n.code,{children:"ResourceData"})})," ",(0,t.jsx)(j,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},44808:(e,n,a)=>{var t=a(11504),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,a){var t,s={},i=null,l=null;for(t in void 0!==a&&(i=""+a),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,t)&&!d.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:i,ref:l,props:s,_owner:r.current}}n.Fragment=s,n.jsx=i,n.jsxs=i},17624:(e,n,a)=>{e.exports=a(44808)},4552:(e,n,a)=>{a.d(n,{I:()=>r,M:()=>c});var t=a(11504);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);