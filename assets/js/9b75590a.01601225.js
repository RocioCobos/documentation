/*! For license information please see 9b75590a.01601225.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86337],{12738:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>b,Bullet:()=>r,Details:()=>u,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>d,toc:()=>y});var o=a(74848),n=a(28453),c=a(96540);const t={id:"social-sub-category-connection",title:"SocialSubCategoryConnection"},l=void 0,d={id:"types/objects/social-sub-category-connection",title:"SocialSubCategoryConnection",description:"No description",source:"@site/api/types/objects/social-sub-category-connection.mdx",sourceDirName:"types/objects",slug:"/types/objects/social-sub-category-connection",permalink:"/api/types/objects/social-sub-category-connection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"social-sub-category-connection",title:"SocialSubCategoryConnection"},sidebar:"schemaSidebar",previous:{title:"SocialQuery",permalink:"/api/types/objects/social-query"},next:{title:"SocialSubCategoryData",permalink:"/api/types/objects/social-sub-category-data"}},i={},r=()=>{const e={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const s={a:"a",...(0,n.R)()};return(0,o.jsxs)(o.Fragment,{children:["Specification",(0,o.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const s={span:"span",...(0,n.R)()};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:s,children:a,startOpen:t=!1})=>{const l={details:"details",summary:"summary",...(0,n.R)()},[d,i]=(0,c.useState)(t);return(0,o.jsxs)(l.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,o.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:d?e:s}),d&&a]})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>SocialSubCategoryConnection.<b>edges</b></code><Bullet></Bullet><code>[SocialSubCategoryEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryconnectionedgessocialsubcategoryedge--",level:4},{value:'<code>SocialSubCategoryConnection.<b>pageInfo</b></code><Bullet></Bullet><code>PageInfo!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryconnectionpageinfopageinfo--",level:4},{value:'<code>SocialSubCategoryConnection.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryconnectionadvisemessageadvisemessage--",level:4},{value:'<code>SocialSubCategoryConnection.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryconnectionadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>SocialSubCategoryConnection.<b>totalCount</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryconnectiontotalcountint--",level:4},{value:"Member Of",id:"member-of",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"No description"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-graphql",children:"type SocialSubCategoryConnection {\n  edges: [SocialSubCategoryEdge]\n  pageInfo: PageInfo!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage]\n  totalCount: Int!\n}\n"})}),"\n",(0,o.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(s.h4,{id:"socialsubcategoryconnectionedgessocialsubcategoryedge--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategoryConnection.",(0,o.jsx)("b",{children:"edges"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/social-sub-category-edge",children:(0,o.jsx)(s.code,{children:"[SocialSubCategoryEdge]"})})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(s.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(s.h4,{id:"socialsubcategoryconnectionpageinfopageinfo--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategoryConnection.",(0,o.jsx)("b",{children:"pageInfo"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/page-info",children:(0,o.jsx)(s.code,{children:"PageInfo!"})})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsx)(s.blockquote,{children:"\n"}),"\n",(0,o.jsxs)(s.h4,{id:"socialsubcategoryconnectionadvisemessageadvisemessage--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategoryConnection.",(0,o.jsx)("b",{children:"adviseMessage"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(s.a,{href:"/api/types/objects/advise-message",children:(0,o.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.h5,{id:"socialsubcategoryconnectionadvisemessageleveladvisemessagelevel--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategoryConnection.adviseMessage.",(0,o.jsx)("b",{children:"level"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(s.a,{href:"/api/types/enums/advise-message-level",children:(0,o.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,o.jsxs)(s.h4,{id:"socialsubcategoryconnectiontotalcountint--",children:[(0,o.jsx)(s.a,{href:"#",children:(0,o.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategoryConnection.",(0,o.jsx)("b",{children:"totalCount"})]})}),(0,o.jsx)(r,{}),(0,o.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,o.jsx)(s.code,{children:"Int!"})})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,o.jsx)(s.blockquote,{children:"\n"}),"\n",(0,o.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/api/types/objects/social-category-data",children:(0,o.jsx)(s.code,{children:"SocialCategoryData"})})," ",(0,o.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,s,a)=>{var o=a(96540),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,a){var o,c={},i=null,r=null;for(o in void 0!==a&&(i=""+a),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(r=s.ref),s)t.call(s,o)&&!d.hasOwnProperty(o)&&(c[o]=s[o]);if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===c[o]&&(c[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:r,props:c,_owner:l.current}}s.Fragment=c,s.jsx=i,s.jsxs=i},74848:(e,s,a)=>{e.exports=a(21020)},28453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>l});var o=a(96540);const n={},c=o.createContext(n);function t(e){const s=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(c.Provider,{value:s},e.children)}}}]);