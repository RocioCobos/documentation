/*! For license information please see fe9ab1b6.0a1b8195.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8680],{94076:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>b,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>j,assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>n,metadata:()=>c,toc:()=>x});var s=t(17624),d=t(4552),o=t(11504);const n={id:"reviewed-bool",title:"ReviewedBool"},r=void 0,c={id:"objects/reviewed-bool",title:"ReviewedBool",description:"Contain bool value and review date",source:"@site/api/objects/reviewed-bool.mdx",sourceDirName:"objects",slug:"/objects/reviewed-bool",permalink:"/api/objects/reviewed-bool",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"reviewed-bool",title:"ReviewedBool"},sidebar:"schemaSidebar",previous:{title:"ReviewedAgeRanges",permalink:"/api/objects/reviewed-age-ranges"},next:{title:"ReviewedInt",permalink:"/api/objects/reviewed-int"}},l={},i=()=>{const e={span:"span",...(0,d.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},j=e=>{const a={a:"a",...(0,d.M)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},b=e=>{const a={span:"span",...(0,d.M)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},x=[{value:"Fields",id:"fields",level:3},{value:'<code>ReviewedBool.<b>reviewDate</b></code><Bullet></Bullet><code>Date!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewedboolreviewdatedate--",level:4},{value:'<code>ReviewedBool.<b>value</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"reviewedboolvalueboolean--",level:4},{value:"Member Of",id:"member-of",level:3}],h=({dataOpen:e,dataClose:a,children:t,startOpen:n=!1})=>{const r={details:"details",summary:"summary",...(0,d.M)()},[c,l]=(0,o.useState)(n);return(0,s.jsxs)(r.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(r.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:c?e:a}),c&&t]})};function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Contain bool value and review date"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type ReviewedBool {\n  reviewDate: Date!\n  value: Boolean!\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"reviewedboolreviewdatedate--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ReviewedBool.",(0,s.jsx)("b",{children:"reviewDate"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/scalars/date",children:(0,s.jsx)(a.code,{children:"Date!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Last reviewed date"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"reviewedboolvalueboolean--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["ReviewedBool.",(0,s.jsx)("b",{children:"value"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/scalars/boolean",children:(0,s.jsx)(a.code,{children:"Boolean!"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/objects/metadata-amend-board",children:(0,s.jsx)(a.code,{children:"MetadataAmendBoard"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-amend-dates",children:(0,s.jsx)(a.code,{children:"MetadataAmendDates"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-amend-paxes",children:(0,s.jsx)(a.code,{children:"MetadataAmendPaxes"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-amend-remarks",children:(0,s.jsx)(a.code,{children:"MetadataAmendRemarks"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-beds",children:(0,s.jsx)(a.code,{children:"MetadataBeds"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-book",children:(0,s.jsx)(a.code,{children:"MetadataBook"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-booking",children:(0,s.jsx)(a.code,{children:"MetadataBooking"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-cancel",children:(0,s.jsx)(a.code,{children:"MetadataCancel"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-quote",children:(0,s.jsx)(a.code,{children:"MetadataQuote"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-search",children:(0,s.jsx)(a.code,{children:"MetadataSearch"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/metadata-search-destinations",children:(0,s.jsx)(a.code,{children:"MetadataSearchDestinations"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/objects/required-room-with-same-pax-configuration",children:(0,s.jsx)(a.code,{children:"RequiredRoomWithSamePaxConfiguration"})})," ",(0,s.jsx)(b,{class:"badge badge--secondary",text:"object"})]})]})}function g(e={}){const{wrapper:a}={...(0,d.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},44808:(e,a,t)=>{var s=t(11504),d=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,t){var s,o={},l=null,i=null;for(s in void 0!==t&&(l=""+t),void 0!==a.key&&(l=""+a.key),void 0!==a.ref&&(i=a.ref),a)n.call(a,s)&&!c.hasOwnProperty(s)&&(o[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===o[s]&&(o[s]=a[s]);return{$$typeof:d,type:e,key:l,ref:i,props:o,_owner:r.current}}a.Fragment=o,a.jsx=l,a.jsxs=l},17624:(e,a,t)=>{e.exports=t(44808)},4552:(e,a,t)=>{t.d(a,{I:()=>r,M:()=>n});var s=t(11504);const d={},o=s.createContext(d);function n(e){const a=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(o.Provider,{value:a},e.children)}}}]);