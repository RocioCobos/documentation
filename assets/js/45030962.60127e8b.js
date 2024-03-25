/*! For license information please see 45030962.60127e8b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1066],{44324:(e,s,a)=>{a.r(s),a.d(s,{Badge:()=>b,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>h,assets:()=>r,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=a(17624),n=a(4552),o=a(11504);const l={id:"localities-rs",title:"LocalitiesRs"},c=void 0,i={id:"objects/localities-rs",title:"LocalitiesRs",description:"Represents response data for localities.",source:"@site/api/objects/localities-rs.mdx",sourceDirName:"objects",slug:"/objects/localities-rs",permalink:"/api/objects/localities-rs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"localities-rs",title:"LocalitiesRs"},sidebar:"schemaSidebar",previous:{title:"LengthOfStay",permalink:"/api/objects/length-of-stay"},next:{title:"Location",permalink:"/api/objects/location"}},r={},d=()=>{const e={span:"span",...(0,n.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const s={a:"a",...(0,n.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(s.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const s={span:"span",...(0,n.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.span,{className:e.class,children:e.text})})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>LocalitiesRs.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"localitiesrsadvisemessagesadvisemessage--",level:4},{value:'<code>LocalitiesRs.<b>localities</b></code><Bullet></Bullet><code>[InventoryLocality]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"localitiesrslocalitiesinventorylocality--",level:4},{value:'<code>LocalitiesRs.<b>success</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"localitiesrssuccessboolean--",level:4},{value:"Member Of",id:"member-of",level:3}],x=({dataOpen:e,dataClose:s,children:a,startOpen:l=!1})=>{const c={details:"details",summary:"summary",...(0,n.M)()},[i,r]=(0,o.useState)(l);return(0,t.jsxs)(c.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(c.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:i?e:s}),i&&a]})};function g(e){const s={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Represents response data for localities."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-graphql",children:"type LocalitiesRs {\n  adviseMessages: [AdviseMessage]\n  localities: [InventoryLocality]\n  success: Boolean!\n}\n"})}),"\n",(0,t.jsx)(s.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(s.h4,{id:"localitiesrsadvisemessagesadvisemessage--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["LocalitiesRs.",(0,t.jsx)("b",{children:"adviseMessages"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(s.a,{href:"/api/objects/advise-message",children:(0,t.jsx)(s.code,{children:"[AdviseMessage]"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Collection of advise messages."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"localitiesrslocalitiesinventorylocality--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["LocalitiesRs.",(0,t.jsx)("b",{children:"localities"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(s.a,{href:"/api/objects/inventory-locality",children:(0,t.jsx)(s.code,{children:"[InventoryLocality]"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Collection of localities."}),"\n"]}),"\n",(0,t.jsxs)(s.h4,{id:"localitiesrssuccessboolean--",children:[(0,t.jsx)(s.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["LocalitiesRs.",(0,t.jsx)("b",{children:"success"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(s.a,{href:"/api/scalars/boolean",children:(0,t.jsx)(s.code,{children:"Boolean!"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Indicates whether the response was successful based on the absence of advise messages."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/objects/inventory-mutation",children:(0,t.jsx)(s.code,{children:"InventoryMutation"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(d,{}),(0,t.jsx)(s.a,{href:"/api/objects/inventory-query",children:(0,t.jsx)(s.code,{children:"InventoryQuery"})})," ",(0,t.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},44808:(e,s,a)=>{var t=a(11504),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function r(e,s,a){var t,o={},r=null,d=null;for(t in void 0!==a&&(r=""+a),void 0!==s.key&&(r=""+s.key),void 0!==s.ref&&(d=s.ref),s)l.call(s,t)&&!i.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:n,type:e,key:r,ref:d,props:o,_owner:c.current}}s.Fragment=o,s.jsx=r,s.jsxs=r},17624:(e,s,a)=>{e.exports=a(44808)},4552:(e,s,a)=>{a.d(s,{I:()=>c,M:()=>l});var t=a(11504);const n={},o=t.createContext(n);function l(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);