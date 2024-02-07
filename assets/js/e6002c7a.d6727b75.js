/*! For license information please see e6002c7a.d6727b75.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45560],{94312:(e,o,a)=>{a.r(o),a.d(o,{Badge:()=>u,Bullet:()=>d,Details:()=>p,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>y});var t=a(17624),r=a(4552),c=a(11504);const n={id:"social-category-edge",title:"SocialCategoryEdge"},s=void 0,l={id:"objects/social-category-edge",title:"SocialCategoryEdge",description:"No description",source:"@site/api/objects/social-category-edge.mdx",sourceDirName:"objects",slug:"/objects/social-category-edge",permalink:"/api/objects/social-category-edge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"social-category-edge",title:"SocialCategoryEdge"},sidebar:"schemaSidebar",previous:{title:"SocialCategoryData",permalink:"/api/objects/social-category-data"},next:{title:"SocialCategory",permalink:"/api/objects/social-category"}},i={},d=()=>{const e={span:"span",...(0,r.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const o={a:"a",...(0,r.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(o.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const o={span:"span",...(0,r.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.span,{className:e.class,children:e.text})})},y=[{value:"Fields",id:"fields",level:3},{value:'<code>SocialCategoryEdge.<b>node</b></code><Bullet></Bullet><code>SocialCategory</code> <Badge class="badge badge--secondary"></Badge>',id:"socialcategoryedgenodesocialcategory-",level:4},{value:'<code>SocialCategoryEdge.<b>cursor</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"socialcategoryedgecursorstring--",level:4},{value:"Member Of",id:"member-of",level:3}],p=({dataOpen:e,dataClose:o,children:a,startOpen:n=!1})=>{const s={details:"details",summary:"summary",...(0,r.M)()},[l,i]=(0,c.useState)(n);return(0,t.jsxs)(s.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(s.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:l?e:o}),l&&a]})};function h(e){const o={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"No description"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-graphql",children:"type SocialCategoryEdge {\n  node: SocialCategory\n  cursor: String!\n}\n"})}),"\n",(0,t.jsx)(o.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(o.h4,{id:"socialcategoryedgenodesocialcategory-",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialCategoryEdge.",(0,t.jsx)("b",{children:"node"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(o.a,{href:"/api/objects/social-category",children:(0,t.jsx)(o.code,{children:"SocialCategory"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(o.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(o.h4,{id:"socialcategoryedgecursorstring--",children:[(0,t.jsx)(o.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SocialCategoryEdge.",(0,t.jsx)("b",{children:"cursor"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(o.a,{href:"/api/scalars/string",children:(0,t.jsx)(o.code,{children:"String!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(o.blockquote,{children:"\n"}),"\n",(0,t.jsx)(o.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/api/objects/social-category-connection",children:(0,t.jsx)(o.code,{children:"SocialCategoryConnection"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},44808:(e,o,a)=>{var t=a(11504),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,o,a){var t,c={},i=null,d=null;for(t in void 0!==a&&(i=""+a),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(d=o.ref),o)n.call(o,t)&&!l.hasOwnProperty(t)&&(c[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===c[t]&&(c[t]=o[t]);return{$$typeof:r,type:e,key:i,ref:d,props:c,_owner:s.current}}o.Fragment=c,o.jsx=i,o.jsxs=i},17624:(e,o,a)=>{e.exports=a(44808)},4552:(e,o,a)=>{a.d(o,{I:()=>s,M:()=>n});var t=a(11504);const r={},c=t.createContext(r);function n(e){const o=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(c.Provider,{value:o},e.children)}}}]);