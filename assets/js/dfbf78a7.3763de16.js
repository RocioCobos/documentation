/*! For license information please see dfbf78a7.3763de16.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1792],{52620:(e,r,s)=>{s.r(r),s.d(r,{Badge:()=>m,Bullet:()=>o,Details:()=>u,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var n=s(17624),l=s(4552),t=s(11504);const a={id:"members-where-input",title:"MembersWhereInput"},i=void 0,d={id:"inputs/members-where-input",title:"MembersWhereInput",description:"Members where input. Filters are additive (AND)",source:"@site/api/inputs/members-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/members-where-input",permalink:"/api/inputs/members-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"members-where-input",title:"MembersWhereInput"},sidebar:"schemaSidebar",previous:{title:"MemberWhereUniqueInput",permalink:"/api/inputs/member-where-unique-input"},next:{title:"NullableFloatFilter",permalink:"/api/inputs/nullable-float-filter"}},c={},o=()=>{const e={span:"span",...(0,l.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const r={a:"a",...(0,l.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const r={span:"span",...(0,l.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>MembersWhereInput.<b>code_in</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"memberswhereinputcode_inid--",level:4},{value:'<code>MembersWhereInput.<b>label</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"memberswhereinputlabelstring-",level:4},{value:'<code>MembersWhereInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"memberswhereinputisactiveboolean-",level:4},{value:'<code>MembersWhereInput.<b>membersType</b></code><Bullet></Bullet><code>MembersType</code> <Badge class="badge badge--secondary"></Badge>',id:"memberswhereinputmemberstypememberstype-",level:4},{value:'<code>MembersWhereInput.<b>membersRole</b></code><Bullet></Bullet><code>MembersRole</code> <Badge class="badge badge--secondary"></Badge>',id:"memberswhereinputmembersrolemembersrole-",level:4},{value:'<code>MembersWhereInput.<b>includeArchived</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"memberswhereinputincludearchivedboolean-",level:4}],u=({dataOpen:e,dataClose:r,children:s,startOpen:a=!1})=>{const i={details:"details",summary:"summary",...(0,l.M)()},[d,c]=(0,t.useState)(a);return(0,n.jsxs)(i.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(i.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&s]})};function p(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Members where input. Filters are additive (AND)"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"input MembersWhereInput {\n  code_in: [ID!]\n  label: String\n  isActive: Boolean\n  membersType: MembersType\n  membersRole: MembersRole\n  includeArchived: Boolean\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"memberswhereinputcode_inid--",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersWhereInput.",(0,n.jsx)("b",{children:"code_in"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/id",children:(0,n.jsx)(r.code,{children:"[ID!]"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"list"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Filter by Members Code"}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"memberswhereinputlabelstring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersWhereInput.",(0,n.jsx)("b",{children:"label"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Filter by Members Name"}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"memberswhereinputisactiveboolean-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersWhereInput.",(0,n.jsx)("b",{children:"isActive"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/boolean",children:(0,n.jsx)(r.code,{children:"Boolean"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Filter by Members Status"}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"memberswhereinputmemberstypememberstype-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersWhereInput.",(0,n.jsx)("b",{children:"membersType"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/members-type",children:(0,n.jsx)(r.code,{children:"MembersType"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Filter by Members type"}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"memberswhereinputmembersrolemembersrole-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersWhereInput.",(0,n.jsx)("b",{children:"membersRole"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/enums/members-role",children:(0,n.jsx)(r.code,{children:"MembersRole"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Filter by Members Role"}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"memberswhereinputincludearchivedboolean-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MembersWhereInput.",(0,n.jsx)("b",{children:"includeArchived"})]})}),(0,n.jsx)(o,{}),(0,n.jsx)(r.a,{href:"/api/scalars/boolean",children:(0,n.jsx)(r.code,{children:"Boolean"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Filter by include archived"}),"\n"]})]})}function x(e={}){const{wrapper:r}={...(0,l.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},44808:(e,r,s)=>{var n=s(11504),l=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var n,t={},c=null,o=null;for(n in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(o=r.ref),r)a.call(r,n)&&!d.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:l,type:e,key:c,ref:o,props:t,_owner:i.current}}r.Fragment=t,r.jsx=c,r.jsxs=c},17624:(e,r,s)=>{e.exports=s(44808)},4552:(e,r,s)=>{s.d(r,{I:()=>i,M:()=>a});var n=s(11504);const l={},t=n.createContext(l);function a(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);