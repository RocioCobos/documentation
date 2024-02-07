/*! For license information please see d25fa54d.37ecb279.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61800],{64236:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>h,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>v});var a=n(17624),i=n(4552),o=n(11504);const c={id:"activation-query",title:"ActivationQuery"},r=void 0,s={id:"objects/activation-query",title:"ActivationQuery",description:"No description",source:"@site/api/objects/activation-query.mdx",sourceDirName:"objects",slug:"/objects/activation-query",permalink:"/api/objects/activation-query",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"activation-query",title:"ActivationQuery"},sidebar:"schemaSidebar",previous:{title:"ActivationMutation",permalink:"/api/objects/activation-mutation"},next:{title:"Activation",permalink:"/api/objects/activation"}},d={},l=()=>{const e={span:"span",...(0,i.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,i.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const t={span:"span",...(0,i.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},v=[{value:"Fields",id:"fields",level:3},{value:'<code>ActivationQuery.<b>activations</b></code><Bullet></Bullet><code>ActivationConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationqueryactivationsactivationconnection--",level:4},{value:'<code>ActivationQuery.activations.<b>data</b></code><Bullet></Bullet><code>ActivationReadInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"activationqueryactivationsdataactivationreadinput--",level:5},{value:"Returned by",id:"returned-by",level:3}],h=({dataOpen:e,dataClose:t,children:n,startOpen:c=!1})=>{const r={details:"details",summary:"summary",...(0,i.M)()},[s,d]=(0,o.useState)(c);return(0,a.jsxs)(r.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})};function y(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"No description"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"type ActivationQuery {\n  activations(data: ActivationReadInput!): ActivationConnection!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"activationqueryactivationsactivationconnection--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationQuery.",(0,a.jsx)("b",{children:"activations"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/objects/activation-connection",children:(0,a.jsx)(t.code,{children:"ActivationConnection!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.h5,{id:"activationqueryactivationsdataactivationreadinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["ActivationQuery.activations.",(0,a.jsx)("b",{children:"data"})]})}),(0,a.jsx)(l,{}),(0,a.jsx)(t.a,{href:"/api/inputs/activation-read-input",children:(0,a.jsx)(t.code,{children:"ActivationReadInput!"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/api/queries/activation",children:(0,a.jsx)(t.code,{children:"activation"})})," ",(0,a.jsx)(p,{class:"badge badge--secondary",text:"query"})]})]})}function x(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}},44808:(e,t,n)=>{var a=n(11504),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var a,o={},d=null,l=null;for(a in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,a)&&!s.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:r.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>c});var a=n(11504);const i={},o=a.createContext(i);function c(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);