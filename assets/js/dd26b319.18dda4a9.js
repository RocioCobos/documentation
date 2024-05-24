/*! For license information please see dd26b319.18dda4a9.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83068],{89232:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>h,Bullet:()=>i,Details:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>d,default:()=>g,frontMatter:()=>t,metadata:()=>c,toc:()=>x});var l=r(74848),s=r(28453),a=r(96540);const t={id:"rule",title:"Rule",hide_table_of_contents:!1},d=void 0,c={id:"objects/rule",title:"Rule",description:"No description",source:"@site/api/objects/rule.mdx",sourceDirName:"objects",slug:"/objects/rule",permalink:"/api/objects/rule",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"rule",title:"Rule",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"Room",permalink:"/api/objects/room"},next:{title:"SearchCriteriaConnection",permalink:"/api/objects/search-criteria-connection"}},o={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,s.R)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,s.R)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:r,startOpen:t=!1})=>{const d={details:"details",summary:"summary",...(0,s.R)()},[c,o]=(0,a.useState)(t);return(0,l.jsxs)(d.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(d.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&r]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>Rule.<b>id</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ruleidstring--",level:4},{value:'<code>Rule.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"rulenamestring-",level:4},{value:'<code>Rule.<b>type</b></code><Bullet></Bullet><code>MarkupRuleType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ruletypemarkupruletype--",level:4},{value:'<code>Rule.<b>value</b></code><Bullet></Bullet><code>Float!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"rulevaluefloat--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"No description"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"type Rule {\n  id: String!\n  name: String\n  type: MarkupRuleType!\n  value: Float!\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(n.h4,{id:"ruleidstring--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["Rule.",(0,l.jsx)("b",{children:"id"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(n.a,{href:"/api/scalars/string",children:(0,l.jsx)(n.code,{children:"String!"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"rule identifier"}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"rulenamestring-",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["Rule.",(0,l.jsx)("b",{children:"name"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(n.a,{href:"/api/scalars/string",children:(0,l.jsx)(n.code,{children:"String"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"rule name"}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"ruletypemarkupruletype--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["Rule.",(0,l.jsx)("b",{children:"type"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(n.a,{href:"/api/enums/markup-rule-type",children:(0,l.jsx)(n.code,{children:"MarkupRuleType!"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"type of the value"}),"\n"]}),"\n",(0,l.jsxs)(n.h4,{id:"rulevaluefloat--",children:[(0,l.jsx)(n.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["Rule.",(0,l.jsx)("b",{children:"value"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(n.a,{href:"/api/scalars/float",children:(0,l.jsx)(n.code,{children:"Float!"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"value applied by this rule"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/api/objects/markup",children:(0,l.jsx)(n.code,{children:"Markup"})})," ",(0,l.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}},21020:(e,n,r)=>{var l=r(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var l,a={},o=null,i=null;for(l in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(i=n.ref),n)t.call(n,l)&&!c.hasOwnProperty(l)&&(a[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps)void 0===a[l]&&(a[l]=n[l]);return{$$typeof:s,type:e,key:o,ref:i,props:a,_owner:d.current}}n.Fragment=a,n.jsx=o,n.jsxs=o},74848:(e,n,r)=>{e.exports=r(21020)},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var l=r(96540);const s={},a=l.createContext(s);function t(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);