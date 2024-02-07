/*! For license information please see a1649da5.bbb77529.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85372],{96304:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>g,Bullet:()=>i,Details:()=>x,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>b});var l=t(17624),r=t(4552),n=t(11504);const d={id:"alert-data",title:"AlertData"},s=void 0,c={id:"objects/alert-data",title:"AlertData",description:"No description",source:"@site/api/objects/alert-data.mdx",sourceDirName:"objects",slug:"/objects/alert-data",permalink:"/api/objects/alert-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"alert-data",title:"AlertData"},sidebar:"schemaSidebar",previous:{title:"AlertConnection",permalink:"/api/objects/alert-connection"},next:{title:"AlertEdge",permalink:"/api/objects/alert-edge"}},o={},i=()=>{const e={span:"span",...(0,r.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const a={a:"a",...(0,r.M)()};return(0,l.jsxs)(l.Fragment,{children:["Specification",(0,l.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,r.M)()};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(a.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>AlertData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertdatacodeid--",level:4},{value:'<code>AlertData.<b>name</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alertdatanamestring-",level:4},{value:'<code>AlertData.<b>description</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"alertdatadescriptionstring-",level:4},{value:'<code>AlertData.<b>configuration</b></code><Bullet></Bullet><code>AlertConfiguration!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertdataconfigurationalertconfiguration--",level:4},{value:'<code>AlertData.<b>isActive</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertdataisactiveboolean--",level:4},{value:'<code>AlertData.<b>history</b></code><Bullet></Bullet><code>AlertConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertdatahistoryalertconnection--",level:4},{value:'<code>AlertData.history.<b>relay</b></code><Bullet></Bullet><code>RelayInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertdatahistoryrelayrelayinput-",level:5},{value:'<code>AlertData.history.<b>filter</b></code><Bullet></Bullet><code>AlertFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertdatahistoryfilteralertfilterinput-",level:5},{value:'<code>AlertData.<b>editor</b></code><Bullet></Bullet><code>Member!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertdataeditormember--",level:4},{value:'<code>AlertData.<b>events</b></code><Bullet></Bullet><code>AlertEventConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertdataeventsalerteventconnection--",level:4},{value:'<code>AlertData.events.<b>relay</b></code><Bullet></Bullet><code>RelayInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertdataeventsrelayrelayinput-",level:5},{value:'<code>AlertData.events.<b>filter</b></code><Bullet></Bullet><code>AlertFilterInput</code> <Badge class="badge badge--secondary"></Badge>',id:"alertdataeventsfilteralertfilterinput-",level:5},{value:'<code>AlertData.<b>group</b></code><Bullet></Bullet><code>Group!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"alertdatagroupgroup--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:a,children:t,startOpen:d=!1})=>{const s={details:"details",summary:"summary",...(0,r.M)()},[c,o]=(0,n.useState)(d);return(0,l.jsxs)(s.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,l.jsx)(s.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&t]})};function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.p,{children:"No description"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-graphql",children:"type AlertData {\n  code: ID!\n  name: String\n  description: String\n  configuration: AlertConfiguration!\n  isActive: Boolean!\n  history(relay: RelayInput, filter: AlertFilterInput): AlertConnection!\n  editor: Member!\n  events(relay: RelayInput, filter: AlertFilterInput): AlertEventConnection!\n  group: Group!\n}\n"})}),"\n",(0,l.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(a.h4,{id:"alertdatacodeid--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.",(0,l.jsx)("b",{children:"code"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/scalars/id",children:(0,l.jsx)(a.code,{children:"ID!"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsx)(a.blockquote,{children:"\n"}),"\n",(0,l.jsxs)(a.h4,{id:"alertdatanamestring-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.",(0,l.jsx)("b",{children:"name"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/scalars/string",children:(0,l.jsx)(a.code,{children:"String"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Alert name"}),"\n"]}),"\n",(0,l.jsxs)(a.h4,{id:"alertdatadescriptionstring-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.",(0,l.jsx)("b",{children:"description"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/scalars/string",children:(0,l.jsx)(a.code,{children:"String"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Alert description"}),"\n"]}),"\n",(0,l.jsxs)(a.h4,{id:"alertdataconfigurationalertconfiguration--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.",(0,l.jsx)("b",{children:"configuration"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/objects/alert-configuration",children:(0,l.jsx)(a.code,{children:"AlertConfiguration!"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Alert configuration"}),"\n"]}),"\n",(0,l.jsxs)(a.h4,{id:"alertdataisactiveboolean--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.",(0,l.jsx)("b",{children:"isActive"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/scalars/boolean",children:(0,l.jsx)(a.code,{children:"Boolean!"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Indicates if the alert is being checked by the service."}),"\n"]}),"\n",(0,l.jsxs)(a.h4,{id:"alertdatahistoryalertconnection--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.",(0,l.jsx)("b",{children:"history"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/objects/alert-connection",children:(0,l.jsx)(a.code,{children:"AlertConnection!"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Records of each update made of the alert"}),"\n",(0,l.jsxs)(a.h5,{id:"alertdatahistoryrelayrelayinput-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.history.",(0,l.jsx)("b",{children:"relay"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/inputs/relay-input",children:(0,l.jsx)(a.code,{children:"RelayInput"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,l.jsxs)(a.h5,{id:"alertdatahistoryfilteralertfilterinput-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.history.",(0,l.jsx)("b",{children:"filter"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/inputs/alert-filter-input",children:(0,l.jsx)(a.code,{children:"AlertFilterInput"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsx)(a.blockquote,{children:"\n"}),"\n",(0,l.jsxs)(a.h4,{id:"alertdataeditormember--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.",(0,l.jsx)("b",{children:"editor"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/objects/member",children:(0,l.jsx)(a.code,{children:"Member!"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Member has edit the actual alert data"}),"\n"]}),"\n",(0,l.jsxs)(a.h4,{id:"alertdataeventsalerteventconnection--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.",(0,l.jsx)("b",{children:"events"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/objects/alert-event-connection",children:(0,l.jsx)(a.code,{children:"AlertEventConnection!"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Records of the last 10 events triggered"}),"\n",(0,l.jsxs)(a.h5,{id:"alertdataeventsrelayrelayinput-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.events.",(0,l.jsx)("b",{children:"relay"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/inputs/relay-input",children:(0,l.jsx)(a.code,{children:"RelayInput"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,l.jsxs)(a.h5,{id:"alertdataeventsfilteralertfilterinput-",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.events.",(0,l.jsx)("b",{children:"filter"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/inputs/alert-filter-input",children:(0,l.jsx)(a.code,{children:"AlertFilterInput"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,l.jsx)(a.blockquote,{children:"\n"}),"\n",(0,l.jsxs)(a.h4,{id:"alertdatagroupgroup--",children:[(0,l.jsx)(a.a,{href:"#",children:(0,l.jsxs)("code",{style:{fontWeight:"normal"},children:["AlertData.",(0,l.jsx)("b",{children:"group"})]})}),(0,l.jsx)(i,{}),(0,l.jsx)(a.a,{href:"/api/objects/group",children:(0,l.jsx)(a.code,{children:"Group!"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"non-null"})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,l.jsxs)(a.blockquote,{children:["\n",(0,l.jsx)(a.p,{children:"Group where the alert is saved"}),"\n"]}),"\n",(0,l.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.a,{href:"/api/objects/alert",children:(0,l.jsx)(a.code,{children:"Alert"})})," ",(0,l.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function u(e={}){const{wrapper:a}={...(0,r.M)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}},44808:(e,a,t)=>{var l=t(11504),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,s=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,a,t){var l,n={},o=null,i=null;for(l in void 0!==t&&(o=""+t),void 0!==a.key&&(o=""+a.key),void 0!==a.ref&&(i=a.ref),a)d.call(a,l)&&!c.hasOwnProperty(l)&&(n[l]=a[l]);if(e&&e.defaultProps)for(l in a=e.defaultProps)void 0===n[l]&&(n[l]=a[l]);return{$$typeof:r,type:e,key:o,ref:i,props:n,_owner:s.current}}a.Fragment=n,a.jsx=o,a.jsxs=o},17624:(e,a,t)=>{e.exports=t(44808)},4552:(e,a,t)=>{t.d(a,{I:()=>s,M:()=>d});var l=t(11504);const r={},n=l.createContext(r);function d(e){const a=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(n.Provider,{value:a},e.children)}}}]);