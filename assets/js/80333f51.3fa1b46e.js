/*! For license information please see 80333f51.3fa1b46e.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47452],{3068:(e,s,c)=>{c.r(s),c.d(s,{Badge:()=>h,Bullet:()=>o,Details:()=>x,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var a=c(17624),n=c(4552),t=c(11504);const d={id:"access-create-input",title:"AccessCreateInput"},r=void 0,l={id:"inputs/access-create-input",title:"AccessCreateInput",description:"No description",source:"@site/api/inputs/access-create-input.mdx",sourceDirName:"inputs",slug:"/inputs/access-create-input",permalink:"/api/inputs/access-create-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"access-create-input",title:"AccessCreateInput"},sidebar:"schemaSidebar",previous:{title:"AccessCloneInput",permalink:"/api/inputs/access-clone-input"},next:{title:"AccessFilterInput",permalink:"/api/inputs/access-filter-input"}},i={},o=()=>{const e={span:"span",...(0,n.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const s={a:"a",...(0,n.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const s={span:"span",...(0,n.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>AccessCreateInput.<b>name</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputnamestring--",level:4},{value:'<code>AccessCreateInput.<b>supplierCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputsuppliercodeid--",level:4},{value:'<code>AccessCreateInput.<b>groupCode</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputgroupcodeid--",level:4},{value:'<code>AccessCreateInput.<b>isActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputisactiveboolean-",level:4},{value:'<code>AccessCreateInput.<b>isTest</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputistestboolean-",level:4},{value:'<code>AccessCreateInput.<b>user</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputuserstring-",level:4},{value:'<code>AccessCreateInput.<b>password</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputpasswordstring-",level:4},{value:'<code>AccessCreateInput.<b>updateDescriptiveInfo</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputupdatedescriptiveinfoint-",level:4},{value:'<code>AccessCreateInput.<b>updateList</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputupdatelistint-",level:4},{value:'<code>AccessCreateInput.<b>updateDateRange</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputupdatedaterangestring-",level:4},{value:'<code>AccessCreateInput.<b>descriptiveInfoLimit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputdescriptiveinfolimitint-",level:4},{value:'<code>AccessCreateInput.<b>isSchedulerActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputisscheduleractiveboolean-",level:4},{value:'<code>AccessCreateInput.<b>masterCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputmastercodeid-",level:4},{value:'<code>AccessCreateInput.<b>sharedCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputsharedcodeid-",level:4},{value:'<code>AccessCreateInput.<b>id</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputidid-",level:4},{value:'<code>AccessCreateInput.<b>urls</b></code><Bullet></Bullet><code>UrlsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputurlsurlsinput-",level:4},{value:'<code>AccessCreateInput.<b>isShared</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputissharedboolean-",level:4},{value:'<code>AccessCreateInput.<b>parameters</b></code><Bullet></Bullet><code>[ParameterInput!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputparametersparameterinput--",level:4},{value:'<code>AccessCreateInput.<b>markets</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputmarketsstring--",level:4},{value:'<code>AccessCreateInput.<b>rateRules</b></code><Bullet></Bullet><code>[RateRulesType!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"accesscreateinputraterulesraterulestype--",level:4}],x=({dataOpen:e,dataClose:s,children:c,startOpen:d=!1})=>{const r={details:"details",summary:"summary",...(0,n.M)()},[l,i]=(0,t.useState)(d);return(0,a.jsxs)(r.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&c]})};function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"No description"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-graphql",children:"input AccessCreateInput {\n  name: String!\n  supplierCode: ID!\n  groupCode: ID!\n  isActive: Boolean\n  isTest: Boolean\n  user: String\n  password: String\n  updateDescriptiveInfo: Int\n  updateList: Int\n  updateDateRange: String\n  descriptiveInfoLimit: Int\n  isSchedulerActive: Boolean\n  masterCode: ID\n  sharedCode: ID\n  id: ID\n  urls: UrlsInput\n  isShared: Boolean\n  parameters: [ParameterInput!]\n  markets: [String!]\n  rateRules: [RateRulesType!]\n}\n"})}),"\n",(0,a.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputnamestring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"name"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/string",children:(0,a.jsx)(s.code,{children:"String!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Access descriptive unique name"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputsuppliercodeid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"supplierCode"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/id",children:(0,a.jsx)(s.code,{children:"ID!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Supplier code for this Access"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputgroupcodeid--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"groupCode"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/id",children:(0,a.jsx)(s.code,{children:"ID!"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Group code for this Access"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputisactiveboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"isActive"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Indicates if Access is active"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputistestboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"isTest"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Indicates if Access can be used for testing or not"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputuserstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"user"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"User code to connect to supplier"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputpasswordstring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"password"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Password for the connection"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputupdatedescriptiveinfoint-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"updateDescriptiveInfo"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/int",children:(0,a.jsx)(s.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Refresh time to update Despriptive Info"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputupdatelistint-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"updateList"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/int",children:(0,a.jsx)(s.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Refresh time to update other batch lists"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputupdatedaterangestring-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"updateDateRange"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/string",children:(0,a.jsx)(s.code,{children:"String"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Range on update date"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputdescriptiveinfolimitint-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"descriptiveInfoLimit"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/int",children:(0,a.jsx)(s.code,{children:"Int"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Limit on DescriptiveInfo; 0 denotates no limit"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputisscheduleractiveboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"isSchedulerActive"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Indicates if scheduler is active"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputmastercodeid-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"masterCode"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/id",children:(0,a.jsx)(s.code,{children:"ID"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Set master Access if it it s not a master Access. Use Access->code"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputsharedcodeid-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"sharedCode"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/id",children:(0,a.jsx)(s.code,{children:"ID"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Parent Access if Shared Access."}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputidid-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"id"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/id",children:(0,a.jsx)(s.code,{children:"ID"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsx)(s.blockquote,{children:"\n"}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputurlsurlsinput-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"urls"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/inputs/urls-input",children:(0,a.jsx)(s.code,{children:"UrlsInput"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Specific URLs"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputissharedboolean-",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"isShared"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,a.jsx)(s.code,{children:"Boolean"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Indicates if is a Shared Access"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputparametersparameterinput--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"parameters"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/inputs/parameter-input",children:(0,a.jsx)(s.code,{children:"[ParameterInput!]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"List of parameters for additional information"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputmarketsstring--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"markets"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/scalars/string",children:(0,a.jsx)(s.code,{children:"[String!]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Markets allowed for the Access"}),"\n"]}),"\n",(0,a.jsxs)(s.h4,{id:"accesscreateinputraterulesraterulestype--",children:[(0,a.jsx)(s.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessCreateInput.",(0,a.jsx)("b",{children:"rateRules"})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(s.a,{href:"/api/enums/rate-rules-type",children:(0,a.jsx)(s.code,{children:"[RateRulesType!]"})})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,a.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Business rule types for the Access"}),"\n"]})]})}function j(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},44808:(e,s,c)=>{var a=c(11504),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,c){var a,t={},i=null,o=null;for(a in void 0!==c&&(i=""+c),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(o=s.ref),s)d.call(s,a)&&!l.hasOwnProperty(a)&&(t[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===t[a]&&(t[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:o,props:t,_owner:r.current}}s.Fragment=t,s.jsx=i,s.jsxs=i},17624:(e,s,c)=>{e.exports=c(44808)},4552:(e,s,c)=>{c.d(s,{I:()=>r,M:()=>d});var a=c(11504);const n={},t=a.createContext(n);function d(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);