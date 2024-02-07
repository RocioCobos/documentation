/*! For license information please see b318c458.0461cdfe.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51616],{50180:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>g,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>n,metadata:()=>r,toc:()=>h});var d=a(17624),c=a(4552),t=a(11504);const n={id:"speed-access",title:"SpeedAccess"},l=void 0,r={id:"objects/speed-access",title:"SpeedAccess",description:"No description",source:"@site/api/objects/speed-access.mdx",sourceDirName:"objects",slug:"/objects/speed-access",permalink:"/api/objects/speed-access",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"speed-access",title:"SpeedAccess"},sidebar:"schemaSidebar",previous:{title:"SpeedAccessEdge",permalink:"/api/objects/speed-access-edge"},next:{title:"SpeedConfiguration",permalink:"/api/objects/speed-configuration"}},o={},i=()=>{const e={span:"span",...(0,c.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const s={a:"a",...(0,c.M)()};return(0,d.jsxs)(d.Fragment,{children:["Specification",(0,d.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const s={span:"span",...(0,c.M)()};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>SpeedAccess.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedaccesscodeid--",level:4},{value:'<code>SpeedAccess.<b>speedAccessData</b></code><Bullet></Bullet><code>SpeedAccessData</code> <Badge class="badge badge--secondary"></Badge>',id:"speedaccessspeedaccessdataspeedaccessdata-",level:4},{value:'<code>SpeedAccess.<b>createdAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedaccesscreatedatdatetime--",level:4},{value:'<code>SpeedAccess.<b>updatedAt</b></code><Bullet></Bullet><code>DateTime!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedaccessupdatedatdatetime--",level:4},{value:'<code>SpeedAccess.<b>adviseMessage</b></code><Bullet></Bullet><code>[AdviseMessage!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedaccessadvisemessageadvisemessage--",level:4},{value:'<code>SpeedAccess.adviseMessage.<b>level</b></code><Bullet></Bullet><code>[AdviseMessageLevel]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"speedaccessadvisemessageleveladvisemessagelevel--",level:5},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:s,children:a,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,c.M)()},[r,o]=(0,t.useState)(n);return(0,d.jsxs)(l.details,{...r?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,d.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:r?e:s}),r&&a]})};function x(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"No description"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-graphql",children:"type SpeedAccess {\n  code: ID!\n  speedAccessData: SpeedAccessData\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  adviseMessage(level: [AdviseMessageLevel]): [AdviseMessage!]\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.h4,{id:"speedaccesscodeid--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccess.",(0,d.jsx)("b",{children:"code"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/scalars/id",children:(0,d.jsx)(s.code,{children:"ID!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"speedaccessspeedaccessdataspeedaccessdata-",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccess.",(0,d.jsx)("b",{children:"speedAccessData"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/objects/speed-access-data",children:(0,d.jsx)(s.code,{children:"SpeedAccessData"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"speedaccesscreatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccess.",(0,d.jsx)("b",{children:"createdAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"speedaccessupdatedatdatetime--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccess.",(0,d.jsx)("b",{children:"updatedAt"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/scalars/date-time",children:(0,d.jsx)(s.code,{children:"DateTime!"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,d.jsx)(s.blockquote,{children:"\n"}),"\n",(0,d.jsxs)(s.h4,{id:"speedaccessadvisemessageadvisemessage--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccess.",(0,d.jsx)("b",{children:"adviseMessage"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,d.jsx)(s.code,{children:"[AdviseMessage!]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.h5,{id:"speedaccessadvisemessageleveladvisemessagelevel--",children:[(0,d.jsx)(s.a,{href:"#",children:(0,d.jsxs)("code",{style:{fontWeight:"normal"},children:["SpeedAccess.adviseMessage.",(0,d.jsx)("b",{children:"level"})]})}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/enums/advise-message-level",children:(0,d.jsx)(s.code,{children:"[AdviseMessageLevel]"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n"]}),"\n",(0,d.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/api/objects/speed-access-edge",children:(0,d.jsx)(s.code,{children:"SpeedAccessEdge"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"}),(0,d.jsx)(i,{}),(0,d.jsx)(s.a,{href:"/api/objects/speed-mutation",children:(0,d.jsx)(s.code,{children:"SpeedMutation"})})," ",(0,d.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,c.M)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},44808:(e,s,a)=>{var d=a(11504),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function o(e,s,a){var d,t={},o=null,i=null;for(d in void 0!==a&&(o=""+a),void 0!==s.key&&(o=""+s.key),void 0!==s.ref&&(i=s.ref),s)n.call(s,d)&&!r.hasOwnProperty(d)&&(t[d]=s[d]);if(e&&e.defaultProps)for(d in s=e.defaultProps)void 0===t[d]&&(t[d]=s[d]);return{$$typeof:c,type:e,key:o,ref:i,props:t,_owner:l.current}}s.Fragment=t,s.jsx=o,s.jsxs=o},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>l,M:()=>n});var d=a(11504);const c={},t=d.createContext(c);function n(e){const s=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),d.createElement(t.Provider,{value:s},e.children)}}}]);