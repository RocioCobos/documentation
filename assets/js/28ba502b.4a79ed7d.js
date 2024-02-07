/*! For license information please see 28ba502b.4a79ed7d.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41416],{96336:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>l,Details:()=>u,SpecifiedBy:()=>h,assets:()=>c,contentTitle:()=>o,default:()=>j,frontMatter:()=>r,metadata:()=>i,toc:()=>b});var n=a(17624),s=a(4552),d=a(11504);const r={id:"metadata-search-destinations",title:"MetadataSearchDestinations"},o=void 0,i={id:"objects/metadata-search-destinations",title:"MetadataSearchDestinations",description:"Contains information regarding the destinations for Search request.",source:"@site/api/objects/metadata-search-destinations.mdx",sourceDirName:"objects",slug:"/objects/metadata-search-destinations",permalink:"/api/objects/metadata-search-destinations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"metadata-search-destinations",title:"MetadataSearchDestinations"},sidebar:"schemaSidebar",previous:{title:"MetadataRoomCandidates",permalink:"/api/objects/metadata-room-candidates"},next:{title:"MetadataSearch",permalink:"/api/objects/metadata-search"}},c={},l=()=>{const e={span:"span",...(0,s.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const t={a:"a",...(0,s.M)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},m=e=>{const t={span:"span",...(0,s.M)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.span,{className:e.class,children:e.text})})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>MetadataSearchDestinations.<b>maxNumberHotels</b></code><Bullet></Bullet><code>ReviewedInt!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatasearchdestinationsmaxnumberhotelsreviewedint--",level:4},{value:'<code>MetadataSearchDestinations.<b>recommendedNumberHotels</b></code><Bullet></Bullet><code>ReviewedInt!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatasearchdestinationsrecommendednumberhotelsreviewedint--",level:4},{value:'<code>MetadataSearchDestinations.<b>hotelSameDestinationRestriction</b></code><Bullet></Bullet><code>ReviewedBool!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"metadatasearchdestinationshotelsamedestinationrestrictionreviewedbool--",level:4},{value:"Member Of",id:"member-of",level:3}],u=({dataOpen:e,dataClose:t,children:a,startOpen:r=!1})=>{const o={details:"details",summary:"summary",...(0,s.M)()},[i,c]=(0,d.useState)(r);return(0,n.jsxs)(o.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:i?e:t}),i&&a]})};function x(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Contains information regarding the destinations for Search request."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",children:"type MetadataSearchDestinations {\n  maxNumberHotels: ReviewedInt!\n  recommendedNumberHotels: ReviewedInt!\n  hotelSameDestinationRestriction: ReviewedBool!\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.h4,{id:"metadatasearchdestinationsmaxnumberhotelsreviewedint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataSearchDestinations.",(0,n.jsx)("b",{children:"maxNumberHotels"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/objects/reviewed-int",children:(0,n.jsx)(t.code,{children:"ReviewedInt!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Maximum number of hotels that can be requested."}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"metadatasearchdestinationsrecommendednumberhotelsreviewedint--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataSearchDestinations.",(0,n.jsx)("b",{children:"recommendedNumberHotels"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/objects/reviewed-int",children:(0,n.jsx)(t.code,{children:"ReviewedInt!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Recomended number of hotels."}),"\n"]}),"\n",(0,n.jsxs)(t.h4,{id:"metadatasearchdestinationshotelsamedestinationrestrictionreviewedbool--",children:[(0,n.jsx)(t.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["MetadataSearchDestinations.",(0,n.jsx)("b",{children:"hotelSameDestinationRestriction"})]})}),(0,n.jsx)(l,{}),(0,n.jsx)(t.a,{href:"/api/objects/reviewed-bool",children:(0,n.jsx)(t.code,{children:"ReviewedBool!"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"non-null"})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Required all hotels from same destination"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/objects/metadata-search",children:(0,n.jsx)(t.code,{children:"MetadataSearch"})})," ",(0,n.jsx)(m,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},44808:(e,t,a)=>{var n=a(11504),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var n,d={},c=null,l=null;for(n in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,n)&&!i.hasOwnProperty(n)&&(d[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===d[n]&&(d[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:l,props:d,_owner:o.current}}t.Fragment=d,t.jsx=c,t.jsxs=c},17624:(e,t,a)=>{e.exports=a(44808)},4552:(e,t,a)=>{a.d(t,{I:()=>o,M:()=>r});var n=a(11504);const s={},d=n.createContext(s);function r(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);