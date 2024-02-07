/*! For license information please see 2fcfe12c.365c1eaf.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43224],{84156:(e,a,s)=>{s.r(a),s.d(a,{Badge:()=>b,Bullet:()=>n,Details:()=>h,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>d,metadata:()=>r,toc:()=>u});var c=s(17624),t=s(4552),o=s(11504);const d={id:"social-sub-category",title:"SocialSubCategory"},l=void 0,r={id:"objects/social-sub-category",title:"SocialSubCategory",description:"No description",source:"@site/api/objects/social-sub-category.mdx",sourceDirName:"objects",slug:"/objects/social-sub-category",permalink:"/api/objects/social-sub-category",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"social-sub-category",title:"SocialSubCategory"},sidebar:"schemaSidebar",previous:{title:"SocialSubCategoryEdge",permalink:"/api/objects/social-sub-category-edge"},next:{title:"SpeedAccessCollection",permalink:"/api/objects/speed-access-collection"}},i={},n=()=>{const e={span:"span",...(0,t.M)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,t.M)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const a={span:"span",...(0,t.M)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>SocialSubCategory.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategorycodeid--",level:4},{value:'<code>SocialSubCategory.<b>subCategoryData</b></code><Bullet></Bullet><code>SocialSubCategoryData</code> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategorysubcategorydatasocialsubcategorydata-",level:4},{value:'<code>SocialSubCategory.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryadvisemessageadvisemessage--",level:4},{value:'<code>SocialSubCategory.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryadvisemessageleveladvisemessagelevel--",level:5},{value:'<code>SocialSubCategory.<b>createdAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategorycreatedatdatetime-",level:4},{value:'<code>SocialSubCategory.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime</code> <Badge class="badge badge--secondary"></Badge>',id:"socialsubcategoryupdatedatdatetime-",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:a,children:s,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,t.M)()},[r,i]=(0,o.useState)(d);return(0,c.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:r?e:a}),r&&s]})};function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.p,{children:"No description"}),"\n",(0,c.jsx)(a.pre,{children:(0,c.jsx)(a.code,{className:"language-graphql",children:"type SocialSubCategory {\n  code: ID!\n  subCategoryData: SocialSubCategoryData\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n  createdAt: DateTime\n  updatedAt: DateTime\n}\n"})}),"\n",(0,c.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategorycodeid--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"code"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/scalars/id",children:(0,c.jsx)(a.code,{children:"ID!"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategorysubcategorydatasocialsubcategorydata-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"subCategoryData"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/objects/social-sub-category-data",children:(0,c.jsx)(a.code,{children:"SocialSubCategoryData"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsx)(a.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategoryadvisemessageadvisemessage--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"adviseMessage"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/objects/advise-message",children:(0,c.jsx)(a.code,{children:"[AdviseMessage!]"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,c.jsxs)(a.blockquote,{children:["\n",(0,c.jsxs)(a.h5,{id:"socialsubcategoryadvisemessageleveladvisemessagelevel--",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.adviseMessage.",(0,c.jsx)("b",{children:"level"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/enums/advise-message-level",children:(0,c.jsx)(a.code,{children:"[AdviseMessageLevel]"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategorycreatedatdatetime-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"createdAt"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,c.jsx)(a.code,{children:"DateTime"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.blockquote,{children:"\n"}),"\n",(0,c.jsxs)(a.h4,{id:"socialsubcategoryupdatedatdatetime-",children:[(0,c.jsx)(a.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialSubCategory.",(0,c.jsx)("b",{children:"updatedAt"})]})}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/scalars/date-time",children:(0,c.jsx)(a.code,{children:"DateTime"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsx)(a.blockquote,{children:"\n"}),"\n",(0,c.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,c.jsxs)(a.p,{children:[(0,c.jsx)(a.a,{href:"/api/objects/social-mutation",children:(0,c.jsx)(a.code,{children:"SocialMutation"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,c.jsx)(n,{}),(0,c.jsx)(a.a,{href:"/api/objects/social-sub-category-edge",children:(0,c.jsx)(a.code,{children:"SocialSubCategoryEdge"})})," ",(0,c.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function y(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,c.jsx)(a,{...e,children:(0,c.jsx)(x,{...e})}):x(e)}},44808:(e,a,s)=>{var c=s(11504),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,s){var c,o={},i=null,n=null;for(c in void 0!==s&&(i=""+s),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(n=a.ref),a)d.call(a,c)&&!r.hasOwnProperty(c)&&(o[c]=a[c]);if(e&&e.defaultProps)for(c in a=e.defaultProps)void 0===o[c]&&(o[c]=a[c]);return{$$typeof:t,type:e,key:i,ref:n,props:o,_owner:l.current}}a.Fragment=o,a.jsx=i,a.jsxs=i},17624:(e,a,s)=>{e.exports=s(44808)},4552:(e,a,s)=>{s.d(a,{I:()=>l,M:()=>d});var c=s(11504);const t={},o=c.createContext(t);function d(e){const a=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(o.Provider,{value:a},e.children)}}}]);