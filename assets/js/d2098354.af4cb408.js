/*! For license information please see d2098354.af4cb408.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88408],{1578:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>l,Details:()=>x,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var s=n(74848),i=n(28453),o=n(96540);const r={id:"description",title:"Description",hide_table_of_contents:!1},c=void 0,a={id:"objects/description",title:"Description",description:"Object description indicates the type and the description about something.",source:"@site/api/objects/description.mdx",sourceDirName:"objects",slug:"/objects/description",permalink:"/api/objects/description",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"description",title:"Description",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DateShift",permalink:"/api/objects/date-shift"},next:{title:"DestinationConnection",permalink:"/api/objects/destination-connection"}},d={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},p=e=>{const t={a:"a",...(0,i.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,i.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(t.span,{className:e.class,children:e.text})})},x=({dataOpen:e,dataClose:t,children:n,startOpen:r=!1})=>{const c={details:"details",summary:"summary",...(0,i.R)()},[a,d]=(0,o.useState)(r);return(0,s.jsxs)(c.details,{...a?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(c.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:a?e:t}),a&&n]})},u=[{value:"Fields",id:"fields",level:3},{value:'<code>Description.<b>type</b></code><Bullet></Bullet><code>DescriptionType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"descriptiontypedescriptiontype--",level:4},{value:'<code>Description.<b>texts</b></code><Bullet></Bullet><code>[Text!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"descriptiontextstext--",level:4},{value:"Member of",id:"member-of",level:3}];function b(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Object description indicates the type and the description about something."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"type Description {\n  type: DescriptionType!\n  texts: [Text!]\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(t.h4,{id:"descriptiontypedescriptiontype--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Description.",(0,s.jsx)("b",{children:"type"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/api/enums/description-type",children:(0,s.jsx)(t.code,{children:"DescriptionType!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Indicates type of description"}),"\n"]}),"\n",(0,s.jsxs)(t.h4,{id:"descriptiontextstext--",children:[(0,s.jsx)(t.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["Description.",(0,s.jsx)("b",{children:"texts"})]})}),(0,s.jsx)(l,{}),(0,s.jsx)(t.a,{href:"/api/objects/text",children:(0,s.jsx)(t.code,{children:"[Text!]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Label"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/objects/hotel-data",children:(0,s.jsx)(t.code,{children:"HotelData"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},21020:(e,t,n)=>{var s=n(96540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var s,o={},d=null,l=null;for(s in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,s)&&!a.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:c.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);