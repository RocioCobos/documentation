/*! For license information please see 7e9227ea.d1c2b442.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48652],{44028:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>d,Bullet:()=>p,Details:()=>h,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var t=n(17624),a=n(4552),s=n(11504);const l={id:"markup-rule-type",title:"MarkupRuleType"},o=void 0,i={id:"enums/markup-rule-type",title:"MarkupRuleType",description:"Indicates what type of value is the markup, by percentage or is an import.",source:"@site/api/enums/markup-rule-type.mdx",sourceDirName:"enums",slug:"/enums/markup-rule-type",permalink:"/api/enums/markup-rule-type",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"markup-rule-type",title:"MarkupRuleType"},sidebar:"schemaSidebar",previous:{title:"MappingType",permalink:"/api/enums/mapping-type"},next:{title:"MediumType",permalink:"/api/enums/medium-type"}},c={},p=()=>{const e={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,a.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},d=e=>{const r={span:"span",...(0,a.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},m=[{value:"Values",id:"values",level:3},{value:"<code>MarkupRuleType.<b>PERCENT</b></code>",id:"markupruletypepercent",level:4},{value:"<code>MarkupRuleType.<b>IMPORT</b></code>",id:"markupruletypeimport",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:r,children:n,startOpen:l=!1})=>{const o={details:"details",summary:"summary",...(0,a.M)()},[i,c]=(0,s.useState)(l);return(0,t.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:r}),i&&n]})};function y(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Indicates what type of value is the markup, by percentage or is an import."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"enum MarkupRuleType {\n  PERCENT\n  IMPORT\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"values",children:"Values"}),"\n",(0,t.jsx)(r.h4,{id:"markupruletypepercent",children:(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MarkupRuleType.",(0,t.jsx)("b",{children:"PERCENT"})]})})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Indicates the percentage applied by a rule."}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"markupruletypeimport",children:(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["MarkupRuleType.",(0,t.jsx)("b",{children:"IMPORT"})]})})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Indicates the exact amount applied by a rule."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/objects/rule",children:(0,t.jsx)(r.code,{children:"Rule"})})," ",(0,t.jsx)(d,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:r}={...(0,a.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}},44808:(e,r,n)=>{var t=n(11504),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,s={},c=null,p=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)l.call(r,t)&&!i.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:c,ref:p,props:s,_owner:o.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},17624:(e,r,n)=>{e.exports=n(44808)},4552:(e,r,n)=>{n.d(r,{I:()=>o,M:()=>l});var t=n(11504);const a={},s=t.createContext(a);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);