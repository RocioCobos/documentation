/*! For license information please see d2f05236.7c4efb60.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10473],{66022:(e,s,n)=>{n.r(s),n.d(s,{Badge:()=>u,Bullet:()=>o,Details:()=>h,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>i,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>x});var c=n(74848),t=n(28453),a=n(96540);const d={id:"access-update-input",title:"AccessUpdateInput"},i=void 0,l={id:"types/inputs/access-update-input",title:"AccessUpdateInput",description:"No description",source:"@site/api/types/inputs/access-update-input.mdx",sourceDirName:"types/inputs",slug:"/types/inputs/access-update-input",permalink:"/api/types/inputs/access-update-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"access-update-input",title:"AccessUpdateInput"},sidebar:"schemaSidebar",previous:{title:"AccessInput",permalink:"/api/types/inputs/access-input"},next:{title:"AccessWhereInput",permalink:"/api/types/inputs/access-where-input"}},r={},o=()=>{const e={span:"span",...(0,t.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,t.R)()};return(0,c.jsxs)(c.Fragment,{children:["Specification",(0,c.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const s={span:"span",...(0,t.R)()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(s.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:s,children:n,startOpen:d=!1})=>{const i={details:"details",summary:"summary",...(0,t.R)()},[l,r]=(0,a.useState)(d);return(0,c.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,c.jsx)(i.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:l?e:s}),l&&n]})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>AccessUpdateInput.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputnamestring-",level:4},{value:'<code>AccessUpdateInput.<b>supplierCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputsuppliercodeid-",level:4},{value:'<code>AccessUpdateInput.<b>isTest</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputistestboolean-",level:4},{value:'<code>AccessUpdateInput.<b>isShared</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputissharedboolean-",level:4},{value:'<code>AccessUpdateInput.<b>user</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputuserstring-",level:4},{value:'<code>AccessUpdateInput.<b>password</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputpasswordstring-",level:4},{value:'<code>AccessUpdateInput.<b>updateDescriptiveInfo</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputupdatedescriptiveinfoint-",level:4},{value:'<code>AccessUpdateInput.<b>descriptiveInfoLimit</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputdescriptiveinfolimitint-",level:4},{value:'<code>AccessUpdateInput.<b>isSchedulerActive</b></code><Bullet></Bullet><code>Boolean</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputisscheduleractiveboolean-",level:4},{value:'<code>AccessUpdateInput.<b>updateList</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputupdatelistint-",level:4},{value:'<code>AccessUpdateInput.<b>updateDateRange</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputupdatedaterangestring-",level:4},{value:'<code>AccessUpdateInput.<b>urls</b></code><Bullet></Bullet><code>UrlsInput</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputurlsurlsinput-",level:4},{value:'<code>AccessUpdateInput.<b>ownerCode</b></code><Bullet></Bullet><code>ID</code> <Badge class="badge badge--secondary"></Badge>',id:"accessupdateinputownercodeid-",level:4}];function j(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.p,{children:"No description"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-graphql",children:"input AccessUpdateInput {\n  name: String\n  supplierCode: ID\n  isTest: Boolean\n  isShared: Boolean\n  user: String\n  password: String\n  updateDescriptiveInfo: Int\n  descriptiveInfoLimit: Int\n  isSchedulerActive: Boolean\n  updateList: Int\n  updateDateRange: String\n  urls: UrlsInput\n  ownerCode: ID\n}\n"})}),"\n",(0,c.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputnamestring-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"name"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,c.jsx)(s.code,{children:"String"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Access descriptive unique name"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputsuppliercodeid-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"supplierCode"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,c.jsx)(s.code,{children:"ID"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Supplier code for this Access"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputistestboolean-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"isTest"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,c.jsx)(s.code,{children:"Boolean"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Indicates if Access can be used for testing or not"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputissharedboolean-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"isShared"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,c.jsx)(s.code,{children:"Boolean"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Indicates if Access is shared or not"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputuserstring-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"user"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,c.jsx)(s.code,{children:"String"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"User code to connect to supplier"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputpasswordstring-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"password"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,c.jsx)(s.code,{children:"String"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Password for the connection"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputupdatedescriptiveinfoint-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"updateDescriptiveInfo"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,c.jsx)(s.code,{children:"Int"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Refresh time to update Despriptive Info"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputdescriptiveinfolimitint-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"descriptiveInfoLimit"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,c.jsx)(s.code,{children:"Int"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Limit on DescriptiveInfo; 0 denotates no limit"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputisscheduleractiveboolean-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"isSchedulerActive"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/boolean",children:(0,c.jsx)(s.code,{children:"Boolean"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Indicates if scheduler is active"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputupdatelistint-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"updateList"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/int",children:(0,c.jsx)(s.code,{children:"Int"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Refresh time to update other batch lists"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputupdatedaterangestring-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"updateDateRange"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/string",children:(0,c.jsx)(s.code,{children:"String"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Range on update date"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputurlsurlsinput-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"urls"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/inputs/urls-input",children:(0,c.jsx)(s.code,{children:"UrlsInput"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Specific URLs"}),"\n"]}),"\n",(0,c.jsxs)(s.h4,{id:"accessupdateinputownercodeid-",children:[(0,c.jsx)(s.a,{href:"#",children:(0,c.jsxs)("code",{style:{fontWeight:"normal"},children:["AccessUpdateInput.",(0,c.jsx)("b",{children:"ownerCode"})]})}),(0,c.jsx)(o,{}),(0,c.jsx)(s.a,{href:"/api/types/scalars/id",children:(0,c.jsx)(s.code,{children:"ID"})})," ",(0,c.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:"Owner code for this Access"}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(j,{...e})}):j(e)}},21020:(e,s,n)=>{var c=n(96540),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,s,n){var c,a={},r=null,o=null;for(c in void 0!==n&&(r=""+n),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(o=s.ref),s)d.call(s,c)&&!l.hasOwnProperty(c)&&(a[c]=s[c]);if(e&&e.defaultProps)for(c in s=e.defaultProps)void 0===a[c]&&(a[c]=s[c]);return{$$typeof:t,type:e,key:r,ref:o,props:a,_owner:i.current}}s.Fragment=a,s.jsx=r,s.jsxs=r},74848:(e,s,n)=>{e.exports=n(21020)},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>i});var c=n(96540);const t={},a=c.createContext(t);function d(e){const s=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),c.createElement(a.Provider,{value:s},e.children)}}}]);